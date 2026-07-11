// 1. استدعاء مكتبات فايربيز وقاعدة البيانات الحية (Firestore)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. كود الإعداد الأخير والخاص بسيرفرك (dayna-mic)
const firebaseConfig = {
    apiKey: "AIzaSyCaDGGpx4gdya_L1Nlf38AyyPWXvvZp7RM",
    authDomain: "dayna-mic.firebaseapp.com",
    projectId: "dayna-mic",
    storageBucket: "dayna-mic.firebasestorage.app",
    messagingSenderId: "240486085726",
    appId: "1:240486085726:web:3badf345cb456728b2f0cf",
    measurementId: "G-JPPQMW8HEK"
};

// 3. تشغيل وربط السيرفر بالكود لتبادل الطلبات حياً
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// تصدير الأدوات لتستخدمها باقي الملفات
export { db, collection, addDoc, onSnapshot, query, orderBy };

// 4. مصفوفة الـ 500 عنصر (يمكنك إكمال بقية الوجبات هنا داخل المصفوفة)
export const menuItems = [
    { id: 1, name: "برجر كلاسيك", category: "burgers", price: 7500, description: "لحم بقري مشوي، جبنة، خس، طماطم، صوص خاص", available: true },
    { id: 2, name: "برجر باربيكيو تشيز", category: "burgers", price: 8500, description: "لحم بقري، جبن شيدر، بصل مكرمل، صوص باربيكيو", available: true },
    { id: 3, name: "بيتزا مارغريتا", category: "pizza", price: 9000, description: "صلصة طماطم ايطالية، موزاريلا فريش، ريحان", available: true },
    { id: 4, name: "باستا ألفريدو", category: "pasta", price: 11000, description: "مكرونة فوتشيني، صوص الكريمة الغني، دجاج مشوي", available: true },
    { id: 5, name: "موهيتو بلو بري", category: "drinks", price: 4000, description: "نعناع طازج، ليمون، صوص التوت الأزرق، صودا", available: true }
    // يمكنك الاستمرار في إضافة بقية الـ 500 عنصر هنا بنفس النمط البرمجي
];
