import CreateProductUseCase from "./create.product.usecase";

const inputA = {
  type: "a",
  name: "Product",
  price: 123,
};

const inputB = {
  type: "b",
  name: "Product",
  price: 10,
};

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test create product use case", () => {
  it("should create a product of type A", async () => {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    const output = await productCreateUseCase.execute(inputA);

    expect(output).toEqual({
      id: expect.any(String),
      name: inputA.name,
      price: inputA.price,
    });
  });

  it("should create a product of type B", async () => {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    const output = await productCreateUseCase.execute(inputB);

    expect(output).toEqual({
      id: expect.any(String),
      name: inputB.name,
      price: inputB.price * 2,
    });
  });
});
