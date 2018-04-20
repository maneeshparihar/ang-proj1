import { Router } from '@angular/router';
import { QuesBankService } from './../ques-bank.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})



export class ResultComponent implements OnInit {

  @Input() a:string;
  @Input() result:any[];
  test1: any[];
  b: number ;
  c: number ;
  passImgURL = '../../assets/img/pass.png';
  failImgURL = '../../assets/img/fail.png';

  qbank2: QuesBankService;


  constructor(private _router:Router, private quesbank2: QuesBankService) {
    // console.log(this.a);
    // console.log (this.quesbank2.result);
    this.qbank2 = this.quesbank2;
    this.test1 = this.qbank2.result;

    this.b = this.qbank2.rightQuestions;
    this.c = this.qbank2.Questions.length;
   }


   tryNew() {
    this._router.navigate(['/test']);

   }



   ngOnInit() {
  }

}
