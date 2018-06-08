
import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  private productUrl = "./api/products/products.json";

  // JSON from HTTP response is automatically converted into specified generic value
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productUrl)
                     .catch(this.handleError);
  }

  constructor(private _http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error.message);
  }

}
