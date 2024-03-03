document.addEventListener('DOMContentLoaded', function() {
    fetch('https://batogura.com/hero-detail.json')
        .then(response => response.json())
        .then(data => {
            const filteredCards = data.cards.filter(card => card.classId === 12);
            const container = document.getElementById('cards-container');

            data.cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.innerHTML = `
                    <h3>${card.name}</h3>
                    <img src="${card.image}" alt="${card.name}" style="width:200px;">
                    <p>効果: ${card.text}</p>
                    <p>ヘルス: ${card.health}</p>
                    <p>マナコスト: ${card.manaCost}</p>
                    <p>アーマー: ${card.armor}</p>
                    <p>アーティスト: ${card.artistName}</p>
                `;
                container.appendChild(cardElement);
            });
        })
        .catch(error => {
            console.error('データの取得に失敗しました:', error);
        });
});
