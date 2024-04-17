class ServicesPage {

 goToServicesPage() {
        cy.get('#headlessui-disclosure-button-1').click();
        cy.get('.space-y-1 > [href="/service"]').click();
    }

}
export default ServicesPage;