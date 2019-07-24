import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { HomeComponent } from './home/home.component';
import { CercComponent } from './cerc/cerc.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TriunghiComponent } from './triunghi/triunghi.component';
import { PoligonComponent } from './poligon/poligon.component';
import { ParalelogramComponent } from './paralelogram/paralelogram.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    HomeComponent,
    CercComponent,
    RectangleComponent,
    TriunghiComponent,
    PoligonComponent,
    ParalelogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
