import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreasService } from './../areas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  rectangleData: FormGroup
  Rez;


  constructor(private service: AreasService,
    private fb: FormBuilder) { }


  getRectangleArea() {

    var body = {
      longitude: this.rectangleData.get('longitude').value,
      latitude: this.rectangleData.get('latitude').value
    };
    console.log(body);

    var shapeName = "rectangle";

    this.service.getArea(body,shapeName).subscribe(data => {
      this.Rez = data;
      console.log(this.Rez);
    });
  }


  ngOnInit(): void {
    this.rectangleData = this.fb.group({
      'longitude': ['', Validators.compose([Validators.required, Validators.min(1)])],
      'latitude': ['', Validators.compose([Validators.required, Validators.min(1)])]
    });

    console.log(this.rectangleData);
  }


  get RectangleErrLongitude() {
    return this.rectangleData.controls.longitude;
  }

  get resctangleErrLatitude() {
    return this.rectangleData.controls.latitude;
  }
}
