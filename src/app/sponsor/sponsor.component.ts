import { NgModule, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, FormArray }  from '@angular/forms';


@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {



  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {

  }

foods: any= [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  select = 'tacos-2';


sponsor_form = this.fb.group({
	amount_list: this.fb.array([
	    this.fb.control(''),
	    this.fb.control(''),
	    this.fb.control(''),
	    this.fb.control(''),
	  ])
});


get amount_list() {
  return this.sponsor_form.get('amount_list') as FormArray;
}


 addAlias() {
  this.amount_list.push(this.fb.control(''));
}

  updateDate() {
  	console.log(this.sponsor_form.value);

  }

}