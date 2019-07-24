import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AreasService } from './../areas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poligon',
  templateUrl: './poligon.component.html',
  styleUrls: ['./poligon.component.css']
})
export class PoligonComponent implements OnInit {


  poligonData: FormGroup;
  Rez;


  constructor(private service: AreasService,
    private fb: FormBuilder) { }



  ngOnInit(): void {
    this.poligonData = this.fb.group({
      'nrDeLaturi': ['', Validators.compose([Validators.required, Validators.min(1)])],
      'raza': ['', Validators.compose([Validators.required, Validators.min(1)])]
    });
    console.log(this.poligonData);
  }


  getPoligonArea() {

    var body = {
      nrDeLaturi: this.poligonData.get('nrDeLaturi').value,
      raza: this.poligonData.get('raza').value
    };

    var shapeName = "poligon";

    this.service.getArea(body, shapeName).subscribe(data => {
      this.Rez = data;
      console.log(this.Rez);
    });
  }


  get PoligonNrDeLaturiErr() {
    return this.poligonData.controls.nrDeLaturi;
  }

  get PoligonRazaErr() {
    return this.poligonData.controls.raza;
  }

}