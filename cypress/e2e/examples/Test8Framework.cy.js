/// <reference types="Cypress" />

describe("Framework Test Suite", () => {
  before(function () {
    // run once before all other
    // tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("should run fixtures and custom commands", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get('input[name="name"]:nth-child(2)').type("Bob");
    cy.get("select").select("Female");
    cy.get(":nth-child(4) > .ng-untouched").should("have.value", "Bob");
    cy.get('input[name="name"]:nth-child(2)').should(
      "have.attr",
      "minlength",
      2
    );
    cy.get("#inlineRadio3").should("be.disabled");
    cy.pause();

    cy.get(":nth-child(2) > .nav-link").click();

    ["Blackberry", "Nokia Edge"].forEach(function (element) {
      cy.log(element);
    });
  });
});
