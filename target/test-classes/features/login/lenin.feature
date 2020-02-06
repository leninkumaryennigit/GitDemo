
@LeninFirstfile
Feature: Title of your feature
  I want to use this template for my feature file

  @firstcucumberfile
  Scenario: Title of your scenario
    Given User navigates to "https://www.google.com" 
    When user click on gmail link 
  Then verify user navigates to gmail page
  
  @secondcucumberfile
   Scenario: Title of your scenario
    Given User navigates to "https://www.google.com" 
    When user click on gmail link and navigates to gmail page
    When user entering username and password and clicking submit
    Then user should go to inbox page
  