let userRole="member";//types: employee, member, subscriber, non-subscriber
let accessLevel;
let dietServices = false;
let dieticianAllowed = false;
let isLoggedIn = true;
let userMessage;
let userType ="subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

if (userRole === "employee") {
    dietServices = true;
    dieticianAllowed = false;
}
else if (userRole === "member") {
    dietServices = true;
    dieticianAllowed = true;
}
else if (userRole === "subscriber") {
    dietServices = true;
    dieticianAllowed = false;
}
else {
    dietServices = false;
    dieticianAllowed = false;
}


//console.log("Access Level:", accessLevel);

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    }
    else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

switch (userType) {
    case "employee":
        userCategory = "Employee";
        break;
    case "member":
        userCategory = "Enrolled Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Non-Subscriber";
}

console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus)

let serviceStatus = dietServices ? "can" : "cannot";
let dieticianStatus = dieticianAllowed ? "are authorized" : "are not authorized";

const msgElement = document.getElementById("msg");
if (msgElement) {
    msgElement.textContent = "Welcome, " + userCategory + ". You " + serviceStatus + " access Dietary Services. You " + dieticianStatus + " to have one-on-one interactions with a dietician.";
}