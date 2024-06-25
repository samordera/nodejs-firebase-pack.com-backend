import { Product } from "../../../product";
import {User} from "../../../user";
import {
    validateUserBirthDate,
    validateUserEmail,
    validateUserName,
    validateUserPassword,
    validateUserRole
} from "./validators";


export class UserClientModel extends User {
    static kUid = 'uid';
    static kName = 'name';
    static kRole = 'role';
    static kEmail = 'email';
    static kPassword = 'password';
    static kBirthDateMillisecondsSinceEpoch = 'birthDateMillisecondsSinceEpoch';
    static kPhoneNumbers = 'phoneNumbers';
    static kLocation = 'location';
    static kDisplayPhotos = 'displayPhotos';
    static kisEmailVerified = 'isEmailVerified';
    static kisVerified = 'isVerified';
    static kisPhoneNumberVerified = 'isPhoneNumberVerified';
    static kProductListing = 'productListing';
    static kagencyRating = 'agencyRating';
    static ktier = 'tier';

    static fromEntity(entity: User): UserClientModel {
        return Object.assign(UserClientModel.empty(), entity);
    }

    static empty() : UserClientModel {
        return new UserClientModel(
            '', // uid
            '', // name
            '' as any, // role
            '', // email
            new Date(), // birthdate
            [], // phoneNumbers
            '', // location
            [], // displayPhotos
            false, // isEmailVerified
            false, // isVerified
            false, // isPhoneNumberVerified
            this.kRole !== 'agent' ? null : [], // productListing
            this.kRole !== 'agent' ? null : 'basic', // agencyRating
            this.kRole !== 'agent' ? null : 0 // tier
            );
    }

    toBody() {
        return {
            [UserClientModel.kUid]: this.uid,
            [UserClientModel.kName]: this.name,
            [UserClientModel.kRole]: this.role,
            [UserClientModel.kEmail]: this.email,
            [UserClientModel.kBirthDateMillisecondsSinceEpoch]: this.birthDate.getTime(),
            [UserClientModel.kPhoneNumbers]: this.phoneNumbers,
            [UserClientModel.kDisplayPhotos]: this.displayPhotos,
            [UserClientModel.kisEmailVerified]: this.isEmailVerified,
            [UserClientModel.kisVerified]: this.isVerified,
            [UserClientModel.kisPhoneNumberVerified]: this.isPhoneNumberVerified,
            [UserClientModel.kProductListing]: this.productListing,
            [UserClientModel.kagencyRating]: this.agencyRating,
            [UserClientModel.ktier]: this.tier,
        };
    }

    static fromBody(body: any): UserClientModel & { password: string } {
        validateUserName(body[UserClientModel.kName]);
        validateUserEmail(body[UserClientModel.kEmail]);
        validateUserRole(body[UserClientModel.kRole]);
        validateUserBirthDate(body[UserClientModel.kBirthDateMillisecondsSinceEpoch]);
        validateUserPassword(body[UserClientModel.kPassword]);

        return Object.assign(
            new UserClientModel(
                null,
                body[UserClientModel.kName],
                body[UserClientModel.kRole],
                body[UserClientModel.kEmail],
                new Date(body[UserClientModel.kBirthDateMillisecondsSinceEpoch]),
                body[UserClientModel.kPhoneNumbers],
                body[UserClientModel.kLocation],
                body[UserClientModel.kDisplayPhotos],
                body[UserClientModel.kisEmailVerified],
                body[UserClientModel.kisVerified],
                body[UserClientModel.kisPhoneNumberVerified],
                body[UserClientModel.kProductListing],
                body[UserClientModel.kagencyRating],
                body[UserClientModel.ktier],
            ),
            {  password: body[UserClientModel.kPassword], }
        )
    }

}
