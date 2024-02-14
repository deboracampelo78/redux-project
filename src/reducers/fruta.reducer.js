import { actionsTypes } from "../constants/frutas"

const INICIAL_STATE = {
    frutas: [],
}

const reducers = (state = INICIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, { ...action.payload }] }
        case actionsTypes.REMOVER_FRUTA:
            return { frutas: state.frutas.filter(x => x.id !== action.payload.id) }
        default:
            return state;
    }

}

export { reducers }