import { Component, EventEmitter, Output, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Output() btnClick = new EventEmitter();
  @Input () title!:string;

  constructor (){}


  ngOnInit() {}
  public onClick() {
    this.btnClick.emit();
  }
}
