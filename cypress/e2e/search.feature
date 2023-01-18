Feature: Search result validation

  Background: Navigate to the homepage
    Given open the home page

  Scenario: Search for an item
    When click on seach button
    And type "IFRS 17" in a search bar
    Then check the serch result