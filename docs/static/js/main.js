// 晓勇 · 个人主页 —— 单页交互
document.addEventListener('DOMContentLoaded', function () {

    /* ---------- 移动端导航菜单 ---------- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    function closeMenu() {
        hamburger && hamburger.classList.remove('active');
        navMenu && navMenu.classList.remove('active');
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hamburger.click(); }
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    /* ---------- 平滑滚动（锚点） ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------- 导航栏滚动样式 ---------- */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    /* ---------- 导航 active 高亮（区块滚动监听） ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        const scrollPos = window.scrollY + 120;
        let current = '';
        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop) current = sec.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

    /* ---------- 滚动揭示动画 ---------- */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ---------- 数字计数动画 ---------- */
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                numberObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.highlight-number').forEach(el => numberObserver.observe(el));

    /* ---------- 项目过滤 ---------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            projectItems.forEach(item => {
                const match = filter === 'all' || item.getAttribute('data-category') === filter;
                item.style.display = match ? '' : 'none';
                if (match) { item.classList.remove('visible'); void item.offsetWidth; item.classList.add('visible'); }
            });
        });
    });

    /* ---------- 返回顶部 ---------- */
    createBackToTopButton();

    /* ---------- 键盘导航 ---------- */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
});

/* ===================== 辅助函数 ===================== */
function animateNumber(element) {
    const raw = element.textContent.trim();
    const target = parseInt(raw.replace(/[^\d]/g, ''), 10);
    if (isNaN(target)) return;
    const suffix = raw.replace(/[\d]/g, '');
    let current = 0;
    const steps = 45;
    const increment = target / steps;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) { current = target; clearInterval(timer); }
        element.textContent = Math.floor(current) + suffix;
    }, 25);
}

function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', '返回顶部');
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(button);
    window.addEventListener('scroll', () => {
        button.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
}
