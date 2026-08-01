/* ==========================================================================
   ROYKA — Interactive Engine & Internationalization (i18n)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Language Dictionary (TR / EN) --- */
    const translations = {
        tr: {
            "nav.about": "Hakkımızda",
            "nav.services": "Hizmetler",
            "nav.why_annual": "Neden Destek?",
            "nav.tech": "Teknolojiler",
            "nav.faq": "SSS",
            "nav.contact": "İletişime Geç",
            
            "hero.badge1": "Yazılım Bakımı",
            "hero.badge2": "Özel Geliştirme",
            "hero.badge3": "Teknik Eğitim",
            "hero.title_p1": "Bir Kez İnşa Et.",
            "hero.title_p2": "Sonsuza Dek Geliştir.",
            "hero.subtitle": "ROYKA, uzun vadeli mühendislik ortaklıkları aracılığıyla işletmelerin yazılımlarını sürdürmelerine, geliştirmelerine ve büyütmelerine yardımcı olur.",
            "hero.cta_primary": "Yıllık Desteği Başlat",
            "hero.cta_secondary": "Yeni Proje Geliştir",
            "hero.cta_tertiary": "Eğitim & Danışmanlık hizmetlerimizi de inceleyin",
            
            "trust.title": "Sadece Yazılımcı Değil, Teknoloji Ortağı",
            "trust.subtitle": "Geliştirme sürecimizin ve uzun vadeli ortaklığımızın temelini oluşturan ilkelerimiz.",
            "trust.card1_title": "Şeffaf İletişim",
            "trust.card1_desc": "Süreçlerimizin her adımı açıktır. Gizli maliyetler veya anlaşılmayan teknik karmaşalar yoktur.",
            "trust.card2_title": "Mühendislik Standartları",
            "trust.card2_desc": "Sürdürülebilir, güvenli, test edilebilir ve ölçeklenebilir kod mimarisi inşa ederiz.",
            "trust.card3_title": "Sürekli Destek",
            "trust.card3_desc": "Canlıya alım sonrası kaybolmayız. Yazılımınızın her gün sorunsuz çalışmasını sağlarız.",
            "trust.card4_title": "Uzun Vadeli Ortaklık",
            "trust.card4_desc": "İşinizi anlar, hedeflerinize uyum sağlar ve harici bir yazılım ekibiniz gibi çalışırız.",
            
            "services.tag": "Hizmetlerimiz",
            "services.title": "İhtiyacınıza Özel Mühendislik Çözümleri",
            "services.featured_badge": "Öne Çıkan Hizmet",
            "services.s1_title": "Yıllık Yazılım Desteği & Bakımı",
            "services.s1_subtitle": "Sistemlerinizin her zaman güvenli, hızlı ve güncel kalmasını sağlayan sürekli mühendislik ortaklığı.",
            "services.s1_f1": "Web sitesi ve uygulama bakımı",
            "services.s1_f2": "Hata (Bug) tespiti ve hızlı onarım",
            "services.s1_f3": "Yeni özellik (Feature) geliştirme",
            "services.s1_f4": "Performans ve veritabanı optimizasyonu",
            "services.s1_f5": "Güvenlik güncellemeleri & SSL takibi",
            "services.s1_f6": "Sunucu, Domain & Yedekleme yönetimi",
            "services.s1_cta": "Anlaşma Yapalım",
            
            "services.s2_title": "Özel Yazılım Geliştirme",
            "services.s2_desc": "Kurumsal ihtiyaçlarınıza tam uyumlu sıfırdan modern web uygulamaları, mikrohizmetler, REST API'ler ve yönetim panelleri inşa ediyoruz.",
            "services.s3_title": "Yazılım & Kurumsal Eğitim",
            "services.s3_desc": "Ekibinizi modern yazılım mimarileri, Java Spring Boot, mikrohizmetler ve en iyi kodlama pratikleri konusunda üst seviyeye taşıyoruz.",
            "services.s3_badge": "Uzmanlık Alanımız",
            
            "why_annual.tag": "Döngüsel Mühendislik",
            "why_annual.title": "Neden Yıllık Destek?",
            "why_annual.subtitle": "Yazılım biten bir süreç değil, sürekli yaşayan bir organizmadır.",
            "timeline.step1_title": "1. Yayınlama (Launch)",
            "timeline.step1_desc": "Sistem güvenli ve test edilmiş şekilde canlıya alınır.",
            "timeline.step2_title": "2. İzleme (Monitor)",
            "timeline.step2_desc": "Sunucu yükü, hatalar ve performans 7/24 takip edilir.",
            "timeline.step3_title": "3. Onarım (Fix)",
            "timeline.step3_desc": "Olası aksaklıklar ve hatalar anında müdahale ile çözülür.",
            "timeline.step4_title": "4. Geliştirme (Improve)",
            "timeline.step4_desc": "Kullanıcı geri bildirimlerine göre yeni modüller eklenir.",
            "timeline.step5_title": "5. Güvenlik (Secure)",
            "timeline.step5_desc": "Sistem yamaları uygulanır, açıklar kapatılır.",
            "timeline.step6_title": "6. Ölçekleme (Scale)",
            "timeline.step6_desc": "Büyüyen kullanıcı trafiğine göre mimari güçlendirilir.",
            
            "story.tag": "Felsefemiz",
            "story.title": "Yazılıma Farklı Bir Bakış Aşılamak",
            "story.p1": "Çoğu şirket yazılımı teslim edilip biten bir ürün olarak görür. Ancak teknoloji her gün değişir, tarayıcılar güncellenir, güvenlik tehditleri gelişir ve işinizin ihtiyaçları başkalaşır.",
            "story.p2": "ROYKA, 'Daha büyük değil, daha iyi' felsefesiyle kuruldu. Amacımız kısa süreli projeler bitirip ortadan kaybolmak değil, şirketlerin teknolojisine uzun yıllar yön veren güvenilir mühendislik ortağı olmaktır.",
            "story.stat1_value": "Birebir",
            "story.stat1": "Kurucu ile Doğrudan İletişim",
            "story.stat2_value": "Clean Code",
            "story.stat2": "Test Edilebilir & Sürdürülebilir Mimari",
            "story.stat3_value": "~24 Saat",
            "story.stat3": "Ortalama Geri Dönüş Süresi",
            
            "tech.tag": "Teknoloji Yığınımız",
            "tech.title": "Modern & Ölçeklenebilir Araçlar",
            
            "faq.tag": "Merak Edilenler",
            "faq.title": "Sıkça Sorulan Sorular",
            "faq.q1": "Yıllık Yazılım Desteği neleri kapsar?",
            "faq.a1": "Sitenizin/uygulamanızın düzenli yedeklenmesi, güvenlik güncellemeleri, karşılaşılan hataların onarılması, küçük yeni özellik talepleri ve sunucu/domain takibi bu hizmet kapsamındadır.",
            "faq.q2": "Mevcut bir sitemizi/uygulamamızı devralabilir misiniz?",
            "faq.a2": "Evet. Kod yapınızı ve altyapınızı inceledikten sonra gerekli iyileştirme raporunu çıkarır ve bakım/geliştirme sürecini üstleniriz.",
            "faq.q3": "Tepki ve müdahale süreleriniz (SLA) nasıldır?",
            "faq.a3": "Kritik ve sistemi durduran acil durumlarda öncelikli müdahale sağlar, rutin taleplerinizi ise planlanan çalışma takviminde hızla hayata geçiririz.",
            "faq.q4": "Sıfırdan bir proje geliştirmek ne kadar sürer?",
            "faq.a4": "Projenin kapsamına, gereksinimlerine ve entegrasyon ihtiyacına göre değişir. Detaylı analiz aşamasından sonra net bir yol haritası ve takvim sunarız.",
            
            "contact.tag": "İletişim",
            "contact.title": "Teknolojinizi Birlikte Büyütelim",
            "contact.desc": "İster yıllık destek anlaşması ister yeni bir proje için olsun; projelerinizi konuşmak üzere bize mesaj gönderebilirsiniz.",
            "form.name": "Adınız / Şirketiniz",
            "form.email": "E-Posta Adresiniz",
            "form.service": "İlgilendiğiniz Hizmet",
            "form.opt1": "Yıllık Yazılım Desteği",
            "form.opt2": "Özel Yazılım Geliştirme",
            "form.opt3": "Yazılım Eğitimi / Danışmanlık",
            "form.message": "Mesajınız",
            "form.consent": "<a href=\"#\" class=\"privacy-trigger\">Gizlilik Politikası</a>'nı okudum, kişisel verilerimin bu form kapsamında işlenmesini kabul ediyorum.",
            "form.submit": "Mesajı Gönder",
            
            "footer.desc": "Sürekli Mühendislik & Uzun Vadeli Ortaklık.",
            "footer.privacy": "Gizlilik Politikası"
        },
        en: {
            "nav.about": "About Us",
            "nav.services": "Services",
            "nav.why_annual": "Why Support?",
            "nav.tech": "Technologies",
            "nav.faq": "FAQ",
            "nav.contact": "Get in Touch",
            
            "hero.badge1": "Website Maintenance",
            "hero.badge2": "Software Development",
            "hero.badge3": "Software Education",
            "hero.title_p1": "Built Once.",
            "hero.title_p2": "Improved Forever.",
            "hero.subtitle": "ROYKA helps businesses maintain, improve and grow their software through long-term engineering partnerships.",
            "hero.cta_primary": "Start Annual Support",
            "hero.cta_secondary": "Build New Project",
            "hero.cta_tertiary": "Check out our Education & Consulting services",
            
            "trust.title": "Technology Partners, Not Just Developers",
            "trust.subtitle": "Principles that form the foundation of our engineering process and long-term partnership.",
            "trust.card1_title": "Transparent Communication",
            "trust.card1_desc": "Every step of our process is clear. No hidden costs or confusing technical jargon.",
            "trust.card2_title": "Engineering Best Practices",
            "trust.card2_desc": "We construct sustainable, secure, testable and scalable code architectures.",
            "trust.card3_title": "Continuous Support",
            "trust.card3_desc": "We don't disappear after launch. We ensure your software runs smoothly every single day.",
            "trust.card4_title": "Long-Term Partnership",
            "trust.card4_desc": "We understand your business, align with your goals and act as your dedicated external engineering team.",
            
            "services.tag": "Our Services",
            "services.title": "Tailored Engineering Solutions",
            "services.featured_badge": "Featured Service",
            "services.s1_title": "Annual Software Support & Maintenance",
            "services.s1_subtitle": "Continuous engineering partnership ensuring your systems remain secure, fast and up to date.",
            "services.s1_f1": "Website and application maintenance",
            "services.s1_f2": "Bug detection and fast remediation",
            "services.s1_f3": "Feature development & improvements",
            "services.s1_f4": "Performance & database optimization",
            "services.s1_f5": "Security patches & SSL tracking",
            "services.s1_f6": "Server, Domain & Backup management",
            "services.s1_cta": "Start Support Plan",
            
            "services.s2_title": "Custom Software Development",
            "services.s2_desc": "We build modern web applications, microservices, REST APIs and custom dashboards tailored specifically to your enterprise needs.",
            "services.s3_title": "Software Education & Mentoring",
            "services.s3_desc": "We elevate your engineering teams through specialized training on modern software architecture, Java Spring Boot, and best practices.",
            "services.s3_badge": "Our Specialty",
            
            "why_annual.tag": "Continuous Engineering",
            "why_annual.title": "Why Annual Support?",
            "why_annual.subtitle": "Software is not a finished product; it is a living organism.",
            "timeline.step1_title": "1. Launch",
            "timeline.step1_desc": "System is securely deployed to production.",
            "timeline.step2_title": "2. Monitor",
            "timeline.step2_desc": "Server load, errors and performance are monitored 24/7.",
            "timeline.step3_title": "3. Fix",
            "timeline.step3_desc": "Unforeseen issues and bugs are immediately resolved.",
            "timeline.step4_title": "4. Improve",
            "timeline.step4_desc": "New features are implemented based on user feedback.",
            "timeline.step5_title": "5. Secure",
            "timeline.step5_desc": "Security patches are applied and vulnerabilities sealed.",
            "timeline.step6_title": "6. Scale",
            "timeline.step6_desc": "Architecture is expanded to handle growing user traffic.",
            
            "story.tag": "Our Philosophy",
            "story.title": "Redefining Software Engineering",
            "story.p1": "Most agencies treat software as a one-time project. However, technology evolves, browsers update, security threats emerge and your business needs change.",
            "story.p2": "ROYKA was built on the philosophy 'Not bigger. Better.' Our goal isn't to launch quick projects and disappear, but to be a trusted engineering partner guiding your tech stack for years.",
            "story.stat1_value": "Direct",
            "story.stat1": "Founder-Level Access",
            "story.stat2_value": "Clean Code",
            "story.stat2": "Testable & Maintainable Architecture",
            "story.stat3_value": "~24h",
            "story.stat3": "Average Response Time",
            
            "tech.tag": "Our Tech Stack",
            "tech.title": "Modern & Scalable Tools",
            
            "faq.tag": "Got Questions?",
            "faq.title": "Frequently Asked Questions",
            "faq.q1": "What does Annual Software Support cover?",
            "faq.a1": "It covers routine backups, security patches, bug fixes, minor feature requests, server monitoring and domain/SSL management.",
            "faq.q2": "Can you take over our existing codebase?",
            "faq.a2": "Yes. After reviewing your current codebase and infrastructure, we provide an optimization roadmap and assume ongoing maintenance.",
            "faq.q3": "What are your response times (SLA)?",
            "faq.a3": "Critical outages receive emergency priority, while feature requests are scheduled into fast development sprints.",
            "faq.q4": "How long does custom software development take?",
            "faq.a4": "Timeline depends on scope and integration requirements. We provide a definitive roadmap after our initial discovery phase.",
            
            "contact.tag": "Contact Us",
            "contact.title": "Let's Scale Your Software Together",
            "contact.desc": "Whether for annual software support or a brand new engineering project, send us a message to discuss your goals.",
            "form.name": "Your Name / Company",
            "form.email": "Your Email Address",
            "form.service": "Service of Interest",
            "form.opt1": "Annual Software Support",
            "form.opt2": "Custom Software Development",
            "form.opt3": "Software Education / Mentoring",
            "form.message": "Your Message",
            "form.consent": "I have read the <a href=\"#\" class=\"privacy-trigger\">Privacy Policy</a> and consent to my personal data being processed for this form.",
            "form.submit": "Send Message",
            
            "footer.desc": "Continuous Software Engineering & Long-Term Partnership.",
            "footer.privacy": "Privacy Policy"
        }
    };

    let currentLang = localStorage.getItem('royka_lang') || 'tr';

    const switchLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('royka_lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Toggle active styling on buttons
        document.querySelectorAll('.lang-option').forEach(opt => {
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'tr' ? 'en' : 'tr';
            switchLanguage(nextLang);
        });
    }

    // Apply saved language on start
    switchLanguage(currentLang);

    /* --- 2. Custom Cursor & Follower --- */
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    if (cursor && follower && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });

        const hoverables = document.querySelectorAll('a, button, .glass-card, input, select, textarea');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.style.width = '54px';
                follower.style.height = '54px';
                follower.style.backgroundColor = 'rgba(0, 229, 255, 0.08)';
            });
            el.addEventListener('mouseleave', () => {
                follower.style.width = '36px';
                follower.style.height = '36px';
                follower.style.backgroundColor = 'transparent';
            });
        });
    }

    /* --- 3. Scroll Progress & Navbar Effects --- */
    const progressBar = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        if (progressBar) progressBar.style.width = scrolled + '%';
        if (navbar) {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    /* --- 4. Hero Section Canvas Animation (Glowing Particles) --- */
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = `rgba(0, 229, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 60; i++) {
            particles.push(new Particle());
        }

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        };

        animateParticles();
    }

    /* --- 5. Mouse Light Tracking on Glass Cards --- */
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* --- 6. FAQ Accordion --- */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    /* --- 7. Mobile Menu Toggle --- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    /* --- 8. Contact Form Submission --- */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    const privacyModal = document.getElementById('privacy-modal');
    const privacyModalClose = document.getElementById('privacy-modal-close');
    const privacyModalCloseBtn = document.getElementById('privacy-modal-close-btn');

    const openPrivacyModal = () => {
        if (privacyModal) {
            privacyModal.classList.add('active');
            privacyModal.setAttribute('aria-hidden', 'false');
        }
    };

    const closePrivacyModal = () => {
        if (privacyModal) {
            privacyModal.classList.remove('active');
            privacyModal.setAttribute('aria-hidden', 'true');
        }
    };

    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('.privacy-trigger');
        if (trigger) {
            event.preventDefault();
            openPrivacyModal();
        }
    });

    if (privacyModalClose) {
        privacyModalClose.addEventListener('click', closePrivacyModal);
    }

    if (privacyModalCloseBtn) {
        privacyModalCloseBtn.addEventListener('click', closePrivacyModal);
    }

    if (privacyModal) {
        privacyModal.addEventListener('click', (event) => {
            if (event.target === privacyModal) {
                closePrivacyModal();
            }
        });
    }

    if (contactForm && formStatus) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const appsScriptUrl = (contactForm.dataset.appsScriptUrl || '').trim();

        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const originalButtonHtml = submitButton ? submitButton.innerHTML : '';
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = 'Açılıyor...';
            }

            formStatus.className = 'form-status visible loading';
            formStatus.textContent = 'Mesaj gönderiliyor...';

            const formData = new FormData(contactForm);
            const payload = {
                name: formData.get('name')?.toString().trim() || 'Belirtilmedi',
                email: formData.get('email')?.toString().trim() || '',
                service: formData.get('service')?.toString().trim() || 'Genel',
                message: formData.get('message')?.toString().trim() || ''
            };

            try {
                if (!appsScriptUrl || appsScriptUrl.includes('YOUR_DEPLOYMENT_ID')) {
                    throw new Error('Apps Script URL not configured');
                }

                const response = await fetch(appsScriptUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: new URLSearchParams(payload).toString()
                });

                if (!response.ok) {
                    throw new Error('Apps Script gönderimi başarısız');
                }

                formStatus.className = 'form-status visible success';
                formStatus.textContent = 'Mesajınız alındı. En kısa sürede dönüş yapacağız.';
                contactForm.reset();
            } catch (error) {
                console.error('Form submission failed:', error);
                formStatus.className = 'form-status visible error';
                formStatus.textContent = 'Mesaj gönderilemedi. Lütfen Google Apps Script URL’sini ayarlayıp tekrar deneyin.';
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonHtml;
                }
            }
        });
    }

});

