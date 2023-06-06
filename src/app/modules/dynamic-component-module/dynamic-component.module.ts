import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DCConfig, DC_CONFIG } from './dc.config';
import { HelloComponent } from './default-components/hello/hello.component';
import { Hello2Component } from './default-components/hello2/hello2.component';
import { DCWrapperComponent } from './dc-wrapper.component';
import { LoadChildDirective } from './load-child.directive';

@NgModule({
	declarations: [
		HelloComponent,
		Hello2Component,
		DCWrapperComponent,
		LoadChildDirective
	],
	imports: [CommonModule],
	exports: [
		DCWrapperComponent
	],
	providers: [],
})
export class DynamicComponentModule {

	public static forRoot(config: DCConfig): ModuleWithProviders<DynamicComponentModule> {
		const completeConfig: DCConfig = {
			...config,
			components: {
				'hello': HelloComponent,
				'hello2': Hello2Component,
				...config.components
			}
		}

		return {
			ngModule: DynamicComponentModule,
			providers: [
				{
					provide: DC_CONFIG,
					useValue: completeConfig
				}
			]
		};

	}

}
