import { ADD_SHOE, DELETE_SHOE, UPDATE_AMOUNT, VIEW_DETAIL } from "./constant";

export let viewDetailAction = (shoe) => {
    return {
        type: VIEW_DETAIL,
        payload: shoe,
    };
};

//rxaction
export const addShoeAction = (shoe) => {
    return {
        type: ADD_SHOE,
        payload: shoe,
    }
}

export const deleteShoeAction = (id) => {
    return {
        type: DELETE_SHOE,
        payload: id,
    }
}

export let updateAmount = (shoeId, play) => {
    return {
        type: UPDATE_AMOUNT,
        payload: {
            shoeId, play
        }
    }
}