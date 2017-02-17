import { IAction } from "./Action";

export const GET_MENUS = "GET_MENUS";
export type GET_MENUS = {  };

export function getMenus(): IAction<GET_MENUS> {
    return {
        type: GET_MENUS,
        payload: {

        }
    }
}
