import Product from "./product";

export default class ProductB extends Product {
  constructor(id: string, name: string, price: number) {
    super(id, name, price);
    this.validate();
    if (this.notification.hasErrors()) {
      throw new Error(this.notification.messages());
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price * 2;
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  changePrice(price: number): void {
    this._price = price;
    this.validate();
  }

  validate() {
    if (this.id.length === 0) {
      this.notification.addError({
        context: "product",
        message: "Id is required",
      });
    }

    if (this.name.length === 0) {
      this.notification.addError({
        context: "product",
        message: "Name is required",
      });
    }

    if (this.price <= 0) {
      this.notification.addError({
        context: "product",
        message: "Price must be greater than zero",
      });
    }
  }
}
