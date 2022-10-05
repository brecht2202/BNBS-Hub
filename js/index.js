// Icon locations
// %OneDrive%\Quick Menu\Own Programs-Sites\BNBS Quick-Launcher\Site\archive\icons
// %OneDrive%\Quick Menu\Own Programs-Sites\Icons - Social Media
// =========================================================================





/*
console.log('%cconsole.log', 'color: green;');
console.info('%cconsole.info', 'color: green;');
console.debug('%cconsole.debug', 'color: green;');
console.warn('%cconsole.warn', 'color: green;');
console.error('%cconsole.error', 'color: green;');
*/


declarationHandler();
// console.log(systemTimeToday_Hour_Minute_Second)
// console.log(systemTimeToday_Hour_Minute_Second1)
function declarationHandler() {

    // --- declarationHandler function

    // All variables with a dependency outside this function is disabled

    // Remember: declaring global variables can be bad. Try to use scopes.


    // ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====

    // ===== ===== ===== Global variables:


    // --- system - Time:
    // declarationHandler_system_systemTime();
    function declarationHandler_system_systemTime() {

        var today = new Date();
        var date = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        window.systemTimeToday_Date_Full = ("0" + new Date().getFullYear()).substr(-4) + "-" + ("0" + (new Date().getMonth()+1)).substr(-2) + "-" + ("0" + new Date().getDate()).substr(-2) + ' ' + ("0" + new Date().getHours()).substr(-2) + ":" + ("0" + new Date().getMinutes()).substr(-2) + ":" + ("0" + new Date().getSeconds()).substr(-2);
        window.systemTimeToday_Date_Short = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
        window.systemTimeToday_Date = ("0" + new Date().getFullYear()).substr(-4) + "-" + ("0" + (new Date().getMonth()+1)).substr(-2) + "-" + ("0" + new Date().getDate()).substr(-2);
        // console.log(date_Short);
        // console.log(date);
        window.systemTimeToday = new Date();                        // console.log(systemTimeToday)
        window.systemTimeToday_Hour = new Date().getHours();        // systemTimeToday_Hour = 8;            // console.log(systemTimeToday_Hour);
        window.systemTimeToday_Minute = new Date().getMinutes();    // systemTimeToday_Minute = 12;
        window.systemTimeToday_Second = new Date().getSeconds();    // systemTimeToday_Second = 12;
        window.systemTimeToday_Hour_Minute_Short = new Date().getHours() + ":" + new Date().getMinutes();         // console.log(systemTimeToday_Hour_Minute);
        window.systemTimeToday_Hour_Minute = ("0" + new Date().getHours()).substr(-2) + ":" + ("0" + new Date().getMinutes()).substr(-2);
        window.systemTimeToday_Hour_Minute_Second_Short = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();   // console.log(systemTimeToday_Hour_Minute_Second);
        window.systemTimeToday_Hour_Minute_Second = ("0" + new Date().getHours()).substr(-2) + ":" + ("0" + new Date().getMinutes()).substr(-2) + ":" + ("0" + new Date().getSeconds()).substr(-2);
    }

    // console.log(declarationHandler_system_systemMoonPhase());
    // declarationHandler_system_systemMoonPhase();
    function declarationHandler_system_systemMoonPhase() {

        window.systemTimeToday_MoonPhase = getMoonPhase();

        function getMoonPhase() {
            // Original Snippet: https://gist.github.com/endel/dfe6bb2fbe679781948c
            // Random user who made a site out of it:
            // https://moon.shawenyao.com/
            // https://moon.shawenyao.com/js/getMoonPhase.js
            // https://moon.shawenyao.com/js/controlPhase.js

            var Moon = {
                phases: ['new-moon', 'waxing-crescent-moon', 'quarter-moon', 'waxing-gibbous-moon', 'full-moon', 'waning-gibbous-moon', 'last-quarter-moon', 'waning-crescent-moon'],
                phase: function (year, month, day) {
                    var c = e = jd = b = 0;

                    if (month < 3) {
                        year--;
                        month += 12;
                    }

                    ++month;
                    c = 365.25 * year;
                    e = 30.6 * month;
                    jd = c + e + day - 694039.09; // jd is total days elapsed
                    jd /= 29.5305882; // divide by the moon cycle
                    b = parseInt(jd); // int(jd) -> b, take integer part of jd
                    jd -= b; // subtract integer part to leave fractional part of original jd
                    b = Math.round(jd * 8); // scale fraction from 0-8 and round

                    if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
                    return {phase: b, name: Moon.phases[b]};
                }
            };

            // Moon.phase('2018', '01', '19');

            var today = new Date();
            var phase = Moon.phase(today.getFullYear(), today.getMonth()+1, today.getDate());
            return phase;
        }
    }




    // --- system - Screen:
    // declarationHandler_system_Screen();
    function declarationHandler_system_Screen() {
        window.screenWidth = screen.width;
        window.windowInnerWidth = window.innerWidth;            // window.windowWidthInner = window.innerWidth;         // console.log('innerWidth: ' + innerWidth);
        window.windowOuterWidth = window.outerWidth;            // window.windowWidthOuter = window.outerWidth;

        window.screenWidth_MobileScreen = 570;          // You can change what you determine as mobilescreen here
        window.screenWidth_isMobileScreen;              // window.screenWidth_isMobileScreen = false;

        window.windowMatchMedia_ScreenWidth_MobileScreen = window.matchMedia("(max-width: " + screenWidth_MobileScreen + "px)");        // Can be used to change Sidebar Width
    }


    // --- system - Document
    // declarationHandler_system_Document();
    function declarationHandler_system_Document() {
        // These are just an example of what kinds of variables go here:
        // window.documentBody = window.document;
        // window.documentHead = window.document.head;
    }


    // --- Theme - DarkMode:
    // declarationHandler_Theme_themeDarkMode();
    function declarationHandler_Theme_themeDarkMode() {
        window.themeDarkMode_Counter = 0;
        window.themeDarkMode_Toggle = 1;        //  0 = Off, 1 = On
    }


    // --- Navigation - Navbar - Top
    // declarationHandler_Navigation_Navbar_Top();
    function declarationHandler_Navigation_Navbar_Top() {
        // window.navigationNavbarTop = document.getElementById("nav-navbar-top");
    }


    // --- Navigation - Sidebar - Left
    // declarationHandler_Navigation_Sidebar_Left();
    function declarationHandler_Navigation_Sidebar_Left(){
        // window.navigationSidebarLeft = document.getElementById("nav-sidebar-left");
        window.navigationSidebarLeft_Width = 350;           // You can change the size of your Siderbar here
        // document.getElementById("navigation-sidebar-left").style.width =  navigationSidebarLeft_Width + "px";
        // document.getElementById("sidebar-left").style.width =  sidebar_left_Size + "px";

        window.navigationSidebarLeft_isOpen = false;          // console.log('navigationSidebarLeft_isOpen set to: ' + navigationSidebarLeft_isOpen);
    }

    // --- Sections
    // declarationHandler_Sections_Main();
    function declarationHandler_Sections_Main() {
        window.sectionMain = document.getElementById('section-main');
    }




    // --- Functions test




    // ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    // Still to add above here - Go through these variables and see wich I want to keep in this function:

    let NP_Toggle = false;
    let NP_Active = false;
    let NP_Toggle_Session = sessionStorage.getItem("NP_Toggle_Session_Key");

    let sortAllSites_counter = 0;
    let sortAllSites_toggle = 0;

    // SiteCollections

    let iconPath_Root = "archive/icons/"

    // Sites

    // const divElement_main_grid_box_links = document.querySelectorAll('.main-grid-box-links');





    // ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== =====

    // ===== ===== ===== All the variables that are declared throughout this JS document (outside of functions) (220630_22:08)

    /*

    let NP_Toggle = false;
    let NP_Active = false;
    let NP_Toggle_Session = sessionStorage.getItem("NP_Toggle_Session_Key");



    let section_main = document.getElementById('section-main')



    var system_time_today = new Date();
    var system_time_today_hour = new Date().getHours();
    // system_time_today_hour = 8;
    // var system_time_today_minute = new Date().getMinutes();
    // system_time_today_minute = 12;
    var system_time_hour_minute_second = system_time_today.getHours() + ":" + system_time_today.getMinutes() + ":" + system_time_today.getSeconds();
    // console.log(system_time_hour_minute_second);
    // console.log(system_time_today_hour);

    // DarkMode-Toggle
    // let DarkMode_counter = 0;
    // let DarkMode_toggle = 1;
    let DarkMode_toggle;



    let sidebar_left_Size = 350;
    // let screenWidth_MobileScreen = 520;
    let screenWidth_MobileScreen = 570;

    let sidebar_isOpen = false;
    // console.log('sidebar_isOpen set to: ' + sidebar_isOpen);
    let screenWidth_isMobileScreen;
    // console.log('innerWidth: ' + innerWidth);



    let window_matchMedia_Sidebar_Width = window.matchMedia("(max-width: " + screenWidth_MobileScreen + "px)")



    let sortAllSites_counter = 0;
    let sortAllSites_toggle = 0;



    // SiteCollections



    let iconPath_Root = "archive/icons/"



    // Sites



    // const divElement_main_grid_box_links = document.querySelectorAll('.main-grid-box-links');
    */
}





// =========================================================================




/*
// Component
let user1 = {
    firstName: "a",
    lastName: "b"
};
function UserProfile(user) {
    return (
        `<div>
            <span>First Name: ${user.firstName}</span>
            <span>Last Name: ${user.lastName}</span>
        </div>`
    );
}
document.getElementById("test-userprofile").innerHTML = UserProfile(user1)
*/




// =========================================================================


// All Sites Button topleft in navbar-top   (Shadowing & Not transparent effect when not at top)




window.onscroll = function() {onscrollFunction()};
function onscrollFunction() {
    // --- Making the class
    var className = "sidebar-openbtn-shadow";
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.${className} { box-shadow: 10px 5px 20px 2px #171717; }`;
    // style.innerHTML = `.${className} { box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; }`;
    // style.innerHTML = `.${className} { background: red; }`;
    // style.innerHTML = `.${className} { position: fixed; top: 0; width: 100%; }`;     // Can be used for: Setting a navbar to a "sticky" class
    document.getElementsByTagName('head')[0].appendChild(style);

    // ================================================================
    // Declaring elementId
    var elementId = "sidebar-openbtn";

    // --- Setting the class attribute to className
    // document.getElementById(elementId).className = `${className}`;
    // --- Adding className to the class attribute
    // elementId.classList.add(className);
    // --- removing className from the class attribute
    // elementId.classList.remove(className);

    // --- Adding/removing class when not at top
    if (window.pageYOffset > document.getElementById(elementId).offsetTop) {
        document.getElementById(elementId).classList.add(className);
    } else {
        document.getElementById(elementId).classList.remove(className);
    }
}





// https://css-tricks.com/styling-based-on-scroll-position/
// if (
//     "IntersectionObserver" in window &&
//     "IntersectionObserverEntry" in window &&
//     "intersectionRatio" in window.IntersectionObserverEntry.prototype
// ) {
//     let observer = new IntersectionObserver(entries => {
//         if (entries[0].boundingClientRect.y < 0) {
//             document.body.classList.add("header-not-at-top");
//         } else {
//             document.body.classList.remove("header-not-at-top");
//         }
//     });
//     observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
// }





// =========================================================================

// NP_Sites Module
// sessionStorage.clear()
// sessionStorage.getItem("NP_Toggle_Session")
// let NP_Toggle;
let NP_Toggle = false;
let NP_Active = false;
let NP_Toggle_Session = sessionStorage.getItem("NP_Toggle_Session_Key");
// console.log('NP_Toggle_Session_Key: \t' + NP_Toggle_Session);
if (NP_Toggle_Session === null) {
    // console.log('NP_Toggle_Session_Key was null, \nsetting NP_Toggle_Session to Disabled:  ' + NP_Toggle_Session + '\nsetting NP_Toggle to false:  ' + NP_Toggle);
    NP_Toggle_Session = "Disabled";
    sessionStorage.setItem("NP_Toggle_Session_Key", "Disabled");
    NP_Toggle = false;
}
if (NP_Toggle_Session === "Disabled") {
    // console.log('NP_Toggle_Session_Key was Disabled, \nsetting NP_Toggle_Session to Disabled:  ' + NP_Toggle_Session + '\nsetting NP_Toggle to false:  ' + NP_Toggle);
    NP_Toggle_Session = "Disabled";
    sessionStorage.setItem("NP_Toggle_Session_Key", "Disabled");
    NP_Toggle = false;
}
if (NP_Toggle_Session === "Enabled") {
    NP_Toggle_Session = "Enabled";
    sessionStorage.setItem("NP_Toggle_Session_Key", "Enabled");
    NP_Toggle = true;
    // console.log('NP_Toggle_Session_Key was Enabled, \nsetting NP_Toggle_Session to Enabled:  ' + NP_Toggle_Session + '\nsetting NP_Toggle to true:  ' + NP_Toggle);
}
// console.log(NP_Toggle_Session)
// console.log('NP_Toggle_Session: \t' + NP_Toggle_Session);
// console.log('NP_Toggle: \t\t\t' + NP_Toggle);
// NP_Toggle = NP_Toggle_Session;
// if (NP_Toggle_Session === true) {
//     console.log('NP_Toggle_Session was true: ' + NP_Toggle_Session);
//     NP_Toggle = true;
// }
// else if (NP_Toggle_Session === null) {
//     console.log('NP_Toggle_Session was null, setting to false:  ' + NP_Toggle_Session);
//     NP_Toggle = false;
// }
// else if (NP_Toggle_Session === false) {
//     console.log('NP_Toggle_Session was null, setting to false:  ' + NP_Toggle_Session);
//     NP_Toggle = false;
// }


Check_NP_Initialize();
function Check_NP_Initialize(){
    // console.group('Check_NP_Initialize()');
    // console.log('0: Check_NP_Initialize() - NP_Toggle_Session: \t' + NP_Toggle_Session);
    // console.log('0: Check_NP_Initialize() - NP_Toggle: \t\t\t' + NP_Toggle);
    // console.log('Check_NP_Initialize');
    if (NP_Toggle === false) {     // console.log('Check_NP_Initialize');
        NP_Toggle_Session = "Disabled";
        sessionStorage.setItem("NP_Toggle_Session_Key", "Disabled");
        // console.log('0a: NP_Toggle_Session in sessionStorage set to: \t' + sessionStorage.getItem("NP_Toggle_Session_Key"));
        setTimeout(Check_NP_Initialize, 3000);
    }
    else {
        // console.log('Check_NP_Initialize');
        NP_Toggle_Session = "Enabled";
        sessionStorage.setItem("NP_Toggle_Session_Key", "Enabled");
        // console.log('0b: NP_Toggle_Session in sessionStorage set to: \t' + sessionStorage.getItem("NP_Toggle_Session_Key"));

        dynamicallyLoadScript("js/index - NPSites.js");
        function dynamicallyLoadScript(url) {
            var script = document.createElement("script");  // create a script DOM node
            script.src = url;  // set its src to the provided URL

            document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

            // console.log('0b: Check_NP_Initialize() - NP_Toggle_Session: \t' + NP_Toggle_Session);
            // console.log('0b: Check_NP_Initialize() - NP_Toggle: \t\t\t' + NP_Toggle);
        }
    }
    // console.groupEnd();
}





// =========================================================================

// Background Image

let section_main = document.getElementById('section-main')
// section_main.style.backgroundImage = "url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=1380&t=st=1656557357~exp=1656557957~hmac=31271b1ab6affcf1c40a22b19053f5d428dd02332b5b7375aca586ddfd1e47f7')"
section_main.style.backgroundRepeat = "no-repeat";
// section_main.style.backgroundSize = "auto";
// section_main.style.backgroundSize = "100%";
section_main.style.backgroundSize = "100% 100%";
section_main.style.backgroundAttachment = "fixed";
section_main.style.backgroundPosition = "center";







// =========================================================================

// System Time variables


// let system_time_milliseconds    = Date.now()    /1000
// console.log(system_time_milliseconds)
// let system_time_seconds         = Date.now()    /1000/60
// console.log(system_time_seconds)
// let system_time_minutes         = Date.now()    /1000/60/60
// console.log(system_time_minutes)
// let system_time_hour            = Date.now()    /1000/60/60/60
// console.log(system_time_hour)
// let system_time_number          = Date.now()    /1000
// // Calculate milliseconds in a year
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;
// // Divide Time with a year
// const d = new Date();
// let years = Math.round(d.getTime() / year);
// console.log(hour)
var system_time_today = new Date();
var system_time_today_hour = new Date().getHours();
// system_time_today_hour = 8;
// var system_time_today_minute = new Date().getMinutes();
// system_time_today_minute = 12;
var system_time_hour_minute_second = system_time_today.getHours() + ":" + system_time_today.getMinutes() + ":" + system_time_today.getSeconds();
// console.log(system_time_hour_minute_second);
// console.log(system_time_today_hour);

// DarkMode-Toggle
// let DarkMode_counter = 0;
// let DarkMode_toggle = 1;
let DarkMode_toggle;

if (system_time_today_hour < 8) {
    if (system_time_today_hour > 5) {
        // Morning
        // console.log('5-8');
        Toggle_DarkMode_On();
    }
    else {
        // Evening/Night
        // console.log('21-5');
        Toggle_DarkMode_On();
    }
}
else if (system_time_today_hour < 21) {
    // Daytime
    // console.log('8-21');
    Toggle_DarkMode_Off();
}
else {
    // Evening/Night
    // console.log('21-5');
    Toggle_DarkMode_On();
}


// basicClock(Toggle_DarkMode)
// function basicClock(elementId) {
//
//     setTimeout(basicClock(Toggle_DarkMode), 1000)
// }


createDiv_basicClock("Toggle_DarkMode", 1000);

function createDiv_basicClock(elementId, basicClock_setTimeout_Interval){
    basicClock()
    // let basicClock_setTimeout_Interval = 1000;
    function basicClock(){
        // console.log(elementId); // "Toggle_DarkMode"
        //https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript

        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        // document.write(h + ":" + m + ":" + s);
        // var time = h + ":" + m + ":" + s
        // console.log(h + ":" + m + ":" + s);
        // span.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
        var time = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2)
        document.getElementById(elementId).innerHTML =
            `
        <p>${time}</p>
        `;
//         `
//         <p>${system_time_hour_minute_second}</p>
//         `;
    }
    setInterval(basicClock,1 * basicClock_setTimeout_Interval);
}







