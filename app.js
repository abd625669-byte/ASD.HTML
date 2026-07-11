<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منيو المطعم الرقمي</title>
    <style>
        :root {
            --bg-color: #1a1a1a;
            --card-bg: #262626;
            --accent-color: #ff9f43;
            --text-color: #ffffff;
            --neon-gold: #ffca28;
        }
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
        }
        h1 { text-align: center; color: var(--accent-color); text-shadow: 0 0 10px var(--accent-color); }
        .table-select { display: block; margin: 20px auto; padding: 10px; width: 200px; background: var(--card-bg); color: #fff; border: 1px solid var(--accent-color); border-radius: 5px; }
        .menu-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; }
        .menu-item { background-color: var(--card-bg); border-radius: 10px; padding: 15px; border-left: 4px solid var(--accent-color); box-shadow: 0 4px 15px rgba(0,0,0,0.3); transition: 0.3s; }
        .menu-item:hover { box-shadow: 0 0 15px var(--neon-gold); }
        .item-title { font-size: 1.2rem; font-weight: bold; margin: 0 0 10px 0; display: flex; justify-content: space-between; }
        .price { color: var(--neon-gold); }
        .desc { font-size: 0.9rem; color: #b3b3b3; margin-bottom: 15px; min-height: 40px; }
        .order-btn { width: 100%; background: var(--accent-color); color: #000; border: none; padding: 10px; font-weight: bold; border-radius: 5px; cursor: pointer; transition: 0.2s; }
        .order-btn:hover { background: #fff; }
    </style>
</head>
<body>

    <h1>قائمة الطعام الحية</h1>
    
    <!-- تحديد الطاولة من الـ 50 طاولة المتوفرة -->
    <select id="tableNum" class="table-select"></select>

    <div class="menu-container" id="menuGrid"></div>

    <script type="module">
        import { db, collection, addDoc, menuItems } from './data.js';

        // توليد الـ 50 طاولة في القائمة المنسدلة
        const tableSelect = document.getElementById('tableNum');
        for (let i = 1; i <= 50; i++) {
            let opt = document.createElement('option');
            opt.value = i;
            opt.textContent = `طاولة رقم ${i}`;
            tableSelect.appendChild(opt);
        }

        // عرض الوجبات في الصفحة
        const menuGrid = document.getElementById('menuGrid');
        menuItems.forEach(item => {
            if(item.available) {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'menu-item';
                itemDiv.innerHTML = `
                    <div class="item-title">
                        <span>${item.name}</span>
                        <span class="price">${item.price.toLocaleString()} د.ع</span>
                    </div>
                    <div class="desc">${item.description}</div>
                    <button class="order-btn" data-id="${item.id}" data-name="${item.name}">إرسال الطلب للمطبخ</button>
                `;
                menuGrid.appendChild(itemDiv);
            }
        });

        // إرسال الطلب إلى سيرفر فايربيز (Firestore) حياً ومباشرة
        menuGrid.addEventListener('click', async (e) => {
            if (e.target.classList.contains('order-btn')) {
                const itemName = e.target.getAttribute('data-name');
                const tableNo = tableSelect.value;

                try {
                    await addDoc(collection(db, "orders"), {
                        itemName: itemName,
                        tableNumber: parseInt(tableNo),
                        timestamp: new Date().getTime(),
                        status: "pending"
                    });
                    alert(`تم إرسال طلبك (${itemName}) من طاولة ${tableNo} إلى المطبخ بنجاح!`);
                } catch (error) {
                    console.error("خطأ في إرسال الطلب: ", error);
                    alert("فشل الاتصال بالسيرفر، تأكد من إعدادات الـ Rules");
                }
            }
        });
    </script>
</body>
</html>
