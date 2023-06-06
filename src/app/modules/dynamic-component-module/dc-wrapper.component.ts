import { DC_CONFIG } from './dc.config';
import { Component, Input, OnInit, SimpleChanges, Type, inject, OnChanges } from '@angular/core';
import { BaseDCComponent } from './base-dc.component';

@Component({
	selector: 'app-dc-wrapper',
	templateUrl: './dc-wrapper.component.html',
	styleUrls: []
})
export class DCWrapperComponent implements OnChanges {

	@Input() componentType!: string;
	public componentToShow?: Type<BaseDCComponent>;

	private config = inject(DC_CONFIG);

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['componentType']) {
			this.componentToShow = this.config.components[this.componentType];
		}
	}
}
