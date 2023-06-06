import { Directive, Input, Type, inject, ViewContainerRef, SimpleChanges, OnChanges } from '@angular/core';
import { BaseDCComponent } from './base-dc.component';

@Directive({
	selector: '[appLoadChild]',
})
export class LoadChildDirective implements OnChanges {
	@Input() appLoadChild?: Type<BaseDCComponent>;

	private viewContainerRef = inject(ViewContainerRef);

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['appLoadChild']) {
			this.viewContainerRef.clear();
			if (this.appLoadChild) {
				this.viewContainerRef.createComponent(this.appLoadChild);
			}
		}
	}

}
