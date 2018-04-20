import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class QuesBankService {

Questions: any[] = [
  {id:'1',ques: 'Which animal or Bird has the tallest neck?',ans1:'Giraffe', ans2:'Hippopotamus', ans3:'Tiger', ans4:'Ostrich', corrAns:'a1'},
  {id:'2',ques: 'Who is the current (2018) President of the USA',ans1:'George Washington', ans2:'Barack Obama', ans3:'Donald Trump', ans4:'Mark Zuckerberg', corrAns:'a3'},
  {id:'3',ques: 'Which Elements comprise of water?',ans1:'Hydrogen', ans2:'Oxygen', ans3:'Plutonium', ans4:'Helium', corrAns:'a1 a2'},
  {id:'4',ques: 'Which Colors when combined make Green Color?',ans1:'Yellow', ans2:'Red', ans3:'Violet', ans4:'Blue', corrAns:'a1 a4'},
];

id: string;
// QuesStor1: any[];
ansKey: any[] = [];
ansSubmit1: any[];
result: any[];
totalQuestions: number = 0;
rightQuestions: number = 0;

  constructor() {
    // this.Questions = JSON.parse(localStorage.getItem('QuesStorArray'));
    this.generateAnsKey();
    // generates answer key from existing question answer set
  }

  addQuestion(ques:string, ans1:string, ans2:string, ans3:string, ans4:string, corrAns:string):void {
    this.id = (this.Questions.length+1).toString();
    console.log(this.Questions.length);
    let input1 = {'id':this.id, 'ques':ques, 'ans1':ans1, 'ans2':ans2, 'ans3':ans3, 'ans4':ans4, 'corrAns':corrAns};
    // console.log(input1);
    this.Questions.push(input1);

    localStorage.setItem('QuesStorArray', JSON.stringify(this.Questions));
    this.Questions = JSON.parse(localStorage.getItem('QuesStorArray'));

    // this.Questions.push(input1);
  }

getQuestion() : any[]{
// return this.Questions;
// console.log(this.Questions);
// console.log(this.Questions.length);
// this.id = (this.Questions.length=1).toString();
// console.log(this.id)
return this.Questions;
}


generateAnsKey(): any[] {

  for (let x of this.Questions){
      this.ansKey.push(new Array(x.id, x.corrAns));
  }

// console.log(this.ansKey);
return this.ansKey;

}

getResult():void {

}





}