// =========================================================================

// Left Sidebar

let sidebar_left_Size = 350;
// let screenWidth_MobileScreen = 520;
let screenWidth_MobileScreen = 570;

let sidebar_isOpen = false;
// console.log('sidebar_isOpen set to: ' + sidebar_isOpen);
let screenWidth_isMobileScreen;
// console.log('innerWidth: ' + innerWidth);
if (innerWidth < 520) {
    screenWidth_isMobileScreen = true;
}
else {
    screenWidth_isMobileScreen = false;
}
// console.log('%csidebar_isOpen: \t' + sidebar_isOpen + '\n%cscreenWidth_isMobileScreen set to: \t' + screenWidth_isMobileScreen + '\n%cinnerWidth: \t\t' + innerWidth,'color: lightblue', 'color: \tplum', 'color: yellow');
// console.log('Nothing here %cHi Cat %cHey Bear', 'color: blue','color: red', // CSS Style);


let window_matchMedia_Sidebar_Width = window.matchMedia("(max-width: " + screenWidth_MobileScreen + "px)")
mediaQueries_Handler(window_matchMedia_Sidebar_Width) // Call listener function at run time
window_matchMedia_Sidebar_Width.addListener(mediaQueries_Handler) // Attach listener function on state changes
function mediaQueries_Handler(x) {
    // console.group('Window InnerWidth Change');

    if (x.matches) { // If media query matches
        screenWidth_isMobileScreen = true;
        // console.log('%csidebar_isOpen: \t' + sidebar_isOpen + '\n%cscreenWidth_isMobileScreen set to: \t' + screenWidth_isMobileScreen + '\n%cinnerWidth: \t\t' + innerWidth,'color: lightblue', 'color: \tplum', 'color: yellow');

        // document.body.style.backgroundColor = "yellow";
        // document.getElementById("List_AllSites").style.width = "100%";
        if (sidebar_isOpen === true) {
            // document.body.style.backgroundColor = "yellow";
            document.getElementById("sidebar-left").style.width = "100%";
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "hidden";
        }

    } else {
        screenWidth_isMobileScreen = false;
        // console.log('%csidebar_isOpen: \t' + sidebar_isOpen + '\n%cscreenWidth_isMobileScreen set to: \t' + screenWidth_isMobileScreen + '\n%cinnerWidth: \t\t' + innerWidth,'color: lightblue', 'color: \tplum', 'color: yellow');
        // document.body.style.backgroundColor = "pink";
        if (sidebar_isOpen === true) {
            // document.body.style.backgroundColor = "pink";
            // document.getElementById("List_AllSites").style.width = "auto";
            document.getElementById("sidebar-left").style.width =  sidebar_left_Size + "px";
            document.body.style.overflowX = "visible";
            document.body.style.overflowY = "visible";
        }

    }

    // console.groupEnd();
}


keysSidebar();
function keysSidebar() {
    var openSidebarKey = "m";
    var openSidebarKeycode = 77;
    window.isOpenSidebarKeyUsed = false;
    var elementIdElement_Input_searchAllSites = document.getElementById("Input_searchAllSites");
    var elementIdElement_List_AllSites = document.getElementById("List_AllSites");

    // ESCAPE >>> Closes Sidebar
    // https://stackoverflow.com/questions/16089421/how-do-i-detect-keypresses-in-javascript
    // https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
    document.onkeydown = function(evt) {
        evt = evt || window.event;

        var isFirstLetter = true;

        var isKey_openSidebarKey = false;
        if ("key" in evt) {
            isKey_openSidebarKey = (evt.key === openSidebarKey || evt.keyCode === openSidebarKeycode);
        }
        if (isKey_openSidebarKey) {
            // alert("isKey_openSidebarKey");

            if (sidebar_isOpen === false) {

                if (isFirstLetter) {
                    openSidebar();
                    isFirstLetter = false;
                }


                // selectMouseCursorSearchbarSidebar();
            }
        }

        // if (evt.key === openSidebarKey) {
        //     // when M is pressed
        // }


        if (sidebar_isOpen === true) {
            if (evt.key === "Backspace") {
                // alert('a')
                // console.log('reaches1');
                // if input is not focused, selectMouseCursorSearchbarSidebar();
                if (elementIdElement_Input_searchAllSites != document.activeElement) {
                    // console.log('reaches2');
                    selectMouseCursorSearchbarSidebar();
                }

                focusMouseCursorSearchbarSidebar();
            }

            // console.log('0');

            // var keycode_letters_array = [];
            // var alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            var alphabetLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

            // var isFirstLetter = true;
            // var isFirstLetter = false;

            console.count();console.log('------------');
            alphabetLowercase.forEach(function (letter){
                console.count('letters');
                if (evt.key === letter) {
                    // alert('evt.keyCode === 77    M key')
                    console.log('--- m');
                    // focusMouseCursorSearchbarSidebar();

                    if (letter = openSidebarKey) {
                        // console.log('letter = openSidebarKey   :   ' + letter + " = " + openSidebarKey);
                        if (isOpenSidebarKeyUsed === true) {
                            if (isFirstLetter === true) {

                            }
                            if (elementIdElement_Input_searchAllSites != document.activeElement) {
                                // console.log('reaches2');
                                selectMouseCursorSearchbarSidebar();
                            }
                            focusMouseCursorSearchbarSidebar();
                            // selectMouseCursorSearchbarSidebar();
                            // console.log('1');
                            isFirstLetter = false;
                        }
                        else{
                            // Goes through this the first time
                            isOpenSidebarKeyUsed = true;
                            // console.log('2');
                            // focusMouseCursorSearchbarSidebar();
                        }

                        // focusMouseCursorSearchbarSidebar();
                    }

                    // else {
                    //     focusMouseCursorSearchbarSidebar();
                    //     console.log('3');   // never reaches
                    // }


                    // openSidebar();
                    // focusMouseCursorSearchbarSidebar();

                }

            });
            console.countReset('letters');console.log('-----------------------');
        }
    }

    document.onkeyup = function(evt) {
        evt = evt || window.event;
        var isKey_Escape = false;
        if ("key" in evt) {
            isKey_Escape = (evt.key === "Escape" || evt.key === "Esc");
            // isKey_M = (evt.key === openSidebarKey);
        } else {
            isKey_Escape = (evt.keyCode === 27);
            // isKey_M = (evt.keyCode === openSidebarKeycode);
        }
        if (isKey_Escape) {
            // alert("isKey_Escape");
            closeSidebar();
        }
        // if (isKey_M) {
        //     // alert("isKey_M");        // Doesn't reach
        //     openSidebar();
        // }
        // if (evt.key === openSidebarKey) {
        //     // alert('evt.keyCode === 77    M key')
        //     if (sidebar_isOpen === false) {
        //         openSidebar();
        //         // focusMouseCursorSearchbarSidebar();
        //     }
        // }

        if (evt.key === "Enter") {
            // alert('evt.key === Enter    Enter key')
            if (sidebar_isOpen === true) {
                // GET All found sitelinks after search
                // IF (1 sitelink left) >>> window.location.href = "http://www.w3schools.com";      (sitelink)
                // console.log(document.getElementById("Input_searchAllSites").value);
                if (elementIdElement_Input_searchAllSites.value != "") {      // If input is not empty
                    searchAllSites()
                    function searchAllSites() {
                        // --- Declare a counter to: Add a count for each site found    (only enable if you want it to work with only 1 link shown)
                        var siteList_ShownSites_Count = 0;
						// --- Declare a bool if redirected once
						var hasRedirected = false;
						
                        var input, filter, ul, li, a, i, txtValue;
                        input = elementIdElement_Input_searchAllSites;
                        filter = input.value.toUpperCase();
                        ul = elementIdElement_List_AllSites;
                        li = ul.getElementsByTagName("li");
                        for (i = 0; i < li.length; i++) {
                            a = li[i].getElementsByTagName("a")[0];
                            txtValue = a.textContent || a.innerText;
                            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                // li[i].style.display = "";
                                // alert(li[i]);
                                // alert(a);        // returns sitelink
                                // --- Add a count for each site found
                                siteList_ShownSites_Count++;
                            } else {
                                li[i].style.display = "none";
                            }
                        }
                        // --- if only 1 site found:
                        // if (siteList_ShownSites_Count === 1) {       // Enable this instead if you only want it to work when only 1 link is shown
                        if (siteList_ShownSites_Count != 0) {
                            // alert('reach')
                            // reread to find the site where display != "none"
                            input = elementIdElement_Input_searchAllSites;
                            // filter = input.value.toUpperCase();
                            ul = elementIdElement_List_AllSites;
                            li = ul.getElementsByTagName("li");
                            filter = "";
                            // console.group()
                            for (i = 0; i < li.length; i++) {
                                a = li[i].getElementsByTagName("a")[0];
                                txtValue = a.textContent || a.innerText;
                                // console.log(li[i].style.display)
                                if (li[i].style.display === "") {
									
									if (hasRedirected === false) {
										// window.location.href = a;
										window.open(a, '_blank');
										focusMouseCursorSearchbarSidebar();
										// alert(a);
										hasRedirected = true;
									}
									else {
										// window.location.href = a;
										// window.open(a, '_blank');
										// focusMouseCursorSearchbarSidebar();
										// alert(a);
									}
                                    
									
                                }
                            }
                            // console.groupEnd()
                            // li.style.display === ""
                            // window.location.href = a
                        }

                    }
                }


                // openSidebar();
                // focusMouseCursorSearchbarSidebar();
            }
        }
    };


    // // https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
    // document.onkeydown = function(evt) {
    //     evt = evt || window.event;
    //     // use e.keyCode
    //     // if (evt.key === "M") {
    //     //     // alert('reached M')
    //     // }
    //     if (evt.keyCode === 77) {
    //         alert('reached')
    //         openSidebar();
    //     }
    // };
}

