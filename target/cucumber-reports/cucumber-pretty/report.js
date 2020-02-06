$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("leads/leads.feature");
formatter.feature({
  "line": 2,
  "name": "Leads Creation",
  "description": "As a Test Engineer I want to test Leads Creation functionality.",
  "id": "leads-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Leads"
    }
  ]
});
formatter.before({
  "duration": 3351704412,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://192.168.31.89:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.31.89:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 3970793447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 106276611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 112059782,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 9470929465,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 181224526,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 9918668387,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 2957042903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 240370208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 295012167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 226222578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 207979973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 211810845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 176385309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 151226136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 171288522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 108700186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 279333587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 186551351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 153486863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 116542509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 215013193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 208674289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 195659589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 218162814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 286221691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 203255542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 156106882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 105624290,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 7113056929,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 227680736,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 186470162,
  "error_message": "java.lang.AssertionError: expected [auto_lastName] but found [  auto_lastName]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.cucumberFramework.stepdefinitions.LeadsPageStepDefinitions.i_should_verify_leads_information(LeadsPageStepDefinitions.java:166)\r\n\tat ✽.And I should verify leads information(leads/leads.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1338646316,
  "status": "passed"
});
formatter.uri("login/lenin.feature");
formatter.feature({
  "line": 3,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@LeninFirstfile"
    }
  ]
});
formatter.before({
  "duration": 2429695094,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@firstcucumberfile"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigates to \"https://www.google.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user click on gmail link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify user navigates to gmail page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com",
      "offset": 19
    }
  ],
  "location": "Firstcucumberfile.user_navigates_3to(String)"
});
formatter.result({
  "duration": 3545406103,
  "status": "passed"
});
formatter.match({
  "location": "Firstcucumberfile.user_click_on_gmail_link()"
});
formatter.result({
  "duration": 5818659754,
  "status": "passed"
});
formatter.match({
  "location": "Firstcucumberfile.verify_user_navigates_to_gmail_page()"
});
formatter.result({
  "duration": 5021262508,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1395666588,
  "status": "passed"
});
formatter.before({
  "duration": 2685755081,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@secondcucumberfile"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User navigates to \"https://www.google.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user click on gmail link and navigates to gmail page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user entering username and password and clicking submit",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user should go to inbox page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com",
      "offset": 19
    }
  ],
  "location": "Firstcucumberfile.user_navigates_3to(String)"
});
formatter.result({
  "duration": 3143657247,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1302301557,
  "status": "passed"
});
formatter.uri("login/login.feature");
formatter.feature({
  "line": 2,
  "name": "Sign In",
  "description": "As an employee of the company\nI want to login to application with my credentails\r\nIn order to use the application features.",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 2316521512,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://192.168.31.89:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.31.89:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2554651057,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 32810652,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 136741612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 138849292,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6656871423,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 471491264,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 168361474,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1747198354,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 28,
      "id": "sign-in;sign-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 29,
      "id": "sign-in;sign-in-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 30,
      "id": "sign-in;sign-in-with-valid-credentials;;3"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 31,
      "id": "sign-in;sign-in-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2288382565,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://192.168.31.89:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.31.89:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1451575860,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 39661894,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 145190529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 139001407,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 4582342525,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 652308905,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 64717013,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1607318786,
  "status": "passed"
});
formatter.before({
  "duration": 3382621558,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://192.168.31.89:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.31.89:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2341455778,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 42095734,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 171430838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 182825933,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5582794671,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 633964113,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 112406474,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1808960322,
  "status": "passed"
});
formatter.before({
  "duration": 3751217737,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://192.168.31.89:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://192.168.31.89:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2304419035,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 31672588,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 114550549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 146163878,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5730670542,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 486992065,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 401002746,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1259300131,
  "status": "passed"
});
});