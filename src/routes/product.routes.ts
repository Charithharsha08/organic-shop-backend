import { Router } from "express"
import {
    deleteProduct,
    getAllProducts,
    getProductById,
    saveProduct,
    updateProduct
} from "../controllers/product.controller";


const productRoutes: Router = Router();

 // handle incoming requests

productRoutes.get("/all",getAllProducts); // get all products
productRoutes.get("/:id",getProductById); // get a product
productRoutes.post("/save",saveProduct); // save a new product
productRoutes.put("/update/:id",updateProduct); // update a product
productRoutes.delete("/delete/:id",deleteProduct); // delete a product


export default productRoutes;