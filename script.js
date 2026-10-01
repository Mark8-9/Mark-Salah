
/* =========================================================
   TRANSLATIONS — عدّل النصوص هنا لأي حاجة عايز تغيرها باللغتين
   ========================================================= */
const translations = {
  ar: {
    "nav.home":"الرئيسية", "nav.about":"عني", "nav.work":"الأعمال", "nav.feedback":"آراء العملاء",
    "nav.contact":"تواصل", "nav.cta":"تواصل واتساب",
    "hero.kicker":"SHOWREEL — 2026", "hero.title1":"مارك صلاح", "hero.title2":"Video", "hero.title3":"Editor",
    "hero.role":"Video Editor &amp; Motion Designer",
    "hero.desc":"بحوّل الفيديو الخام لحكاية بإيقاع وإحساس، من القص والتوقيت لحد الكولور والموشن جرافيك. كل مشروع بيتعامل معاه على إنه قصة، مش بس كليبات متلزقة ورا بعض.",
    "hero.btnWork":"شوف الأعمال", "hero.btnBook":"احجز مشروع",
    "hero.stat1":"مشروع مكتمل", "hero.stat2":"سنين خبرة", "hero.stat3":"عملاء راضيين",
    "about.eyebrow":"— عني", "about.title":"مش بس مونتاج،<br>ده سرد بصري",
    "about.p1":"أهلاً، أنا مارك صلاح لدي خبرة في مجال التصوير والمونتاج لأكثر من سنتين، اشتغلت مع عملاء من داخل مصر وخارجها، وشاركت في تنفيذ أكثر من 30 مشروع متعلق بالتصوير والمونتاج.",
    "about.p2":"بالنسبة لي، المونتاج مش مجرد قص وتركيب لقطات؛ هو الطريقة اللي بنحوّل بيها الـ raw footage إلى فيديو له قصة، إحساس، وإيقاع يخلي المشاهد يكمل للآخر.",
    "about.p3":"لو عندك محتوى محتاج شكل احترافي وهوية بصرية ثابتة، أنا هنا أساعدك توصل للشكل ده.",
    "about.tag1":"موشن جرافيك", "about.tag2":"كولور جريدنج",
    "about.meta1":"التخصص", "about.meta2":"المجال التاني", "about.meta3":"الموقع", "about.meta4":"متاح للشغل", "about.available":"● متاح",
    "work.eyebrow":"— الأعمال", "work.title":"بعض أعمالى",
    "work.sub":"مجموعة من الأعمال الأخيرة. اضغط تشغيل عشان تتفرج على أي فيديو.",
    "feedback.eyebrow":"— آراء العملاء", "feedback.title":"إيه رأي اللي اشتغلوا معايا",
    "feedback.sub":"آراء حقيقية من عملاء اشتغلت معاهم على مشاريع مختلفة.",
    "contact.eyebrow":"— تواصل", "contact.title1":"جاهز نبدأ", "contact.title2":"مشروعك؟",
    "contact.sub":"ابعتلي تفاصيل الفيديو اللي محتاجه، وهرد عليك بسرعة على واتساب.",
    "contact.btnWa":"راسلني على واتساب", "contact.btnMail":"ابعتلي إيميل",
    "footer.role":"Video Editor &amp; Motion Designer",
  },
  en: {
    "nav.home":"Home", "nav.about":"About", "nav.work":"Work", "nav.feedback":"Feedback",
    "nav.contact":"Contact", "nav.cta":"Chat on WhatsApp",
    "hero.kicker":"SHOWREEL — 2026", "hero.title1":"Mark Salah", "hero.title2":"Video", "hero.title3":"Editor",
    "hero.role":"Video Editor &amp; Motion Designer",
    "hero.desc":"I turn raw footage into a story with rhythm and feel — from the cut and the timing down to the color and the motion graphics. Every project is treated as a story, not just clips glued together.",
    "hero.btnWork":"See the work", "hero.btnBook":"Book a project",
    "hero.stat1":"projects delivered", "hero.stat2":"years of experience", "hero.stat3":"happy clients",
    "about.eyebrow":"— about", "about.title":"Not just editing.<br>It's visual storytelling",
    "about.p1":"Hey, I’m Mark Salah I’ve been working in video editing and photography for over 2 years, collaborating with clients both in Egypt and internationally. So far, I’ve worked on 30+ projects across video editing, photography, and visual content.",
    "about.p2":" For me, video editing is more than just cutting clips together. It’s about turning raw footage into something that has a story, rhythm, emotion, and a reason to keep watching.",
    "about.p3":"If your content needs a professional look and a consistent visual identity, I'm here to help you get there.",
    "about.tag1":"Motion Graphics", "about.tag2":"Color Grading",
    "about.meta1":"Specialty", "about.meta2":"Also does", "about.meta3":"Location", "about.meta4":"Availability", "about.available":"● Available",
    "work.eyebrow":"— work", "work.title":"Some of my work",
    "work.sub":"A selection of recent work. Hit play to watch any video.",
    "feedback.eyebrow":"— feedback", "feedback.title":"What clients say",
    "feedback.sub":"Real feedback from clients I've worked with on different projects.",
    "contact.eyebrow":"— contact", "contact.title1":"Ready to start", "contact.title2":"your project?",
    "contact.sub":"Send me the details of the video you need, and I'll reply fast on WhatsApp.",
    "contact.btnWa":"Message on WhatsApp", "contact.btnMail":"Send an email",
    "footer.role":"Video Editor &amp; Motion Designer",
  }
};

