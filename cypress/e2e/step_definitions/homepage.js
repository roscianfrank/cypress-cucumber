import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../support/pages/home_page';
import contactUs from '../../support/pages/contectUs';

Given(/^open the ([^"]*) page$/, () => {
  cy.visit('/');
  cy.title().should('include', 'Brit Insurance');
});

When(/^click on seach button$/, () => {
  homePage.clickSearchButton();
});

When("type {string} in a search bar", function (searchItem) {
  homePage.searchItem(searchItem);
  });

Then("check the serch result", function () {
  homePage.validateResult();
  });  

When("click meanu button", function () {
  homePage.clickMenuButton();
  }); 
    
When("click on Contect us", function () {
  homePage.clickContectUs();
  }); 

Then("check the address for burmuda office", function () {
  contactUs.checkBurmudaOfficeAddress();
  });   