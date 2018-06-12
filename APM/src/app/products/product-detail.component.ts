

import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;

  //ActivatedRoute for getting params passed to the current route. Router is for navigating to another routes
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get("id");
    this.pageTitle += ': ' + id;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }


}
