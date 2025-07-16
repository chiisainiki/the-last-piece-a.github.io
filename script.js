fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('card-grid');

    const topPicks = [
      "RUI (川島塁)",
      "KANON (湯本日穏)",
      "KEI (岡野敬)",
      "A.J. (明星アダム)",
      "SHO (ウイリアムズ昌)",
      "TAIKI (溝口太基)",
      "RAIKI (松村來輝)",
      "YUTA (松澤侑汰)",
      "ADAM (アヤロンアダム)"
    ];

    data.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'card';
      if (topPicks.includes(entry.stage_name)) {
        card.classList.add('top-pick');
      }

      card.innerHTML = `
        <img src="${entry.image}" alt="${entry.stage_name}" />
        <h2>${entry.stage_name}</h2>
        <p>${getRoleEmoji(entry.role)} ${entry.role} · ${entry.origin}</p>
      `;

      grid.appendChild(card);
    });
  });

function getRoleEmoji(role) {
  const map = {
    "Vocalist": "🎤",
    "Dancer": "🕺",
    "Rapper": "🎙️",
    "All-rounder": "🌟",
    "Trainee": "🌱",
    "Visual": "👁️"
  };
  return map[role] || "";
}
