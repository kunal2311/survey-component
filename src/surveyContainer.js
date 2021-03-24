import { LightningElement } from "lwc";

export default class SurveyContainer extends LightningElement {
  showSpinner = false;
  totalPages;
  currentPageNo;
  showPrevious = false;
  showNext = false;
  pageDataList = [];
  pageData;
  progressStep;
  progressPages = [];

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

  connectedCallback(){
    this.showSpinner = true;
    this.pageDataList = [{
      pageType : 'Welcome Page',
      pageId : '1',
      message : 'Welcome to the Survey',
      showWelcomePage : true,
      showPresurveyPage : false,
      showQuestionPage : false,
      showThankyouPage : false
    },{
      pageType : 'Presurvey Page',
      pageId : '2',
      showWelcomePage : false,
      showPresurveyPage : true,
      showQuestionPage : false,
      showThankyouPage : false
    },{
      pageType : 'Question Page',
      pageId : '3',
      questionList : this.questionList,
      showWelcomePage : false,
      showPresurveyPage : false,
      showQuestionPage : true,
      showThankyouPage : false
    },{
      pageType : 'Thank you Page',
      pageId : '4',
      message : 'Thank You',
      showWelcomePage : false,
      showPresurveyPage : false,
      showQuestionPage : false,
      showThankyouPage : true
    }];
    for(let i=0; i<this.pageDataList.length; i++) {
        this.progressPages.push({pageName : this.pageDataList[i].pageType, pageId : i+1});
    }
    this.progressStep = 1;
    this.setPageToDisplay();
  }

  setPageToDisplay(){
    console.log('setPageToDisplay');
    this.totalPages = this.pageDataList.length;
    this.currentPageNo = 1;
    this.showPrevious = false;
    this.showNext = true;
    this.showSpinner = false;
    this.pageData = this.pageDataList[this.currentPageNo - 1];
    
  }


  handleClick(event){
    let label = event.target.label;
    if(label === "Previous"){
      this.handlePrevious();
    } else if(label === "Next"){
      this.handleNext();
    }
  }

  handlePrevious(){
    console.log('Handle Previous');
    this.currentPageNo -= 1;
    this.progressStep -= 1;
    this.preparePage();
  }

  handleNext(){
    console.log('Handle Next');
    this.currentPageNo += 1;
    this.progressStep += 1;
    this.preparePage();
  }

  preparePage(){
    console.log('preparePage');
    console.log('currentpage '+this.currentPageNo);
    this.showSpinner = true;
    this.pageData = this.pageDataList[this.currentPageNo - 1];
    if(this.currentPageNo != 1){
      this.showPrevious = true;
    } else{
      this.showPrevious = false;
    }
    if(this.currentPageNo != 4){
      this.showNext = true;
    } else{
      this.showNext = false;
    }
    this.showSpinner = false;
  }
}