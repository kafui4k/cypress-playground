/// <reference types="Cypress" />

describe("Automation Checking Input Fields", function () {
  it("Should validate input fields", function () {
    // test case
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.wait(2000);

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    cy.get("select").select("option2").should("have.value", "option2");

    // Dynamic dropdowns
    cy.get("#autocomplete").type("in");

    cy.get(".ui-menu-item > div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click();
      }
    });

    cy.get("#autocomplete").should("have.value", "India");

    cy.get("#displayed-text").should("be.visible");
    cy.wait(3000);
    cy.get("#hide-textbox").click();
    cy.wait(3000);
    cy.get("#displayed-text").should("not.be.visible");
    cy.wait(3000);
    cy.get("#show-textbox").click();

    cy.get('[value="radio2"]')
      .check()
      .should("have.value", "radio2")
      .and("be.checked");
  });
});
