import { LightningElement, api, track} from 'lwc';

export default class RadioGroupInHorizontal extends LightningElement {
    @track selectedValue;
    @api options = [];

    

    // handle the selected value
    handleSelected(event) {
       window.console.log('selected value ===> '+event.target.value);
       this.selectedValue = event.target.value;
    }

}