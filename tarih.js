// ── Alt kategori havuzları ──

const TarihOkuma = [
  // GG.AA.YYYY → İngilizce yazılı hali
  { soru: "📅 01.01.2024", dogru: "the first of January, twenty twenty-four", yanlis: ["the first of February, twenty twenty-four", "the eleventh of January, twenty twenty-four", "the first of January, twenty twenty-three"], ipucu: "1. gün → first | January = Ocak | 2024 = twenty twenty-four" },
  { soru: "📅 14.02.2025", dogru: "the fourteenth of February, twenty twenty-five", yanlis: ["the fourth of February, twenty twenty-five", "the fourteenth of March, twenty twenty-five", "the twenty-fourth of February, twenty twenty-five"], ipucu: "14 → fourteenth | February = Şubat | 2025 = twenty twenty-five" },
  { soru: "📅 08.03.2023", dogru: "the eighth of March, twenty twenty-three", yanlis: ["the eighteenth of March, twenty twenty-three", "the eighth of May, twenty twenty-three", "the eighth of March, twenty twenty-two"], ipucu: "8 → eighth | March = Mart | 2023 = twenty twenty-three" },
  { soru: "📅 23.04.2024", dogru: "the twenty-third of April, twenty twenty-four", yanlis: ["the third of April, twenty twenty-four", "the twenty-third of August, twenty twenty-four", "the thirteenth of April, twenty twenty-four"], ipucu: "23 → twenty-third | April = Nisan | 2024 = twenty twenty-four" },
  { soru: "📅 19.05.2022", dogru: "the nineteenth of May, twenty twenty-two", yanlis: ["the ninth of May, twenty twenty-two", "the nineteenth of March, twenty twenty-two", "the nineteenth of May, twenty twenty-one"], ipucu: "19 → nineteenth | May = Mayıs | 2022 = twenty twenty-two" },
  { soru: "📅 30.06.2025", dogru: "the thirtieth of June, twenty twenty-five", yanlis: ["the third of June, twenty twenty-five", "the thirteenth of June, twenty twenty-five", "the thirtieth of July, twenty twenty-five"], ipucu: "30 → thirtieth | June = Haziran | 2025 = twenty twenty-five" },
  { soru: "📅 04.07.2026", dogru: "the fourth of July, twenty twenty-six", yanlis: ["the fourteenth of July, twenty twenty-six", "the fourth of June, twenty twenty-six", "the forty of July, twenty twenty-six"], ipucu: "4 → fourth | July = Temmuz | 2026 = twenty twenty-six" },
  { soru: "📅 15.08.2023", dogru: "the fifteenth of August, twenty twenty-three", yanlis: ["the fifth of August, twenty twenty-three", "the fifteenth of October, twenty twenty-three", "the fifty of August, twenty twenty-three"], ipucu: "15 → fifteenth | August = Ağustos | 2023 = twenty twenty-three" },
  { soru: "📅 11.09.2001", dogru: "the eleventh of September, two thousand and one", yanlis: ["the first of September, two thousand and one", "the eleventh of October, two thousand and one", "the eleventh of September, two thousand and ten"], ipucu: "11 → eleventh | September = Eylül | 2001 = two thousand and one" },
  { soru: "📅 29.10.2023", dogru: "the twenty-ninth of October, twenty twenty-three", yanlis: ["the ninth of October, twenty twenty-three", "the twenty-ninth of November, twenty twenty-three", "the twenty-first of October, twenty twenty-three"], ipucu: "29 → twenty-ninth | October = Ekim | 2023 = twenty twenty-three" },
  { soru: "📅 03.11.2024", dogru: "the third of November, twenty twenty-four", yanlis: ["the thirteenth of November, twenty twenty-four", "the third of October, twenty twenty-four", "the thirtieth of November, twenty twenty-four"], ipucu: "3 → third | November = Kasım | 2024 = twenty twenty-four" },
  { soru: "📅 25.12.2025", dogru: "the twenty-fifth of December, twenty twenty-five", yanlis: ["the fifth of December, twenty twenty-five", "the twenty-fifth of November, twenty twenty-five", "the fifteenth of December, twenty twenty-five"], ipucu: "25 → twenty-fifth | December = Aralık | 2025 = twenty twenty-five" },
  { soru: "📅 31.12.1999", dogru: "the thirty-first of December, nineteen ninety-nine", yanlis: ["the thirty-first of January, nineteen ninety-nine", "the twenty-first of December, nineteen ninety-nine", "the thirty-first of December, two thousand"], ipucu: "31 → thirty-first | December = Aralık | 1999 = nineteen ninety-nine" },
  { soru: "📅 07.04.2020", dogru: "the seventh of April, twenty twenty", yanlis: ["the seventeenth of April, twenty twenty", "the seventh of August, twenty twenty", "the seventh of April, twenty-twenty-one"], ipucu: "7 → seventh | April = Nisan | 2020 = twenty twenty" },
  { soru: "📅 21.06.2024", dogru: "the twenty-first of June, twenty twenty-four", yanlis: ["the first of June, twenty twenty-four", "the twenty-first of July, twenty twenty-four", "the twelfth of June, twenty twenty-four"], ipucu: "21 → twenty-first | June = Haziran | 2024 = twenty twenty-four" },
  { soru: "📅 02.02.2022", dogru: "the second of February, twenty twenty-two", yanlis: ["the twenty-second of February, twenty twenty-two", "the second of January, twenty twenty-two", "the second of February, twenty twenty"], ipucu: "2 → second | February = Şubat | 2022 = twenty twenty-two" },
  { soru: "📅 16.03.2025", dogru: "the sixteenth of March, twenty twenty-five", yanlis: ["the sixth of March, twenty twenty-five", "the sixteenth of May, twenty twenty-five", "the sixty of March, twenty twenty-five"], ipucu: "16 → sixteenth | March = Mart | 2025 = twenty twenty-five" },
  { soru: "📅 28.09.2024", dogru: "the twenty-eighth of September, twenty twenty-four", yanlis: ["the eighth of September, twenty twenty-four", "the eighteenth of September, twenty twenty-four", "the twenty-eighth of October, twenty twenty-four"], ipucu: "28 → twenty-eighth | September = Eylül | 2024 = twenty twenty-four" },
  { soru: "📅 12.11.2023", dogru: "the twelfth of November, twenty twenty-three", yanlis: ["the twentieth of November, twenty twenty-three", "the twelfth of October, twenty twenty-three", "the second of November, twenty twenty-three"], ipucu: "12 → twelfth | November = Kasım | 2023 = twenty twenty-three" },
  { soru: "📅 05.05.2005", dogru: "the fifth of May, two thousand and five", yanlis: ["the fifteenth of May, two thousand and five", "the fifth of March, two thousand and five", "the fifth of May, twenty twenty-five"], ipucu: "5 → fifth | May = Mayıs | 2005 = two thousand and five" },
];

