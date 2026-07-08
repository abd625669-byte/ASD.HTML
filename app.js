/* 
========================================================================
   LE BISTROT CÉLESTE - JAVASCRIPT (app.js)
   Description: Core interactive logic, dynamic menu rendering,
                cart drawer management, bilinguality, WA order dispatch
   Authors: Antigravity Code Pair
========================================================================
*/

// --- 1. قواميس الترجمة الثنائية (BILINGUAL TRANSLATIONS) ---
const translations = {
  ar: {
    logo_sub: "صالة طعام باريسية فاخرة",
    nav_menu: "المنيو الكامل",
    nav_entrées: "المقبلات",
    nav_plats: "الأطباق الرئيسية",
    nav_desserts: "الحلويات",
    nav_boissons: "المشروبات",
    hero_tagline: "تجربة فريدة من نوعها",
    hero_title: "رحلة في قلب المطبخ الفرنسي العريق",
    hero_desc: "استمتع بتشكيلة ساحرة من المقبلات والأطباق الباريسية الكلاسيكية، المحضرة بحب وعناية فائقة بواسطة أفضل الطهاة، وبمكونات طازجة مستوردة خصيصاً لك.",
    search_placeholder: "ابحث عن طبقك الفرنسي المفضل...",
    cat_all: "الكل",
    cat_entrées: "المقبلات (Entrées)",
    cat_plats: "الأطباق الرئيسية (Plats)",
    cat_desserts: "الحلويات (Desserts)",
    cat_boissons: "المشروبات (Boissons)",
    filter_title: "خيارات التصفية:",
    filter_vegan: "نباتي (V)",
    filter_gf: "خالٍ من الغلوتين (GF)",
    filter_nuts: "يحتوي مكسرات (N)",
    filter_chef: "توصية الطاهي (⭐)",
    kcal: "سعرة",
    modal_desc_title: "الوصف الفني:",
    modal_ingredients_title: "المكونات الأساسية:",
    modal_allergens_title: "مسببات الحساسية:",
    modal_customization_title: "خيارات التخصيص (اختياري):",
    custom_steak_cook: "درجة استواء اللحم:",
    steak_mr: "متوسط الاستواء خفيف (Medium Rare)",
    steak_m: "متوسط الاستواء (Medium)",
    steak_wd: "كامل الاستواء (Well Done)",
    custom_extras: "إضافات وتفضيلات:",
    extra_cheese: "جبنة غرويير إضافية (+5 ر.س)",
    gf_bread: "استبدال بخبز خالٍ من الغلوتين (مجاني)",
    add_to_cart_btn: "أضف إلى الطلب",
    cart_title: "سلة الطلبات",
    cart_empty_text: "سلة طلباتك فارغة حالياً.",
    cart_empty_hint: "تصفح الأطباق اللذيذة وأضف بعض النكهات الفرنسية الرائعة لطاولتك.",
    label_table: "رقم الطاولة:",
    err_table_required: "يرجى تحديد رقم طاولتك للخدمة.",
    label_notes_kitchen: "ملاحظات للمطبخ (اختياري):",
    bill_subtotal: "المجموع الفرعي:",
    bill_tax: "ضريبة القيمة المضافة (15%):",
    bill_total: "الإجمالي النهائي:",
    btn_send_order: "إرسال الطلب للمطبخ (WhatsApp)",
    btn_call_waiter_title: "استدعاء النادل لخدمتك",
    btn_call_waiter: "نداء النادل",
    no_results_title: "لم نجد أي طبق يطابق خيارات البحث",
    no_results_desc: "يرجى تجربة كلمات بحث أخرى أو إلغاء تحديد بعض الفلاتر الغذائية.",
    reset_filters_btn: "إعادة تعيين القائمة",
    heritage_tag: "التميز والجودة الفرنسية",
    heritage_title: "تقاليد الطهي الفرنسية العريقة في قلب مدينتكم",
    heritage_desc: "كل تفصيل في مطبخنا يعكس ثقافة الطهي الفرنسية التي تم إدراجها ضمن التراث الثقافي غير المادي لمنظمة اليونسكو. نحن نلتزم باستخدام الزبدة الفرنسية الفاخرة، والأعشاب البرية الطازجة من مقاطعة بروفانس، واللحوم المنتقاة بعناية لنقدم لك وجبة لا تُنسى تعيدك إلى شوارع باريس الدافئة.",
    feat1_title: "مخبوزات طازجة يومياً",
    feat1_desc: "نخبز الكرواسون والباغيت الفرنسي الطازج في أفراننا كل صباح مع الفجر.",
    feat2_title: "أجبان مستوردة فاخرة",
    feat2_desc: "نستورد تشكيلة من أجبان الـ Brie والـ Roquefort والـ Gruyère مباشرة من فرنسا.",
    footer_about: "مطعم باريسي راقٍ يدمج بين حداثة اليوم وتفاصيل عراقة الماضي الفرنسي لتذوق فنون الطهي والأطباق الحاصلة على جوائز الجودة الرفيعة.",
    footer_col_hours: "ساعات العمل والزيارة",
    footer_weekdays: "طيلة أيام الأسبوع:",
    footer_weekend: "نهاية الأسبوع (الخميس والجمعة):",
    footer_brunch: "وجبة فطور برانش (السبت):",
    footer_col_categories: "أصناف الطعام",
    footer_col_contact: "الموقع والاتصال",
    footer_loc_detail: "شارع التحلية، حي الأندلس، جدة، المملكة العربية السعودية",
    footer_copy: "Le Bistrot Céleste. جميع الحقوق محفوظة.",
    link_terms: "شروط الخدمة والاستخدام",
    link_privacy: "سياسة خصوصية المطاعم",
    modal_close_btn: "متابعة تصفح المنيو"
  },
  en: {
    logo_sub: "Parisian Fine Dining",
    nav_menu: "Full Menu",
    nav_entrées: "Appetizers",
    nav_plats: "Main Courses",
    nav_desserts: "Desserts",
    nav_boissons: "Drinks",
    hero_tagline: "A Unique Experience",
    hero_title: "A Journey Into French Culinary Heritage",
    hero_desc: "Savor an enchanting selection of classic Parisian appetizers and dishes, crafted with love and meticulous care by our master chefs, using fresh, hand-picked ingredients.",
    search_placeholder: "Search for your favorite French dish...",
    cat_all: "All",
    cat_entrées: "Entrées",
    cat_plats: "Plats Principaux",
    cat_desserts: "Desserts",
    cat_boissons: "Boissons",
    filter_title: "Filters:",
    filter_vegan: "Vegan (V)",
    filter_gf: "Gluten-Free (GF)",
    filter_nuts: "Contains Nuts (N)",
    filter_chef: "Chef's Special (⭐)",
    kcal: "kcal",
    modal_desc_title: "Technical Description:",
    modal_ingredients_title: "Key Ingredients:",
    modal_allergens_title: "Allergens:",
    modal_customization_title: "Customization Options (Optional):",
    custom_steak_cook: "Steak Cooking Level:",
    steak_mr: "Medium Rare (Recommended)",
    steak_m: "Medium",
    steak_wd: "Well Done",
    custom_extras: "Extras & Preferences:",
    extra_cheese: "Extra Gruyère Cheese (+5 SAR)",
    gf_bread: "Substitute Gluten-Free Bread (Free)",
    add_to_cart_btn: "Add to Order",
    cart_title: "Your Order",
    cart_empty_text: "Your order cart is currently empty.",
    cart_empty_hint: "Browse our delicious dishes and add some exquisite French flavors to your table.",
    label_table: "Table Number:",
    err_table_required: "Please specify your table number.",
    label_notes_kitchen: "Kitchen Notes (Optional):",
    bill_subtotal: "Subtotal:",
    bill_tax: "VAT (15%):",
    bill_total: "Grand Total:",
    btn_send_order: "Send Order (WhatsApp)",
    btn_call_waiter_title: "Call waiter to your table",
    btn_call_waiter: "Call Waiter",
    no_results_title: "No matching dishes found",
    no_results_desc: "Please try another search term or reset the diet filters.",
    reset_filters_btn: "Reset Menu View",
    heritage_tag: "French Culinary Excellence",
    heritage_title: "Time-Honored French Cuisine in Jeddah",
    heritage_desc: "Every detail in our kitchen reflects the French gastronomy culture. We commit to using premium French butter, fresh herbs de Provence, and hand-selected meats to give you a dinner to remember, transporting you to the warm bistros of Paris.",
    feat1_title: "Freshly Baked Daily",
    feat1_desc: "We bake fresh French croissants and baguettes in our ovens every morning at dawn.",
    feat2_title: "Imported Premium Cheeses",
    feat2_desc: "We import a selection of Brie, Roquefort, and Gruyère cheeses directly from France.",
    footer_about: "A premium Parisian restaurant blending modern style with time-honored French culinary heritage to deliver award-winning gastronomic experiences.",
    footer_col_hours: "Opening Hours",
    footer_weekdays: "Weekdays:",
    footer_weekend: "Weekends (Thursday & Friday):",
    footer_brunch: "Saturday Brunch:",
    footer_col_categories: "Menu Categories",
    footer_col_contact: "Location & Contact",
    footer_loc_detail: "Tahlia Street, Al Andalus District, Jeddah, Saudi Arabia",
    footer_copy: "Le Bistrot Céleste. All rights reserved.",
    link_terms: "Terms of Service",
    link_privacy: "Privacy Policy",
    modal_close_btn: "Continue Browsing"
  }
};

