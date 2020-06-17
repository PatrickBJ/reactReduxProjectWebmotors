import { comboMarca } from '../resources/buscaCombos';

export const buscaMarca = () => {
    return async (dispatch) => {
        try{
            let {data} = await comboMarca();

            dispatch({
                type:"RecarregarComboMarca",
                recarregarComboMarca: data == null || data.length <=0
            })

            return dispatch({
                type: "ComboMarca",
                comboMarca: data
            });
        }
        catch(error){
            dispatch({
                type:"RecarregarComboMarca",
                recarregarComboMarca: true
            })
        }
    };
};