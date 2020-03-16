import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '../shared/validation.service';
import { Programmer } from '../shared/programmer';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  model: Programmer;
  submittedModel: Programmer;
  skills: string[];
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.model = new Programmer(18, 'Robert C. Martin', 'C#', 'Uncle Bob', 'rc@proprogrammer.com');

      this.skills = ['C#', 'Angular', 'Python', 'Bootstrap'];

      this.reactiveForm = this.formBuilder.group({
        name:     [this.model.name, Validators.required],
        alias:    [this.model.alias, Validators.required],
        email:    [this.model.email, [Validators.required, ValidationService.emailValidator]],
        skill:    [this.model.skill, Validators.required]
      });
  }

}