// --- 2. قاعدة بيانات الأطباق الفرنسية (FRENCH DISHES DATABASE) ---
const dishes = [
  {
    id: "soupe-oignon",
    category: "entrées",
    name: {
      ar: "شوربة البصل الفرنسية الكلاسيكية",
      en: "Classic French Onion Soup"
    },
    nameFr: "Soupe à l'Oignon",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1620418029653-8d0782dc5096?w=600&auto=format&fit=crop&q=80",
    badges: ["chef"],
    allergens: {
      ar: ["غلوتين", "مشتقات الحليب"],
      en: ["Gluten", "Dairy"]
    },
    description: {
      ar: "شوربة البصل الفرنسية التقليدية المطبوخة ببطء لـ 6 ساعات مع مرق اللحم الغني والزبدة البنية، مغطاة بقطعة باغيت محمصة وطبقة سخية من جبنة الغرويير الذائبة تحت اللهب.",
      en: "Classic French onion soup slow-cooked for 6 hours with a rich beef broth and browned butter, topped with a toasted baguette slice and a generous layer of torched, melted Gruyère cheese."
    },
    ingredients: {
      ar: "بصل حلو مكرمل، مرق لحم البقر، زبدة فرنسية، أعشاب برية، خبز باغيت، جبنة غرويير معتقة.",
      en: "Caramelized sweet onions, beef broth, French butter, herbs de Provence, French baguette, aged Gruyère cheese."
    },
    calories: 380,
    time: 15,
    customizable: {
      steak: false,
      cheese: true,
      bread: true
    }
  },
  {
    id: "escargots",
    category: "entrées",
    name: {
      ar: "حلزون بورغوندي بالثوم والأعشاب",
      en: "Burgundy Escargots in Garlic Butter"
    },
    nameFr: "Escargots de Bourgogne",
    price: 68.00,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&auto=format&fit=crop&q=80",
    badges: ["gf"],
    allergens: {
      ar: ["محاريات", "مشتقات الحليب"],
      en: ["Shellfish", "Dairy"]
    },
    description: {
      ar: "حلزونات برية فاخرة مستوردة من مقاطعة بورغوندي الفرنسية، مطهوة في قشورها بفرن الحطب مع خليط زبدة الثوم المعززة بالبقدونس المفروم وجوزة الطيب.",
      en: "Premium wild escargots imported from Burgundy, baked in their shells with a rich garlic butter blend infused with fresh parsley and a touch of nutmeg."
    },
    ingredients: {
      ar: "حلزون بري فرنسي، زبدة ثوم فاخرة، بقدونس طازج، بهارات بروفانس، ملح بحر غويراند.",
      en: "French wild snails, garlic butter, fresh parsley, Provence spices, Guérande sea salt."
    },
    calories: 290,
    time: 12,
    customizable: {
      steak: false,
      cheese: false,
      bread: true
    }
  },
  {
    id: "salade-chevre",
    category: "entrées",
    name: {
      ar: "سلطة جبن الماعز الدافئ",
      en: "Warm Goat Cheese Salad"
    },
    nameFr: "Salade de Chèvre Chaud",
    price: 52.00,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    badges: ["vegan"],
    allergens: {
      ar: ["مشتقات الحليب", "غلوتين", "مكسرات"],
      en: ["Dairy", "Gluten", "Nuts"]
    },
    description: {
      ar: "أوراق الخس البرية الطازجة مع جوز البيكان المحمص والتين المجفف، تعلوها أقراص جبن الماعز الفرنسي الدافئة المخبوزة على كروستيني مقرمش ومرشوشة بعسل السدر والخردل.",
      en: "Crisp mixed greens and wild baby lettuce with toasted pecans and dried figs, topped with warm French goat cheese medallions baked on crispy crostini, drizzled with honey-mustard vinaigrette."
    },
    ingredients: {
      ar: "جبن ماعز، خس مشكل، بيكان محمص، تين مجفف، خبز كروستيني بالثوم، تتبيلة الخردل والعسل.",
      en: "Goat cheese, mixed greens, roasted pecans, dried figs, garlic crostini, Dijon honey vinaigrette."
    },
    calories: 410,
    time: 10,
    customizable: {
      steak: false,
      cheese: false,
      bread: true
    }
  },
  {
    id: "boeuf-bourguignon",
    category: "plats",
    name: {
      ar: "لحم البقر على طريقة البورغينيون",
      en: "Classic Beef Bourguignon"
    },
    nameFr: "Boeuf Bourguignon",
    price: 135.00,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80",
    badges: ["chef", "gf"],
    allergens: {
      ar: ["كرفس"],
      en: ["Celery"]
    },
    description: {
      ar: "أشهر أطباق الريف الفرنسي: قطع لحم كتف البقري الطري المطهوة ببطء لـ 8 ساعات مع مرق العظام، البصل اللؤلؤي المكرمل، فطر باريس الطازج، والجزر، تقدم فوق بطاطس مهروسة كريمية.",
      en: "The legendary French comfort dish: tender beef chuck slow-braised for 8 hours in a rich veal bone broth with caramelized pearl onions, Paris mushrooms, and carrots, served over smooth, buttered mashed potatoes."
    },
    ingredients: {
      ar: "لحم بقري محلي فاخر، مرق عظام العجل، فطر باريس، بصل لؤلؤي، جزر، بطاطس مهروسة بالزبدة الفرنسية.",
      en: "Premium local beef, veal bone broth, Paris mushrooms, pearl onions, carrots, French butter mashed potatoes."
    },
    calories: 720,
    time: 20,
    customizable: {
      steak: false,
      cheese: false,
      bread: false
    }
  },
  {
    id: "filet-poivre",
    category: "plats",
    name: {
      ar: "ستيك فيليه مينيون بصلصة الفلفل الأسود",
      en: "Filet Mignon with Peppercorn Sauce"
    },
    nameFr: "Filet Mignon au Poivre",
    price: 185.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    badges: ["chef"],
    allergens: {
      ar: ["مشتقات الحليب", "خردل"],
      en: ["Dairy", "Mustard"]
    },
    description: {
      ar: "قطعة لحم فيليه مينيون مشوية على المكشوف لدرجة الاستواء المفضلة لديكم، مغمورة بصلصة الفلفل الأخضر الكريمية الفاخرة، تقدم مع هليون مشوي وبطاطس مقرمشة ذهبية.",
      en: "A prime cut of beef tenderloin grilled to your perfect temperature, smothered in a classic French green peppercorn and cream sauce, served with grilled asparagus and house frites."
    },
    ingredients: {
      ar: "فيليه مينيون أنغوس، فلفل أخضر، كريمة طبخ طازجة، خردل ديجون، هليون، بطاطس مقلية بالزعتر.",
      en: "Angus filet mignon, green peppercorns, fresh heavy cream, Dijon mustard, asparagus, thyme frites."
    },
    calories: 680,
    time: 25,
    customizable: {
      steak: true,
      cheese: false,
      bread: false
    }
  },
  {
    id: "ratatouille",
    category: "plats",
    name: {
      ar: "راتاتوي كلاسيكي على طريقة نيس",
      en: "Classical Provencal Ratatouille"
    },
    nameFr: "Ratatouille Niçoise",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=600&auto=format&fit=crop&q=80",
    badges: ["vegan", "gf"],
    allergens: {
      ar: [],
      en: []
    },
    description: {
      ar: "طبق نباتي فني من مقاطعة بروفنس: شرائح كوسا، باذنجان، وطماطم طازجة مرتبة بتناسق رائع فوق طبقة من صلصة الفلفل المشوي المطهوة بالفرن، مغطاة بأوراق الزعتر البري وزيت الزيتون.",
      en: "A beautiful Provencal vegetable harmony: alternate thin rounds of fresh zucchini, eggplant, and ripe tomatoes arranged over a rich bell pepper and garlic confit, baked with fresh thyme and olive oil."
    },
    ingredients: {
      ar: "كوسا باريسية، باذنجان، طماطم، فلفل حلو، زيت زيتون بكر ممتاز، ثوم، زعتر بري طازج.",
      en: "Parisian zucchini, eggplant, tomatoes, bell peppers, extra virgin olive oil, garlic, fresh wild thyme."
    },
    calories: 240,
    time: 15,
    customizable: {
      steak: false,
      cheese: true, // إضافة جبنة غرويير خيار إضافي
      bread: true
    }
  },
  {
    id: "creme-brulee",
    category: "desserts",
    name: {
      ar: "كريم بروليه بفانيليا مدغشقر",
      en: "Madagascar Vanilla Crème Brûlée"
    },
    nameFr: "Crème Brûlée à la Vanille",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&auto=format&fit=crop&q=80",
    badges: ["vegan", "gf"],
    allergens: {
      ar: ["مشتقات الحليب", "بيض"],
      en: ["Dairy", "Eggs"]
    },
    description: {
      ar: "الكاسترد الفرنسي الغني والمخملي المخبوز مع قرون فانيليا مدغشقر الحقيقية، يعلوه غلاف رقيق صلب ومقرمش من السكر البني المكرمل يدوياً، مزين بالتوت والنعناع.",
      en: "Rich and silky custard baked with organic Madagascar vanilla bean pods, finished with a brittle crust of hand-torched caramelized sugar, garnished with fresh berries and mint."
    },
    ingredients: {
      ar: "كريمة خفق فرنسية، صفار بيض بلدي، قرون فانيليا طبيعية، سكر بني مكرمل، توت العليق.",
      en: "French heavy cream, egg yolks, Madagascar vanilla beans, caramelized sugar, fresh raspberries."
    },
    calories: 350,
    time: 8,
    customizable: {
      steak: false,
      cheese: false,
      bread: false
    }
  },
  {
    id: "souffle-choc",
    category: "desserts",
    name: {
      ar: "سوفليه الشوكولاتة البلجيكية الدافئ",
      en: "Warm Belgian Chocolate Soufflé"
    },
    nameFr: "Soufflé au Chocolat Chaud",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80",
    badges: ["vegan"],
    allergens: {
      ar: ["مشتقات الحليب", "بيض", "غلوتين"],
      en: ["Dairy", "Eggs", "Gluten"]
    },
    description: {
      ar: "سوفليه يرتفع بنعومة في الفرن، مصنوع من شوكولاتة كاليوت البلجيكية الداكنة (70%)، يتميز بمركز دافئ وسائل وغني، يقدم مع مغرفة من آيس كريم الفانيليا الطبيعية.",
      en: "A delicate, perfectly risen warm soufflé made with 70% dark Belgian Callebaut chocolate, featuring a rich, gooey molten center, served with a scoop of premium vanilla bean ice cream."
    },
    ingredients: {
      ar: "شوكولاتة بلجيكية داكنة 70%، زبدة فرنسية، بيض، دقيق فاخر، سكر ناعم، فانيليا.",
      en: "Belgian dark chocolate 70%, French butter, eggs, flour, fine sugar, vanilla bean extract."
    },
    calories: 420,
    time: 15,
    customizable: {
      steak: false,
      cheese: false,
      bread: false
    }
  },
  {
    id: "macarons",
    category: "desserts",
    name: {
      ar: "علبة ماكارون باريسي مشكل (5 قطع)",
      en: "Assorted Parisian Macarons (5 Pcs)"
    },
    nameFr: "Macarons Parisiens",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&auto=format&fit=crop&q=80",
    badges: ["vegan", "gf", "nuts"],
    allergens: {
      ar: ["مكسرات اللوز", "بيض", "مشتقات الحليب"],
      en: ["Almond Nuts", "Eggs", "Dairy"]
    },
    description: {
      ar: "خمس حبات من البسكويت الماكارون المقرمش من الخارج واللين من الداخل، محشوة بكريمات فرنسية غنية بنكهات: الفستق الحلبي، الشوكولاتة، الفانيليا، اللافندر، والتوت.",
      en: "Five delicate almond flour macaron shells, crisp on the outside and chewy on the inside, filled with premium French ganaches: Sicilian pistachio, chocolate, vanilla, lavender, and raspberry."
    },
    ingredients: {
      ar: "دقيق اللوز الفاخر، بياض البيض، سكر بودرة، حشوات غاناش الشوكولاتة والتوت والفستق.",
      en: "Fine almond flour, egg whites, icing sugar, chocolate, raspberry, and pistachio ganaches."
    },
    calories: 280,
    time: 5,
    customizable: {
      steak: false,
      cheese: false,
      bread: false
    }
  },
  {
    id: "french-press",
    category: "boissons",
    name: {
      ar: "قهوة فرنسية كلاسيكية (فرنش بريس)",
      en: "Traditional French Press Coffee"
    },
    nameFr: "Café en Cafetière",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
    badges: ["vegan", "gf"],
    allergens: {
      ar: [],
      en: []
    },
    description: {
      ar: "حبوب بن أرابيكا الفاخرة المحمصة بوسطية باريسية، تخمر وتقدم في إبريق الكبس الفرنسي الفاخر (French Press) لتقديم فنجان غني بالزيوت الطبيعية والنكهة المركزة.",
      en: "Premium Arabica coffee beans roasted in Paris style, freshly brewed and served in a traditional French Press to release the coffee's aromatic natural oils and rich body."
    },
    ingredients: {
      ar: "بن أرابيكا مطحون خشن، مياه ساخنة نقية.",
      en: "Coarsely ground Arabica coffee beans, hot filtered water."
    },
    calories: 5,
    time: 5,
    customizable: {
      steak: false,
      cheese: false,
      bread: false
    }
  },
  {
    id: "lavender-lemonade",
    category: "boissons",
    name: {
      ar: "ليموناد اللافندر الفوار المنعش",
      en: "Refreshing Sparkling Lavender Lemonade"
    },
    nameFr: "Limonade à la Lavande",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    badges: ["vegan", "gf"],
    allergens: {
      ar: [],
      en: []
    },
    description: {
      ar: "مشروب موكتيل بارد منعش يمزج بين الليمون الأصفر الطازج، وشراب اللافندر العضوي المستورد من حقول بروفانس بفرنسا، والمياه الفوارة الفاخرة مع مكعبات الثلج.",
      en: "A highly refreshing cold mocktail combining freshly squeezed lemons, organic French lavender flower syrup, and sparkling mineral water served over crushed ice."
    },
    ingredients: {
      ar: "عصير ليمون طازج، شراب اللافندر الطبيعي، مياه معدنية فوارة، ثلج، نعناع.",
      en: "Fresh lemon juice, organic lavender flower syrup, sparkling mineral water, ice, mint."
    },
    calories: 110,
    time: 5,
    customizable: {
      steak: false,
      cheese: false,
      bread: false
    }
  }
];

