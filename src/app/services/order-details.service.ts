import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  foodDetails = [
    {
      id:1,
      foodName:"Salmon Bowl",
      foodDetails:"Poke a base di salmone, avocado, emadame e carote",
      foodPrice:12,
      foodImg:"https://images.unsplash.com/photo-1597958792579-bd3517df6399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJvd2wlMjBhdm9jYWRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      foodName:"Pizza Margherita",
      foodDetails:"Pomodoro, mozzarella, basilico",
      foodPrice:6,
      foodImg:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id:3,
      foodName:"BBQ Burger",
      foodDetails:"Doppio burger, cipolle, pomodori cetriolini, insalata e la nostra salsa",
      foodPrice:7.5,
      foodImg:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:4,
      foodName:"Tiramisu",
      foodDetails:"Tiramisù classico",
      foodPrice:6.5,
      foodImg:"https://images.unsplash.com/photo-1586040140378-b5634cb4c8fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGlyYW1pc3V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:5,
      foodName:"Brownie al cioccolato fondente",
      foodDetails:"Brownie con salsa al cioccolato fondente",
      foodPrice:4,
      foodImg:"https://images.unsplash.com/photo-1630384057168-b537be58939c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJvd25pZXxlbnwwfHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:6,
      foodName:"Cheescake",
      foodDetails:"Cheescake con topping ai frutti rossi",
      foodPrice:5.5,
      foodImg:"https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlY2FrZXxlbnwwfHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]


  constructor() { }
}
