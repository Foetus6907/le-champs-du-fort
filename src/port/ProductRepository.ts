import Product from "@/domain/model/Product";

export default interface ProductRepository {
  getProductByName(name: string): Product;
}
