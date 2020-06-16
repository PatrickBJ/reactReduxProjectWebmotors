import { comboModelo } from '../resources/buscaCombos';

export const buscaModelo = (idMarca) => {
    return async (dispatch) => {
        try{
            dispatch({type:"Marca", marca: idMarca});
            dispatch({type:"Modelo", modelo: -1});
            dispatch({type:"Versao", versao: -1});
            dispatch({type: "ComboVersao", comboVersao: []});
            
            const {data} = await comboModelo(idMarca);

            return dispatch({
                type: "ComboModelo",
                comboModelo: data
            });
        }
        catch(error){
            throw (error);
        }
    };
};