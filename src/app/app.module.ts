import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { CustomerFormComponent } from './pages/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './pages/customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductFormComponent,
    ProductListComponent,
    CustomerFormComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
