import { LightningElement, api, track } from "lwc";

/**
 * Show an item
 */
export default class SurveyQuestionPage extends LightningElement {
  @track selectedValue;

  @api questionDataList;

//event listener to handle the event fired from child surveyQuestion component
  constructor() {
      super();   
      this.template.addEventListener('childselectedvalue', this.handleCustomEvent.bind(this));
  }

  handleCustomEvent(event) {
      const textVal = event.detail;
      this.selectedValue = textVal;
      this.handleChange();
  }

// handle the selected value
    //selected value from the child surveyQuestion component will be fired to the parent surveyContainer component
  handleChange() {
        console.log('value '+this.selectedValue);
        const selectEvent = new CustomEvent('parentselectedvalue', {
            detail: this.selectedValue ,bubbles: true
        });
       this.dispatchEvent(selectEvent);
    }

  //test comment
}