import { comboMarca } from '../resources/buscaCombos';

export const buscaMarca = () => {
    return async (dispatch) => {
        try{

            dispatch({
                type:"Loading",
                loading: true
            });

            let {data} = await comboMarca();

            dispatch({
                type:"RecarregarComboMarca",
                recarregarComboMarca: data == null || data.length <=0
            });

            dispatch({
                type: "ComboMarca",
                comboMarca: data
            });
        }
        catch(error){
            dispatch({
                type:"RecarregarComboMarca",
                recarregarComboMarca: true
            });
        }

        return dispatch({
            type:"Loading",
            loading: false
        });
    };
};