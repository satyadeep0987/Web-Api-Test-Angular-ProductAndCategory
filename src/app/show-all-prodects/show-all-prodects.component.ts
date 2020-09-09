import { Component, OnInit } from '@angular/core';
import { ProductCategoryClientServiceService } from '../product-category-client-service.service';
import { ProductCategory } from '../product-category';

@Component({
  selector: 'app-show-all-prodects',
  templateUrl: './show-all-prodects.component.html',
  styleUrls: ['./show-all-prodects.component.css']
})
export class ShowAllProdectsComponent implements OnInit {

  svc: ProductCategoryClientServiceService;
  result: ProductCategory[];

  constructor(svc: ProductCategoryClientServiceService) {
    this.svc = svc;
   }

  ngOnInit(): void {
    this.ShowData();
  }

  ShowData():void{
    this.svc.GetAllProducts().subscribe((data :ProductCategory[])=>{
      this.result = data;
    });
  }

}
