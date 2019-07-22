import { LightningElement, api } from 'lwc';


export default class Multiline extends LightningElement {
    
    @api lineItemData;	 
    @api availableLHSObjectFields;
    @api availableRHSMergeFields;
    @api addButtonLabel;

}