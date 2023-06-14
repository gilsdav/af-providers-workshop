import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customModuleContainers } from './containers';
import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { Config, MODULE_CONFIG, USER_SERVICE } from './types/config.type';
import { defaultConfig } from './default-config.constant';
import { DefaultGuard } from './guards/default-guard.guard';
import { AuthenticationLoggerService } from './services/authentication-logger.service';
import { AuthAbstractService } from './services/auth.abstract';
import { AuthService } from './services/auth.service';



@NgModule({
	declarations: [
		...customModuleContainers
	],
	imports: [
		CommonModule,
		CustomModuleRoutingModule,
	],
	providers: [
		AuthenticationLoggerService
	]
})
export class CustomModuleModule {
	public static forRoot(config?: Partial<Config>): ModuleWithProviders<CustomModuleModule> {

		const computedConfig: Config = config ? { ...defaultConfig, ...config } : defaultConfig;
		console.log(computedConfig);


		const module: ModuleWithProviders<CustomModuleModule> = {
			ngModule: CustomModuleModule,
			providers: [
				{ provide: MODULE_CONFIG, useValue: computedConfig },
				{ provide: DefaultGuard, useClass: computedConfig.altGuard },
				{ provide: USER_SERVICE, useClass: computedConfig.userService }
			]
		}

		return module;
	}
}
