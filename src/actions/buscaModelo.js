import { comboModelo } from '../resources/buscaCombos';

export const buscaModelo = (idMarca) => {
    return (dispatch) => {
        dispatch({type:"Marca", marca: idMarca});
        return comboModelo(idMarca)
            .then(response => {
                return [{ID:0, Name:"Todas"}, ...response.data];
            })
            .then(data => {
                dispatch({
                    type: "ComboModelo",
                    comboModelo: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};