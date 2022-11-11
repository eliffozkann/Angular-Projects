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
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ListviewComponent,
    ProductListComponent,
    CreateFakeArrayPipe,
    SplitPipe,
    LoginComponent,
    FooterComponent,
    LoadingOverlayComponent,
    NavbarComponent,
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
