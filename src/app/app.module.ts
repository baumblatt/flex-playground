import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutComponent} from './containers/layout/layout.component';
import {HomeComponent} from './containers/home/home.component';
import {FlexboxComponent} from './lessons/01-flexbox/flexbox/flexbox.component';
import { AngularComponent } from './lessons/02-angular/angular/angular.component';
import { PlaygroundComponent } from './lessons/04-playground/playground/playground.component';
import { ResponsiveComponent } from './lessons/03-responsive/responsive/responsive.component';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		HomeComponent,
		FlexboxComponent,
		AngularComponent,
		PlaygroundComponent,
		ResponsiveComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatToolbarModule,
		MatTableModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		FlexModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
