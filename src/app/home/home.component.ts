import { Component } from '@angular/core';
import { dataFetching } from 'src/service/dataFetching.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor( private dataService: dataFetching){

}

fetchData(){
  this.dataService.getAllNews().subscribe(news => {
    console.log(news)
  })
}
}
