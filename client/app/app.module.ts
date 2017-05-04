import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import ProductItemComponent from "./components/product-item/product-item";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import {ProductService} from "./services/product-service";
import {ONLINE_AUCTION_SERVICES} from './services/services';
import HomeComponent from "./components/home/home";
import ProductDetailComponent from "./components/product-detail/product-detail";

@NgModule({
<<<<<<< HEAD:client/app/app.module.ts
    imports:      [ BrowserModule, ReactiveFormsModule,
                    FormsModule, HttpModule,
                    RouterModule.forRoot([
                        {path: '',                    component: HomeComponent},
                        {path: 'products/:productId', component: ProductDetailComponent}
    ]) ],
    declarations: [ ApplicationComponent,
=======
    imports: [ 
                BrowserModule, 
                ReactiveFormsModule, 
                FormsModule,
                RouterModule.forRoot([
                    {path: '',                    component: HomeComponent},
                    {path: 'products/:productId', component: ProductDetailComponent}
            ])],
    declarations: [ 
                    ApplicationComponent,
>>>>>>> f0aa6a79eb07d7ba591e3967203bc412053f93bb:app/app.module.ts
                    CarouselComponent,
                    FooterComponent,
                    NavbarComponent,
                    HomeComponent,
                    ProductDetailComponent,
                    ProductItemComponent,
                    SearchComponent,
<<<<<<< HEAD:client/app/app.module.ts
                    StarsComponent],
    providers:    [ProductService,
                   ONLINE_AUCTION_SERVICES,
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
=======
                    StarsComponent,
                    FilterPipe
                ],
    providers: [
                    ProductService,
                    { provide: LocationStrategy, useClass: HashLocationStrategy }],
>>>>>>> f0aa6a79eb07d7ba591e3967203bc412053f93bb:app/app.module.ts
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }