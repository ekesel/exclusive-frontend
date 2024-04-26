import { GetCall, DEFAULT_HEADER, PostCall } from "../api/utils";
import {URLS} from "./urls";

export const loginConfig = async (data) => {
    return await GetCall(URLS.LOGINPAGE_CONFIG, { ...data }, {
        ...DEFAULT_HEADER
    });
};

export const register = async (data) => {
    return await PostCall(URLS.REGISTER, { ...data }, {
        ...DEFAULT_HEADER
    });
}

export const login = async (data) => {
    return await PostCall(URLS.LOGIN, { ...data }, {
        ...DEFAULT_HEADER
    });
}