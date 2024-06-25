import {Product} from "../../../product";
import {
    validateInternalCode,
    validateProductName,
    validateProductPrice,
    validateStockQuantity
} from "./validators";


export class ProductClientModel extends Product {
    static kProductId = "productId";
    static kName = "name";
    static kUpperSalePriceLimit = "upperSalePriceLimit";
    static kLowerSalePriceLimit = "lowerSalePriceLimit";
    static kCategory = "category";
    static kCondition = "condition";
    static kPhotos = "photos";
    static kVideos = "videos";
    static kDescription = "description";
    static kBrand = "brand";
    static kSubcategory = "subcategory";
    static kAgencyComission = "agencyComission";
    static kShipping = "shipping";
    static kViews = "views";
    static kRecallDate = "recallDate";
    static kAgentsAssignedUids = "agentsAssignedUids";
    static kStockQuantity = "stockQuantity";
    static kInternalCode = "internalCode";
    static kCreatedMillisecondsSinceEpoch = "createdMillisecondsSinceEpoch";
    static kLastUpdatedMillisecondsSinceEpoch = "createdMillisecondsSinceEpoch";

    static fromEntity (product: Product): ProductClientModel {
        return Object.assign(ProductClientModel.empty(), product);
    }

    static empty() {
        return new ProductClientModel(
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
            [], // agentAssignedUids
            0, // stockQuantity
            '', // internalCode
            new Date(), // created
            new Date(), // lastUpdated
            );
    }

    private static _validate(body: any) {
        validateProductName(body[ProductClientModel.kName]);
        validateProductPrice(body[ProductClientModel.kUpperSalePriceLimit]);
        validateStockQuantity(body[ProductClientModel.kStockQuantity]);
        validateInternalCode(body[ProductClientModel.kInternalCode]);
    }

    static validate (body: any) : ProductClientModel {
        this._validate(body);
        return new ProductClientModel(
            null,
            body[ProductClientModel.kName],
            body[ProductClientModel.kUpperSalePriceLimit],
            body[ProductClientModel.kLowerSalePriceLimit],
            body[ProductClientModel.kCategory],
            body[ProductClientModel.kCondition],
            body[ProductClientModel.kPhotos],
            body[ProductClientModel.kVideos],
            body[ProductClientModel.kDescription],
            body[ProductClientModel.kBrand],
            body[ProductClientModel.kSubcategory],
            body[ProductClientModel.kAgencyComission],
            body[ProductClientModel.kShipping],
            body[ProductClientModel.kViews],
            body[ProductClientModel.kRecallDate],
            body[ProductClientModel.kAgentsAssignedUids],
            body[ProductClientModel.kStockQuantity],
            body[ProductClientModel.kInternalCode],
            body[ProductClientModel.kCreatedMillisecondsSinceEpoch],
            body[ProductClientModel.kLastUpdatedMillisecondsSinceEpoch],
        );
    }

    toBodyFullProduct() {
        return {
            ...this.toBodyPublicProduct(),
            [ProductClientModel.kStockQuantity]: this.stockQuantity,
            [ProductClientModel.kCategory]: this.category,
            [ProductClientModel.kCondition]: this.condition,
            [ProductClientModel.kPhotos]: this.photos,
            [ProductClientModel.kVideos]: this.videos,
            [ProductClientModel.kDescription]: this.description,
            [ProductClientModel.kBrand]: this.brand,
            [ProductClientModel.kSubcategory]: this.subCategory,
            [ProductClientModel.kAgencyComission]: this.agencyCommission,
            [ProductClientModel.kShipping]: this.shipping,
            [ProductClientModel.kViews]: this.views,
            [ProductClientModel.kRecallDate]: this.recallDate,
            [ProductClientModel.kAgentsAssignedUids]: this.agentsAssignedUids,
            [ProductClientModel.kStockQuantity]: this.stockQuantity,
            [ProductClientModel.kInternalCode]: this.internalCode,
            [ProductClientModel.kCreatedMillisecondsSinceEpoch]: this.created.getTime(),
            [ProductClientModel.kLastUpdatedMillisecondsSinceEpoch]: this.lastUpdated.getTime(),
        }
    }
    toBodyPublicProduct() {
        return {
            [ProductClientModel.kProductId]: this.productId,
            [ProductClientModel.kName]: this.name,
            [ProductClientModel.kUpperSalePriceLimit]: this.upperSalePriceLimit,
            [ProductClientModel.kLowerSalePriceLimit]: this.lowerSalePriceLimit,
            [ProductClientModel.kCondition]: this.condition,
        }
    }
}
