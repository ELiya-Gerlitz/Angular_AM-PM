import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import ProductModel from "../models/ProductModel";
import { appConfig } from "../utils/appConfig";
import { firstValueFrom } from "rxjs";

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

}

