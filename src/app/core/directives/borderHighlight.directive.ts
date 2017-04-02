import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({ selector: '[border-highlight]' })
export class BorderHighlightDirective  implements OnInit {
    @Input('border-highlight') creatingDate: Date;

    constructor(private elem: ElementRef, private renderer: Renderer) {
    }

    ngOnInit(){
        let currentDate = new Date();
        let borderDate = new Date;
        borderDate.setDate(borderDate.getDate()-14);
        if(this.creatingDate > currentDate)
        {
            this.renderer.setElementStyle(this.elem.nativeElement, 'border', '5px solid #bcdff1');
        }
        else if(this.creatingDate < currentDate && this.creatingDate >= borderDate){
            this.renderer.setElementStyle(this.elem.nativeElement, 'border', '5px solid #d0e9c6');        
        }

    }
}