const MevsimSorulari = [
  { soru: "\"Spring\" Türkçede ne anlama gelir?", dogru: "İlkbahar", yanlis: ["Yaz", "Sonbahar", "Kış"], ipucu: "Spring = İlkbahar" },
  { soru: "\"Summer\" Türkçede ne anlama gelir?", dogru: "Yaz", yanlis: ["İlkbahar", "Sonbahar", "Kış"], ipucu: "Summer = Yaz" },
  { soru: "\"Autumn / Fall\" Türkçede ne anlama gelir?", dogru: "Sonbahar", yanlis: ["Yaz", "Kış", "İlkbahar"], ipucu: "Autumn/Fall = Sonbahar" },
  { soru: "\"Winter\" Türkçede ne anlama gelir?", dogru: "Kış", yanlis: ["Sonbahar", "Yaz", "İlkbahar"], ipucu: "Winter = Kış" },
  { soru: "\"İlkbahar\" İngilizcede nasıl söylenir?", dogru: "Spring", yanlis: ["Summer", "Autumn", "Winter"], ipucu: "İlkbahar = Spring" },
  { soru: "\"Yaz\" İngilizcede nasıl söylenir?", dogru: "Summer", yanlis: ["Spring", "Autumn", "Winter"], ipucu: "Yaz = Summer" },
  { soru: "\"Kış\" İngilizcede nasıl söylenir?", dogru: "Winter", yanlis: ["Summer", "Spring", "Autumn"], ipucu: "Kış = Winter" },
  { soru: "\"Sonbahar\" İngilizcede nasıl söylenir?", dogru: "Autumn", yanlis: ["Winter", "Spring", "Summer"], ipucu: "Sonbahar = Autumn / Fall" },
  { soru: "Hangi mevsim 'Spring' olarak bilinir?", dogru: "Çiçeklerin açtığı mevsim (İlkbahar)", yanlis: ["Yaprakların döküldüğü mevsim", "Karın yağdığı mevsim", "En sıcak mevsim"], ipucu: "Spring = baharın geldiği mevsim" },
  { soru: "\"In summer\" cümlesinde 'in' ne anlama gelir?", dogru: "Yazın / yaz mevsiminde", yanlis: ["Yazdan önce", "Yazdan sonra", "Yaz süresince değil"], ipucu: "in + mevsim = o mevsimde" },
  { soru: "\"What's your favourite season?\" sorusu ne anlama gelir?", dogru: "En sevdiğin mevsim hangisi?", yanlis: ["Hangi mevsimde doğdun?", "Mevsimler kaç tanedir?", "Bu mevsim hangisi?"], ipucu: "favourite = en sevilen | season = mevsim" },
  { soru: "İlkbahar ayları hangileridir? (İngilizce)", dogru: "March, April, May", yanlis: ["June, July, August", "September, October, November", "December, January, February"], ipucu: "Spring = Mart, Nisan, Mayıs" },
  { soru: "Kış ayları hangileridir? (İngilizce)", dogru: "December, January, February", yanlis: ["June, July, August", "March, April, May", "September, October, November"], ipucu: "Winter = Aralık, Ocak, Şubat" },
  { soru: "\"It's cold in winter.\" cümlesini Türkçeye çevirin.", dogru: "Kışın hava soğuktur.", yanlis: ["Kışın hava sıcaktır.", "Yazın hava soğuktur.", "Sonbaharda hava soğuktur."], ipucu: "cold = soğuk | winter = kış" },
  { soru: "\"Leaves fall in autumn.\" cümlesini Türkçeye çevirin.", dogru: "Yapraklar sonbaharda dökülür.", yanlis: ["Yapraklar yazın dökülür.", "Yapraklar ilkbaharda dökülür.", "Çiçekler sonbaharda açar."], ipucu: "leaves = yapraklar | fall = düşmek/dökülmek | autumn = sonbahar" },
];

