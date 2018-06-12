

import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;

  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get("id");
    this.pageTitle += `: ${id}`;
  }

  constructor(private _route: ActivatedRoute) {}

}
