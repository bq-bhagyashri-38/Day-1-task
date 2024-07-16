import { Routes } from '@angular/router';
import { NgOnChangeComponent } from './components/lifecyclehooks/ng-on-change/ng-on-change.component';
import { NgaftercontentcheckedComponent } from './components/lifecyclehooks/ngaftercontentchecked/ngaftercontentchecked.component';
import { NgaftercontentinitComponent } from './components/lifecyclehooks/ngaftercontentinit/ngaftercontentinit.component';
import { NgafterviewcheckedComponent } from './components/lifecyclehooks/ngafterviewchecked/ngafterviewchecked.component';
import { NgafterviewinitComponent } from './components/lifecyclehooks/ngafterviewinit/ngafterviewinit.component';
import { NgdocheckComponent } from './components/lifecyclehooks/ngdocheck/ngdocheck.component';
import { NgondestroyComponent } from './components/lifecyclehooks/ngondestroy/ngondestroy.component';
import { NgoninitComponent } from './components/lifecyclehooks/ngoninit/ngoninit.component';
import { HomeComponent } from './task-2-routing/home/home.component';
import { MenuComponent } from './task-2-routing/menu/menu.component';
import { ContactComponent } from './task-2-routing/contact/contact.component';
import { NestedRoutingComponentOneComponent } from './task-2-routing/routing/nested-routing-component-one/nested-routing-component-one.component';
import { NestedRoutingComponentTwoComponent } from './task-2-routing/routing/nested-routing-component-two/nested-routing-component-two.component';
import { LoginComponent } from './routingGuard/login/login.component';
import { authGuard } from './auth.guard';
import { LoggedInuserComponent } from './routingGuard/logged-inuser/logged-inuser.component';
import { ProductListComponent } from './routeParameter/product-list/product-list.component';
import { ProductDetailsComponent } from './routeParameter/product-details/product-details.component';



export const routes: Routes = [
    { path: 'ngonchange', component: NgOnChangeComponent},
    { path: 'ngaftercontentchecked', component: NgaftercontentcheckedComponent},
    { path: 'ngaftercontentinit', component: NgaftercontentinitComponent},
    { path: 'ngafterviewchecked', component: NgafterviewcheckedComponent},
    { path: 'ngafterviewinit', component: NgafterviewinitComponent},
    { path: 'ngdocheck', component: NgdocheckComponent},
    { path: 'ngondestroy', component: NgondestroyComponent},
    { path: 'ngoninits', component: NgoninitComponent},

    // { path: '', pathMatch:'full' ,component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home/menu', component: MenuComponent},
    { path: 'home/menu/contact', component: ContactComponent},

    {
        path: 'nestedroutingcomponentone',
        component: NestedRoutingComponentOneComponent,
        children: [
        { path: 'nestedroutingcomponentwo',component: NestedRoutingComponentTwoComponent }
        ]
     },
     { path: 'login', component: LoginComponent},
     { path: 'loginuser', component: LoggedInuserComponent, canActivate:[authGuard]},
     { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
     { path: 'products', component: ProductListComponent },
     { path: 'product/:id', component: ProductDetailsComponent} //
      

];
