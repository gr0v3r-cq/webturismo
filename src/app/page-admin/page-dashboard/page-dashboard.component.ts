import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-page-dashboard',
	templateUrl: './page-dashboard.component.html',
	styleUrls: ['./page-dashboard.component.css']
})
export class PageDashboardComponent implements OnInit {
	
	ses=localStorage.getItem('currentUser');

	constructor(
			private router: Router
		) { }

	ngOnInit() {

		console.log(localStorage.getItem('usr_rol_id'),11111111111);
	}

	cerrar():void{
		localStorage.removeItem(this.ses);
		localStorage.clear();
		this.router.navigate(['/home']);
	}
}
