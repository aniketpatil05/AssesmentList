import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductRoutingModule } from './product-routing/product-routing.module';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [];

@NgModule({
  imports: [ 
 
    RouterModule.forRoot(
    [
      { path: "", redirectTo: "add-product", pathMatch: "full" },
      { path:"add-product",component:AddproductComponent},
      { path:"add-listview",component:ListviewComponent}
    ]
  ),
    ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
