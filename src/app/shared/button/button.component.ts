import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string | null = null;
  @Input() iconAlt: string;
  @Input() btnClass: string;


  // @Input() isActive: boolean = false;
  // @Input() filter: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
