import { Injectable } from "@angular/core";

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  productlist: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) {}

  getProducts() {
    return (this.productlist = this.firebase.list("products"));
  }

  insertProduct(product: Product) {
    this.productlist.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  updateProduct(product: Product) {
    this.productlist.update(product.$key, {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  deleteProduct($key: string) {
    this.productlist.remove($key);
  }
}
