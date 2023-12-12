import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DessertPageComponent } from './pages/dessert-page/dessert-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AboutComponent } from './about/about.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';



const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'dessert/:id', component: DessertPageComponent},
  { path: 'cart-page', component: CartPageComponent},
  { path: 'check-out', component: CheckOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
