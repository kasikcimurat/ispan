const SaatSorulari = [
  // ── Tam saatler ──
  { soru: "\"It's one o'clock.\" Türkçesi nedir?", dogru: "Saat bir.", yanlis: ["Saat iki.", "Saat on bir.", "Saat birbuçuk."], ipucu: "o'clock = tam saat" },
  { soru: "\"It's three o'clock.\" Türkçesi nedir?", dogru: "Saat üç.", yanlis: ["Saat dört.", "Saat iki.", "Saat üçbuçuk."], ipucu: "three o'clock = saat tam üç" },
  { soru: "\"It's six o'clock.\" Türkçesi nedir?", dogru: "Saat altı.", yanlis: ["Saat yedi.", "Saat altıbuçuk.", "Saat beş."], ipucu: "six o'clock = saat tam altı" },
  { soru: "\"It's twelve o'clock.\" Türkçesi nedir?", dogru: "Saat on iki.", yanlis: ["Saat iki.", "Saat on bir.", "Saat on."], ipucu: "twelve o'clock = saat tam on iki (öğlen/gece yarısı)" },

  // ── Half past (buçuk) ──
  { soru: "\"It's half past two.\" Türkçesi nedir?", dogru: "Saat ikibuçuk.", yanlis: ["Saat ikiye çeyrek var.", "Saat iki.", "İkiyi çeyrek geçiyor."], ipucu: "half past = buçuk" },
  { soru: "\"It's half past seven.\" Türkçesi nedir?", dogru: "Saat yedibuçuk.", yanlis: ["Saat yedi.", "Yediyi çeyrek geçiyor.", "Sekize çeyrek var."], ipucu: "half past seven = yedibuçuk" },
  { soru: "\"It's half past ten.\" Türkçesi nedir?", dogru: "Saat onbuçuk.", yanlis: ["Saat on.", "Ona çeyrek var.", "Onu çeyrek geçiyor."], ipucu: "half past ten = onbuçuk" },
  { soru: "\"Saat üçbuçuk\" İngilizcede nasıl söylenir?", dogru: "It's half past three.", yanlis: ["It's quarter past three.", "It's three o'clock.", "It's quarter to three."], ipucu: "buçuk = half past" },
  { soru: "\"Saat beşbuçuk\" İngilizcede nasıl söylenir?", dogru: "It's half past five.", yanlis: ["It's five o'clock.", "It's quarter past five.", "It's quarter to six."], ipucu: "buçuk = half past" },

  // ── Quarter past (çeyrek geçiyor) ──
  { soru: "\"It's quarter past four.\" Türkçesi nedir?", dogru: "Dördü çeyrek geçiyor.", yanlis: ["Dörde çeyrek var.", "Saat dört.", "Saat dördbuçuk."], ipucu: "quarter past = çeyrek geçiyor (15 dk geçmiş)" },
  { soru: "\"It's quarter past nine.\" Türkçesi nedir?", dogru: "Dokuzu çeyrek geçiyor.", yanlis: ["Dokuza çeyrek var.", "Saat dokuz.", "Saat dokuzdört."], ipucu: "quarter past nine = dokuzu çeyrek geçiyor" },
  { soru: "\"Biri çeyrek geçiyor\" İngilizcede nasıl söylenir?", dogru: "It's quarter past one.", yanlis: ["It's quarter to one.", "It's half past one.", "It's one o'clock."], ipucu: "çeyrek geçiyor = quarter past" },
  { soru: "\"Altıyı çeyrek geçiyor\" İngilizcede nasıl söylenir?", dogru: "It's quarter past six.", yanlis: ["It's quarter to six.", "It's half past six.", "It's six o'clock."], ipucu: "çeyrek geçiyor = quarter past" },

  // ── Quarter to (çeyrek var) ──
  { soru: "\"It's quarter to five.\" Türkçesi nedir?", dogru: "Beşe çeyrek var.", yanlis: ["Beşi çeyrek geçiyor.", "Saat beş.", "Saat beşbuçuk."], ipucu: "quarter to = çeyrek var (15 dk kalmış)" },
  { soru: "\"It's quarter to eight.\" Türkçesi nedir?", dogru: "Sekize çeyrek var.", yanlis: ["Sekizi çeyrek geçiyor.", "Saat sekiz.", "Saat sekizbuçuk."], ipucu: "quarter to eight = sekize çeyrek var" },
  { soru: "\"It's quarter to twelve.\" Türkçesi nedir?", dogru: "On ikiye çeyrek var.", yanlis: ["On ikiyi çeyrek geçiyor.", "Saat on iki.", "Saat on birbuçuk."], ipucu: "quarter to twelve = on ikiye çeyrek var" },
  { soru: "\"Üçe çeyrek var\" İngilizcede nasıl söylenir?", dogru: "It's quarter to three.", yanlis: ["It's quarter past three.", "It's half past two.", "It's three o'clock."], ipucu: "çeyrek var = quarter to" },
  { soru: "\"Ona çeyrek var\" İngilizcede nasıl söylenir?", dogru: "It's quarter to ten.", yanlis: ["It's quarter past ten.", "It's half past nine.", "It's ten o'clock."], ipucu: "çeyrek var = quarter to" },

  // ── Dakika geçiyor / var ──
  { soru: "\"It's ten past six.\" Türkçesi nedir?", dogru: "Altıyı on geçiyor.", yanlis: ["Altıya on var.", "Saat on altı.", "Saat altıbuçuk."], ipucu: "X past Y = Y'yi X geçiyor" },
  { soru: "\"It's twenty past three.\" Türkçesi nedir?", dogru: "Üçü yirmi geçiyor.", yanlis: ["Üçe yirmi var.", "Saat üç yirmi.", "Üçü çeyrek geçiyor."], ipucu: "twenty past three = üçü yirmi geçiyor" },
  { soru: "\"It's five to nine.\" Türkçesi nedir?", dogru: "Dokuza beş var.", yanlis: ["Dokuzu beş geçiyor.", "Saat dokuz beş.", "Saat dokuzdört."], ipucu: "X to Y = Y'ye X var" },
  { soru: "\"It's twenty to seven.\" Türkçesi nedir?", dogru: "Yediye yirmi var.", yanlis: ["Yediyi yirmi geçiyor.", "Saat yedi yirmi.", "Saat yedibuçuk."], ipucu: "twenty to seven = yediye yirmi var" },
  { soru: "\"Sekizi on geçiyor\" İngilizcede nasıl söylenir?", dogru: "It's ten past eight.", yanlis: ["It's ten to eight.", "It's eight ten.", "It's half past eight."], ipucu: "geçiyor = past; var = to" },

  // ── AM / PM ──
  { soru: "\"AM\" ne anlama gelir?", dogru: "Gece yarısından öğlene kadar (00:00–11:59)", yanlis: ["Öğleden sonra (12:00–23:59)", "Gece yarısı", "Akşam saatleri"], ipucu: "AM = ante meridiem = öğleden önce" },
  { soru: "\"PM\" ne anlama gelir?", dogru: "Öğleden sonra (12:00–23:59)", yanlis: ["Gece yarısından öğlene kadar", "Sabah saatleri", "Gece yarısı"], ipucu: "PM = post meridiem = öğleden sonra" },
  { soru: "\"It's 3 PM.\" Türkçesi nedir?", dogru: "Öğleden sonra saat üç.", yanlis: ["Sabah saat üç.", "Saat on beş değil.", "Gece saat üç."], ipucu: "PM = öğleden sonra" },
  { soru: "\"It's 8 AM.\" Türkçesi nedir?", dogru: "Sabah saat sekiz.", yanlis: ["Akşam saat sekiz.", "Öğleden sonra saat sekiz.", "Gece saat sekiz."], ipucu: "AM = sabah" },

  // ── Noon / Midnight ──
  { soru: "\"Noon\" ne anlama gelir?", dogru: "Öğlen (12:00)", yanlis: ["Gece yarısı", "Sabah", "Akşam"], ipucu: "Noon = öğlen, tam 12:00" },
  { soru: "\"Midnight\" ne anlama gelir?", dogru: "Gece yarısı (00:00)", yanlis: ["Öğlen", "Akşam", "Sabahın erken saatleri"], ipucu: "Midnight = gece yarısı, tam 00:00" },
  { soru: "\"Gece yarısı\" İngilizcede nasıl söylenir?", dogru: "Midnight", yanlis: ["Noon", "Dusk", "Dawn"], ipucu: "Gece yarısı = Midnight" },
  { soru: "\"Öğlen\" İngilizcede nasıl söylenir?", dogru: "Noon", yanlis: ["Midnight", "Dusk", "Morning"], ipucu: "Öğlen = Noon" },

  // ── Saat sormak ──
  { soru: "\"Saat kaç?\" İngilizcede nasıl sorulur?", dogru: "What time is it?", yanlis: ["What is the time now?", "How much time is it?", "Which clock is it?"], ipucu: "What time is it? = Saat kaç?" },
  { soru: "\"What time is it?\" sorusuna doğru cevap hangisidir?", dogru: "It's half past three.", yanlis: ["It's Monday.", "It's January.", "It's morning."], ipucu: "Saati söylerken: It's + saat ifadesi" },
  { soru: "\"At what time does the train leave?\" Türkçesi nedir?", dogru: "Tren saat kaçta kalkıyor?", yanlis: ["Tren nereye gidiyor?", "Tren ne zaman geliyor?", "Trenin adı ne?"], ipucu: "At what time = saat kaçta" },

  // ── Günün bölümleri ──
  { soru: "\"Morning\" Türkçede ne anlama gelir?", dogru: "Sabah", yanlis: ["Öğle", "Akşam", "Gece"], ipucu: "Morning = Sabah" },
  { soru: "\"Afternoon\" Türkçede ne anlama gelir?", dogru: "Öğleden sonra", yanlis: ["Sabah", "Gece", "Öğle"], ipucu: "Afternoon = Öğleden sonra" },
  { soru: "\"Evening\" Türkçede ne anlama gelir?", dogru: "Akşam", yanlis: ["Gece", "Sabah", "Öğle"], ipucu: "Evening = Akşam" },
  { soru: "\"Night\" Türkçede ne anlama gelir?", dogru: "Gece", yanlis: ["Akşam", "Sabah", "Öğleden sonra"], ipucu: "Night = Gece" },
  { soru: "\"Good morning!\" Türkçesi nedir?", dogru: "Günaydın!", yanlis: ["İyi akşamlar!", "İyi geceler!", "İyi öğlenler!"], ipucu: "Morning = sabah → Günaydın" },
  { soru: "\"Good evening!\" Türkçesi nedir?", dogru: "İyi akşamlar!", yanlis: ["Günaydın!", "İyi geceler!", "Merhaba!"], ipucu: "Evening = akşam → İyi akşamlar" },
  { soru: "\"Good night!\" Türkçesi nedir?", dogru: "İyi geceler!", yanlis: ["İyi akşamlar!", "Günaydın!", "Hoşça kal!"], ipucu: "Night = gece → İyi geceler" },

  // ── Süre ifadeleri ──
  { soru: "\"How long does it take?\" Türkçesi nedir?", dogru: "Ne kadar sürer?", yanlis: ["Ne zaman başlar?", "Kaç saat?", "Saat kaçta biter?"], ipucu: "How long does it take = Ne kadar sürer?" },
  { soru: "\"It takes two hours.\" Türkçesi nedir?", dogru: "İki saat sürer.", yanlis: ["Saat iki.", "İki dakika sürer.", "İki gün sürer."], ipucu: "It takes + süre = ... sürer" },
  { soru: "\"For an hour\" Türkçesi nedir?", dogru: "Bir saat boyunca", yanlis: ["Bir saate kadar", "Bir saat önce", "Bir saatte bir"], ipucu: "For + süre = ... boyunca / ... süreliğine" },
  { soru: "\"In an hour\" Türkçesi nedir?", dogru: "Bir saat sonra / içinde", yanlis: ["Bir saat önce", "Bir saat boyunca", "Bir saatte bir kez"], ipucu: "In + süre = ... sonra/içinde" },
];