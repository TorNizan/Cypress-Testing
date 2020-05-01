import {file_name} from "../../support/Project_helpers.js"

describe( Cypress.spec.name, () => {
    before(() => {
        cy.visit('https://www.google.com')
    })
    it('should search facebook', function () {
        cy.get("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").type("heila systems");
    });

    it('should click on search', function () {
        cy.get("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b").click({force:true});
    });

    it('should verify page exist', function () {
        cy.get("#rso").should('contain',"heilasystems.com")
    });
});
