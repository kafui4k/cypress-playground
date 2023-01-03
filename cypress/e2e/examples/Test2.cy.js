/// <reference types="Cypress" />

describe("Second Test Suite", function () {
  it("Should lead us to checkout stage", function () {
    // test case
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    // parent child
    cy.get(".products").as("productLocator");

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();

        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    // cy.get(":nth-child(14)").click();
    cy.get("button").contains("Place Order").click();
  });
});
