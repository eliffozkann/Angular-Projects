import { AppStoreState } from '../store/app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerModel$!: Observable<Customer | null>;

  // private httpClient:HttpClient;
  private controllerUrl = `${environment.apiUrl}/customers`;

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppStoreState>
  ) {
    this.customerModel$ = this.store.select(
      (s) => s.customerToRegister.customer
    );
    // this.httpClient=httpClient;
  }

  getCustomer(): Observable<Customer[]> {
    //get metodu Get Http istediğini hazırlıyor.
    return this.httpClient.get<Customer[]>(this.controllerUrl);
  }

  getByIdCustomer(id: number): Observable<void> {
    return this.httpClient.get<void>(`${this.controllerUrl}?id${id}`);
  }

  add(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.controllerUrl, customer);
  }
}