// --- 3. متغيرات حالة التطبيق (APPLICATION STATE) ---
let currentLanguage = "ar";
let cart = [];
let selectedDishForModal = null;
let currentModalQty = 1;
let activeFilters = {
  category: "all",
  search: "",
  vegan: false,
  gf: false,
  nuts: false,
  chef: false
};

// --- 4. عناصر واجهة المستخدم (DOM ELEMENTS) ---
const splashScreen = document.getElementById("splash-screen");
const mainSite = document.getElementById("main-site");
const langMenuBtn = document.getElementById("lang-menu-btn");
const langDropdownMenu = document.getElementById("lang-dropdown-menu");
const currentLangLabel = document.getElementById("current-lang-label");

// فلاتر المنيو والبحث
const searchInput = document.getElementById("menu-search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const categoryTabs = document.querySelectorAll(".tab-btn");
const filterChips = document.querySelectorAll(".chip");
const dishesGridContainer = document.getElementById("dishes-grid-container");
const noResultsMsg = document.getElementById("no-results-msg");
const btnResetFilters = document.getElementById("btn-reset-filters");

// المودال لتفاصيل الأطباق
const dishDetailModal = document.getElementById("dish-detail-modal");
const closeDetailModalBtn = document.getElementById("close-detail-modal-btn");
const modalDishImg = document.getElementById("modal-dish-img");
const modalDietBadges = document.getElementById("modal-diet-badges");
const modalDishTitle = document.getElementById("modal-dish-title");
const modalDishSubtitleFr = document.getElementById("modal-dish-subtitle-fr");
const modalDishPrice = document.getElementById("modal-dish-price");
const modalCaloriesValue = document.getElementById("modal-calories-value");
const modalDishDesc = document.getElementById("modal-dish-desc");
const modalDishIngredients = document.getElementById("modal-dish-ingredients");
const modalAllergensSection = document.getElementById("modal-allergens-section");
const modalAllergensList = document.getElementById("modal-allergens-list");

// تخصيص المودال
const steakCookingGroup = document.getElementById("steak-cooking-group");
const optExtraCheese = document.getElementById("opt-extra-cheese");
const optGlutenFreeBread = document.getElementById("opt-gluten-free-bread");
const btnQtyMinus = document.getElementById("btn-qty-minus");
const btnQtyPlus = document.getElementById("btn-qty-plus");
const modalQtyValue = document.getElementById("modal-qty-value");
const btnModalAddToCart = document.getElementById("btn-modal-add-to-cart");
const modalTotalActionPrice = document.getElementById("modal-total-action-price");

// سلة التسوق
const cartDrawerContainer = document.getElementById("cart-drawer-container");
const cartDrawerOverlayBg = document.getElementById("cart-drawer-overlay-bg");
const cartTriggerBtn = document.getElementById("cart-trigger-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartCounter = document.getElementById("cart-counter");
const cartEmptyStateView = document.getElementById("cart-empty-state-view");
const cartItemsListContainer = document.getElementById("cart-items-list-container");
const cartFooterBillingSection = document.getElementById("cart-footer-billing-section");
const cartTableNumberInput = document.getElementById("cart-table-number");
const errCartTable = document.getElementById("err-cart-table");
const cartNotesTextarea = document.getElementById("cart-notes");
const billSubtotalVal = document.getElementById("bill-subtotal-val");
const billTaxVal = document.getElementById("bill-tax-val");
const billTotalVal = document.getElementById("bill-total-val");
const btnSubmitOrder = document.getElementById("btn-submit-order");
const btnCallWaiter = document.getElementById("btn-call-waiter");

// إشعارات المودال العام
const notificationModalOverlay = document.getElementById("notification-modal-overlay");
const notificationModalTitle = document.getElementById("notification-modal-title");
const notificationModalDesc = document.getElementById("notification-modal-desc");
const btnCloseNotification = document.getElementById("btn-close-notification");

// --- 5. تطبيق اللغات والاتجاهات (LOCALIZATION & TEXT REPLACEMENT) ---
function applyLanguage(lang) {
  currentLanguage = lang;
  
  // ضبط الاتجاه واللغة في الـ HTML
  const dir = (lang === "ar") ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lang);
  document.body.setAttribute("dir", dir);
  
  // استبدال النصوص المترجمة
  const translatableElements = document.querySelectorAll("[data-i18n]");
  translatableElements.forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  // تحديث نصوص المدخلات والنصوص المساعدة
  if (lang === "ar") {
    searchInput.placeholder = translations.ar.search_placeholder;
    cartTableNumberInput.placeholder = "مثال: 5";
    cartNotesTextarea.placeholder = "مثال: بدون بصل، صلصة إضافية...";
    currentLangLabel.textContent = "العربية";
  } else {
    searchInput.placeholder = translations.en.search_placeholder;
    cartTableNumberInput.placeholder = "E.g., 5";
    cartNotesTextarea.placeholder = "E.g., No onion, extra sauce...";
    currentLangLabel.textContent = "English";
  }

  // تحديث العنوان
  document.title = (lang === "ar") 
    ? "Le Bistrot Céleste | القائمة الإلكترونية الفاخرة"
    : "Le Bistrot Céleste | Premium Digital Menu";

  // إعادة ريندر المنيو والسلة لتعكس اللغة الجديدة
  renderDishes();
  updateCartUI();
}

// --- 6. تشغيل ملف الصوت لتنبيه النادل (SOUND SYNTHESIZER API) ---
function playBellSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // جرس تنبيه عالي الجودة بموجات مركبة
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    // إعداد موجة النغمة
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(987.77, ctx.currentTime); // نغمة B5
    osc1.frequency.exponentialRampToValueAtTime(1975.53, ctx.currentTime + 0.08); // تنبيه مرتفع
    
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(493.88, ctx.currentTime); // نغمة B4 لعمق الصوت
    
    // تلاشي الصوت تدريجياً
    gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    
    osc1.start(ctx.currentTime);
    osc2.start(ctx.currentTime);
    
    osc1.stop(ctx.currentTime + 1.2);
    osc2.stop(ctx.currentTime + 1.2);
  } catch (e) {
    console.warn("Web Audio API not allowed or supported yet:", e);
  }
}

