export const external = {
  appStore: "https://apps.apple.com/app/id1632961329",
  play: "https://play.google.com/store/apps/details?id=com.pickyuda.ringle",
  email: "mailto:support@ringledating.com",
  whatsapp: "https://wa.me/972553009152",
  instagram: "https://www.instagram.com/ringle_dating/",
  youtube: "https://www.youtube.com/@ringle-dating",
  tiktok: "https://www.tiktok.com/@ringledating",
};

const file = (path) => `${import.meta.env.BASE_URL}${path}`;

const pressLogos = [
  {
    id: "mako",
    src: file("press/mako.png"),
    href: "https://www.mako.co.il/news-digital/2023_q3/Article-2bb097dab730a81026.htm",
    he: "מאקו",
    en: "Mako",
  },
  {
    id: "kipa",
    src: file("press/kipa.png"),
    href: "https://www.kipa.co.il/%D7%97%D7%93%D7%A9%D7%95%D7%AA/1164270-0/",
    he: "כיפה",
    en: "Kipa",
  },
  {
    id: "channel14",
    src: file("press/channel14.png"),
    href: "https://www.youtube.com/watch?v=itn-L6lS1eM",
    he: "ערוץ 14",
    en: "Channel 14",
  },
];

const appScreens = [
  {
    id: "elevated",
    src: file("photos/app/store-elevated.jpg"),
    he: {
      src: file("photos/app/store-elevated-he.jpg"),
      alt: "זוג, עם הכיתוב הכרויות לדתיים ומסורתיים",
      title: "דתיים ומסורתיים",
      body: "הכרויות לדתיים ומסורתיים",
    },
    en: {
      alt: "A couple, with the line Dating for Religious & Traditional Jews",
      title: "Religious Jews",
      body: "Dating for Religious & Traditional Jews",
    },
  },
  {
    id: "values",
    src: file("photos/app/store-values.jpg"),
    he: {
      src: file("photos/app/store-values-he.jpg"),
      alt: "פרופיל עם בחירה לפי זרם",
      title: "ערכים",
      body: "מוצאים מישהו מהזרם ומהערכים שלכם. מסורתי, דתי לאומי, ועוד.",
    },
    en: {
      alt: "A profile filtered by religious affiliation",
      title: "Values",
      body: "Find someone from your stream and your values. Traditional, Modern Orthodox, Dati Leumi, and more.",
    },
  },
  {
    id: "prompts",
    src: file("photos/app/store-prompts.jpg"),
    he: {
      src: file("photos/app/store-prompts-he.jpg"),
      alt: "כרטיסי פרופיל על שבת, בית וקשר",
      title: "מי שאתם",
      body: "הפרופיל אומר מה באמת חשוב. שבת, בית, ומה שמחפשים בקשר.",
    },
    en: {
      alt: "Profile prompts about Shabbat, home, and a relationship",
      title: "Who you are",
      body: "The profile says what actually matters. Shabbat, home, and what you're looking for.",
    },
  },
  {
    id: "verified",
    src: file("photos/app/store-verified.jpg"),
    he: {
      src: file("photos/app/store-verified-he.jpg"),
      alt: "פרופיל מאומת",
      title: "מאומתים",
      body: "הפרופילים מאומתים, כדי להכיר בביטחון.",
    },
    en: {
      alt: "A verified profile",
      title: "Verified",
      body: "Profiles are verified, so you can connect with confidence.",
    },
  },
  {
    id: "likes",
    src: file("photos/app/store-likes.jpg"),
    he: {
      src: file("photos/app/store-likes-he.jpg"),
      alt: "מסך הלייקים",
      title: "לייקים",
      body: "רואים מי שכבר התעניין, לפני שמתחילים שיחה.",
    },
    en: {
      src: file("photos/app/store-likes-en.jpg"),
      alt: "The likes screen",
      title: "Likes",
      body: "See who's already interested, before the conversation starts.",
    },
  },
  {
    id: "matches",
    src: file("photos/app/store-matches.jpg"),
    he: {
      src: file("photos/app/store-matches-he.jpg"),
      alt: "התאמות והודעות",
      title: "התאמות",
      body: "התאמות חדשות והודעות, במקום אחד.",
    },
    en: {
      src: file("photos/app/store-matches-en.jpg"),
      alt: "Matches and messages",
      title: "Matches",
      body: "New matches and messages, in one place.",
    },
  },
  {
    id: "couples",
    src: file("photos/app/store-couples.jpg"),
    he: {
      src: file("photos/app/store-couples-he.jpg"),
      alt: "קולאז׳ של זוגות שהכירו ברינגל",
      title: "זוגות",
      body: "זוגות יהודים שהכירו ברינגל.",
    },
    en: {
      alt: "A collage of couples who met on Ringle",
      title: "Couples",
      body: "Jewish couples who met on Ringle.",
    },
  },
];

