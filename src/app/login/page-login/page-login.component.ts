import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Md5 } from "md5-typescript";

/* servicies - statics */
import { DataServicieService } from '../../_services/data-servicie.service';
import { CityService } from '../../services_statics/city-service';


declare var $ : any;
@Component({
	selector: 'app-page-login',
	templateUrl: './page-login.component.html',
	styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
	
	public city : any;

	constructor(
		public httpservicio: DataServicieService,
		public cityService: CityService,
		private router: Router
		) { 
		this.city = cityService.getAll();
	}

	ngOnInit() {
		this.gettoken();
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

	registerUser(userRegister){
		
		let password =Md5.init(userRegister.password); 
		let city = '{"id":"'+userRegister.city.id+'", "name":"'+userRegister.city.name+'"}';
		let user = '{"first_name" : "'+userRegister.first_name+'","last_name" : "'+userRegister.last_name+'","user_name" : "'+userRegister.user_name+'", "EMAIL" : "'+userRegister.EMAIL+'", "city" : ['+city+'], "phone" : "'+userRegister.phone+'", "birth" : "'+userRegister.birth+'"}';
		this.gettoken();
		let aux = { xprs_data: user, xuser_name: userRegister.user_name, xpassword: password };
		this._service_registrar_usuario(aux);
	}

	loginUser(userLogin){
		this.gettoken();
		
		let aux = {yusername: userLogin.user_name_login, ypassword: Md5.init(userLogin.password_login)};
		
		this.httpservicio.sp_loginuser(aux)
		.subscribe(
			(data) => {
				if (data[0].xusr_id) {
					localStorage.setItem('currentUser', JSON.stringify(data));
					localStorage.setItem('usr_rol_id', data[0].xusr_rol_id);
					var session = JSON.parse(data[0].xprs_data);
					localStorage.setItem('first_name', session.first_name);
					localStorage.setItem('last_name', session.last_name);
					localStorage.setItem('user_name', session.user_name);
					localStorage.setItem('emal', session.EMAIL);
					localStorage.setItem('country', session.city[0].name);
					localStorage.setItem('phone', session.phone);
					localStorage.setItem('birth', session.birth);

					this.router.navigate(['/admin']);

				}else{
					swal('Users',
						'the user was not found',
						'warning');
					this.cleaninputs();
				}
			},error => {
				swal('Error',
					'there was some mistake',
					'warning');
				this.cleaninputs();
			});
	}
	
	_service_registrar_usuario(aux){
		this.httpservicio.sp_insertuser(aux)
		.subscribe(
			(data) => {
				if (data[0].insert_users) {
					swal('Users',
						'The user inserted correctly',
						'success');
					this.cleaninputs();
					this.redirect_home();
				}else{
					swal('Users',
						'the user not inserted correctly',
						'warning');
				}
			});
	}
	redirect_home() : void{
		this.router.navigate(['/home']);
	}
	cleaninputs(){
		$(".lmp-camp").val('');
	}
	cancellogin(){
		this.cleaninputs();
		this.router.navigate(['/home']);	
	}
}
