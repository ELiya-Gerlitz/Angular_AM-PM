import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { ListComponent } from './products-area/list/list.component';
import { ProductsListComponent } from './products-area/products-list/products-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
 exports: []
})
export class AppModule { }
