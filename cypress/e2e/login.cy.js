describe('Online test', () => {
  it('Alquran dawah center', () => {
    cy.visit('https://tooba-web.myababil.com/e/event4_slug/attendee-registration?step=0')
    cy.wait(3000)
  
  })

  // it('Alquran dawah center', () => {
  //   cy.visit('/alquran-dawah-center')
  //   cy.wait(3000)
  //   cy.get('a > img').should('exist')
  //   cy.contains('Sponsor "A Quran A Day" For $3/Quran').should('exist')
  // })

  // it('BICNY', () => {
  //   cy.visit('/bicny')
  //   cy.wait(3000)
  //   cy.get('a > img').should('exist')
  //   cy.contains('Largest Islamic Center in NYC needs your support').should('exist')

  // })
  // it('HHCUSA', () => {
  //   cy.visit('/hhcusa')
  //   cy.wait(3000)
  //   cy.get('a > img').should('exist')
  //   cy.contains('Please support Helping Hand Chattagram-USA.').should('exist')

  // })

 
  


})