import {RootController} from "./root";
import {AccountController} from "./account/account-controller";
import {Controller} from "./index";
import {ProductController} from "./product/product-controller";


export const getControllers = () : Array<Controller> => [
    new RootController(),
    new ProductController(),
    new AccountController(),
];
