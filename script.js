fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('card-grid');

    data.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${entry.image}" alt="${entry.stage_name}" class="profile-pic" />
        <h2>${entry.stage_name}</h2>
        <button class="see-more">See More</button>
        <div class="extra-info hidden">
          <p>${getRoleEmoji(entry.role)} ${entry.role} · ${entry.origin}</p>
        </div>
      `;

      card.querySelector('.see-more').addEventListener('click', () => {
        card.querySelector('.extra-info').classList.toggle('hidden');
      });

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
