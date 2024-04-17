import homepage from "./homepage.po";

describe('Home Page Test', function() {
    
    it('It will search a keyword', function() {
        cy.visit("https://citizen-dev.ph.orangebd.com/");
        cy.wait(22000);
        const ln = new homepage();
        ln.searchKeyword();
    })
})