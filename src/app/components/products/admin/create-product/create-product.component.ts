import { Component } from '@angular/core';
import { CreateProductType } from '../../../../models/products/createProductType';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../../../services/product-service/product-service';
import { Result } from '../../../../models/result';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  title = "Create new product";
  product: CreateProductType;

  constructor(private productService: ProductService){}

  onSubmit(form: NgForm){
    const newProduct = new CreateProductType(
        form.value.productName,
        form.value.productDescription,
        form.value.price,
        form.value.quantity,
        form.value.imageUrl
    );

    this.productService.createProduct(newProduct).subscribe(data => {
      console.log(data as Result);
    });
  }
}
