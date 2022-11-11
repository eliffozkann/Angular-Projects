import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AssignCatalogComponent } from './pages/assign-catalog/assign-catalog.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'services', component: HomepageComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'customers',
    component: CustomerComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'customerDetail/:id',
    component: CustomerDetailComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'createCustomer',
    component: CreateCustomerComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'catalog',
    component: AssignCatalogComponent,
    canActivate: [LoginGuard],
  },
  { path: 'summary', component: SummaryComponent, canActivate: [LoginGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
