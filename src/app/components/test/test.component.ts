import { Component, OnInit } from '@angular/core';
import { BaseDCComponent } from '../../modules/dynamic-component-module/base-dc.component';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent extends BaseDCComponent {

}
