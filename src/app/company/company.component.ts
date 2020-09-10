import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, FormArray }  from '@angular/forms';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

companyForm:any = {
      "name": '',
      "phoneNumber": '',
    }

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {

  }




  updateObject() {

  }
}
