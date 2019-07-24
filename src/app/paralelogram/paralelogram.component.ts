import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreasService } from './../areas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paralelogram',
  templateUrl: './paralelogram.component.html',
  styleUrls: ['./paralelogram.component.css']
})
export class ParalelogramComponent implements OnInit {

  ParalelogramData: FormGroup
  Rez;


  constructor(private service: AreasService,
    private fb: FormBuilder) { }



  getParalelogramArea() {
    var body = {
      baza: this.ParalelogramData.get("baza").value,
      inaltimea: this.ParalelogramData.get("inaltimea").value
    };

    var shapeName = "paralelogram";

    this.service.getArea(body, shapeName).subscribe(data => {
      this.Rez = data;
      console.log(this.Rez);
    });
  }



  ngOnInit(): void {
    this.ParalelogramData = this.fb.group({
      'baza': ['', Validators.compose([Validators.required, Validators.min(1)])],
      'inaltimea': ['', Validators.compose([Validators.required, Validators.min(1)])]
    });
    console.log(this.ParalelogramData);
  }

  get ParalelogramBazaErr() {
    return this.ParalelogramData.controls.baza;
  }

  get ParalelogramInaltimeaErr() {
    return this.ParalelogramData.controls.inaltimea;
  }


}
