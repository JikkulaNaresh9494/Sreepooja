import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-festival-pooja-items',
  templateUrl: './festival-pooja-items.component.html',
  styleUrls: ['./festival-pooja-items.component.css']
})
export class FestivalPoojaItemsComponent implements OnInit {

  constructor() { }
  data = [];

  ngOnInit() {
    let desc="According to the Hindu Culture,Engagement According to the Hindu Culture,Engagement";
    for (var i = 5; i <=9 ; i++) {
      var item = {
        heading: "Engagement" + i,
        imagepath: "../assets/images/" + i + '.jpg',
        imagepath1: "../assets/images/" + i + 'A- Copy.jpg',
        bigdescription:desc,
        smalldesc: desc.substr(0, 30)
      };
      this.data.push(item);
    }
  }
}
