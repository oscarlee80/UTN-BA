import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productForm;
  constructor(public fb: FormBuilder) {
    this.productForm=this.fb.group({
      denominacion: ["", [Validators.required, Validators.minLength(3)]],
      sku: ["", Validators.required],
      precio: ["", Validators.required],
      oferta: ["", Validators.required],
      descripcion: ["", Validators.required]
    })
   }

   save (){
     console.log(this.productForm.value);
   }

  ngOnInit() {
  }

}
