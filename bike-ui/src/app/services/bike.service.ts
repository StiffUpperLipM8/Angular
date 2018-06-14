import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
}

@Injectable()
export class BikeService {

  constructor(private http: HttpClient) { }

  public getBikes() {
    return this.http.get("/server/api/v1/bikes");
  }

  public getBike(id) {
    return this.http.get("/server/api/v1/bikes/" + id);
  }

  public createBike(bike) {
    let body = JSON.stringify(bike);
    return this.http.post("/server/api/v1/bikes", body, httpOptions)
  }

}
