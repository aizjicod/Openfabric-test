import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolInformationComponent } from './tool-information/tool-information.component';
import { ToolAddFormComponent } from './tool-add-form/tool-add-form.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'tool/new', 
    component: ToolAddFormComponent,
  },
  {
    path: 'tool/:toolId', 
    component: ToolInformationComponent,
  },
  {
    path: '', 
    component: DashboardComponent,
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
