import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective implements OnInit {

  @Input('data') data
  @Input('default') default
  @Input('style') style

  @Output('change') change = new EventEmitter()

  constructor(public element: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.element, this.data)
    this._generateBox()
  }z

  private _generateBox(): void {
    let container = document.createElement('div')
    container.setAttribute('class', 'selectContainer')
    container.setAttribute('style', 'position:relative;height:40px;overflow:hidden;transition:.5s;width:80px;' + this.style)
    let div = document.createElement('div')
    div.setAttribute('style', 'box-sizing:border-box;cursor:pointer;height:40px;border:1px solid rgba(51,51,51,.25);padding:10px;border-radius:2px;font-size:12px')
    let span = document.createElement('span')
    let caret = document.createElement('span')
    let img = document.createElement('img')
    img.setAttribute("src", "/assets/image/svg/down-arrow.svg")
    caret.setAttribute('style', 'position:absolute;width:10px;height:10px;right:5px;')
    caret.appendChild(img)
    span.setAttribute('id', 'selectData')
    span.innerHTML = this.default ? this.default : this.data[0]
    div.appendChild(span)
    div.appendChild(caret)
    div.onclick = this.open()
    container.appendChild(div)
    let divSelect = document.createElement('div')
    divSelect.setAttribute('style', "border:1px solid rgba(51,51,51,.25);padding:5px 0;border-top:0;max-height:400px;overflow-y:scroll;overflow-x:hidden;background:white;")
    for (let i = 0; i < this.data.length; i++) {
      divSelect.appendChild(this.setSelect(this.data[i]))
    }
    container.appendChild(divSelect)
    this.element.nativeElement.append(container)
  }

  open(): (this: GlobalEventHandlers, ev: MouseEvent) => any {
    return () => {
      if (document.querySelector('.selectContainer.open') && !this.element.nativeElement.querySelector('.selectContainer.open')) {
        let elem: HTMLElement = document.querySelector('.selectContainer.open')
        elem.classList.remove('open')
        elem.style.setProperty('overflow', 'hidden')
      }
      if (this.element.nativeElement.querySelector('.selectContainer.open')) {
        this.element.nativeElement.querySelector('.selectContainer.open').classList.remove('open')
        this.element.nativeElement.querySelector('.selectContainer').style.setProperty('overflow', 'hidden')
      }
      else {
        this.element.nativeElement.querySelector('.selectContainer').classList.add('open')
        this.element.nativeElement.querySelector('.selectContainer').style.setProperty('overflow', 'unset')
      }
    }
  }

  private setSelect(data: any): HTMLDivElement {
    let div = document.createElement('div')
    div.setAttribute('style', 'box-sizing:border-box;cursor:pointer;height:40px;padding:10px;font-size:12px;')
    let span = document.createElement('span')
    span.innerHTML = data
    div.appendChild(span)
    div.onmouseover = this.hover(div)
    div.onmouseout = this.out(div)
    div.onclick = this.click(data)
    return div
  }

  click(data: any): (this: GlobalEventHandlers, ev: MouseEvent) => any {
    return () => {
      this.change.emit(data)
      this.element.nativeElement.querySelector('.selectContainer  #selectData').innerHTML = data
      this.element.nativeElement.querySelector('.selectContainer.open').classList.remove('open')
      this.element.nativeElement.querySelector('.selectContainer').style.setProperty('overflow', 'hidden')
    }
  }

  hover(div: HTMLDivElement): (this: GlobalEventHandlers, ev: MouseEvent) => any {
    return () => {
      div.style.setProperty('background', 'rgba(0,111,200,.1)')
    }
  }

  out(div: HTMLDivElement): (this: GlobalEventHandlers, ev: MouseEvent) => any {
    return () => {
      div.style.setProperty('background', 'transparent')
    }
  }



}
