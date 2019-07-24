import { AreasService } from './../areas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  squareData: FormGroup
  Rez;
  constructor(private area: AreasService,
    private fb: FormBuilder) { }

  getSquareArea() {

    var body = {
      'latura': this.squareData.get('lungimeaLaturii').value
    }

    var shapeName = "square";

    this.area.getArea(body, shapeName).subscribe(data => {
      this.Rez = data;
      console.log(this.Rez);
    });
  }

  ngOnInit(): void {
    this.squareData = this.fb.group({
      'lungimeaLaturii': ['', Validators.compose([Validators.required, Validators.min(1)])]
    });
    console.log(this.squareData)
  }

  get form() {
    return this.squareData.controls.lungimeaLaturii;
  }

}
