import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Services } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  services!: Services[];

  serviceAddForm!: FormGroup;

  serviceIdToDelete!: number;
  servicesIdToUpdate!: number;

  error: string = '';

  changeForm: boolean = false;

  constructor(
    private servicesService: ServicesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getServices();
    this.createServicesAddForm();
  }
  createServicesAddForm() {
    this.serviceAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  changeFormFunc(id: number) {
    this.changeForm = !this.changeForm;
    this.servicesIdToUpdate = id;
  }

  getServices() {
    const response = this.servicesService.get().subscribe((response) => {
      this.services = response;
    });
  }

  add(): void {
    if (!this.serviceAddForm.valid) {
      this.error = 'form is invalid';
      return;
    }
    console.log(this.serviceAddForm);
    console.log(this.serviceAddForm.valid);

    //spread operator
    const services: Services = {
      ...this.serviceAddForm.value,
    };

    this.servicesService.add(services).subscribe({
      next: (response) => {
        console.info(response.id);
      },
      error: (err) => {
        console.log(err);
        this.error = err.statusText;
      },
      complete: () => {
        if (this.error) this.error = '';
        this.serviceAddForm.reset();
        this.getServices();
      },
    });
  }

  update(): void {
    if (!this.serviceAddForm.valid) {
      this.error = 'form is invalid';
      return;
    }
    const services: Services = {
      ...this.serviceAddForm.value,
      id: this.servicesIdToUpdate,
    };
    this.servicesService.update(services).subscribe({
      next: (response) => {
        console.info(response.id);
      },
      error: (err) => {
        console.log(err);
        this.error = err.statusText;
      },
      complete: () => {
        if (this.error) this.error = '';
        this.serviceAddForm.reset();
        this.getServices();
        this.changeFormFunc(0);
      },
    });
  }

  delete() {
    this.servicesService.delete(this.serviceIdToDelete).subscribe();
    this.getServices();
  }
}
