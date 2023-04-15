import { ProductModel } from "../model/dbmodels/product.model.js";
import { ProductSevice } from "../services/product.service.js";
import { convertProductToDto } from "../model/dtos/product.dto.js";

class CategoryController{

    static async getProduct (req, res){
        const categoria = req.params.categoria
        const user = req.user.nombre;
        if(categoria === "todo"){
            const response = await ProductSevice.getProducts();
            res.render("productos",{
                productos: response,
                user: user
            })
        }else if(categoria === "medias" || "pantalones" || "remeras" || "gorras"){
            const response = await ProductModel.find({categoria : {$eq:categoria}}).lean()
            const productos = convertProductToDto(response);
            res.render("productos",{
                productos,
                user: user
            })
        }
    }
}

export { CategoryController }