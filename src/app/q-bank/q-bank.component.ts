import { Component, OnInit } from '@angular/core';
import { QuesBankService } from '../ques-bank.service';

@Component({
  selector: 'app-q-bank',
  templateUrl: './q-bank.component.html',
  styleUrls: ['./q-bank.component.css']
})
export class QBankComponent implements OnInit {
  quesText:string = "";
  noOfQuesAdded: number = 0;

  constructor(private quesbank: QuesBankService) { }


  onSubmit(formquesbank) {
    console.log('hello');
    console.log(formquesbank);
    let q1, a1, a2, a3, a4, ca1: string ;

      q1 = formquesbank.value.q;
      a1 = formquesbank.value.o1;
      a2 = formquesbank.value.o2;
      a3 = formquesbank.value.o3;
      a4 = formquesbank.value.o4;

      // making correct answer string from checkboxes
      ca1 ='';
      if(formquesbank.value.a1==true){
        ca1 += ' a1';}
      if (formquesbank.value.a2==true){
        ca1 += ' a2';}
      if (formquesbank.value.a3==true){
        ca1 += ' a3';}
      if (formquesbank.value.a4==true){
        ca1 += ' a4';}

        ca1 = ca1.trim();

        // console.log(ca1);
      // ca1 = (formquesbank.value.a1+formquesbank.value.a2);
    // console.log(formquesbank.value.o1);
    // console.log(q1);
    // console.log(a1);
    // console.log(a2);
    // console.log(a3);
    // console.log(a4);
    // console.log(ca1);

    this.quesbank.addQuestion(q1,a1,a2,a3,a4,ca1);
    this.noOfQuesAdded++;
    formquesbank.reset();



  }


  ngOnInit() {

    // this.quesbank.getQuestion();



  }

}
