import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';


const routes: Routes = [
  {path:'',component:HomePageComponent , title:'Home'},
  {path:'about',component:AboutPageComponent , title:'About'},
  {path:'contact',component:ContactPageComponent , title:'Contact'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
