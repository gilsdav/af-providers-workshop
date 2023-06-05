import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent, MainComponent } from './containers';
import { DefaultGuard } from './guards/default-guard.guard';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		canActivate: [DefaultGuard]
	},
	{
		path: 'error',
		component: ErrorComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CustomModuleRoutingModule {

}
