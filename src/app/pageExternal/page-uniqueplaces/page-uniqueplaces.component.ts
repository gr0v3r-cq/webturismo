import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-uniqueplaces',
	templateUrl: './page-uniqueplaces.component.html',
	styleUrls: ['./page-uniqueplaces.component.css']
})
export class PageUniqueplacesComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}

	activiti(){
		alert('hola mundo!!   ');
	}

	onChangeSelect(event){
		console.log(event,1111111111);
	}

	selectChangeHandler(event:any)
	{	console.log('hola mundo',111111111111);
		/*this.selectedshift=event.target.value;
		console.log("if change in method "+this.selectedshift)*/
	}

	 onChangeCategorySelect(event) {
        let value = event.target.value;
        console.log(value,1111111111);
    }

    saludar(){
    	console.log('saludos',11111111111);
    }
}
