import { Component, OnInit } from '@angular/core';
import { CorporateCustomer } from 'src/app/models/corporateCustomer';
import { Customer } from 'src/app/models/customer';
import { IndividualCustomer } from 'src/app/models/individualCustomer';
import { CorporateCustomerService } from 'src/app/services/corporate-customer.service';
import { CustomerService } from 'src/app/services/customer.service';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers!: Customer[];
  individualCustomers!: IndividualCustomer[];
  corporateCustomers!: CorporateCustomer[];
  searchText!: string;

  constructor(
    private customerService: CustomerService,
    private individualService: IndividualCustomerService,
    private corporateService: CorporateCustomerService
  ) {}

  ngOnInit(): void {
    this.getAllCustomer();
    this.getCorporateCustomer();
    this.getIndividualCustomer();
  }

  getAllCustomer() {
    const response = this.customerService
      .getCustomer()
      .subscribe((response) => {
        this.customers = response;
      });
  }

  getIndividualCustomer() {
    const response = this.individualService
      .getIndvCustomer()
      .subscribe((response) => {
        this.individualCustomers = response;
      });
  }

  getCorporateCustomer() {
    const response = this.corporateService
      .getCorporateCustomer()
      .subscribe((response) => {
        this.corporateCustomers = response;
      });
  }
}
