import { AreasService } from './../areas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerc',
  templateUrl: './cerc.component.html',
  styleUrls: ['./cerc.component.css']
})
export class CercComponent implements OnInit {

  circleData: FormGroup
  Rez;



  constructor(private fb: FormBuilder,
    private service: AreasService) { }

  getCircleArea() {
    var body = {
      'raza': this.circleData.get('razaCercului').value
    }
    var numeFig = 'circle';
    this.service.getArea(body,numeFig).subscribe(data => {
      this.Rez = data;
      console.log(this.Rez);
    });
  }



  ngOnInit(): void {
    this.circleData = this.fb.group({
      'razaCercului': ['', Validators.compose([Validators.required, Validators.min(1)])]
    });
    console.log(this.circleData);
  }

  get circleErr() {
    return this.circleData.controls.razaCercului;
  }

}

