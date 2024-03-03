document.addEventListener("DOMContentLoaded", function () {
  fetch("hero.json")
    .then((response) => response.json())
    .then((data) => {
      const heros = data.cards.filter((card) => card.battlegrounds.hero);
      fetch("hero-detail.json")
        .then((response) => response.json())
        .then((detail) => {
          const container = document.getElementById("cards-container");

          heros.forEach((card) => {
            const cardElement = document.createElement("div");

            const detailData = detail.cards.filter(
              (detailCard) => detailCard.parentId === card.id
            );
            cardElement.innerHTML = `
                <div class="hero-item">
                    <a href="hero?${card.slug}">
                        <div>
                            <h3>${card.name}</h3>
                            <img 
                                src="${card.image}" alt="${card.name}" 
                                style="width:100px;
                            ">
                            <p class="hero-power">
                                効果: ${
                                  detailData.length
                                    ? detailData[0].text
                                    : "準備中"
                                }
                            </p>
                            <p class="hero-power">アーマー: ${card.armor}</p>
                        </div>
                    </a>
                </div>
                `;
            cardElement.classList.add("hero");
            container.appendChild(cardElement);
          });
        })
        .catch((error) => {
          console.error("データの取得に失敗しました:", error);
        });
    })
    .catch((error) => {
      console.error("データの取得に失敗しました:", error);
    });
});
