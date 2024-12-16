import { IBaseState } from "@/types/store/base";
import { proxy } from "valtio/vanilla";

const BaseState = proxy<IBaseState>({
    showMenu: false,
    clickedMenu: "",
    locale: "",
    toggleMenu: () => {
        BaseState.showMenu = !BaseState.showMenu;
    },
    globalAlert: null,
    setAlert(alert) {
        BaseState.globalAlert = null;
        setTimeout(() => {
            BaseState.globalAlert = alert;
        }, 1000);
    },
});

export default BaseState;
