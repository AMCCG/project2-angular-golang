import { Directive, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidateInput]'
})
export class ValidateInputDirective implements OnInit, OnChanges {

  constructor(public elementRef: ElementRef, private control: NgControl) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('classList: ', this.elementRef.nativeElement.classList.contains("ng-untouched"));
    if (!this.elementRef.nativeElement.classList.contains("ng-untouched")) {
      console.log('classList: ', this.elementRef.nativeElement.classList);
      if (this.control.errors != null) {
        if (this.control.errors != null) {
          if (!this.elementRef.nativeElement.nextSibling) {
            let span = document.createElement('span')
            span.setAttribute("style", "position:absolute;bottom:-5px;color:red;font-size:10px")
            span.innerHTML = this.control.errors[0]
            this.elementRef.nativeElement.parentNode.insertBefore(span, this.elementRef.nativeElement.nextSibling)
          }
        } else {
          if (this.elementRef.nativeElement.nextSibling) {
            this.elementRef.nativeElement.parentNode.removeChild(this.elementRef.nativeElement.nextSibling)
          }
        }
      }
    }
  }


}
