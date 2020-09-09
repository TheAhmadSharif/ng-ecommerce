import { NgModule, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, FormArray }  from '@angular/forms';


@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

   companyForm:any = {
      "name": '',
      "phone": ''
    }

    select = 'steak-0';

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {

  }

foods: any= [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  updateObject() {

  }




}