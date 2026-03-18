export  default interface User  {
    username : string,
    password : string,
    email ?: string,
    role : string,
    isLoggedIn : boolean
};
 interface AdminUser extends User {
    permission : [string]
 };