// Define the target object
const product = {
  name: "Laptop",
  price: 20000,
  stock: 30
};

// Create a proxy to intercept operations
const handler = {
  get(target, property, receiver) {
    const value = Reflect.get(target, property, receiver);
    console.log(`Read operation: property ${property} : ${value}`);
    return value;
  },
  set(target, property, value, receiver) {
    const success = Reflect.set(target, property, value, receiver);
    if (success) {
      console.log(`Write operation: property "${property}" : ${value}`);
    } else {
      console.log(`Failed to set property "${property}"`);
    }
    return success;
  }
};

// Wrap product with Proxy
const proxyProduct = new Proxy(product, handler);

// Example operations
const name = proxyProduct.name;       // Logs read
const price = proxyProduct.price;     // Logs read
proxyProduct.price = 15000;           // Logs write
proxyProduct.name = "phone";          // Logs write
const name1 = proxyProduct.name;      // Logs read
const price1 = proxyProduct.price;    // Logs read
const stock = proxyProduct.stock;     // Logs read
