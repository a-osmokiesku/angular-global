import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({ selector: '[border-highlight]' })
export class BorderHighlightDirective  implements OnInit {
    @Input('border-highlight') date: Date;

    constructor(private elem: ElementRef, private renderer: Renderer) {
    }

    ngOnInit(){
        let currentDate = new Date();
        let borderDate = new Date;
        borderDate.setDate(borderDate.getDate()-14);
        if(this.date > currentDate)
        {
            this.renderer.setElementStyle(this.elem.nativeElement, 'border', '5px solid #bcdff1');
        }
        else if(this.date < currentDate && this.date >= borderDate){
            this.renderer.setElementStyle(this.elem.nativeElement, 'border', '5px solid #d0e9c6');        
        }
    }
}