import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[Bigger]'
})
export class MakeBiggerDirective implements OnInit{
// fontSize: number ; 
  constructor(private renderer : Renderer2 , private el: ElementRef) { 
  }
  @HostListener('click') click() { 
    this.fontSize = parseInt(this.fontSize ) +  1  + 'px';
    this.renderer.setStyle(this.el.nativeElement , 'font-size'  ,this.fontSize )
    console.log(this.fontSize)
  }

  @HostBinding('style.font-size') fontSize = "20px";

  ngOnInit(){
  }
}
