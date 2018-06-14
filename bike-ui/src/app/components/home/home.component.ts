import {Component, OnInit} from '@angular/core';
import {BikeService} from "../../services/bike.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    "model 1",
    "model 2",
    "model 3"
  ];
  bikeform: FormGroup;
  validationMessage: string = "";


  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeform = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      model: new FormControl("", Validators.required),
      serialNumber: new FormControl("", Validators.required),
      purchasePrice: new FormControl("", Validators.required),
      purchaseDate: new FormControl("", Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if(this.bikeform.valid) {
      this.validationMessage = "Registration completed";
      this.bikeService.createBike(this.bikeform.value).subscribe(
        data => {
          this.bikeform.reset();
          return true;
        },
      error => {
          return console.log(error);
        }
      )
    } else {
      this.validationMessage = "Validation failed";
    }
  }

}
