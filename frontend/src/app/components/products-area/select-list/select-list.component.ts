import { Component, OnInit } from '@angular/core';
import CatrgoryModel from 'src/app/models/CategoryModel';
import ProductModel from 'src/app/models/ProductModel';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit{

  public categories : CatrgoryModel[] 
  public products : ProductModel[] 

  
  public constructor( private prodService : ProductsServiceService) {}


  async ngOnInit(): Promise<void> {
    try{
          this.categories = await this.prodService.getAllCategories()

    }catch(err:any){
      console.log(err)
    }
      }   

  public async sendCategoryId( e : any):Promise<void>{
      try{
        const categId = e.target.value
        this.products = await this.prodService.getProdByCategoryId(categId)
      }catch(err){
        console.log(err)
      }
            }
}
