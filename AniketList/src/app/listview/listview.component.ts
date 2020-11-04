import { Component, OnInit } from '@angular/core';
import { AddproductService } from '../addproduct/addproduct.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  products = [];
  constructor(private addproductService:AddproductService) { }
  ID=1;
  ngOnInit(): void {
    this.getList() ;
  }
  getList() {
    this.addproductService.getList().subscribe((res: any) => {
      console.log(res);
      // var data = res['data'];
      // var content = data['content'];
      this.products = res.map((key) => ({ ...key }));
  
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }


}
