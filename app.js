const params = new URLSearchParams(window.location.search);

// รับชื่อจาก AuthPro
const name =
  params.get("name") ||
  params.get("username") ||
  "ผู้ใช้งาน";

// แสดงชื่อ
document.getElementById("welcome").textContent =
  `ยินดีต้อนรับ ${name}`;

// ✅ ตั้ง href ทันที (ไม่รอ fetch)
document.getElementById("profileBtn").href =
  `profile.html?name=${encodeURIComponent(name)}`;

// โหลด role จาก JSON (เพื่อแสดงปุ่ม Manager)
fetch("data/users.json")
  .then(r => r.json())
  .then(users => {
    const user = users[name];

    if (user && user.role === "Manager") {
      const managerBtn = document.getElementById("managerBtn");
      managerBtn.style.display = "block";
      managerBtn.textContent = "Dashboard ผู้จัดการ";
      managerBtn.href = "#"; // หรือหน้า manager.html ในอนาคต
    }
  })
  .catch(() => {
    // ถ้าโหลด JSON ไม่ได้ ก็ยังใช้งานปกติ
    console.log("โหลดข้อมูล role ไม่ได้ แต่ระบบยังใช้งานได้");
  });

// Logout กลับ AuthPro
document.getElementById("logoutBtn").onclick = () => {
  window.location.href = "https://www.authpro.com/auth/100000/?action=logout";
};

