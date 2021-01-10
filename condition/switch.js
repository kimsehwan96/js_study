const device = 'ipad';

switch (device) {
    case 'iphone' :
        console.log("iphone !")
        break;
    case 'ipad' :
        console.log("ipad !")
        break; //break 입력 안하면 다음 코드가 그냥 실행 되네..;
    case 'glaxy note' :
        console.log("galxy note !");
        break;
    default :
    console.log("I don't know")
}