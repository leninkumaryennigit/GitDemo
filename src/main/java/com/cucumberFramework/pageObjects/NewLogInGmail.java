package com.cucumberFramework.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.cucumberFramework.helper.WaitHelper;

public class NewLogInGmail {
	
private WebDriver driver;
	
	
	@FindBy(xpath="//a[text()='Gmail']")
	WebElement gmaillink;
	
	WaitHelper waitHelper;
	
	public NewLogInGmail (WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
		//waitHelper.WaitForElement(userName, 60);
	}
	
	public void clickgmail(){
		gmaillink.click();
	}

}
