import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  private controllerUrl = `${environment.apiUrl}/invoices`;

  constructor(private httpClient: HttpClient) {}

  getInvoices(): Observable<Invoice[]> {
    return this.httpClient.get<Invoice[]>(this.controllerUrl);
  }

  add(invoice: Invoice): Observable<Invoice> {
    return this.httpClient.post<Invoice>(this.controllerUrl, invoice);
  }

  update(invoice: Invoice): Observable<Invoice> {
    return this.httpClient.put<Invoice>(
      `${this.controllerUrl}?customerId=${invoice.id}`,
      invoice
    );
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`);
  }

  getByIdInvoices(customerId: number): Observable<Invoice[]> {
    return this.httpClient.get<Invoice[]>(
      `${this.controllerUrl}?customerId=${customerId}`
    );
  }
}
