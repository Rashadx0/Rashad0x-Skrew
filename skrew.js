// استيراد واستخدام وحدة prompt-sync للسماح لنا بأخذ إدخال المستخدم
const prompt = require('prompt-sync')();

// طلب عدد اللاعبين من المستخدم
const numPlayers = parseInt(prompt('الرجاء إدخال عدد اللاعبين: '));

// تهيئة مصفوفة لتخزين أسماء اللاعبين والنقاط
let players = [];
let points = [];

// ملء مصفوفة اللاعبين بأسماء اللاعبين
for (let i = 0; i < numPlayers; i++) {
    let playerName = prompt(`الرجاء إدخال اسم اللاعب رقم ${i + 1}: `);
    players.push(playerName);
    points.push(0); // تعيين نقاط كل لاعب إلى البداية
}

// عرض الجدول البدائي لأسماء اللاعبين
console.log("\nجدول اللاعبين:");
console.table(players);

// تحديد الفائز
let winnerIndex = -1;
let maxPoints = -1;

// طلب من كل لاعب وضع رقمه
for (let i = 0; i < numPlayers; i++) {
    let playerNumber = parseInt(prompt(`الرجاء ${players[i]} وضع رقمك: `));
    points[i] += playerNumber; // إضافة الرقم المدخل لنقاط اللاعب

    // التحقق إذا كان اللاعب الحالي يمتلك نقاطًا أكبر من الفائز السابق
    if (points[i] > maxPoints) {
        maxPoints = points[i];
        winnerIndex = i;
    }
}

// عرض جدول النقاط
console.log("\nجدول النقاط:");
console.table(points);

// عرض اسم الفائز
console.log(`\n${players[winnerIndex]} هو الفائز بنقاط مجموعه ${maxPoints}!`);
