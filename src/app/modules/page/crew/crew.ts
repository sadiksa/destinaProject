export interface ICrew {
    name: string;
    title: string;
    photoPath: string;
    linkedin: string;
}
export interface ICrewGroup {
    label: string;
    crew: ICrew[];
}

export const crew: ICrewGroup[] = [
    {
        label: "Kurucu",
        crew: [

            {
                name: "Legaltech Çalışma Grubu",
                title: "İkonion Hukuk ve Kariyer Derneği",
                photoPath: "./../../../../assets/photos/dernek2.png",
                linkedin: "https://www.linkedin.com/company/i%CC%87konion-hukuk-ve-kariyer-derne%C4%9Fi"
            },
        ]
    },
    {
        label: "Proje Yöneticileri",
        crew: [
            {
                name: "Şaban İbrahim GÖKSAL",
                title: "Proje Yöneticisi",
                photoPath: "./../../../../assets/photos/1.jpg",
                linkedin: "https://www.linkedin.com/in/%C5%9Faban-ibrahim-g%C3%B6ksal-610528a0/"
            },
            {
                name: "Girayhan OCAK",
                title: "Proje Finans Yöneticisi",
                photoPath: "./../../../../assets/photos/2.png",
                linkedin: "https://www.linkedin.com/in/girayhan-ocak-851419b7/"
            },
        ]
    },

    {
        label: "Hukuk Mühendisleri Takımı",
        crew: [
            {
                name: "Şaban İbrahim GÖKSAL",
                title: "Stajyer Avukat",
                photoPath: "./../../../../assets/photos/1.jpg",
                linkedin: "https://www.linkedin.com/in/%C5%9Faban-ibrahim-g%C3%B6ksal-610528a0/"
            },
            {
                name: "Zeynep TOKLU",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/3.jpeg",
                linkedin: "https://www.linkedin.com/in/zeynep-toklu-3229b1206/"
            },
            {
                name: "Beyzanur ÖKSÜZ",
                title: "Hukuk Öğrencisi",
                photoPath: "./../../../../assets/photos/4.jpg",
                linkedin: "https://www.linkedin.com/in/beyzanur-%C3%B6ks%C3%BCz-078821145"
            },
            {
                name: "Ecem ÇETİN",
                title: "Stajyer Avukat",
                photoPath: "./../../../../assets/photos/5.png",
                linkedin: "https://www.linkedin.com/in/ecem-%C3%A7etin-5162021b1"
            },
            {
                name: "Hayriye Ece ŞENOL",
                title: "Stajyer Avukat",
                photoPath: "./../../../../assets/photos/6.jpg",
                linkedin: ""
            },
            {
                name: "Melisa Naz ÜNLÜ",
                title: "Hukuk Öğrencisi",
                photoPath: "./../../../../assets/photos/7.jpeg",
                linkedin: "https://www.linkedin.com/in/melisa-naz-%C3%BCnl%C3%BC-869106177"
            },
            {
                name: "Cevdet YILMAZ",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/8.JPG",
                linkedin: "https://www.linkedin.com/in/avyilmazcevdet/"
            },
            {
                name: "Gülce Nur TÜRKMEN",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/9.jpg",
                linkedin: "https://www.linkedin.com/in/g%C3%BClce-nur-t%C3%BCrkmen-4349b8123/"
            },

        ]
    },
    {
        label: "Yazılım Takımı",
        crew: [
            {
                name: "Sadık ŞAHİN",
                title: "Web Geliştiricisi ve Hukukçu",
                photoPath: "./../../../../assets/photos/10.jpeg",
                linkedin: "https://www.linkedin.com/in/sad%C4%B1k-%C5%9Fahin/"
            }, {
                name: "Mert ÖZTÜRK",
                title: "Mobil Uygulama Geliştiricisi",
                photoPath: "./../../../../assets/photos/11.jpeg",
                linkedin: "https://www.linkedin.com/in/mert-ozturk/"
            },
        ]
    },
    {
        label: "Tasarım Takımı",
        crew: [
            {
                name: "Ayşe ÇELEN",
                title: "UI-UX Tasarımcısı",
                photoPath: "./../../../../assets/photos/20.jpg",
                linkedin: "https://www.linkedin.com/in/aysecelen"
            }, {
                name: "Merve Pınar YEŞİLYURT",
                title: "Illustrator / Game Artist / NFT Artist",
                photoPath: "./../../../../assets/photos/21.JPG",
                linkedin: "https://www.linkedin.com/in/mervepinaryesilyurt/"
            },
        ]
    },
    {
        label: "Psikoloji Takımı",
        crew: [
            {
                name: "Fadime Tuba ŞAHİN",
                title: "Psikolog",
                photoPath: "./../../../../assets/photos/12.png",
                linkedin: "https://www.linkedin.com/in/fadime-tuba-%C5%9Fahin-1a433614a/"
            }, {
                name: "Dilara TURGUT",
                title: "Psikolog",
                photoPath: "./../../../../assets/photos/13.jpeg",
                linkedin: "https://www.linkedin.com/in/dilara-turgut-2763781b9"
            },
            {
                name: "Kübra GÜNEY",
                title: "Psikolog",
                photoPath: "./../../../../assets/photos/14.jpeg",
                linkedin: "https://www.linkedin.com/in/k%C3%BCbra-g%C3%BCney-94451a205"
            },

        ]
    },
    {
        label: "Medya ve Pazarlama Takımı",
        crew: [
            {
                name: "Ezginaz ÇALIŞIR",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/15.JPG",
                linkedin: "https://www.linkedin.com/in/ezginaz-%C3%A7al%C4%B1%C5%9F%C4%B1r-ba752916b/"
            },
            {
                name: "Ecem ÇETİN",
                title: "Stajyer Avukat",
                photoPath: "./../../../../assets/photos/5.png",
                linkedin: "https://www.linkedin.com/in/ecem-%C3%A7etin-5162021b1"
            },
            {
                name: "Hayriye Ece ŞENOL",
                title: "Stajyer Avukat",
                photoPath: "./../../../../assets/photos/6.jpg",
                linkedin: ""
            },
            {
                name: "Melisa Naz ÜNLÜ",
                title: "Hukuk Öğrencisi",
                photoPath: "./../../../../assets/photos/7.jpeg",
                linkedin: "https://www.linkedin.com/in/melisa-naz-%C3%BCnl%C3%BC-869106177"
            },
            {
                name: "Mehmet Enes GÜNGÖR",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/16.jpeg",
                linkedin: "https://www.linkedin.com/in/mehmet-enes-g%C3%BCng%C3%B6r-29ab80201/"
            },
            {
                name: "Cevdet YILMAZ",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/8.JPG",
                linkedin: "https://www.linkedin.com/in/avyilmazcevdet/"
            },
            {
                name: "Fadime Tuba ŞAHİN",
                title: "Psikolog",
                photoPath: "./../../../../assets/photos/12.png",
                linkedin: "https://www.linkedin.com/in/fadime-tuba-%C5%9Fahin-1a433614a/"
            },
            {
                name: "Ece KABADAYI",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/17.jpg",
                linkedin: "https://www.linkedin.com/in/ecekabadayi/"
            },

        ]
    },
    {
        label: "Hakla İlişkiler Takımı",
        crew: [
            {
                name: "Sena GÜLLÜ ",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/18.png",
                linkedin: "https://www.linkedin.com/in/sena-g%C3%BCll%C3%BC-6991141a7/"
            },
            {
                name: "Beyzanur ÖKSÜZ",
                title: "Hukuk Öğrencisi",
                photoPath: "./../../../../assets/photos/4.jpg",
                linkedin: "https://www.linkedin.com/in/beyzanur-%C3%B6ks%C3%BCz-078821145"
            },
            {
                name: "Zeynep TOKLU",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/3.jpeg",
                linkedin: "https://www.linkedin.com/in/zeynep-toklu-3229b1206/"
            },
            {
                name: "Saniye AKDEMİR",
                title: "Avukat",
                photoPath: "./../../../../assets/photos/19.JPG",
                linkedin: "https://www.linkedin.com/in/saniye-arife-akdemir-8013a6173"
            },
            {
                name: "Hayriye Ece ŞENOL",
                title: "Stajyer Avukat",
                photoPath: "./../../../../assets/photos/6.jpg",
                linkedin: ""
            },
            {
                name: "Fadime Tuba ŞAHİN",
                title: "Psikolog",
                photoPath: "./../../../../assets/photos/12.png",
                linkedin: "https://www.linkedin.com/in/fadime-tuba-%C5%9Fahin-1a433614a/"
            },
    
        ]
    },

]