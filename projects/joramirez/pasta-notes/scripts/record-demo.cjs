// Demo recording script - launches the app, interacts with it, and records videos
// Uses Playwright for browser automation with context-level video recording
// Records multiple scenarios covering all features

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'demo');
const DEV_SERVER_URL = 'http://localhost:5173';

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createRecordingContext(browser, scenarioName) {
  const videoDir = path.join(OUTPUT_DIR, 'raw');
  fs.mkdirSync(videoDir, { recursive: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: {
      dir: videoDir,
      size: { width: 1280, height: 720 },
    },
  });
  const page = await context.newPage();
  return { context, page };
}

async function finishRecording(context, page, outputName) {
  await page.close();
  await context.close();
  // Playwright saves the video when context closes
  // Rename the last video file in raw/ to the desired name
  const rawDir = path.join(OUTPUT_DIR, 'raw');
  const files = fs.readdirSync(rawDir).filter(f => f.endsWith('.webm')).sort((a, b) => {
    return fs.statSync(path.join(rawDir, b)).mtimeMs - fs.statSync(path.join(rawDir, a)).mtimeMs;
  });
  if (files.length > 0) {
    const src = path.join(rawDir, files[0]);
    const dest = path.join(OUTPUT_DIR, `${outputName}.webm`);
    fs.renameSync(src, dest);
    console.log(`  ✅ Saved: docs/demo/${outputName}.webm`);
  }
}

// Scenario 1: Editor features (formatting, fonts, colors, tables)
async function recordEditorFeatures(browser) {
  console.log('\n🎬 Recording: Editor Features');
  const { context, page } = await createRecordingContext(browser, 'editor-features');
  
  await page.goto(DEV_SERVER_URL);
  await sleep(2000);

  // Create a note
  const createBtn = page.locator('.btn-create-first');
  if (await createBtn.isVisible()) {
    await createBtn.click();
    await sleep(1000);
  }

  const editor = page.locator('.tiptap');
  await editor.click();
  await sleep(500);

  // Type and format text
  await editor.type('Editor Features Demo', { delay: 40 });
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');

  // Bold
  await page.keyboard.down('Control');
  await page.keyboard.press('b');
  await page.keyboard.up('Control');
  await editor.type('This text is bold!', { delay: 30 });
  await page.keyboard.down('Control');
  await page.keyboard.press('b');
  await page.keyboard.up('Control');
  await sleep(500);

  await page.keyboard.press('Enter');

  // Italic
  await page.keyboard.down('Control');
  await page.keyboard.press('i');
  await page.keyboard.up('Control');
  await editor.type('This text is italic!', { delay: 30 });
  await page.keyboard.down('Control');
  await page.keyboard.press('i');
  await page.keyboard.up('Control');
  await sleep(500);

  await page.keyboard.press('Enter');

  // Underline
  await page.keyboard.down('Control');
  await page.keyboard.press('u');
  await page.keyboard.up('Control');
  await editor.type('This text is underlined!', { delay: 30 });
  await page.keyboard.down('Control');
  await page.keyboard.press('u');
  await page.keyboard.up('Control');
  await sleep(500);

  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await editor.type('Let me try changing colors and highlighting...', { delay: 30 });
  await sleep(1000);

  // Try toolbar buttons for color
  const colorBtns = page.locator('.toolbar-btn');
  const toolbarCount = await colorBtns.count();
  if (toolbarCount > 3) {
    await colorBtns.nth(5).click(); // click a toolbar option
    await sleep(500);
  }

  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await editor.type('Testing table insertion...', { delay: 30 });
  await sleep(1000);

  // Try to insert a table via toolbar
  const tableBtn = page.locator('.toolbar-btn').filter({ hasText: /table/i });
  if (await tableBtn.count() > 0) {
    await tableBtn.first().click();
    await sleep(1500);
  }

  await sleep(2000);
  await finishRecording(context, page, 'editor-features');
}

