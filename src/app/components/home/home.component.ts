import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foods: IProduct[] = [];

  ngOnInit(): void {
    this.foods = this.service.foodList;
  }

}
