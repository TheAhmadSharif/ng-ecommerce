import { NgModule, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, FormArray, Validator }  from '@angular/forms';


@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {



  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {

  }



sponsor_form = this.fb.group({
   about_us: this.fb.control('', []),
});


  updateDate() {
  	console.log(this.sponsor_form.value);

  }

}