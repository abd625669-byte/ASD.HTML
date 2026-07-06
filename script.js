// Language Translations Data
const translations = {
    ar: {
        dir: 'rtl',
        nav: ['الرئيسية', 'مشاريعنا', 'الخامات', 'اتصل بنا'],
        btnConsultNav: 'طلب استشارة',
        heroTitle: 'نصنع من مطبخك لوحة فنية تجمع الفخامة والرفاهية',
        heroDesc: 'تصاميم مطابخ مودرن وكلاسيك ميكانيكية متطورة ومصنعة بأجود الخامات العالمية مع ضمان حقيقي.',
        heroCta: 'ابدأ تصميم مطبخك الآن',
        heroSecondary: 'مشاهدة أعمالنا',
        portfolioTitle: 'أحدث مشاريعنا',
        bookingTitle: 'احجز استشارتك المجانية',
        bookingDesc: 'املأ الاستمارة وسيقوم مهندسونا بالتواصل معك لزيارة الموقع وأخذ القياسات مجاناً وتزويدك بتصميم 3D مبدئي.',
        lblName: 'الاسم الكامل',
        lblPhone: 'رقم الهاتف',
        lblStyle: 'الستايل المفضل',
        btnSubmit: 'إرسال الطلب وحجز موعد',
        successMsg: 'شكراً لتواصلك معنا! سيقوم مهندسونا بالاتصال بك قريباً.'
    },
    en: {
        dir: 'ltr',
        nav: ['Home', 'Projects', 'Materials', 'Contact Us'],
        btnConsultNav: 'Request Consultation',
        heroTitle: 'We craft your kitchen into a masterpiece of luxury',
        heroDesc: 'Advanced modern and classic mechanical kitchen designs, made with the finest global materials with a real warranty.',
        heroCta: 'Start Your Design Now',
        heroSecondary: 'View Our Work',
        portfolioTitle: 'Our Latest Projects',
        bookingTitle: 'Book Your Free Consultation',
        bookingDesc: 'Fill out the form and our engineers will contact you to visit the site, take measurements for free, and provide an initial 3D design.',
        lblName: 'Full Name',
        lblPhone: 'Phone Number',
        lblStyle: 'Preferred Style',
        btnSubmit: 'Submit Request & Book Appointment',
        successMsg: 'Thank you for contacting us! Our engineers will call you soon.'
    },
    ku: {
        dir: 'rtl',
        nav: ['سەرەکی', 'پڕۆژەکانمان', 'کەرەستەکان', 'پەیوەندی'],
        btnConsultNav: 'داواکردنی ڕاوێژکاری',
        heroTitle: 'چێشتخانەکەت دەکەینە شاکارێکی ناوازە لە مۆدێرن و فخامەت',
        heroDesc: 'دیزاینی پێشکەوتووی چێشتخانەی مۆدێرن و کلاسیک بە باشترین کەرەستەی جیهانی و بە گەرەنتی ڕاستەقینە.',
        heroCta: 'ئێستا دەست بە دیزاین بکە',
        heroSecondary: 'بینینی کارەکانمان',
        portfolioTitle: 'نوێترین پڕۆژەکانمان',
        bookingTitle: 'ڕاوێژکاری بێبەرامبەر بگرە',
        bookingDesc: 'فۆرمەکە پڕبکەرەوە و ئەندازیارانمان پەیوەندیت پێوە دەکەن بۆ سەردانکردنی شوێنەکە و گرتنی پێوانەکان بەخۆڕایی.',
        lblName: 'ناوی تەواو',
        lblPhone: 'ژمارەی مۆبایل',
        lblStyle: 'ستایلی دڵخواز',
        btnSubmit: 'ناردنی داواکاری و برینی ژوان',
        successMsg: 'سپاس بۆ پەیوەندیکردنتان! ئەندازیارانمان بەم زووانە پەیوەندیتان پێوە دەکەن.'
    }
};

// Function to trigger language selection
function selectLanguage(lang) {
    const data = translations[lang];
    
    // Apply layout direction
    document.body.className = `dark-theme ${data.dir}`;
    document.getElementById('main-content').className = `main-content ${data.dir}`;
    
    // Update Dynamic Texts
    document.getElementById('btn-consult-nav').innerText = data.btnConsultNav;
    document.getElementById('hero-title').innerText = data.heroTitle;
    document.getElementById('hero-desc').innerText = data.heroDesc;
    document.getElementById('hero-cta').innerText = data.heroCta;
    document.getElementById('hero-secondary').innerText = data.heroSecondary;
    document.getElementById('portfolio-title').innerText = data.portfolioTitle;
    document.getElementById('booking-title').innerText = data.bookingTitle;
    document.getElementById('booking-desc').innerText = data.bookingDesc;
    
    document.getElementById('lbl-name').innerText = data.lblName;
    document.getElementById('lbl-phone').innerText = data.lblPhone;
    document.getElementById('lbl-style').innerText = data.lblStyle;
    document.getElementById('btn-submit-text').innerText = data.btnSubmit;
    
    // Build Navigation Links dynamically
    const navUl = document.getElementById('nav-links');
    navUl.innerHTML = '';
    const sections = ['#main-content', '#portfolio', '#materials', '#booking'];
    data.nav.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${sections[index]}">${item}</a>`;
        navUl.appendChild(li);
    });

    // Hide Splash Screen and Show Main Site
    document.getElementById('splash-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}

// Scroll to booking form smoothly
function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Handle booking simulation form submit
function handleFormSubmit(event) {
    event.preventDefault();
    const currentLang = document.getElementById('main-content').classList.contains('ltr') ? 'en' : 'ar'; // fallback simple check
    alert(translations[currentLang]?.successMsg || translations['ar'].successMsg);
    document.getElementById('consultation-form').reset();
}
