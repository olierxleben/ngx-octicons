import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import * as octicons from '@primer/octicons';

@Directive({
  selector: '[octicon]'
})
export class OcticonDirective implements OnInit {

  @Input('octicon') iconName: string;

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const el: HTMLElement = this.elem.nativeElement;
    el.innerHTML = octicons[this.iconName].toSVG();

  }


}
