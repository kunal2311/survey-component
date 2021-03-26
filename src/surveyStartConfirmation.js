import { LightningElement } from "lwc";

export default class SurveyStartConfirmation extends LightningElement {
  

  handleChangeToParent(event){
    const textLabel = event.target.label;
    //console.log('textLabel: '+textLabel);
      const selectEvent = new CustomEvent('confirmationvalue', {
            detail: textLabel ,bubbles: true
        });
       this.dispatchEvent(selectEvent);
  }
}