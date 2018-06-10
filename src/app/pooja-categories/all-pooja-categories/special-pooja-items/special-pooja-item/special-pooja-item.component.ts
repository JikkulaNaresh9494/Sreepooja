import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-special-pooja-item',
  templateUrl: './special-pooja-item.component.html',
  styleUrls: ['./special-pooja-item.component.css']
})
export class SpecialPoojaItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() item;
}
