import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css']
})
export class ViewCustomerDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customers = [
    {
      name: "Anna Bosh",
      date: "Nov 14,1990",
      orderDetails: "Bages, Paper, fruits",
      orderAmount: 340.00
    },
    {
      name: "John Keen",
      date: "Dec 14,1940",
      orderDetails: "Stationary, Drink, PC",
      orderAmount: 23.00
    },
    {
      name: "Martin Miller",
      date: "May 21,1963",
      orderDetails: "Laptop, Chair, Tv",
      orderAmount: 3408.00
    },
    {
      name: "Nick Simtion",
      date: "Dec 29,1998",
      orderDetails: "Bottle, Phone",
      orderAmount: 34.66
    },
    {
      name: "Sam Querry",
      date: "App 20, 1990",
      orderDetails: "Pencil, Dolls",
      orderAmount: 234.44
    }
  ]

}
