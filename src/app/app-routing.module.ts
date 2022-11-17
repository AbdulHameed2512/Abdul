import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ResidentialComponent } from './residential/residential.component';
import { SustainableComponent } from './sustainable/sustainable.component';

const routes: Routes = [
  {path :'', component : HomeComponent},
  {path:'main', component:MainComponent},
  {path : 'Home' , component: HomeComponent},
  {path : 'footer' , component : FooterComponent},
  {path : 'residential' , component : ResidentialComponent},
  {path : 'commercial' , component : CommercialComponent},
  {path : 'sustainable', component : SustainableComponent},
  {path : 'contact', component : ContactComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
