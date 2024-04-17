class homepage {
    txtSearch = "#srch_service_block > .flex";

    searchKeyword(){
        cy.get(this.txtSearch).type("casual");
    }
}
export default homepage;