// --- 7. منطق ريندر المنيو الفوري (DYNAMIC MENU RENDERING & FILTERING) ---
function renderDishes() {
  dishesGridContainer.innerHTML = "";
  
  // فحص شروط الفلترة
  const filteredDishes = dishes.filter(dish => {
    // 1. فلترة القسم
    if (activeFilters.category !== "all" && dish.category !== activeFilters.category) {
      return false;
    }
    
    // 2. فلترة البحث بالاسم باللغتين والعربية والفرنسية
    if (activeFilters.search !== "") {
      const searchLower = activeFilters.search.toLowerCase().trim();
      const matchNameAr = dish.name.ar.toLowerCase().includes(searchLower);
      const matchNameEn = dish.name.en.toLowerCase().includes(searchLower);
      const matchNameFr = dish.nameFr.toLowerCase().includes(searchLower);
      const matchDescAr = dish.description.ar.toLowerCase().includes(searchLower);
      const matchDescEn = dish.description.en.toLowerCase().includes(searchLower);
      
      if (!matchNameAr && !matchNameEn && !matchNameFr && !matchDescAr && !matchDescEn) {
        return false;
      }
    }
    
    // 3. فلترة نباتي
    if (activeFilters.vegan && !dish.badges.includes("vegan")) {
      return false;
    }
    
    // 4. فلترة خالٍ من الغلوتين
    if (activeFilters.gf && !dish.badges.includes("gf")) {
      return false;
    }
    
    // 5. فلترة يحتوي مكسرات
    if (activeFilters.nuts && !dish.badges.includes("nuts")) {
      return false;
    }
    
    // 6. فلترة خيار الشيف
    if (activeFilters.chef && !dish.badges.includes("chef")) {
      return false;
    }
    
    return true;
  });

  // إذا لم تكن هناك نتائج
  if (filteredDishes.length === 0) {
    noResultsMsg.style.display = "block";
    dishesGridContainer.style.display = "none";
    return;
  } else {
    noResultsMsg.style.display = "none";
    dishesGridContainer.style.display = "grid";
  }

  // بناء أوراق الكروت للأطباق
  filteredDishes.forEach(dish => {
    const card = document.createElement("div");
    card.className = "dish-card";
    card.setAttribute("data-dish-id", dish.id);
    
    // استخراج الاسم والوصف حسب اللغة المفعلة
    const dishName = dish.name[currentLanguage];
    const dishDesc = dish.description[currentLanguage];
    
    // بناء شارات الحمية
    let badgeHTML = "";
    dish.badges.forEach(b => {
      const badgeText = b === "chef" ? "⭐ Recommandé" : b.toUpperCase();
      badgeHTML += `<span class="dish-badge ${b}">${badgeText}</span>`;
    });

    card.innerHTML = `
      <div class="dish-img-wrapper">
        <img src="${dish.image}" alt="${dishName}" class="dish-img" loading="lazy">
        <div class="dish-img-overlay"></div>
        <div class="dish-badges">${badgeHTML}</div>
      </div>
      <div class="dish-info">
        <div class="dish-header-row">
          <h3 class="dish-title">${dishName}</h3>
          <span class="dish-price">${dish.price.toFixed(2)} ر.س</span>
        </div>
        <p class="dish-sub-fr">${dish.nameFr}</p>
        <p class="dish-description">${dishDesc}</p>
        <div class="dish-footer-row">
          <span class="dish-cal-pill">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
            </svg>
            ${dish.calories} ${translations[currentLanguage].kcal}
          </span>
          <button class="btn-quick-add" data-dish-id="${dish.id}">
            <span>+</span>
            <span data-i18n="add_to_cart_btn">${translations[currentLanguage].add_to_cart_btn}</span>
          </button>
        </div>
      </div>
    `;

    // حدث النقر على الكرت بالكامل لفتح المودال التفصيلي
    card.addEventListener("click", (e) => {
      // منع فتح المودال إذا نقر على زر الإضافة السريعة مباشرة
      if (e.target.closest(".btn-quick-add")) {
        e.stopPropagation();
        quickAddToCart(dish.id);
        return;
      }
      openDishDetailModal(dish);
    });

    dishesGridContainer.appendChild(card);
  });
}

