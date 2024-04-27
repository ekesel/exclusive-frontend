import { GetCall, DEFAULT_HEADER, PostCall } from "../api/utils";
import {URLS} from "./urls";

export const getWishlist = async (data) => {
    return await GetCall(URLS.GET_WISHLIST, { ...data }, {
        ...DEFAULT_HEADER
    });
};

export const getJustForYouProducts = async (data) => {
    return await GetCall(URLS.GET_JUST_FOR_YOU_PRODUCTS, { ...data }, {
        ...DEFAULT_HEADER
    });
};