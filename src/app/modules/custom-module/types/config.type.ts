import { InjectionToken } from "@angular/core";

export type Config = {
	mode?: DarkLightMode;
}

export const MODULE_CONFIG = new InjectionToken<Config>('MODULE_CONFIG');

export type DarkLightMode = 'dark' | 'light';