function focusMouseCursorSearchbarSidebar() {
    // --- Put mouse cursor in input
    // document.getElementById("Input_searchAllSites").value = "";
    document.getElementById("Input_searchAllSites").focus();
    // document.getElementById("Input_searchAllSites").select();
}
function selectMouseCursorSearchbarSidebar() {
    // --- Put mouse cursor in input
    // document.getElementById("Input_searchAllSites").value = "";
    // document.getElementById("Input_searchAllSites").focus();
    document.getElementById("Input_searchAllSites").select();
}
function openSidebar() {
    // console.group('Sidebar - Opening');
    sidebar_isOpen = true;
    selectMouseCursorSearchbarSidebar();
    // console.log('sidebar_isOpen set to: \t' + sidebar_isOpen + '\nscreenWidth_isMobileScreen: ' + screenWidth_isMobileScreen);
    // console.log('%csidebar_isOpen set to: \t' + sidebar_isOpen + '\n%cscreenWidth_isMobileScreen: \t' + screenWidth_isMobileScreen + '\n%cinnerWidth: \t\t' + innerWidth,'color: lightblue', 'color: \tplum', 'color: yellow');

    // document.getElementById("sidebar-left").style.width = "100%";

    // if (document.getElementById("Input_searchAllSites").value != "") {
    //     console.log('aaa')
    //     selectMouseCursorSearchbarSidebar();
    // }


    const element = document.getElementById("sidebar-left-main");
    element.style.opacity = "1";
    element.style.transition = "opacity 300ms";
    element.style.transitionDelay = "150ms";
    element.style.visibility = "visible";
    const nodes = element.getElementsByClassName("sitelink");
    for (let i = 0; i < nodes.length; i++) {
        // nodes[i].style.color = "red";
        // nodes[i].style.opacity = "1";
        // nodes[i].style.transition = "opacity 10000ms";

        nodes[i].style.opacity = "1";
        nodes[i].style.transition = "opacity 300ms";
        nodes[i].style.transitionDelay = "150ms";
        nodes[i].style.visibility = "visible";
        // nodes[i].style.width = "100%";
    }
    // document.getElementById("sidebar-left").style.transition = "opacity 10000ms";
    document.getElementById("sidebar-left").style.opacity = "1";

    // document.getElementById("navbar-top-sidebar-openbutton").style.transition = "visibility 0s";
    document.getElementById("navbar-top-sidebar-openbutton").style.opacity = "0";
    document.getElementById("navbar-top-sidebar-openbutton").style.transition = "visibility 500ms";
    document.getElementById("navbar-top-sidebar-openbutton").style.visibility = "collapse";


    // Main scrollbar removal when sidebar is open on mobile screen
    /*overflow-x:hidden;*/
    /*overflow-y:hidden;*/
    /*overflow-x:visible;*/
    /*overflow-y:visible;*/

    if (screenWidth_isMobileScreen === true) {

        document.getElementById("sidebar-left").style.padding = "0px";
        document.getElementById("sidebar-left").style.transition = "width 400ms";
        // document.getElementById("sidebar-left").style.width = "auto";

        // document.getElementById("Input_searchAllSites").style.width = "90%";

        // main grid box links
        // max-width: max-content;
        // document.getElementById("main-grid-box-links").style.maxWidth = "none";

        document.getElementById("sidebar-left").style.width = "100%";

        // Main scrollbar removal when sidebar is open on mobile screen
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "hidden";
    }
    else{
        // document.getElementById("sidebar-left").style.transition = "padding 0ms";
        // document.getElementById("sidebar-left").style.transition = "padding 500ms";
        document.getElementById("sidebar-left").style.padding = "0px";
        document.getElementById("sidebar-left").style.transition = "width 400ms";

        // document.getElementById("Input_searchAllSites").style.width = "95%";

        // document.getElementById("sidebar-left").style.width = "350px";
        document.getElementById("sidebar-left").style.width = sidebar_left_Size + "px";

        // focusMouseCursorSearchbarSidebar();
    }


    // Mobile full screen

    // document.getElementById("List_AllSites").style.width = "100%";
    // document.getElementById("List_AllSites").style.width = "100%";
    document.getElementById("List_AllSites").style.maxWidth = "none"; //max-width: max-content;
    document.getElementById("divElement_main-grid-box-links_SiteCollection_AllSites").style.maxWidth = "none"; //max-width: max-content;
    // document.getElementById("List_AllSites").style.marginRight = "0px";
    // const elementId_sidebar_left_main = document.getElementById("sidebar-left-main");
    // document.getElementById("sidebar-left").style.width = "100%";
    // const nodes_sitelink = element.getElementsByClassName("sitelink");
    // for (let i = 0; i < nodes_sitelink.length; i++) {
    //     // nodes[i].style.color = "red";
    //     // nodes[i].style.opacity = "1";
    //     // nodes[i].style.transition = "opacity 10000ms";
    //
    //     // nodes_sitelink[i].style.opacity = "1";
    //     // nodes_sitelink[i].style.transition = "opacity 300ms";
    //     // nodes_sitelink[i].style.transitionDelay = "150ms";
    //     // nodes_sitelink[i].style.visibility = "visible";
    //     nodes_sitelink[i].style.width = "100%";
    //     // nodes_sitelink[i].style.marginRight = "0px";
    //     // nodes_sitelink[i].style.backgroundColor = "red";
    // }
    // document.getElementById("divElement_main-grid-box-links_AllSites").style.width = "100%";
    // document.getElementById("sitelink").style.width = "100%";
    // document.getElementById("sitelink").style.paddingRight = "100px";


    // document.getElementsByClassName("navbar").style.marginLeft = "250px";
    // document.getElementById("navbar-top").style.marginLeft = "390px";
    document.getElementById("navbar-top").style.marginLeft = sidebar_left_Size + "px";
    // document.getElementById("navbar-top-title-box").style.marginLeft = "250px";
    // document.getElementById("navbar-title-box").style.marginLeft = "250px";
    // document.getElementById("section-main").style.marginLeft = "390px";
    document.getElementById("section-main").style.marginLeft = sidebar_left_Size + "px";
    // document.getElementById("section-main").style.marginLeft = sidebar_left_Size + 25 + 15 + "px";

    // console.groupEnd();
}

function closeSidebar() {
    isOpenSidebarKeyUsed = false;
    // console.group('Sidebar - Closing');
    // let sidebar_IsOpen = false;
    sidebar_isOpen = false;
    // console.log('sidebar_isOpen set to: \t' + sidebar_isOpen + '\nscreenWidth_isMobileScreen: ' + screenWidth_isMobileScreen);
    // console.log('%csidebar_isOpen set to: \t' + sidebar_isOpen + '\n%cscreenWidth_isMobileScreen: \t' + screenWidth_isMobileScreen + '\n%cinnerWidth: \t\t' + innerWidth,'color: lightblue', 'color: \tplum', 'color: yellow');

    // Main scrollbar removal when sidebar is open on mobile screen - putting it back
    document.body.style.overflowX = "visible";
    document.body.style.overflowY = "visible";

    const element = document.getElementById("sidebar-left-main");
    element.style.opacity = "0";
    element.style.transition = "visibility 500ms";
    element.style.visibility = "collapse";
    const nodes = element.getElementsByClassName("sitelink");
    for (let i = 0; i < nodes.length; i++) {
        // nodes[i].style.color = "red";
        // nodes[i].style.opacity = "1";
        // nodes[i].style.transition = "opacity 10000ms";

        // nodes[i].style.transition = "visibility 0s";
        nodes[i].style.opacity = "0";
        nodes[i].style.transition = "visibility 500ms";
        nodes[i].style.visibility = "collapse";
    }


    document.getElementById("sidebar-left").style.padding = "0px";
    // document.getElementById("sidebar-left").style.transition = "padding 500ms";
    // document.getElementById("sidebar-left").style.transition = "opacity 500ms";
    document.getElementById("sidebar-left").style.opacity = "0";
    // document.getElementById("List_AllSites").style.width = "0%";
    // document.getElementById("List_AllSites").style.maxWidth = "max-content"; //max-width: initial;
    document.getElementById("divElement_main-grid-box-links_SiteCollection_AllSites").style.maxWidth = "max-content"; //max-width: max-content;
    document.getElementById("sidebar-left").style.width = "0%";

    // document.getElementById("sidebar-left").style.width = "0";
    // document.getElementsByClassName("navbar").style.marginLeft= "0";
    document.getElementById("navbar-top").style.marginLeft= "0";
    // document.getElementById("navbar-top-title-box").style.marginLeft= "0";
    // document.getElementById("navbar-title-box").style.marginLeft= "0";
    document.getElementById("section-main").style.marginLeft= "0";

    document.getElementById("navbar-top-sidebar-openbutton").style.opacity = "1";
    document.getElementById("navbar-top-sidebar-openbutton").style.transition = "opacity 500ms";
    document.getElementById("navbar-top-sidebar-openbutton").style.transitionDelay = "350ms";
    document.getElementById("navbar-top-sidebar-openbutton").style.visibility = "visible";

    // console.groupEnd();
}






// =========================================================================

//https://www.w3schools.com/howto/howto_js_media_queries.asp

// Media Queries

// var window_matchMedia_700 = window.matchMedia("(max-width: 520px)")
// mediaQueries_Handler(window_matchMedia_700) // Call listener function at run time
// window_matchMedia_700.addListener(mediaQueries_Handler) // Attach listener function on state changes
// function mediaQueries_Handler(x) {
//
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//         console.log(sidebar_IsOpen);
//         // document.getElementById("List_AllSites").style.width = "100%";
//         if (sidebar_IsOpen === true) {
//             document.body.style.backgroundColor = "yellow";
//             document.getElementById("sidebar-left").style.width = "100%";
//         }
//
//     } else {
//         document.body.style.backgroundColor = "pink";
//         console.log(sidebar_IsOpen);
//         if (sidebar_IsOpen === true) {
//             document.body.style.backgroundColor = "pink";
//             // document.getElementById("List_AllSites").style.width = "auto";
//             document.getElementById("sidebar-left").style.width = "350px";
//         }
//
//     }
// }




// =========================================================================



// Left SideBar Search Options

document.getElementById("Input_searchAllSites").addEventListener("keyup", searchAllSites);
document.getElementById("Toggle_searchAllSites_Sorter").addEventListener("click", sortAllSites);

document.getElementById("Toggle_DarkMode").addEventListener("click", Toggle_DarkMode);





// SidebarLeft_searchOptions();
// function SidebarLeft_searchOptions() {}
// openSidebar()
let sortAllSites_counter = 0;
let sortAllSites_toggle = 0;
function sortAllSites() {
    sortAllSites_counter++;

    let SiteCollection_AllSites_Unsorted = Array.from(SiteCollection_AllSites);
    let SiteCollection_AllSites_Sorted_Alphabetically = Array.from(SiteCollection_AllSites);
    SiteCollection_AllSites_Sorted_Alphabetically.sort((a, b) => a.name.localeCompare(b.name));

    //const sheeps = ['🐑', '🐑', '🐑'];
    //const cloneSheeps = Array.from(sheeps);

    // console.log(AllSites)
    // console.log(AllSites_Unsorted)
    // //AllSites.sort((a, b) => a.name.localeCompare(b.name));
    // console.log(AllSites)
    // console.log(AllSites_Unsorted)


    // Toggle
    if (sortAllSites_toggle === 1) {
        sortAllSites_toggle = 0;
        // alert('clicked: ' + sortAllSites_counter + '   toggle: ' + sortAllSites_toggle + '   AllSites');
        // document.getElementById("divElement_main-grid-box-links_AllSites").innerHTML = `AllSites`;

        document.getElementById("Toggle_searchAllSites_Sorter").innerHTML =
            `
            <p>⥮</p>
            `;

        // console.log('AllSites: ');
        // console.log(AllSites);
        divCreateDiv_EachObjectInArray(SiteCollection_AllSites_Unsorted, "divElement_main-grid-box-links_SiteCollection_AllSites");
        // console.log(divCreateDiv_EachObjectInArray(AllSites, "divElement_main-grid-box-links_AllSites"));

    } else {
        sortAllSites_toggle = 1;
        // alert('clicked: ' + sortAllSites_counter + '   toggle: ' + sortAllSites_toggle + '   AllSites_Sorted_Alphabetically');
        // document.getElementById("divElement_main-grid-box-links_AllSites").innerHTML = `AllSites_Sorted_Alphabetically`;

        document.getElementById("Toggle_searchAllSites_Sorter").innerHTML =
            `
            <p>Abc</p>
            `;

        // console.log('AllSites_Sorted_Alphabetically: ');
        // console.log(AllSites_Sorted_Alphabetically);
        divCreateDiv_EachObjectInArray(SiteCollection_AllSites_Sorted_Alphabetically, "divElement_main-grid-box-links_SiteCollection_AllSites");
        // console.log(divCreateDiv_EachObjectInArray(AllSites_Sorted_Alphabetically, "divElement_main-grid-box-links_AllSites"));
    }


    // toggleFunction();
    // // divCreateDiv_EachObjectInArray(AllSites, "divElement_main-grid-box-links_AllSites");
    // // divCreateDiv_EachObjectInArray(AllSites_Sorted_Alphabetically, "divElement_main-grid-box-links_AllSites");
    // function toggleFunction() {
    //     // Toggle
    //     if (sortAllSites_toggle.innerHTML === 1) {
    //         sortAllSites_toggle.innerHTML = 0;
    //         alert('reach ' + sortAllSites_toggle);
    //         divCreateDiv_EachObjectInArray(AllSites, "divElement_main-grid-box-links_AllSites");
    //     } else {
    //         sortAllSites_toggle.innerHTML = 1;
    //         alert('reach ' + sortAllSites_toggle);
    //         divCreateDiv_EachObjectInArray(AllSites_Sorted_Alphabetically, "divElement_main-grid-box-links_AllSites");
    //     }
    // }
}

function searchAllSites() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("Input_searchAllSites");
    filter = input.value.toUpperCase();
    ul = document.getElementById("List_AllSites");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



function Toggle_DarkMode() {
    // Toggle
    if (DarkMode_toggle === 1) {
        Toggle_DarkMode_Off()
    }
    else {
        Toggle_DarkMode_On()
    }
}
function Toggle_DarkMode_On() {
    DarkMode_toggle = 1;
    // alert('clicked: ' + sortAllSites_counter + '   toggle: ' + sortAllSites_toggle + '   AllSites_Sorted_Alphabetically');
    // document.getElementById("divElement_main-grid-box-links_AllSites").innerHTML = `AllSites_Sorted_Alphabetically`;

    // console.log('moody');
    document.getElementById("Toggle_DarkMode").innerHTML =
        `
            <p>🌙</p>
            `;


    // DoStuff
    // section_main.style.transition = "backgroundImage 500ms"
    // section_main.style.backgroundImage = "url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=1380&t=st=1656557357~exp=1656557957~hmac=31271b1ab6affcf1c40a22b19053f5d428dd02332b5b7375aca586ddfd1e47f7')"
    section_main.style.backgroundImage = "";
    section_main.style.backgroundImage = "url('archive/backgrounds/background-dark.jpg')";



    // //elementId_main_grid_box = document.getElementsByClassName("main-grid-box").style.backgroundColor = "black";
    // const elementId_section_main = document.getElementById("section-main");
    // // const elementId_main_grid = document.getElementById("main-grid");
    // // const elementId_main_grid_row = document.getElementById("main-grid-row");
    // // elementId_section_main.style.opacity = "0";
    // const elementClass_main_grid_box = elementId_section_main.getElementsByClassName("main-grid-box");
    // // const elementClass_main_grid_box = window.body.getElementsByClassName("main_grid_box");
    // for (let i = 0; i < elementClass_main_grid_box.length; i++) {
    //     // elementClass_main_grid_box[i].style.backgroundColor = "black";
    //     elementClass_main_grid_box[i].style.backgroundColor = "#222222";
    //     elementClass_main_grid_box[i].style.color = "white";
    //     // elementClass_main_grid_box[i].style.Color = "green";
    // }

    // elementClass_main_grid_box[i].style.color = "red";
    // elementClass_main_grid_box[i].style.opacity = "1";
    // elementClass_main_grid_box[i].style.transition = "opacity 10000ms";
    // elementClass_main_grid_box[i].style.transition = "visibility 0s";
    // elementClass_main_grid_box[i].style.opacity = "0";
    // elementClass_main_grid_box[i].style.transition = "visibility 500ms";
    // elementClass_main_grid_box[i].style.visibility = "collapse";


    // console.log('AllSites_Sorted_Alphabetically: ');
    // console.log(AllSites_Sorted_Alphabetically);
    //divCreateDiv_EachObjectInArray(AllSites_Sorted_Alphabetically, "divElement_main-grid-box-links_AllSites");
    // console.log(divCreateDiv_EachObjectInArray(AllSites_Sorted_Alphabetically, "divElement_main-grid-box-links_AllSites"));
}
function Toggle_DarkMode_Off() {
    DarkMode_toggle = 0;
    // alert('clicked: ' + sortAllSites_counter + '   toggle: ' + sortAllSites_toggle + '   AllSites');
    // document.getElementById("divElement_main-grid-box-links_AllSites").innerHTML = `AllSites`;

    // console.log('sunny');
    document.getElementById("Toggle_DarkMode").innerHTML =
        `
            <p>🌞</p>
            `;

    // DoStuff

    // section_main.style.backgroundImage = "url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=1380&t=st=1656557357~exp=1656557957~hmac=31271b1ab6affcf1c40a22b19053f5d428dd02332b5b7375aca586ddfd1e47f7')";
    // section_main.style.backgroundImage = "url('archive/backgrounds/background-light.webp')";
    section_main.style.backgroundImage = "url('archive/backgrounds/background-light.png')";
    // section_main.style.backgroundImage = "none";



    // console.log(checkIfImageExists('archive/backgrounds/background-lght.png'));
    // checkIfImageExists('archive/backgrounds/background-light.png');

    // Check if image exists, otherwise use default image / set image to none
    function checkIfImageExists(url) {
        var img = new Image();
        img.addEventListener('error', function handleError() {
            // console.log(img.src);
            // console.log('test');
            // --- set to default image
            // section_main.style.backgroundImage = "url('archive/backgrounds/background-light.png')";
            section_main.style.backgroundImage = "none";
            // img.style.display = 'none';
        });
        img.src = url;
        // try {
        //     img.src = url;
        // }
        // catch (ex) {
        //     // console.log(ex)
        // }

        // var exists;
        // img.onload = function() {
        //     alert( this.width +" "+ this.height );
        //     exists = true;
        //
        // };
        // img.onerror = function() {
        //     alert("img doesn't exist");
        //     exists = false;
        // };
        // return exists;
    }






    //
    // // document.getElementById("section-main").style.backgroundColor = "white";
    // const elementId_section_main = document.getElementById("section-main");
    // const elementClass_main_grid_box = elementId_section_main.getElementsByClassName("main-grid-box");
    // for (let i = 0; i < elementClass_main_grid_box.length; i++) {
    //     // elementClass_main_grid_box[i].style.backgroundColor = "white";
    //     // elementClass_main_grid_box[i].style.backgroundColor = "lightblue";
    //     elementClass_main_grid_box[i].style.backgroundColor = "white";
    //     elementClass_main_grid_box[i].style.color = "black";
    // }



    // console.log('AllSites: ');
    // console.log(AllSites);
    //divCreateDiv_EachObjectInArray(AllSites_Unsorted, "divElement_main-grid-box-links_AllSites");
    // console.log(divCreateDiv_EachObjectInArray(AllSites, "divElement_main-grid-box-links_AllSites"));
}






