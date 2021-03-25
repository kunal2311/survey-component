import { LightningElement, api} from "lwc";

/**
 * Show an item
 */
export default class SurveyQuestion extends LightningElement {
    showRadioButton = false;
    showComboBox = false;
    showDate = false;
    showTextBox = false;
    showTextArea = false; 
    showRadio = false;
    

    optionsToReturn = [];
    
    @api questionText = "Hello this is a Question?";
    @api answerType = "";
    @api selectedValue = "";
    @api optionValues = [];
    
    

    get options() {
        console.log('options: '+this.optionValues);
        let dataList = this.optionValues;
        console.log('datalist: '+dataList);
        if(dataList) {
            this.optionsToReturn = [];
            var optionsArray = [];
            console.log('optionsToReturn: '+this.optionsToReturn);
            for(let i=0; i<dataList.length; i++) {
                optionsArray.push({label:dataList[i],value:dataList[i]});
                
            }
            this.optionsToReturn = optionsArray;
            
        } 
        
        console.log('optionsToReturn: '+this.optionsToReturn);
        return this.optionsToReturn;
    
    }

    renderedCallback() {
       if(this.answerType == 'radiobutton'){
           this.showRadioButton = true;
       } else if(this.answerType == 'dropdown'){
           this.showComboBox = true;
       } else if(this.answerType == 'date'){
           this.showDate = true;
       } else if(this.answerType == 'textbox'){
           this.showTextBox = true;
       } else if(this.answerType == 'textarea'){
           this.showTextArea = true;
       } else if(this.answerType == 'radio'){
           this.showRadio = true;
       }
    }

    // handle the selected value
    //selected value from the input fields will be fired to the parent surveyQuestionPage component
    handleChange(event) {
        console.log('handleChange');
        event.preventDefault();
        this.selectedValue = event.target.value;
        this.handleChangeToParent();
        
    }

    //event listener to handle the event fired from child radioGroupInHorizontal component
    constructor() {
      super();   
      this.template.addEventListener('childradioselectedvalue', this.handleCustomEvent.bind(this));
  }

    // handle the selected value
    //selected value from the child radio component will be fired to the parent surveyQuestionPage component
  handleCustomEvent(event) {
      const textVal = event.detail;
      this.selectedValue = textVal;
      this.handleChangeToParent();
  }

  handleChangeToParent(){
      const selectEvent = new CustomEvent('childselectedvalue', {
            detail: this.selectedValue ,bubbles: true
        });
       this.dispatchEvent(selectEvent);
  }


    
}
