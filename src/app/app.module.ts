import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

// Firebase

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductListComponent } from "./components/products/product-list/product-list.component";
import { ProductComponent } from "./components/products/product/product.component";

//Services
import { ProductService } from "./services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
