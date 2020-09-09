import { Component, OnInit } from '@angular/core';
import { ProductCategoryClientServiceService } from '../product-category-client-service.service';
import { ProductCategory } from '../product-category';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-show-by-id',
  templateUrl: './show-by-id.component.html',
  styleUrls: ['./show-by-id.component.css']
})
export class ShowByIdComponent implements OnInit {

  svc: ProductCategoryClientServiceService;
  result: ProductCategory;

  constructor(svc:ProductCategoryClientServiceService) {
    this.svc= svc;
   }

  ngOnInit(): void {
  }

  showById(id:number):void{
    this.svc.GetProductById(id).subscribe((data:ProductCategory)=>{
      this.result = data;
    });
  }


}
