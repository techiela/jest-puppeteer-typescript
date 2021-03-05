const googleTest = () => {
  describe('google', () => {
    beforeAll(async () => {
      const url = 'https://www.google.com'
      await page.goto(url)
    })

    describe('testGroup1', () => {
      it('test1', () => {
        expect('1').toMatch('1')
      })
    })

    describe('testGroup2', () => {
      describe('testGroup2.1', () => {
        it('test2.1', () => {
          expect('1').toMatch('1')
        })
      })

      describe('testGroup2.2', () => {
        describe('testGroup2.2.1', () => {
          it('test2.2.1', () => {
            expect('1').toMatch('1')
          })
        })
        describe('testGroup2.2.2', () => {
          it('test2.2.2', () => {
            expect('1').toMatch('1')
          })
        })
      })
    })
  })
}

export default googleTest
