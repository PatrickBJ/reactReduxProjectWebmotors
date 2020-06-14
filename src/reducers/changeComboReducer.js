export const changeComboReducer = (initialState = { marca: 0, modelo: 0, versao: 0 }, action) => {
    switch (action.type) {
        case "Marca":
            return { ...initialState, marca: action.marca }
        case "Modelo":
            return { ...initialState, modelo: action.modelo }
        case "Versao":
            return { ...initialState, versao: action.versao }
        default:
            return initialState;
    }
}