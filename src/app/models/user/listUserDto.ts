
export class ListUserDto {
    constructor(
        public id: string,
        public name:string, 
        public surname:string, 
        public email: string,
        public username: string,
        public isAdmin: boolean, 
        public dateRegistered: string,
        public accountLocked: boolean){}
}