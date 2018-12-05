import { Component, OnInit } from '@angular/core';


/* servici*/
import { DataServicieService } from '../../_services/data-servicie.service';


@Component({
	selector: 'app-page-uniqueplaces',
	templateUrl: './page-uniqueplaces.component.html',
	styleUrls: ['./page-uniqueplaces.component.css']
})
export class PageUniqueplacesComponent implements OnInit {
	selectedshift: any;
	listactividad: any[] = [];
	information: any[] = [];
	constructor(
		public httpservicio: DataServicieService
		) { }

	ngOnInit() {
		this.gettoken();
    }

    activiti(item){
    	this.information = [];
    	this.information.push(item);
    }

    onChangeSelect(event){
    	//this.selectedshift = event.target.value;
    	this.selectedshift = event.substring(0,1);
    	switch (this.selectedshift) {
    		case "1":
    			this.getAllNaturaleza();
    			break;
    		case "2":
    			this.getAllAventura();
    			break;
    		case "3":
    			this.getAllGastronomia();
    			break;
    		case "4":
    			this.getAllCultura();
    			break;
    		case "5":
    			this.getAllHospedajes();
    			break;
    		default:
    			// code...
    			break;
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
    				let cadnew = '{"xprmser_id" : "'+data[i].xprmser_id+'", "xprmser_data" : ['+data[i].xprmser_data+'], "xcom_id" : "'+data[i].xcom_id+'",';
    				let nuevaCadena = data[i].xcom_data.replace('{', cadnew);
    				let con = JSON.parse(nuevaCadena);
    				datos.push(con);
    			}
    			this.listactividad = datos;
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
