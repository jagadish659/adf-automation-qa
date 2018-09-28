describe('Alfresco QA Excercise', function(){
	it('Create new folder', function(){
		
        browser.get("http://qaexercise.envalfresco.com/settings");
        browser.waitForAngular();

        element(by.className('mat-select-arrow')).click();
        element(by.cssContainingText('.mat-option-text', ' ECM ')).click();
        element(by.buttonText('APPLY')).click();
        browser.sleep(2000);

        element(by.id('username')).sendKeys('guest@example.com');
        element(by.id('password')).sendKeys('Password');
        element(by.buttonText('SIGN IN')).click();
        browser.sleep(2000);

        browser.get('http://qaexercise.envalfresco.com/files');
        element(by.cssContainingText('.mat-button-wrapper', 'create_new_folder')).click();
        element(by.id('adf-folder-name-input')).sendKeys('TestJag');
        element(by.cssContainingText('.mat-button-wrapper', ' Create ')).click();
        element(by.cssContainingText('.mat-button-wrapper', 'create_new_folder')).click();
        element(by.id('adf-folder-name-input')).sendKeys('TestJag');
        element(by.cssContainingText('.mat-button-wrapper', ' Create ')).click();
        var text=element(by.css('body > div.cdk-live-announcer-element.cdk-visually-hidden')).getText();
        console.log(text);
				
	})
	
} )