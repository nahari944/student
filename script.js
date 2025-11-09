
    // 1️⃣ Smooth scroll
  const navLinks = document.querySelectorAll('.nav_links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // 2️⃣ Reveal animation عند الوصول
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // 3️⃣ Active link highlight
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100; // Offset to consider fixed navbar
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if(section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos){
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
  

  document.querySelector('.cta').addEventListener('click', function(e){
    e.preventDefault(); // لمنع الانتقال المفاجئ
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


document.querySelectorAll('.hero-btn, .cta').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault(); // لمنع الانتقال المفاجئ
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});




const form = document.querySelector('.contact-form');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok) {
      // اظهار الرسالة
      successMsg.classList.add('active');

      // اختفاء الرسالة بعد 3 ثواني
      setTimeout(() => {
        successMsg.classList.remove('active');
      }, 3000);

      form.reset();
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  })
});



document.querySelectorAll('.hero-btn, .cta, .learn-btn').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault(); 
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});






