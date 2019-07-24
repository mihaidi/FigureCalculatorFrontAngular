import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreasService } from './../areas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triunghi',
  templateUrl: './triunghi.component.html',
  styleUrls: ['./triunghi.component.css']
})
export class TriunghiComponent implements OnInit {

  triunghiData: FormGroup
  Rez;
 


  constructor(private service: AreasService,
    private fb: FormBuilder) { }


  getTriangleaArea() {

    var body = {
      baza: this.triunghiData.get('baza').value,
      inaltimea: this.triunghiData.get('inaltimea').value
    };
    console.log(body);

    var shapeName = "triangle";

    this.service.getArea(body,shapeName).subscribe(data => {
      this.Rez = data;
      console.log(this.Rez);
    });

  }

  ngOnInit() {
    this.triunghiData = this.fb.group({
      'baza': ['', Validators.compose([Validators.required, Validators.min(1)])],
      'inaltimea': ['', Validators.compose([Validators.required, Validators.min(1)])]
    });
    console.log(this.triunghiData);
  }


  get TriunghiErrInaltimea() {
    return this.triunghiData.controls.inaltimea;
  }

  get TriunggiErrBaza() {
    return this.triunghiData.controls.baza;
  }


}
