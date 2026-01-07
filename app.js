

const params = new URLSearchParams(window.location.search);

// รับชื่อจาก AuthPro (ใช้ name)
const name =
  params.get("name") ||
  params.get("username") ||
  "ผู้ใช้งาน";

// แสดงชื่อ
document.getElementById("welcome").textContent =
  `ยินดีต้อนรับ ${name}`;

// ✅ ลิงก์ต้องชี้ภายใน repo hrkp9
document.getElementById("profileBtn").href =
  `profile.html?name=${encodeURIComponent(name)}`;

// โหลด role จาก JSON (เพื่อแยก Manager / Staff)
fetch("data/users.json")
  .then(r => r.json())
  .then(users => {
    const user = users[name];

    if (user && user.role === "Manager") {
      const managerBtn = document.getElementById("managerBtn");
      managerBtn.style.display = "block";
      managerBtn.textContent = "Dashboard ผู้จัดการ";
      managerBtn.href = "#"; // ไว้ทำ manager.html ทีหลัง
    }
  })
  .catch(() => {
    console.log("โหลด role ไม่ได้ แต่ระบบยังใช้งานได้");
  });

// 🔴 Logout กลับ AuthPro (สำคัญ)
document.getElementById("logoutBtn").onclick = () => {
  window.location.href =
    "https://www.authpro.com/auth/100000/?action=logout"; // 👈 ใส่ logout URL จริงของ AuthPro
};