// =========================================================================



function createDiv_GoogleMaps(object, elementId) {
    // createSiteDiv(object);
    function createSiteDiv(object, elementId) {

        // get property/properties from object:
        let propertyName = object.name;
        let propertyIcon = object.icon;
        let propertyIconPath = object.iconPath;
        let propertyIconPathFull = object.iconPathFull();
        let propertyHyperlink = object.hyperlink;

        // getIcon if not found
        let iconUrl_prefix = "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=";
        // let iconUrl_prefix = "https://api.statvoo.com/favicon/?url=";
        // === given url --- Example:   https://community.kodular.io
        let iconUrl_suffix = "&size=";
        let iconUrl_fullUrl = iconUrl_prefix + propertyHyperlink + iconUrl_suffix;
        // let iconUrl_fullUrl = iconUrl_prefix + propertyHyperlink;
        let iconUrl_fullUrl_withSize = iconUrl_prefix + propertyHyperlink + iconUrl_suffix + 32;
        // let iconUrl_fullUrl_withSize = iconUrl_prefix + propertyHyperlink;

        let objectDiv =
            `<li>
                <a href="${propertyHyperlink}" class="sitelink">
                    <img class="icon" src="${iconUrl_fullUrl_withSize}">
                    <p>${propertyName}</p>
                </a>
            </li>`;
        return objectDiv;
    }

    var siteDiv =
        `
        <div class="main-grid-box-links">
            ${createSiteDiv(object)}
        </div>
        `
        + //'<div>test</div>'
        `
        <div class="google-maps">
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299443.2064676287!2d3.345169550759049!3d50.49742280882683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d64edf39797%3A0x47ebf2b439e60ff2!2zQmVsZ2nDqw!5e0!3m2!1snl!2sus!4v1656638057789!5m2!1snl!2sus"
                    width="600"
                    height="450"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
            ></iframe>
        </div>
        `;
    // console.log(siteDiv);

    document.getElementById(elementId).innerHTML = siteDiv;
}








// =========================================================================




// Quick CTRL F:

// PART1 - Collections declarations
// PART2 - Sites
// PART3 - Collections
// PART4 - CreateDiv


// Uncomment_This_To_See_Empty_Site();




// =========================================================================
// PART1 - Collections declarations

let SiteCollection_AllSites = [];
// let SiteCollection_AllSites_Sorted_Alphabetically = SiteCollection_AllSites.sort((a, b) => a.name.localeCompare(b.name))
let SiteCollection_AllSites_Sorted_Alphabetically = [];
let SiteCollection_AllSites_Unsorted = [];

let SiteCollection_QuickLinks = [];

let SiteCollection_SocialMedia = [];

let SiteCollection_MusicPlatforms = [];
let SiteCollection_VideoSites = [];

// let StoreSites = [];
let SiteCollection_Stores = [];
let SiteCollection_Stores_Main = [];
let SiteCollection_Stores_FoodDelivery = [];

let SiteCollection_TorrentSites = [];

let SiteCollection_CloudDrives = [];

let SiteCollection_GoogleSites = [];
let SiteCollection_MicrosoftSites = [];

let SiteCollection_HandySites = [];

let SiteCollection_Fandom = [];

let SiteCollection_HypixelSkyblock = [];

let SiteCollection_RockstarGames = [];

let SiteCollection_PXL = [];






// =========================================================================
// PART2 - Sites

// ----------------------------------------------------------
/*
// This won't work because you can't declare the array name and can't call the array after the function.
createSiteObject("Youtube","Youtube","youtube.png","archive/icons/","https://www.youtube.com/")
function createSiteObject(arrayname, name, icon, iconPath, hyperlink) {
    // let arrayname = [];
}
*/
// --------------------------------------
function createSiteObject(name, icon, iconPath, hyperlink) {
    let object = [];
    object.name = name;
    object.icon = icon;
    object.iconPath = iconPath;
    object.iconPathFull = function() {
        return object.iconPath + object.icon;
    };
    object.hyperlink = hyperlink;
    return object;
    // arr.name = name;
    // return arr;
}
// let SiteName = createSiteObject("SiteName","sitename.png","archive/icons/","https://www.sitename.com/");
// AllSites.push(SiteName);
// console.log(SiteName);
// console.log(SiteName.iconPathFull());
// ----------------------------------------------------------


// let Site_SiteName = createSiteObject("SiteName","","archive/icons/","https://www.sitename.com/");
// SiteCollection_AllSites.push(SiteName);

let iconPath_Root = "archive/icons/"





// --------------------------------------
let Site_LineBreak = createSiteObject("","","","");
// SiteCollection_AllSites.push(Site_LineBreak);
// SiteCollection_.push(Site_LineBreak);
// let innerHTML_Break = createSiteObject("","","","");
// NPSites_VR.push(innerHTML_Break);
// NPSites_VR.push(innerHTML_Break);
// --------------------------------------





// --------------------------------------
// https://pastelink.net/397mu
let Site_PasteLink_LinkHub = createSiteObject("PasteLink LinkHub","",iconPath_Root,"https://pastelink.net/397mu");
SiteCollection_AllSites.push(Site_PasteLink_LinkHub);
// --------------------------------------

// --------------------------------------


// --------------------------------------
let Site_Youtube = createSiteObject("Youtube","youtube.png",iconPath_Root,"https://www.youtube.com/");
SiteCollection_AllSites.push(Site_Youtube);
// --------------------------------------
let Site_Facebook = createSiteObject("Facebook","facebook.png",iconPath_Root,"https://www.facebook.com/");
SiteCollection_AllSites.push(Site_Facebook);
// --------------------------------------
let Site_Messenger = createSiteObject("Messenger","facebook-messenger.png",iconPath_Root,"https://www.messenger.com/");
SiteCollection_AllSites.push(Site_Messenger);
// --------------------------------------
let Site_Instagram = createSiteObject("Instagram","instagram.png",iconPath_Root,"https://www.instagram.com/");
SiteCollection_AllSites.push(Site_Instagram);
// --------------------------------------
let Site_TikTok = createSiteObject("TikTok","tiktok-rounded.png",iconPath_Root,"https://www.tiktok.com/");
SiteCollection_AllSites.push(Site_TikTok);
// --------------------------------------
let Site_Reddit = createSiteObject("Reddit","reddit.png",iconPath_Root,"https://www.reddit.com/");
SiteCollection_AllSites.push(Site_Reddit);
// --------------------------------------




// --------------------------------------
let Site_Google = createSiteObject("Google","google.png",iconPath_Root,"https://www.google.com/");
SiteCollection_AllSites.push(Site_Google);
// --------------------------------------
let Site_YoutubeMusic = createSiteObject("Youtube Music","youtube-music.svg",iconPath_Root,"https://music.youtube.com/");
SiteCollection_AllSites.push(Site_YoutubeMusic);
// --------------------------------------
let Site_Google_Maps = createSiteObject("Google Maps","",iconPath_Root,"https://www.google.be/maps/");
SiteCollection_AllSites.push(Site_Google_Maps);
// --------------------------------------

// --------------------------------------




// --------------------------------------
let Site_Spotify = createSiteObject("Spotify","spotify.svg",iconPath_Root,"spotify:");
SiteCollection_AllSites.push(Site_Spotify);
let Site_SpotifyWeb = createSiteObject("Spotify Web","spotify.svg",iconPath_Root,"https://open.spotify.com/");
SiteCollection_AllSites.push(Site_SpotifyWeb);
// --------------------------------------
let Site_Soundcloud = createSiteObject("Soundcloud","soundcloud.svg",iconPath_Root,"https://www.soundcloud.com/");
SiteCollection_AllSites.push(Site_Soundcloud);
// --------------------------------------

// --------------------------------------

// --------------------------------------





// --------------------------------------
let Site_Netflix = createSiteObject("Netflix","netflix.png",iconPath_Root,"https://www.netflix.com/");
SiteCollection_AllSites.push(Site_Netflix);
// --------------------------------------

// --------------------------------------

// --------------------------------------





// --------------------------------------
/*
// StoreSites (Winkels)
StoreSites.push(Site_Tweakers);  // Tweakers
StoreSites.push(Site_Bol);  // Bol.com
StoreSites.push(Site_Coolblue);  // Coolblue // https://www.coolblue.be/
StoreSites.push(Site_iBOOD);    // iBood
StoreSites.push(Site_aaa);
*/
// --------------------------------------
let Site_Tweakers = createSiteObject("Tweakers","",iconPath_Root,"https://www.tweakers.net/");
SiteCollection_AllSites.push(Site_Tweakers);
// --------------------------------------
let Site_Bol = createSiteObject("bol.com","",iconPath_Root,"https://www.bol.com/");
SiteCollection_AllSites.push(Site_Bol);
// --------------------------------------
let Site_Coolblue = createSiteObject("Coolblue","",iconPath_Root,"https://www.coolblue.be/");
SiteCollection_AllSites.push(Site_Coolblue);
// --------------------------------------
let Site_iBOOD = createSiteObject("iBOOD","",iconPath_Root,"https://www.ibood.com/be/nl/#country=be");
SiteCollection_AllSites.push(Site_iBOOD);
// --------------------------------------
// let Site_iBOOD = createSiteObject("iBOOD","",iconPath_Root,"https://www.ibood.com/");
// AllSites.push(Site_iBOOD);
// --------------------------------------
// let Site_iBOOD = createSiteObject("iBOOD","",iconPath_Root,"https://www.ibood.com/");
// AllSites.push(Site_iBOOD);
// --------------------------------------

// --------------------------------------
/*
// Food delivery
Take Away      // https://www.takeaway.com/be          Site_TakeAway
Deliveroo      // https://deliveroo.be/nl-be/          Site_Deliveroo
Uber Eats      // https://www.ubereats.com/be-nl       Site_UberEats
*/
// --------------------------------------
let Site_TakeAway = createSiteObject("Take Away","",iconPath_Root,"https://www.takeaway.com/");
SiteCollection_AllSites.push(Site_TakeAway);
// --------------------------------------
let Site_Deliveroo = createSiteObject("Deliveroo","",iconPath_Root,"https://deliveroo.be/");
SiteCollection_AllSites.push(Site_Deliveroo);
// --------------------------------------
let Site_UberEats = createSiteObject("Uber Eats","",iconPath_Root,"https://www.ubereats.com/");
SiteCollection_AllSites.push(Site_UberEats);
// --------------------------------------

// --------------------------------------
// --------------------------------------

// --------------------------------------





// --------------------------------------
let Site_Hypixel_SkyBlockWiki = createSiteObject("Hypixel SkyBlock Wiki (Official)","hypixel.png",iconPath_Root,"https://wiki.hypixel.net/");
SiteCollection_AllSites.push(Site_Hypixel_SkyBlockWiki);
// --------------------------------------
let Site_Fandom_HypixelSkyBlockWiki = createSiteObject("Hypixel SkyBlock Wiki (Fandom)","hypixel-skyblock-wiki.png",iconPath_Root,"https://hypixel-skyblock.fandom.com/wiki/Hypixel_SkyBlock_Wiki");
SiteCollection_AllSites.push(Site_Fandom_HypixelSkyBlockWiki);
// --------------------------------------
let Site_BrandonFowler_SkyBlockAH = createSiteObject("Hypixel SkyBlock AH (BrandonFowler)","brandon-fowler.png",iconPath_Root,"https://www.brandonfowler.me/skyblockah/?sort=lowest&bin=yes&player=brecht2202");
SiteCollection_AllSites.push(Site_BrandonFowler_SkyBlockAH);
// --------------------------------------
let Site_SkyCrypt = createSiteObject("SkyCrypt","skycrypt.png",iconPath_Root,"https://sky.shiiyu.moe/");
SiteCollection_AllSites.push(Site_SkyCrypt);
let Site_SkyCrypt_brecht2202 = createSiteObject("SkyCrypt - brecht2202","skycrypt.png",iconPath_Root,"https://sky.shiiyu.moe/stats/brecht2202/Pear");
SiteCollection_AllSites.push(Site_SkyCrypt_brecht2202);

// --------------------------------------

// --------------------------------------




// --------------------------------------
let Site_RockstarGames = createSiteObject("Rockstar Games","rockstargames.ico",iconPath_Root,"https://www.rockstargames.com/");
SiteCollection_AllSites.push(Site_RockstarGames);
// --------------------------------------
let Site_RockstarGames_Newswire = createSiteObject("Rockstar Games - Newswire","rockstargames.ico",iconPath_Root,"https://www.rockstargames.com/newswire");
SiteCollection_AllSites.push(Site_RockstarGames_Newswire);
// --------------------------------------
let Site_RockstarGames_Newswire_GTA = createSiteObject("Rockstar Games - Newswire GTA","rockstargames.ico",iconPath_Root,"https://www.rockstargames.com/newswire?tag_id=702");
SiteCollection_AllSites.push(Site_RockstarGames_Newswire_GTA);
// --------------------------------------
let Site_RockstarGames_Newswire_RDO = createSiteObject("Rockstar Games - Newswire RDO","rockstargames.ico",iconPath_Root,"https://www.rockstargames.com/newswire?tag_id=736");
SiteCollection_AllSites.push(Site_RockstarGames_Newswire_RDO);
// --------------------------------------
let Site_RockstarGames_GTAOnline = createSiteObject("Rockstar Games - GTA Online","rockstargames.ico",iconPath_Root,"https://www.rockstargames.com/gta-online");
SiteCollection_AllSites.push(Site_RockstarGames_GTAOnline);
// --------------------------------------
let Site_Youtube_Gtamen = createSiteObject("Youtube - Gtamen","youtube.png",iconPath_Root,"https://www.youtube.com/user/TheLibertyLunatic/videos");
SiteCollection_AllSites.push(Site_Youtube_Gtamen);
// --------------------------------------
// let Site_RockstarGames_ = createSiteObject("RockstarGames","RockstarGames.png",iconPath_Root,"###");
// SiteCollection_AllSites.push(Site_RockstarGames_);
// --------------------------------------

