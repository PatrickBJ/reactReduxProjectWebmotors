import { comboMarca } from '../resources/buscaCombos';

export const buscaMarca = () => {
    return (dispatch) => {
        return comboMarca()
            .then(response => {
                return [{ID:0, Name:"Todas"}, ...response.data];
            })
            .then(data => {
                dispatch({
                    type: "ComboMarca",
                    comboMarca: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};