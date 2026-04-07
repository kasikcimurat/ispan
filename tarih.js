const TarihSorulari = [
  // ── Aylar: İngilizce → Türkçe ──
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

  // ── Aylar: Türkçe → İngilizce ──
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

  // ── Günler: İngilizce → Türkçe ──
  { soru: "\"Monday\" Türkçede ne anlama gelir?", dogru: "Pazartesi", yanlis: ["Salı", "Çarşamba", "Pazar"], ipucu: "Monday = Pazartesi" },
  { soru: "\"Tuesday\" Türkçede ne anlama gelir?", dogru: "Salı", yanlis: ["Pazartesi", "Çarşamba", "Perşembe"], ipucu: "Tuesday = Salı" },
  { soru: "\"Wednesday\" Türkçede ne anlama gelir?", dogru: "Çarşamba", yanlis: ["Salı", "Perşembe", "Cuma"], ipucu: "Wednesday = Çarşamba" },
  { soru: "\"Thursday\" Türkçede ne anlama gelir?", dogru: "Perşembe", yanlis: ["Çarşamba", "Cuma", "Cumartesi"], ipucu: "Thursday = Perşembe" },
  { soru: "\"Friday\" Türkçede ne anlama gelir?", dogru: "Cuma", yanlis: ["Perşembe", "Cumartesi", "Pazar"], ipucu: "Friday = Cuma" },
  { soru: "\"Saturday\" Türkçede ne anlama gelir?", dogru: "Cumartesi", yanlis: ["Cuma", "Pazar", "Pazartesi"], ipucu: "Saturday = Cumartesi" },
  { soru: "\"Sunday\" Türkçede ne anlama gelir?", dogru: "Pazar", yanlis: ["Cumartesi", "Cuma", "Pazartesi"], ipucu: "Sunday = Pazar" },

  // ── Günler: Türkçe → İngilizce ──
  { soru: "\"Pazartesi\" İngilizcede nasıl söylenir?", dogru: "Monday", yanlis: ["Tuesday", "Sunday", "Friday"], ipucu: "Pazartesi = Monday" },
  { soru: "\"Salı\" İngilizcede nasıl söylenir?", dogru: "Tuesday", yanlis: ["Monday", "Wednesday", "Thursday"], ipucu: "Salı = Tuesday" },
  { soru: "\"Çarşamba\" İngilizcede nasıl söylenir?", dogru: "Wednesday", yanlis: ["Tuesday", "Thursday", "Friday"], ipucu: "Çarşamba = Wednesday" },
  { soru: "\"Perşembe\" İngilizcede nasıl söylenir?", dogru: "Thursday", yanlis: ["Wednesday", "Friday", "Saturday"], ipucu: "Perşembe = Thursday" },
  { soru: "\"Cuma\" İngilizcede nasıl söylenir?", dogru: "Friday", yanlis: ["Thursday", "Saturday", "Sunday"], ipucu: "Cuma = Friday" },
  { soru: "\"Cumartesi\" İngilizcede nasıl söylenir?", dogru: "Saturday", yanlis: ["Friday", "Sunday", "Monday"], ipucu: "Cumartesi = Saturday" },
  { soru: "\"Pazar\" İngilizcede nasıl söylenir?", dogru: "Sunday", yanlis: ["Saturday", "Monday", "Friday"], ipucu: "Pazar = Sunday" },

  // ── Mevsimler ──
  { soru: "\"Spring\" Türkçede ne anlama gelir?", dogru: "İlkbahar", yanlis: ["Yaz", "Sonbahar", "Kış"], ipucu: "Spring = İlkbahar" },
  { soru: "\"Summer\" Türkçede ne anlama gelir?", dogru: "Yaz", yanlis: ["İlkbahar", "Sonbahar", "Kış"], ipucu: "Summer = Yaz" },
  { soru: "\"Autumn / Fall\" Türkçede ne anlama gelir?", dogru: "Sonbahar", yanlis: ["Yaz", "Kış", "İlkbahar"], ipucu: "Autumn/Fall = Sonbahar" },
  { soru: "\"Winter\" Türkçede ne anlama gelir?", dogru: "Kış", yanlis: ["Sonbahar", "Yaz", "İlkbahar"], ipucu: "Winter = Kış" },
  { soru: "\"İlkbahar\" İngilizcede nasıl söylenir?", dogru: "Spring", yanlis: ["Summer", "Autumn", "Winter"], ipucu: "İlkbahar = Spring" },
  { soru: "\"Yaz\" İngilizcede nasıl söylenir?", dogru: "Summer", yanlis: ["Spring", "Autumn", "Winter"], ipucu: "Yaz = Summer" },
  { soru: "\"Kış\" İngilizcede nasıl söylenir?", dogru: "Winter", yanlis: ["Summer", "Spring", "Autumn"], ipucu: "Kış = Winter" },

  // ── Tarih ifadeleri ──
  { soru: "\"Yesterday\" Türkçede ne anlama gelir?", dogru: "Dün", yanlis: ["Bugün", "Yarın", "Geçen hafta"], ipucu: "Yesterday = Dün" },
  { soru: "\"Today\" Türkçede ne anlama gelir?", dogru: "Bugün", yanlis: ["Dün", "Yarın", "Geçen ay"], ipucu: "Today = Bugün" },
  { soru: "\"Tomorrow\" Türkçede ne anlama gelir?", dogru: "Yarın", yanlis: ["Bugün", "Dün", "Öbür gün"], ipucu: "Tomorrow = Yarın" },
  { soru: "\"Last week\" Türkçede ne anlama gelir?", dogru: "Geçen hafta", yanlis: ["Bu hafta", "Gelecek hafta", "Dün"], ipucu: "Last week = Geçen hafta" },
  { soru: "\"Next week\" Türkçede ne anlama gelir?", dogru: "Gelecek hafta", yanlis: ["Bu hafta", "Geçen hafta", "Yarın"], ipucu: "Next week = Gelecek hafta" },
  { soru: "\"Last year\" Türkçede ne anlama gelir?", dogru: "Geçen yıl", yanlis: ["Bu yıl", "Gelecek yıl", "Geçen ay"], ipucu: "Last year = Geçen yıl" },
  { soru: "\"Next month\" Türkçede ne anlama gelir?", dogru: "Gelecek ay", yanlis: ["Geçen ay", "Bu ay", "Bu hafta"], ipucu: "Next month = Gelecek ay" },
  { soru: "\"The day after tomorrow\" Türkçede ne anlama gelir?", dogru: "Öbür gün", yanlis: ["Dün", "Yarın", "Bu hafta"], ipucu: "The day after tomorrow = Öbür gün" },
  { soru: "\"The day before yesterday\" Türkçede ne anlama gelir?", dogru: "Evvelsi gün", yanlis: ["Dün", "Bugün", "Geçen hafta"], ipucu: "The day before yesterday = Evvelsi gün" },

  // ── Sıra sayıları (ordinals) ──
  { soru: "\"First\" Türkçede ne anlama gelir?", dogru: "Birinci / İlk", yanlis: ["İkinci", "Üçüncü", "Son"], ipucu: "1st = First = Birinci" },
  { soru: "\"Second\" Türkçede ne anlama gelir?", dogru: "İkinci", yanlis: ["Birinci", "Üçüncü", "Dördüncü"], ipucu: "2nd = Second = İkinci" },
  { soru: "\"Third\" Türkçede ne anlama gelir?", dogru: "Üçüncü", yanlis: ["İkinci", "Dördüncü", "Beşinci"], ipucu: "3rd = Third = Üçüncü" },
  { soru: "\"Fourth\" Türkçede ne anlama gelir?", dogru: "Dördüncü", yanlis: ["Üçüncü", "Beşinci", "Altıncı"], ipucu: "4th = Fourth = Dördüncü" },
  { soru: "\"Fifth\" Türkçede ne anlama gelir?", dogru: "Beşinci", yanlis: ["Dördüncü", "Altıncı", "Yedinci"], ipucu: "5th = Fifth = Beşinci" },
  { soru: "\"Tenth\" Türkçede ne anlama gelir?", dogru: "Onuncu", yanlis: ["Dokuzuncu", "Sekizinci", "On birinci"], ipucu: "10th = Tenth = Onuncu" },
  { soru: "\"Last\" Türkçede ne anlama gelir?", dogru: "Son / Sonuncu", yanlis: ["İlk", "Ortanca", "İkinci"], ipucu: "Last = Son/Sonuncu" },

  // ── Tarih okuma ──
  { soru: "\"March 15th\" nasıl okunur?", dogru: "The fifteenth of March", yanlis: ["The fifteen of March", "March fifteenth of", "The fiveteenth of March"], ipucu: "Gün sıra sayısıyla okunur: the 15th" },
  { soru: "Ocak ayının kaçıncı ay olduğunu soran soru hangisidir?", dogru: "What month is January?", yanlis: ["Which day is January?", "When is January?", "What year is January?"], ipucu: "Ay sormak için: What month...?" },
  { soru: "\"What day is today?\" sorusuna doğru cevap hangisidir?", dogru: "Today is Monday.", yanlis: ["Today is January.", "Today is morning.", "Today is summer."], ipucu: "Day → gün adı söylenir (Monday, Tuesday...)" },
  { soru: "\"What's the date today?\" sorusuna doğru cevap hangisidir?", dogru: "It's the 5th of April.", yanlis: ["It's Monday.", "It's morning.", "It's April Monday."], ipucu: "Date → sayı + ay söylenir" },
  { soru: "\"In\" hangi zaman ifadesiyle kullanılır?", dogru: "In January / In 2024 / In summer", yanlis: ["In Monday / In 5th", "In yesterday / In today", "In Friday morning"], ipucu: "in + ay / yıl / mevsim" },
  { soru: "\"On\" hangi zaman ifadesiyle kullanılır?", dogru: "On Monday / On March 5th", yanlis: ["On January / On 2024", "On morning / On summer", "On last week"], ipucu: "on + gün / tarih" },
  { soru: "\"At\" hangi zaman ifadesiyle kullanılır?", dogru: "At 3 o'clock / At midnight", yanlis: ["At Monday / At March", "At summer / At 2024", "At next week"], ipucu: "at + saat / belirli an" },
];