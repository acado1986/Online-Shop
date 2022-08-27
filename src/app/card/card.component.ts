import {Component, OnInit} from '@angular/core';
import { map, pipe } from 'rxjs';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

    product?: Product;
    products?: Product[];

    constructor(private _request: ProductService) {}

    ngOnInit(): void {
       this.getProducts();
    }

    getProduct(id: number): void {
        this._request.getProduct(id).subscribe((p) => this.product = {
            id: p.id,
            title: p.title,
            price: p.price,
            category: p.category,
            description: p.description,
            image: p.image
        });
    }

    getProducts(): void {
        // this._request.getProduct(1).subscribe((p) => this.product = {
        //     id: p.id,
        //     title: p.title,
        //     price: p.price,
        //     category: p.category,
        //     description: p.description,
        //     image: p.image
        // });
      this._request.getProducts(5).subscribe((prods)=> {console.log(prods);
      });
    }

}