// --------------------------------------

// --------------------------------------




// --------------------------------------
// let Site_PXL_BlackBoard = createSiteObject("PXL - BlackBoard","PXL_BlackBoard.png",iconPath_Root,"https://www.pxl.be/");
let Site_PXL = createSiteObject("PXL","pxl.png",iconPath_Root,"https://www.pxl.be/");
// let Site_PXL = createSiteObject("PXL","",iconPath_Root,"https://www.pxl.be/");
SiteCollection_AllSites.push(Site_PXL);
// --------------------------------------
// let Site_PXL_BlackBoard = createSiteObject("PXL - BlackBoard","PXL_BlackBoard.png",iconPath_Root,"https://blackboard.pxl.be/ultra");
// let Site_PXL_BlackBoard = createSiteObject("BlackBoard","PXL.png",iconPath_Root,"https://blackboard.pxl.be/ultra");
// SiteCollection_AllSites.push(Site_PXL_BlackBoard);
// --------------------------------------
// let Site_PXL_BlackBoard = createSiteObject("PXL - BlackBoard","PXL_BlackBoard.png","archive/icons/","https://blackboard.pxl.be/ultra");
// let Site_PXL_BlackBoard_Cursussen = createSiteObject("BlackBoard - Cursussen","PXL.png",iconPath_Root,"https://blackboard.pxl.be/ultra/course");
let Site_PXL_BlackBoard_Cursussen = createSiteObject("BlackBoard - Cursussen","pxl-blackboard.png",iconPath_Root,"https://blackboard.pxl.be/ultra/course");
// let Site_PXL_BlackBoard_Cursussen = createSiteObject("BlackBoard - Cursussen","",iconPath_Root,"https://blackboard.pxl.be/ultra/course");
SiteCollection_AllSites.push(Site_PXL_BlackBoard_Cursussen);
// --------------------------------------
// let Site_PXL_BlackBoard = createSiteObject("PXL - BlackBoard","PXL_BlackBoard.png",iconPath_Root,"https://blackboard.pxl.be/ultra");
// let Site_PXL_BlackBoard_AlgemeneCursussen = createSiteObject("BlackBoard - Algemene cursussen","PXL.png",iconPath_Root,"https://blackboard.pxl.be/ultra/organization");
let Site_PXL_BlackBoard_AlgemeneCursussen = createSiteObject("BlackBoard - Algemene cursussen","pxl-blackboard.png",iconPath_Root,"https://blackboard.pxl.be/ultra/organization");
// let Site_PXL_BlackBoard_AlgemeneCursussen = createSiteObject("BlackBoard - Algemene cursussen","",iconPath_Root,"https://blackboard.pxl.be/ultra/organization");
SiteCollection_AllSites.push(Site_PXL_BlackBoard_AlgemeneCursussen);
// --------------------------------------
// let Site_PXL_MyTimetable = createSiteObject("PXL - MyTimetable","PXL_MyTimetable.png",iconPath_Root,"https://mijnlessenrooster.pxl.be/schedule");
let Site_PXL_MyTimetable = createSiteObject("MyTimetable","pxl.png",iconPath_Root,"https://mijnlessenrooster.pxl.be/schedule");
// let Site_PXL_MyTimetable = createSiteObject("MyTimetable","",iconPath_Root,"https://mijnlessenrooster.pxl.be/schedule");
SiteCollection_AllSites.push(Site_PXL_MyTimetable);
// --------------------------------------
// let Site_PXL_MijnPXL = createSiteObject("PXL - MijnPXL","PXL_MijnPXL.png",iconPath_Root,"https://mijnpxl.pxl.be/Main.aspx");
let Site_PXL_MijnPXL = createSiteObject("MijnPXL","pxl.png",iconPath_Root,"https://mijnpxl.pxl.be/Main.aspx");
// let Site_PXL_MijnPXL = createSiteObject("MijnPXL","",iconPath_Root,"https://mijnpxl.pxl.be/Main.aspx");
SiteCollection_AllSites.push(Site_PXL_MijnPXL);
// --------------------------------------
// // let Site_PXL_MijnPXL_MijnOpleidingsonderdelen = createSiteObject("PXL - MijnPXL - Mijn opleidingsonderdelen","PXL_MijnOpleidingsonderdelen.png",iconPath_Root,"https://mijnpxl.pxl.be/studenten/BMFUIMijnSubgroeplijsten.aspx?q=MlkwYUpMcG9LVHQ1SDZMaHUyUWFYcDE4MUozcnJsWWZ0Q2FYKzk0Q3RPc2tBVGVRemlob0Z3L2FYUTIwZHB1QTBHR1pZUjc2OUhtWTJaUWZKbmU2UVRET1hJNHY1TllHemxuUkJldkF4em5BclN6QUdRMmdQdFFtOFpzbDd4M3haUnJVYmFadUdnUzNtRTVNTWdnSUgwelljbWRuakRuRFpTeU8vUUpPR0NOMmM5d0x4dWQxSm40Q2Rhc0JNN2l5bHRYUmtxUHBlbDNxK3ZWS3dROE1NalFLM0pLNGxJZ2kvRExOMElxUC9meVJpa1JXN3ZBNStXZjU3WjNwaFRKcw2");
// let Site_PXL_MijnPXL_MijnOpleidingsonderdelen = createSiteObject("MijnPXL - \nMijn opleidingsonderdelen","PXL.png",iconPath_Root,"https://mijnpxl.pxl.be/studenten/BMFUIMijnSubgroeplijsten.aspx?q=MlkwYUpMcG9LVHQ1SDZMaHUyUWFYcDE4MUozcnJsWWZ0Q2FYKzk0Q3RPc2tBVGVRemlob0Z3L2FYUTIwZHB1QTBHR1pZUjc2OUhtWTJaUWZKbmU2UVRET1hJNHY1TllHemxuUkJldkF4em5BclN6QUdRMmdQdFFtOFpzbDd4M3haUnJVYmFadUdnUzNtRTVNTWdnSUgwelljbWRuakRuRFpTeU8vUUpPR0NOMmM5d0x4dWQxSm40Q2Rhc0JNN2l5bHRYUmtxUHBlbDNxK3ZWS3dROE1NalFLM0pLNGxJZ2kvRExOMElxUC9meVJpa1JXN3ZBNStXZjU3WjNwaFRKcw2");
// // let Site_PXL_MijnPXL_MijnOpleidingsonderdelen = createSiteObject("MijnPXL - \nMijn opleidingsonderdelen","",iconPath_Root,"https://mijnpxl.pxl.be/studenten/BMFUIMijnSubgroeplijsten.aspx?q=MlkwYUpMcG9LVHQ1SDZMaHUyUWFYcDE4MUozcnJsWWZ0Q2FYKzk0Q3RPc2tBVGVRemlob0Z3L2FYUTIwZHB1QTBHR1pZUjc2OUhtWTJaUWZKbmU2UVRET1hJNHY1TllHemxuUkJldkF4em5BclN6QUdRMmdQdFFtOFpzbDd4M3haUnJVYmFadUdnUzNtRTVNTWdnSUgwelljbWRuakRuRFpTeU8vUUpPR0NOMmM5d0x4dWQxSm40Q2Rhc0JNN2l5bHRYUmtxUHBlbDNxK3ZWS3dROE1NalFLM0pLNGxJZ2kvRExOMElxUC9meVJpa1JXN3ZBNStXZjU3WjNwaFRKcw2");
// SiteCollection_AllSites.push(Site_PXL_MijnPXL_MijnOpleidingsonderdelen);
// --------------------------------------
// let Site_PXL_MijnSLB = createSiteObject("PXL - MijnSLB","PXL_MijnSLB.png",iconPath_Root,"https://mijnslb.pxl.be/Forms/Home.aspx");
let Site_PXL_MijnSLB = createSiteObject("MijnSLB","pxl.png",iconPath_Root,"https://mijnslb.pxl.be/Forms/Home.aspx");
// let Site_PXL_MijnSLB = createSiteObject("MijnSLB","",iconPath_Root,"https://mijnslb.pxl.be/Forms/Home.aspx");
SiteCollection_AllSites.push(Site_PXL_MijnSLB);
// --------------------------------------
// let Site_PXL_Mail = createSiteObject("PXL - Mail","PXL_Mail.png",iconPath_Root","https://outlook.office365.com/mail/");
let Site_PXL_Mail = createSiteObject("PXL Mail","",iconPath_Root,"https://outlook.office365.com/mail/");
// let Site_PXL_Mail = createSiteObject("Mail","",iconPath_Root,"https://outlook.office365.com/mail/");
SiteCollection_AllSites.push(Site_PXL_Mail);
// --------------------------------------
// let Site_PXL_EPOS = createSiteObject("PXL - EPOS","PXL_EPOS.png",iconPath_Root,"https://epos.pxl.be/");
let Site_PXL_EPOS = createSiteObject("EPOS","pxl.png",iconPath_Root,"https://epos.pxl.be/");
// let Site_PXL_EPOS = createSiteObject("EPOS","",iconPath_Root,"https://epos.pxl.be/");
SiteCollection_AllSites.push(Site_PXL_EPOS);
// --------------------------------------

// --------------------------------------

// --------------------------------------




// --------------------------------------
// let Site_TikTok = {
//     // name: "TikTok",
//     // icon: "tiktok-rounded.png",
//     // iconPath: "archive/icons/",
//     // iconPathFull: function() {
//     //     return this.iconPath + this.icon;
//     // },
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     },
//     hyperlink: "SiteAdress"
//     // iconPathFull: function (TikTok) {return `${TikTok.iconPath}\\${TikTok.icon}`}
// };
// --------------------------------------
// let Site_SiteName = {
//     name: "SiteName",
//     icon: "sitename.png",
//     iconPath: "archive/icons/",
//     iconPathFull: function() {
//         return this.iconPath + this.icon;
//     },
//     hyperlink: "SiteAdress"
// };
// AllSites.push(Site_SiteName);
// collection.push(Site_SiteName);
// --------------------------------------
// let Site_SiteName = createSiteObject("SiteName","sitename.png","archive/icons/","https://www.sitename.com/");
// AllSites.push(Site_SiteName);
// --------------------------------------


// =========================================================================











// =========================================================================
// PART3 - Collections

// --------------------------------------
SiteCollection_QuickLinks.push(Site_Google);
SiteCollection_QuickLinks.push(Site_Google_Maps);
SiteCollection_QuickLinks.push(Site_Youtube);
SiteCollection_QuickLinks.push(Site_Netflix);
SiteCollection_QuickLinks.push(Site_Spotify);
// SiteCollection_QuickLinks.push(Site_SpotifyWeb);
SiteCollection_QuickLinks.push(Site_Reddit);
SiteCollection_QuickLinks.push(Site_Messenger);
SiteCollection_QuickLinks.push(Site_BrandonFowler_SkyBlockAH);
SiteCollection_QuickLinks.push(Site_RockstarGames_Newswire_GTA);
SiteCollection_QuickLinks.push(Site_PasteLink_LinkHub);
// --------------------------------------
SiteCollection_SocialMedia.push(Site_Facebook);
SiteCollection_SocialMedia.push(Site_Messenger);
SiteCollection_SocialMedia.push(Site_Instagram);
SiteCollection_SocialMedia.push(Site_TikTok);
SiteCollection_SocialMedia.push(Site_Reddit);
SiteCollection_SocialMedia.push(Site_Youtube);
// --------------------------------------
SiteCollection_MusicPlatforms.push(Site_Spotify);
SiteCollection_MusicPlatforms.push(Site_SpotifyWeb);
SiteCollection_MusicPlatforms.push(Site_Soundcloud);
SiteCollection_MusicPlatforms.push(Site_YoutubeMusic);
SiteCollection_MusicPlatforms.push(Site_Youtube);
// SiteCollection_MusicPlatforms.push(aaa);   // bbb
// Spotify, Itunes, Google Music (appstore), Soundcloud, Bandcamp, Beatport, Amazon Music, Tidal, Deezer, Youtube, YouTube Music, Facebook, Instagram, TikTok
// --------------------------------------
SiteCollection_VideoSites.push(Site_Youtube);
SiteCollection_VideoSites.push(Site_Netflix);
// SiteCollection_VideoSites.push(aaa);   // bbb
// --------------------------------------
// StoreSites (Winkels)
SiteCollection_Stores.push(Site_Tweakers);  // Tweakers
SiteCollection_Stores_Main.push(Site_Tweakers);  // Tweakers
SiteCollection_Stores.push(Site_Bol);  // Bol.com
SiteCollection_Stores_Main.push(Site_Bol);  // Bol.com
SiteCollection_Stores.push(Site_Coolblue);  // Coolblue // https://www.coolblue.be/
SiteCollection_Stores_Main.push(Site_Coolblue);  // Coolblue // https://www.coolblue.be/
SiteCollection_Stores.push(Site_iBOOD);    // iBood
SiteCollection_Stores_Main.push(Site_iBOOD);    // iBood
// SiteCollection_Stores.push(Site_aaa);
/*
// Food delivery
Take Away      // https://www.takeaway.com/be          Site_TakeAway
Deliveroo      // https://deliveroo.be/nl-be/          Site_Deliveroo
Uber Eats      // https://www.ubereats.com/be-nl       Site_UberEats
*/
SiteCollection_Stores.push(Site_TakeAway);    // Take Away
SiteCollection_Stores_FoodDelivery.push(Site_TakeAway);    // Take Away
SiteCollection_Stores.push(Site_Deliveroo);    // Deliveroo
SiteCollection_Stores_FoodDelivery.push(Site_Deliveroo);    // Deliveroo
SiteCollection_Stores.push(Site_UberEats);    // Uber Eats
SiteCollection_Stores_FoodDelivery.push(Site_UberEats);    // Uber Eats

// --------------------------------------
/*
// CloudDrives
SiteCollection_CloudDrives.push(Site_OneDrive);  // https://onedrive.com
SiteCollection_CloudDrives.push(Site_GoogleDrive);
SiteCollection_CloudDrives.push(Site_Mega);  // https://mega.nz
*/
// --------------------------------------