const singles = [
  {
    src: file("photos/singles/s1.jpg"),
    he: "אישה צעירה מחייכת ליד חלון",
    en: "A young woman smiling by a window",
  },
  {
    src: file("photos/singles/s3.jpg"),
    he: "גבר עם כיפה, וברקע ירושלים",
    en: "A young man wearing a kippah, with Jerusalem behind him",
  },
  {
    src: file("photos/singles/s4.jpg"),
    he: "אישה עם קפה בכותל",
    en: "A young woman holding a coffee at the Western Wall",
  },
  {
    src: file("photos/singles/s2.jpg"),
    he: "גבר צעיר בטיימס סקוור",
    en: "A young man smiling in Times Square at night",
  },
];

const couples = [
  {
    id: "p01",
    src: file("photos/couples/p01.jpg"),
    post: "https://www.instagram.com/p/C9sYqRZCMg2/",
    he: {
      alt: "שמוליק ומיכל",
      title: "שמוליק ומיכל",
      body: "אני (שמוליק) ומיכל הכרנו ברינגל אחרי הרבה זמן של חיפושים, שנינו מהצפון במקור ובמרכז כיום, למדנו באותה עיר בתיכון אבל לא ידענו אחד על השנייה. הצעתי למיכל במצפה נטופה, איפה שההורים שלה גרים, אחרי שקנינו ביחד טבעת בנופש קבע היא סטודנטית לפיזיותרפיה ואני איש קבע במודיעין",
    },
    en: {
      alt: "Shmulik and Michal",
      title: "Shmulik and Michal",
      body: "Me (Shmulik) and Michal met in Ringel after a long time of searching, both of us from the north originally and from the center today, we studied in the same city in high school but we didn't know about each other. I proposed to Michal in Mitzpe Netufa, where her parents live, after we bought a ring together in a permanent vacation. She is a physical therapy student and I am a permanent resident at Modi'in.",
    },
  },
  {
    id: "p02",
    src: file("photos/couples/p02.jpg"),
    post: "https://www.instagram.com/p/C2fYaj1oOuq/",
    he: {
      alt: "אברהם ותמר",
      title: "אברהם ותמר",
      body: "היי תודה לאל אני וארוסתי הכרנו דרך האפליקציה שלכם (עוד בתחילת תשרי לפני המלחמה) אחרי שנים של חיפושים ונדידות בין אפליקציות שונות ומשונות ואפיקי הכירות מוצלחים ומוצלחים פחות הגענו לאפליקצית רינגל ודרך שם הכרנו ובעזרת ה׳ החלטנו גם להתחתן. רצינו להודות לכם על החיבור שלנו שנעשה גם בזכותכם ועל כל הטוב שאתם עושים למען רווקים ורווקות בעם ישראל תודה רבה",
    },
    en: {
      alt: "Avraham and Tamar",
      title: "Avraham and Tamar",
      body: "Hi, thank God my fiancee and I met through your app (back in the beginning of Tishrei before the war) after years of searching and wandering between different and strange apps and successful and less successful dating channels we came to the Ringel app and through there we met and with God's help we also decided to get married. We wanted to thank you for our connection, which was also made thanks to you, and for all the good you do for single men and women in Israel, thank you very much",
    },
  },
  {
    id: "p03",
    src: file("photos/couples/p03.jpg"),
    post: "https://www.instagram.com/p/C87cAWvocn-/",
    he: {
      alt: "דור וספיר",
      title: "דור וספיר",
      body: "הכירו את דור וספיר, שהצטרפו לאפליקציית רינגל לפני מספר חודשים בלבד. הם מצאו זה את זו והתאמה מושלמת נוצרה ביניהם מהרגע הראשון. לאחר מספר שיחות ודייטים מקסימים, הם הבינו שהם מצאו אחד את השניה. לאחר תקופה מרגשת יחד, דור כרע ברך והציע לספיר נישואין, והיא ענתה “כן”. הם עזבו את עולם הסינגלס לטובת חיים משותפים ומלאי אהבה",
    },
    en: {
      alt: "Dor and Sapir",
      title: "Dor and Sapir",
      body: 'Meet Dor and Sapir, who joined the Ringel app only a few months ago. They found each other and a perfect match was created between them from the first moment. After several lovely conversations and dates, they realized they had found each other. After an exciting time together, Dor got down on one knee and proposed to Sapir, and she answered "yes". They left the world of singles in favor of a life together and full of love',
    },
  },
  {
    id: "p04",
    src: file("photos/couples/p04.jpg"),
    post: "https://www.instagram.com/p/C9dAC8QCqa9/",
    he: {
      alt: "נמרוד ומרים",
      title: "נמרוד ומרים",
      body: "כבר הייתי כמעט מיואשת, רווקה בת 32, וגם נמרוד בגיל 34 כבר היה כמעט מיואש. ושנינו נרשמנו לרינגל. ברינגל הייתה לנו התאמה ואז שלחתי הודעה ראשונה, התחלנו לדבר, החלטנו לתת הזדמנות למרות שאני גרתי בירושלים ונמרוד בחיפה. התחלנו להיפגש בדיוק שנמרוד השתחרר ממילואים והיה לו חופש לפני חזרה לעבודה ואני בתור מורה הייתי בחופשת חנוכה אז היה לנו זמן לדייטים ארוכים וטיילנו יום שלם וככה מאוד התחברנו והתפללנו לנס חנוכה שהפעם זה יצליח, והנס קרה. הקשר זרם, נסעו הרבה ברכבת והשקענו הכל בקשר, דיברנו בכנות על הרגשות שלנו ומאוד התקרבנו ונפגשנו פעמים בשבוע. התחלנו לצאת בדצמבר ובפורים בסוף מרץ כשהיינו בכותל ויצאנו מהתפילה, נמרוד הציע והשאר היסטוריה, עוד שבועים חתונה",
    },
    en: {
      alt: "Nimrod and Miriam",
      title: "Nimrod and Miriam",
      body: "I was almost ready to give up at 32, and Nimrod, at 34, felt the same. We both joined Ringel, matched, and I sent the first message. Though I lived in Jerusalem and he in Haifa, we decided to give it a shot.\n\nOur timing was perfect – Nimrod was on leave from reserve duty, and as a teacher, I was on Hanukkah break. We had long dates, explored together, and prayed for a Hanukkah miracle. And it happened!\n\nThe relationship flourished. We traveled often, spoke openly, and grew close. We started dating in December, and by Purim, at the Western Wall, Nimrod proposed. Now, two weeks until the wedding!",
    },
  },
  {
    id: "p05",
    src: file("photos/couples/p05.jpg"),
    post: "https://www.instagram.com/p/C7tiFu3I6rw/",
    he: {
      alt: "רחלי ואורי",
      title: "רחלי ואורי",
      body: "הכירו את רחלי ואורי שלפני מספר חודשים בודדים החליטו להצטרף לאפליקציית רינגל - הם הוסיפו מספר מצומצם של אימוג’ים לתחומי העניין שלהם, אבל איך אומרים? זאת לא הכמות זאת האיכות. כמו באגדות, נוצר מאצ’ בניהם שהוביל לדייט ראשון מושלם שהוביל לאחריו לדייט אחד קסום במיוחד - מצפה רמון. אורי כרע ברך, שלף את הרינג ושאל את רחלי “התנשאי לי?” והיא כמובן ענתה “איי דו!” וככה שניהם עזבו את הסינגל לייף לטובת הליכה רומנטית לעבר החופה הקרבה. בקרוב אצלכם!",
    },
    en: {
      alt: "Rachel and Uri",
      title: "Rachel and Uri",
      body: 'Meet Racheli and Uri, who just a few months ago decided to join the Ringel app - they added a limited number of emojis to their interests, but how do you say it? It\'s not the quantity, it\'s the quality. As in fairy tales, a match was created between them that led to a perfect first date that led to one especially magical date - Mitzpe Ramon. Uri knelt down, pulled out the ring and asked Racheli, "Will you marry me?" And of course she answered "Ai doo!" And so they both left the single life in favor of a romantic walk towards the nearby canopy. Coming soon to you!',
    },
  },
  {
    id: "p06",
    src: file("photos/couples/p06.jpg"),
    post: "https://www.instagram.com/p/C6qJqgkowp-/",
    he: {
      alt: "רבקה וזאב",
      title: "רבקה וזאב",
      body: "רבקה , זאב ירושלים( במרחק של כמה רחובות) הוא עשה לי לייק וגם אני ואני(רבקה) שלחתי לו הודעה . הדייט הראשון היה בבר בירושלים יצאנו אחרי חודש רק לדייט הראשון התכתבנו בהפרשים . הציע לי נישואין בטבע אהבה מתוקה וטובה טפו טפו שישאר כך ממליצה לכולם לא להתייאש במיוחד באפליקציות!!!! יש כל כך הרבה מבחר אבל כשזה מגיע זה מגיע בענק תודה לצוות רינגל רק שמחות",
    },
    en: {
      alt: "Rebecca and Zeev",
      title: "Rebecca and Zeev",
      body: "Rebecca, Zeev Jerusalem (a few blocks away) he liked me and I too and I (Rebecca) sent him a message. The first date was in a bar in Jerusalem, we went out after a month, only for the first date we corresponded separately. He proposed to me in nature, sweet and good love, tap tap, let it stay that way. I recommend everyone not to despair especially in the applications!!!! There is so much to choose from but when it comes it comes in a big way thanks to the Ringel team only happiness",
    },
  },
  {
    id: "p07",
    src: file("photos/couples/p07.jpg"),
    post: "https://www.instagram.com/p/C_6KDbDoVYw/",
    he: {
      alt: "אורן וסאם",
      title: "אורן וסאם",
      body: "הורדתי את האפליקציה, היא הייתה ההתאמה הראשונה שלי, דיברנו יום או יומיים ועברנו לוואטסאפ. אחרי יומיים הלכנו לקפה וברגע הזה אמרתי שהיא האחת. אחרי 6 חודשים התארסנו :) סאם ואורן",
    },
    en: {
      alt: "Oren and Sam",
      title: "Oren and Sam",
      body: "I downloaded the app, she was my first match, we talked for a day or two and switched to WhatsApp. After two days we went for coffee and at that moment I said she was the one. After 6 months we got engaged :) Sam and Oren",
    },
  },
  {
    id: "p08",
    src: file("photos/couples/p08.jpg"),
    post: "https://www.instagram.com/p/C-aIU7iI7tr/",
    he: {
      alt: "אלחנן וליאת",
      title: "אלחנן וליאת",
      body: "היי מה קורה? בשעה טובה התארסתי דרככם! אז קודם כל רציתי לומר תודה גדולה, דבר שני מבחינתי בשמחה תוכלו להשתמש בתמונות. באהבה ובהערכה- אלחנן שקולניק וליאת שיבר",
    },
    en: {
      alt: "Elhanan and Liat",
      title: "Elhanan and Liat",
      body: "hi what's up Good afternoon, I got engaged through you! So first of all I wanted to say a big thank you, secondly for me you can happily use the photos. With love and appreciation - Elhanan Shkolnik and Liat Shiver",
    },
  },
  {
    id: "p09",
    src: file("photos/couples/p09.jpg"),
    post: "https://www.instagram.com/p/C_LqkmzIvKl/",
    he: {
      alt: "אריאל ויפעת",
      title: "אריאל ויפעת",
      body: "הכרנו דרך האפליקציה בדיוק כשהחיים לקחו אותנו לכיוונים שונים – אני הייתי במילואים בדרום, ויפעת הייתה בחיפה. למרות המרחק, האפליקציה חיברה בינינו, והתחלנו לשוחח, להכיר ולהתקרב. כל זמן פנוי הוקדש לשיחות בווטסאפ ולמשחקים אונליין אחד נגד השנייה, כאילו המרחק רק חיזק את הקשר שלנו.\n\nבזמן שלא יכולנו להיפגש, המשחקים והשיחות הפכו לרגעים הכי קרובים בלב, הקשר בינינו הולך ותחזק מיום ליום. אחרי כמה חודשים, כשסוף סוף נפגשנו שוב, זה היה ברור – אנחנו נועדנו להיות יחד.",
    },
    en: {
      alt: "Ariel and Yifat",
      title: "Ariel and Yifat",
      body: "We met through the app just as life was pulling us in different directions – I was on reserve duty in the south, and Yifat was in Haifa. Despite the distance, the app brought us together, and we started talking, getting to know each other, and growing closer. Every spare moment was spent chatting on WhatsApp or playing online games against each other, as if the distance only strengthened our connection.\n\nDuring the times we couldn’t meet, those games and conversations became the most meaningful moments, and our bond grew stronger every day. After a few months, when we finally met again, it was clear – we were meant to be together.",
    },
  },
  {
    id: "p10",
    src: file("photos/couples/p10.jpg"),
    post: "https://www.instagram.com/p/DBwKqCZOWpL/",
    he: {
      alt: "נועה ואביחי",
      title: "נועה ואביחי",
      body: "רגשת לשתף אתכם במסע האישי שלי, שהתחיל לפני חמישה חודשים. הייתי כבר משתמשת באפליקציה, מנסה למצוא את החצי השני שלי, ודי נהניתי מהחוויה, למרות שלא ידעתי למה לצפות באמת. ואז, שבוע אחרי שאביחי הצטרף גם הוא לאפליקציה, היה לנו מאצ׳! התחברנו מיד, והשיחות זרמו כאילו אנחנו מכירים כבר שנים. ככל שהזמן עבר, הבנתי שהוא האדם שחיפשתי, ושאיתו אני רוצה להמשיך את חיי. אתמול, אביחי כרע ברך ושאל את השאלה הגדולה – ואמרתי ‘כן’ בשמחה ובאהבה גדולה.",
    },
    en: {
      alt: "Noa and Avihai",
      title: "Noa and Avihai",
      body: "I felt like sharing with you my personal journey, which started five months ago. I was already using the app, trying to find my other half, and I quite enjoyed the experience, even though I didn't really know what to expect. Then, a week after Avihai also joined the app, we had a match! We connected immediately, and the conversations flowed as if we had known each other for years. As time passed, I realized that he was the person I was looking for, and with whom I wanted to continue my life. Yesterday, Avichai got down on one knee and asked the big question - and I said 'yes' with great joy and love.",
    },
  },
  {
    id: "p11",
    src: file("photos/couples/p11.jpg"),
    post: "https://www.instagram.com/p/DBbS48wIls0/",
    he: {
      alt: "אדווה ועומר",
      title: "אדווה ועומר",
      body: "אני ועומר התחלנו לדבר אחרי ימים בודדים שהוא הצטרף לאפליקציה.\nבהתחלה בשל המלחמה ושיבוש המיקום- עומר חשב שאני מלבנון😄\nשכנעתי אותו לעבור לוואטסאפ כדי להוכיח לו שאני מישראל\nומשם מהר מאוד קבענו לדייט.. וברוך ה׳ אנחנו מאורסים ומאושרים!\nתודה לכם על הפלטפורמה שבזכותה הכרנו🙏🏻\nממליצים מאוד!",
    },
    en: {
      alt: "Edva and Omar",
      title: "Edva & Omar",
      body: "Omar and I started talking a few days after he joined the app.\nAt first due to the war and the disruption of the location - Omar thought I was from Lebanon😄\nI convinced him to switch to WhatsApp to prove to him that I am from Israel\nAnd from there we very quickly arranged a date.. and thank God we are engaged and happy!\nThank you for the platform thanks to which we met 🙏🏻\nHighly recommend!",
    },
  },
  {
    id: "p12",
    src: file("photos/couples/p12.jpg"),
    post: "https://www.instagram.com/p/DCuLCSnIJJq/",
    he: {
      alt: "נתנאל ויהודית",
      title: "נתנאל ויהודית",
      body: "תנאל חזר לארץ אחרי מספר שנים של לימודים בחו״ל, והחליט לנסות את מזלו בRingle.\nאני, יהודית, בדיוק פתחתי פרופיל בRingle כדי לנסות את מזלי.\nנתנאל היה בין המאצ׳ים הראשונים והוא כתב לי יום למחרת. התחלנו להתכתב ואחרי שיחת טלפון ישר הרגשנו חיבור והחלטנו להפגש לדייט ראשון.\nהדייט הראשון היה כבר בהתחלה שונה ומיוחד משאר הדייטים שחווינו, הוא נמשך 7 שעות ונהנינו מאד ✨\nאחרי חודש וקצת, נתנאל הציע לי 😊💍\nהתחתנו ברוך ה׳ בתאריך המיוחד ג׳ תמוז\nונשואים באושר כבר 4 חודשים ❤️\n\nמסר לאומה:\nתנסו ותשתדלו, אין לכם מה להפסיד 😉",
    },
    en: {
      alt: "Nathaniel and Yehudit",
      title: "Nathaniel & Yehudit",
      body: "Netanel returned to Israel after studying abroad and decided to try his luck on Ringle. I, Yehudit, had just opened my profile there too.\n\nNetanel was one of my first matches and messaged me the next day. After chatting and a phone call, we felt an instant connection and went on a first date.\n\nThat date lasted seven hours and was amazing! ✨ Just over a month later, Netanel proposed 😊💍.\n\nWe got married on 3 Tammuz and have been happily married for four months ❤️.\n\nOur message: Take a chance – you’ve got nothing to lose! 😉",
    },
  },
  {
    id: "p13",
    src: file("photos/couples/p13.jpg"),
    post: "https://www.instagram.com/p/DE-QqOdIuaU/",
    he: {
      alt: "נדב ומאיה",
      title: "נדב ומאיה",
      body: "אני אספר שכבר הייתי באמת קרובה לוותר על האפליקציות, נתתי לזה הרבה הזדמנויות וזה היה קשה.\nאת רינגל הכרתי במקרה בכנס של 252 ופתאום נזכרתי באפליקציה.\nהחלטתי לתת הזדמנות אחרונה אבל באמת להשתדל\nלא לקח המון זמן עד שהכרתי את נדב\nדיברנו, השיחה הייתה קצת מקוטעת כי הוא היה באטרף בצבא ולא הייתי בטוחה שהוא בעניין אבל רציתי לנסות.\nאז נפגשנו\nומאז נפגשו לפחות פעמיים בשבוע\nכשאנחנו לא בדיוק גרים הכי קרוב. אבל שנינו השתדלנו וזה הכי השתלם בעולם!\nב18/11/24 התחתנו פחות משנה מהדייט הראשון\n(כשאני הגדרתי לעצמי ולנדב בדייט השלישי שאני מתחתנת תוך שנה😅\nוהוא עמד בזה לחלוטין🥰)\nאגב, מהצד של נדב אפליקציות היו פלטפורמה חדשה ואני הבחורה הראשונה שהוא דיבר איתה ברינגל\nככה שיצא מווושלם!",
    },
    en: {
      alt: "Nadav and Maya",
      title: "Nadav & Maya",
      body: "I was really close to giving up on dating apps, I gave them many chances and it was tough. I discovered Ringle by chance at a 252 conference, and suddenly I remembered the app. I decided to give it one last chance, but I really made an effort.\nIt didn’t take long before I met Nadav. We chatted, the conversation was a bit interrupted because he was in the army, and I wasn’t sure if he was really into it, but I wanted to give it a try. So we met, and since then, we’ve met at least twice a week, even though we don’t exactly live close. But we both made the effort, and it was totally worth it!\nOn 18/11/24, we got married less than a year from our first date. (By the third date, I told Nadav and myself that I would get married within a year, and he totally stuck to it! 😅🥰)\nBy the way, from Nadav’s side, dating apps were a new platform, and I was the first girl he talked to on Ringle. So, it turned out perfect!",
    },
  },
  {
    id: "p14",
    src: file("photos/couples/p14.jpg"),
    post: "https://www.instagram.com/p/DDkFel7IJA2/",
    he: {
      alt: "עמיחי והדס",
      title: "עמיחי והדס",
      body: "אז אני והדס הכרנו בתחילת פברואר אני הייתי במילואים כמעט חצי שנה\nהאמת בשיא הכנות שלא ככ האמנתי באפליקציות הכרויות אבל חבר דחף אותי להיכנס לרינגל הוא אמר שהפלטפורמה מעולה וששוב לבדוק\nבהתחלה לא הקשבתי לו הייתי סקפטי ולאחר שבוע חצי אמרתי לעצמי שאני הולך על זה חיפשתי וחיפשתי ובסוף הדס מצאה אותי מהרגע הראשון השיחות היו מדהימות הכל זרם והיה מדוייק בטירוף פשוט כל מה שחיפשתי והיום אחרי עשרה חודשים בדיוק לקחנו את זה צעד קדימה והתארסנו\nאני רוצה להודות לכם מקרב לב על העזרה האמיתית במציאת האישה שלי לכל החיים זה המון בזכותכם עמיחי והדס",
    },
    en: {
      alt: "Amichai and Hadass",
      title: "Amichai & Hadass",
      body: "So, Hadass and I first met in early February. At the time, I was in the middle of nearly six months of reserve duty in the IDF.\nTo be honest, I didn’t really believe in dating apps. But a friend kept pushing me to try Ringle. He insisted it was a great platform and worth giving a shot.\nAt first, I ignored him – I was skeptical. But after about a week and a half, I decided to give it a try. I searched and searched, and then Hadass found me.\nFrom the very first conversation, everything just clicked. The connection was incredible – it all felt so natural and exactly what I was looking for.\nAnd now, ten months later to the day, we’ve taken the next step and are engaged!\nWe want to thank you from the bottom of our hearts for helping us find each other. Thanks to you, I found the love of my life.\nWith gratitude, Amichai & Hadass",
    },
  },
  {
    id: "p15",
    src: file("photos/couples/p15.jpg"),
    post: "https://www.instagram.com/p/DD7BqQwIQQG/",
    he: {
      alt: "שחר ורועי",
      title: "שחר ורועי",
      body: "הייתי בתקופה לא קלה בחיים, כלום לא באמת היה זורם לי. אז החלטתי לנסות משהו חדש ולפתוח פרופיל ברינגל. לא ציפיתי לכלום, אבל אז פתאום ראיתי ששחר שלחה לי הודעה!\n\nלאחר שלושה ימים של שיחות, קבענו דייט ראשון. מהרגע הראשון היה חיבור נהדר בינינו, ומיד הרגשנו שזה זה. הרגשנו נוח ופתוח, וזה היה ברור.\n\nלא עבר הרבה זמן, והחלטנו לעבור לגור יחד. הקשר שלנו המשיך להתפתח באופן טבעי, ולאחר כמה חודשים ידענו שאנחנו מוכנים לעשות את הצעד הבא.\nבסופו של דבר, החלטנו להתארס, כי הרגשנו שאנחנו בונים משהו רציני ומיוחד יחד.\n\nהכל התחיל בהודעה אחת פשוטה ברינגל, ובעיקר עזרה מלמעלה❤️",
    },
    en: {
      alt: "Shahar and Roy",
      title: "Shahar & Roy",
      body: "I was going through a tough time in my life, nothing was really going my way. So I decided to try something new and opened a profile on Ringle. I wasn’t expecting much, but then suddenly I saw that Shachar had sent me a message!\n\nAfter three days of chatting, we arranged our first date. From the very first moment, there was a great connection between us, and we immediately felt that this was it. We felt comfortable and open with each other, and it was clear to both of us.\n\nNot long after, we decided to move in together. Our relationship continued to develop naturally, and after a few months, we knew we were ready to take the next step. In the end, we decided to get engaged because we felt we were building something serious and special together.\n\nIt all started with one simple message on Ringle, and most importantly, with help from above ❤️",
    },
  },
  {
    id: "p16",
    src: file("photos/couples/p16.jpg"),
    post: "https://www.instagram.com/p/DGLf0u9Ies7/",
    he: {
      alt: "רבקה ונדב",
      title: "רבקה ונדב",
      body: "״שלח לי הודעה ושמה התחלנו לדבר ולהכיר הבנו שיש לנו המון במשותף וברוך ה׳ התארסנו! אנחנו מודים לכם על הפלטפורמה המדהימה שיצרתם״",
    },
    en: {
      alt: "Rebecca and Nadav",
      title: "Rebecca & Nadav",
      body: "“Send me a message, and that’s how we started talking and getting to know each other. We realized we had so much in common, and with God’s help, we got engaged! We are grateful for the amazing platform you’ve created.”",
    },
  },
];

