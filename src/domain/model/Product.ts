export default class Product {
  private readonly _UUID: string;
  private readonly _name: string;
  private readonly _unitPrice: number;
  private readonly _kgPrice: number;
  private readonly _imgUrl: string;
  private readonly _description: string;

  constructor(
    UUID: string,
    name: string,
    unitePrice: number,
    kgPrice: number,
    imgUrl: string,
    description: string
  ) {
    this._name = name;
    this._unitPrice = unitePrice;
    this._kgPrice = kgPrice;
    this._imgUrl = imgUrl;
    this._description = description;
    this._UUID = UUID;
  }

  get name(): string {
    return this._name;
  }

  get unitPrice(): number {
    return this._unitPrice;
  }

  get kgPrice(): number {
    return this._kgPrice;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  get description(): string {
    return this._description;
  }

  get UUID(): string {
    return this._UUID;
  }
}