// SiteCollection_GoogleSites
SiteCollection_GoogleSites.push(Site_Google);
SiteCollection_GoogleSites.push(Site_Google_Maps);
// SiteCollection_GoogleSites.push(aaa);  // https://chrome.google.com/webstore/category/extensions?hl=nl
// SiteCollection_GoogleSites.push(Site_GooglePlayStore);  // https://play.google.com/
// SiteCollection_GoogleSites.push(Site_GoogleDrive);  // https://drive.google.com/drive        // SiteCollection_CloudDrives
// SiteCollection_GoogleSites.push(aaa);  // bbb
SiteCollection_GoogleSites.push(Site_Youtube);
SiteCollection_GoogleSites.push(Site_YoutubeMusic);
// --------------------------------------
/*
// MicrosoftSites

*/
// --------------------------------------
// Fandom
SiteCollection_Fandom.push(Site_Fandom_HypixelSkyBlockWiki);
// --------------------------------------

// --------------------------------------
// HypixelSkyblock
SiteCollection_HypixelSkyblock.push(Site_Hypixel_SkyBlockWiki);
SiteCollection_HypixelSkyblock.push(Site_Fandom_HypixelSkyBlockWiki);
SiteCollection_HypixelSkyblock.push(Site_BrandonFowler_SkyBlockAH);
SiteCollection_HypixelSkyblock.push(Site_SkyCrypt);
SiteCollection_HypixelSkyblock.push(Site_SkyCrypt_brecht2202);
// --------------------------------------

// --------------------------------------
// RockstarGames
SiteCollection_RockstarGames.push(Site_RockstarGames);
SiteCollection_RockstarGames.push(Site_RockstarGames_GTAOnline);
SiteCollection_RockstarGames.push(Site_RockstarGames_Newswire);
SiteCollection_RockstarGames.push(Site_RockstarGames_Newswire_GTA);
SiteCollection_RockstarGames.push(Site_RockstarGames_Newswire_RDO);
SiteCollection_RockstarGames.push(Site_Youtube_Gtamen);
// --------------------------------------

// --------------------------------------
// PXL
SiteCollection_PXL.push(Site_PXL);
// SiteCollection_PXL.push(Site_PXL_BlackBoard);
SiteCollection_PXL.push(Site_PXL_BlackBoard_Cursussen);
SiteCollection_PXL.push(Site_PXL_BlackBoard_AlgemeneCursussen);
SiteCollection_PXL.push(Site_PXL_MyTimetable);
SiteCollection_PXL.push(Site_PXL_MijnPXL);
// SiteCollection_PXL.push(Site_PXL_MijnPXL_MijnOpleidingsonderdelen);
SiteCollection_PXL.push(Site_PXL_MijnSLB);
SiteCollection_PXL.push(Site_PXL_Mail);
SiteCollection_PXL.push(Site_PXL_EPOS);
// --------------------------------------



// --------------------------------------
/*
// CodingSites
w3schools
w3schools ref
StackOverflow
ahk
*/
// --------------------------------------


// =========================================================================
















// =========================================================================
// PART4 - CreateDiv


// divCreateDiv_EachObjectInArray(array, elementId);
// divCreateDiv_EachObjectInArray(SocialMedia, document.getElementById("divElement_main-grid-box-links_SocialMedia").innerHTML);

// // document.getElementById("divElement_main-grid-box-links_SocialMedia").innerHTML = divCreateDiv_EachObjectInArray(SocialMedia);
// divCreateDiv_EachObjectInArray needs to do/return:
// // elementId = arrayDiv;


// TESTING: ------------ \\\\\
// function divCreateDiv_EachObjectInArray1(array, elementId) {
//     // let arrayDiv = ``;      //let arrayDiv = `<div><h1>Header arrayDiv</h1></div>`;
//     let arrayDiv = `<div><h1>Header arrayDiv</h1></div>`;
//     console.log(array);
//     console.log(elementId);
//     document.getElementById(elementId).innerHTML = arrayDiv;
// }
// --------------------- /////


// async function divCreateDiv_EachObjectInArray(array, elementId){
function divCreateDiv_EachObjectInArray(array, elementId){
    // Declare ElementID Element
    // var ElementID_Element = document.getElementById(elementId).innerHTML;

    // Declare arrayDiv (you can add a header here)
    var arrayDiv = ``;      //let arrayDiv = `<div><h1>Header arrayDiv</h1></div>`;
    document.getElementById(elementId).innerHTML = arrayDiv;

    // --- testing --- \\\
    // var objectDiv = `<div><p>testing aaa</p></div>`;
    // // var objectDiv = "water";
    // // let div = document.querySelector('.container');
    // // div.innerHTML += '<p class="note">JS DOM</p>';
    // console.count('debugCounter');
    // let ElementID_Element = document.getElementById(elementId);
    // // console.log(objectDiv)
    // console.log(ElementID_Element.innerHTML + '\n\n' + objectDiv)
    // ElementID_Element.innerHTML += objectDiv;
    // console.log(ElementID_Element.innerHTML)
    // --- --- --- --- ///
    // --- solution:
    // document.getElementById(elementId).innerHTML += objectDiv;

    // createNodeSiteLink(objectDiv, elementId);
    // function createNodeSiteLink(objectDiv, elementId) {
    //     // console.log('reach:\n' + objectDiv)
    //     // Create an "li" node:
    //     var node = document.createElement("li");
    //     // console.log(node);
    //     // Create a text node:
    //     var textnode = document.createTextNode(objectDiv);
    //     // console.log(textnode);
    //
    //     // Append the text node to the "li" node:
    //     node.appendChild(textnode);
    //     console.log(node);
    //     console.log(document.getElementById(elementId).innerText);
    //     // Append the "li" node to the list:
    //     document.getElementById(elementId).appendChild(node);
    //     console.log(document.getElementById(elementId).innerText);
    // }

    // array = [];   // temp DELETE THIS LINE
    // Get property/properties from every object and add it as a div
    //console.group('Creating a collection Div:      ' + elementId);
    array.forEach(function (object) {

        // get property/properties from object:
        let propertyName = object.name;
        let propertyIcon = object.icon;
        let propertyIconPath = object.iconPath;
        let propertyIconPathFull = object.iconPathFull();
        // let propertyIconPathFull = object.iconPathFull;
        let propertyHyperlink = object.hyperlink;
        // console.log(propertyIconPathFull);


        // CHECK IF IMAGE EXISTS
        function checkIfIconExists(url, callback) {
            const img = new Image();
            img.src = url;

            if (img.complete) {
                callback(true);
            } else {
                img.onload = () => {
                    callback(true);
                    // objectDiv =
                    //     `<a href="${propertyHyperlink}" class="sitelink">
                    //         <img class="icon" src="${propertyIconPathFull}">
                    //         <p>${propertyName}</p>
                    //     </a>`;
                    // return objectDiv;
                };

                img.onerror = () => {
                    callback(false);
                    // objectDiv =
                    //     `<a href="${propertyHyperlink}" class="sitelink">
                    //         <img class="icon" src="${iconUrl_fullUrl_withSize}">
                    //         <p>${propertyName}</p>
                    //     </a>`;
                    // return objectDiv;
                };
            }
        }

        // getIcon if not found
        let iconUrl_prefix = "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=";
        // let iconUrl_prefix = "https://api.statvoo.com/favicon/?url=";
        // === given url --- Example:   https://community.kodular.io
        let iconUrl_suffix = "&size=";
        // let iconUrl_suffix = "&size=";
        let iconUrl_fullUrl = iconUrl_prefix + propertyHyperlink + iconUrl_suffix;
        // let iconUrl_fullUrl = iconUrl_prefix + propertyHyperlink;
        let iconUrl_fullUrl_withSize = iconUrl_prefix + propertyHyperlink + iconUrl_suffix + 32;
        // let iconUrl_fullUrl_withSize = iconUrl_prefix + propertyHyperlink;



        // ===== ===== ===== \\\\\ \\\\\ \\\\\

        // Creates the div + if statement so Errors go away if non existent icon is in another folder + makes a break if all props are empty
        let objectDiv;
        // FIRST IF DOESN'T WORK. DOESN'T REACH.
        if (propertyName === "" && propertyIcon === "" && propertyIconPath === "" && propertyHyperlink === "") {        // Used for LineBreak   (Site_LineBreak)
            // add the property in a div
            objectDiv =
                `<p>
                    <hr>
                 </p>`;

            // Add each objectDiv to arrayDiv
            // arrayDiv = arrayDiv + objectDiv;
            // arrayDiv = arrayDiv + `<li>` + objectDiv + `</li>`;

            // createNodeSiteLink(objectDiv);
            var objectDiv_inLi = `<li>` + objectDiv + `</li>`;
            document.getElementById(elementId).innerHTML += objectDiv_inLi;

            //return arrayDiv;
            // let promise_arrayDiv = new Promise(function(resolve) {
            //     resolve(arrayDiv);
            // });
            // return promise_arrayDiv;
        }
        else if (propertyName != "" && propertyIcon === "" && propertyIconPath === "" && propertyHyperlink === "") {    // Used for h2 headers   (Site_###)
            objectDiv =
                `<p>
                    <h2>${propertyName}</h2>
                 </p>`;

            // Add each objectDiv to arrayDiv
            // arrayDiv = arrayDiv + objectDiv;
            // arrayDiv = arrayDiv + `<li>` + objectDiv + `</li>`;

            var objectDiv_inLi = `<li>` + objectDiv + `</li>`;
            document.getElementById(elementId).innerHTML += objectDiv_inLi;
        }
        else if (propertyIconPath === iconPath_Root && propertyIcon === "") {
            // console.log('propertyIcon === EMPTY:   ' + propertyIconPathFull);
            // add the property in a div
            // objectDiv =
            //     `<div class="sitelink">
            //         <a href="${propertyHyperlink}">${propertyName}</a>
            //      </div>`;
            objectDiv =
                `<a href="${propertyHyperlink}" class="sitelink">
                    <img class="icon" src="${iconUrl_fullUrl_withSize}">
                    <p>${propertyName}</p>
                 </a>`;

            // Add each objectDiv to arrayDiv
            // arrayDiv = arrayDiv + objectDiv;
            // arrayDiv = arrayDiv + `<li>` + objectDiv + `</li>`;

            var objectDiv_inLi = `<li>` + objectDiv + `</li>`;
            document.getElementById(elementId).innerHTML += objectDiv_inLi;

            //return arrayDiv;
            // let promise_arrayDiv = new Promise(function(resolve) {
            //     resolve(arrayDiv);
            // });
            // return promise_arrayDiv;
        }
        // else if (propertyIconPath === "archive/icons/" && checkIfIconExists(propertyIconPathFull) === true) {
        else if (propertyIconPath === iconPath_Root) {                                                               // Used if IconPathFull exists, otherwise uses dynamic icon from hyperlink
            // console.log('propertyIcon === NOT EMPTY:   ' + propertyIconPathFull);

            try {
                // var img = new Image();
                // window.onerror = function () {
                //     console.log("window.onerror")
                //     // objectDiv =
                //     //     `<a href="${propertyHyperlink}" class="sitelink">
                //     //         <img class="icon" src="${iconUrl_fullUrl_withSize}">
                //     //         <p>${propertyName}</p>
                //     //     </a>`;
                // }
                // img.onload = function () {
                //     console.log("img.onload")
                //     objectDiv =
                //         `<a href="${propertyHyperlink}" class="sitelink">
                //             <img class="icon" src="${propertyIconPathFull}" alt="${iconUrl_fullUrl_withSize}">
                //             <p>${propertyName}</p>
                //         </a>`;
                // }
                // img.src = propertyIconPathFull;

                // console.log("img.onload")

                // console.log(propertyIconPathFull)
                // console.log(iconUrl_fullUrl_withSize)
                objectDiv =
                    `<a href="${propertyHyperlink}" class="sitelink">
                        <img class="icon" src="${propertyIconPathFull}" onerror="this.onerror=null;this.src='${iconUrl_fullUrl_withSize}';">
                        <p>${propertyName}</p>
                    </a>`;
                // objectDiv =
                //     `<a href="${propertyHyperlink}" class="sitelink">
                //         <img class="icon" src="${propertyIconPathFull}" alt="${iconUrl_fullUrl_withSize}">
                //         <p>${propertyName}</p>
                //     </a>`;


                var objectDiv_inLi = `<li>` + objectDiv + `</li>`;
                // throw new Error('This is the throw keyword'); //user-defined throw statement.
                document.getElementById(elementId).innerHTML += objectDiv_inLi;
            }
            catch (ex) {
                // document.write(ex.message);
                // let errormessage = ex.message
                // console.log('testing: ' + ex)

                // objectDiv =
                //     `<a href="${propertyHyperlink}" class="sitelink">
                //         <img class="icon" src="${iconUrl_fullUrl_withSize}">
                //         <p>${propertyName}</p>
                //     </a>`;
                //
                // var objectDiv_inLi = `<li>` + objectDiv + `</li>`;
                // document.getElementById(elementId).innerHTML += objectDiv_inLi;
            }
            finally {
                // Add each objectDiv to arrayDiv
                // arrayDiv = arrayDiv + objectDiv;
                // arrayDiv = arrayDiv + `<li>` + objectDiv + `</li>`;

                // createNodeSiteLink(objectDiv);
            }



            // // --- --- --- \\\\\
            //
            // // If icon has a typo and can't be found,
            // // use:          "iconUrl_fullUrl_withSize"
            // // otherwise:    "propertyIconPathFull"
            //
            //
            // var bool_IconExist = null;
            // checkIfIconExists(propertyIconPathFull, (exists) => {
            //     // console.log(propertyIconPathFull + '   ' + propertyHyperlink + '   ' + propertyName + '   ' + iconUrl_fullUrl_withSize + '\n                 ' + objectDiv)
            //     if (exists) {
            //         console.log('Image exists. ')
            //         bool_IconExist = true;
            //         // console.log('bool_IconExist: ' + bool_IconExist);
            //         objectDiv =
            //             `<a href="${propertyHyperlink}" class="sitelink">
            //                 <img class="icon" src="${propertyIconPathFull}">
            //                 <p>${propertyName}</p>
            //             </a>`;
            //
            //         // Add each objectDiv to arrayDiv
            //         arrayDiv = arrayDiv + objectDiv;
            //         // arrayDiv = arrayDiv + `<li>` + objectDiv + `</li>`;
            //         //return arrayDiv;
            //         // let promise_arrayDiv = new Promise(function(resolve) {
            //         //     resolve(arrayDiv);
            //         // });
            //         // return promise_arrayDiv;
            //
            //         // console.log(objectDiv);
            //         // return objectDiv;
            //     } else {
            //         console.log(propertyIconPathFull + '   ' + propertyHyperlink + '   ' + propertyName + '   ' + iconUrl_fullUrl_withSize + '\n                 ' + objectDiv)
            //         console.log('propertyIcon === CANT FIND:   ' + propertyIconPathFull);
            //         console.error('Image does not exists.   ' + propertyIconPathFull);
            //         bool_IconExist = false;
            //         console.log('bool_IconExist: ' + bool_IconExist);
            //         console.log(objectDiv);
            //         objectDiv =
            //             `<a href="${propertyHyperlink}" class="sitelink">
            //                 <img class="icon" src="${iconUrl_fullUrl_withSize}">
            //                 <p>${propertyName}</p>
            //             </a>`;
            //
            //         // Add each objectDiv to arrayDiv
            //         arrayDiv = arrayDiv + objectDiv;
            //         // arrayDiv = arrayDiv + `<li>` + objectDiv + `</li>`;
            //         //return arrayDiv;
            //         // let promise_arrayDiv = new Promise(function(resolve) {
            //         //     resolve(arrayDiv);
            //         // });
            //         // return promise_arrayDiv;
            //
            //         // console.log(objectDiv);
            //         // return objectDiv;
            //     }
            // });
            //
            // // --- --- --- /////





            // --- --- --- \\\\\

            // console.log('bool_IconExist: ' + bool_IconExist);
            // if (bool_IconExist = false) {
            //     objectDiv =
            //         `<a href="${propertyHyperlink}" class="sitelink">
            //             <img class="icon" src="${propertyIconPathFull}">
            //             <p>${propertyName}</p>
            //         </a>`;
            // }
            // if (bool_IconExist = true) {
            //     objectDiv =
            //         `<a href="${propertyHyperlink}" class="sitelink">
            //             <img class="icon" src="${iconUrl_fullUrl_withSize}">
            //             <p>${propertyName}</p>
            //         </a>`;
            // }

            // // add the property in a div
            // // objectDiv =
            // //     `<div class="sitelink">
            // //         <img class="icon" src="${propertyIconPathFull}">
            // //         <a href="${propertyHyperlink}">${propertyName}</a>
            // //      </div>`;
            // objectDiv =
            //     `<a href="${propertyHyperlink}" class="sitelink">
            //         <img class="icon" src="${propertyIconPathFull}">
            //         <p>${propertyName}</p>
            //      </a>`;

            // --- --- --- /////



        }
        else{                                                                                                           // Used if 'propertyIconPath != iconPath_Root'
            // console.log('propertyIconPath != iconPath_Root :   ' + propertyIconPathFull);
            // add the property in a div
            // objectDiv =
            //     `<div class="sitelink">
            //         <a href="${propertyHyperlink}">${propertyName}</a>
            //      </div>`;
            objectDiv =
                `<a href="${propertyHyperlink}" class="sitelink">
                    <img class="icon" src="${iconUrl_fullUrl_withSize}">
                    <p>${propertyName}</p>
                 </a>`;

            // Add each objectDiv to arrayDiv
            // arrayDiv = arrayDiv + objectDiv;
            // arrayDiv = arrayDiv + `<li>` + objectDiv + `</li>`;

            var objectDiv_inLi = `<li>` + objectDiv + `</li>`;
            document.getElementById(elementId).innerHTML += objectDiv_inLi;

            //return arrayDiv;
            // let promise_arrayDiv = new Promise(function(resolve) {
            //     resolve(arrayDiv);
            // });
            // return promise_arrayDiv;
        }

        // ===== ===== ===== ///// ///// /////



        // --- --- --- \\\\\

        // Create div (gives errors if non existent icon is in another folder than "archive/icons/".
        // add the property in a div
        // let objectDiv =
        //     `<div>
        //          <img class="icon" src="${propertyIconPathFull}">
        //          <a href="${propertyHyperlink}">${propertyName}</a>
        //      </div>`;

        // Add each objectDiv to arrayDiv
        //arrayDiv = arrayDiv + objectDiv;

        //return arrayDiv;

        // console.log(promise_arrayDiv)
        // return promise_arrayDiv;

        // --- --- --- /////


    });
    //console.groupEnd();



    /*
    // createPromise();
    // async function createPromise() {
    //     let arrayDiv = "test";
    //     let promise_arrayDiv = new Promise(function(resolve) {
    //         resolve(arrayDiv);
    //     });
    //     return promise_arrayDiv;
    // }


    // await Initialize_divElement_main_grid_box_links();
    // document.getElementById("demo").innerHTML = await objectDivCreated;
    // return arrayDiv;
    // elementId = await promise_arrayDiv;
    */



    // console.log(elementId);
    // console.log(arrayDiv);
    // elementId = arrayDiv;


    // document.getElementById(elementId).innerHTML = arrayDiv;
    // ElementID_Element.innerHTML = arrayDiv;
    // console.log(document.getElementById(elementId).innerHTML);
}










