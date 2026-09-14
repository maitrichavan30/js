// syntax of swith
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month  = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break; // when here the break is not then  all the cases print except default
    case 4:
        console.log("april");
        break;

    default:
        console.log("defaul case match");
        break;
}

const months  = "march"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("febuary");
        break;
    case "march":
        console.log("march");
        break; // when here the break is not then  all the cases print except default
    case "april":
        console.log("april");
        break;

    default:
        console.log("defaul case match");
        break;
}