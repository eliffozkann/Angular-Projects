import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ListviewComponent } from './components/listview/listview.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppStoreState } from './store/app.state';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducer';
import { AssignCatalogComponent } from './pages/assign-catalog/assign-catalog.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SummaryComponent } from './pages/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ListviewComponent,
    ProductListComponent,
    CreateFakeArrayPipe,
    SplitPipe,
    FooterComponent,
    LoadingOverlayComponent,
    NavbarComponent,
    AssignCatalogComponent,
    CreateCustomerComponent,
    CustomerComponent,
    FilterPipe,
    CustomerDetailComponent,
    HomepageComponent,
    LoginComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      },
    }),
    StoreModule.forRoot<AppStoreState>(appReducers),
    StoreDevtoolsModule.instrument({
      autoPause: false,
    }),
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
