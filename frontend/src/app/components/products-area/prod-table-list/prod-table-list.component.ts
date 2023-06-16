import { Component, OnInit } from '@angular/core';
import CategoryModel from 'src/app/models/CategoryModel';
import ProductModel from 'src/app/models/ProductModel';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-prod-table-list',
  templateUrl: './prod-table-list.component.html',
  styleUrls: ['./prod-table-list.component.css']
})
export class ProdTableListComponent implements OnInit{

  public categories: CategoryModel[] = [];
  public products: ProductModel[] = [];

  public constructor(private prodService: ProductsServiceService) { }

  public async ngOnInit() {
      try {
          this.categories = await this.prodService.getAllCategories();
      }
      catch (err: any) {
          alert(err.message);
      }
  }

  public async displayMovies(e: any){
try{
      const categoryId = e.target.value
      this.products = await this.prodService.getProdByCategoryId(categoryId)
    }catch(err){
      console.log(err)
    }
  }

  public async deleteMe (prodId :number){
    if(! window.confirm("are you sure?")) return 
    this.prodService.deleteItem(prodId)
    .then(()=> {
      alert("successfully removed")
      const index = this.products.findIndex(p => p.productId === prodId)
      this.products.splice(index, 1)
    })
    .catch(err => console.log(err))
  }

}
