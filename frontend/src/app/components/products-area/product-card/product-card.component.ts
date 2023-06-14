import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import ProductModel from 'src/app/models/ProductModel';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  
  @Input()
  public product : ProductModel

  public constructor( private productsService : ProductsServiceService,  private router : Router) {}


  public async deleteItem( prodId : number):Promise <void>{
      try{
        if(!window.confirm("Are you sure?")) return;
        await this.productsService.deleteItem(prodId)
        // alert("successfully deleted!")
        // this.router.navigate(["/" , "home"])
        delete this.product

        // this is possible this way only if I do the deleting straight from the List-Component.
        // const index = this.movies.findIndex(m => m._id === _id);
        // this.movies.splice(index, 1);

      }catch(err:any){
        console.log(err)
      }
  }

}
