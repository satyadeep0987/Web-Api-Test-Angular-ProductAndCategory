import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAllProdectsComponent } from './show-all-prodects/show-all-prodects.component';
import { ShowByIdComponent } from './show-by-id/show-by-id.component';
import { InsertProductComponent } from './insert-product/insert-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllProdectsComponent,
    ShowByIdComponent,
    InsertProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
