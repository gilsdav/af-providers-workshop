import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customModuleContainers } from './containers';
import { CustomModuleRoutingModule } from './custom-module-routing.module';
import { Config, MODULE_CONFIG } from './types/config.type';
import { defaultConfig } from './default-config.constant';
import { UserService } from './services/user.service';
import { DefaultGuard } from './guards/default-guard.guard';



@NgModule({
	declarations: [
		...customModuleContainers
	],
	imports: [
		CommonModule,
		CustomModuleRoutingModule
	],
	providers: [
	]
})
export class CustomModuleModule {
	public static forRoot(config?: Config): ModuleWithProviders<CustomModuleModule> {

		const computedConfig: Config = config ? { ...defaultConfig, ...config } : defaultConfig;
		console.log(computedConfig);


		const module: ModuleWithProviders<CustomModuleModule> = {
			ngModule: CustomModuleModule,
			providers: [
				{ provide: MODULE_CONFIG, useValue: computedConfig },
				{ provide: DefaultGuard, useClass: computedConfig.altGuard },
				(computedConfig.userService as Provider)
			]
		}

		return module;
	}
}
