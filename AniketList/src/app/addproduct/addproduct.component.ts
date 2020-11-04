import { Component, OnInit } from '@angular/core';
import { AddproductService } from './addproduct.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
  
})
export class AddproductComponent implements OnInit {
  products = [];
  productDto = {
    "productname": "",
    "categories": "",
    "price": 0,
    "quantity": 0
  }
  constructor(private addproductService:AddproductService,private router:Router) { }

  ngOnInit(): void {
  }
  add() {
    this.addproductService.save(this.productDto).subscribe((res: any) => {
        alert('Saved Successfully');
        this.router.navigate(['/add-listview']);
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }
  clearData() {
    this.productDto.productname = "",
    this.productDto.categories = "",
    this.productDto.price = 0,
    this.productDto.quantity = 0
  }
}
