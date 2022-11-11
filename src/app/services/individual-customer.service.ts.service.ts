import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IndividualCustomer } from '../models/individualCustomer';
import { AppStoreState } from '../store/app.state';
import { setIndivCustomerToRegister } from '../store/customerToRegister/customerToRegister.actions';

@Injectable({
  providedIn: 'root',
})
export class IndividualCustomerServiceTsService {
  individualCustomerModel$!: Observable<IndividualCustomer | null>;

  private controllerUrl = `${environment.apiUrl}/individualCustomers`;

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppStoreState>
  ) {
    this.individualCustomerModel$ = this.store.select(
      (s) => s.customerToRegister.individualCustomer
    );
  }

  getIndvCustomer(): Observable<IndividualCustomer[]> {
    return this.httpClient.get<IndividualCustomer[]>(this.controllerUrl);
  }

  getByIdIndvCustomer(customerId: number): Observable<IndividualCustomer[]> {
    return this.httpClient.get<IndividualCustomer[]>(
      `${this.controllerUrl}?customerId=${customerId}`
    );
  }

  add(indivCustomer: IndividualCustomer): Observable<IndividualCustomer> {
    return this.httpClient.post<IndividualCustomer>(
      this.controllerUrl,
      indivCustomer
    );
  }

  saveToStore(indivCustomer: IndividualCustomer) {
    this.store.dispatch(
      setIndivCustomerToRegister({ individualCustomerModel: indivCustomer })
    );
  }
}
