const container = document.querySelector('div');

const getPokemons = async () => {

    const promises = [];
    const count = 151;
    
    for (let i = 1; i <= count; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
        const res = await fetch(url);

        promises.push(res.json());

    }

    Promise.all(promises)
        .then(res => {
            const pokemon = res.map(data => ({
                id: data.id,
                name: data.name,
                image: data.sprites.other['official-artwork']['front_default'],
                type: data.types.map(type => type.type.name).join(', ')
            }));

            getPokemon(pokemon)
        })
}


// Recebo os dados e faço um map de cada um recebido
const getPokemon = (pokemon) => {
    const template = `
        ${pokemon.map(pok => (
            `<div class="card">
                <p>${pok.id}</p>
                <p>${pok.name}</p>
                <img src=${pok.image} />
                <p>${pok.type}</p>
            </div>`
        )).join('')}
    `;

    container.innerHTML = template;
}

getPokemons()