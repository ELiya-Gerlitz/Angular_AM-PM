import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import ProductModel from "../models/ProductModel";
import { appConfig } from "../utils/appConfig";
import { firstValueFrom } from "rxjs";
import CatrgoryModel from "../models/CategoryModel";

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceService {

  public constructor( private http : HttpClient) {}

  public async getAllProducts(): Promise<ProductModel[]> {
    const observable = this.http.get<ProductModel[]>(appConfig.productsUrl)
    const products =  await firstValueFrom(observable)
    return products
}

public async getAllCategories(): Promise<CatrgoryModel[]> {
  const observable = this.http.get<CatrgoryModel[]>(appConfig.categoriesUrl)
  const categories =  await firstValueFrom(observable)
  return categories
}

public async getProdByCategoryId( categId :number): Promise<ProductModel[]> {
  const observable = this.http.get<ProductModel[]>(appConfig.prodByCategoryIdURL + categId)
  const prods =  await firstValueFrom(observable)
  return prods
}

public async deleteItem( prodId :number): Promise<void> {
  const observable = this.http.delete<void>(appConfig.productsUrl + prodId)
  const prods =  await firstValueFrom(observable) //this line is a MUST!!!!!! Does NOT work otherwise!
}
public async addProduct( product : ProductModel): Promise<void> {
  const observable = this.http.post<void>(appConfig.productsUrl, product)
  const prod =  await firstValueFrom(observable) //this line is a MUST!!!!!! Does NOT work otherwise!
}

}

