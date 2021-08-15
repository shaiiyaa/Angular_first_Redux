import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { MainComponent } from './components/main-area/main/main.component';
import { YoutubeVideoComponent } from './components/main-area/youtube-video/youtube-video.component';
import { DiscountComponent } from './components/main-area/discount/discount.component';
import { SpecialsComponent } from './components/main-area/specials/specials.component';
import { DessertsComponent } from './components/main-area/desserts/desserts.component';
import { SalesComponent } from './components/main-area/sales/sales.component';
import { SloganComponent } from './components/main-area/slogan/slogan.component';
import { RecommendedComponent } from './components/main-area/recommended/recommended.component';
import { SearchComponent } from './components/main-area/search/search.component';

import { FormsModule } from '@angular/forms';


import { PricingComponent } from './components/main-area/pricing/pricing.component';
import { ClockComponent } from './components/main-area/clock/clock.component';
import { InventoryComponent } from './components/main-area/inventory/inventory.component';
import { ExerciseRandomColorComponent } from './components/main-area/exercise-random-color/exercise-random-color.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { NewProductComponent } from './components/product-area/new-product/new-product.component';
import { ProductDetailsComponent } from './components/product-area/product-details/product-details.component';
import { ProductComponent } from './components/product-area/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './components/product-area/edit-product/edit-product.component';
import { WorkersListComponent } from './components/workers-area/workers-list/workers-list.component';
import { WorkersDetailsComponent } from './components/workers-area/workers-details/workers-details.component';
import { NewWorkerComponent } from './components/workers-area/new-worker/new-worker.component';
import { EditWorkerComponent } from './components/workers-area/edit-worker/edit-worker.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { AuthMenuComponent } from './components/auth-area/auth-menu/auth-menu.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { CutegoriesAreaComponent } from './components/cutegories-area/cutegories-area.component';
import { JwtInterceptor } from './services/jwt.interceptor';





@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    YoutubeVideoComponent,
    DiscountComponent,
    SpecialsComponent,
    DessertsComponent,
    SalesComponent,
    SloganComponent,
    RecommendedComponent,
    SearchComponent,
    PricingComponent,
    ClockComponent,
    InventoryComponent,
    ExerciseRandomColorComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    NewProductComponent,
    EditProductComponent,
    WorkersListComponent,
    WorkersDetailsComponent,
    NewWorkerComponent,
    EditWorkerComponent,
    RegisterComponent,
    AuthMenuComponent,
    LoginComponent,
    LogoutComponent,
    CutegoriesAreaComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, // Register the interceptor
        useClass: JwtInterceptor, // Our interceptor class
        multi: true // Can register it several times if needed
  }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