// Scenario 2: Sprite interactions (clicking, sauce, pull noodle, change sprite)
async function recordSpriteInteractions(browser) {
  console.log('\n🎬 Recording: Sprite Interactions');
  const { context, page } = await createRecordingContext(browser, 'sprite-interactions');

  await page.goto(DEV_SERVER_URL);
  await sleep(2000);

  // Click on sprite
  const sprite = page.locator('.sprite-body');
  if (await sprite.isVisible()) {
    console.log('  👆 Clicking sprite...');
    await sprite.click();
    await sleep(2500);

    // Right-click for context menu
    console.log('  🖱️ Opening sprite menu...');
    await sprite.click({ button: 'right' });
    await sleep(1500);

    // Throw sauce
    const sauceBtn = page.locator('.sprite-menu button').filter({ hasText: /sauce/i });
    if (await sauceBtn.count() > 0) {
      console.log('  🍅 Throwing sauce...');
      await sauceBtn.first().click();
      await sleep(2000);
    }

    // Right-click again for more options
    await sprite.click({ button: 'right' });
    await sleep(1000);

    // Pull noodle
    const noodleBtn = page.locator('.sprite-menu button').filter({ hasText: /noodle|pull/i });
    if (await noodleBtn.count() > 0) {
      console.log('  🍝 Pulling noodle...');
      await noodleBtn.first().click();
      await sleep(2000);
    }

    // Right-click - change sprite
    await sprite.click({ button: 'right' });
    await sleep(1000);
    const changeBtn = page.locator('.sprite-menu button').filter({ hasText: /change|switch/i });
    if (await changeBtn.count() > 0) {
      console.log('  🔄 Changing sprite...');
      await changeBtn.first().click();
      await sleep(2000);
    }

    // Try throwing sauce multiple times to show stains
    for (let i = 0; i < 3; i++) {
      await sprite.click({ button: 'right' });
      await sleep(500);
      const sauce2 = page.locator('.sprite-menu button').filter({ hasText: /sauce/i });
      if (await sauce2.count() > 0) {
        await sauce2.first().click();
        await sleep(1000);
      }
    }

    // Clean stains
    await sprite.click({ button: 'right' });
    await sleep(1000);
    const cleanBtn = page.locator('.sprite-menu button').filter({ hasText: /clean/i });
    if (await cleanBtn.count() > 0) {
      console.log('  🧹 Cleaning stains...');
      await cleanBtn.first().click();
      await sleep(2000);
    }
  }

  await sleep(1000);
  await finishRecording(context, page, 'sprite-interactions');
}

// Scenario 3: Pomodoro timer and escalating break reminders
async function recordPomodoroEscalation(browser) {
  console.log('\n🎬 Recording: Pomodoro Escalation');
  const { context, page } = await createRecordingContext(browser, 'pomodoro-escalation');

  await page.goto(DEV_SERVER_URL);
  await sleep(2000);

  // Inject short timer via localStorage so breaks come fast
  await page.evaluate(() => {
    const settings = JSON.parse(localStorage.getItem('pasta-notes-settings') || '{}');
    settings.pomodoroLength = 0.1; // 6 seconds for demo
    settings.breakLength = 0.1;
    localStorage.setItem('pasta-notes-settings', JSON.stringify(settings));
  });
  await page.reload();
  await sleep(2000);

  // Start timer
  console.log('  🍅 Starting short timer to trigger breaks...');
  const startBtn = page.locator('.btn-pomodoro.start, button').filter({ hasText: /start/i });
  if (await startBtn.count() > 0) {
    await startBtn.first().click();
  }

  // Wait for break prompts and ignore them multiple times
  for (let level = 0; level < 5; level++) {
    console.log(`  ⏰ Waiting for break prompt (level ${level})...`);
    await sleep(8000); // Wait for timer to expire

    // Look for ignore button
    const ignoreBtn = page.locator('button').filter({ hasText: /ignore|continue|dismiss|skip/i });
    if (await ignoreBtn.count() > 0) {
      console.log(`  ❌ Ignoring break (level ${level})...`);
      await ignoreBtn.first().click();
      await sleep(2000);
    } else {
      // Maybe the break prompt is shown differently
      await sleep(3000);
    }
  }

  // Finally take a break
  const takeBreakBtn = page.locator('button').filter({ hasText: /take.*break|break/i });
  if (await takeBreakBtn.count() > 0) {
    console.log('  ✅ Taking a break...');
    await takeBreakBtn.first().click();
    await sleep(3000);
  }

  await sleep(2000);

  // Reset timer settings
  await page.evaluate(() => {
    const settings = JSON.parse(localStorage.getItem('pasta-notes-settings') || '{}');
    settings.pomodoroLength = 25;
    settings.breakLength = 5;
    localStorage.setItem('pasta-notes-settings', JSON.stringify(settings));
  });

  await finishRecording(context, page, 'pomodoro-escalation');
}

