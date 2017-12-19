import {Route, CanActivate} from '@angular/router';
import {ListProductComponent} from './TheBody/list-product/list-product.component';
import {ProdComponent} from './TheBody/prod/prod.component';
import {DeskComponent} from './TheBody/desk/desk.component';
import {PhoneComponent} from './TheBody/phone/phone.component';
import {TabComponent} from './TheBody/tab/tab.component';
import {TvComponent} from './TheBody/tv/tv.component';
import {PcComponent} from './TheBody/pc/pc.component';
import {HomeComponent} from './TheBody/home/home.component';
import {FindComponent} from './TheBody/find/find.component';
import { LoggingComponent } from './TheBody/logging/logging.component';
import { PanierComponent } from './TheBody/panier/panier.component';
import { FavorieComponent } from './TheBody/favorie/favorie.component';
import { ProfilComponent } from './TheBody/profil/profil.component';
import { SignupComponent } from './TheBody/signup/signup.component';
import { MsgComponent } from './TheBody/msg/msg.component';
import { LogginGuardService } from './shared/Guard/loggin-guard.service';
import { AdminComponent } from './TheBody/admin/admin.component';
import { Admin1Component } from './TheBody/admin1/admin1.component';
import { Gard1Service } from './shared/gard1/gard1.service';

export const RouterConfig: Route[] = [
  {path: 'welcome', component: HomeComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'msg', component: MsgComponent },
  {path: 'product/:productID', component: ProdComponent },
  {path: 'bytype/:type', component: DeskComponent },
  {path: 'panier', component: PanierComponent , canActivate: [LogginGuardService] },
  {path: 'favorie', component: FavorieComponent,canActivate: [LogginGuardService] },
  {path: 'desktop', component: DeskComponent },
  {path: 'laptop', component: PcComponent },
  {path: 'profil', component: ProfilComponent,canActivate: [LogginGuardService] },
  {path: 'smartphone', component: PhoneComponent },
  {path: 'tablette', component: TabComponent },
  {path: 'ecran', component: TvComponent },
  {path: 'aduser', component: AdminComponent, canActivate: [Gard1Service] },
  {path: 'adcard', component: Admin1Component, canActivate: [Gard1Service] },
  {path: 'allproducts', component: ListProductComponent },
  {path: 'logging', component: LoggingComponent },
  {path: 'search/:productName', component: FindComponent },
  {path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: '**', redirectTo: 'welcome', pathMatch: 'full' },
  ];