import client from './instance';
import axios from 'axios'

const comboMarca = async() => await client.get("Make?api_key=Model");

const comboModelo = async(idMarca) => await client.get(`Model?MakeID=${idMarca}&api_key=Model`);

const comboVersao = async(idModelo) => await client.get(`Version?ModelID=${idModelo}&api_key=Model`);

//#region Combos fixos

const comboRaio = [ "1Km", "5Km", "10Km", "15Km", "20Km", "25Km", "30Km", "50Km", "100Km"];
const comboAno = [ 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
const comboPreco = [ "10 - 20", "20 - 30", "30 - 40", "40 - 50", "50 - 60", "60 - 80", "70 - 100"];

//#endregion

export { comboRaio, comboAno, comboPreco, comboMarca, comboModelo, comboVersao }