const GunSorulari = [
  { soru: "\"Monday\" Türkçede ne anlama gelir?", dogru: "Pazartesi", yanlis: ["Salı", "Çarşamba", "Pazar"], ipucu: "Monday = Pazartesi" },
  { soru: "\"Tuesday\" Türkçede ne anlama gelir?", dogru: "Salı", yanlis: ["Pazartesi", "Çarşamba", "Perşembe"], ipucu: "Tuesday = Salı" },
  { soru: "\"Wednesday\" Türkçede ne anlama gelir?", dogru: "Çarşamba", yanlis: ["Salı", "Perşembe", "Cuma"], ipucu: "Wednesday = Çarşamba" },
  { soru: "\"Thursday\" Türkçede ne anlama gelir?", dogru: "Perşembe", yanlis: ["Çarşamba", "Cuma", "Cumartesi"], ipucu: "Thursday = Perşembe" },
  { soru: "\"Friday\" Türkçede ne anlama gelir?", dogru: "Cuma", yanlis: ["Perşembe", "Cumartesi", "Pazar"], ipucu: "Friday = Cuma" },
  { soru: "\"Saturday\" Türkçede ne anlama gelir?", dogru: "Cumartesi", yanlis: ["Cuma", "Pazar", "Pazartesi"], ipucu: "Saturday = Cumartesi" },
  { soru: "\"Sunday\" Türkçede ne anlama gelir?", dogru: "Pazar", yanlis: ["Cumartesi", "Cuma", "Pazartesi"], ipucu: "Sunday = Pazar" },
  { soru: "\"Pazartesi\" İngilizcede nasıl söylenir?", dogru: "Monday", yanlis: ["Tuesday", "Sunday", "Friday"], ipucu: "Pazartesi = Monday" },
  { soru: "\"Salı\" İngilizcede nasıl söylenir?", dogru: "Tuesday", yanlis: ["Monday", "Wednesday", "Thursday"], ipucu: "Salı = Tuesday" },
  { soru: "\"Çarşamba\" İngilizcede nasıl söylenir?", dogru: "Wednesday", yanlis: ["Tuesday", "Thursday", "Friday"], ipucu: "Çarşamba = Wednesday" },
  { soru: "\"Perşembe\" İngilizcede nasıl söylenir?", dogru: "Thursday", yanlis: ["Wednesday", "Friday", "Saturday"], ipucu: "Perşembe = Thursday" },
  { soru: "\"Cuma\" İngilizcede nasıl söylenir?", dogru: "Friday", yanlis: ["Thursday", "Saturday", "Sunday"], ipucu: "Cuma = Friday" },
  { soru: "\"Cumartesi\" İngilizcede nasıl söylenir?", dogru: "Saturday", yanlis: ["Friday", "Sunday", "Monday"], ipucu: "Cumartesi = Saturday" },
  { soru: "\"Pazar\" İngilizcede nasıl söylenir?", dogru: "Sunday", yanlis: ["Saturday", "Monday", "Friday"], ipucu: "Pazar = Sunday" },
  { soru: "Haftanın ilk günü (İngiltere/ABD'de) hangisidir?", dogru: "Monday (İngiltere) / Sunday (ABD)", yanlis: ["Saturday", "Friday", "Tuesday"], ipucu: "İngiltere'de Monday, ABD'de Sunday haftayı başlatır" },
  { soru: "\"Weekdays\" ne anlama gelir?", dogru: "Hafta içi günler (Pzt–Cum)", yanlis: ["Hafta sonu günleri", "Hafta sonu ve Cuma", "Tüm günler"], ipucu: "Weekdays = iş günleri, Monday to Friday" },
  { soru: "\"Weekend\" ne anlama gelir?", dogru: "Hafta sonu (Cumartesi–Pazar)", yanlis: ["Hafta içi", "Pazartesi", "Cuma günü"], ipucu: "Weekend = Saturday & Sunday" },
  { soru: "\"What day is today?\" sorusunun doğru cevabı hangisidir?", dogru: "Today is Monday.", yanlis: ["Today is January.", "Today is morning.", "Today is summer."], ipucu: "Day → gün adı söylenir (Monday, Tuesday...)" },
  { soru: "\"See you on Friday!\" cümlesini Türkçeye çevirin.", dogru: "Cuma günü görüşürüz!", yanlis: ["Cuma günü geldim!", "Cuma günü gelemem!", "Cumartesi görüşürüz!"], ipucu: "See you = görüşürüz | on Friday = Cuma günü" },
  { soru: "\"I go to school on Mondays.\" cümlesini Türkçeye çevirin.", dogru: "Her pazartesi okula giderim.", yanlis: ["Pazartesi okula gitmedim.", "Sadece bir pazartesi okula gittim.", "Pazartesi okul yok."], ipucu: "on Mondays (çoğul) = her pazartesi" },
];

