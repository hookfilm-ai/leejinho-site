const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const mode = process.argv[2] || 'preview';
  const outDir = process.argv[3] || path.join(__dirname, 'out');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ args: ['--font-render-hinting=none', '--force-color-profile=srgb'] });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'scene.html'));
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });

  const total = await page.evaluate(() => window.__total);
  const fps = await page.evaluate(() => window.__fps);
  console.log('total', total, 'fps', fps);

  if (mode === 'preview') {
    const times = process.argv.slice(4).map(Number);
    for (const t of times) {
      await page.evaluate(t => window.__render(t), t);
      await page.screenshot({ path: path.join(outDir, `p${t}.png`) });
    }
  } else {
    const { spawn } = require('child_process');
    const out = path.join(outDir, 'format-principle.mp4');
    const ff = spawn('ffmpeg', [
      '-y', '-loglevel', 'error',
      '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '18',
      '-pix_fmt', 'yuv420p', '-r', String(fps),
      '-movflags', '+faststart', out
    ]);
    ff.stderr.on('data', d => process.stderr.write(d));
    const done = new Promise(res => ff.on('close', res));

    const n = Math.round(total * fps);
    for (let i = 0; i < n; i++) {
      await page.evaluate(t => window.__render(t), i / fps);
      const buf = await page.screenshot({ type: 'jpeg', quality: 96 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 90 === 0) console.log(i + '/' + n);
    }
    ff.stdin.end();
    const code = await done;
    console.log('frames', n, 'ffmpeg exit', code, '->', out);
  }
  await browser.close();
})();
