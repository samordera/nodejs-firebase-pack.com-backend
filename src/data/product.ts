import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;
import FieldValue = firestore.FieldValue;

export class Product {
    constructor(
        public readonly productId:string | undefined,
        public readonly name: string,
        public readonly upperSalePriceLimit: number,
        public readonly lowerSalePriceLimit: number,
        public readonly category: string,
        public readonly condition: string,
        public readonly photos: string[],
        public readonly videos: string[],
        public readonly description: string,
        public readonly brand: string,
        public readonly subCategory: string,
        public readonly agencyCommission: number,
        public readonly shipping: number,
        public readonly views: number,
        public readonly recallDate: Date,
        public readonly agentsAssignedUids: string[],
        public readonly stockQuantity: number,
        public readonly internalCode: string,
        public readonly created: Date,
        public readonly lastUpdated: Date,
    ) {}

    static empty() {
        return new Product(
            '', // productId
            '', // name
            0, // upperPriceLimit
            0, // lowerPriceLimit
            '', // category
            '', // condition
            [], // photos
            [], // videos
            '', // description
            '', // brand
            '', // subcategory
            0, // agencyComission
            0, // shipping
            0, // views
            new Date(), // recallDate
            [], // agentsAssignedUids
            0, // stockQuantity
            '', // internalCode
            new Date(), // created
            new Date(), // lastUpdated
            );
    }
}
