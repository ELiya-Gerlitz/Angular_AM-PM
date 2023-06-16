import { Component, OnInit } from '@angular/core';
import CatrgoryModel from 'src/app/models/CategoryModel';
import ProductModel from 'src/app/models/ProductModel';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  public categories : CatrgoryModel[]
  public product = new ProductModel()
  
  public constructor( private peoductsService : ProductsServiceService) {}

  public async ngOnInit(): Promise<void> {
      try{
      this.categories = await this.peoductsService.getAllCategories()
      }catch(err:any){
        console.log(err)
      }
  }


  public async send():Promise<void>{
    try{
        this.peoductsService.addProduct(this.product)
        alert("product successfully added!")
    }catch(err:any){
      console.log(err)
    }
  }


  
}