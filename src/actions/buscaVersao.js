import { comboVersao } from '../resources/buscaCombos';

export const buscaVersao = (idModelo) => {
    return (dispatch) => {
        dispatch({type:"Modelo", modelo: idModelo});
        return comboVersao(idModelo)
            .then(response => {
                return [{ID:0, Name:"Todas"}, ...response.data];
            })
            .then(data => {
                dispatch({
                    type: "ComboVersao",
                    comboVersao: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};