import { Component, OnInit } from '@angular/core';
import { BikeService } from "../../services/bike.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg;

  constructor(private bikeService: BikeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getBikeReg(this.activatedRoute.snapshot.params.id);
  }

  getBikeReg(id:number) {
    this.bikeService.getBike(id).subscribe(
      data =>  {
      this.bikeReg = data;
      },
      err => {
        console.error(err);
      }
    )
  }

}
