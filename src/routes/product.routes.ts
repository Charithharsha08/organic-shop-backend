import { Router } from "express"


const productRoutes: Router = Router();

 // handle incoming requests

productRoutes.get("/all",); // get all products
productRoutes.post("/save",); // save a new product

export default productRoutes;