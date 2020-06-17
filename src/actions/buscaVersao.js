import { comboVersao } from '../resources/buscaCombos';

export const buscaVersao = (idModelo, modelos) => {
    return async (dispatch) => {
        try{
            dispatch({type:"Modelo", modelo: idModelo});
            dispatch({type:"Versao", versao: -1});

            const data = await comboVersao(modelos);

            dispatch({
                type:"RecarregarComboVersao",
                recarregarComboVersao: data == null || data.length <=0
            })

            return dispatch({
                type: "ComboVersao",
                comboVersao: data
            });
        }
        catch(error){
            dispatch({
                type:"RecarregarComboVersao",
                recarregarComboVersao: true
            })
        }
    };
};