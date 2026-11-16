// Ayet web sitesi: 7 dil. Dil sırası: ?lang= > kayıtlı seçim > tarayıcı dili > İngilizce.
var AyetI18n = (function () {
  var T = {
    tr: {
      _title: "Ayet: Namaz Vakti, Ezan ve Kur'an",
      title: "Her sabah sizi bir ayet karşılasın",
      lead: "Namaz vakitleri ve ezan, Kur'an-ı Kerim, dualar ve tebrik kartları. Sade, huzurlu ve ücretsiz.",
      get_ios: "Hemen indirin", get_android: "Hemen indirin",
      b1: "Kur'an okurken reklam yok", b2: "Abonelik yok", b3: "Üyelik yok",
      verse: "“Bilesiniz ki kalpler ancak Allah'ı anmakla huzur bulur.”", verse_ref: "Ra'd Suresi, 28",
      f1h: "Kalbinize göre ayet", f1p: "Mutlu, huzurlu, üzgün ya da bunalmış mısınız? Seçin, 600'den fazla özenle seçilmiş ayet arasından size iyi gelecek olanı okuyun.",
      f2h: "Namaz vakti ve ezan", f2p: "Bulunduğunuz yere göre doğru vakitler, farklı ezan sesleri, vakit öncesi hatırlatma. Seyahatte kendiliğinden güncellenir.",
      f3h: "Kur'an-ı Kerim ve hatim", f3p: "114 sure, okunuş ve meal. 15 hafızdan ayet ayet dinleme, kaldığınız yerden devam, hatim takibi.",
      f4h: "Cuma, kandil ve bayram kartları", f4p: "Yüzlerce hazır mesaj ya da kendi mesajınız; şık bir karta dönüştürüp WhatsApp ve Instagram'da paylaşın.",
      f5h: "Dua, zikir ve Esmâ", f5p: "Günlük dualar, namaz tesbihatı, zikirmatik ve Allah'ın 99 ismi anlamlarıyla.",
      f6h: "Widget, kıble ve cami", f6p: "Ana ekranda canlı geri sayım ve günün ayeti; kıble pusulası ve en yakın camiler.",
      ph: "Ayet Premium", pp: "İsteğe bağlı ve tek seferlik: tamamen reklamsız kullanım, özel kart ve uygulama temaları. Aylık ücret yok.",
      cta: "Ayet'i indirin; yarın sabah ilk ayetiniz sizi bekliyor olsun.",
      langs: "Türkçe, İngilizce, Almanca, Fransızca, Felemenkçe, Arapça ve Endonezce",
      support: "Destek", privacy: "Gizlilik Politikası", home: "Ana sayfa",
      redirect: "Mağazaya yönlendiriliyorsunuz…"
    },
    en: {
      _title: "Ayet: Quran, Prayer Times & Qibla",
      title: "Start every morning with a verse",
      lead: "Prayer times and adhan, the Holy Quran, duas and greeting cards. Simple, peaceful and free.",
      get_ios: "Download on the", get_android: "Get it on",
      b1: "No ads while reading the Quran", b2: "No subscription", b3: "No account",
      verse: "“Surely in the remembrance of Allah do hearts find rest.”", verse_ref: "Surah Ar-Ra'd, 28",
      f1h: "A verse for your heart", f1p: "Happy, calm, sad or overwhelmed? Pick how you feel and read a verse that helps, chosen from over 600 carefully selected verses.",
      f2h: "Prayer times and adhan", f2p: "Accurate times for where you are, several adhan voices and reminders before each prayer. Updates automatically when you travel.",
      f3h: "The Holy Quran and khatm", f3p: "All 114 surahs with transliteration and translation. Listen verse by verse from 15 reciters, continue where you left off, track your khatm.",
      f4h: "Friday, holy night and Eid cards", f4p: "Hundreds of ready messages or your own words, turned into a beautiful card for WhatsApp and Instagram.",
      f5h: "Duas, dhikr and Asma ul-Husna", f5p: "Daily duas, tasbih after prayer, a dhikr counter and the 99 names of Allah with meanings.",
      f6h: "Widgets, qibla and mosques", f6p: "Live countdown and the verse of the day on your home screen; qibla compass and nearby mosques.",
      ph: "Ayet Premium", pp: "Optional and one-time: completely ad-free, special card and app themes. No monthly fee.",
      cta: "Download Ayet, and your first verse will be waiting for you tomorrow morning.",
      langs: "Turkish, English, German, French, Dutch, Arabic and Indonesian",
      support: "Support", privacy: "Privacy Policy", home: "Home",
      redirect: "Taking you to the store…"
    },
    de: {
      _title: "Ayet: Gebetszeiten, Adhan & Koran",
      title: "Beginne jeden Morgen mit einem Vers",
      lead: "Gebetszeiten und Adhan, der edle Koran, Bittgebete und Grußkarten. Schlicht, ruhig und kostenlos.",
      get_ios: "Laden im", get_android: "Jetzt bei",
      b1: "Keine Werbung beim Koranlesen", b2: "Kein Abo", b3: "Kein Konto",
      verse: "„Wahrlich, im Gedenken Allahs finden die Herzen Ruhe.“", verse_ref: "Sure Ar-Ra'd, 28",
      f1h: "Ein Vers für dein Herz", f1p: "Glücklich, ruhig, traurig oder überfordert? Wähle, wie du dich fühlst, und lies einen passenden Vers aus über 600 sorgfältig ausgewählten.",
      f2h: "Gebetszeiten und Adhan", f2p: "Genaue Zeiten für deinen Ort, verschiedene Adhan-Stimmen und Erinnerungen vor jedem Gebet. Passt sich auf Reisen automatisch an.",
      f3h: "Der edle Koran und Khatm", f3p: "Alle 114 Suren mit Umschrift und Übersetzung. Vers für Vers von 15 Rezitatoren hören, dort weiterlesen, wo du aufgehört hast.",
      f4h: "Karten für Freitag, heilige Nächte und Bayram", f4p: "Hunderte fertige Texte oder eigene Worte als schöne Karte für WhatsApp und Instagram.",
      f5h: "Bittgebete, Dhikr und Asma ul-Husna", f5p: "Tägliche Bittgebete, Tasbih nach dem Gebet, Dhikr-Zähler und die 99 Namen Allahs mit Bedeutung.",
      f6h: "Widgets, Qibla und Moscheen", f6p: "Live-Countdown und Vers des Tages auf dem Startbildschirm; Qibla-Kompass und Moscheen in der Nähe.",
      ph: "Ayet Premium", pp: "Optional und einmalig: komplett werbefrei, besondere Karten- und App-Designs. Keine monatliche Gebühr.",
      cta: "Lade Ayet herunter – morgen früh wartet dein erster Vers auf dich.",
      langs: "Türkisch, Englisch, Deutsch, Französisch, Niederländisch, Arabisch und Indonesisch",
      support: "Hilfe", privacy: "Datenschutz", home: "Startseite",
      redirect: "Du wirst zum Store weitergeleitet…"
    },
    fr: {
      _title: "Ayet : Heures de prière, Adhan & Coran",
      title: "Commencez chaque matin par un verset",
      lead: "Heures de prière et adhan, le Saint Coran, invocations et cartes de vœux. Simple, apaisant et gratuit.",
      get_ios: "Télécharger dans l'", get_android: "Disponible sur",
      b1: "Pas de pub pendant la lecture du Coran", b2: "Sans abonnement", b3: "Sans compte",
      verse: "« C'est par l'évocation d'Allah que se tranquillisent les cœurs. »", verse_ref: "Sourate Ar-Ra'd, 28",
      f1h: "Un verset pour votre cœur", f1p: "Heureux, serein, triste ou débordé ? Choisissez votre humeur et lisez un verset qui fait du bien, parmi plus de 600 versets choisis avec soin.",
      f2h: "Heures de prière et adhan", f2p: "Des horaires précis pour votre lieu, plusieurs voix d'adhan et des rappels avant chaque prière. Mise à jour automatique en voyage.",
      f3h: "Le Saint Coran et la khatma", f3p: "Les 114 sourates avec translittération et traduction. Écoute verset par verset avec 15 récitateurs, reprise là où vous vous êtes arrêté.",
      f4h: "Cartes du vendredi, des nuits bénies et de l'Aïd", f4p: "Des centaines de messages prêts ou vos propres mots, en une belle carte pour WhatsApp et Instagram.",
      f5h: "Invocations, dhikr et Asma ul-Husna", f5p: "Invocations du quotidien, tasbih après la prière, compteur de dhikr et les 99 noms d'Allah avec leur sens.",
      f6h: "Widgets, qibla et mosquées", f6p: "Compte à rebours et verset du jour sur l'écran d'accueil ; boussole de la qibla et mosquées proches.",
      ph: "Ayet Premium", pp: "Facultatif et en un seul achat : sans aucune publicité, thèmes de cartes et d'appli exclusifs. Aucun abonnement.",
      cta: "Téléchargez Ayet : demain matin, votre premier verset vous attendra.",
      langs: "Turc, anglais, allemand, français, néerlandais, arabe et indonésien",
      support: "Assistance", privacy: "Confidentialité", home: "Accueil",
      redirect: "Redirection vers la boutique…"
    },
    nl: {
      _title: "Ayet: Gebedstijden, Adhan & Koran",
      title: "Begin elke ochtend met een vers",
      lead: "Gebedstijden en adhan, de Heilige Koran, smeekbeden en wenskaarten. Eenvoudig, rustgevend en gratis.",
      get_ios: "Download in de", get_android: "Ontdek het op",
      b1: "Geen advertenties tijdens het Koranlezen", b2: "Geen abonnement", b3: "Geen account",
      verse: "“Voorwaar, door het gedenken van Allah komen de harten tot rust.”", verse_ref: "Soera Ar-Ra'd, 28",
      f1h: "Een vers voor je hart", f1p: "Blij, rustig, verdrietig of overweldigd? Kies hoe je je voelt en lees een vers dat goed doet, uit meer dan 600 zorgvuldig gekozen verzen.",
      f2h: "Gebedstijden en adhan", f2p: "Nauwkeurige tijden voor jouw plek, verschillende adhan-stemmen en herinneringen voor elk gebed. Past zich op reis automatisch aan.",
      f3h: "De Heilige Koran en khatm", f3p: "Alle 114 soera's met transliteratie en vertaling. Luister vers voor vers naar 15 reciteurs en ga verder waar je gebleven was.",
      f4h: "Kaarten voor vrijdag, heilige nachten en Bayram", f4p: "Honderden kant-en-klare berichten of je eigen woorden als mooie kaart voor WhatsApp en Instagram.",
      f5h: "Smeekbeden, dhikr en Asma ul-Husna", f5p: "Dagelijkse smeekbeden, tasbih na het gebed, dhikr-teller en de 99 namen van Allah met betekenis.",
      f6h: "Widgets, qibla en moskeeën", f6p: "Live aftelling en vers van de dag op je beginscherm; qibla-kompas en moskeeën in de buurt.",
      ph: "Ayet Premium", pp: "Optioneel en eenmalig: volledig reclamevrij, speciale kaart- en app-thema's. Geen maandelijkse kosten.",
      cta: "Download Ayet; morgenochtend wacht je eerste vers op je.",
      langs: "Turks, Engels, Duits, Frans, Nederlands, Arabisch en Indonesisch",
      support: "Hulp", privacy: "Privacybeleid", home: "Home",
      redirect: "Je wordt doorgestuurd naar de winkel…"
    },
    ar: {
      _title: "آية: مواقيت الصلاة والأذان والقرآن",
      title: "ابدأ كل صباح بآية",
      lead: "مواقيت الصلاة والأذان، القرآن الكريم، الأدعية وبطاقات التهنئة. بسيط وهادئ ومجاني.",
      get_ios: "حمّله من", get_android: "احصل عليه من",
      b1: "لا إعلانات أثناء قراءة القرآن", b2: "بدون اشتراك", b3: "بدون حساب",
      verse: "«أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ»", verse_ref: "سورة الرعد، 28",
      f1h: "آية تناسب قلبك", f1p: "سعيد، مطمئن، حزين أو مثقل؟ اختر شعورك واقرأ آية تريح قلبك من بين أكثر من 600 آية مختارة بعناية.",
      f2h: "مواقيت الصلاة والأذان", f2p: "مواقيت دقيقة حسب موقعك، أصوات أذان متعددة وتذكير قبل كل صلاة. تتحدث تلقائيًا عند السفر.",
      f3h: "القرآن الكريم والختمة", f3p: "114 سورة مع الترجمة. استماع آية آية من 15 قارئًا، ومتابعة القراءة من حيث توقفت، وتتبع الختمة.",
      f4h: "بطاقات الجمعة والليالي المباركة والعيد", f4p: "مئات الرسائل الجاهزة أو كلماتك الخاصة في بطاقة جميلة لواتساب وإنستغرام.",
      f5h: "الأدعية والأذكار والأسماء الحسنى", f5p: "أدعية يومية، أذكار بعد الصلاة، عدّاد للذكر، وأسماء الله الحسنى.",
      f6h: "الأدوات والقبلة والمساجد", f6p: "عدّ تنازلي وآية اليوم على الشاشة الرئيسية؛ بوصلة القبلة وأقرب المساجد.",
      ph: "آية بريميوم", pp: "اختياري ودفعة واحدة: بدون إعلانات إطلاقًا، وسمات خاصة للبطاقات والتطبيق. بدون رسوم شهرية.",
      cta: "حمّل آية، وغدًا صباحًا ستنتظرك أول آية.",
      langs: "التركية والإنجليزية والألمانية والفرنسية والهولندية والعربية والإندونيسية",
      support: "الدعم", privacy: "سياسة الخصوصية", home: "الرئيسية",
      redirect: "جارٍ تحويلك إلى المتجر…"
    },
    id: {
      _title: "Ayet: Jadwal Salat, Azan & Al-Qur'an",
      title: "Awali setiap pagi dengan satu ayat",
      lead: "Jadwal salat dan azan, Al-Qur'an, doa dan kartu ucapan. Sederhana, menenangkan, dan gratis.",
      get_ios: "Unduh di", get_android: "Dapatkan di",
      b1: "Tanpa iklan saat membaca Al-Qur'an", b2: "Tanpa langganan", b3: "Tanpa akun",
      verse: "“Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.”", verse_ref: "Surah Ar-Ra'd, 28",
      f1h: "Ayat untuk hatimu", f1p: "Senang, tenang, sedih, atau sedang berat? Pilih perasaanmu dan baca ayat yang menenangkan dari lebih dari 600 ayat pilihan.",
      f2h: "Jadwal salat dan azan", f2p: "Waktu akurat sesuai lokasimu, beberapa suara azan, dan pengingat sebelum salat. Otomatis menyesuaikan saat bepergian.",
      f3h: "Al-Qur'an dan khatam", f3p: "114 surah dengan bacaan latin dan terjemahan. Dengarkan ayat demi ayat dari 15 qari, lanjutkan dari bacaan terakhir.",
      f4h: "Kartu Jumat, malam mulia, dan Lebaran", f4p: "Ratusan pesan siap pakai atau kata-katamu sendiri, jadi kartu indah untuk WhatsApp dan Instagram.",
      f5h: "Doa, zikir, dan Asmaul Husna", f5p: "Doa harian, zikir setelah salat, penghitung zikir, dan 99 nama Allah beserta maknanya.",
      f6h: "Widget, kiblat, dan masjid", f6p: "Hitung mundur dan ayat hari ini di layar utama; kompas kiblat dan masjid terdekat.",
      ph: "Ayet Premium", pp: "Opsional dan sekali bayar: bebas iklan sepenuhnya, tema kartu dan aplikasi khusus. Tanpa biaya bulanan.",
      cta: "Unduh Ayet; besok pagi ayat pertamamu sudah menunggu.",
      langs: "Turki, Inggris, Jerman, Prancis, Belanda, Arab, dan Indonesia",
      support: "Bantuan", privacy: "Kebijakan Privasi", home: "Beranda",
      redirect: "Mengarahkan ke toko…"
    }
  };

  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && T[q]) return q;
    try { var s = localStorage.getItem('ayet_lang'); if (s && T[s]) return s; } catch (e) {}
    var langs = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < langs.length; i++) {
      var l = (langs[i] || '').slice(0, 2).toLowerCase();
      if (l === 'in') l = 'id';
      if (T[l]) return l;
    }
    return 'en';
  }

  var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/i.test(navigator.userAgent);

  function apply(lang, onChange) {
    var d = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (d._title && document.body.hasAttribute('data-home')) document.title = d._title;
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var k = el.getAttribute('data-t');
      if (d[k] != null) el.textContent = d[k];
    });
    var vt = document.querySelector('.verse .tr'); if (vt) vt.style.display = lang === 'ar' ? 'none' : '';
    // Mağaza bağlantıları seçili dilde açılsın (Apple web sayfası ülke/dil yoksa İngilizce açılıyor)
    var cc = { tr: 'tr', en: 'us', de: 'de', fr: 'fr', nl: 'nl', ar: 'sa', id: 'id' }[lang] || 'us';
    document.querySelectorAll('[data-store="ios"]').forEach(function (el) {
      el.href = 'https://apps.apple.com/' + cc + '/app/id6833613165?l=' + lang;
    });
    document.querySelectorAll('[data-store="android"]').forEach(function (el) {
      el.href = 'https://play.google.com/store/apps/details?id=com.alitutal.ayetapp&hl=' + lang;
    });
    // Telefonun mağazası öne gelsin
    document.querySelectorAll('.stores').forEach(function (box) {
      var a = box.querySelector('[data-store="android"]');
      if (a && isAndroid) box.insertBefore(a, box.firstChild);
    });
    var sel = document.getElementById('lang');
    if (sel) sel.value = lang;
    if (onChange) onChange(lang);
  }

  return {
    T: T, isIOS: isIOS, isAndroid: isAndroid, pick: pick,
    init: function (onChange) {
      document.body.setAttribute('data-home', '');
      var lang = pick();
      apply(lang, onChange);
      var sel = document.getElementById('lang');
      if (sel) sel.addEventListener('change', function () {
        try { localStorage.setItem('ayet_lang', sel.value); } catch (e) {}
        apply(sel.value, onChange);
      });
    }
  };
})();
