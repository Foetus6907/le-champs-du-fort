import "jest";
import ProductUseCase from "../src/domain/useCase/ProductUseCase";
import InMemoryProductRepository from "../src/adapter/secondary/inMemory/InMemoryProductRepository";
import ProductRepository from "../src/port/ProductRepository";
import Product from "../src/domain/model/Product";

let productUseCase: ProductUseCase;

describe("ProductUseCase", () => {
  beforeAll(() => {
    const productRepository: ProductRepository =
      new InMemoryProductRepository();
    productUseCase = new ProductUseCase(productRepository);
  });
  it("it should get 1 product as intance of product", () => {
    const product = productUseCase.getProductByName("Courgette");
    expect(product instanceof Product).toBeTruthy();
  });
  it("it should get 1 product", () => {
    const product = productUseCase.getProductByName("Courgette");
    expect(product.UUID).toEqual("123-abc");
    expect(product.name).toEqual("Courgette");
    expect(product.unitPrice).toEqual(15);
    expect(product.kgPrice).toEqual(10);
    expect(product.imgUrl).toEqual(
      "src/adapter/primary/assets/img/logo_le_champ_du_fort_plusfonce_Plan de travail 1.png"
    );
    expect(product.description).toEqual("Belle courgette");
  });
});
