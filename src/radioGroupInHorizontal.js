import { LightningElement, api, track} from 'lwc';

export default class RadioGroupInHorizontal extends LightningElement {
    @track selectedValue;
    @api options = [];

    

    // handle the selected value
    //selected value will be fired to the parent surveyQuestion component
    handleSelected(event) {
       window.console.log('selected value ===> '+event.target.value);
       this.selectedValue = event.target.value;
       const selectEvent = new CustomEvent('childradioselectedvalue', {
            detail: this.selectedValue ,bubbles: true
        });
       this.dispatchEvent(selectEvent);
    }
    

}