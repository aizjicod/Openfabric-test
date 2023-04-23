import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolInformationComponent } from './tool-information/tool-information.component';
import { ToolAddFormComponent } from './tool-add-form/tool-add-form.component';

const routes: Routes = [
  {
    path: 'tool/:toolId', 
    component: ToolInformationComponent,
  },
  {
    path: 'tool/new', 
    component: ToolAddFormComponent,
  },
  {
    path: '', 
    component: MainComponent,
  },
  {
    path: '**', 
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
