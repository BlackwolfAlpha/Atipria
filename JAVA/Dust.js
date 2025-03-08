function getRandomPosition(element) {
    const rect = element.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    return { x, y };
}

function createDustEffect() {
    const container = document.querySelector(".flex-1.p-6.relative");
    if (!container) return;

    for (let i = 0; i < 7; i++) {
        const dust = document.createElement("div");
        dust.classList.add("dust");

        const { x, y } = getRandomPosition(container);
        dust.style.left = `${x}px`;
        dust.style.top = `${y}px`;

        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        dust.style.setProperty('--x', `${randomX}px`);
        dust.style.setProperty('--y', `${randomY}px`);

        container.appendChild(dust);

        setTimeout(() => {
            dust.remove();
        }, 2000);
    }
}

setInterval(createDustEffect, 800);

document.getElementById('learnMoreBtn').addEventListener('click', function() {
  var content = document.getElementById('additionalContentSideBySide');
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    setTimeout(function() {
      content.classList.add('show');
    }, 1);
  } else {
    content.classList.remove('show');
    setTimeout(function() {
      content.classList.add('hidden');
    }, 1);
  }
});