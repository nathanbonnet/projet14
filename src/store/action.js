import { store } from './index'

export const userCreated = () => {
    store.dispatch({type: 'CREATE_USER', boolean: true})
}

export const cancelModal = () => {
    store.dispatch({type: 'CANCEL', boolean: false})
}

