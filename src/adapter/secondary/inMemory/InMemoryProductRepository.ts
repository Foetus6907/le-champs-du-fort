import ProductRepository from "@/port/ProductRepository";
import Product from "../../../domain/model/Product";

export default class InMemoryProductRepository implements ProductRepository {
  products = [
    new Product(
      "123-abc",
      "Courgette",
      15,
      10,
      "src/adapter/primary/assets/img/logo_le_champ_du_fort_plusfonce_Plan de travail 1.png",
      "Belle courgette"
    ),
  ];

  getProductByName(name: string): Product {
    return (
      this.products.find((p) => p.name === name) ??
      new Product("", "", -1, -1, "", "")
    );
  }
}
