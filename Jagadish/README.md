## Alfresco ADF automation QA exercise

##Description - Explains about how to run tests
1. Launch comand prompt in local machine.
2. Start the selenium server using comand 'webdriver-manager start'
3. Wait for the server to initiate and get the host address.
4. Local host Url would be like : 'http://localhost:4444/wd/hub'
5. Open the protractor visual studio code
6. open the Conf file under Config folder
7. Set the above host address in the seleniumAddress section.
8. Ensure correct spec name is updated in the specs section.
9. Open the terminal and navigate to Config folder.
10. Run the tests using 'protractor conf.js' command.

##Explanation - Explain about the different choices in the solution
1. Different type of protractor locators has used in the solution to identify elements.


##Prerequisites - Explains about prerequisites to run automated tests.
1. Download Node.js
2. Set Node in system Variables
3. Install protractor using npm install -g protractor
