const SayiSorulari = [
  // ── 0–20 sayılar: rakam → İngilizce ──
  { soru: "0 İngilizcede nasıl söylenir?", dogru: "zero", yanlis: ["one", "none", "null"], ipucu: "0 = zero" },
  { soru: "1 İngilizcede nasıl söylenir?", dogru: "one", yanlis: ["two", "won", "none"], ipucu: "1 = one" },
  { soru: "2 İngilizcede nasıl söylenir?", dogru: "two", yanlis: ["too", "twelve", "twenty"], ipucu: "2 = two" },
  { soru: "3 İngilizcede nasıl söylenir?", dogru: "three", yanlis: ["thirteen", "thirty", "tree"], ipucu: "3 = three" },
  { soru: "4 İngilizcede nasıl söylenir?", dogru: "four", yanlis: ["for", "fourteen", "forty"], ipucu: "4 = four" },
  { soru: "5 İngilizcede nasıl söylenir?", dogru: "five", yanlis: ["fifteen", "fifty", "fine"], ipucu: "5 = five" },
  { soru: "6 İngilizcede nasıl söylenir?", dogru: "six", yanlis: ["sixteen", "sixty", "sex"], ipucu: "6 = six" },
  { soru: "7 İngilizcede nasıl söylenir?", dogru: "seven", yanlis: ["seventeen", "seventy", "heaven"], ipucu: "7 = seven" },
  { soru: "8 İngilizcede nasıl söylenir?", dogru: "eight", yanlis: ["eighteen", "eighty", "ate"], ipucu: "8 = eight" },
  { soru: "9 İngilizcede nasıl söylenir?", dogru: "nine", yanlis: ["nineteen", "ninety", "knife"], ipucu: "9 = nine" },
  { soru: "10 İngilizcede nasıl söylenir?", dogru: "ten", yanlis: ["twelve", "twenty", "tin"], ipucu: "10 = ten" },
  { soru: "11 İngilizcede nasıl söylenir?", dogru: "eleven", yanlis: ["twelve", "ten one", "elven"], ipucu: "11 = eleven" },
  { soru: "12 İngilizcede nasıl söylenir?", dogru: "twelve", yanlis: ["eleven", "twenty", "twelfth"], ipucu: "12 = twelve" },
  { soru: "13 İngilizcede nasıl söylenir?", dogru: "thirteen", yanlis: ["thirty", "twelve", "thirdteen"], ipucu: "13 = thirteen (on üç)" },
  { soru: "14 İngilizcede nasıl söylenir?", dogru: "fourteen", yanlis: ["forty", "four", "forteen"], ipucu: "14 = fourteen" },
  { soru: "15 İngilizcede nasıl söylenir?", dogru: "fifteen", yanlis: ["fifty", "five", "fiveteen"], ipucu: "15 = fifteen" },
  { soru: "16 İngilizcede nasıl söylenir?", dogru: "sixteen", yanlis: ["sixty", "six", "sixten"], ipucu: "16 = sixteen" },
  { soru: "17 İngilizcede nasıl söylenir?", dogru: "seventeen", yanlis: ["seventy", "seven", "seventeenth"], ipucu: "17 = seventeen" },
  { soru: "18 İngilizcede nasıl söylenir?", dogru: "eighteen", yanlis: ["eighty", "eight", "eiteenth"], ipucu: "18 = eighteen" },
  { soru: "19 İngilizcede nasıl söylenir?", dogru: "nineteen", yanlis: ["ninety", "nine", "ninteenth"], ipucu: "19 = nineteen" },
  { soru: "20 İngilizcede nasıl söylenir?", dogru: "twenty", yanlis: ["twelve", "two", "twently"], ipucu: "20 = twenty" },

  // ── İngilizce → rakam ──
  { soru: "\"eleven\" kaçtır?", dogru: "11", yanlis: ["12", "10", "21"], ipucu: "eleven = 11" },
  { soru: "\"twelve\" kaçtır?", dogru: "12", yanlis: ["11", "20", "22"], ipucu: "twelve = 12" },
  { soru: "\"thirteen\" kaçtır?", dogru: "13", yanlis: ["30", "3", "14"], ipucu: "thirteen = 13 (on üç)" },
  { soru: "\"fifteen\" kaçtır?", dogru: "15", yanlis: ["50", "5", "16"], ipucu: "fifteen = 15" },
  { soru: "\"eighteen\" kaçtır?", dogru: "18", yanlis: ["80", "8", "17"], ipucu: "eighteen = 18" },
  { soru: "\"nineteen\" kaçtır?", dogru: "19", yanlis: ["90", "9", "18"], ipucu: "nineteen = 19" },

  // ── Onluklar (20–100) ──
  { soru: "20 İngilizcede nasıl söylenir?", dogru: "twenty", yanlis: ["twelve", "twelfth", "tweny"], ipucu: "20 = twenty" },
  { soru: "30 İngilizcede nasıl söylenir?", dogru: "thirty", yanlis: ["thirteen", "three", "thirthy"], ipucu: "30 = thirty" },
  { soru: "40 İngilizcede nasıl söylenir?", dogru: "forty", yanlis: ["fourteen", "four", "fourty"], ipucu: "40 = forty (u yok!)" },
  { soru: "50 İngilizcede nasıl söylenir?", dogru: "fifty", dogru: "fifty", yanlis: ["fifteen", "five", "fivety"], ipucu: "50 = fifty" },
  { soru: "60 İngilizcede nasıl söylenir?", dogru: "sixty", yanlis: ["sixteen", "six", "sixety"], ipucu: "60 = sixty" },
  { soru: "70 İngilizcede nasıl söylenir?", dogru: "seventy", yanlis: ["seventeen", "seven", "seventhy"], ipucu: "70 = seventy" },
  { soru: "80 İngilizcede nasıl söylenir?", dogru: "eighty", yanlis: ["eighteen", "eight", "eighthy"], ipucu: "80 = eighty" },
  { soru: "90 İngilizcede nasıl söylenir?", dogru: "ninety", yanlis: ["nineteen", "nine", "ninethy"], ipucu: "90 = ninety" },
  { soru: "100 İngilizcede nasıl söylenir?", dogru: "one hundred", yanlis: ["one thousand", "hundred one", "one hunderd"], ipucu: "100 = one hundred" },

  // ── Onluklar: İngilizce → rakam ──
  { soru: "\"thirty\" kaçtır?", dogru: "30", yanlis: ["13", "3", "300"], ipucu: "thirty = 30" },
  { soru: "\"forty\" kaçtır?", dogru: "40", yanlis: ["14", "4", "400"], ipucu: "forty = 40" },
  { soru: "\"fifty\" kaçtır?", dogru: "50", yanlis: ["15", "5", "500"], ipucu: "fifty = 50" },
  { soru: "\"eighty\" kaçtır?", dogru: "80", yanlis: ["18", "8", "800"], ipucu: "eighty = 80" },
  { soru: "\"ninety\" kaçtır?", dogru: "90", yanlis: ["19", "9", "900"], ipucu: "ninety = 90" },

  // ── Bileşik sayılar ──
  { soru: "21 İngilizcede nasıl söylenir?", dogru: "twenty-one", yanlis: ["one-twenty", "twentyone", "two and one"], ipucu: "21 = twenty-one (tire ile)" },
  { soru: "35 İngilizcede nasıl söylenir?", dogru: "thirty-five", yanlis: ["three-five", "fifty-three", "thirthy five"], ipucu: "35 = thirty-five" },
  { soru: "48 İngilizcede nasıl söylenir?", dogru: "forty-eight", yanlis: ["fourty-eight", "eight-forty", "four-eight"], ipucu: "48 = forty-eight (forty'de u yok)" },
  { soru: "72 İngilizcede nasıl söylenir?", dogru: "seventy-two", yanlis: ["two-seventy", "seventeenth-two", "seventytwo"], ipucu: "72 = seventy-two" },
  { soru: "99 İngilizcede nasıl söylenir?", dogru: "ninety-nine", yanlis: ["nineteen-nine", "nine-ninety", "ninetyteen"], ipucu: "99 = ninety-nine" },

  // ── Büyük sayılar ──
  { soru: "1.000 İngilizcede nasıl söylenir?", dogru: "one thousand", yanlis: ["one hundred", "ten hundred", "one million"], ipucu: "1.000 = one thousand" },
  { soru: "1.000.000 İngilizcede nasıl söylenir?", dogru: "one million", yanlis: ["one billion", "one thousand", "one hundred thousand"], ipucu: "1.000.000 = one million" },
  { soru: "1.000.000.000 İngilizcede nasıl söylenir?", dogru: "one billion", yanlis: ["one million", "one trillion", "one thousand million"], ipucu: "1.000.000.000 = one billion" },
  { soru: "500 İngilizcede nasıl söylenir?", dogru: "five hundred", yanlis: ["five thousands", "fifty hundred", "five hunderd"], ipucu: "500 = five hundred" },
  { soru: "2.500 İngilizcede nasıl söylenir?", dogru: "two thousand five hundred", yanlis: ["two five hundred", "twenty-five hundred", "two thousands five"], ipucu: "2.500 = two thousand five hundred" },

  // ── Sıra sayıları (ordinals) ──
  { soru: "\"1st\" nasıl okunur?", dogru: "first", yanlis: ["onest", "firstth", "oned"], ipucu: "1st = first" },
  { soru: "\"2nd\" nasıl okunur?", dogru: "second", yanlis: ["twond", "secondth", "twoth"], ipucu: "2nd = second" },
  { soru: "\"3rd\" nasıl okunur?", dogru: "third", yanlis: ["threeth", "threeird", "threed"], ipucu: "3rd = third" },
  { soru: "\"4th\" nasıl okunur?", dogru: "fourth", yanlis: ["four", "fouth", "foreth"], ipucu: "4th = fourth" },
  { soru: "\"5th\" nasıl okunur?", dogru: "fifth", yanlis: ["fiveth", "fiftth", "fivth"], ipucu: "5th = fifth (özel form!)" },
  { soru: "\"8th\" nasıl okunur?", dogru: "eighth", yanlis: ["eightth", "eighthth", "eightieth"], ipucu: "8th = eighth (t düşer)" },
  { soru: "\"9th\" nasıl okunur?", dogru: "ninth", yanlis: ["nineth", "ninthth", "nineteenth"], ipucu: "9th = ninth (e düşer)" },
  { soru: "\"12th\" nasıl okunur?", dogru: "twelfth", yanlis: ["twelveth", "twelfeth", "twelthf"], ipucu: "12th = twelfth (özel form)" },
  { soru: "\"20th\" nasıl okunur?", dogru: "twentieth", yanlis: ["twentyth", "twentyieth", "twentiest"], ipucu: "20th = twentieth (y → ieth)" },
  { soru: "\"21st\" nasıl okunur?", dogru: "twenty-first", yanlis: ["twenty-onest", "twentyfirst", "twenty-oned"], ipucu: "21st = twenty-first" },
  { soru: "\"30th\" nasıl okunur?", dogru: "thirtieth", yanlis: ["thirtyth", "thirthieth", "thirtith"], ipucu: "30th = thirtieth" },
  { soru: "\"100th\" nasıl okunur?", dogru: "one hundredth", yanlis: ["one hundredest", "hundredth", "one hundred"], ipucu: "100th = one hundredth" },

  // ── Matematik sembolleri ──
  { soru: "\"+\" işareti İngilizcede nasıl okunur?", dogru: "plus / and", yanlis: ["add", "positive", "more"], ipucu: "2 + 3 = two plus three" },
  { soru: "\"-\" işareti matematik bağlamında nasıl okunur?", dogru: "minus", yanlis: ["dash", "negative", "less"], ipucu: "5 - 2 = five minus two" },
  { soru: "\"×\" işareti İngilizcede nasıl okunur?", dogru: "times / multiplied by", yanlis: ["cross", "plus", "power"], ipucu: "3 × 4 = three times four" },
  { soru: "\"÷\" işareti İngilizcede nasıl okunur?", dogru: "divided by", yanlis: ["minus", "times", "cut by"], ipucu: "10 ÷ 2 = ten divided by two" },
  { soru: "\"=\"  işareti İngilizcede nasıl okunur?", dogru: "equals / is", yanlis: ["same", "like", "makes"], ipucu: "3 + 2 = 5 → three plus two equals five" },
  { soru: "\"%\" işareti İngilizcede nasıl okunur?", dogru: "percent", yanlis: ["per", "percentage of", "parts"], ipucu: "50% = fifty percent" },
];