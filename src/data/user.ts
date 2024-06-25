import {UserRole} from "../index";
import { Product } from "./product";


export class User {
    constructor(
        public readonly uid:string,
        public readonly name:string,
        public readonly role:UserRole,
        public readonly email:string,
        public readonly birthDate: Date,
        public readonly phoneNumbers: string[],
        public readonly location: string,
        public readonly displayPhotos?: string[],
        public readonly isVerified?: boolean,
        public readonly isEmailVerified?: boolean,
        public readonly isPhoneNumberVerified?: boolean,
        public readonly productListing?: Product[],
        public readonly tier?: string,
        public readonly agencyRating?: number,
    ) {}

    copyWith(data:Partial<Record<keyof User, any>>) {
        return new User(
            data.uid ?? this.uid,
            data.name ?? this.name,
            data.role ?? this.role,
            data.email ?? this.email,
            data.birthDate ?? this.birthDate,
            data.phoneNumbers ?? this.phoneNumbers,
            data.displayPhotos ?? this.displayPhotos,
            data.isVerified ?? this.isVerified,
            data.isEmailVerified ?? this.isEmailVerified,
            data.isPhoneNumberVerified ?? this.isPhoneNumberVerified,
            data.location ?? this.location,
            data.productListing ?? this.productListing,
            data.tier ?? this.tier,
            data.agencyRating ?? this.agencyRating,

        );
    }
}
