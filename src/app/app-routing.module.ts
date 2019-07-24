import { ParalelogramComponent } from './paralelogram/paralelogram.component';
import { PoligonComponent } from './poligon/poligon.component';
import { CercComponent } from './cerc/cerc.component';
import { HomeComponent } from './home/home.component';
import { SquareComponent } from './square/square.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TriunghiComponent } from './triunghi/triunghi.component';

const routes: Routes = [
  {path:'square',component:SquareComponent},
  {path:'',component:HomeComponent},
  {path:'circle',component:CercComponent},
  {path:'rectangle',component:RectangleComponent},
  {path:'triangle',component:TriunghiComponent},
  {path:'poligon',component:PoligonComponent},
  {path:'paralelogram',component:ParalelogramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
