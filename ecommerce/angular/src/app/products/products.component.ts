import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  public productForm;
  constructor(public fb: FormBuilder, public addProductService: ProductsService) {
    this.productForm=this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      sku: ["", Validators.required],
      price: ["", Validators.required],
      categoria: ["", Validators.required],
      destacado: ["", Validators.required]
    })
   }

   save (){
    let data = this.productForm.value;
    console.log(data);
    this.addProductService.save(data).subscribe(datos=>{
      // localStorage.setItem('usuario', datos["data"]["user"]);
      // localStorage.setItem('token', datos["data"]["token"]);
      // let token = localStorage.getItem('usuario');
    });
   }

  ngOnInit() {
  }

}
