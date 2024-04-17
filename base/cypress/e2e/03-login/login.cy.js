import login from "./login.po";

describe('Login Test', function() {
    const ln = new login();
    this.beforeAll(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit("https://citizen-dev.ph.orangebd.com/signin");
        cy.wait(3000);
    })
    
    it('It will login with valid credentials', function() {
        ln.userLogin();
    })
})