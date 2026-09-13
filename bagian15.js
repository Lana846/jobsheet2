const categories = [
  {
    name: "Electronics",
    children: [
      { name: "Laptop", children: [] },
      { name: "Phone", children: [] }
    ]
  },
  {
    name: "Groceries",
    children: [
      { 
        name: "Dairy", 
        children: [
          { name: "Milk", children: [] },
          { name: "Cheese", children: [] }
        ] 
      }
    ]
  }
];

function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log("  ".repeat(depth) + "- " + category.name);
    if (category.children && category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

printCategories(categories);