// ----------   Get HighestQuality Icon from site   ----------------------------------------------------------


// works - (code goes from here)
/*

// alert(getIconSize("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://community.kodular.io&size=33"));
// alert(getIconSize("https://community.kodular.io"));
let Icon_HighestQuality = getIcon_HighestQuality("https://community.kodular.io");
// Icon_HighestQualityFunction();
// function Icon_HighestQualityFunction() {
//     alert(Icon_HighestQuality);
//     setTimeout(Icon_HighestQualityFunction, 1 * 2000);
// }

async function getIcon_HighestQuality(url) {

    // === https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=
    var iconUrl_prefix = "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=";
    // === given url
    // https://community.kodular.io
    // === &size=
    var iconUrl_suffix = "&size=";
    // var suffix_16 = "&size=16";
    // var suffix_32 = "&size=32";
    // var suffix_64 = "&size=64";
    // var suffix_128 = "&size=128";
    // var suffix_256 = "&size=256";
    // var suffix_512 = "&size=512";
    // var suffix_1024 = "&size=1024";
    // var suffix_2048 = "&size=2048";
    var iconUrl_fullUrl = iconUrl_prefix + url + iconUrl_suffix;
    // let iconUrl_fullUrl_withSize;
    let iconUrl_fullUrl_withSize = iconUrl_fullUrl+31

    // const result = await getIconSize_resolveCall(fullUrlWithSize);
    // const result = await getIconSize_resolveCall(iconUrl_fullUrl);
    const result_16 = await getIcon_HighestQuality_resolveCall(iconUrl_fullUrl+16);
    const result_32 = await getIcon_HighestQuality_resolveCall(iconUrl_fullUrl+32);
    const result_48 = await getIcon_HighestQuality_resolveCall(iconUrl_fullUrl+48);
    const result_64 = await getIcon_HighestQuality_resolveCall(iconUrl_fullUrl+64);
    const result_128 = await getIcon_HighestQuality_resolveCall(iconUrl_fullUrl+128);
    const result_256 = await getIcon_HighestQuality_resolveCall(iconUrl_fullUrl+256);
    const result_512 = await getIcon_HighestQuality_resolveCall(iconUrl_fullUrl+512);
    // alert('result_16: ' + result_16 + '\nresult_32: ' + result_32 + '\nresult_48: ' + result_48 + '\nresult_64: ' + result_64 + '\nresult_128: ' + result_128 + '\nresult_256: ' + result_256 + '\nresult_512: ' + result_512);
    // let biggestSize = Math.max(result_16, result_32, result_48, result_64, result_128, result_256, result_512);
    // alert('result_32: ' + result_32 + '\nresult_48: ' + result_48 + '\nresult_64: ' + result_64 + '\nresult_128: ' + result_128 + '\nresult_256: ' + result_256 + '\nresult_512: ' + result_512);
    let biggestSize = Math.max(result_32, result_48, result_64, result_128, result_256, result_512);
    // alert(biggestSize);
    // return biggestSize;

    let fullUrlWithSize = iconUrl_fullUrl+biggestSize;
    return fullUrlWithSize;
};

function getIcon_HighestQuality_resolveCall(fullUrlWithSize) {
    var iconUrl_width;

    var img = new Image();
    img.src = fullUrlWithSize;
    img.onload = function() {
        iconUrl_width = this.width;

    };

    return new Promise(resolve => {
        setTimeout(() => { resolve(iconUrl_width); }, 200);
    });
}

*/
// works - (code goes till here)






// =============================== ===============================

/*
// // https://www.codegrepper.com/code-examples/javascript/javascript+get+image+size+from+url
// function getMeta(url, callback) {
//     var img = new Image();
//     img.src = url;
//     img.onload = function() { callback(this.width, this.height); }
// }
// getMeta(
//     "http://snook.ca/files/mootools_83_snookca.png",
//     function(width, height) { alert(width + 'px ' + height + 'px') }
// );


// ===============================

// function getIcon_HighestQuality(url, callback) {
function getIcon_HighestQuality(url) {

    // var iconUrl_smallest = 0;
    var iconUrl_check;
    var iconUrl_biggest = 0;
    var iconUrl_counter = 0;
    var iconUrl_whileLoop = true;

    // getIconSize(iconUrl_fullUrl+iconUrl_counter);
    // alert(getIconSize(iconUrl_fullUrl_inLoop1, function(width) { width }));
    // alert(iconUrl_fullUrl_inLoop1);
    // window.location.href = iconUrl_fullUrl_withSize;

    // alert(getIconSize(iconUrl_fullUrl_withSize + 16));

    while (iconUrl_whileLoop) {
        iconUrl_fullUrl_withSize = iconUrl_fullUrl + iconUrl_counter;
    //     // alert(getIconSize(iconUrl_fullUrl_inLoop) + "   iconUrl_counter = " + iconUrl_counter);
    //     if (iconUrl_counter === 2048) {
    //         alert('Loop ended' + '\n' + '- iconUrl_counter = ' + iconUrl_counter + '\n' + '- iconUrl_biggest = ' + iconUrl_biggest);
    //         iconUrl_whileLoop = false;
    //         break
    //     }

        getIconSize(iconUrl_fullUrl_withSize, function(width) { alert(width); });
        alert(iconUrl_check)

        alert('going through loop' +
            '\n' + '- iconUrl_counter = ' + iconUrl_counter +
            '\n' + '- iconUrl_biggest = ' + iconUrl_biggest +
            // '\n' + '- getIconSize(iconUrl_fullUrl_withSize) = ' + getIconSize(iconUrl_fullUrl_withSize, function(width, height) { alert(width + 'px ' + height + 'px') }) +
            // '\n' + '- getIconSize(iconUrl_fullUrl_withSize) = ' + getIconSize(iconUrl_fullUrl_withSize, function(width, height) { iconUrl_check = width; return (iconUrl_check) }) +
            '\n\n' + 'iconUrl_fullUrl_inLoop : \n' + iconUrl_fullUrl_withSize

            );
    //     if (getIconSize(iconUrl_fullUrl_inLoop) > iconUrl_biggest) {
    //         iconUrl_biggest = iconUrl_counter;
    //         alert('new size: iconUrl_biggest = ' + iconUrl_biggest);
    //     }
        iconUrl_counter++;
    }

    // return iconUrl_biggest;

    function getIconSize(url, callback) {
    // function getIconSize(url) {
        var img = new Image();
        img.src = url;
        img.onload = function() { callback(this.width); }
        // img.onload = function() { callback(this.width); }
        // img.onload = function() {
            // callback(this.width);
            // alert(this.width)
            // return img.width
            // alert('img loaded');
        // };
        // function callback(width) { alert(width + 'px ') }
        // return img.width
        // alert('reaches')
        // let returnstring = img;
        // return returnstring;
        // return img.naturalWidth;
        // return alert(img.width)
        // return alert(callback(img.width))
    }

    // alert('done' + '\n' + '- iconUrl_biggest = ' + iconUrl_biggest + '\n' + '- iconUrl_counter = ' + iconUrl_counter);
    // return iconUrl_biggest;
}
*/

// getIcon_HighestQuality("https://community.kodular.io");

// let IconSize = getIconSize("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://community.kodular.io&size=33");
// let IconSize = getIconSize("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://community.kodular.io&size=33");
// alert(IconSize);
// alert(getIconSize("https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://community.kodular.io&size=33"));



// ===============================




// ===============================

/*
function getIconSize_resolveCall(iconUrl_fullUrl) {
    var result_16 = iconUrl_fullUrl+16;
    var result_32 = iconUrl_fullUrl+32;
    var result_48 = iconUrl_fullUrl+48;
    var result_64 = iconUrl_fullUrl+64;
    var result_128 = iconUrl_fullUrl+128;
    var result_256 = iconUrl_fullUrl+256;
    var result_512 = iconUrl_fullUrl+512;

    var counter = 0;

    return [
        new Promise(resolve => {
            setTimeout(() => { resolve(yourFunction()); }, 1500);
        }),
    ];


    // yourFunction();
    function yourFunction(){
        // do whatever you like here
        if (counter = 0){

            var iconUrl_width;

            var img = new Image();
            img.src = fullUrlWithSize;
            img.onload = function() {
                iconUrl_width = this.width;

            };

            setTimeout(yourFunction, 1 * 1500);
            return iconUrl_width;
        }
        else {

            var iconUrl_width;

            var img = new Image();
            img.src = fullUrlWithSize;
            img.onload = function() {
                iconUrl_width = this.width;

            };

            setTimeout(yourFunction, 1 * 1000);
            return iconUrl_width;
        }
        counter++;
    }

    // var iconUrl_width;
    //
    // var img = new Image();
    // img.src = fullUrlWithSize;
    // img.onload = function() {
    //     iconUrl_width = this.width;
    //
    // };
    //
    // return new Promise(resolve => {
    //     setTimeout(() => { resolve(iconUrl_width); }, 1500);
    // });

}
*/

// ===============================

/*
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall() {
    console.log('calling');
    alert('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    alert(result);
    // expected output: "resolved"
}
asyncCall();
*/









// ----------   Create/Refresh the div   ----------------------------------------------------------

// // If using subDivs, also enable in main div initializer function at the end.
// // Initialize_divElement_main_grid_box_links_SubDivs();
// function Initialize_divElement_main_grid_box_links_SubDivs() {
//     // ###
//     // Add new ones to logCollections
// }


// async function myDisplay() {
//     let myPromise = new Promise(function() {
//         resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
// }
// myDisplay();



