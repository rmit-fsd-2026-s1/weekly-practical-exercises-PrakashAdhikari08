export default interface Student {
    firstName : string,
    lastName : string,
    loggedIn : boolean,
    email ?: string
}
 interface  Admin extends Student {
    role : string,
    permission : [string]
};

// export {Student, Admin};
