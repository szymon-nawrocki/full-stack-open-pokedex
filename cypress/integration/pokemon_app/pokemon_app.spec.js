describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:4000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('overgrow')
  })
})