import { InjectionToken, Type } from '@angular/core';
import { BaseDCComponent } from './base-dc.component'

export type DCConfig = {
	components: { [key: string]: Type<BaseDCComponent> }
}

export const DC_CONFIG = new InjectionToken<DCConfig>('DC_CONFIG');
