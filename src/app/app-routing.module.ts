import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './components/admin/admin.component';
import { AllusersComponent } from './components/allusers/allusers.component';
import { BecomeWasherComponent } from './components/become-washer/become-washer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { WasherApplyComponent } from './components/washer-apply/washer-apply.component';
import { PackagesComponent } from './components/packages/packages.component';
import { AuthGuard } from './_auth/auth.guard';
import { AllWashersComponent } from './components/all-washers/all-washers.component';
import { UserComponent } from './components/user/user.component';
import { WasherComponent } from './components/washer/washer.component';
import { OpenOrdersComponent } from './components/open-orders/open-orders.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { WasherOrdersComponent } from './components/washer-orders/washer-orders.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { WasherProfileComponent } from './components/washer-profile/washer-profile.component';
import { UpdateWasherProfileComponent } from './components/update-washer-profile/update-washer-profile.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AllPackagesComponent } from './components/all-packages/all-packages.component';
import { UpdatePackagePriceComponent } from './components/update-package-price/update-package-price.component';

const routes: Routes = [
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'placeorder', component: OrderComponent, canActivate: [AuthGuard], data: { role: 'USER' } },
  { path: 'order-detail/:id', component:OrderDetailsComponent},
  
  { path: 'become-washer', component: BecomeWasherComponent },
  
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { role: 'USER'},
       children:[
          {path:'user-profile', component:UserProfileComponent, canActivate: [AuthGuard], data: { role:'USER'} },
          {path:'userorders',component:UserOrdersComponent,canActivate: [AuthGuard], data: { role:'USER'}},
          {path:'update/:username',component:UpdateUserProfileComponent},
          {path:'',redirectTo: 'user-profile', pathMatch: 'full'}
      ],
       },

       { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' },
      children:[
        
        { path: 'all-orders', component: OrderListComponent },
        { path: 'allusers', component: AllusersComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
        { path: 'allwashers', component: AllWashersComponent, canActivate: [AuthGuard], data: { role: 'ADMIN'} },
        {path:'all-packages', component:AllPackagesComponent,canActivate: [AuthGuard], data: { role: 'ADMIN'}},
        {path:'update-package/:name', component:UpdatePackagePriceComponent,canActivate: [AuthGuard], data: { role: 'ADMIN'}},
        { path: '', redirectTo: 'all-orders', pathMatch: 'full' }
      ] },
  
      { path: 'washer-apply', component: WasherApplyComponent },

  {
    path: 'washer', component: WasherComponent,canActivate: [AuthGuard], data: { role: 'WASHER'},
    children:[
      { path: 'open-orders', component: OpenOrdersComponent, canActivate: [AuthGuard], data: { role:'WASHER' } },
      {path:'washer-orders',component:WasherOrdersComponent,canActivate: [AuthGuard], data: { role:'WASHER' }},
      {path:'washer-profile',component:WasherProfileComponent},
      {path:'update/:username', component:UpdateWasherProfileComponent},
      { path: '', redirectTo: 'open-orders', pathMatch: 'full' },
    ],
    
  },


  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'forbidden', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
