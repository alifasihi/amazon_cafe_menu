const menuData = [
  {
    "section": "اسپرسو بار",
    "items": [
      { "name": "اسپرسو ۷۰/۳۰", "price": "۵۰,۰۰۰" },
      { "name": "اسپرسو ۵۰/۵۰", "price": "۵۵,۰۰۰" },
      { "name": "اسپرسو ۱۰۰ روبوستا", "price": "۴۵,۰۰۰" },
      { "name": "اسپرسو ۱۰۰ عربیکا", "price": "۶۵,۰۰۰" },
      { "name": "آمریکانو", "price": "۶۰,۰۰۰" },
      { "name": "ماکیاتو", "price": "۹۰,۰۰۰" },
      { "name": "کارامل ماکیاتو", "price": "۱۰۰,۰۰۰" },
      { "name": "لته", "price": "۱۰۰,۰۰۰" },
      { "name": "لته فندق", "price": "۱۱۰,۰۰۰" },
      { "name": "موکا ", "price": "۱۰۵,۰۰۰" },
    ]
  },
  {
    "section": "نوشیدنی های سرد بر پایه قهوه",
    "items": [
      { "name": "آیس آمریکانو", "price": "۷۵,۰۰۰" },
      { "name": "آیس ماکیاتو", "price": "۱۰۰,۰۰۰" },
      { "name": "آیس لته", "price": "۱۱۰,۰۰۰" },
      { "name": "آیس موکا", "price": "۱۱۵,۰۰۰" },
      { "name": "آفوگاتو", "price": "۸۵,۰۰۰" },
      // { "name": "آفوگاتو دبی", "price": "۱۲۵,۰۰۰" },
      { "name": "دالگونا", "price": "۱۲۰,۰۰۰" },
    ]
  },
  // {
  //   "section": "شیک‌ها",
  //   "items": [
  //     { "name": "کره بادام زمینی", "price": "۱۱۰,۰۰۰" },
  //     { "name": "اورتو", "price": "۱۰۵,۰۰۰" },
  //     { "name": "مور شکلات", "price": "۱۱۵,۰۰۰" },
  //     { "name": "هایکا", "price": "۱۱۰,۰۰۰" },
  //     { "name": "نوتلا", "price": "۱۲۰,۰۰۰" },
  //     { "name": "لوتوس", "price": "۱۲۵,۰۰۰" },
  //     { "name": "توت فرنگی پسته", "price": "۱۳۵,۰۰۰" }
  //   ]
  // },

  {
    "section": "نوشیدنی های گرم",
    "items": [
      { "name": "هات چاکلت", "price": "۱۰۰,۰۰۰" },
      { "name": "ماسالا", "price": "۹۰,۰۰۰" },
      { "name": "چای", "price": "۵۰,۰۰۰" },
      { "name": "انواع دمنوش", "price": "۷۵,۰۰۰" },
      { "name": "کرک", "price": "۹۰,۰۰۰" },
      { "name": "کاپوچینو", "price": "۹۰,۰۰۰" },
      { "name": "ترک", "price": "۷۰,۰۰۰" },
    ]
  },
  // {
  //   "section": "اضافات",
  //   "items": [
  //     // { "name": "مور (آیمیوه)", "price": "۹۰,۰۰۰" },
  //     // { "name": "هویج (آیمیوه)", "price": "۸۵,۰۰۰" },
  //     { "name": "سیروپ اضافه", "price": "۱۵,۰۰۰" },
  //     // { "name": "هر اسکوپ بستنی", "price": "۳۰,۰۰۰" }
  //   ]
  // },
  // {
  //   "section": "ماکتیل",
  //   "items": [
  //     { "name": "موهیتو", "price": "۹۵,۰۰۰" },
  //     { "name": "لیموناد", "price": "۸۵,۰۰۰" },
  //     { "name": "موهیتو استروبری", "price": "۱۰۰,۰۰۰" },
  //     { "name": "کوبا لیبره", "price": "۱۰۵,۰۰۰" },
  //     { "name": "رد چری", "price": "۹۵,۰۰۰" },
  //     { "name": "لیموناد آلوئه ورا", "price": "۹۰,۰۰۰" }
  //   ]
  // }
];


// تابع ساخت و رندر منو
function renderMenu() {
  const container = document.getElementById('menuContainer');

  menuData.forEach(section => {
    // ساخت کارت بخش
    const card = document.createElement('div');
    card.className = 'card';

    // عنوان بخش
    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = section.section;
    card.appendChild(title);

    // گرید آیتم‌ها
    const grid = document.createElement('div');
    grid.className = 'grid';

    section.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'item';

      const name = document.createElement('div');
      name.className = 'item-name';
      name.textContent = item.name;

      const price = document.createElement('div');
      price.className = 'item-price';
      price.textContent = item.price + ' تومان';

      itemDiv.appendChild(name);
      itemDiv.appendChild(price);
      grid.appendChild(itemDiv);
    });

    card.appendChild(grid);
    container.appendChild(card);
  });

  // یادداشت پایینی
  const footer = document.createElement('div');
  footer.className = 'footer-note';
  footer.textContent = 'تمامی قیمت‌ها به تومان می‌باشد';
  container.appendChild(footer);
}

// رندر منو بعد از لود صفحه
document.addEventListener('DOMContentLoaded', renderMenu);
