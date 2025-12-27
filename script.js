const menuData = [
  {
    "section": "بار سرد بر پایه قهوه",
    "items": [
      { "name": "آیس لته", "price": "۸۵,۰۰۰" },
      { "name": "آیس آمریکانو", "price": "۷۵,۰۰۰" },
      { "name": "آفوگاتو", "price": "۱۱۵,۰۰۰" },
      { "name": "آفوگاتو دبی", "price": "۱۴۰,۰۰۰" },
      { "name": "فراپه دارچین", "price": "۹۵,۰۰۰" }
    ]
  },
  {
    "section": "شیک‌ها",
    "items": [
      { "name": "کره بادام زمینی", "price": "۱۱۰,۰۰۰" },
      { "name": "اورتو", "price": "۱۰۵,۰۰۰" },
      { "name": "مور شکلات", "price": "۱۱۵,۰۰۰" },
      { "name": "هایکا", "price": "۱۱۰,۰۰۰" },
      { "name": "نوتلا", "price": "۱۲۰,۰۰۰" },
      { "name": "لوتوس", "price": "۱۲۵,۰۰۰" },
      { "name": "توت فرنگی پسته", "price": "۱۳۵,۰۰۰" }
    ]
  },
  {
    "section": "آیمیوه و اضافات",
    "items": [
      { "name": "مور (آیمیوه)", "price": "۹۰,۰۰۰" },
      { "name": "هویج (آیمیوه)", "price": "۸۵,۰۰۰" },
      { "name": "سیروپ اضافه", "price": "۲۰,۰۰۰" },
      { "name": "هر اسکوپ بستنی", "price": "۳۰,۰۰۰" }
    ]
  },
  {
    "section": "اسپرسو بار",
    "items": [
      { "name": "اسپرسو سینگل", "price": "۶۵,۰۰۰" },
      { "name": "اسپرسو دابل", "price": "۸۵,۰۰۰" },
      { "name": "لته", "price": "۹۵,۰۰۰" },
      { "name": "موکا ماکیاتو", "price": "۱۱۰,۰۰۰" },
      { "name": "آمریکانو", "price": "۷۵,۰۰۰" },
      { "name": "کارامل ماکیاتو", "price": "۱۱۵,۰۰۰" },
      { "name": "کاپوچینو", "price": "۱۰۰,۰۰۰" },
      { "name": "لته دارچین", "price": "۱۰۵,۰۰۰" }
    ]
  },
  {
    "section": "بار گرم",
    "items": [
      { "name": "هات چاکلت", "price": "۹۵,۰۰۰" },
      { "name": "شیر کاتلو", "price": "۹۰,۰۰۰" },
      { "name": "ماسالا", "price": "۸۵,۰۰۰" },
      { "name": "هات دبی", "price": "۱۲۰,۰۰۰" },
      { "name": "چای", "price": "۵۰,۰۰۰" },
      { "name": "انواع دمنوش", "price": "۷۵,۰۰۰" },
      { "name": "عصاره زنجبیل", "price": "۸۰,۰۰۰" },
      { "name": "کرک", "price": "۹۰,۰۰۰" }
    ]
  },
  {
    "section": "ماکتیل",
    "items": [
      { "name": "موهیتو", "price": "۹۵,۰۰۰" },
      { "name": "لیموناد", "price": "۸۵,۰۰۰" },
      { "name": "موهیتو استروبری", "price": "۱۰۰,۰۰۰" },
      { "name": "کوبا لیبره", "price": "۱۰۵,۰۰۰" },
      { "name": "رد چری", "price": "۹۵,۰۰۰" },
      { "name": "لیموناد آلوئه ورا", "price": "۹۰,۰۰۰" }
    ]
  }
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
