import { IAlert } from "@/types/base";

export interface IBaseState {
    showMenu: boolean;
    clickedMenu: string;
    toggleMenu: () => void;
    locale: string;
    globalAlert: IAlert | null;
    setAlert: (alert: IAlert) => void;
}
