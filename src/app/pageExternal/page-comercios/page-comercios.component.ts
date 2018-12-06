import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

/* servici*/
import { DataServicieService } from '../../_services/data-servicie.service';


@Component({
	selector: 'app-page-comercios',
	templateUrl: './page-comercios.component.html',
	styleUrls: ['./page-comercios.component.css']
})
export class PageComerciosComponent implements OnInit {
	id: any;
	namepage: any;
	listactividad: any[] = [];
	listactividadaux: any[] = [];
	vacio: any;
	listsubserv: any[] = [];
	idcomercios: any[] = [];
	firstClick :any = false;
	constructor(
		private routerActivate: ActivatedRoute,
		private route: Router,
		public httpservicio: DataServicieService
		) { 

		if(!this.firstClick){
			// override the route reuse strategy
			this.route.routeReuseStrategy.shouldReuseRoute = function(){
				return false;
			}
			this.route.events.subscribe((evt) => {
				if (evt instanceof NavigationEnd) {
					// trick the route into believing it's last link wasn't previously loaded
					this.route.navigated = false;
					// if you need to scroll back to top, here is the right place
					window.scrollTo(0, 0);
				}
			});
			this.firstClick = true; 
		}
	}

	ngOnInit() {
		this.gettoken();
		this.id =  this.routerActivate.snapshot.paramMap.get('id');
		this.tipoactividad();
		this._serviciolistadoPrmSubServicioXservicio(this.id);
	}

	tipoactividad(){
		if(this.id) {
			switch (this.id) {
				case "3": //Naturaleza
				this.getAllNaturaleza();
				this.namepage = 'Naturaleza';
				break;
				case "4": //Aventura
				this.getAllAventura();
				this.namepage = 'Aventura';
				break;
				case "5": //Gastronomia
				this.getAllGastronomia();
				this.namepage = 'Gastronomia';
				break;
				case "6": //Cultura
				this.getAllCultura();
				this.namepage = 'Cultura';
				break;
				case "7": //hospedaje
				this.getAllHospedajes();
				this.namepage = 'hospedaje';
				break;
				default:
				// code...
				break;
			}
		}
	}


	todaactividad(){
		this.listactividad = [];
		this.tipoactividad();
	}
	listaactividad(itemserv){
		if (itemserv.prmsubser_busquedamenu == 1) {
			this.listaractividadeconomicaxcomercio(this.id, itemserv.idx);
		}else{
			this._serviciolistarcomercios(this.id, itemserv.idx);
		}
	}

	_serviciolistarcomercios(valser, valsubser){
		this.idcomercios = [];
		this.gettoken();
		let aux = { yprmser_id: valser, yprmsubser_id: valsubser };
		this.httpservicio.obtenercomercioxservicios(aux)
		.subscribe(
			(data) => {
				this.vacio = data; 
				if ( this.vacio == '[{ }]') {

				}
				else{
					let datos = [];
					for (var i = 0; i < data.length; i++) {
						datos.push(data[i].xcomser_id);
					}
					this.idcomercios = datos;
					this.renderporactividad(this.idcomercios)
				}
			});
	}

	renderporactividad(idcomercios){
		
		let nuevalista = [];
		let count = 0;
		while(count < idcomercios.length) {
			for (var i = 0; i < this.listactividadaux.length; ++i) {
				if(this.listactividadaux[i].xcom_id == idcomercios[count]) {
					nuevalista.push(this.listactividadaux[i]);
					break;
				}
			}
			count++;
		}
		if(nuevalista) {
			this.listactividad = [];
			this.listactividad = nuevalista;
		}
	}

	listaractividadeconomicaxcomercio( valueservicio, valuesubservicio){
		this.idcomercios = [];
		let aux = {ycomacteco_activo : valueservicio, ycomacteco_com_id: valuesubservicio};

		this.httpservicio.obteneractividadeconomicaporservicioycomercio(aux)
		.subscribe(
			(data) => {
				this.vacio = data; 
				if ( this.vacio == '[{ }]') {

				}
				else{
					let datos = [];
					for (var i = 0; i < data.length; i++) {
						console.log(data[i]);
						datos.push(data[i].xcomacteco_id);
					}
					this.idcomercios = datos;
					this.renderporactividad(this.idcomercios)
				}
			},
			(error) =>{
				console.log(error);
			}
			);
	}

	getAllNaturaleza(){
		this.listactividad = [];
		this.gettoken();
		let aux = {};
		this.httpservicio.sp_list_naturaleza(aux)
		.subscribe(
			(data) => {
				let datos = [];
				for (var i = 0; i < data.length; i++) {
					let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
					let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
					let con = JSON.parse(nuevaCadena);
					datos.push(con);
				}
				this.listactividad = datos;
				this.listactividadaux = datos;
			});
	}

	getAllAventura(){
		this.listactividad = [];
		this.gettoken();
		let aux = {};
		this.httpservicio.sp_list_aventura(aux)
		.subscribe(
			(data) => {
				let datos = [];
				for (var i = 0; i < data.length; i++) {
					let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
					let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
					let con = JSON.parse(nuevaCadena);
					datos.push(con);

				}
				this.listactividad = datos;
				this.listactividadaux = datos;
			});
	}

	getAllGastronomia(){
		this.listactividad = [];
		this.gettoken();
		let aux = {};
		this.httpservicio.sp_list_gastronomia(aux)
		.subscribe(
			(data) => {
				let datos = [];
				for (var i = 0; i < data.length; i++) {
					let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
					let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
					let con = JSON.parse(nuevaCadena);
					datos.push(con);
				}
				this.listactividad = datos;
				this.listactividadaux = datos;
			});
	}

	getAllCultura(){
		this.listactividad = [];
		this.gettoken();
		let aux = {};
		this.httpservicio.sp_list_cultura(aux)
		.subscribe(
			(data) => {
				let datos = [];
				for (var i = 0; i < data.length; i++) {
					let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
					let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
					let con = JSON.parse(nuevaCadena);
					datos.push(con);
				}
				this.listactividad = datos;
				this.listactividadaux = datos;
			});
	}

	getAllHospedajes(){
		this.listactividad = [];
		this.gettoken();
		let aux = {};
		this.httpservicio.sp_list_hospedajes(aux)
		.subscribe(
			(data) => {
				let datos = [];
				for (var i = 0; i < data.length; i++) {
					let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
					let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
					let con = JSON.parse(nuevaCadena);
					datos.push(con);
				}
				this.listactividad = datos;
				this.listactividadaux = datos;
			});
	}

	_serviciolistadoPrmSubServicioXservicio(aux1){
		let aux = { yidprmser: aux1 };
		this.httpservicio.listadoPrmSubServicioXservicio(aux)
		.subscribe(
			(data) => {
				this.vacio = data; 
				if ( this.vacio == '[{ }]') {

				}
				else{
					let datos = [];
					for (var i = 0; i < data.length; i++) {
						let cadnew = '{ "idx":"'+data[i].xprmsubser_id+'",';
						let nuevaCadena = data[i].xprmsubser_data.replace('{', cadnew);
						let con = JSON.parse(nuevaCadena);
						if (con.subcat != 0) {
							datos.push(con);
						}
					}
					this.listsubserv = datos;
				}
			},
			(error) =>{
				console.log(error);
			}
			); 
	}

	private gettoken(){
		this.httpservicio.token()
		.subscribe(
			(data) => {
				console.log(data);
			},
			(error) =>{
				console.log(error);
			}
			);
	}

}
