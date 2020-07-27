import * as types from './types'

export const add = (num) => {
    return {
        type: types.INCREMENT,
        num: num
    }
}

export const decre = (num) => {
    return {
        type: types.DECREMENT,
        num: num
    }
}