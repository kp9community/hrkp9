const params = new URLSearchParams(window.location.search);
const username = params.get("username");

fetch("data/users.json")
  .then(r => r.json())
  .then(users => {
    const user = users[username];

    if (!user) {
      document.body.innerHTML = "<h2>ไม่พบข้อมูลผู้ใช้</h2>";
      return;
    }

    document.getElementById("name").textContent = user.fullname;
    document.getElementById("role").textContent = "ตำแหน่ง: " + user.role;
    document.getElementById("org").textContent = "หน่วยงาน: " + user.org;
    document.getElementById("email").textContent = "Email: " + user.email;
  });
