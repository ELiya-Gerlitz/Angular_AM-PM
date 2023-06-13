import { Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/ProductModel';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

public products : ProductModel[]

public constructor( private productsService : ProductsServiceService) {}

  async ngOnInit(): Promise<void> {
    try{
      
      this.products = await this.productsService.getAllProducts()

    }catch(err:any){
      console.log(err)
    }

  }



}
