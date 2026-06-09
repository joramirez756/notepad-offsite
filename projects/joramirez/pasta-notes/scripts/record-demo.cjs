// Demo recording script - launches the app, interacts with it, and records a video
// Uses Playwright for browser automation + FFmpeg for screen recording

const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'demo');
const VIDEO_FILE = path.join(OUTPUT_DIR, 'pasta-notes-demo.mp4');
const DEV_SERVER_URL = 'http://localhost:5173';

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function recordDemo() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('🎬 Starting demo recording...');
  console.log('📁 Output:', VIDEO_FILE);

  // Launch browser (visible window so FFmpeg can capture)
  const browser = await chromium.launch({
    headless: false,
    args: ['--window-size=1280,720', '--window-position=100,100'],
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: {
      dir: OUTPUT_DIR,
      size: { width: 1280, height: 720 },
    },
  });

  const page = await context.newPage();

  // Start FFmpeg screen capture
  console.log('📹 Starting FFmpeg screen capture...');
  const ffmpeg = spawn('ffmpeg', [
    '-y',
    '-f', 'gdigrab',
    '-framerate', '30',
    '-offset_x', '100',
    '-offset_y', '100',
    '-video_size', '1280x720',
    '-i', 'desktop',
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-pix_fmt', 'yuv420p',
    VIDEO_FILE,
  ], { stdio: ['pipe', 'pipe', 'pipe'] });

  await sleep(1000);

  try {
    console.log('🌐 Opening Pasta Notes...');
    await page.goto(DEV_SERVER_URL);
    await sleep(2000);

    // Create a note
    console.log('📝 Creating a note...');
    const createBtn = page.locator('.btn-create-first');
    if (await createBtn.isVisible()) {
      await createBtn.click();
      await sleep(1000);
    }

    // Type content
    console.log('✍️ Typing content...');
    const editor = page.locator('.tiptap');
    await editor.click();
    await editor.type('Welcome to Pasta Notes! 🍝', { delay: 50 });
    await sleep(500);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    await editor.type('This is your friendly pasta-powered note-taking app.', { delay: 30 });
    await sleep(1000);

    // Bold some text
    console.log('🔤 Formatting text...');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    const boldBtn = page.locator('.toolbar-btn').filter({ hasText: 'B' }).first();
    await boldBtn.click();
    await editor.type('Bold pasta power!', { delay: 40 });
    await boldBtn.click();
    await sleep(1000);

    // Interact with sprite
    console.log('🍝 Interacting with sprite...');
    const sprite = page.locator('.sprite-body');
    if (await sprite.isVisible()) {
      await sprite.click();
      await sleep(2000);

      await sprite.click({ button: 'right' });
      await sleep(1000);

      const sauceBtn = page.locator('.sprite-menu button').filter({ hasText: 'Throw Sauce' });
      if (await sauceBtn.isVisible()) {
        await sauceBtn.click();
        await sleep(2000);
      }
    }

    // Start Pomodoro
    console.log('🍅 Starting Pomodoro timer...');
    const startBtn = page.locator('.btn-pomodoro.start');
    if (await startBtn.isVisible()) {
      await startBtn.click();
      await sleep(3000);
    }

    console.log('📸 Final showcase...');
    await sleep(2000);

  } catch (error) {
    console.error('Error during demo:', error.message);
  }

  // Stop FFmpeg
  console.log('⏹️ Stopping recording...');
  ffmpeg.stdin.write('q');
  await sleep(2000);
  ffmpeg.kill();

  // Close browser (also saves Playwright video)
  await context.close();
  await browser.close();

  console.log(`\n✅ Demo recorded to: ${VIDEO_FILE}`);
}

recordDemo().catch(console.error);
