import { AppStoreState } from '../store/app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { setCatalogToRegister } from '../store/customerToRegister/customerToRegister.actions';
import { Catalog } from '../models/catalog';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  catalogRegisterModel$!: Observable<Catalog | null>;
  controllerUrl = `${environment.apiUrl}/catalog`;

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppStoreState>
  ) {
    this.catalogRegisterModel$ = this.store.select(
      (s) => s.customerToRegister.catalog
    );
  }

  get(): Observable<Catalog[]> {
    return this.httpClient.get<Catalog[]>(this.controllerUrl);
  }

  add(catalog: Catalog): Observable<Catalog> {
    return this.httpClient.post<Catalog>(this.controllerUrl, catalog);
  }

  update(catalog: Catalog): Observable<Catalog> {
    return this.httpClient.put<Catalog>(
      `${this.controllerUrl}/${catalog.id}`,
      catalog
    );
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`);
  }

  saveToStore(catalog: Catalog) {
    this.store.dispatch(
      setCatalogToRegister({ catalogRegisterModel: catalog })
    );
  }
}
