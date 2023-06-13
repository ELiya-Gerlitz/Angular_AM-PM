import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { VideoComponent } from './components/layout-area/video/video.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "products-listing", component : ProductsListComponent},
  {path : "add", component : AddProductComponent},
  {path : "video", component : VideoComponent},

  {path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch: "full" --> exact empty string,
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
