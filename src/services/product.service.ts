import {Product} from "../model/product.model";
import {productList} from "../db/db";
import e from "express";

export const getAllProducts = (): Product[] => {
    return productList;
}

export const saveProduct = (product: Product): Product => {
    productList.push(product);
    return product;
}

export const getProductById = (id: number): Product | undefined => {
   return productList.find(product => product.id === id);
}

export const updateProduct = (id: number, data: Product): Product | null => {
    const product = productList.find(product => data.id === id);
    if (!product) {
        return null;
    }
    Object.assign(product, data);
    return product;
}
export const deleteProduct = (id: number): boolean | null => {
    const index = productList.findIndex(product => product.id === id);
    if (index === -1){
        return false;
    }
    productList.splice(index, 1);
    return true;
}
export const validateProduct = (product: Product) => {
    if(!product.id||!product.name || !product.price || !product.currency || !product.image) {
        return "All fields are required";
    }
    return null;
}