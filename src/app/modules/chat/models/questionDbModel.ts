export interface QuesitonDbModel{
    Cevaplar: Answer[];
    Sorular: Question[];
    S_C: QA[];
}
export interface Answer{
    Id: string;
    Text: string;
    Value: string;
    Active:boolean;
}
export interface Question{
    Id: string;
    Text: string;
}
export interface QA{
    AnswerId: string;
    Id: string;
    QuestionId: string;
    TargetQuestionId: string;
}
export interface QuestionResponseModel{
    Question?: Question;
    Answers?: Answer[];
    Qas: QA[];
}