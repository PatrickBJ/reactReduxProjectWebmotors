import client from './index'

//Tem que informar o id do Modelo antes (é em cascata)
// http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=1&api_key=Model

//Veiculos tem que informar a página
// http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1&api_key=Model

const comboMarca = async() => await client.get("Make?api_key=Model");
const comboModelo = async(idMarca) => await client.get(`Model?MakeID=${idMarca}&api_key=Model`);
const comboVersao = async(idModelo) => await client.get(`Version?ModelID=${idModelo}&api_key=Model`);

//#region Combos fixos

const comboLocal = [ "São Paulo", "Vitória", "Serra", "Alphaville"];

const comboRaio = [ 1, 5, 10, 15, 20, 25, 30, 50, 100];

const comboAno = [ 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
const comboPreco = [ "10 - 20", "20 - 30", "30 - 40", "40 - 50", "50 - 60", "60 - 80", "70 - 100"];

const bdMarca = [ 
    {id: 0, text: "Todos"},
    {id: 1, text: "marca 1"},
    {id: 2, text: "marca 2"},
    {id: 3, text: "marca 3"},
    {id: 4, text: "marca 4"},
    {id: 5, text: "marca 5"},
];

const bdModelo = [ 
    {id: 0, text: "Todos"},
    {id: 1, text: "modelo 1"},
    {id: 2, text: "modelo 2"},
    {id: 3, text: "modelo 3"},
    {id: 4, text: "modelo 4"},
    {id: 5, text: "modelo 5"},
];

const bdVersao = [ 
    {id: 0, text: "Todos"},
    {id: 1, text: "versao 1"},
    {id: 2, text: "versao 2"},
    {id: 3, text: "versao 3"},
    {id: 4, text: "versao 4"},
    {id: 5, text: "versao 5"},
];

//#endregion

export { comboLocal, comboRaio, comboAno, comboPreco, comboMarca, comboModelo, comboVersao }