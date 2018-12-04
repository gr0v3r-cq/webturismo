import { Component, OnInit } from '@angular/core';


/* servici*/
@Component({
	selector: 'app-page-uniqueplaces',
	templateUrl: './page-uniqueplaces.component.html',
	styleUrls: ['./page-uniqueplaces.component.css']
})
export class PageUniqueplacesComponent implements OnInit {
	selectedshift: any;
	constructor() { }

	ngOnInit() {
	}

	activiti(){
		alert('hola mundo!!   ');
	}

	onChangeSelect(event){
		this.selectedshift = event.target.value;
		console.log("if change in method "+this.selectedshift)
		
	}


	getAllNaturaleza(){
		this._serviciotoken();
		let aux = {};
		this.httpservice.sp_list_naturaleza(aux)
		.subscribe(
			(data) => {
				let datos = [];
				for (var i = 0; i < data.length; i++) {
					let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
					let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
					let con = JSON.parse(nuevaCadena);
					datos.push(con);
				}
				this.listadoNaturaleza = datos;
			});
	}

}
