const team = [
  { name: "Alex Rivers", role: "Senior Developer", available: true },
  { name: "Samantha Chen", role: "UX Designer", available: false },
  { name: "Jordan Taylor", role: "Project Manager", available: true },
  { name: "Maria Garcia", role: "Marketing Lead", available: false }
];

const container = document.getElementById("team");

function render() {
  container.innerHTML = "";

  team.forEach((member, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <strong>${member.name}</strong> - ${member.role}
      <button onclick="toggle(${index})">
        ${member.available ? "AVAILABLE" : "BUSY"}
      </button>
    `;

    container.appendChild(div);
  });
}

function toggle(index) {
  team[index].available = !team[index].available;
  render();
}

render();
