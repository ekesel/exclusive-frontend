import { GetCall, DEFAULT_HEADER, PostCall } from "../api/utils";
import {URLS} from "./urls";

export const getCartItems = async (data) => {
    return await GetCall(URLS.GET_CART_ITEMS, { ...data }, {
        ...DEFAULT_HEADER
    });
};
