// ===== MENU HAMBÚRGUER =====
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburgerBtn');
  const navList = document.querySelector('.nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navList.classList.toggle('open');
    });

    // Fechar menu ao clicar em um link (mobile)
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('open');
      });
    });
  }

  // ===== FLASHCARDS: dados e renderização =====
  const flashcardData = [
    { pergunta: 'O que é daltonismo?', resposta: 'É uma deficiência na percepção de cores, geralmente genética.' },
    { pergunta: 'Qual a causa mais comum?', resposta: 'Mutações nos genes dos cones da retina, no cromossomo X.' },
    { pergunta: 'Quantos % dos homens têm?', resposta: 'Cerca de 8% dos homens e 0,5% das mulheres.' },
    { pergunta: 'O que são cones?', resposta: 'Fotorreceptores da retina que captam cores (vermelho, verde, azul).' },
    { pergunta: 'Como é o teste Ishihara?', resposta: 'Placas com pontos coloridos que formam números; daltônicos têm dificuldade.' },
    { pergunta: 'Existe cura?', resposta: 'Não há cura, mas lentes e apps ajudam na distinção de cores.' }
  ];

  const grid = document.getElementById('flashcardGrid');
  if (grid) {
    flashcardData.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'flashcard glass';
      card.dataset.index = index;

      card.innerHTML = `
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <h4>${item.pergunta}</h4>
          </div>
          <div class="flashcard-back">
            <p>${item.resposta}</p>
          </div>
        </div>
      `;

      // Interação: clique para virar
      card.addEventListener('click', function(e) {
        this.classList.toggle('flipped');
      });

      grid.appendChild(card);
    });
  }
});