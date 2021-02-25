const googleTest = () => {
  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })
}

export default googleTest
