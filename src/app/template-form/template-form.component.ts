import { Component, OnInit } from '@angular/core';

import { Programmer } from '../shared/programmer';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model: Programmer;
  skills: string[];
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.model = new Programmer(18, 'Felix', 'C#', 'DarkZ0n3', 'dz@proprogrammer.com' );
    this.skills = ['C#', 'Angular', 'Python', 'Bootstrap'];
  }

  onSubmit() {
    this.submitted = true;
  }
}
