import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  changeText: boolean;

  constructor() {

    this.changeText = false;
  }

  ngOnInit() {
  }

}
