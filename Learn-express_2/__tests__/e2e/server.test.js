const port = 3000;

describe(`Express`, () => {
  beforeAll(async () => {
    await page.goto(`http://localhost:${port}`);
  })

  it(`"Learn-express.js" is there`, async() => {
    const body = await page.evaluate(() => document.body.textContent);
    expect(body).toContain('Learn-express.js');
  })

  it(`"UserList" is there`, async() => {
    const body = await page.evaluate(() => document.body.textContent);
    expect(body).toContain('UserList');
  })
})
