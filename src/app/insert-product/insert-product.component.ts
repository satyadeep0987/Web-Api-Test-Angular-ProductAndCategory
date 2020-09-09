import { Component, OnInit } from '@angular/core';
import { ProductCategoryClientServiceService } from '../product-category-client-service.service';
import { ProductCategory } from '../product-category';
import { InsertProductDB } from '../insert'
import { FormsModule , NgForm, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  src:ProductCategoryClientServiceService;
  model= new InsertProductDB(); 
  str:string;
  constructor(src:ProductCategoryClientServiceService) {
    this.src = src;
  }
  ngOnInit(): void {
  }

  Insert(InsertProductform:NgForm):void{
    console.log(InsertProductform.value);
    console.log(this.model);
    
    this.src.InsertProduct(this.model).subscribe((data :string)=>{
      this.str = data;
    });
  }
}
