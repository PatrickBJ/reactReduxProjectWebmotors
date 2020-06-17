export const comboReducer = 
    (initialState = 
        {
            comboMarca:[], 
            recarregarComboMarca:false, 
            comboModelo:[], 
            recarregarComboModelo:false, 
            comboVersao:[],
            recarregarComboVersao:false, 
        }, action
    ) => 
        {
            switch (action.type) {
                case "ComboMarca":
                    return { ...initialState, comboMarca: action.comboMarca }
                case "RecarregarComboMarca":
                    return { ...initialState, recarregarComboMarca: action.recarregarComboMarca }
                case "ComboModelo":
                    return { ...initialState, comboModelo: action.comboModelo }
                case "RecarregarComboModelo":
                    return { ...initialState, recarregarComboModelo: action.recarregarComboModelo }
                case "ComboVersao":
                    return { ...initialState, comboVersao: action.comboVersao }
                case "RecarregarComboVersao":
                    return { ...initialState, recarregarComboVersao: action.recarregarComboVersao }
                default:
                    return initialState;
            }
        }