import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AsideComponent } from './components/layout-area/aside/aside.component';
import { HomeComponent } from './components/layout-area/home/home.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { VideoComponent } from './components/layout-area/video/video.component';
import { SelectListComponent } from './components/products-area/select-list/select-list.component';
import { AddValidationComponent } from './components/products-area/add-validation/add-validation.component';
import { ProdTableListComponent } from './components/products-area/prod-table-list/prod-table-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AsideComponent,
    HomeComponent,
    ProductsListComponent,
    AddProductComponent,
    ProductCardComponent,
    VideoComponent,
    SelectListComponent,
    AddValidationComponent,
    ProdTableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
 exports: []
})
export class AppModule { }
