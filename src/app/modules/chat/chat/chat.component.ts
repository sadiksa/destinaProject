import { AfterViewChecked, Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { OrganizationView, OVAnswer, ResultContainerModel } from '../models/chatmodels';
import { Organization, Query } from '../models/organizationsDbModel';
import { Answer, QuestionResponseModel } from '../models/questionDbModel';
import { DbService } from '../services/db.service';
import { OrganizationsDbService } from '../services/organizations-db.service';
import { BottomResultComponent } from './components/bottom-result/bottom-result.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chat: QuestionResponseModel[] = []
  organizationChat: OrganizationView = new Object();

  resultModel: ResultContainerModel = {
    chat: [],
    organization: []
  }


  @ViewChild("scroll")
  scrollToMe!: ElementRef;
  @ViewChild("chatFlow") chatFlow!: ElementRef;
  @ViewChild("chatInput") chatInput !: ElementRef;

  values: string[] = []

  organizationOpen$ = new BehaviorSubject(false)
  organizations: Organization[] = []

  specialAnswerIds = ["7", "8", "9", "10", "22", "23", "24", "25"]
  blogAndRefreshOpen$ = new BehaviorSubject(false)
  appFinished$ = new BehaviorSubject(false)

  freeTextOpen$ = new BehaviorSubject(false)
  activeAnswer!: Answer
  activeModel!: QuestionResponseModel
  constructor(
    private db: DbService,
    private organizationsDb: OrganizationsDbService,
    public dialogRef: MatDialogRef<ChatComponent>,
    private bottomSheet: MatBottomSheet

    //@Inject(MAT_DIALOG_DATA) infosFromParent
  ) { }

  ngOnInit(): void {
    this.db.startChat()
    this.organizationsDb.startOrganizationDb()
    this.db.dbLoaded.subscribe((response) => {
      if (response == true) {
        this.chat = []
        this.chat.push(this.db.getChatModelByQuestionId("1"))
        console.log("ilk", this.chat);
      }
    })
    this.organizationsDb.organizationsDbLoaded.subscribe((response) => {
      if (response == true) {
        console.log("orghanizations loaded");
      }
    })

  }
  goToBottom() {
    // console.log("bottom", this.chatFlow.nativeElement.scrollHeight);
    // let element = document.getElementById("chatFlow")
    // element?.scrollIntoView()
    // this.chatFlow.nativeElement.scroll({
    //   top: this.chatFlow.nativeElement.scrollHeight,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    setTimeout(() => {
      let scroll = document.getElementById("scroll")
      scroll?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }, 100);
  }
  getValueAndNextQuestion(model: QuestionResponseModel, answer: Answer) {
    console.log("old", model);
    console.log("answer", answer);

    if (answer.Value != undefined) {
      console.log("answer", answer);

      this.values.push(answer.Value)
    }

    const selectedQA = model.Qas.find(x => x.AnswerId == answer.Id)

    this.deactivateButtons(model, answer.Id)

    const newModel = this.db.getChatModelByQuestionId(selectedQA?.TargetQuestionId as string)
    console.log("ara", newModel);

    if (newModel.Question == undefined) {
      if (this.values.length == 4) {
        this.getOrganizationsWithQuery()
      } else {
        this.blogAndRefreshOpen$.next(true)
      }
    } else {
      if (this.isIncludesSpecialAnswer(newModel!.Answers!.map(x => x.Id))) {
        let model: QuestionResponseModel = {
          Answers: [],
          Qas: [],
          Question: newModel.Question
        }
        this.chat.push(model)
        newModel!.Answers!.map(x => x.Id).forEach(a => {
          this.specialAnswerAdd(a, newModel)
        })
      } else {
        this.chat.push(newModel)
        console.log("new", newModel);


      }

    }

    this.goToBottom()
    console.log("chat", this.chat);


  }

  deactivateButtons(model: QuestionResponseModel, answerId: string) {
    let tempModel = this.chat.find(x => x == model) as QuestionResponseModel
    tempModel.Answers = tempModel?.Answers?.filter(x => x.Id == answerId).map(x => {
      const { Active, ...rest } = x
      return {
        Active: false,
        ...rest
      }
    })
  }
  getOrganizationsWithQuery() {
    let query: Query = {
      Location: this.values[0].toLowerCase(),
      Group: this.values[1],
      Suspect: this.values[2].toLowerCase(),
      Protection: this.values[3].toLowerCase()
    }

    // this.organizationGroup$.next(this.organizationsDb.getOrganizationsWithQuery(query))
    this.organizationOpen$.next(true)
    const organizationGroup = this.organizationsDb.getOrganizationsWithQuery(query)
    console.log("og", organizationGroup);

    this.organizationChat.name = organizationGroup.DataName as string
    this.organizationChat.description = organizationGroup.DataDescription as string

    this.organizations = organizationGroup.Datas as Organization[]
    this.organizationChat.answers = this.organizations?.map(org => {
      return <OVAnswer>{
        active: true,
        text: org.DataName
      }
    })
    this.goToBottom()

  }

  getOrganizationInfoByIndex(index: number) {
    console.log("bilgi", this.organizations[index]);
    //result bottom sheet call
    this.openBottomSheet(this.organizations[index])
    // buraya chat nesnesinden cevap ve soru id çek
    // sonra seçilen organizationları ekle 
    // sayfa kapandığında veya chatbox kapandığında gönder
    this.resultModel.chat = this.chat.map(x => {
      const answers = x.Answers as Answer[]
      return {
        answerId: answers.length > 0 ? answers[0].Id == "" ? answers[0].Text : answers[0].Id : "Cevap Yok",
        questionId: x.Question?.Id as string,
      }
    })
    if (!this.resultModel.organization.map(x => x.name).includes(this.organizations[index].DataName as string)) {
      this.resultModel.organization.push({ name: this.organizations[index].DataName as string })

    }
    console.log("sonuç", this.resultModel);

    this.goToBottom()

  }
  isIncludesSpecialAnswer(answerIds: string[]) {
    let isIncludes = false
    answerIds.forEach(x => {
      if (this.specialAnswerIds.includes(x)) {
        isIncludes = true
      }
    })
    return isIncludes
  }
  specialAnswerAdd(value: string, questionAnswerModel: QuestionResponseModel) {
    this.freeTextOpen$.next(true)
    let answers = questionAnswerModel.Answers as Answer[]
    this.activeAnswer = answers[0]
    this.activeModel = questionAnswerModel
    switch (value) {
      case "7":
        this.blogAndRefreshOpen$.next(true)
        break;
      case "8":
        this.blogAndRefreshOpen$.next(true)
        break;
      case "9":
        let model: QuestionResponseModel = {
          Answers: [],
          Qas: [],
          Question: { Id: "freeText", Text: "Lütfen uğradığınız şiddeti anlatın." }
        }
        this.chat.push(model)
        this.chatInput.nativeElement.focus()
        break;
      case "10":
        this.appFinished$.next(true)
        break;
      case "22":
        this.chatInput.nativeElement.focus()

        break;
      case "23":
        this.chatInput.nativeElement.focus()

        break;
      case "24":
        this.chatInput.nativeElement.focus()

        break;
      case "25":
        this.chatInput.nativeElement.focus()

        break;

      default:
        this.appFinished$.next(true)

        break;
    }
  }
  send() {
    if (this.chatInput.nativeElement.value && this.freeTextOpen$.value) {
      let model: QuestionResponseModel = {
        Answers: [{
          Active: false,
          Text: this.chatInput.nativeElement.value,
          Id: "",
          Value: ""
        }],
        Qas: [],
        Question: undefined
      }
      this.chat.push(model)
      this.chatInput.nativeElement.value = ""
      this.freeTextOpen$.next(false)

      this.getValueAndNextQuestionAfterFreeText(this.activeModel, this.activeAnswer)
    } else {
      console.log(this.chatInput);

    }
  }
  getValueAndNextQuestionAfterFreeText(model: QuestionResponseModel, answer: Answer) {
    if (answer.Value != undefined) {
      console.log("answer", answer);

      this.values.push(answer.Value)
    }

    const selectedQA = model.Qas.find(x => x.AnswerId == answer.Id)

    const newModel = this.db.getChatModelByQuestionId(selectedQA?.TargetQuestionId as string)
    if (newModel.Question == undefined && this.values.length == 4) {
      this.getOrganizationsWithQuery()
    } else {
      if (this.isIncludesSpecialAnswer(newModel!.Answers!.map(x => x.Id))) {
        let model: QuestionResponseModel = {
          Answers: [],
          Qas: [],
          Question: newModel.Question
        }
        this.chat.push(model)
        newModel!.Answers!.map(x => x.Id).forEach(a => {
          this.specialAnswerAdd(a, newModel)
        })
      } else {
        this.chat.push(newModel)

      }

    }

    this.goToBottom()
    console.log("chat", this.chat);


  }
  closeDialog() {
    this.dialogRef.close()
  }
  openBottomSheet(organization: Organization): void {
    this.bottomSheet.open(BottomResultComponent, {
      data: {
        organization: organization
      }
    });
  }
  refreshChat() {
    this.chat = []
    this.chat.push(this.db.getChatModelByQuestionId("1"))
    this.blogAndRefreshOpen$.next(false)

  }

}
