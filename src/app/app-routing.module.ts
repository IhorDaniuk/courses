import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '@core/components/header/header.component';
import { SearchComponent } from '@shared/search/search.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent},
  { path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
