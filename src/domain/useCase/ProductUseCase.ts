import ProductRepository from "@/port/ProductRepository";

export default class ProductUseCase {
  private productRepository: ProductRepository;
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  getProductByName(name: string) {
    return this.productRepository.getProductByName(name);
  }
}
