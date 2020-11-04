import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListviewComponent } from '../listview/listview.component';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  { path: "", redirectTo: "app-addproduct", pathMatch: "full" },
  { path:"app-addproduct",component:AddproductComponent},
  { path:"app-listview",component:ListviewComponent}
  ]

@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
