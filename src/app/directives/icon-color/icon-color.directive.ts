import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material';

@Directive({
  selector: '[appIconColor]',
})
export class IconColorDirective implements OnInit {
  @Input() appIconColor: string;

  constructor(private matIcon: MatIcon, private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.color = this.appIconColor;
  }
}
