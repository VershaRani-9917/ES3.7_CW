// Template Literal
// A function to  concatenate strings

const createMessage = (item, quantity) => {
  return `You have ${quantity} ${item}${quantity > 1 ? "s" : ""}`;
};
console.log(createMessage("Apple", 3));
console.log(createMessage("Guava", 1));

// Function to create a URL
const genarateURL = (endpoint, params) => {
  return `https:api.example.com/${endpoint}?${params}`;
};
console.log(genarateURL("users", "page=1&limit=10"));
