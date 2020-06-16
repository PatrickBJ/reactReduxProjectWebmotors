import { comboVersao } from '../resources/buscaCombos';

export const buscaVersao = (idModelo, modelos) => {
    return async (dispatch) => {
        try{
            dispatch({type:"Modelo", modelo: idModelo});
            dispatch({type:"Versao", versao: -1});

            const data = await comboVersao(modelos);
            return dispatch({
                type: "ComboVersao",
                comboVersao: data
            });
        }
        catch(error){
            throw (error);
        }
    };
};