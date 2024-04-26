import { GetCall, DEFAULT_HEADER, PostCall } from "../api/utils";
import {URLS} from "./urls";

export const homepageConfig = async (data) => {
    return await GetCall(URLS.HOMEPAGE_CONFIG, { ...data }, {
        ...DEFAULT_HEADER
    });
};