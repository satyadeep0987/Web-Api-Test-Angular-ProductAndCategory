import { Component, OnInit } from '@angular/core';
import { ProductCategoryClientServiceService } from '../product-category-client-service.service';
import { ProductCategory } from '../product-category';
import { InsertProductDB } from '../insert'
import { FormsModule , NgForm, FormGroup } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  svc:ProductCategoryClientServiceService;
  result:ProductCategory;
  model = new InsertProductDB();
  str:string;
  dlt:any;

  constructor(svc:ProductCategoryClientServiceService) {
    this.svc = svc;
   }

  ngOnInit(): void {
  }

  showById(id:number):void{
    this.svc.GetProductById(id).subscribe((data:ProductCategory)=>{
      this.result = data;
    });
  }
  Update(id:number,update:NgForm):void{
    this.model.ProductName = this.result.ProdName;
    this.model.price=this.result.Price;
    this.svc.UpdateProduct(id,this.model).subscribe((data:string)=>{
      this.str = data;
    });
  }

  Delete(id:number):void{
    this.svc.DeleteProduct(id).subscribe((data:any)=>{
      this.dlt=data;
    });
  }

}
