const params = new URLSearchParams(window.location.search);

// รับชื่อจาก AuthPro
const name =
  params.get("name") ||
  params.get("username") ||
  "ผู้ใช้งาน";

// แสดงชื่อ
document.getElementById("welcome").textContent =
  `ยินดีต้อนรับ ${name}`;

// โหลดข้อมูลจาก JSON
fetch("data/users.json")
  .then(r => r.json())
  .then(users => {
    const user = users[name];

    // ปุ่มโปรไฟล์
    document.getElementById("profileBtn").href =
      `profile.html?name=${encodeURIComponent(name)}`;

    // ถ้าเป็น Manager
    if (user && user.role === "Manager") {
      document.getElementById("managerBtn").style.display = "block";
      document.getElementById("managerBtn").textContent =
        "Dashboard ผู้จัดการ";
    }
  });

// Logout กลับ AuthPro
document.getElementById("logoutBtn").onclick = () => {
  window.location.href = "https://www.authpro.com/auth/100000/?action=logout";
};
