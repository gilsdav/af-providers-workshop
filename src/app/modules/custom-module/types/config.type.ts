import { InjectionToken } from "@angular/core";
import { UserServiceAbstract } from "src/app/modules/custom-module/services/user.service.abstract";

export type Config = {
	mode: DarkLightMode;
}

export const MODULE_CONFIG = new InjectionToken<Config>('MODULE_CONFIG');
export const USER_SERVICE = new InjectionToken<UserServiceAbstract>('USER_SERVICE');

export type DarkLightMode = 'dark' | 'light';
