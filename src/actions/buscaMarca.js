import { comboMarca } from '../resources/buscaCombos';

export const buscaMarca = () => {
    return async (dispatch) => {
        try{
            let {data} = await comboMarca();
            return dispatch({
                type: "ComboMarca",
                comboMarca: data
            });
        }
        catch(error){
            throw (error);
        }
    };
};