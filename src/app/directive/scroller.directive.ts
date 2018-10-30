import { Directive, AfterViewInit, ElementRef } from '@angular/core';
declare let $:any;

@Directive({
  selector: '[appScroller]'
})
export class ScrollerDirective implements AfterViewInit {

  constructor(private elementRef : ElementRef) {}

  ngAfterViewInit(): void {
    $(this.elementRef.nativeElement).mCustomScrollbar({
      theme:'minimal-dark'
    });
  }
}
