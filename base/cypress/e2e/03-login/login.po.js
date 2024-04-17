class login {
    txtUsername = "div.block > :nth-child(1) > .relative > .block";
    txtPassword = ":nth-child(2) > .relative > .block";
    clickLogin = ".pt-4 > .flex";

    userLogin(){
        cy.get(this.txtUsername).type("01533020974");
        cy.wait(1000);
        cy.get(this.txtPassword).type("Superadmin@2");
        cy.wait(1000);
        cy.get(this.clickLogin).click({force: true});
        cy.wait(4000);
        cy.visit("https://citizen-dev.ph.orangebd.com/");
    }
}
export default login;