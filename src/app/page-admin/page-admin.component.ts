import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';	

@Component({
	selector: 'app-page-admin',
	templateUrl: './page-admin.component.html',
	styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

	constructor(
			private router: Router
		) { }

	ngOnInit() {
		this.showApp();
	}

	showApp (): void {
		this.router.navigate(['/admin', {outlets: {'firstchild': ['dashboard']}}]);
	}
}
