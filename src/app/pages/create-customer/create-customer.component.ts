import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CorporateCustomer } from 'src/app/models/corporateCustomer';
import { Customer } from 'src/app/models/customer';
import { IndividualCustomer } from 'src/app/models/individualCustomer';
import { CorporateCustomerService } from 'src/app/services/corporate-customer.service';
import { CustomerService } from 'src/app/services/customer.service';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';

@Component({
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  [x: string]: any;

  // createCustomerForm !: FormGroup;
  customer!: Customer | null;
  individualCustomer!: IndividualCustomer | null;
  corporateCustomer!: CorporateCustomer | null;
  createIndividualCustomer!: FormGroup;
  createCorporateCustomer!: FormGroup;
  selectCustomerType!: boolean;
  error: string = '';

  constructor(
    private customerService: CustomerService,
    private individualService: IndividualCustomerService,
    private corporateService: CorporateCustomerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createIndividualCustomerForm();
    this.createCorporateCustomerForm();
  }

  fetchData() {
    this.individualService.individualCustomerModel$.subscribe((response) => {
      this.individualCustomer = response;
    });
    this.corporateService.corporateCustomerModel$.subscribe((response) => {
      this.corporateCustomer = response;
    });
  }

  changeCustomerType(type: boolean) {
    this.selectCustomerType = type;
  }

  createIndividualCustomerForm() {
    this.createIndividualCustomer = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalIdentity: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
    });
  }

  createCorporateCustomerForm() {
    this.createCorporateCustomer = this.formBuilder.group({
      companyName: ['', Validators.required],
      taxNumber: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  addIndivCustomer() {
    if (!this.createIndividualCustomer.valid) {
      this.toastr.error(
        'The content of the form is missing, please enter the national ID number as 11 digits.'
      );
      return;
    }

    this.individualService.saveToStore(this.createIndividualCustomer.value);

    this.router.navigateByUrl('/catalog');
  }

  addCorpoCustomer() {
    if (!this.createCorporateCustomer.valid) {
      this.toastr.error(
        'The content of the form is missing, please enter the national ID number as 11 digits.'
      );
      return;
    }

    this.corporateService.saveToStore(this.createCorporateCustomer.value);

    this.router.navigateByUrl('/catalog');
  }
}
