 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { UserService } from './service/user.service';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AdminComponent } from './components/admin/admin.component';
import { PackagesComponent } from './components/packages/packages.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AllusersComponent } from './components/allusers/allusers.component';
import { AuthInterceptor } from './_auth/auth.intercepter';
import { OrderComponent } from './components/order/order.component';
import { BecomeWasherComponent } from './components/become-washer/become-washer.component';
import { WasherApplyComponent } from './components/washer-apply/washer-apply.component';
import { AllWashersComponent } from './components/all-washers/all-washers.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { WasherComponent } from './components/washer/washer.component';
import { OpenOrdersComponent } from './components/open-orders/open-orders.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { WasherOrdersComponent } from './components/washer-orders/washer-orders.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { WasherProfileComponent } from './components/washer-profile/washer-profile.component';
import { UpdateWasherProfileComponent } from './components/update-washer-profile/update-washer-profile.component';
import { AllPackagesComponent } from './components/all-packages/all-packages.component';
import { UpdatePackagePriceComponent } from './components/update-package-price/update-package-price.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    ForbiddenComponent,
    AdminComponent,
    PackagesComponent,
    AllusersComponent,
    OrderComponent,
    BecomeWasherComponent,
    WasherApplyComponent,
    AllWashersComponent,
    UserComponent,
    UserProfileComponent,
    UserOrdersComponent,
    WasherComponent,
    OpenOrdersComponent,
    OrderListComponent,
    WasherOrdersComponent,
    UpdateUserProfileComponent,
    OrderDetailsComponent,
    WasherProfileComponent,
    UpdateWasherProfileComponent,
    AllPackagesComponent,
    UpdatePackagePriceComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule ,
    MatDialogModule

  ],
  providers: [
     AuthGuard,
       {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true
     },
   UserService,
  ],
  bootstrap: [AppComponent],
  // entryComponents:[UpdateUserProfileComponent]
})
export class AppModule { }
