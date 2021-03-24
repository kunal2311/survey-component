import { LightningElement } from "lwc";

/**
 * Show an item
 */
export default class SurveyQuestionPage extends LightningElement {
  

  questionList = [{
    questionText : 'This is first question',
    answerType : 'radiobutton',
    answerOptions : ['1','2','3','4','5','6','7','8','9','10'],
    recordId : '1',
    displayQuestion : true
  },
  {
    questionText : 'This is second question',
    answerType : 'dropdown',
    answerOptions : ['Yes','No','Not Sure'],
    recordId : '2',
    displayQuestion : true
  },
  {
    questionText : 'This is third question',
    answerType : 'radio',
    answerOptions : ['Yes','No'],
    recordId : '3',
    displayQuestion : true
  },
  {
    questionText : 'This is fourth question',
    answerType : 'date',
    answerOptions : ['1','2','3','4','5','6','7','8','9','10'],
    recordId : '4',
    displayQuestion : true
  },
  {
    questionText : 'This is fifth question',
    answerType : 'textbox',
    answerOptions : ['1','2','3','4','5','6','7','8','9','10'],
    recordId : '5',
    displayQuestion : true
  },
  {
    questionText : 'This is sixth question',
    answerType : 'textarea',
    answerOptions : ['1','2','3','4','5','6','7','8','9','10'],
    recordId : '6',
    displayQuestion : true
  }];

  //test comment
}