import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[IsVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input() IsVisible: Boolean;
  

  ngOnInit(){
    if (this.IsVisible) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
    }
  }
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

}