export const copy = {
  he: {
    dir: "rtl",
    code: "he",
    metaTitle: "רינגל — הכרויות ליהודים דתיים ומסורתיים",
    metaDescription: "רינגל — הכרויות ליהודים דתיים ומסורתיים. אנשים בסטנדרטים שלך.",
    skip: "דלג לתוכן",
    langLabel: "שפה",
    otherLang: "EN",
    menu: "תפריט",
    close: "סגור",
    nav: [
      { href: "#standards", label: "סטנדרטים" },
      { href: "#stories", label: "סיפורים" },
      { href: "#faq", label: "שאלות" },
      { href: "#support", label: "תמיכה" },
    ],
    getApp: "להורדת האפליקציה",
    hero: {
      l1: "רווקים",
      l2: "דתיים ומסורתיים",
    },
    manifesto: [
      "רינגל - אפליקציית ההיכרויות לדתיים ומסורתיים",
      "אלפי זוגות כבר הכירו ברינגל, התאהבו ובנו יחד בית. יצרנו חוויית היכרות כיפית, איכותית ובטוחה, עם משתמשים מאומתים, מנגנוני הגנה וקהילה של דתיים ומסורתיים שבאמת רוצים להכיר.",
      "כי בסוף, המטרה היא לא להישאר באפליקציה - אלא למצוא את האדם שאיתו תרצו לצעוד יחד לחופה.",
    ],
    standards: "אנשים בסטנדרטים שלך",
    press: {
      title: "עלינו",
      logos: pressLogos.map((item) => ({ ...item, name: item.he })),
    },
    singles: singles.map((item) => ({ src: item.src, alt: item.he })),
    app: {
      title: "מותאם בדיוק לצרכים שלך",
      prev: "המסך הקודם",
      next: "המסך הבא",
    },
    screens: appScreens.map((item) => ({
      id: item.id,
      src: item.he.src || item.src,
      alt: item.he.alt,
      title: item.he.title,
      body: item.he.body,
    })),
    stories: {
      title: "הזוגות שלנו",
      sub: "",
      post: "לפוסט באינסטגרם",
      prev: "הזוג הקודם",
      next: "הזוג הבא",
    },
    couples: couples.map((item) => ({
      id: item.id,
      src: item.src,
      post: item.post,
      ...item.he,
    })),
    cta: {
      title: "רווקים דתיים ומסורתיים? הצטרפו לרינגל.",
      button: "להורדת רינגל",
      on: "הורדה ב־",
      appStore: "App Store",
      play: "Google Play",
    },
    faq: {
      title: "יש שאלות? לכולם יש לפחות אחת.",
      items: [
        [
          "מה זה רינגל?",
          "רינגל היא אפליקציית הכרויות ליהודים דתיים ומסורתיים. היא נבנתה לאנשים שיודעים מה הם מחפשים ומעריכים קשר משמעותי, כך שכל התאמה מתחילה מכוונה.",
        ],
        [
          "למי רינגל מיועדת?",
          "לרווקים ורווקות יהודים שרציניים לגבי מציאת האדם הנכון. אם יודעים מה חשוב לכם ורוצים להכיר אנשים בסטנדרטים שלכם, רינגל בשבילכם.",
        ],
        [
          "איך רינגל שומרת על רמה גבוהה בקהילה?",
          "הפרופילים מאומתים ועוברים ניטור פעיל, כך שפוגשים אנשים אמיתיים ששווה להכיר. מי שלא עומד בסטנדרטים של הקהילה מוסר.",
        ],
        [
          "האם רינגל בחינם?",
          "כן. ההורדה והשימוש ברינגל חינמיים ב־iOS ובאנדרואיד. למי שרוצה יותר יש אפשרויות פרימיום בתשלום.",
        ],
        [
          "איפה רינגל זמינה?",
          "רינגל זמינה בכל העולם ב־App Store וב־Google Play, עם קהילה גדלה של רווקים ורווקות יהודים בישראל, בארצות הברית ומעבר.",
        ],
        [
          "במה רינגל שונה מאפליקציות הכרויות אחרות?",
          "רינגל נבנתה ליהודים לאנשים שלוקחים הכרויות ברצינות. פחות החלקות, יותר כוונה: הרעיון הוא שכל טבעת גדולה מתחילה במציאת מישהו שראוי לבחור בו.",
        ],
      ],
    },
    support: {
      eyebrow: "תמיכה",
      title: "נשמח לשמוע ממך",
      email: "support@ringledating.com",
      whatsapp: "וואטסאפ",
    },
    footer: {
      blurb: "אפליקציית ההכרויות ליהודים דתיים ומסורתיים.",
      nav: "רינגל",
      social: "רשתות",
      support: "תמיכה",
      privacy: "מדיניות פרטיות",
      terms: "תנאי שימוש",
      subscription: "תנאי המנוי",
      rights: "© 2026 רינגל דייטינג בע״מ",
      intention: "מתוך כוונה.",
      socials: [
        ["Instagram", "instagram"],
        ["TikTok", "tiktok"],
        ["YouTube", "youtube"],
      ],
    },
  },
  en: {
    dir: "ltr",
    code: "en",
    metaTitle: "Ringle — Dating for Religious & Traditional Jews",
    metaDescription:
      "Ringle — dating for religious and traditional Jews. People at your standards.",
    skip: "Skip to content",
    langLabel: "Language",
    otherLang: "עברית",
    menu: "Menu",
    close: "Close",
    nav: [
      { href: "#standards", label: "Standards" },
      { href: "#stories", label: "Stories" },
      { href: "#faq", label: "FAQ" },
      { href: "#support", label: "Support" },
    ],
    getApp: "Get the app",
    hero: {
      l1: "Dating for Religious",
      l2: "& Traditional Jews",
    },
    manifesto: [
      "Ringle – Dating for Religious & Traditional Jews",
      "Thousands of couples have already met on Ringle, fallen in love, and started building a life together.",
      "We’ve created a fun, high-quality and safe dating experience, with verified profiles, advanced safety features, and a community of Religious and Traditional Jews who are genuinely looking for something real.",
      "Because the goal isn’t to stay on a dating app - it’s to find the person you’ll build a home with and walk with under the chuppah.",
    ],
    standards: "People at your standards",
    press: {
      title: "About us",
      logos: pressLogos.map((item) => ({ ...item, name: item.en })),
    },
    singles: singles.map((item) => ({ src: item.src, alt: item.en })),
    app: {
      title: "Fitted to what you need.",
      prev: "Previous screen",
      next: "Next screen",
    },
    screens: appScreens.map((item) => ({
      id: item.id,
      src: item.en.src || item.src,
      alt: item.en.alt,
      title: item.en.title,
      body: item.en.body,
    })),
    stories: {
      title: "Ringel's couples",
      sub: "",
      post: "Instagram post",
      prev: "Previous couple",
      next: "Next couple",
    },
    couples: couples.map((item) => ({
      id: item.id,
      src: item.src,
      post: item.post,
      ...item.en,
    })),
    cta: {
      title: "Eligible Jewish single? Join Ringle.",
      button: "Download Ringle",
      on: "Download on the",
      appStore: "App Store",
      play: "Google Play",
    },
    faq: {
      title: "Questions come up. These are the answers.",
      items: [
        [
          "What is Ringle?",
          "Ringle is a dating app for religious and traditional Jews. It is built for people who know what they're looking for and value meaningful connections, so every match starts with intention.",
        ],
        [
          "Who is Ringle for?",
          "Eligible Jewish singles who are serious about finding the right person. If you know what matters to you and want to meet people at your standards, Ringle is for you.",
        ],
        [
          "How does Ringle keep the community at a high standard?",
          "Profiles are verified and actively moderated, so you meet real people worth meeting. Anyone who doesn't meet the community's standards is removed.",
        ],
        [
          "Is Ringle free?",
          "Yes. Ringle is free to download and use on iOS and Android. Optional premium features are available for members who want more.",
        ],
        [
          "Where is Ringle available?",
          "Ringle is available worldwide on the App Store and Google Play, with a growing community of Jewish singles in Israel, the United States and beyond.",
        ],
        [
          "How is Ringle different from other dating apps?",
          "Ringle is made only for Jewish singles and only for people who take dating seriously. Fewer swipes, more intention: the idea is that every great ring starts with finding someone worth choosing.",
        ],
      ],
    },
    support: {
      eyebrow: "Support",
      title: "We’d like to hear from you.",
      email: "support@ringledating.com",
      whatsapp: "WhatsApp",
    },
    footer: {
      blurb: "The dating app for religious and traditional Jews.",
      nav: "Ringle",
      social: "Socials",
      support: "Support",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      subscription: "Subscription Terms",
      rights: "© 2026 Ringle Dating LTD",
      intention: "Made with intention.",
      socials: [
        ["Instagram", "instagram"],
        ["TikTok", "tiktok"],
        ["YouTube", "youtube"],
      ],
    },
  },
};
