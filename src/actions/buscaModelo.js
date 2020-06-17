import { comboModelo } from '../resources/buscaCombos';

export const buscaModelo = (idMarca, marcas) => {
    return async (dispatch) => {
        try{
            dispatch({type:"Marca", marca: idMarca});
            dispatch({type:"Modelo", modelo: -1});
            dispatch({type:"Versao", versao: -1});
            dispatch({type: "ComboVersao", comboVersao: []});
            
            const data = await comboModelo(marcas);

            dispatch({
                type:"RecarregarComboModelo",
                recarregarComboModelo: data == null || data.length <=0
            })

            return dispatch({
                type: "ComboModelo",
                comboModelo: data
            });
        }
        catch(error){
            dispatch({
                type:"RecarregarComboModelo",
                recarregarComboModelo: true
            })
        }
    };
};