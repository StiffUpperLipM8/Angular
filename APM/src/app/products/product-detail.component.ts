

import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get("id");
    this.pageTitle += ': ' + id;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }


}
