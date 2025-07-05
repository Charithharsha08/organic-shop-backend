import { Request, Response } from "express";
import * as productService from "../services/product.service";

// controller functions to handle get all products request

export const getAllProducts = (req : Request, res: Response) => {
  const products =  productService.getAllProducts();
  try{
          res.status(200).json(products);
  }
  catch (error) {
      console.log(error);
      res.status(500).json({error: "Something went wrong !! "});
  }

}

export const saveProduct = (req : Request, res: Response) => {
    try {
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct);
        if(validationError) {
            res.status(400).json({error: validationError});
            return;
        }
           const saveProduct = productService.saveProduct(newProduct);
            res.status(201).json(saveProduct);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong !! "});
    }

}

export const getProductById =(req : Request, res: Response) => {
    try {
      const product =  productService.getProductById(parseInt(req.params.id));
      if(!product) {
          res.status(404).json({error: "Product not found"});
          return;
      }
      res.status(200).json(product);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong !! "});
    }
}

export const updateProduct = (req : Request, res: Response) => {
    try {
        const product = req.body;
        const validationError = productService.validateProduct(product);

        if(validationError) {
            res.status(400).json({error: validationError});
            return;
        }
       const updatedProduct = productService.updateProduct(parseInt(req.params.id), req.body);
        res.status(200).json(updatedProduct);
    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong !! "});
    }
}

export const deleteProduct = (req : Request, res: Response) => {

    try {
      const deletedProduct = productService.deleteProduct(parseInt(req.params.id));
      if(!deletedProduct) {
          res.status(404).json({error: "Product not found"});
          return;
      }
      res.status(200).json(deletedProduct);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong !! "});
    }
}