// --- 8. منطق النافذة المنبثقة التفصيلية (DISH DETAIL MODAL LOGIC) ---
function openDishDetailModal(dish) {
  selectedDishForModal = dish;
  currentModalQty = 1;
  
  // إعادة تعيين خيارات التخصيص
  optExtraCheese.checked = false;
  optGlutenFreeBread.checked = false;
  
  // إخفاء أو إظهار خيارات اللحوم (درجة الاستواء)
  if (dish.customizable.steak) {
    steakCookingGroup.style.display = "block";
  } else {
    steakCookingGroup.style.display = "none";
  }

  // إخفاء خيارات الجبنة أو الخبز إذا لم تكن مدعومة للطبق
  optExtraCheese.closest(".checkbox-option").style.display = dish.customizable.cheese ? "flex" : "none";
  optGlutenFreeBread.closest(".checkbox-option").style.display = dish.customizable.bread ? "flex" : "none";

  // تعبئة البيانات الأساسية
  modalDishImg.src = dish.image;
  modalDishImg.alt = dish.name[currentLanguage];
  modalDishTitle.textContent = dish.name[currentLanguage];
  modalDishSubtitleFr.textContent = dish.nameFr;
  modalDishPrice.textContent = `${dish.price.toFixed(2)} ر.س`;
  modalCaloriesValue.textContent = dish.calories;
  modalDishDesc.textContent = dish.description[currentLanguage];
  modalDishIngredients.textContent = dish.ingredients[currentLanguage];

  // شارات الحمية
  modalDietBadges.innerHTML = "";
  dish.badges.forEach(b => {
    const badgeText = b === "chef" ? "⭐ Chef's Pick" : b.toUpperCase();
    modalDietBadges.innerHTML += `<span class="dish-badge ${b}">${badgeText}</span>`;
  });

  // مسببات الحساسية
  modalAllergensList.innerHTML = "";
  if (dish.allergens[currentLanguage] && dish.allergens[currentLanguage].length > 0) {
    modalAllergensSection.style.display = "block";
    dish.allergens[currentLanguage].forEach(all => {
      modalAllergensList.innerHTML += `<span class="allergen-pill">${all}</span>`;
    });
  } else {
    modalAllergensSection.style.display = "none";
  }

  updateModalTotalAndQty();

  // إظهار المودال مع تأثير أنيميشن
  dishDetailModal.classList.add("show");
}

