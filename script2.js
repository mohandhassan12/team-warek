// قائمة أسماء المستخدمين
const users = {
    "fr.mohannd.hassen": "Mohand",
    "fr.minah.m.hssn": "Mina",
    "fr.fouadd.a.hsn": "Fouad",
    "fr.julia.s.zaky": "Julia",
    "fr.shahd.k.shebl": "Shahd"
  };
  
  // الحصول على اسم المستخدم من localStorage
  const username = localStorage.getItem('username');
  
  // تحويل اسم المستخدم إلى الاسم المعرّف
  const displayName = users[username] || username;
  
  // عرض الاسم المعرّف
  document.getElementById('username').textContent = displayName;
  
  // التحقق من صلاحية المدير
  const isAdmin = username === 'fr.mohannd.hassen';
  const adminCards = document.querySelectorAll('.card[v-if="isAdmin"]');
  adminCards.forEach(card => {
    card.style.display = isAdmin ? 'flex' : 'none';
  });
  
  // دالة تبديل الوضع
  function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
  }
  
  // إضافة رسالة تأكيد عند تسجيل الخروج
  document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
      localStorage.removeItem('username');
      window.location.href = 'index.html';
    }
  });