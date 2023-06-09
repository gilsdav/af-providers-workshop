import { InjectionToken, Type } from "@angular/core";
import { UserServiceAbstract } from "src/app/modules/custom-module/services/user.service.abstract";
import { AuthAbstractService } from "../services/auth.abstract";
import { AuthService } from "../services/auth.service";

export type Config = {
	mode: DarkLightMode;
	enableGuard: boolean;
	altGuard: any;
	userService: Type<UserServiceAbstract>, // { provide: typeof USER_SERVICE, useClass: Type<UserServiceAbstract> };
	authService: Type<AuthAbstractService>
}

export const MODULE_CONFIG = new InjectionToken<Config>('MODULE_CONFIG');
export const USER_SERVICE = new InjectionToken<UserServiceAbstract>('USER_SERVICE');

export type DarkLightMode = 'dark' | 'light';
