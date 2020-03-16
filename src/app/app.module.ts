import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasicFormComponent,
    StarterReactiveFormComponent,
    TemplateFormComponent,
    StarterTemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
