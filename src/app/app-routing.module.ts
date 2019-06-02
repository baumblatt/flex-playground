import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {FlexboxComponent} from './lessons/01-flexbox/flexbox/flexbox.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'layout'},
	{
		path: 'layout', component: LayoutComponent, children: [
			{path: '', pathMatch: 'full', redirectTo: 'home'},
			{path: 'home', component: HomeComponent},
			{path: 'flexbox', component: FlexboxComponent},
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
