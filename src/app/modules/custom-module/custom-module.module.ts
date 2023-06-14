import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customModuleContainers } from './containers';
import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { Config, MODULE_CONFIG } from './types/config.type';
import { defaultConfig } from './default-config.constant';
import { DefaultGuard } from './guards/default-guard.guard';
import { AuthenticationLoggerService } from './services/authentication-logger.service';
import { UserService } from './services/user.service';



@NgModule({
	declarations: [
		...customModuleContainers
	],
	imports: [
		CommonModule,
		CustomModuleRoutingModule,
	],
	providers: [
		AuthenticationLoggerService,
		UserService
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
				{ provide: DefaultGuard, useClass: computedConfig.altGuard }
			]
		}

		return module;
	}
}

