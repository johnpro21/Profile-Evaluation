import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { GitAuthComponent } from './git-auth/git-auth.component';


const routes: Routes = [{ path: "", component: HomeComponent },
{ path: "login", component: LoginComponent },
{ path: "profile", component: ProfileComponent },
{ path: "search", component: SearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap:[]
})
export class AppRoutingModule { }
