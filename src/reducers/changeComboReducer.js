export const changeComboReducer = (initialState = { marca: 0, modelo: 0, versao: 0, local: 'São Paulo', raio:"10 Km" }, action) => {
    switch (action.type) {
        case "Marca":
            return { ...initialState, marca: action.marca }
        case "Modelo":
            return { ...initialState, modelo: action.modelo }
        case "Versao":
            return { ...initialState, versao: action.versao }
        case "Local":
            return { ...initialState, local: action.local }
        case "Raio":
            return { ...initialState, raio: action.raio }
        default:
            return initialState;
    }
}