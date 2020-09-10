import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllProdectsComponent } from './show-all-prodects/show-all-prodects.component';
import { ShowByIdComponent } from './show-by-id/show-by-id.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'selectall',component:ShowAllProdectsComponent},
  {path:'SelectbyId',component:ShowByIdComponent},
  {path:'Insert',component:InsertProductComponent},
  {path:'update',component:UpdateProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
