package com.cucumberFramework.stepdefinitions;

import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.pageObjects.LoginPage;
import com.cucumberFramework.pageObjects.NewLogInGmail;
import com.cucumberFramework.testBase.TestBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Firstcucumberfile extends TestBase {
	
	NewLogInGmail loginPage = new NewLogInGmail(driver);
	WaitHelper waitHelper;
	
	@Given("^User navigates to \"([^\"]*)\"$")
	public void user_navigates_3to(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get(arg1);
		driver.manage().window().maximize();
	}

	@When("^user click on gmail link$")
	public void user_click_on_gmail_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		loginPage.clickgmail();
		Thread.sleep(3000);
	}

	@Then("^verify user navigates to gmail page$")
	public void verify_user_navigates_to_gmail_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String title= driver.getTitle();
		System.out.println(title);
		Thread.sleep(5000);
	}

}
