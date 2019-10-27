import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaveRequestFormPage } from './leave-request-form.page';
import { SharedComponentModule } from '../shared-component/shared-component.module';


const routes: Routes = [
  {
    path: '',
    component: LeaveRequestFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentModule
  ],
  declarations: [LeaveRequestFormPage]
})
export class LeaveRequestFormPageModule {}
