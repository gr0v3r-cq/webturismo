import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

/* servici*/
import { DataServicieService } from '../../_services/data-servicie.service';

@Component({
	selector: 'app-page-info-actividad',
	templateUrl: './page-info-actividad.component.html',
	styleUrls: ['./page-info-actividad.component.css']
})
export class PageInfoActividadComponent implements OnInit {
	id: any;
	section: any;
	tipocom: any;
	namepage: any;
	listactividad: any[] = [];
	categoriasctividad: any[] = [];
	comnombre: any;
	renderdescripcion: any;
	com_urlimg: any;
	/* servicisa actividad*/
	deliveri: any;
	parqueo: any;
	reservas: any;
	wifi: any;
	/* forma de pago actividad */
	contado: any;
	tarjeta: any;

	comdireccion: any;
	comhorarioatencion: any;
	comtelefono: any;
	comfacebookred: any;
	cominstagramred: any;
	comgoogleweb: any;
	comtwitterred: any;

	/* datos mapa */
	lat: number = -16.4897;
	lng: number = -68.1193;
	lat1: number;
	lng1: number;
	public latitude: number;
	public longitude: number;
	public zoom: number = 8;


	constructor(
		private routerActivate: ActivatedRoute,
		private route: Router,
		public httpservicio: DataServicieService
		) { 

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
	}

	ngOnInit() {
		this.gettoken();
		this.parametersURL();
		this.section =  this.routerActivate.snapshot.paramMap.get('section');
		
		if(this.section) {
			switch (this.section) {
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

	parametersURL(){
		this.id = this.routerActivate.snapshot.paramMap.get('id');
		this.section =  this.routerActivate.snapshot.paramMap.get('section');
		this.tipocom =  this.routerActivate.snapshot.paramMap.get('tipocom');
	}

	onBack(): void{
		this.route.navigate(['/UniquePlacea']);
	}

	render(listactividad){

		this.categoriasctividad = [];
		this.comnombre = listactividad[0].comnombre; //nombre actividad
		this.com_urlimg = listactividad[0].com_urlimg; // ulr imagen actividad

		/* cordenadas mapa */
		this.lat = listactividad[0].comlat;
		this.lng = listactividad[0].comlng;

		/* descripcion de actividad */
		setInterval(() => { 
			this.renderdescripcion = generarhtml(listactividad[0].comcontenido[0].comdatadescripcion);
		}, 1000);

		/* verificacion servicios de actividad*/
		if(listactividad[0].comservicios[0].comdelivery == 'undefined') {
			this.deliveri = '';
		}else{
			this.deliveri = listactividad[0].comservicios[0].comdelivery;	
		}
		if(listactividad[0].comservicios[0].comparqueo  == 'undefined') {
			this.parqueo = '';
		}else{
			this.parqueo = listactividad[0].comservicios[0].comparqueo;	
		}
		if(listactividad[0].comservicios[0].comreservas  == 'undefined') {
			this.reservas = '';
		}else{
			this.reservas = listactividad[0].comservicios[0].comreservas;
		}
		if(listactividad[0].comservicios[0].comwifi) {
			this.wifi = '';
		}else{
			this.wifi = listactividad[0].comservicios[0].comwifi;
		}

		/* verificacion de forma de pago actividad */
		if(listactividad[0].comtipopago[0].comcontado  == 'undefined') {
			this.contado = ''
		}else{
			this.contado = listactividad[0].comtipopago[0].comcontado
		}
		if(listactividad[0].comtipopago[0].comtarjeta  == 'undefined') {
			this.tarjeta = ''
		}else{
			this.tarjeta = listactividad[0].comtipopago[0].comtarjeta
		}
		/* verificacion direccion */
		if(listactividad[0].comdireccion == 'undefined') {
			this.comdireccion = ''
		}else{
			this.comdireccion = listactividad[0].comdireccion
		}

		/* verificar horario */
		if(listactividad[0].comhorarioatencion == 'undefined') {
			this.comhorarioatencion = '';
		}else{
			this.comhorarioatencion = listactividad[0].comhorarioatencion;
		}

		/* verificar telefono */
		if(listactividad[0].comtelefono == 'undefined') {
			this.comtelefono = '';
		}else{
			this.comtelefono = listactividad[0].comtelefono;
		}

		/* verificando redes sociales */
		if(listactividad[0].comfacebookred == 'undefined') {
			this.comfacebookred = '';
		}else{
			this.comfacebookred = listactividad[0].comfacebookred;
		}
		if(listactividad[0].cominstagramred == 'undefined') {
			this.cominstagramred = '';
		}else{
			this.cominstagramred = listactividad[0].cominstagramred;
		}
		if(listactividad[0].comgoogleweb == 'undefined') {
			this.comgoogleweb = '';
		}else{
			this.comgoogleweb = listactividad[0].comgoogleweb;
		}
		if(listactividad[0].comtwitterred == 'undefined') {
			this.comtwitterred = '';
		}else{
			this.comtwitterred = listactividad[0].comtwitterred;
		}


		/* categorias de actividad */
		if(listactividad[0].comtipoopcinonescomercio) {
			for (var i = 0; i < listactividad[0].comtipoopcinonescomercio.length; i++) {
				this.categoriasctividad.push(listactividad[0].comtipoopcinonescomercio[i]);
			}
		}
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
					if(data[i].xcom_id == this.id && JSON.parse(data[i].xcom_data).comopcinformacion[0].comidinformacion == this.tipocom) {
						let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						let con = JSON.parse(nuevaCadena);
						datos.push(con);
						break;
					}
				}
				this.listactividad = datos;
				this.render(this.listactividad);
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
					if(data[i].xcom_id == this.id && JSON.parse(data[i].xcom_data).comopcinformacion[0].comidinformacion == this.tipocom) {
						let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						let con = JSON.parse(nuevaCadena);
						datos.push(con);
					}

				}
				this.listactividad = datos;
				this.render(this.listactividad);
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
					if(data[i].xcom_id == this.id && JSON.parse(data[i].xcom_data).comopcinformacion[0].comidinformacion == this.tipocom) {
						let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						let con = JSON.parse(nuevaCadena);
						datos.push(con);
					}
				}
				this.listactividad = datos;
				this.render(this.listactividad);
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
					if(data[i].xcom_id == this.id && JSON.parse(data[i].xcom_data).comopcinformacion[0].comidinformacion == this.tipocom) {
						let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						let con = JSON.parse(nuevaCadena);
						datos.push(con);
					}
				}
				this.listactividad = datos;
				this.render(this.listactividad);
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
					if(data[i].xcom_id == this.id && JSON.parse(data[i].xcom_data).comopcinformacion[0].comidinformacion == this.tipocom) {
						let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						let con = JSON.parse(nuevaCadena);
						datos.push(con);
					}
				}
				this.listactividad = datos;
				this.render(this.listactividad);
			});
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

function generarhtml(text?: string){
	var frase = '';
	if (text){
		frase = text;
		frase = frase.replace(/#060#/gi,'<');
		frase = frase.replace(/#062#/gi,'>');
		frase = frase.replace(/#034#/gi,'"');
		frase = frase.replace(/#039#/gi,'\'');
		frase = frase.replace(/<x>/gi,'');
		frase = frase.replace(/<br\/>/gi,'');
		return frase;
	}
	else{
		return 'vacio';
	}
}