document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault(); // منع تقديم النموذج الافتراضي

    const users = [
        "fr.mohannd.hassen",
        "fr.julia.s.zaky",
        "fr.minah.m.hssn",
        "fr.fouadd.a.hsn",
        "fr.shahd.k.shebl"
    ];

    const password = "Abcd12345@";

    const username = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    if (users.includes(username) && enteredPassword === password) {
        window.location.href = 'home.html'; // الانتقال إلى صفحة data إذا كان الحساب صحيحًا
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة'); // رسالة تحذير إذا كانت البيانات خاطئة
    }
});
