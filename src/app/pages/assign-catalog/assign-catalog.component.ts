import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog } from 'src/app/models/catalog';
import { CatalogService } from 'src/app/services/catalog.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  templateUrl: './assign-catalog.component.html',
  styleUrls: ['./assign-catalog.component.css'],
})
export class AssignCatalogComponent implements OnInit {
  catalog!: Catalog[];
  selectedCatalog: any = [];

  constructor(
    private catalogService: CatalogService,
    private serviceService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCatalog();
  }
  selectCatalog(catalog: Catalog) {
    this.selectedCatalog.push(catalog);
    console.log(this.selectedCatalog);
  }

  getAllCatalog() {
    const response = this.catalogService.get().subscribe((response) => {
      this.catalog = response;

      console.log(response);
    });
  }

  checkboxForm() {}

  saveState(catalog: Catalog) {
    this.catalogService.saveToStore(catalog);
  }

  goNext() {
    this.saveState(this.selectedCatalog);
    this.router.navigateByUrl('/summary');
  }
}
