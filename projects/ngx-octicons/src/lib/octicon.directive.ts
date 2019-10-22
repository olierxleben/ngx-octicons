import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import * as octicons from '@primer/octicons';

@Directive({
  selector: '[octicon]'
})
export class OcticonDirective implements OnInit {

  @Input('octicon') iconName: string;
  @Input() color: string;
  @Input() size: number;

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const el: HTMLElement = this.elem.nativeElement;
    el.innerHTML = octicons[this.iconName].toSVG();

    const icon: Node = el.firstChild;

    if (this.color) {

      this.renderer.setStyle(icon, 'fill', this.color);
    }

    if (this.size) {
      this.renderer.setStyle(icon, 'width', `${this.size}px`);
      this.renderer.setStyle(icon, 'height', '100%');
    }


  }


}
