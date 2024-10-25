import { Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [{
  path: '',
  // component: CrudComponent
  component: FormComponent

}];