/* =========================================================
   VIDEO & TESTIMONIAL DATA — عدّل هنا اللينكات والآراء (باللغتين)
   ========================================================= */
const videos = [
  { tag: { ar:"الشغف يحرك الهواه", en:"Motivation make the beginners run" }, title: { ar:"فيديو مونتاج لصلاح ابرو المجد", en:"salah abu elmagd's video" }, youtubeId: "7s_X8wRkwvM" },
  { tag: { ar:"Virtual office", en:"Virtual office" }, title: { ar:"فيديو تسويقي لمكتب", en:"Virtual office video" }, youtubeId: "kD7EDe-ilRc" },
  { tag: { ar:"interior result", en:"interior result" }, title: { ar:"Interior result video", en:"Interior result video" }, youtubeId: "GBPxz_Ro_Xs" },
  { tag: { ar:"Commercial", en:"Commercial" }, title: { ar:"نتيجة تسليم نهائية", en:"Final delivery result" }, youtubeId: "mh-PkhbRnVk" },
  { tag: { ar:"Reel", en:"Reel" }, title: { ar:"أنواع الخشب", en:"wood types" }, youtubeId: "YdEJbDDd1yo" },
];

// const testimonials = [
//   { name: { ar:"اسم العميل", en:"Client name" }, role: { ar:"صاحب قناة يوتيوب", en:"YouTube channel owner" }, text: { ar:"اكتب هنا رأي العميل عن شغلك... التسليم في الميعاد وجودة المونتاج كانت ممتازة.", en:"Write the client's feedback here... delivery was on time and the edit quality was excellent." } },
//   { name: { ar:"اسم العميل", en:"Client name" }, role: { ar:"براند تجاري", en:"Commercial brand" }, text: { ar:"اكتب هنا رأي عميل تاني... الموشن جرافيك والألوان طلعوا بالظبط زي ما كنا محتاجين.", en:"Write another client's feedback... the motion graphics and colors came out exactly as we needed." } },
//   { name: { ar:"اسم العميل", en:"Client name" }, role: { ar:"صاحب مشروع", en:"Business owner" }, text: { ar:"اكتب هنا رأي تالت... تعامل احترافي وسرعة في التواصل والتعديلات.", en:"Write a third testimonial... professional to work with and fast on communication and revisions." } },
//   { name: { ar:"اسم العميل", en:"Client name" }, role: { ar:"منشئ محتوى", en:"Content creator" }, text: { ar:"اكتب هنا رأي رابع... الفيديوهات طلعت بشكل سينمائي فعلاً.", en:"Write a fourth testimonial... the videos genuinely came out with a cinematic feel." } },
// ];

let currentLang = 'ar';

function renderWork(lang){
  const workGrid = document.getElementById('workGrid');
  workGrid.innerHTML = '';
  videos.forEach((v) => {
    const clip = document.createElement('div');
    clip.className = 'clip';
    const title = v.title[lang];
    const tag = v.tag[lang];
    if (!v.youtubeId) {
      const hint = lang === 'ar' ? 'ضيف رابط الفيديو في المصفوفة videos ⬆' : 'Add a video link in the videos array above';
      clip.innerHTML = `<div class="clip-empty">${tag}<br>${hint}</div>`;
    } else {
      clip.innerHTML = `
        <div class="clip-thumb">
          <img src="imgs\\beyond frame.jpg" alt="${title}" loading="lazy">
          <div class="clip-meta"><div class="clip-tag">${tag}</div><div class="clip-title">${title}</div></div>
        </div>
        <div class="play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      `;
      clip.addEventListener('click', () => {
        clip.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }, { once: true });
    }
    workGrid.appendChild(clip);
  });
}

// function renderFeedback(lang){
//   const fbGrid = document.getElementById('fbGrid');
//   fbGrid.innerHTML = '';
//   testimonials.forEach((t) => {
//     const name = t.name[lang], role = t.role[lang], text = t.text[lang];
//     const initials = name.trim().split(' ').map(w => w[0]).slice(0,2).join('');
//     const card = document.createElement('div');
//     card.className = 'fb-card';
//     card.innerHTML = `
//       <div class="fb-quote-mark">"</div>
//       <p class="fb-text">${text}</p>
//       <div class="fb-person">
//         <div class="fb-avatar">${initials}</div>
//         <div><div class="fb-name">${name}</div><div class="fb-role">${role}</div></div>
//       </div>
//     `;
//     fbGrid.appendChild(card);
//   });
// }

function setLang(lang){
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.getElementById('btnAr').classList.toggle('active', lang === 'ar');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');

  renderWork(lang);
//   renderFeedback(lang);

  try { localStorage.setItem('ms_lang', lang); } catch(e){}
}

/* init: restore saved language if available */
(function initLang(){
  let saved = 'ar';
  try { saved = localStorage.getItem('ms_lang') || 'ar'; } catch(e){}
  setLang(saved);
})();

/* scroll progress */
const scrubFill = document.getElementById('scrubFill');
function updateScrub(){
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const height = h.scrollHeight - h.clientHeight;
  const pct = height > 0 ? (scrolled / height) * 100 : 0;
  scrubFill.style.width = pct + '%';
}
document.addEventListener('scroll', updateScrub, { passive:true });
updateScrub();

/* reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  navLinks.style.cssText += open ? '' : `
    position:fixed; top:70px; left:20px; right:20px;
    background:var(--panel); border:1px solid var(--line);
    border-radius:14px; flex-direction:column; padding:20px; gap:20px; z-index:901;
  `;
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 980) navLinks.style.display = 'none';
}));
