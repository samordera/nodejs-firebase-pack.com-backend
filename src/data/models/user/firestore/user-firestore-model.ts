import {User} from "../../../user";

export class UserFirestoreModel extends User {
    static kUid = 'uid';
    static kName = 'name';
    static kRole = 'role';
    static kEmail = 'email';
    static kBirthDate = 'birthDate';
    static kPhoneNumbers = 'phoneNumbers';
    static kLocation = 'location';
    static kDisplayPhotos = 'displayPhotos';
    static kisEmailVerified = 'isEmailVerified';
    static kisVerified = 'isVerified';
    static kisPhoneNumberVerified = 'isPhoneNumberVerified';
    static kProductListing = 'productListing';
    static kagencyRating = 'agencyRating';
    static ktier = 'tier';

    static fromEntity(entity: User): UserFirestoreModel {
        return Object.assign(UserFirestoreModel.empty(), entity);
    }

    static empty() : UserFirestoreModel {
        return new UserFirestoreModel(
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

    toDocumentData() {
        return {
            [UserFirestoreModel.kUid]: this.uid,
            [UserFirestoreModel.kName]: this.name,
            [UserFirestoreModel.kRole]: this.role,
            [UserFirestoreModel.kEmail]: this.email,
            [UserFirestoreModel.kBirthDate]: this.birthDate,
            [UserFirestoreModel.kPhoneNumbers]: this.phoneNumbers,
            [UserFirestoreModel.kLocation]: this.location,
            [UserFirestoreModel.kDisplayPhotos]: this.displayPhotos,
            [UserFirestoreModel.kisEmailVerified]: this.isEmailVerified,
            [UserFirestoreModel.kisVerified]: this.isVerified,
            [UserFirestoreModel.kisPhoneNumberVerified]: this.isPhoneNumberVerified,
            [UserFirestoreModel.kProductListing]: this.productListing,
            [UserFirestoreModel.kagencyRating]: this.agencyRating,
            [UserFirestoreModel.ktier]: this.tier,
        };
    }

}