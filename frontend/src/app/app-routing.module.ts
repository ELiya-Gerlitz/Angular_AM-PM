import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { VideoComponent } from './components/layout-area/video/video.component';
import { SelectListComponent } from './components/products-area/select-list/select-list.component';
import { AddValidationComponent } from './components/products-area/add-validation/add-validation.component';
import { ProdTableListComponent } from './components/products-area/prod-table-list/prod-table-list.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "products-listing", component : ProductsListComponent},
  {path : "select-products-list", component : SelectListComponent},
  {path : "select-products-table", component : ProdTableListComponent},
  {path : "add", component : AddProductComponent},
  {path : "add-with-validation", component : AddValidationComponent},
  {path : "video", component : VideoComponent},

  {path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch: "full" --> exact empty string,
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
