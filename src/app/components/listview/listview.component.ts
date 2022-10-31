import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  // component içerisinde yer alan properties bizim için
  // ?: nul olabilir, undwfined olaBİLİR
  // !: nul olmayacak, bu propertyi kullanmadan önce atama işlemini gerçekleştireceğiz söz vermiş oluyoruz
  categories!: Category[];
  language: string = 'en';
  dataLoaded = true;

  categoryAddForm!: FormGroup;

  categoryIdToDelete: number = 0; // state

  categoryIdToUpdate!: number;
  categoryNameToUpdate!: string;
  categoryDescriptionToUpdate!: string;

  error: string = '';

  //IcC (Inversion of Control) Container

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.createCategoryAddForm();
    //this.CategoriesService.delete(9).subscribe();
  }

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }


  getCategories(): void {
    //object tipi henüz belli olmayan referans tip diyebiliriz. Referans tiplerin en temek sınıfı denenbilir.
    this.categoriesService.getCategories().subscribe((response) => {
      //Observer design pattern
      this.categories = response;
    });
  }

  changecategoryIdToDelete(event: any) {
    this.categoryIdToDelete = event.target.value;
  }
  changecategoryIdToUpdate(event: any) {
    this.categoryIdToUpdate = event.target.value;
  }

  add(): void {
    if (this.categoryAddForm.invalid) {
      console.error('Forms is invalid');
      this.error = 'Forms is invalid';
      return;
    }
    if (this.error) this.error = '';
    console.log(this.categoryAddForm.valid); //formun içine yazılan karakter 10 dan uzun olana kadar false olur kayıt etmez, yani form kaydının başarılı olup olmadığını true ve false ile gösterir
    console.log(this.categoryAddForm.value);

    //const {name, decription} = this.categoryAddForm.value
    // let category: Category = {
    //   id: 0,
    //   name,
    //   description,
    // };
    const category: Category = {
      ...this.categoryAddForm.value,
    };
    this.categoriesService.add(category).subscribe((response) => {
      console.info('Category has added');
      this.categoryAddForm.reset();
      this.getCategories();
    });
  }

  update(id: number, name: string, description: string): void {
    this.dataLoaded = false;
    this.categoryIdToUpdate = id;
    this.categoryNameToUpdate = name;
    this.categoryDescriptionToUpdate = description;

    if (this.categoryAddForm.invalid) {
      console.error('Forms is invalid');
      this.error = 'Açıklama en az 10 karakter olmalı';
      return;
    }
    if (this.error) this.error = '';
    console.log(this.categoryAddForm.valid); //formun içine yazılan karakter 10 dan uzun olana kadar false olur kayıt etmez, yani form kaydının başarılı olup olmadığını true ve false ile gösterir
    console.log(this.categoryAddForm.value);

    const category: Category = {
      ...this.categoryAddForm.value,
      id: this.categoryIdToUpdate,
    };
    this.categoriesService.update(category).subscribe((response) => {
      console.info(response);
      this.categoryAddForm.reset();
      this.getCategories();
    });
    this.dataLoaded = true;
  }


  delete() {
    this.categoriesService.delete(this.categoryIdToDelete).subscribe(() => {
      this.categoryIdToDelete = 0;
      this.getCategories();
    });
  }
}
