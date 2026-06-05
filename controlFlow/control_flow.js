let accessLevel;
let userRole = "admin";
if(userRole==="admin"){
    accessLevel= "user role is admin,full access is granted";
} 
else if (userRole==="manager"){
    accessLevel= "limited access is granted";
}
else {
    accessLevel= "no access is granted";
}

console.log(userRole, " - ", accessLevel);

let isloggedin = false;
let usermsg;

if(isloggedin){
    if(userRole==="admin"){
        usermsg = "admin is logged in"
    }
    else {
        usermsg="hello user"
    }
    
}
else{
    usermsg="login pls"
}
console.log(usermsg)

let usertype = "subscriber"
let usercategory;

switch(usertype){
    case "admin":
        usercategory="administrator"
        break;
    case "manager":
        usercategory="manager"
        break;
    case "subscriber":
        usercategory="subscriber"
        break;
    default:
        usercategory="unknown";

}
console.log(usercategory)

let isAuthenticated = true
let authenticationStatus = isAuthenticated?"Authenticated":"Not authenticated"
console.log(authenticationStatus)