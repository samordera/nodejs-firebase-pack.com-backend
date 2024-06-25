import {Controller, HttpServer} from "../index";
import {RequestHandler} from "express";
import {accountsService} from "../../../services/accounts";
import {UserClientModel} from "../../../data/models/user/client/user-client-model";


export class AccountController implements Controller {

    initialize(httpServer: HttpServer): void {
        httpServer.post ('/account', this.createAccount.bind(this));
    }

    private readonly createAccount: RequestHandler = async (req, res, next,) => {
        const { email, password, role, firstName, lastName, birthDate:dob } = req.body;
        const birthDate = new Date(dob);
        const birthDateMillisecondsSinceEpoch = birthDate.getTime();
        
        const user = {
            name: `${firstName} ${lastName}`,
            role,
            email,
            password,
            birthDateMillisecondsSinceEpoch
        };

        const input: UserClientModel & { password: string } = UserClientModel.fromBody(user);
        const refreshedUser = await accountsService.createAccount(input, input.password);

        res.send({
            "user": UserClientModel.fromEntity(refreshedUser).toBody(),
        });
        next();
    }
}

