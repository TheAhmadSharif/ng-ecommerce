import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray  }  from '@angular/forms';


@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

   constructor(private fb: FormBuilder) { }

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

}
