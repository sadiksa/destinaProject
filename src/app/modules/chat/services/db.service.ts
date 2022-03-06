import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Answer, QA, QuesitonDbModel, Question, QuestionResponseModel } from '../models/questionDbModel';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private jsonUrl = "./../../../../assets/json-db/digerleri.json"
  questions: Question[] = []
  answers: Answer[] = []
  qas: QA[] = []

  dbLoaded = new BehaviorSubject(false)

  constructor(
    private http: HttpClient
  ) { 
    
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
  // like crud begins
  startChat(){
    this.getJSON().
    subscribe(data => {
      console.log(data);
      const response:QuesitonDbModel = data
      this.questions = response.Sorular as Question[]
      this.answers = response.Cevaplar as Answer[]
      this.qas = response.S_C as QA[]

      this.dbLoaded.next(true)
     });
  }
  getChatModelByQuestionId(questionId: string):QuestionResponseModel {

     const question = this.questions.find(x => x.Id == questionId)

    const qas = this.qas?.filter(x => x.QuestionId == questionId)
    const answers = this.answers.filter(x => qas.map(y => y.AnswerId).includes(x.Id)).map(x => {
      const {Active, ...rest} = x
      return {
        Active: true,
        ...rest
      }
    })

    return {Question: question as Question, Answers: answers, Qas: qas}
  }
}
