const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, 'src/assets/i18n');
const files = ['en.json', 'tr.json', 'ro.json', 'bg.json'];

const translations = {
  en: {
    NOT_FOUND: {
      TITLE: "404",
      HEADING: "PAGE NOT FOUND",
      MESSAGE: "The page you are looking for could not be found. It might be under restoration or you might have entered the wrong address.",
      BACK_BUTTON: "RETURN TO HOME",
      TITLE_SEO: "404 Page Not Found",
      DESC_SEO: "The page you are looking for could not be found."
    },
    CONTACT_VALS: {
      VAL_NAME: "* Required field (Min 3 characters)",
      VAL_EMAIL: "* Please enter a valid email",
      VAL_SUBJECT: "* Subject cannot be empty",
      VAL_MESSAGE: "* Message field is required (Min 10 characters)"
    }
  },
  tr: {
    NOT_FOUND: {
      TITLE: "404",
      HEADING: "SAYFA BULUNAMADI",
      MESSAGE: "Aradığınız sayfaya ulaşılamıyor. Belki de bu sayfa restorasyon sürecindedir veya adresi yanlış tuşladınız.",
      BACK_BUTTON: "ANASAYFAYA DÖN",
      TITLE_SEO: "404 Sayfa Bulunamadı",
      DESC_SEO: "Aradığınız sayfaya ulaşılamıyor. Belki de bu sayfa restorasyon sürecindedir."
    },
    CONTACT_VALS: {
      VAL_NAME: "* Zorunlu alan (Min 3 karakter)",
      VAL_EMAIL: "* Geçerli bir e-posta giriniz",
      VAL_SUBJECT: "* Konu boş bırakılamaz",
      VAL_MESSAGE: "* Mesaj alanı zorunludur (Min 10 karakter)"
    }
  },
  ro: {
    NOT_FOUND: {
      TITLE: "404",
      HEADING: "PAGINA NU A FOST GĂSITĂ",
      MESSAGE: "Pagina pe care o căutați nu a putut fi găsită. Este posibil să fie în proces de restaurare sau ați introdus adresa greșită.",
      BACK_BUTTON: "ÎNTOARCE-TE ACASĂ",
      TITLE_SEO: "404 Pagina nu a fost găsită",
      DESC_SEO: "Pagina pe care o căutați nu a putut fi găsită."
    },
    CONTACT_VALS: {
      VAL_NAME: "* Câmp obligatoriu (Min 3 caractere)",
      VAL_EMAIL: "* Vă rugăm să introduceți un e-mail valid",
      VAL_SUBJECT: "* Subiectul nu poate fi gol",
      VAL_MESSAGE: "* Câmpul mesaj este obligatoriu (Min 10 caractere)"
    }
  },
  bg: {
    NOT_FOUND: {
      TITLE: "404",
      HEADING: "СТРАНИЦАТА НЕ Е НАМЕРЕНА",
      MESSAGE: "Страницата, която търсите, не може да бъде намерена. Може да е в процес на реставрация или сте въвели грешен адрес.",
      BACK_BUTTON: "ВЪРНЕТЕ СЕ В НАЧАЛОТО",
      TITLE_SEO: "404 Страницата не е намерена",
      DESC_SEO: "Страницата, която търсите, не може да бъде намерена."
    },
    CONTACT_VALS: {
      VAL_NAME: "* Задължително поле (Мин 3 знака)",
      VAL_EMAIL: "* Моля, въведете валиден имейл",
      VAL_SUBJECT: "* Темата не може да бъде празна",
      VAL_MESSAGE: "* Полето за съобщение е задължително (Мин 10 знака)"
    }
  }
};

files.forEach(file => {
  const lang = file.split('.')[0];
  const filePath = path.join(i18nDir, file);
  
  if (fs.existsSync(filePath)) {
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add NOT_FOUND
    if (!data.NOT_FOUND) data.NOT_FOUND = {};
    Object.assign(data.NOT_FOUND, translations[lang].NOT_FOUND);
    
    // Add CONTACT validations
    if (!data.CONTACT) data.CONTACT = {};
    Object.assign(data.CONTACT, translations[lang].CONTACT_VALS);
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${file}`);
  }
});
