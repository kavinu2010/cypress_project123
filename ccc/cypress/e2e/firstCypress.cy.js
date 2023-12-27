describe("scania", () => {
  it("login page", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php ");

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Username']").should("have.value", "Admin");

    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("input[placeholder='Password']").should("have.value", "admin123");

    cy.get("button[type='submit']").click();

    cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text")
      .contains("PIM")
      .click();
    cy.get(".oxd-text.oxd-text--h5.oxd-table-filter-title").should(
      "have.text",
      "Employee Information"
    );

    cy.get(".oxd-topbar-body-nav > ul > :nth-child(3)")
      .contains("Add Employee")
      .click();
    cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title").should(
      "have.text",
      "Add Employee"
    );

    cy.get("input[placeholder='First Name']").click().type("abc");
    cy.get("input[placeholder='Middle Name']").click().type("op");
    cy.get("input[placeholder='Last Name']").click().type("xyz");

    cy.get(".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input")
      .click()
      .type("2345");

    cy.get("button[type='submit']").click();

    cy.go(-1);
    cy.get(".oxd-text.oxd-text--h5.oxd-table-filter-title").should(
      "have.text",
      "Employee Information"
    );

    cy.xpath("//li[@class='oxd-topbar-body-nav-tab --visited']")
      .contains("Employee List")
      .click();
  });
});
