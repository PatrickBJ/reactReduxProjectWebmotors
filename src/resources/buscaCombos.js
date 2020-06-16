import client from './instance';
import axios from 'axios'

const comboMarca = async() => await client.get("Make?api_key=Model");

const comboModelo = async (marcas) => {
    let totalData = [];

    const requests = marcas.map((id) => 
        client.get(`Model?MakeID=${id}&api_key=Model`)
    );

    await axios.all(requests).then(axios.spread((...responses) => {
        totalData = responses.reduce((total, {data}) => total = [...total, ...data], []);
    })).catch(errors => {
        throw errors;
    })

    return totalData;
}

const comboVersao = async(modelos) => {
    let totalData = [];

    const requests = modelos.map((id) => 
        client.get(`Version?ModelID=${id}&api_key=Model`)
    );

    await axios.all(requests).then(axios.spread((...responses) => {
        totalData = responses.reduce((total, {data}) => total = [...total, ...data], []);
    })).catch(errors => {
        throw errors;
    })

    return totalData;
}

//#region Combos fixos

const comboRaio = [ "1Km", "5Km", "10Km", "15Km", "20Km", "25Km", "30Km", "50Km", "100Km"];
const comboAno = [ 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
const comboPreco = [ "10 - 20", "20 - 30", "30 - 40", "40 - 50", "50 - 60", "60 - 80", "70 - 100"];

//#endregion

export { comboRaio, comboAno, comboPreco, comboMarca, comboModelo, comboVersao }