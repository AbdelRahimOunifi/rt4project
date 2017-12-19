import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {CarouselComponent} from './TheBody/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ListProductComponent} from './TheBody/list-product/list-product.component';
import {ProductService} from './shared/deliver/product.service';
import { HttpClientModule } from '@angular/common/http';
import {PostService} from './shared/PostHttp/post.service';
import {DeskComponent} from './TheBody/desk/desk.component';
import {PcComponent} from './TheBody/pc/pc.component';
import {PhoneComponent} from './TheBody/phone/phone.component';
import {ProdComponent} from './TheBody/prod/prod.component';
import {TabComponent} from './TheBody/tab/tab.component';
import {TvComponent} from './TheBody/tv/tv.component';
import {HomeComponent} from './TheBody/home/home.component';
import {RouterModule} from '@angular/router';
import {RouterConfig} from './router.config';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './shared/filter/filter.pipe';
import {SearchPipe} from './shared/search/search.pipe';
import {FindComponent} from './TheBody/find/find.component';
import {IdfilterPipe} from './shared/idfilter/idfilter.pipe';
import { LoggingComponent } from './TheBody/logging/logging.component';
import { AuthService } from './shared/auth/auth.service';
import { PanierComponent } from './TheBody/panier/panier.component';
import { FavorieComponent } from './TheBody/favorie/favorie.component';
import { CartService } from './shared/cart/cart.service';
import { FavorieService } from './shared/favorie/favorie.service';
import { TypeService } from './shared/type/type.service';
import { FinderService } from './shared/finder/finder.service';
import { ProfilComponent } from './TheBody/profil/profil.component';
import { SignupComponent } from './TheBody/signup/signup.component';
import { AccountService } from './shared/Account/account.service';
import { MsgComponent } from './TheBody/msg/msg.component';
import { LogginGuardService } from './shared/Guard/loggin-guard.service';
import { AdminComponent } from './TheBody/admin/admin.component';
import { AdminService } from './shared/admin/admin.service';
import { Admin1Component } from './TheBody/admin1/admin1.component';
import { Gard1Service } from './shared/gard1/gard1.service';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ListProductComponent,
    DeskComponent,
    PcComponent,
    PhoneComponent,
    ProdComponent,
    TabComponent,
    TvComponent,
    HomeComponent,
    FilterPipe,
    SearchPipe,
    FindComponent,
    IdfilterPipe,
    LoggingComponent,
    PanierComponent,
    FavorieComponent,
    ProfilComponent,
    SignupComponent,
    MsgComponent,
    AdminComponent,
    Admin1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [
    ProductService,
    PostService,
    FilterPipe,
    AuthService,
    CartService,
    FavorieService,
    TypeService,
    FinderService,
    AccountService,
    LogginGuardService,
    AdminService,
    Gard1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
