/// <reference types="Cypress" />

describe("My first Test Suite", function () {
  it("My FirstTest case", function () {
    // test case
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);

    // parent child
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();

    console.log("sf");

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();

        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    // assert if logo is correctly displaying
    cy.get(".brand").should("have.text", "GREENKART");

    cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });

    const logo = cy.get(".brand");

    cy.log(logo);
  });
});
