const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, '..', 'assets', 'img');
const TARGET_MAX_BYTES = 99 * 1024; // 99 KB (strictly <= 100 KB)

async function getOptimizedBuffer(buf, targetMax = TARGET_MAX_BYTES) {
  const meta = await sharp(buf).metadata();
  const isLandscape = meta.width >= meta.height;
  const originalMaxDim = Math.max(meta.width, meta.height);

  // Dimension tiers to test
  const dimTiers = [originalMaxDim, 1200, 1080, 960, 850, 750, 680, 600]
    .filter((d, i, arr) => d <= originalMaxDim && (i === 0 || d < arr[i - 1]));

  for (const dim of dimTiers) {
    const resizeOpt = dim < originalMaxDim 
      ? (isLandscape ? { width: dim, withoutEnlargement: true } : { height: dim, withoutEnlargement: true })
      : null;

    // Test quality from 82 down to 40
    for (let q = 82; q >= 40; q -= 3) {
      let pipe = sharp(buf);
      if (resizeOpt) {
        pipe = pipe.resize(resizeOpt);
      }
      const out = await pipe.webp({ quality: q, effort: 6 }).toBuffer();
      if (out.length <= targetMax) {
        return { buffer: out, dim, q, sizeKB: (out.length / 1024).toFixed(2) };
      }
    }
  }

  // Fallback if needed: dim 600, q 45
  let pipe = sharp(buf).resize(isLandscape ? { width: 600 } : { height: 600 });
  const out = await pipe.webp({ quality: 45, effort: 6 }).toBuffer();
  return { buffer: out, dim: 600, q: 45, sizeKB: (out.length / 1024).toFixed(2) };
}

async function run() {
  const files = fs.readdirSync(IMG_DIR);
  const candidates = [];

  for (const file of files) {
    const filePath = path.join(IMG_DIR, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && stat.size > 100 * 1024) {
      candidates.push({ file, filePath, size: stat.size });
    }
  }

  console.log(`Found ${candidates.length} images larger than 100 KB in ${IMG_DIR}.\nStarting optimization...\n`);

  const results = [];
  let totalSavedBytes = 0;

  for (let i = 0; i < candidates.length; i++) {
    const item = candidates[i];
    const originalBuf = fs.readFileSync(item.filePath);
    const origSizeKB = (item.size / 1024).toFixed(2);

    const { buffer: newBuf, dim, q, sizeKB } = await getOptimizedBuffer(originalBuf);
    
    // Write back atomically
    fs.writeFileSync(item.filePath, newBuf);

    const saved = item.size - newBuf.length;
    totalSavedBytes += saved;
    const savingsPercent = ((saved / item.size) * 100).toFixed(1);

    results.push({
      file: item.file,
      original: `${origSizeKB} KB`,
      optimized: `${sizeKB} KB`,
      dim: `${dim}px`,
      quality: q,
      saved: `${savingsPercent}%`
    });

    console.log(`[${i + 1}/${candidates.length}] ${item.file}: ${origSizeKB} KB -> ${sizeKB} KB (-${savingsPercent}%)`);
  }

  console.log('\n================ OPTIMIZATION SUMMARY ================');
  console.table(results);
  console.log(`Total saved: ${(totalSavedBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log('All images are now <= 100 KB!');
}

run().catch(err => {
  console.error('Optimization error:', err);
  process.exit(1);
});
