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
});

export default BaseState;
