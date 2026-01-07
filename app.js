const params = new URLSearchParams(window.location.search);
const username = params.get("username");

if (!username) {
  alert("กรุณาล็อกอินผ่านระบบก่อน");
  location.href = "/";
}

document.getElementById("welcome").textContent =
  `ยินดีต้อนรับ ${username}`;

document.getElementById("profileLink").href =
  `profile.html?username=${username}`;

document.getElementById("staffLink").href =
  `staff.html?username=${username}`;
