export interface IBlogContent {
    author: string;
    title: string;
    id: number;
    date: Date;
    shortContent: string;
}
export const contents: IBlogContent[] = [
    {
        author: "Cevdet Yılmaz",
        title: "Koruma Tedbiri ve Uzaklaştırma Kararı",
        id: 1,
        date: new Date(),
        shortContent:"Koruma tedbiri ve uzaklaştırma kararı 6284 sayılı Ailenin Korunması ve Kadına Karşı Şiddetin Önlenmesine Dair Kanun kapsamında Şiddete uğrayan veya şiddete uğrama tehlikesi bulunan kadınların, çocukların, aile bireylerinin ve tek taraflı ısrarlı takip mağduru olan kişilerin korunması ve bu kişilere yönelik şiddetin önlenmesi amacıyla verilen hızlı ve etkili bir tedbirdir."
    },
    {
        author: "Mehmet Enes Güngör",
        title: "Baroların Adli Yardım merkezleri ve HMK Adli yardım müessesi",
        id: 2,
        date: new Date(),
        shortContent:"Sosyal devlet olmanın gereği olarak devlet bu durumda olan kişilere belirli şartları sağlamak koşulu ile MAHKEME MASRAFLARI VE AVUKATLIK HİZMETİNE ULAŞIM  konularında yardım etmekte işte bu yardımların genel adı ADLİ YARDIM olarak ifade edilmektedir."
    },
    {
        author: "Ece Kabadayı",
        title: "Şiddet Önleme Merkezleri (ŞÖNİM)",
        id: 3,
        date: new Date(),
        shortContent:"6284 sayılı Ailenin Korunması ve Kadına Karşı Şiddetin Önlenmesine Dair Kanuna ve Aile ve Sosyal Politikalar Bakanlığının görevleri esas alınarak hazırlanmıştır ve devletin vatandaşlarına her zaman sosyal destek sunmasını sağlamayı amaçlar. İnsan haklarına ve insan onuruna saygılı bir yaşantıyı kadınlarımıza vermeyi amaçlar."
    },
    {
        author: "Hayriye Ece Şenol",
        title: "Alo 183",
        id: 4,
        date: new Date(),
        shortContent:"Aile ve Sosyal Hizmetler Bakanlığı tarafından aile, kadın, çocuk, engelli, yaşlı, şehit yakınları ile gaziler ve gazi yakınlarına yönelik hizmetlerle alakalı çağrılar değerlendirilerek rehberlik ve danışmanlık hizmeti sunulan çağrı merkezidir."
    },
    {
        author: "Melisa Naz Ünlü",
        title: "Türkiyede kadına ve çocuğa karşı gerçekleşen şiddet oranları",
        id: 5,
        date: new Date(),
        shortContent:"Özellikle kadınlara uygulanan şiddet bütün toplumun kanını dondurmakta; çocuklara uygulanan şiddet de bu çocukların ruhsal gelişiminde derin yaralar bırakırken, onların ve dolayısıyla da toplumun geleceğini olumsuz etkilemektedir. Bu yazımızda, 2000 yılından beri bilgisine ulaştığımız şiddet  vakalarının sayısına ve bunların sonuçlarına ilişkin veriler değerlendirilecektir."
    },
    {
        author: "Fadime Tuba Şahin",
        title: "Kadına Yönelik Şiddet ve Türleri",
        id: 6,
        date: new Date(),
        shortContent:"Irk ve etnik kökenden bağımsız olarak tüm toplumlarda görülen ve sarsıcı etkilere sahip olan kadına yönelik şiddet bir insan hakları ihlalidir. En sık görülen insan hakları ihlali olmasının yanı sıra devletlerin özel alanın dokunulmazlığı ilkesine dayanarak müdahaleden kaçınması sonucunda önlenmesi zorlaşmaktadır.  "
    },
]