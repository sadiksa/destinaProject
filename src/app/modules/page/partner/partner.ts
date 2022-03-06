export interface IPartner {
    name: string;
    title: string;
    photoPath: string;
    linkedin: string;
}
export interface IPartnerGroup {
    label: string;
    partners: IPartner[];
}

export const partners: IPartnerGroup[] = [
    {
        label: "Barolar",
        partners: [
            {
                name: "Konya Barosu",
                title: "Kamu Kuruluşu",
                photoPath: "./../../../../assets/photos/konya_baro_logo_3.gif",
                linkedin: ""
            }
        ]
    }
]