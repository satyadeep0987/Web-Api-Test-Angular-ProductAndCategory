import { Component, OnInit, NgZone } from '@angular/core';
import { ProductCategoryClientServiceService } from '../product-category-client-service.service';
import { ProductCategory } from '../product-category';
import { InsertProductDB } from '../insert'
import { FormsModule , NgForm, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  src:ProductCategoryClientServiceService;
  model= new InsertProductDB(); 
  str:string;
  ngZone:NgZone;
  router:Router;
  constructor(src:ProductCategoryClientServiceService,ngZone:NgZone,router:Router) {
    this.ngZone=ngZone;
    this.router=router;
    this.src = src;
  }
  ngOnInit(): void {
  }

  Insert(InsertProductform:NgForm):void{
    //console.log(InsertProductform.value);
    //console.log(this.model);
    
    this.src.InsertProduct(this.model).subscribe((data :string)=>{
      this.str = data;
    this.ngZone.run(() => this.router.navigateByUrl('/selectall'));
    });
  }
}
