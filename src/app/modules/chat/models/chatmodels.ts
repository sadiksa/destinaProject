export interface OrganizationView{
    name?: string;
    description?: string;
    text?: string;
    answers?: OVAnswer[];
}
export interface OVAnswer{
    active: boolean;
    text: string;
}
export interface ResultContainerModel{
    chat: ResultChatModel[];
    organization: ResultOrganizationModel[];
}
export interface ResultChatModel{
    questionId: string;
    answerId: string;
}
export interface ResultOrganizationModel{
    name: string;
}