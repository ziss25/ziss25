const PROJECT_BTN = document.querySelector('.projects-btn');
const SKILL_BTN = document.querySelector('.skils-btn');
const SKILL_OUTPUT = document.querySelector('.skill');
const PROJECT_OUTPUT = document.querySelector('.project');
const CONTENT = document.querySelector('.content');
const scroll_down = document.querySelector('.scroll-down');
// init light
let isFillterLight = false;
// init dark mode
let isdark = false;

// toogle dark mode
const toogleMode = document.getElementById('toogle-dark-mode');
PROJECT_BTN.addEventListener('click', () => {
  if (isFillterLight) {
    PROJECT_BTN.style.backgroundColor = '#e5e7eb';
    PROJECT_BTN.style.transition = 'all 300ms';
    SKILL_BTN.style.backgroundColor = '#fff';
  } else {
    SKILL_BTN.style.backgroundColor = 'hsl(207, 24%, 12%)';
    PROJECT_BTN.style.transition = 'all 300ms';
    PROJECT_BTN.style.backgroundColor = 'hsl(207, 40%, 8%)';
  }
  console.log('project on');
  console.log('skill of');

  // menghilangkan content skill if click btn project... walaupun start awal dia tampil tapi tidak apa menimpa nya juga tidak ada masalah ... , dan juga kalo nanti udah berubah langsung kembali kesini aja.... jadi aman
  // tambahin class none nya
  SKILL_OUTPUT.classList.add('none');
  PROJECT_OUTPUT.classList.remove('none');
});

SKILL_BTN.addEventListener('click', () => {
  if (isFillterLight) {
    SKILL_BTN.style.backgroundColor = '#e5e7eb ';
    SKILL_BTN.style.transition = 'all 300ms';
    PROJECT_BTN.style.backgroundColor = '#fff ';
  } else {
    PROJECT_BTN.style.backgroundColor = 'hsl(207, 24%, 12%)';
    SKILL_BTN.style.transition = 'all 300ms';
    SKILL_BTN.style.backgroundColor = 'hsl(207, 40%, 8%)';
  }
  console.log('project off');
  console.log('skill on');

  // menampilkan content skill if click btn skil
  // hapus class none nya
  PROJECT_OUTPUT.classList.add('none');
  SKILL_OUTPUT.classList.remove('none');
});

toogleMode.addEventListener('click', darkTheme);

// pengecekan scroll jika scroll nya sampai batas tertentu dan hilangkan tulisan scroll down nya
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scroll_down.style.opacity = '0';
  } else {
    // dan kemablikan if posisi nya pas
    scroll_down.style.opacity = '1';
  }
});

// function render color sesuai dengan theme nya
function darkColor() {
  const hslColor = '207';
  if (isdark) {
    let titleColor = `hsl(${hslColor}, 12%, 95%)`;
    let textColor = `hsl(${hslColor}, 12%, 75%)`;
    let bodyColor = `hsl(${hslColor}, 40%, 8%)`;
    let containerColor = `hsl(${hslColor}, 24%, 12%)`;
    return { titleColor, textColor, bodyColor, containerColor };
  } else {
    let titleColor = ` hsl(${hslColor}, 12%, 15%)`;
    let textColor = ` hsl(${hslColor}, 12%, 45%)`;
    let bodyColor = `hsl(${hslColor}, 100%, 99%)`;
    let containerColor = `#fff`;
    return { titleColor, textColor, bodyColor, containerColor };
  }
}

// pengecekan dan render colors berdasarkan theme
function darkTheme() {
  const { titleColor, textColor, bodyColor, containerColor } = darkColor();
  const body = document.getElementById('body');
  const header = document.querySelector('header');
  const titles_color = document.querySelectorAll('.title_colors');
  const texts_color = document.querySelectorAll('.text_colors');
  const contain_color = document.querySelectorAll('.contain_colors');
  const body_color = document.querySelectorAll('.body_colors');

  // box shadow dark mode
  const project_item = document.querySelectorAll('.project__item');

  bgColor(body, bodyColor);
  bgColor(header, containerColor);

  // meyesuaikan colors masing" elements
  titles_color.forEach((e) => txtColor(e, titleColor));
  texts_color.forEach((e) => txtColor(e, textColor));
  contain_color.forEach((e) => bgColor(e, containerColor));
  body_color.forEach((e) => bgColor(e, bodyColor));
  project_item.forEach((e) => bgColor(e, containerColor));

  // set value agar sesuai dengan pengecekan selanjutnya
  if (isdark == true) {
    isdark = false;
    isFillterLight = false;
  } else {
    isdark = true;
    isFillterLight = true;
  }
  console.log(isdark);
}

// function tambahan
function bgColor(element, valueBackground) {
  element.style.backgroundColor = valueBackground;
}
function txtColor(element, value) {
  element.style.color = value;
}

darkTheme();

// sweetalert
const linkedin = document.querySelector('.linkedin');
const messenger = document.querySelector('.messenger');
linkedin.addEventListener('click', () => {
  Swal.fire({
    position: 'top-end',
    title: 'sory...kaga punya linkedin',
    showConfirmButton: false,
    timer: 2000,
    icon: 'error',
  });
});
messenger.addEventListener('click', () => {
  Swal.fire({
    icon: 'error',
    position: 'top-end',
    title: 'sory...kaga punya messenger:)',
    showConfirmButton: false,
    timer: 2000,
  });
});

console.log(linkedin);
