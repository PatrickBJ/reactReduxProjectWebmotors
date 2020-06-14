export const comboReducer = (initialState = {comboMarca:[], comboModelo:[], comboVersao:[] }, action) => {
    switch (action.type) {
        case "ComboMarca":
            return { ...initialState, comboMarca: action.comboMarca }
        case "ComboModelo":
            return { ...initialState, comboModelo: action.comboModelo }
        case "ComboVersao":
            return { ...initialState, comboVersao: action.comboVersao }
        default:
            return initialState;
    }
}