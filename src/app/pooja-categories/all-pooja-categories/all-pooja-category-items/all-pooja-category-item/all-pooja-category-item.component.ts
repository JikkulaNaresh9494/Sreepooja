import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-all-pooja-category-item',
  templateUrl: './all-pooja-category-item.component.html',
  styleUrls: ['./all-pooja-category-item.component.css']
})
export class AllPoojaCategoryItemComponent  {

  constructor() { }

  ngOnInit() {
  }
  @Input() item;
}
