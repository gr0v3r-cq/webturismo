import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

/* servici*/
import { DataServicieService } from '../../_services/data-servicie.service';

@Component({
	selector: 'app-page-home',
	templateUrl: './page-home.component.html',
	styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
	firstClick :any = false;
	listadoCultura: any;
	listadohospedajes: any;
	cul1: any;
	cul2: any;
	cul3: any;
	cul4: any;
	cul5: any;
	cul6: any;
	cul1_img: any;
	cul2_img: any;
	cul3_img: any;
	cul4_img: any;
	cul5_img: any;
	cul6_img: any;

	cul1_name: any;
	cul2_name: any;
	cul3_name: any;
	cul4_name: any;
	cul5_name: any;
	cul6_name: any;

	cul1_desres: any;
	cul2_desres: any;
	cul3_desres: any;
	cul4_desres: any;
	cul5_desres: any;
	cul6_desres: any;

	htl1: any;
	htl2: any;
	htl3: any;
	htl4: any;
	htl5: any;
	htl6: any;

	htl1_img: any;
	htl2_img: any;
	htl3_img: any;
	htl4_img: any;
	htl5_img: any;
	htl6_img: any;

	htl1_name: any;
	htl2_name: any;
	htl3_name: any;
	htl4_name: any;
	htl5_name: any;
	htl6_name: any;

	htl1_desres: any;
	htl2_desres: any;
	htl3_desres: any;
	htl4_desres: any;
	htl5_desres: any;
	htl6_desres: any;

	constructor(
		private route: Router,
		public httpservice: DataServicieService
		) { }

	ngOnInit() {
		this._serviciotoken();
		this.getAllCultura();
		this.getAllHospedajes();
	}

	getAllCultura(){
		this._serviciotoken();
		let aux = {};
		this.httpservice.sp_list_cultura(aux)
		.subscribe(
			(data) => {
				let datos = [];
				let datos2 = [];
				let cadnew = '';
				let nuevaCadena = '';
				let con = '';
				for (var i = 0; i < data.length; i++) {
					switch (data[i].xcom_id) {
						case 98:
						cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						con = JSON.parse(nuevaCadena);
						datos.push(con);
						break;
						case 99:
						cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						con = JSON.parse(nuevaCadena);
						datos.push(con);
						break;
						case 100:
						cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						con = JSON.parse(nuevaCadena);
						datos.push(con);
						break;
						case 4:
						cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						con = JSON.parse(nuevaCadena);
						datos.push(con);
						break;
						case 10:
						cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						con = JSON.parse(nuevaCadena);
						datos.push(con);
						break;
						case 6:
						cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						con = JSON.parse(nuevaCadena);
						datos.push(con);
						break;
						default:
						cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
						nuevaCadena = data[i].xcom_data.replace('{', cadnew);
						con = JSON.parse(nuevaCadena);
						datos2.push(con);
						break;
					}
				}
				this.listadoCultura = datos;
				this.cul1 = this.listadoCultura[0];
				this.cul2 = this.listadoCultura[1];
				this.cul3 = this.listadoCultura[2];
				this.cul4 = this.listadoCultura[3];
				this.cul5 = this.listadoCultura[4];
				this.cul6 = this.listadoCultura[5];
				this.cul1_img = this.cul1.com_urlimg;
				this.cul2_img = this.cul2.com_urlimg;
				this.cul3_img = this.cul3.com_urlimg;
				this.cul4_img = this.cul4.com_urlimg;
				this.cul5_img = this.cul5.com_urlimg;
				this.cul6_img = this.cul6.com_urlimg;
				this.cul1_name = this.cul1.comnombre;
				this.cul2_name = this.cul2.comnombre;
				this.cul3_name = this.cul3.comnombre;
				this.cul4_name = this.cul4.comnombre;
				this.cul5_name = this.cul5.comnombre;
				this.cul6_name = this.cul6.comnombre;
				this.cul1_desres = this.cul1.comdescripcionresumida;
				this.cul2_desres = this.cul2.comdescripcionresumida;
				this.cul3_desres = this.cul3.comdescripcionresumida;
				this.cul4_desres = this.cul4.comdescripcionresumida;
				this.cul5_desres = this.cul5.comdescripcionresumida;
				this.cul6_desres = this.cul6.comdescripcionresumida;
			});
	}

	getAllHospedajes(){
		this._serviciotoken();
		let aux = {};
		this.httpservice.sp_list_hospedajes(aux)
		.subscribe(
			(data) => {
				let datos = [];
				for (var i = 0; i < data.length; i++) {
					let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
					let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
					let con = JSON.parse(nuevaCadena);
					datos.push(con);
				}
				this.listadohospedajes = datos;
				this.htl1 = this.listadohospedajes[0];
				this.htl2 = this.listadohospedajes[1];
				this.htl3 = this.listadohospedajes[2];
				this.htl4 = this.listadohospedajes[3];
				this.htl5 = this.listadohospedajes[4];
				this.htl6 = this.listadohospedajes[5];
				this.htl1_img = this.htl1.com_urlimg;
				this.htl2_img = this.htl2.com_urlimg;
				this.htl3_img = this.htl3.com_urlimg;
				this.htl4_img = this.htl4.com_urlimg;
				this.htl5_img = this.htl5.com_urlimg;
				this.htl6_img = this.htl6.com_urlimg;
				this.htl1_name = this.htl1.comnombre;
				this.htl2_name = this.htl2.comnombre;
				this.htl3_name = this.htl3.comnombre;
				this.htl4_name = this.htl4.comnombre;
				this.htl5_name = this.htl5.comnombre;
				this.htl6_name = this.htl6.comnombre;
				this.htl1_desres = this.htl1.comdescripcionresumida;
				this.htl2_desres = this.htl2.comdescripcionresumida;
				this.htl3_desres = this.htl3.comdescripcionresumida;
				this.htl4_desres = this.htl4.comdescripcionresumida;
				this.htl5_desres = this.htl5.comdescripcionresumida;
				this.htl6_desres = this.htl6.comdescripcionresumida;
			});
	}

	detallescultura(cul1){
		console.log(cul1,11111111);
	}

	private _serviciotoken(){
		this.httpservice.token()
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
