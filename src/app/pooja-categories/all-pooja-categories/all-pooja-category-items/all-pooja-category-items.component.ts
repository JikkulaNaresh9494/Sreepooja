import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-pooja-category-items',
  templateUrl: './all-pooja-category-items.component.html',
  styleUrls: ['./all-pooja-category-items.component.css']
})
export class AllPoojaCategoryItemsComponent implements OnInit {

  constructor() { }
  data = [];

  ngOnInit() {
    let desc="According to the Hindu Culture,Engagement According to the Hindu Culture,Engagement";
    for (var i = 2; i <= 9; i++) {
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
