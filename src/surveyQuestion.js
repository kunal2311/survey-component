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


    
}
