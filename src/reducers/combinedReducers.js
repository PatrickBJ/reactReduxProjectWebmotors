import {combineReducers} from 'redux';
import {changeComboReducer} from './changeComboReducer';
import {comboReducer} from './comboReducer';

export default combineReducers({
    comboReducer,
    changeComboReducer
})