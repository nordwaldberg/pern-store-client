import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._productItems = [];
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._countOfSuitableProducts = 0;
        this._limit = 9;

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setProductItems(productItems) {
        this._productItems = productItems;
    }

    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this.setPage(1);
        this._selectedBrand = brand;
    }

    setPage(page) {
        this._page = page;
    }

    setCountOfSuitableProducts(count) {
        this._countOfSuitableProducts = count;
    }

    setLimit(limit) {
        this._limit = limit;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get productItems() {
        return this._productItems;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get page() {
        return this._page;
    }

    get countOfSuitableProducts() {
        return this._countOfSuitableProducts;
    }

    get limit() {
        return this._limit;
    }

}