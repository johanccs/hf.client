import { CredCache } from "../models/user/cred_cache";

export class LocalStorage {

    public setLocalStorage(
        username: string, 
        isAdmin: boolean, 
        clientId: string, 
        name: string, 
        surname: string){
        localStorage.setItem('cred_cache', JSON.stringify(new CredCache(username, isAdmin, clientId, name, surname)));
    }

    public getLocalStorage(key: string){
        const val = localStorage.getItem(key);
        const strVal= JSON.parse(val);

        return strVal;
    }

    public clearCredentials(key: string){
        localStorage.removeItem(key);
    }
}