function closeDishDetailModal() {
  dishDetailModal.classList.remove("show");
  selectedDishForModal = null;
}

// تحديث إجمالي السعر والكمية داخل المودال عند التفاعل
function updateModalTotalAndQty() {
  if (!selectedDishForModal) return;
  
  modalQtyValue.textContent = currentModalQty;
  
  let basePrice = selectedDishForModal.price;
  
  // حساب الإضافات المفعلة
  if (selectedDishForModal.customizable.cheese && optExtraCheese.checked) {
    basePrice += parseFloat(optExtraCheese.value);
  }
  
  const totalPrice = basePrice * currentModalQty;
  modalTotalActionPrice.textContent = `${totalPrice.toFixed(2)} ر.س`;
}

// --- 9. منطق سلة الطلبات التفاعلية (CART ACTIONS & MANAGEMENT) ---
function quickAddToCart(dishId) {
  const dish = dishes.find(d => d.id === dishId);
  if (!dish) return;

  // خيارات افتراضية خالية للإضافة السريعة
  addToCart(dish, 1, {
    notes: "",
    steakCook: "",
    extraCheese: false,
    gfBread: false
  });
  
  // أنيميشن وميض خفيف لزر السلة للتنبيه
  cartTriggerBtn.style.transform = "scale(1.25)";
  setTimeout(() => {
    cartTriggerBtn.style.transform = "scale(1)";
  }, 300);
}

function addToCart(dish, qty, customizations) {
  // توليد معرّف فريد للطبق بناءً على تخصيصاته لتجنب الدمج الخاطئ
  const customKey = `${dish.id}-${customizations.steakCook}-${customizations.extraCheese}-${customizations.gfBread}-${customizations.notes}`;
  
  // التحقق مما إذا كان الطبق بنفس التخصيصات مضافاً مسبقاً
  const existingIndex = cart.findIndex(item => item.customKey === customKey);
  
  let itemPrice = dish.price;
  if (customizations.extraCheese) {
    itemPrice += 5; // سعر إضافي للجبن
  }

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
    cart[existingIndex].totalPrice = cart[existingIndex].qty * itemPrice;
  } else {
    cart.push({
      customKey: customKey,
      id: dish.id,
      dish: dish,
      qty: qty,
      singlePrice: itemPrice,
      totalPrice: itemPrice * qty,
      customizations: customizations
    });
  }

  saveCartToLocalStorage();
  updateCartUI();
  
  // تشغيل صوت جرس ناعم للإشارة إلى نجاح الإضافة
  playBellSound();
}

function updateCartQty(customKey, newQty) {
  const index = cart.findIndex(item => item.customKey === customKey);
  if (index === -1) return;

  if (newQty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].qty = newQty;
    cart[index].totalPrice = newQty * cart[index].singlePrice;
  }

  saveCartToLocalStorage();
  updateCartUI();
}

function removeCartItem(customKey) {
  cart = cart.filter(item => item.customKey !== customKey);
  saveCartToLocalStorage();
  updateCartUI();
}

// تحديث واجهة السلة بالكامل وحساب المجاميع
function updateCartUI() {
  // تحديث عداد السلة العلوي
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCounter.textContent = totalCount;
  
  if (cart.length === 0) {
    cartEmptyStateView.style.display = "flex";
    cartItemsListContainer.style.display = "none";
    cartFooterBillingSection.style.display = "none";
    return;
  }

  cartEmptyStateView.style.display = "none";
  cartItemsListContainer.style.display = "block";
  cartFooterBillingSection.style.display = "block";

  cartItemsListContainer.innerHTML = "";

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.totalPrice;
    const itemCard = document.createElement("div");
    itemCard.className = "cart-item";

    const dishName = item.dish.name[currentLanguage];
    
    // تجميع تفاصيل التخصيص وعرضها للمستخدم
    let customDetailsText = "";
    const details = [];
    if (item.customizations.steakCook) {
      const level = (currentLanguage === "ar") 
        ? translations.ar[`steak_${item.customizations.steakCook === "Medium Rare" ? "mr" : item.customizations.steakCook === "Medium" ? "m" : "wd"}`] 
        : item.customizations.steakCook;
      details.push(level);
    }
    if (item.customizations.extraCheese) {
      details.push(translations[currentLanguage].extra_cheese);
    }
    if (item.customizations.gfBread) {
      details.push(translations[currentLanguage].gf_bread);
    }
    if (item.customizations.notes) {
      details.push(`📝: ${item.customizations.notes}`);
    }

    if (details.length > 0) {
      customDetailsText = `<span class="cart-item-custom-notes" title="${details.join(" | ")}">${details.join(" • ")}</span>`;
    }

    itemCard.innerHTML = `
      <img src="${item.dish.image}" alt="${dishName}" class="cart-item-img">
      <div class="cart-item-detail">
        <span class="cart-item-title">${dishName}</span>
        ${customDetailsText}
        <div class="cart-item-price-row">
          <span class="cart-item-price">${item.totalPrice.toFixed(2)} ر.س</span>
          <div class="cart-item-qty">
            <button class="cart-qty-btn minus" data-key="${item.customKey}">-</button>
            <span class="cart-qty-val">${item.qty}</span>
            <button class="cart-qty-btn plus" data-key="${item.customKey}">+</button>
          </div>
        </div>
      </div>
      <button class="btn-remove-cart-item" data-key="${item.customKey}" title="إزالة الطبق">×</button>
    `;

    // أحداث تغيير الكميات في السلة
    itemCard.querySelector(".cart-qty-btn.minus").addEventListener("click", () => {
      updateCartQty(item.customKey, item.qty - 1);
    });

    itemCard.querySelector(".cart-qty-btn.plus").addEventListener("click", () => {
      updateCartQty(item.customKey, item.qty + 1);
    });

    itemCard.querySelector(".btn-remove-cart-item").addEventListener("click", () => {
      removeCartItem(item.customKey);
    });

    cartItemsListContainer.appendChild(itemCard);
  });

  // حساب الفاتورة (الضريبة 15% مشمولة أو مضافة - هنا سنضيفها بالتفصيل)
  const tax = subtotal * 0.15;
  const grandTotal = subtotal + tax;

  billSubtotalVal.textContent = `${subtotal.toFixed(2)} ر.س`;
  billTaxVal.textContent = `${tax.toFixed(2)} ر.س`;
  billTotalVal.textContent = `${grandTotal.toFixed(2)} ر.س`;
}

