import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  studentForm: FormGroup | any;
  isStudentForm!: Boolean;

  constructor(private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
  
    this.studentForm = this.fb.group({
          firstName: ['', [Validators.required, Validators.minLength(3)]],
          lastName: ['', [Validators.required, Validators.minLength(3)]],
          fatherName: ['', [Validators.required]],
          studentId: ['', [Validators.required, Validators.pattern('[1-9]\\d{4,4}')]],
          mobile: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
          address: this.fb.group({
                city: ['', [Validators.required]],
                zip: ['', [Validators.required, Validators.pattern('[1-9]\\d{5,5}')]],
                })
    })

  }






  onSubmit() {
    confirm('Do you want to submit?')
     this.isStudentForm = true;
    console.log("Student Data", this.studentForm.value);
  }


  clear() {
    this.isStudentForm=false;
      this.studentForm.reset();
  }

}
