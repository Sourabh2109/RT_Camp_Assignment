// @ts-check
const { test, expect } = require('@playwright/test');

//Go to Amazon.com and Validate Login
test('Login validation', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);

  // Click the get started link.
  await page.getByRole('link', { name: 'Hello, sign in' }).click();

  // Expects page to have a heading with the name of Sign in.
  await expect(page.getByRole('heading', { name: '  Sign in' })).toBeVisible();

  //Add email id
  // @ts-ignore
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("osgdummy@gmail.com",{delay:300})

  //click on continue button
  await page.locator("//*[contains(@class,'a-button-input')]").click();

  //add password
  // @ts-ignore
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("Rtcamps",{delay:300})

  //click on signin button
  await page.locator("//*[contains(@class,'a-button-input')]").click();

   // Validate that the login was successful by checking for elements on the logged-in page
   const loggedInElement = await page.locator("//*[contains(text(),'Hello, RtCamps')]");
    await expect(loggedInElement).toHaveText(/Hello, RtCamps/);
   
   // Close the browser
   await page.close();
 
});

// Search Functionality and Validate Search Result
test('Search Functionality', async ({ page }) => {
  
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);

  // Click the get started link.
  await page.getByRole('link', { name: 'Hello, sign in' }).click();

  // Expects page to have a heading with the name of Sign in.
  await expect(page.getByRole('heading', { name: '  Sign in' })).toBeVisible();

  //Add email id
  // @ts-ignore
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("osgdummy@gmail.com",{delay:300})

  //click on continue button
  await page.locator("//*[contains(@class,'a-button-input')]").click();

  //add password
  // @ts-ignore
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("Rtcamps",{delay:300})

  //click on signin button
  await page.locator("//*[contains(@class,'a-button-input')]").click();
  //search laptop
  await page.locator("//input[@id='twotabsearchtextbox']").fill("apple iphone 13");
  //click on search icon
  await page.locator("//input[@id='nav-search-submit-button']").click();

  //assert Search Functionality and Validate Search Result
  const loggedInElement = await page.locator("//span[@class='a-color-state a-text-bold']");
    await expect(loggedInElement).toHaveText(/"apple iphone 13"/);

    //close the browser
    await page.close(); 
});

//Product Checkout - Add product to cart and perform checkout action
test('Product Checkout', async ({ page }) => {
  
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);

  // Click the get started link.
  await page.getByRole('link', { name: 'Hello, sign in' }).click();

  // Expects page to have a heading with the name of Sign in.
  await expect(page.getByRole('heading', { name: '  Sign in' })).toBeVisible();

  //Add email id
  // @ts-ignore
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("osgdummy@gmail.com",{delay:300})

  //click on continue button
  await page.locator("//*[contains(@class,'a-button-input')]").click();

  //add password
  // @ts-ignore
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("Rtcamps",{delay:300})

  //click on signin button
  await page.locator("//*[contains(@class,'a-button-input')]").click();


  //click on the product
  await page.locator("(//*[contains(text(),'Apple iPhone 13 (128GB) - Blue')])[2]").click();

  //add to the cart 
  await page.locator("(//*[contains(text(),'Add to Cart')])[2]").click();
  //proceed to checkout
  await page.locator("//input[@name='proceedToRetailCheckout']").click();
  //validate the chcekout
   const checkedItem = await page.locator("//h1[normalize-space()='Checkout']");
   await expect(checkedItem).toHaveText(/Checkout/);
   // Close the browser
   await page.close();
  
});

//Wishlist Functionality and Validate Product Wishlist
test('Wishlist Functionality', async ({ page }) => {
  
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon.in/);

  // Click the get started link.
  await page.getByRole('link', { name: 'Hello, sign in' }).click();

  // Expects page to have a heading with the name of Sign in.
  await expect(page.getByRole('heading', { name: '  Sign in' })).toBeVisible();

  //Add email id
  // @ts-ignore
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("osgdummy@gmail.com",{delay:300})

  //click on continue button
  await page.locator("//*[contains(@class,'a-button-input')]").click();

  //add password
  // @ts-ignore
  await page.locator("//*[contains(@class,'a-input-text a-span12')]").fill("Rtcamps",{delay:300})

  //click on signin button
  await page.locator("//*[contains(@class,'a-button-input')]").click();

  //click on the product
  await page.locator("(//*[contains(text(),'Apple iPhone 13 (128GB) - Blue')])[2]").click();

  //Add to the wishlist
  await page.locator("//input[@id='add-to-wishlist-button-submit']").click();
  //view your wishlist
  await page.locator("//a[@class='a-button-text']").click();

  //Assert the Wishlist Functionality and Validate Product Wishlist
  const loggedInElement = await page.locator("//a[@id='itemName_I29M84A0E13XYL']");
    await expect(loggedInElement).toHaveText(/Shopping List/);


   // Close the browser
   await page.close();
  
});