function saveCartToLocalStorage() {
  localStorage.setItem("celeste_cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const saved = localStorage.getItem("celeste_cart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
      // التحقق من صحة الأوبجكت للتوافق
      updateCartUI();
    } catch (e) {
      cart = [];
    }
  }
}

// --- 10. إرسال الطلب عبر الواتساب (WHATSAPP CHECKOUT SCRIPT) ---
function submitOrderViaWhatsApp() {
  const tableNum = cartTableNumberInput.value.trim();
  if (!tableNum) {
    cartTableNumberInput.classList.add("invalid");
    errCartTable.style.display = "block";
    cartTableNumberInput.scrollIntoView({ behavior: "smooth" });
    
    cartTableNumberInput.addEventListener("input", function clearErr() {
      cartTableNumberInput.classList.remove("invalid");
      errCartTable.style.display = "none";
      cartTableNumberInput.removeEventListener("input", clearErr);
    });
    return;
  }

  // بناء الرسالة النصية
  let orderMsg = "";
  
  if (currentLanguage === "ar") {
    orderMsg += `*🔔 طلب جديد - مطعم Le Bistrot Céleste* 🇫🇷\n`;
    orderMsg += `==========================\n`;
    orderMsg += `*طاولة رقم:* ${tableNum}\n`;
    if (cartNotesTextarea.value.trim()) {
      orderMsg += `*ملاحظات المطبخ:* ${cartNotesTextarea.value.trim()}\n`;
    }
    orderMsg += `--------------------------\n`;
    orderMsg += `*الطلبات:*\n`;
    
    cart.forEach((item, index) => {
      orderMsg += `${index + 1}. ${item.dish.name.ar} × ${item.qty} (${item.totalPrice.toFixed(2)} ر.س)\n`;
      const details = [];
      if (item.customizations.steakCook) {
        const cookLevel = translations.ar[`steak_${item.customizations.steakCook === "Medium Rare" ? "mr" : item.customizations.steakCook === "Medium" ? "m" : "wd"}`];
        details.push(`الاستواء: ${cookLevel}`);
      }
      if (item.customizations.extraCheese) details.push(`إضافة جبنة غرويير`);
      if (item.customizations.gfBread) details.push(`خبز خالٍ من الغلوتين`);
      if (item.customizations.notes) details.push(`ملاحظة: ${item.customizations.notes}`);
      
      if (details.length > 0) {
        orderMsg += `   └ [ ${details.join(" | ")} ]\n`;
      }
    });

    orderMsg += `--------------------------\n`;
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const tax = subtotal * 0.15;
    const grandTotal = subtotal + tax;
    
    orderMsg += `*المجموع الفرعي:* ${subtotal.toFixed(2)} ر.س\n`;
    orderMsg += `*الضريبة (15%):* ${tax.toFixed(2)} ر.س\n`;
    orderMsg += `*الإجمالي النهائي:* ${grandTotal.toFixed(2)} ر.س\n`;
    orderMsg += `==========================\n`;
    orderMsg += `نشكركم على اختياركم، تم إنشاء الطلب تلقائياً من المنيو الإلكتروني ✨`;
  } else {
    orderMsg += `*🔔 New Order - Le Bistrot Céleste* 🇫🇷\n`;
    orderMsg += `==========================\n`;
    orderMsg += `*Table Number:* ${tableNum}\n`;
    if (cartNotesTextarea.value.trim()) {
      orderMsg += `*Kitchen Notes:* ${cartNotesTextarea.value.trim()}\n`;
    }
    orderMsg += `--------------------------\n`;
    orderMsg += `*Items:*\n`;
    
    cart.forEach((item, index) => {
      orderMsg += `${index + 1}. ${item.dish.name.en} x ${item.qty} (${item.totalPrice.toFixed(2)} SAR)\n`;
      const details = [];
      if (item.customizations.steakCook) details.push(`Cooking: ${item.customizations.steakCook}`);
      if (item.customizations.extraCheese) details.push(`Extra Gruyère Cheese`);
      if (item.customizations.gfBread) details.push(`Gluten-Free Bread`);
      if (item.customizations.notes) details.push(`Notes: ${item.customizations.notes}`);
      
      if (details.length > 0) {
        orderMsg += `   └ [ ${details.join(" | ")} ]\n`;
      }
    });

    orderMsg += `--------------------------\n`;
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const tax = subtotal * 0.15;
    const grandTotal = subtotal + tax;
    
    orderMsg += `*Subtotal:* ${subtotal.toFixed(2)} SAR\n`;
    orderMsg += `*VAT (15%):* ${tax.toFixed(2)} SAR\n`;
    orderMsg += `*Grand Total:* ${grandTotal.toFixed(2)} SAR\n`;
    orderMsg += `==========================\n`;
    orderMsg += `Thank you, order generated automatically via Digital Menu ✨`;
  }

  // رقم واتساب المطعم المحاكي الافتراضي
  const restaurantWhatsAppNumber = "966123456789"; 
  const waUrl = `https://wa.me/${restaurantWhatsAppNumber}?text=${encodeURIComponent(orderMsg)}`;
  
  // فتح الواتساب لإكمال إرسال الطلب
  window.open(waUrl, "_blank");

  // تنظيف السلة اختياري بعد التوجيه الناجح
  cart = [];
  saveCartToLocalStorage();
  updateCartUI();
  cartDrawerContainer.classList.remove("show");

  // إظهار إشعار تأكيد إرسال الطلب للمستخدم
  showGeneralNotification(
    currentLanguage === "ar" ? "تم إرسال الطلب للمطبخ!" : "Order Dispatched!",
    currentLanguage === "ar" 
      ? `طاولة رقم ${tableNum}، تم توجيهك لتأكيد رسالة الطلب عبر واتساب. جاري تجهيز الأطباق الباريسية الفاخرة لك.` 
      : `Table ${tableNum}, you have been redirected to WhatsApp to confirm your order. We are preparing your fresh French dishes.`
  );
}

// --- 11. إظهار الإشعار العام (GENERAL NOTIFICATION MODAL) ---
function showGeneralNotification(title, desc) {
  notificationModalTitle.textContent = title;
  notificationModalDesc.textContent = desc;
  notificationModalOverlay.classList.add("show");
  playBellSound();
}

