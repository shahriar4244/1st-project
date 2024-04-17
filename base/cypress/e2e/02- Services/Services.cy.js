import login from "../03-login/login.po";
import ServicesPage from "./Services.po";

describe('Services Page', function() {
    const ln = new ServicesPage();
    const serve = new login ();
    this.beforeAll(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit("https://citizen-dev.ph.orangebd.com/signin");
        cy.wait(3000);
        serve.userLogin();

    })
    it('It will login with valid credentials', function() {
        ln.goToServicesPage();
    });
});
