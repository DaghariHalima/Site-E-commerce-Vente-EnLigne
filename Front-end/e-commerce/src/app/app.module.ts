import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GraphQLModule } from './graphql.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadInterceptor } from './app.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { FactureComponent } from './facture/facture.component';
import { WishComponent } from './wish/whish.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'category/:id', component: CategoryComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'facture', component: FactureComponent
  },
  {
    path: 'wish', component: WishComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    CartComponent,
    AboutComponent,
    ShopComponent,
    FactureComponent,
    WishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    NgbModule,
 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
