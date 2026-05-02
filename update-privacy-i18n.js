const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, 'src/assets/i18n');
const files = ['en.json', 'tr.json', 'ro.json', 'bg.json'];

const translations = {
  tr: {
    PRIVACY_POLICY: {
      TITLE_1: "GİZLİLİK",
      TITLE_2: "POLİTİKASI",
      P1: "(www.reconditionareautocare.ro) olarak, kullanıcılarımızın hizmetlerimizden güvenli ve eksiksiz şekilde faydalanmalarını sağlamak amacıyla sitemizi kullanan üyelerimizin gizliliğini korumak için çalışıyoruz. Bu doğrultuda, işbu www.reconditionareautocare.ro Gizlilik Politikası (“Politika”), üyelerimizin kişisel verilerinin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) ile tamamen uyumlu bir şekilde işlenmesi ve kullanıcılarımızı bu bağlamda bilgilendirmek amacıyla hazırlanmıştır. www.reconditionareautocare.ro çerez politikası İşbu Politika’nın ayrılmaz parçasıdır.",
      P2: "İşbu Politika’nın amacı, www.reconditionareautocare.ro tarafından işletilmekte olan www.reconditionareautocare.ro internet sitesi ile mobil uygulamanın (hepsi birlikte “www.reconditionareautocare.ro” olarak anılacaktır) işletilmesi sırasında www.reconditionareautocare.ro üyeleri/ziyaretçileri/kullanıcıları (hepsi birlikte “Veri Sahibi” olarak anılacaktır) tarafından www.reconditionareautocare.ro ile paylaşılan veya www.reconditionareautocare.ro’un Veri Sahibi’nin www.reconditionareautocare.ro’u kullanımı sırasında ürettiği kişisel verilerin kullanımına ilişkin koşul ve şartları tespit etmektir.",
      H1: "Hangi Veriler İşlenmektedir?",
      H1_P1: "Aşağıda www.reconditionareautocare.ro tarafından işlenen ve Kanun uyarınca kişisel veri sayılan verilerin hangileri olduğu sıralanmıştır. Aksi açıkça belirtilmedikçe, işbu Politika kapsamında arz edilen hüküm ve koşullar kapsamında “kişisel veri” ifadesi aşağıda yer alan bilgileri kapsayacaktır.",
      L1: "• Kimlik Bilgisi",
      L2: "• İletişim Bilgisi",
      L3: "• Kullanıcı Bilgisi",
      L4: "• Kullanıcı İşlem Bilgisi",
      L5: "• İşlem Güvenliği Bilgisi",
      L6: "• Finansal Bilgi",
      L7: "• Pazarlama Bilgisi",
      L8: "• Talep/Şikayet Yönetimi Bilgisi",
      H1_P2: "Kişisel Verilerin Korunması Kanunu’nun 3. ve 7. maddeleri dairesince, geri döndürülemeyecek şekilde anonim hale getirilen veriler, anılan kanun hükümleri uyarınca kişisel veri olarak kabul edilmeyecek ve bu verilere ilişkin işleme faaliyetleri işbu Politika hükümleri ile bağlı olmaksızın gerçekleştirecektir.",
      H2: "Kişisel Veri İşleme Amaçları",
      H2_P1: "www.reconditionareautocare.ro, Veri Sahibi tarafından sağlanan kişisel verileri, üyelik kaydı ve hesabının oluşturulması ve buna ilişkin kayıtların tutulması, Veri Sahibi’nin www.reconditionareautocare.ro üzerinden sağlanan hizmetlerden faydalandırılması sistem hatalarının tespit edilerek performans takibinin yapılması ve www.reconditionareautocare.ro’un işleyişinin iyileştirilmesi, bakım ve destek hizmetleri ile yedekleme hizmetlerinin sunulması amaçları dahil olmak üzere www.reconditionareautocare.ro tarafından sunulan ürün ve hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimleri tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi ile bu ürün ve hizmetlerin ilgili kişilerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve icrası, www.reconditionareautocare.ro tarafından yürütülen ticari faaliyetlerin gerçekleştirilmesi için ilgili iş birimleri tarafından gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin yürütülmesi, www.reconditionareautocare.ro ve iş ilişkisi içerisinde bulunduğu kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini ile www.reconditionareautocare.ro’un ticari ve/veya iş stratejilerinin planlanması ve icrası amaçlarıyla işlenebilecektir.",
      H3: "Veri Sahiplerinin Açık Rızası Doğrultusunda İşlenecek Kişisel Veriler ve İşleme Amaçları",
      H3_P1: "Veri Sahibi’nin açık rızası kapsamında, www.reconditionareautocare.ro, Veri Sahipleri’nin www.reconditionareautocare.ro üzerindeki hareketlerini takip ederek kullanıcı deneyiminin artırılması, istatistik oluşturulması, profilleme yapılması, doğrudan pazarlama ve yeniden pazarlama, Veri Sahibi’ne özel promosyon önerilerinin oluşturulması ve Veri Sahibi’ne iletilmesi ve bu kapsamda elde edilen verilerin her türlü reklam ve materyal içeriğinde kullanılması amacıyla veri işleyebilecek ve aşağıda anılan taraflarla bu verileri paylaşabilecektir.",
      H4: "Kişisel Verilerin Aktarımı",
      H4_P1: "www.reconditionareautocare.ro, Veri Sahibi’ne ait kişisel verileri ve bu kişisel verileri kullanılarak elde ettiği yeni verileri, işbu Gizlilik Politikası ile belirlenen amaçların gerçekleştirilebilmesi için www.reconditionareautocare.ro’un hizmetlerinden faydalandığı üçüncü kişilere, söz konusu hizmetlerin temini amacıyla sınırlı olmak üzere aktarılabilecektir.",
      H4_P2: "www.reconditionareautocare.ro, Veri Sahibi deneyiminin geliştirilmesi (iyileştirme ve kişiselleştirme dâhil), Veri Sahibi’nin güvenliğini sağlamak, hileli ya da izinsiz kullanımları tespit etmek, operasyonel değerlendirme araştırılması, www.reconditionareautocare.ro hizmetlerine ilişkin hataların giderilmesi ve işbu Gizlilik Politikası’nda yer alan amaçlardan herhangi birisini gerçekleştirebilmek için SMS gönderimi yapanlar da dahil olmak üzere dış kaynak hizmet sağlayıcıları, barındırma hizmet sağlayıcıları (hosting servisleri), hukuk büroları, araştırma şirketleri, çağrı merkezleri gibi üçüncü kişiler ile paylaşabilecektir."
    }
  },
  en: {
    PRIVACY_POLICY: {
      TITLE_1: "PRIVACY",
      TITLE_2: "POLICY",
      P1: "As (www.reconditionareautocare.ro), we strive to protect the privacy of our members using our site in order to ensure that our users can safely and completely benefit from our services. Accordingly, this www.reconditionareautocare.ro Privacy Policy (“Policy”) has been prepared to process our members' personal data in full compliance with the Personal Data Protection Law No. 6698 (“Law”) and to inform our users in this context. The www.reconditionareautocare.ro cookie policy is an integral part of this Policy.",
      P2: "The purpose of this Policy is to determine the terms and conditions regarding the use of personal data shared with www.reconditionareautocare.ro by www.reconditionareautocare.ro members/visitors/users (collectively referred to as the “Data Subject”) during the operation of the www.reconditionareautocare.ro website and mobile application (collectively referred to as “www.reconditionareautocare.ro”) operated by www.reconditionareautocare.ro, or produced by www.reconditionareautocare.ro during the Data Subject's use of www.reconditionareautocare.ro.",
      H1: "What Data is Processed?",
      H1_P1: "The following lists the data processed by www.reconditionareautocare.ro and considered as personal data in accordance with the Law. Unless explicitly stated otherwise, the term 'personal data' under the terms and conditions provided in this Policy will include the information below.",
      L1: "• Identity Information",
      L2: "• Contact Information",
      L3: "• User Information",
      L4: "• User Transaction Information",
      L5: "• Transaction Security Information",
      L6: "• Financial Information",
      L7: "• Marketing Information",
      L8: "• Request/Complaint Management Information",
      H1_P2: "In accordance with Articles 3 and 7 of the Personal Data Protection Law, data that is irreversibly anonymized will not be considered as personal data under the provisions of the said law, and processing activities regarding such data will be carried out regardless of the provisions of this Policy.",
      H2: "Purposes of Processing Personal Data",
      H2_P1: "www.reconditionareautocare.ro will process personal data provided by the Data Subject to create a membership record and account and keep related records, to enable the Data Subject to benefit from the services provided via www.reconditionareautocare.ro, to detect system errors to track performance and improve the functioning of www.reconditionareautocare.ro, including for the purposes of providing maintenance and support services and backup services, to carry out necessary work by business units to benefit relevant persons from the products and services offered by www.reconditionareautocare.ro, to customize these products and services according to the tastes, usage habits, and needs of the relevant persons and recommend them, to plan and execute the necessary activities for this purpose, to carry out the commercial activities carried out by www.reconditionareautocare.ro by the relevant business units and execute related business processes, to ensure the legal, technical, and commercial-occupational safety of www.reconditionareautocare.ro and the persons with whom it has a business relationship, and to plan and execute www.reconditionareautocare.ro's commercial and/or business strategies.",
      H3: "Personal Data to be Processed in Accordance with the Explicit Consent of Data Subjects and Purposes of Processing",
      H3_P1: "Within the scope of the Data Subject's explicit consent, www.reconditionareautocare.ro may process data by tracking the Data Subjects' movements on www.reconditionareautocare.ro to increase user experience, generate statistics, profile, direct market and remarket, create special promotion recommendations for the Data Subject and forward them to the Data Subject, and use the data obtained in this context in any advertising and material content, and may share this data with the parties mentioned below.",
      H4: "Transfer of Personal Data",
      H4_P1: "www.reconditionareautocare.ro may transfer the personal data belonging to the Data Subject and the new data obtained by using these personal data to third parties from whom www.reconditionareautocare.ro benefits in order to realize the purposes specified in this Privacy Policy, limited to the provision of the said services.",
      H4_P2: "www.reconditionareautocare.ro may share with third parties such as outsourcing service providers, hosting service providers, law firms, research companies, call centers, including those who send SMS, to improve the Data Subject experience (including improvement and personalization), to ensure the security of the Data Subject, to detect fraudulent or unauthorized use, to investigate operational evaluations, to resolve errors related to www.reconditionareautocare.ro services and to fulfill any of the purposes in this Privacy Policy."
    }
  },
  ro: {
    PRIVACY_POLICY: {
      TITLE_1: "POLITICA DE",
      TITLE_2: "CONFIDENȚIALITATE",
      P1: "În calitate de (www.reconditionareautocare.ro), ne străduim să protejăm confidențialitatea membrilor noștri care utilizează site-ul nostru, pentru a ne asigura că utilizatorii noștri pot beneficia în mod sigur și complet de serviciile noastre. În consecință, această Politică de Confidențialitate www.reconditionareautocare.ro („Politica”) a fost pregătită pentru a procesa datele personale ale membrilor noștri în conformitate deplină cu Legea privind Protecția Datelor cu Caracter Personal Nr. 6698 („Legea”) și pentru a ne informa utilizatorii în acest context. Politica privind modulele cookie a www.reconditionareautocare.ro este o parte integrantă a acestei Politici.",
      P2: "Scopul acestei Politici este de a determina termenii și condițiile privind utilizarea datelor cu caracter personal partajate cu www.reconditionareautocare.ro de către membrii/vizitatorii/utilizatorii www.reconditionareautocare.ro (denumiți colectiv „Persoana Vizată”) în timpul funcționării site-ului web și a aplicației mobile www.reconditionareautocare.ro (denumite colectiv „www.reconditionareautocare.ro”), sau produse de www.reconditionareautocare.ro în timpul utilizării www.reconditionareautocare.ro de către Persoana Vizată.",
      H1: "Ce Date Sunt Prelucrate?",
      H1_P1: "Următoarele enumeră datele prelucrate de www.reconditionareautocare.ro și considerate date cu caracter personal în conformitate cu Legea. Cu excepția cazului în care se menționează în mod explicit altfel, termenul „date cu caracter personal” în termenii și condițiile prevăzute în această Politică va include informațiile de mai jos.",
      L1: "• Informații de Identitate",
      L2: "• Informații de Contact",
      L3: "• Informații Despre Utilizator",
      L4: "• Informații Despre Tranzacțiile Utilizatorului",
      L5: "• Informații Privind Securitatea Tranzacțiilor",
      L6: "• Informații Financiare",
      L7: "• Informații de Marketing",
      L8: "• Informații Despre Gestionarea Cererilor/Reclamațiilor",
      H1_P2: "În conformitate cu articolele 3 și 7 din Legea privind Protecția Datelor cu Caracter Personal, datele care sunt anonimizate ireversibil nu vor fi considerate date cu caracter personal conform prevederilor legii respective, iar activitățile de prelucrare a acestor date vor fi desfășurate indiferent de prevederile acestei Politici.",
      H2: "Scopurile Prelucrării Datelor Cu Caracter Personal",
      H2_P1: "www.reconditionareautocare.ro va prelucra datele cu caracter personal furnizate de Persoana Vizată pentru a crea o înregistrare și un cont de membru și a păstra înregistrările aferente, pentru a permite Persoanei Vizate să beneficieze de serviciile furnizate prin www.reconditionareautocare.ro, pentru a detecta erorile de sistem, pentru a urmări performanța și a îmbunătăți funcționarea www.reconditionareautocare.ro, inclusiv în scopul furnizării serviciilor de întreținere și asistență și a serviciilor de backup, pentru a desfășura activitățile necesare de către unitățile de afaceri pentru a permite persoanelor vizate să beneficieze de produsele și serviciile oferite de www.reconditionareautocare.ro, pentru a personaliza aceste produse și servicii în funcție de gusturile, obiceiurile de utilizare și nevoile persoanelor vizate și a le recomanda, pentru a planifica și executa activitățile necesare în acest scop, pentru a desfășura activitățile comerciale desfășurate de www.reconditionareautocare.ro de către unitățile de afaceri relevante și a executa procesele de afaceri aferente, pentru a asigura siguranța legală, tehnică și comercial-ocupațională a www.reconditionareautocare.ro și a persoanelor cu care are o relație de afaceri, și pentru a planifica și executa strategiile comerciale și/sau de afaceri ale www.reconditionareautocare.ro.",
      H3: "Date cu Caracter Personal care Urmează a fi Prelucrate în Conformitate cu Consimțământul Explicit al Persoanelor Vizate și Scopurile Prelucrării",
      H3_P1: "În limitele consimțământului explicit al Persoanei Vizate, www.reconditionareautocare.ro poate prelucra date prin urmărirea mișcărilor Persoanelor Vizate pe www.reconditionareautocare.ro pentru a îmbunătăți experiența utilizatorului, a genera statistici, profiluri, marketing direct și remarketing, a crea recomandări speciale de promovare pentru Persoana Vizată și a le transmite Persoanei Vizate, și a utiliza datele obținute în acest context în orice conținut publicitar și material, și poate partaja aceste date cu părțile menționate mai jos.",
      H4: "Transferul Datelor Cu Caracter Personal",
      H4_P1: "www.reconditionareautocare.ro poate transfera datele cu caracter personal aparținând Persoanei Vizate și noile date obținute prin utilizarea acestor date cu caracter personal către terțe părți de care www.reconditionareautocare.ro beneficiază pentru a realiza scopurile specificate în această Politică de Confidențialitate, limitat la furnizarea serviciilor menționate.",
      H4_P2: "www.reconditionareautocare.ro poate partaja cu terțe părți, cum ar fi furnizori de servicii externalizate, furnizori de servicii de găzduire, firme de avocatură, companii de cercetare, centre de apeluri, inclusiv cei care trimit SMS-uri, pentru a îmbunătăți experiența Persoanei Vizate (inclusiv îmbunătățire și personalizare), pentru a asigura securitatea Persoanei Vizate, pentru a detecta utilizările frauduloase sau neautorizate, pentru a investiga evaluările operaționale, pentru a rezolva erorile legate de serviciile www.reconditionareautocare.ro și pentru a îndeplini oricare dintre scopurile din această Politică de Confidențialitate."
    }
  },
  bg: {
    PRIVACY_POLICY: {
      TITLE_1: "ПОЛИТИКА ЗА",
      TITLE_2: "ПОВЕРИТЕЛНОСТ",
      P1: "Като (www.reconditionareautocare.ro), ние се стремим да защитим поверителността на нашите членове, които използват нашия сайт, за да гарантираме, че нашите потребители могат безопасно и пълноценно да се възползват от нашите услуги. Съответно, тази Политика за поверителност на www.reconditionareautocare.ro („Политика“) е подготвена, за да обработва личните данни на нашите членове в пълно съответствие със Закона за защита на личните данни № 6698 („Закон“) и да информира нашите потребители в този контекст. Политиката за бисквитки на www.reconditionareautocare.ro е неразделна част от тази Политика.",
      P2: "Целта на тази Политика е да определи сроковете и условията относно използването на лични данни, споделени с www.reconditionareautocare.ro от членове/посетители/потребители на www.reconditionareautocare.ro (наричани заедно „Субект на данни“) по време на работата на уебсайта и мобилното приложение на www.reconditionareautocare.ro (наричани заедно „www.reconditionareautocare.ro“), или произведени от www.reconditionareautocare.ro по време на използването на www.reconditionareautocare.ro от Субекта на данни.",
      H1: "Какви данни се обработват?",
      H1_P1: "Следното изброява данните, обработвани от www.reconditionareautocare.ro и считани за лични данни в съответствие със Закона. Освен ако не е изрично посочено друго, терминът „лични данни“ съгласно сроковете и условията, предвидени в тази Политика, ще включва информацията по-долу.",
      L1: "• Информация за самоличност",
      L2: "• Информация за контакт",
      L3: "• Информация за потребителя",
      L4: "• Информация за транзакции на потребителя",
      L5: "• Информация за сигурността на транзакциите",
      L6: "• Финансова информация",
      L7: "• Маркетингова информация",
      L8: "• Информация за управление на заявки/оплаквания",
      H1_P2: "В съответствие с членове 3 и 7 от Закона за защита на личните данни, данните, които са необратимо анонимизирани, няма да се считат за лични данни съгласно разпоредбите на посочения закон и дейностите по обработка на такива данни ще се извършват независимо от разпоредбите на тази Политика.",
      H2: "Цели на обработването на лични данни",
      H2_P1: "www.reconditionareautocare.ro ще обработва лични данни, предоставени от Субекта на данни, за да създаде членски запис и акаунт и да съхранява свързаните записи, за да позволи на Субекта на данни да се възползва от услугите, предоставяни чрез www.reconditionareautocare.ro, за откриване на системни грешки, за проследяване на производителността и подобряване на функционирането на www.reconditionareautocare.ro, включително за целите на предоставянето на услуги за поддръжка и услуги за архивиране, за извършване на необходимата работа от бизнес единиците, за да се даде възможност на съответните лица да се възползват от продуктите и услугите, предлагани от www.reconditionareautocare.ro, за персонализиране на тези продукти и услуги според вкусовете, навиците за използване и нуждите на съответните лица и да ги препоръча, да планира и изпълнява необходимите дейности за тази цел, да осъществява търговските дейности, извършвани от www.reconditionareautocare.ro от съответните бизнес единици и да изпълнява свързаните бизнес процеси, да гарантира правната, техническата и търговско-професионалната безопасност на www.reconditionareautocare.ro и лицата, с които има бизнес отношения, и да планира и изпълнява търговските и/или бизнес стратегиите на www.reconditionareautocare.ro.",
      H3: "Лични данни, които ще бъдат обработвани в съответствие с изричното съгласие на субектите на данни и цели на обработването",
      H3_P1: "В обхвата на изричното съгласие на Субекта на данни, www.reconditionareautocare.ro може да обработва данни чрез проследяване на движенията на Субектите на данни на www.reconditionareautocare.ro за подобряване на потребителското изживяване, генериране на статистика, профилиране, директен маркетинг и ремаркетинг, създаване на специални препоръки за промоции за Субекта на данни и тяхното предаване на Субекта на данни, и използване на данните, получени в този контекст във всякакво рекламно и материално съдържание, и може да споделя тези данни с долупосочените страни.",
      H4: "Прехвърляне на лични данни",
      H4_P1: "www.reconditionareautocare.ro може да прехвърли личните данни, принадлежащи на Субекта на данни, и новите данни, получени чрез използване на тези лични данни, на трети страни, от които www.reconditionareautocare.ro се възползва, за да реализира целите, посочени в тази Политика за поверителност, ограничени до предоставянето на посочените услуги.",
      H4_P2: "www.reconditionareautocare.ro може да споделя с трети страни, като доставчици на аутсорсинг услуги, доставчици на хостинг услуги, адвокатски кантори, изследователски компании, кол центрове, включително тези, които изпращат SMS, за подобряване на изживяването на Субекта на данни (включително подобрение и персонализиране), за гарантиране на сигурността на Субекта на данни, за откриване на измамни или неоторизирани употреби, за проучване на оперативни оценки, за разрешаване на грешки, свързани с услугите на www.reconditionareautocare.ro и за изпълнение на която и да е от целите в тази Политика за поверителност."
    }
  }
};

files.forEach(file => {
  const lang = file.split('.')[0];
  const filePath = path.join(i18nDir, file);
  
  if (fs.existsSync(filePath)) {
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (!data.PRIVACY_POLICY) data.PRIVACY_POLICY = {};
    Object.assign(data.PRIVACY_POLICY, translations[lang].PRIVACY_POLICY);
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${file} with privacy policy.`);
  }
});
