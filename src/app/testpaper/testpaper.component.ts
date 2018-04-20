import { QuesBankService } from '../ques-bank.service';
import { Component, OnInit } from '@angular/core';
import { parse } from 'url';
import { Router } from '@angular/router';


@Component({
  selector: 'app-testpaper',
  templateUrl: './testpaper.component.html',
  styleUrls: ['./testpaper.component.css']
})
export class TestpaperComponent implements OnInit {

  testques: any[];

  showtest:any = !this.showtest;
  showres: any = !this.showres;
  // initiate this to true without using ! it initiates to undefined

  result2:any[] = [];

  text:string = "Hello World";

  qbank: QuesBankService;

  constructor(private _router: Router, private quesbank: QuesBankService ) {
   this.showres = !this.showres;
   console.log(this.showres);

    this.qbank = this.quesbank;



    this.qbank.ansSubmit1 = null;

   this.testques = this.qbank.getQuestion();
    // console.log(this.testques);
    // this.formTestPaper.reset();
  }


  onSubmit(testAttempt){

    console.log(testAttempt.value);
    let a:any = testAttempt.value;
    let len: number = Object.keys(a).length;
    // len = (len/4);
    console.log(len);

    let temp1: any[];
    let temp2: any[] = [];
    let result: any[] = [];
    let count = 0;

    for(let x=1; x<=len; x=x+4){
            for (let n=x; n<=x+3; n++){
                temp1 = ((Object.entries(a))[n-1]);
                  if (temp1[1] === true) {
                    console.log(temp1[0]);
                    temp2.push(temp1[0]);
                  }
            }

            console.log(temp2);
            // result[count] = JSON.parse(JSON.stringify(temp2)) ;
            // count++;
            result.push(JSON.parse(JSON.stringify(temp2)));
            // we have used json stringify and json parse so that the array is copied
            // and not merely the reference is passed.
            console.log(result);
            temp2.length=0;
            // here we empty temp 2 so that it can pick up other answer sets in next iteration.
          }
    console.log(result);



    // let result2:any[] = [];
    result.forEach(element => {
      // console.log(element);
      let c:any = ""
      let d:any = "";


            element.forEach(element2 => {
              // console.log(element2);
              element2 = element2.split(".",2);
              // console.log(element2[0]);
              c = element2[0];
              d = d+' '+element2[1];
              //  console.log(element2[1]);
              // console.log(d);

            });
      // console.log(c);
      // console.log(d);
      // console.log(this.result2);
            this.result2.push(new Array(c,d));
            console.log(this.result2);

    });


    // this._router.navigate(['/result']);
    // this.showres = true;
    this.showtest = false;
    this.qbank.ansSubmit1 = this.result2;

    this.qbank.ansKey.length = 0;
    // empty the answerkey for existing answers
    this.qbank.generateAnsKey();
    // generate answer key again to accomodate new questions.


    console.log(this.qbank.ansKey);

    this.rightAns();

    // end of onSubmit on testpaper component
    }


    // function for comparing elements for giving out right wrong
    compare(a,b) {
      if (a.trim() == b.trim()){
        // this.quesbank.rightQuestions++;
        return "Correct";
      } else {
        // this.quesbank.totalQuestions++;
        return "Incorrect";
      }

    }


    rightAns(): any {
      // let i = this.quesbank.Questions.length;
      this.qbank.rightQuestions = 0;
      // setting property to zero to avoid increment during change detection
      let reply : number;
      for (let i = 0; i<this.qbank.Questions.length; i++) {
        // console.log(this.result2[i][1]);
        // console.log(this.quesbank.ansKey[i][1]);
          if (this.result2[i][1].trim() == this.qbank.ansKey[i][1].trim()){
          this.qbank.rightQuestions = this.qbank.rightQuestions+1;
          console.log(this.qbank.rightQuestions);
          // return this.quesbank.rightQuestions;
          }
      }

      reply = this.qbank.rightQuestions;
      return reply;

    }

    showResult(){
      // this.showres = !this.showres;

      this._router.navigate(['/result']);

    }


  ngOnInit() {


  }

}
