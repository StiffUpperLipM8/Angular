import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];

  // Dependency injection
  constructor(private _productService: ProductService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  // every time the istFilter changes (e.g. in html), the setter is invoked, so we can add a filtering logic here
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  getButtonText(): string {
    return (this.showImage) ? "Hide image" : "Show image";
  }

  ngOnInit(): void {
    // Works asynchronously - after subscription, for each async returned IProduct[]
    // will invoke success() funk (products => ...) or failure funk (error=> ...)
    this._productService.getProducts()
                        .subscribe(
                          products => {
                                  this.products = products;
                                  this.filteredProducts = this.products;
                                },
                          error => this.errorMessage = <any>error);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