const AySorulari = [
  { soru: "\"January\" Türkçede ne anlama gelir?", dogru: "Ocak", yanlis: ["Şubat", "Mart", "Kasım"], ipucu: "January = Ocak (yılın 1. ayı)" },
  { soru: "\"February\" Türkçede ne anlama gelir?", dogru: "Şubat", yanlis: ["Ocak", "Mart", "Nisan"], ipucu: "February = Şubat (yılın 2. ayı)" },
  { soru: "\"March\" Türkçede ne anlama gelir?", dogru: "Mart", yanlis: ["Mayıs", "Şubat", "Haziran"], ipucu: "March = Mart (yılın 3. ayı)" },
  { soru: "\"April\" Türkçede ne anlama gelir?", dogru: "Nisan", yanlis: ["Mart", "Mayıs", "Temmuz"], ipucu: "April = Nisan (yılın 4. ayı)" },
  { soru: "\"May\" Türkçede ne anlama gelir?", dogru: "Mayıs", yanlis: ["Nisan", "Haziran", "Mart"], ipucu: "May = Mayıs (yılın 5. ayı)" },
  { soru: "\"June\" Türkçede ne anlama gelir?", dogru: "Haziran", yanlis: ["Temmuz", "Mayıs", "Ağustos"], ipucu: "June = Haziran (yılın 6. ayı)" },
  { soru: "\"July\" Türkçede ne anlama gelir?", dogru: "Temmuz", yanlis: ["Haziran", "Ağustos", "Eylül"], ipucu: "July = Temmuz (yılın 7. ayı)" },
  { soru: "\"August\" Türkçede ne anlama gelir?", dogru: "Ağustos", yanlis: ["Temmuz", "Eylül", "Ekim"], ipucu: "August = Ağustos (yılın 8. ayı)" },
  { soru: "\"September\" Türkçede ne anlama gelir?", dogru: "Eylül", yanlis: ["Ağustos", "Ekim", "Kasım"], ipucu: "September = Eylül (yılın 9. ayı)" },
  { soru: "\"October\" Türkçede ne anlama gelir?", dogru: "Ekim", yanlis: ["Eylül", "Kasım", "Aralık"], ipucu: "October = Ekim (yılın 10. ayı)" },
  { soru: "\"November\" Türkçede ne anlama gelir?", dogru: "Kasım", yanlis: ["Ekim", "Aralık", "Ocak"], ipucu: "November = Kasım (yılın 11. ayı)" },
  { soru: "\"December\" Türkçede ne anlama gelir?", dogru: "Aralık", yanlis: ["Kasım", "Ocak", "Eylül"], ipucu: "December = Aralık (yılın 12. ayı)" },
  { soru: "\"Ocak\" İngilizcede nasıl söylenir?", dogru: "January", yanlis: ["February", "March", "June"], ipucu: "Ocak = January" },
  { soru: "\"Şubat\" İngilizcede nasıl söylenir?", dogru: "February", yanlis: ["January", "March", "April"], ipucu: "Şubat = February" },
  { soru: "\"Nisan\" İngilizcede nasıl söylenir?", dogru: "April", yanlis: ["March", "May", "August"], ipucu: "Nisan = April" },
  { soru: "\"Haziran\" İngilizcede nasıl söylenir?", dogru: "June", yanlis: ["July", "May", "August"], ipucu: "Haziran = June" },
  { soru: "\"Temmuz\" İngilizcede nasıl söylenir?", dogru: "July", yanlis: ["June", "August", "September"], ipucu: "Temmuz = July" },
  { soru: "\"Ağustos\" İngilizcede nasıl söylenir?", dogru: "August", yanlis: ["July", "September", "October"], ipucu: "Ağustos = August" },
  { soru: "\"Eylül\" İngilizcede nasıl söylenir?", dogru: "September", yanlis: ["October", "August", "November"], ipucu: "Eylül = September" },
  { soru: "\"Ekim\" İngilizcede nasıl söylenir?", dogru: "October", yanlis: ["September", "November", "December"], ipucu: "Ekim = October" },
  { soru: "\"Kasım\" İngilizcede nasıl söylenir?", dogru: "November", yanlis: ["October", "December", "January"], ipucu: "Kasım = November" },
  { soru: "\"Aralık\" İngilizcede nasıl söylenir?", dogru: "December", yanlis: ["November", "January", "October"], ipucu: "Aralık = December" },
];

// Ana havuz: başta tarih okuma soruları
const TarihSorulari = [...TarihOkuma];

// Aktif alt kategori takibi
let aktivTarihKategori = 'tarihOkuma';

function getTarihPool(kategori) {
  if (kategori === 'tarihOkuma') return TarihOkuma;
  if (kategori === 'mevsimler')  return MevsimSorulari;
  if (kategori === 'gunler')     return GunSorulari;
  if (kategori === 'aylar')      return AySorulari;
  return TarihOkuma;
}