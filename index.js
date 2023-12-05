const games = [
    {name: 'God of War', platform: 'PS4', genre: 'Adventure'},
    {name: 'Halo', platform: 'Xbox', genre: 'Action'},
    {name: 'Red Dead Redemption', platform: 'PS4', genre: 'Adventure'},
    {name: 'Bloodborne', platform: 'PS4', genre: 'Adventure'},
    {name: 'Death Stranding', platform: 'PS4', genre: 'Science-fiction'},
    {name: 'Gears of war', platform: 'Xbox', genre: 'Action'}
];

const gamesList = document.getElementById('game-list');

displayGames(games);

function displayGames (list) {
    clearList();
    list.forEach( game => {
        const listElement = document.createElement('li');
        listElement.textContent = `${game.name} - ${game.platform} - ${game.genre}`;
        gamesList.appendChild(listElement);
    })
}

function filterGames () {
    const searchInput = document.getElementById('search').value;
    const platformInput = document.getElementById('platform').value;
    const genreInput = document.getElementById('genre').value;

    const filteredList = games.filter( game => {
        const searchCondition = searchInput === '' || game.name.toLowerCase().includes(searchInput.toLowerCase());
        const platformCondition = platformInput === 'all' || platformInput === game.platform.toLowerCase();
        const genreCondition = genreInput === 'all' || genreInput === game.genre.toLowerCase();

        return searchCondition && platformCondition && genreCondition;
    })
    
    displayGames(filteredList);
}

function clearList () {
    gamesList.innerHTML = '';
}

function redirectToForm () {
    const addGameForm = document.getElementById('new-game');
    addGameForm.style.display = 'block';
    addGameForm.scrollIntoView();
}

function addNewGame () {
    const nameInput = document.getElementById('name').value;
    const platformInput = document.getElementById('platformNew').value;
    const genreInput = document.getElementById('genreNew').value;

    const newGame = {
        name: nameInput,
        platform: platformInput,
        genre: genreInput
    };

    games.push(newGame);

    displayGames(games);
}
