import { Component, OnInit, Host } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  form: any;
  skills: string[];
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.skills = ['C#', 'Angular', 'Python', 'Bootstrap'];
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }

}
