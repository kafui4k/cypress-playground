/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import "cypress-iframe";

describe("Automating Frames and Child windows in Cypress", () => {
  it("should handle child windows", () => {
    // Check bosex
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then((el) => {
      const url = el.prop("href");

      cy.wait(3000);

      cy.log("I got the URL, now logging it");

      cy.log(url);
      console.log(url);

      cy.wait(3000);
      cy.log("Redirecting to that url now...");

      // we visit the url
      cy.visit(url);
    });
  });
});

describe("Handling Frames in Cypress", () => {
  it("should interact with Frames within a page", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    cy.iframe().find("a[href='mentorship']").eq(0).click();

    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
