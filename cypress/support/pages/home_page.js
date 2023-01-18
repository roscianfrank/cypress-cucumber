class HomePage {
  clickSearchButton() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('.component--header__search button')
      .wait(3000)
      .should('be.visible')
      .click({ force: true });
  }

  searchItem(searchString){
    cy.get('.header--search')
      .find('input')
      .should('be.visible')
      .type(searchString)
  }

  validateResult(){
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('.result')
      .wait(2000)
      .should('contain.text','Interim results for the six months ended 30 June 2022')
      .should('contain.text','Gavin Wilkinson')
      .should('contain.text','John King')   
  }

  clickMenuButton(){
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('.header--toggle')
      .wait(3000)
      .should('be.visible')
      .click()
  }

  clickContectUs(){
    cy.get('.item [href="/contact"]')
      .should('be.visible')
      .click()
  }
}

export default new HomePage();
