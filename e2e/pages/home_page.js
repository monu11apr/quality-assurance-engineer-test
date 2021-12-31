import Page from './page'

import element_helper from '../framework/element_helper';
import TextboxHelper from '../framework/textbox_helper';
import ValidationHelper from '../framework/validation-helper';

class HomePage extends Page  {

    get CreateQuestionButton() { return $('button[type="submit"]') }

    get CreateQuestionTxtBox() { return $('input[id="question"]') }

    get AnswerTxtBox() { return $('textarea[id="answer"]') }

    get SecondQuestion() { return $('//div[@class="card"]//li[2]/div') }

    get SecondAnswer() { return $('//div[@class="card"]//li[2]/p') }

    /**
     * Enter the Question
     * @param {Question} Question 
     */
     enterQuestion(question) {
      TextboxHelper.inputText(question, this.CreateQuestionTxtBox);
  }

   /**
     * Enter the Answer
     * @param {Answer} Answer 
     */
    enterAnswer(answer) {
      TextboxHelper.inputText(answer, this.AnswerTxtBox);
    }

    /**
     * Click On Create Question
     */
    clickOnCreateQuestion() {
      element_helper.clickOn(this.CreateQuestionButton)
    }

    /**
     * Verify newly added Question and Answer
     * @param {Question} Question 
     * @param {Answer} Answer 
     */
     validateNewlyAddedQuesAns(question, answer) {
      ValidationHelper.toHaveText(this.SecondQuestion, question);
      element_helper.clickOn(this.SecondQuestion);
      ValidationHelper.toHaveText(this.SecondAnswer, answer);
    }
    
}
export default new HomePage();