    // Theme toggle (persist) — apply attribute only for light mode
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    if(saved === 'light'){ root.setAttribute('data-theme', 'light'); } else { root.removeAttribute('data-theme'); }
    themeToggle?.addEventListener('click', () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      if(isLight){
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id = a.getAttribute('href');
        const el = document.querySelector(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    });

    // Mobile menu toggle
    const menubtn = document.getElementById("menubtn");
    const menulist = document.getElementById("menulist");
    
    menubtn.addEventListener("click", () => {
      menulist.classList.toggle("show");
      menubtn.textContent = menulist.classList.contains("show") 
        ? "✕" 
        : "☰";
    });


    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (menulist.classList.contains('show') && 
          !menulist.contains(e.target) && 
          e.target !== menubtn) {
        menulist.classList.remove('show');
        menubtn.textContent = '☰';
      }
    });

    // Close mobile menu when a link is clicked
    const menuItems = document.querySelectorAll(".menu-item a, .menu-item button");
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menulist.classList.remove('show');
        menubtn.textContent = '☰';
      });
    });

    // Back to top button
    const backToTopBtn = document.getElementById("backToTop");
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