// Scenario 4: Configurable timer with mockery for extreme values
async function recordTimerMockery(browser) {
  console.log('\n🎬 Recording: Timer Mockery');
  const { context, page } = await createRecordingContext(browser, 'timer-mockery');

  await page.goto(DEV_SERVER_URL);
  await sleep(2000);

  // Open settings
  console.log('  ⚙️ Opening settings...');
  const settingsBtn = page.locator('.btn-settings, button').filter({ hasText: '⚙️' });
  if (await settingsBtn.count() > 0) {
    await settingsBtn.first().click();
    await sleep(1500);
  }

  // Set work time too short (1 minute)
  console.log('  📉 Setting work time too short...');
  const workInput = page.locator('input[type="number"]').first();
  if (await workInput.isVisible()) {
    await workInput.fill('1');
    await sleep(500);
  }

  // Save to trigger mockery
  const saveBtn = page.locator('button').filter({ hasText: /save/i });
  if (await saveBtn.count() > 0) {
    await saveBtn.first().click();
    await sleep(3000); // Show mockery dialogue
  }

  // Open settings again - set work time too long
  if (await settingsBtn.count() > 0) {
    await settingsBtn.first().click();
    await sleep(1500);
  }
  console.log('  📈 Setting work time too long...');
  if (await workInput.isVisible()) {
    await workInput.fill('200');
    await sleep(500);
  }
  if (await saveBtn.count() > 0) {
    await saveBtn.first().click();
    await sleep(3000);
  }

  // Open settings again - set break time too short
  if (await settingsBtn.count() > 0) {
    await settingsBtn.first().click();
    await sleep(1500);
  }
  console.log('  📉 Setting break time too short...');
  const breakInput = page.locator('input[type="number"]').nth(1);
  if (await workInput.isVisible()) {
    await workInput.fill('25'); // reset work to normal
  }
  if (await breakInput.isVisible()) {
    await breakInput.fill('1');
    await sleep(500);
  }
  if (await saveBtn.count() > 0) {
    await saveBtn.first().click();
    await sleep(3000);
  }

  // Open settings again - set break time too long
  if (await settingsBtn.count() > 0) {
    await settingsBtn.first().click();
    await sleep(1500);
  }
  console.log('  📈 Setting break time too long...');
  if (await breakInput.isVisible()) {
    await breakInput.fill('60');
    await sleep(500);
  }
  if (await saveBtn.count() > 0) {
    await saveBtn.first().click();
    await sleep(3000);
  }

  // Set reasonable values - "just right"
  if (await settingsBtn.count() > 0) {
    await settingsBtn.first().click();
    await sleep(1500);
  }
  console.log('  ✅ Setting reasonable values...');
  if (await workInput.isVisible()) await workInput.fill('25');
  if (await breakInput.isVisible()) await breakInput.fill('5');
  if (await saveBtn.count() > 0) {
    await saveBtn.first().click();
    await sleep(3000);
  }

  await finishRecording(context, page, 'timer-mockery');
}

// Scenario 5: Note management (creating, organizing, switching sections)
async function recordNoteManagement(browser) {
  console.log('\n🎬 Recording: Note Management');
  const { context, page } = await createRecordingContext(browser, 'note-management');

  await page.goto(DEV_SERVER_URL);
  await sleep(2000);

  // Create first note
  const createBtn = page.locator('.btn-create-first, button').filter({ hasText: /create/i });
  if (await createBtn.count() > 0) {
    await createBtn.first().click();
    await sleep(1000);
  }

  const editor = page.locator('.tiptap');
  if (await editor.isVisible()) {
    await editor.click();
    await editor.type('My First Study Note - Biology Chapter 1', { delay: 30 });
    await page.keyboard.press('Enter');
    await editor.type('The mitochondria is the powerhouse of the cell.', { delay: 20 });
    await sleep(1000);
  }

  // Create another note in sidebar
  console.log('  📝 Creating multiple notes...');
  const sidebarCreate = page.locator('.sidebar button').filter({ hasText: /new|add|\+/i });
  if (await sidebarCreate.count() > 0) {
    await sidebarCreate.first().click();
    await sleep(1000);
  }

  if (await editor.isVisible()) {
    await editor.click();
    await editor.type('Math Notes - Calculus', { delay: 30 });
    await page.keyboard.press('Enter');
    await editor.type('Derivatives and integrals are inverse operations.', { delay: 20 });
    await sleep(1000);
  }

  // Create a section
  const sectionBtn = page.locator('button').filter({ hasText: /section|folder/i });
  if (await sectionBtn.count() > 0) {
    await sectionBtn.first().click();
    await sleep(1500);
  }

  // Switch between notes
  console.log('  🔄 Switching between notes...');
  const noteItems = page.locator('.note-item, .sidebar-note');
  const noteCount = await noteItems.count();
  for (let i = 0; i < Math.min(noteCount, 3); i++) {
    await noteItems.nth(i).click();
    await sleep(1500);
  }

  await sleep(2000);
  await finishRecording(context, page, 'note-management');
}

// Main execution
async function recordAllDemos() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(OUTPUT_DIR, 'raw'), { recursive: true });

  console.log('🎬 Pasta Notes - Recording All Demo Videos');
  console.log('==========================================');
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`🌐 Server: ${DEV_SERVER_URL}\n`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--window-size=1280,720'],
  });

  try {
    await recordEditorFeatures(browser);
    await recordSpriteInteractions(browser);
    await recordPomodoroEscalation(browser);
    await recordTimerMockery(browser);
    await recordNoteManagement(browser);
  } catch (error) {
    console.error('❌ Error during recording:', error.message);
  }

  await browser.close();

  // Clean up raw directory
  const rawDir = path.join(OUTPUT_DIR, 'raw');
  if (fs.existsSync(rawDir)) {
    fs.rmSync(rawDir, { recursive: true, force: true });
  }

  console.log('\n==========================================');
  console.log('✅ All demos recorded!');
  console.log('📁 Videos saved to: docs/demo/');
  const videos = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.webm'));
  videos.forEach(v => console.log(`   • ${v}`));
}

recordAllDemos().catch(console.error);
