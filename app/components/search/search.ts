import { ProductService } from './../../services/product-service';
import {Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

function positiveNumberValidator(control: FormControl): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  console.log(price);
  return price === null || typeof price === 'number' && price > 0
    ? null : { positivenumber: true };
}

@Component({
  selector: 'auction-search',
  providers: [ ProductService ],
  templateUrl: 'app/components/search/search.html'
})
export default class SearchComponent {
    categories: string[];
    formModel: FormGroup;

    constructor(private productService: ProductService) {
      this.categories = this.productService.getAllCategories();
      
      const fb = new FormBuilder();
      this.formModel = fb.group({
          'title': [null, Validators.minLength(3)],
          'price': [null, positiveNumberValidator],
          'category': [-1]
      });
    }
    
    onSearch() {
      console.log('form model = ', this.formModel.valid);
      if(this.formModel.valid) {
        console.log(this.formModel.value);
      }
    }
}
