import {RootStore} from "./rootStore";
import {action, observable} from "mobx";

export default class ModalStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }

    @observable.shallow modal = {
        open: false,
        body: null
    };

    @action openModel = (content: any) => {
        this.modal.open = true;
        this.modal.body = content;
    };

    @action closeModel = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
}