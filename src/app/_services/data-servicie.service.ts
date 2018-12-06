import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppSettings } from '../_config/app-settings';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class DataServicieService {
	//private URL_LST_ENCUESTA = AppSettings.MOTOR_SERVICIOS + 'V1.0/turismo/wsIf/lstDatosEnc';
	/*MOTOR DE SERVICIOS********************************************************************/
	private url_motor:string = AppSettings.MOTOR_SERVICIOS  + 'apiLogin';
	private url_webservice_motor = AppSettings.MOTOR_SERVICIOS  + 'reglaNegocio/ejecutarWeb';
	/***************************************************************************************/
	constructor(
        private http: Http
        ) { }
	/**-----  TOKEN -----**/
    public token(){
    	const body = { usr_usuario: 'administrador', usr_clave: '123456' };
    	return this.http.post(this.url_motor, body)
    	.map((response: Response) => {
    		const user = response.json();
    		if (user.token) {
    			localStorage.setItem('tokenMotor', user.token);
                return true;
            } else {
                return false;
            }
        });
    }
    /*---------------------------------*/
    /*-------------------  Reglas de negocio    -----------------------*/
    /*------ insertar usuarios. -------*/
    public sp_insertuser(data:any): Observable<any[]> {
        const body = { identificador: 'TUR-INSERT-USER-258', parametros: JSON.stringify(data)};
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }
    /*------ login usuarios. -------*/
    public sp_loginuser(data:any): Observable<any[]> {
        const body = { identificador: 'TUR-LOGIN-USER-259', parametros: JSON.stringify(data)};
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }

    /*-------  listar Naturaleza -------*/
    public sp_list_naturaleza(data:any): Observable<any[]> {
        const body = { identificador: 'TUR-OBT-NATURALEZA-261', parametros: JSON.stringify(data)};
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }

    /*------- listar aventura ------------*/
    public sp_list_aventura(data:any): Observable<any[]> {
        const body = { identificador: 'TUR-OBT-AVENTURA-262', parametros: JSON.stringify(data)};
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }
    /*------- listar Gastronomia ------------*/
    public sp_list_gastronomia(data:any): Observable<any[]> {
        const body = { identificador: 'TUR-OBT-GASTRONOMIA-263', parametros: JSON.stringify(data)};
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }
    /*------- listar Cultura ------------*/
    public sp_list_cultura(data:any): Observable<any[]> {
        const body = { identificador: 'TUR-OBT-CULTURA-264', parametros: JSON.stringify(data)};
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }
    /*------- listar hospedajes ------------*/
    public sp_list_hospedajes(data:any): Observable<any[]> {
        const body = { identificador: 'TUR-OBT-HOSPEDAJES-267', parametros: JSON.stringify(data)};
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }

    /*--------- Listado de actividades por servicio -------*/
    public listadoPrmSubServicioXservicio(data:any): Observable<any[]>{
        const body = { identificador: 'TUR-PSSRV-X-PSRV-LIST-221', parametros: JSON.stringify(data) };
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }

    /*---------------   obtener servicio por sub servicio   --------------------*/
    public obtenercomercioxservicios(data:any): Observable<any[]>{
        const body = { identificador: 'TUR-OBT-COMXSERV-237', parametros: JSON.stringify(data) };
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }

    /* OBTENER ACTIVIDAD ECONOMICA POR SERVICIO Y COMERCIO*/
    public obteneractividadeconomicaporservicioycomercio(data:any): Observable<any[]>{
        const body = { identificador: 'TUR-ACTIVECO-SERV-COM-240', parametros: JSON.stringify(data) };
        return this.http.post(this.url_webservice_motor, body,this.jwt())
        .map(this.extractProcess)
        .catch(this.handleError);
    }

    /*----------------- funciones para servicios ------------------*/
    private extractProcess (res: Response) {
        const body = res.json();
        //console.log("servicio",body);
        return body;
    }

    private handleError (error: Response | any) {
    	let errMsg: string;
    	if (error instanceof Response) {
    		const body = error.json() || '';
    		const err = body.error || JSON.stringify(body);
    		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    	} else {
    		errMsg = error.message ? error.message : error.toString();
    	}
    	//console.error(errMsg);
    	return Observable.throw(errMsg);
    }
    private jwt() {
        const motorToken = localStorage.getItem('tokenMotor');
        const headers = new Headers({ 'Authorization': 'Bearer'  + motorToken});
        //console.log("cabeceras",headers);
        return new RequestOptions({ headers: headers });
    }
}
