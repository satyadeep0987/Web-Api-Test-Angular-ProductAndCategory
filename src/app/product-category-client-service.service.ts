import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ProductCategory } from './product-category';
import { Observable } from 'rxjs/internal/observable';
import { InsertProductDB } from './insert'

@Injectable({
	providedIn: 'root'
})
export class ProductCategoryClientServiceService {
	product: ProductCategory;
	http: HttpClient;
	url:string = 'http://localhost:63294/api/ProductCategory/';
	httpOptions = {headers: new HttpHeaders({
			'Content-Type' : 'application/json'
	})
	}

	constructor(http : HttpClient) {
		this.http = http;
	 }

	 GetAllProducts():Observable<ProductCategory[]>{
		return this.http.get<ProductCategory[]>(this.url);
	 }

	 GetProductById(id:number):Observable<ProductCategory>{
		 return this.http.get<ProductCategory>(this.url+'/'+id);
	 }

	 InsertProduct(pc: InsertProductDB):Observable<string>{
		 return this.http.post<string>(this.url,pc,this.httpOptions);
	 }

	 UpdateProduct(id:number,pc:InsertProductDB):Observable<string>{
		 return this.http.put<string>(this.url+'/'+id,pc,this.httpOptions);
	 }

	 DeleteProduct(id:number):Observable<any>{
		 return this.http.delete<any>(this.url+'/'+id);
	 }
}
