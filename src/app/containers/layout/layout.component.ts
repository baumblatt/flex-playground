import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

	constructor() {
	}

	ngOnInit() {
	}

	close() {
		this.sidenav.close();
	}
}
