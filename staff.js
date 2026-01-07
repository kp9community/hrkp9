fetch("data/users.json")
  .then(res => res.json())
  .then(users => {
    const container = document.getElementById("staffList");

    Object.values(users).forEach(u => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${u.fullname}</h3>
        <p>${u.role}</p>
        <p>${u.org}</p>
      `;
      container.appendChild(card);
    });
  });
