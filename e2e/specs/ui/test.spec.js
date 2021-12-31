
import HomePage from '../../pages/home_page'

describe('Test Scenario', () => {
    
    it("Create a new question" , () =>{
        browser.url("/")
        HomePage.enterQuestion(browser.config.question);
        HomePage.enterAnswer(browser.config.answer)
        HomePage.clickOnCreateQuestion();
        HomePage.validateNewlyAddedQuesAns(browser.config.question, browser.config.answer);
    })
   
})