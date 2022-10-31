import Usersview from "../../../src/components/refreshbutton/userview";

describe(' Button app', () => {
    it('should to click button', () => {
        cy.visit('http://localhost:3000/')

        cy.get('p').first()
            .should('have.text', 'hello')

        cy.get('button').click().contains('Kliknmij aby odświeżyć');
        
        cy.get('p')
            .should('have.length', 12);
        
    });
});