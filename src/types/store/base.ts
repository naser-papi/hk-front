import { IAlert, IConfirm, IUserInfo } from "@/types/base";

export interface IBaseState {
    showMenu: boolean;
    clickedMenu: string;
    toggleMenu: () => void;
    locale: string;
    displayName: string;
    globalAlert: IAlert | null;
    globalConfirm: IConfirm | null;
    setAlert: (alert: IAlert) => void;
    token?: {
        access: string | undefined;
        refresh: string | undefined;
    };
    userInfo?: IUserInfo;
}
