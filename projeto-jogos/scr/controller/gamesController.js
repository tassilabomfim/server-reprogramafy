// const { response } = require('express')
// const nodemon = require('nodemon')
// const { request } = require('../../../src/app')
const games = require ('../model/games.json')

const listaJogos = games.map(jogos => {
    const lsJogos = {
        id: jogos.id,
        nome: jogos.name,
        genero: jogos.genre,
        plataforma: jogos.platforms,
        capa: jogos.cover
    }
    return lsJogos
})

const jogosById = games.map(newid => {
    const byId = {
        id: newid.id,
        nome: newid.name,
        genero: newid.genre,
        plataformas: newid.platforms,
        data_lancamento: newid.first_release_date,
        slug: newid.slug,
        resumo: newid.summary,
        empresa:newid.company,
        capa: newid.cover
    }
    return byId
})

const gameID = games.map(element => {
    const byIdName = {
        id: element.id,
        nome: element.name
    }
    return byIdNamez
})

//Retorna todas os jogos da API

const getGames = (request, response) => {
    console.log(request.url)
    response.status(200).send(listaJogos)
}

//Retorna apenas os dados do jogo com um determinado id

const getGamesById = (request, response) => {
    //response.status(200).send(listaJogos)
    const id = request.params.id
    //console.log(request.url)

    const jogo = jogosById.find(item => item.id == id)
    console.log(jogo)
    if (jogo) {
        response.status(200).send(jogo)
    } else {
        response.status(400).send({Mensagem: "ID não existe! Informe um ID valido", gameID})
    }

}


module.exports = {
    getGames,
    getGamesById
}