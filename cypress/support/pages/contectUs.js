class ContectUs {
    checkBurmudaOfficeAddress(){
        cy.get('.location.location--featured')
        .should('contain.text','Pembroke\n        \n\n    \n        \n            Ground Floor, Chesney HouseThe Waterfront, 96 Pitts Bay Road, Pembroke, Hamilton HM 08, Bermuda\n        \n        \n                \n                    +1 441 278 0660')
    }
}
export default new ContectUs();