Initialize_divElement_main_grid_box_links();
function Initialize_divElement_main_grid_box_links() {
    // console.log('initializing (in function)');


    // divCreateDiv_EachObjectInArray(SocialMedia, document.getElementById("divElement_main-grid-box-links_SocialMedia").innerHTML);
    divCreateDiv_EachObjectInArray(SiteCollection_SocialMedia, "divElement_main-grid-box-links_SiteCollection_SocialMedia");
    // document.getElementById("divElement_main-grid-box-links_SocialMedia").innerHTML = divCreateDiv_EachObjectInArray(SocialMedia);

    // divCreateDiv_EachObjectInArray(QuickLinks, document.getElementById("divElement_main-grid-box-links_QuickLinks").innerHTML);
    divCreateDiv_EachObjectInArray(SiteCollection_QuickLinks, "divElement_main-grid-box-links_SiteCollection_QuickLinks");
    // document.getElementById("divElement_main-grid-box-links_QuickLinks").innerHTML = divCreateDiv_EachObjectInArray(QuickLinks);

    // divCreateDiv_EachObjectInArray(MusicPlatforms, document.getElementById("divElement_main-grid-box-links_MusicPlatforms").innerHTML);
    divCreateDiv_EachObjectInArray(SiteCollection_MusicPlatforms, "divElement_main-grid-box-links_SiteCollection_MusicPlatforms");
    // document.getElementById("divElement_main-grid-box-links_MusicPlatforms").innerHTML = divCreateDiv_EachObjectInArray(MusicPlatforms);


    // divCreateDiv_EachObjectInArray(VideoSites, document.getElementById("divElement_main-grid-box-links_VideoSites").innerHTML);
    divCreateDiv_EachObjectInArray(SiteCollection_VideoSites, "divElement_main-grid-box-links_SiteCollection_VideoSites");
    // document.getElementById("divElement_main-grid-box-links_VideoSites").innerHTML = divCreateDiv_EachObjectInArray(VideoSites);


    // Enable this to show all stores
    // divCreateDiv_EachObjectInArray(SiteCollection_Stores, "divElement_main-grid-box-links_SiteCollection_Stores");
    divCreateDiv_EachObjectInArray(SiteCollection_Stores_Main, "divElement_main-grid-box-links_SiteCollection_Stores_Main");
    divCreateDiv_EachObjectInArray(SiteCollection_Stores_FoodDelivery, "divElement_main-grid-box-links_SiteCollection_Stores_FoodDelivery");


    // GOOGLESITE       MAKE DIV    +   ENABLE THIS
    // divCreateDiv_EachObjectInArray(SiteCollection_GoogleSites, "divElement_main-grid-box-links_SiteCollection_GoogleSites");




    // document.getElementById("divElement_main-grid-box-links_TorrentSites").innerHTML = divCreateDiv_EachObjectInArray(TorrentSites);
    // document.getElementById("divElement_main-grid-box-links_CloudDrives").innerHTML = divCreateDiv_EachObjectInArray(CloudDrives);
    // document.getElementById("divElement_main-grid-box-links_GoogleSites").innerHTML = divCreateDiv_EachObjectInArray(GoogleSites);
    // document.getElementById("divElement_main-grid-box-links_MicrosoftSites").innerHTML = divCreateDiv_EachObjectInArray(MicrosoftSites);
    // document.getElementById("divElement_main-grid-box-links_HandySites").innerHTML = divCreateDiv_EachObjectInArray(HandySites);
    // document.getElementById("divElement_main-grid-box-links_Fandom").innerHTML = divCreateDiv_EachObjectInArray(Fandom);




    // divCreateDiv_EachObjectInArray(HypixelSkyblock, document.getElementById("divElement_main-grid-box-links_HypixelSkyblock").innerHTML);
    divCreateDiv_EachObjectInArray(SiteCollection_HypixelSkyblock, "divElement_main-grid-box-links_SiteCollection_HypixelSkyblock");
    // document.getElementById("divElement_main-grid-box-links_HypixelSkyblock").innerHTML = divCreateDiv_EachObjectInArray(HypixelSkyblock);
    // divCreateDiv_EachObjectInArray(RockstarGames, document.getElementById("divElement_main-grid-box-links_RockstarGames").innerHTML);
    divCreateDiv_EachObjectInArray(SiteCollection_RockstarGames, "divElement_main-grid-box-links_SiteCollection_RockstarGames");
    // document.getElementById("divElement_main-grid-box-links_RockstarGames").innerHTML = divCreateDiv_EachObjectInArray(RockstarGames);

    // divCreateDiv_EachObjectInArray(PXL, document.getElementById("divElement_main-grid-box-links_PXL").innerHTML);
    divCreateDiv_EachObjectInArray(SiteCollection_PXL, "divElement_main-grid-box-links_SiteCollection_PXL");
    // document.getElementById("divElement_main-grid-box-links_PXL").innerHTML = divCreateDiv_EachObjectInArray(PXL);

    // AllSites
    // let AllSites_Sorted_Alphabetically = AllSites.sort((a, b) => a.name.localeCompare(b.name))
    // divCreateDiv_EachObjectInArray(AllSites, document.getElementById("divElement_main-grid-box-links_AllSites").innerHTML);
    divCreateDiv_EachObjectInArray(SiteCollection_AllSites, "divElement_main-grid-box-links_SiteCollection_AllSites");
    // divCreateDiv_EachObjectInArray(AllSites_Sorted_Alphabetically, "divElement_main-grid-box-links_AllSites");
    // document.getElementById("divElement_main-grid-box-links_AllSites").innerHTML = divCreateDiv_EachObjectInArray(AllSites);


    createDiv_GoogleMaps(Site_Google_Maps, "divElement_main-grid-box_GoogleMaps");


    // document.getElementById("divElement_QuickLinks").innerHTML = divCreateDiv_EachObjectInArray_Array(QuickLinks);
    // document.getElementById("divElement_HandySites").innerHTML = divCreateDiv_EachObjectInArray_Array(HandySites);

    /*
    VideoSites
    TorrentSites
    CloudDrives
    GoogleSites
    MicrosoftSites
    HandySites
    Fandom
    */


    // Initialize_divElement_NPSites_SubDivs();
    // console.log('initialized (in function)');
}

// const divElement_main_grid_box_links = document.querySelectorAll('.divElement_main-grid-box-links');
// divElement_main_grid_box_links.forEach(box => {
//     box.style.backgroundColor = 'purple';
//     box.style.width = '300px';
// });
const divElement_main_grid_box_links = document.querySelectorAll('.main-grid-box-links');
divElement_main_grid_box_links.forEach(box => {
    // box.style.backgroundColor = 'purple';
    // box.style.textAlign = 'left';
    // box.style.marginLeft = 'auto';
    // box.style.marginRight = 'auto';
    // box.style.paddingLeft = 'auto';
    // box.style.paddingRight = 'auto';
});


// =========================================================================



logCollections();
function logCollections() {
    console.group(`Site Collections`);

    console.log(`AllSites`, SiteCollection_AllSites);
    console.log(`QuickLinks`, SiteCollection_QuickLinks);
    console.log(`SocialMedia`, SiteCollection_SocialMedia);
    console.log(`HandySites`, SiteCollection_HandySites);
    console.log(`VideoSites`, SiteCollection_VideoSites);
    console.log(`Stores`, SiteCollection_Stores);
    console.log(`Stores_Main`, SiteCollection_Stores_Main);
    console.log(`Stores_FoodDelivery`, SiteCollection_Stores_FoodDelivery);
    console.log(`TorrentSites`, SiteCollection_TorrentSites);
    console.log(`GoogleSites`, SiteCollection_GoogleSites);

    // console.log(``, arrayname);

    console.groupEnd();
}

















// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================




















































// =====================================================================================================================
/*


// --------------------------------------
// let Youtube = createSiteObject("Youtube","youtube.png","archive/icons/","https://www.youtube.com/");
// AllSites.push(Youtube);
let Youtube = {
    name: "Youtube",
    icon: "youtube.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.youtube.com/"
};
AllSites.push(Youtube);
// --------------------------------------
let Facebook = {
    name: "Facebook",
    icon: "facebook.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.facebook.com/"
};
AllSites.push(Facebook);
// --------------------------------------
let Messenger = {
    name: "Messenger",
    icon: "facebook-messenger.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.messenger.com/"
};
AllSites.push(Messenger);
// --------------------------------------
let Instagram = {
    name: "Instagram",
    icon: "instagram.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.instagram.com/"
};
AllSites.push(Instagram);
// --------------------------------------
let TikTok = {
    name: "TikTok",
    icon: "tiktok-rounded.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.tiktok.com/"
};
AllSites.push(TikTok);
// --------------------------------------
let Reddit = {
    name: "Reddit",
    icon: "reddit.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.reddit.com/"
};
AllSites.push(Reddit);
// --------------------------------------




// --------------------------------------
let Google = {
    name: "Google",
    icon: "google.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.google.com/"
};
AllSites.push(Google);
// --------------------------------------
let YoutubeMusic = {
    name: "Youtube Music",
    icon: "youtube-music.svg",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://music.youtube.com/"
};
AllSites.push(YoutubeMusic);
// --------------------------------------

// --------------------------------------

// --------------------------------------




// --------------------------------------
let Spotify = {
    name: "Spotify",
    icon: "spotify.svg",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "spotify:"
};
AllSites.push(Spotify);
let SpotifyWeb = {
    name: "Spotify Web",
    icon: "spotify.svg",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://open.spotify.com/"
};
AllSites.push(SpotifyWeb);
// --------------------------------------
let Soundcloud = {
    name: "Soundcloud",
    icon: "soundcloud.svg",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://soundcloud.com/"
};
AllSites.push(Soundcloud);
// --------------------------------------

// --------------------------------------

// --------------------------------------





// --------------------------------------
let Netflix = {
    name: "Netflix",
    icon: "netflix.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.netflix.com/"
};
AllSites.push(Netflix);
// --------------------------------------

// --------------------------------------






// --------------------------------------

// --------------------------------------
let Hypixel_SkyBlockWiki = createSiteObject("Hypixel SkyBlock Wiki - Official","hypixel.png","archive/icons/","https://wiki.hypixel.net/");
AllSites.push(Hypixel_SkyBlockWiki);
// let Hypixel_SkyBlockWiki = {
//     name: "Hypixel SkyBlock Wiki - Official",
//     icon: "hypixel.png",
//     iconPath: "archive/icons/",
//     iconPathFull: function() {
//         return this.iconPath + this.icon;
//     },
//     hyperlink: "https://wiki.hypixel.net/"
// };
// AllSites.push(Hypixel_SkyBlockWiki);
// --------------------------------------
let Fandom_HypixelSkyBlockWiki = {
    name: "Hypixel SkyBlock Wiki - Fandom",
    icon: "hypixel-skyblock-wiki.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://hypixel-skyblock.fandom.com/wiki/Hypixel_SkyBlock_Wiki"
};
AllSites.push(Fandom_HypixelSkyBlockWiki);
// --------------------------------------
let BrandonFowler_SkyBlockAH = {
    name: "SkyBlock AH - BrandonFowler",
    icon: "brandon-fowler.png",
    iconPath: "archive/icons/",
    iconPathFull: function() {
        return this.iconPath + this.icon;
    },
    hyperlink: "https://www.brandonfowler.me/skyblockah/?sort=lowest&bin=yes&player=brecht2202"
};
AllSites.push(BrandonFowler_SkyBlockAH);
// --------------------------------------

// --------------------------------------


*/
// =====================================================================================================================










































// =====================================================================================================================










/*


initializeSites();
initializeQuickLinks(AllSites, QuickLinks);
function initializeQuickLinks(AllSites, QuickLinks) {

    QuickLinks.push(TikTok);
    console.log(QuickLinks)
}

function initializeSites() {


    // --------------------------------------
    // ======================================
    // --------------------------------------

    return [
        AllSites,
        QuickLinks,
        SocialMedia,
        HandySites,
        VideoSites,
        TorrentSites
    ];
}
*/





// Getting full path
// AllSites[3].iconPathFull()
// console.log(AllSites[3].fullName())
// console.log(AllSites[3].iconPathFull())








// =========================================================================








// QuickLinks.push(Youtube);



// let SiteName = {
//     name: "SiteName",
//     iconLocation: "archive\\icons\\",
//     icon: "sitename.png"
// };
// AllSites.push(SiteName);
/*
let # = {
    name: "",
    iconLocation: "",
    icon: "#.png"
};
AllSites.push(#);
*/












/*
// =========================================================================

function divCreateDiv_EachObjectInArray_Array(array){
    // Declare arrayDiv (you can add a header here)
    let arrayDiv = ``;      //let arrayDiv = `<div><h1>Header arrayDiv</h1></div>`;

    // Get property/properties from every object and add it as a div
    array.forEach(function (object) {

        // get property/properties from object:
        let propertyName = object.propertyName;

        // add the property in a div
        let objectDiv =
            `<div>
                <p>propertyName: ${propertyName}</p>
            </div>`;

        // Add each objectDiv to arrayDiv
        arrayDiv = arrayDiv + objectDiv;
        return arrayDiv;

    });
    return arrayDiv;
}

// ----------   Create/Refresh the div   ----------------------------------------------------------
// document.getElementById("divIdElement_SocialMedia").innerHTML = divCreateDiv_EachObjectInArray_Array(SocialMedia);
// document.getElementById("divIdElement_QuickLinks").innerHTML = divCreateDiv_EachObjectInArray_Array(QuickLinks);
// document.getElementById("divIdElement_HandySites").innerHTML = divCreateDiv_EachObjectInArray_Array(HandySites);

*/















/*
// ================================================================================================ \\\\\\\\\\\\\\\\\\\\
// divCreateDiv_EachObjectInArrayArray
// ================================================================================================

// ----------   Replace All shortcut - Ctrl+Alt+Shift+J   -----------------------------------------
// --- Replace this with array name
let createDiv_EachObjectInArray_Array = [];
// --- Replace this with divElement id
// divIdElement_createDiv_EachObjectInArray_Array
// --- Replace this with array property name of an object
// propertyName

// ----------   Function   ------------------------------------------------------------------------
function divCreateDiv_EachObjectInArrayArray(array){
    // Declare arrayDiv (you can add a header here)
    let arrayDiv = ``;      //let arrayDiv = `<div><h1>Header arrayDiv</h1></div>`;

    // Get property/properties from every object and add it as a div
    array.forEach(function (object) {

        // get property/properties from object:
        let propertyName = object.propertyName;

        // add the property in a div
        let objectDiv =
            `<div>
                <p>propertyName: ${propertyName}</p>
            </div>`;

        // Add each objectDiv to arrayDiv
        arrayDiv = arrayDiv + objectDiv;
        return arrayDiv;

    });
    return arrayDiv;
}

// ----------   Create/Refresh the div   ----------------------------------------------------------
document.getElementById("divIdElement_createDiv_EachObjectInArray_Array").innerHTML = divCreateDiv_EachObjectInArrayArray(createDiv_EachObjectInArray_Array);


// ================================================================================================ ////////////////////
*/


/*
console.group()
console.log(SocialMedia)
console.log(QuickLinks)
console.log(HandySites)
console.log(VideoSites)
console.log(AllSites)
console.groupEnd()
*/



// ================================================================

// https://stackoverflow.com/questions/31249584/how-to-catch-err-file-not-found-errors-in-javascript

// var logs = ""
//
// function log(x) {
//     logs += '\n\n' + x
// }
//
// //your code
// try{
//     img.attr('src', url)
// }catch(err){
//     log("file"+ url + " doesn't exist")
// }
//
// setTimeout(function(){
//     console.log("%c" + logs, "border-top: dashed 2px black;")
// }, 1000)

// ================================================================

// var logs = ``;
// function log(x) {
//
//     // var command = `console.log('Im fucking awesome');`
//     // eval(command);
//     console.log(x);
//     // x = `${x}`;
//     // var consoleLogString = `console.log(` + `${String.fromCharCode(96)}` + `${x}` + `${String.fromCharCode(96)}` + `);\n\n`;
//     var consoleLogString = `console.log(` + `${x}` + `);\n\n`;
//     logs += consoleLogString;
//
// }
//
// //your code
// var testurl = "test";
// //
// // var img = new Image()
// // img.src = testurl
// // img.onerror = function () {
// //     // console.log('a')
// //     // log("file"+ testurl + " doesn't exist")
// // }
// // img.onload = function () {
// //     // console.log('b')
// // }
//
// // log(`"file <"+ testurl + "> doesn't exist"`)
// log(`"%c" + "file <"+ testurl + "> doaaaabaaaaexist", "color: lightblue;"`)
// log(`"test"`)
// // log("%c" + "file"+ testurl + " doesist", "color: lightblue;")
// // log("%c" + "file"+ testurl + " baaaaaaaaaaaaaa", "color: red;")
//
// setTimeout(function(){
//     console.group(`log`);
//     console.log(logs);
//     eval(logs);
//     // console.log("%c" + logs, "color: yellow;")
//     // console.log("%c" + "tes" + logs, "border-top: dashed 2px black;")
//     console.groupEnd();
// }, 1000)

// ================================================================


