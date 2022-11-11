import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private controllerUrl = `${environment.apiUrl}/subscriptions`;

  constructor(private httpClient: HttpClient) {}

  getSubscriptions(): Observable<Subscription[]> {
    return this.httpClient.get<Subscription[]>(this.controllerUrl);
  }

  add(subscription: Subscription): Observable<Subscription> {
    return this.httpClient.post<Subscription>(this.controllerUrl, subscription);
  }

  update(subscription: Subscription): Observable<Subscription> {
    return this.httpClient.put<Subscription>(
      `${this.controllerUrl}?customerId=${subscription.id}`,
      subscription
    );
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`);
  }

  getByIdSubscriptions(customerId: number): Observable<Subscription[]> {
    return this.httpClient.get<Subscription[]>(
      `${this.controllerUrl}?customerId=${customerId}`
    );
  }
}
