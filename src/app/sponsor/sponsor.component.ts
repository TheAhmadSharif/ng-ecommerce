import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray  }  from '@angular/forms';


@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
   editBtnSwitch: boolean = true;
      dropdown_option = [
       {
            "label": "Off",
            "value": "00.00"
        },
        {
            "label": "05.00",
            "value": "05.00"
        },
        {
            "label": "10.00",
            "value": "10.00"
        },
        {
            "label": "15.00",
            "value": "15.00"
        },
];
   constructor(private fb: FormBuilder) { 

      for(var i = 0; i < this.sponsorList.length; i++) {
         this.amount_list.push(this.fb.control(this.sponsorList[i].amount.amount));

      }

      

   }

   sponsorList = [{
      "business_id":"14",
      "post_code":"PE30",
      "amount":{
         "amount":"10.00",
         "postcode":"PE30"
      }
   },
   {
      "business_id":"14",
      "post_code":"PE31",
      "amount":{
         "amount":"20.00",
         "postcode":"PE31"
      }
   },
   {
      "business_id":"14",
      "post_code":"PE32",
      "amount":{
         "amount":"30.00",
         "postcode":"PE32"
      }
   }
]



  /* Dynamic Form  */
   sponsor_form = this.fb.group({
	        amount_list: this.fb.array([])
    });
    get amount_list() {
        return this.sponsor_form.get('amount_list') as FormArray;
    }
    /* End Dynamic Form  */

  ngOnInit(): void {

  }

 addAlias() {
  this.amount_list.push(this.fb.control(''));
}

  updateData(id) {
  	console.log(this.sponsor_form.value, '87');
    this.editBtnSwitch =! this.editBtnSwitch;

  }


}