// --- 12. محاذاة الفلاتر وإعادة التعيين (FILTER CONTROLS LOGIC) ---
function resetAllFilters() {
  activeFilters = {
    category: "all",
    search: "",
    vegan: false,
    gf: false,
    nuts: false,
    chef: false
  };

  // إعادة تعيين تبويبات التصنيفات
  categoryTabs.forEach(t => {
    t.classList.remove("active");
    if (t.getAttribute("data-category") === "all") t.classList.add("active");
  });

  // إعادة تعيين رقاقات التصفية
  filterChips.forEach(c => c.classList.remove("active"));
  
  // تفريغ حقل البحث
  searchInput.value = "";
  clearSearchBtn.style.display = "none";

  renderDishes();
}

// --- 13. مستمعي الأحداث والربط (EVENT LISTENERS INITIALIZATION) ---
function initApp() {
  // تحميل السلة من التخزين المحلي
  loadCartFromLocalStorage();

  // 1. منطق شاشة الترحيب واختيار اللغة الأولي
  const savedLang = localStorage.getItem("celeste_menu_lang");
  if (savedLang) {
    applyLanguage(savedLang);
    splashScreen.classList.add("fade-out");
    mainSite.classList.add("visible");
  }

  document.getElementById("btn-lang-ar").addEventListener("click", () => {
    localStorage.setItem("celeste_menu_lang", "ar");
    applyLanguage("ar");
    splashScreen.classList.add("fade-out");
    mainSite.classList.add("visible");
  });

  document.getElementById("btn-lang-en").addEventListener("click", () => {
    localStorage.setItem("celeste_menu_lang", "en");
    applyLanguage("en");
    splashScreen.classList.add("fade-out");
    mainSite.classList.add("visible");
  });

  // 2. شريط التنقل العلوي وتأثير السكرول
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      document.getElementById("site-header").classList.add("scrolled");
    } else {
      document.getElementById("site-header").classList.remove("scrolled");
    }
  });

  // 3. تبديل اللغة من القائمة العلوية
  langMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdownMenu.classList.toggle("show");
  });

  window.addEventListener("click", () => {
    langDropdownMenu.classList.remove("show");
  });

  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.addEventListener("click", (e) => {
      const selected = e.target.getAttribute("data-lang");
      localStorage.setItem("celeste_menu_lang", selected);
      applyLanguage(selected);
    });
  });

  // 4. استدعاء النادل
  document.getElementById("btn-call-waiter").addEventListener("click", () => {
    const table = cartTableNumberInput.value.trim() || "?";
    const title = currentLanguage === "ar" ? "تم نداء النادل بنجاح!" : "Waiter Summoned!";
    const desc = currentLanguage === "ar"
      ? `طاولة رقم (${table})، تم التنبيه وسيصلك نادل الخدمة فوراً لمساعدتك.`
      : `Table (${table}), a service waiter has been notified and is coming to assist you shortly.`;
    
    showGeneralNotification(title, desc);
  });

  // 5. أحداث فتح وإغلاق السلة الجانبية
  cartTriggerBtn.addEventListener("click", () => {
    cartDrawerContainer.classList.add("show");
  });

  closeCartBtn.addEventListener("click", () => {
    cartDrawerContainer.classList.remove("show");
  });

  cartDrawerOverlayBg.addEventListener("click", () => {
    cartDrawerContainer.classList.remove("show");
  });

  // 6. تصفح الفئات
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      activeFilters.category = tab.getAttribute("data-category");
      renderDishes();
    });
  });

  // روائع التمرير السلس للموبايل عند النقر على فئات الفوتر أو الهيدر
  document.querySelectorAll("[data-category-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.getAttribute("data-category-link");
      
      // تفعيل زر التبويب
      categoryTabs.forEach(t => {
        t.classList.remove("active");
        if (t.getAttribute("data-category") === cat) t.classList.add("active");
      });

      activeFilters.category = cat;
      renderDishes();

      // التمرير لمكان القائمة
      const menuSection = document.getElementById("menu-section");
      menuSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // 7. رقاقات تصفية الحالات الغذائية
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("active");
      const filterType = chip.getAttribute("data-filter");
      
      // عكس الحالة للفلتر المفعل
      activeFilters[filterType] = chip.classList.contains("active");
      renderDishes();
    });
  });

  // 8. البحث الفوري
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    activeFilters.search = val;
    
    if (val.trim() !== "") {
      clearSearchBtn.style.display = "block";
    } else {
      clearSearchBtn.style.display = "none";
    }
    
    renderDishes();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    activeFilters.search = "";
    clearSearchBtn.style.display = "none";
    renderDishes();
  });

  btnResetFilters.addEventListener("click", resetAllFilters);

  // 9. تفاعلات المودال
  closeDetailModalBtn.addEventListener("click", closeDishDetailModal);
  
  // النقر خارج المودال لإغلاقه
  dishDetailModal.addEventListener("click", (e) => {
    if (e.target === dishDetailModal) {
      closeDishDetailModal();
    }
  });

  // تعديل الكميات بالمودال
  btnQtyMinus.addEventListener("click", () => {
    if (currentModalQty > 1) {
      currentModalQty--;
      updateModalTotalAndQty();
    }
  });

  btnQtyPlus.addEventListener("click", () => {
    currentModalQty++;
    updateModalTotalAndQty();
  });

  // تغيير الإضافات بالمودال
  optExtraCheese.addEventListener("change", updateModalTotalAndQty);
  optGlutenFreeBread.addEventListener("change", updateModalTotalAndQty);

  // إضافة للسلة من المودال
  btnModalAddToCart.addEventListener("click", () => {
    if (!selectedDishForModal) return;

    let cookLevel = "";
    if (selectedDishForModal.customizable.steak) {
      const selectedCook = document.querySelector('input[name="steak-cook"]:checked');
      if (selectedCook) {
        cookLevel = selectedCook.value;
      }
    }

    addToCart(selectedDishForModal, currentModalQty, {
      notes: "", // يمكن إضافتها من السلة مباشرة لتسهيل التصفح
      steakCook: cookLevel,
      extraCheese: selectedDishForModal.customizable.cheese && optExtraCheese.checked,
      gfBread: selectedDishForModal.customizable.bread && optGlutenFreeBread.checked
    });

    closeDishDetailModal();
    cartDrawerContainer.classList.add("show"); // فتح السلة تلقائياً لرؤية الطلب
  });

  // 10. إرسال الطلب
  btnSubmitOrder.addEventListener("click", submitOrderViaWhatsApp);

  // إغلاق إشعار التنبيه
  btnCloseNotification.addEventListener("click", () => {
    notificationModalOverlay.classList.remove("show");
  });
  
  notificationModalOverlay.addEventListener("click", (e) => {
    if (e.target === notificationModalOverlay) {
      notificationModalOverlay.classList.remove("show");
    }
  });

  // الفحص الأولي للريندر
  applyLanguage("ar");
}

// تشغيل عند استعداد عناصر الصفحة
document.addEventListener("DOMContentLoaded", initApp);
