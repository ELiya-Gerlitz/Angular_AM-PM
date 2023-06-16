import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import CategoryModel from 'src/app/models/CategoryModel';
import ProductModel from 'src/app/models/ProductModel';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-add-validation',
  templateUrl: './add-validation.component.html',
  styleUrls: ['./add-validation.component.css']
})
export class AddValidationComponent implements OnInit{
  public product = new ProductModel();

  public categories : CategoryModel[]

    // @ViewChild("productImage") // Looks for #productImage in the html and assign it to that field:
    // public productImage: ElementRef<HTMLInputElement>;

    public constructor(private productsService: ProductsServiceService, private router: Router) {} // DI
  public async ngOnInit():Promise< void> {
try{
this.categories = await this.productsService.getAllCategories()
}catch(err){
  console.log(err)
}
  }

    public async send() {
        try {
            // this.product.image = this.productImage.nativeElement.files[0];
            await this.productsService.addProduct(this.product);
            alert("Product added.");
            this.router.navigateByUrl("/home");
        }
        catch (err: any) {
            alert(err.message);
        }
    }
}
