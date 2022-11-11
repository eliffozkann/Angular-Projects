import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorporateCustomer } from 'src/app/models/corporateCustomer';
import { IndividualCustomer } from 'src/app/models/individualCustomer';
import { Subscription } from 'src/app/models/subscription';
import { CorporateCustomerService } from 'src/app/services/corporate-customer.service';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  constructor(
    private individualCustomerService: IndividualCustomerService,
    private corporateCustomerService: CorporateCustomerService,
    private route: ActivatedRoute,
    private subscriptionService: SubscriptionService
  ) {}

  individualCustomer!: IndividualCustomer[];
  corporateCustomer!: CorporateCustomer[];
  subscription!: Subscription[];
  customerId!: number;
  firstName!: string;
  lastName!: string;
  nationalIdentity!: number;
  companyName!: string;
  taxNumber!: number;
  id!: number;
  serviceId!: number;
  dateStarted!: Date;

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCustomer();
    this.getSubscription();
  }

  getCustomer() {
    this.individualCustomerService
      .getByIdIndvCustomer(this.customerId)
      .subscribe((response) => {
        this.individualCustomer = response;
      });
    this.corporateCustomerService
      .getByIdCorporateCustomer(this.customerId)
      .subscribe((response) => {
        this.corporateCustomer = response;
      });
  }

  getSubscription() {
    this.subscriptionService
      .getByIdSubscriptions(this.customerId)
      .subscribe((response) => {
        this.subscription = response;
        console.log(this.subscription);
        console.log(this.customerId);
      });
  }
}
