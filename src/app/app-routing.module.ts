import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'app-navbar', component: NavbarComponent },
  { path: '', redirectTo: '/app-navbar', pathMatch: 'full' },
  { path: 'app-basic-form', component: BasicFormComponent },
  { path: 'app-starter-reactive-form', component: StarterReactiveFormComponent },
  { path: 'app-template-form', component: TemplateFormComponent },
  { path: 'app-reactive-form', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    NavbarComponent, BasicFormComponent, StarterReactiveFormComponent
  ];
}
