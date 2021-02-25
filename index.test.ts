import googleTest from "./tests/google";

describe('Test start', () => {
  beforeAll(async () => {
    const url = 'https://www.google.com'
    await page.goto(url)
  })
  googleTest()
})
