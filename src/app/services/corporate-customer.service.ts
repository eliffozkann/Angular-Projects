import { AppStoreState } from '../store/app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { setCorpoCustomerToRegister } from '../store/customerToRegister/customerToRegister.actions';
import { CorporateCustomer } from '../models/corporateCustomer';

@Injectable({
  providedIn: 'root',
})
export class CorporateCustomerService {
  corporateCustomerModel$!: Observable<CorporateCustomer | null>;

  private controllerUrl = `${environment.apiUrl}/corporateCustomers`;

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppStoreState>
  ) {
    this.corporateCustomerModel$ = this.store.select(
      (s) => s.customerToRegister.corporateCustomer
    );
    // this.httpClient=httpClient;
  }

  getCorporateCustomer(): Observable<CorporateCustomer[]> {
    //get metodu Get Http istediğini hazırlıyor.
    return this.httpClient.get<CorporateCustomer[]>(this.controllerUrl);
  }

  getByIdCorporateCustomer(
    customerId: number
  ): Observable<CorporateCustomer[]> {
    return this.httpClient.get<CorporateCustomer[]>(
      `${this.controllerUrl}?customerId=${customerId}`
    );
  }

  add(corpoCustomer: CorporateCustomer): Observable<CorporateCustomer> {
    return this.httpClient.post<CorporateCustomer>(
      this.controllerUrl,
      corpoCustomer
    );
  }

  saveToStore(corpoCustomer: CorporateCustomer) {
    this.store.dispatch(
      setCorpoCustomerToRegister({ corporateCustomerModel: corpoCustomer })
    );
  }
}
