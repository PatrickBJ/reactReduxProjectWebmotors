export const limpaFiltros = () => {
    return (dispatch) => {
        try{
            dispatch({type:"Marca", marca: -1});
            dispatch({type:"Modelo", modelo: -1});
            dispatch({type:"Versao", versao: -1});
            dispatch({type:"Local", local: ''});
            dispatch({type:"Raio", raio: -1});
            dispatch({type: "ComboModelo", comboModelo: []});
            dispatch({type: "ComboVersao", comboVersao: []});
        }
        catch(error){
            throw (error);
        }
    };
};