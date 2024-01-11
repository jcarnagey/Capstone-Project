import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { DessertPageComponent } from './pages/dessert-page/dessert-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TitleComponent } from './title/title.component';
import { MatBadgeModule } from '@angular/material/badge';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutComponent } from './about/about.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { OrderItemsListComponent } from './order-items-list/order-items-list.component';
import { LoadingComponent } from './pages/loading/loading.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    TagsComponent,
    DessertPageComponent,
    CartPageComponent,
    PageNotFoundComponent,
    TitleComponent,
    AboutComponent,
    CheckOutComponent,
    OrderItemsListComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
