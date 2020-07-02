import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurexpertiseComponent } from './ourexpertise/ourexpertise.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"our-team", component:OurteamComponent},
  {path:"ourexpertise",component:OurexpertiseComponent},
  {path:"join-us",component:JoinusComponent},
  {path:"contact",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
