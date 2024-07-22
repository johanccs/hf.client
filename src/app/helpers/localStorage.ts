import { CredCache } from "../models/user/cred_cache";

export class LocalStorage {

    public setLocalStorage(username: string, isAdmin: boolean){
        localStorage.setItem('cred_cache', JSON.stringify(new CredCache(username, isAdmin)));
    }

}