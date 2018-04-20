import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // apiRoot: string = "http://quotes.rest/qod.json?category=inspire";
  apiRoot: string = "https://talaikis.com/api/quotes/random/";
  motd: string[] = [];

  motdFn(){
    // console.log("GET");
    // let url = `${this.apiRoot}/get`;
    // let url = `${this.apiRoot}`;
    this.motd.length = 0;

    let url = this.apiRoot;
    this.http.get(url).subscribe(res => {

      // console.log(res.json().contents.quotes[0].title);
      // console.log(res.json().contents.quotes[0].quote);
      // console.log(res.json().contents.quotes[0].author);

      // this.motd.push(res.json().contents.quotes[0].title) ;

      // console.log(res.json());
      // console.log(res.json().quote);
      // console.log(res.json().author);


      this.motd.push(res.json().quote) ;
      this.motd.push(res.json().author) ;


    });
    // console.log(res.json().contents);


  }

  constructor(private http:Http) {
    this.motdFn();
   }

  ngOnInit() {
  }

}
