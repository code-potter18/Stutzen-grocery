const products = [
  // Fruits (10 items — first 7 have images)
  { id: 1, name: "Banana", category: "Fruits", price: 40, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"},
  { id: 2, name: "Apple", category: "Fruits", price: 100, image: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlfGVufDB8fDB8fHww"},
  { id: 3, name: "Orange", category: "Fruits", price: 60, image: "https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzfGVufDB8fDB8fHww"},
  { id: 4, name: "Mango", category: "Fruits", price: 120, image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"},
  { id: 5, name: "Grapes", category: "Fruits", price: 90, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=crop&h=200&w=200" },
  { id: 6, name: "Pineapple", category: "Fruits", price: 80, image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"},
  { id: 7, name: "Papaya", category: "Fruits", price: 50, image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { id: 8, name: "Watermelon", category: "Fruits", price: 70, image: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 9, name: "Strawberry", category: "Fruits", price: 150, image: "" }, // no image
  { id: 10, name: "Kiwi", category: "Fruits", price: 90, image: "" }, // no image

  // Dairy (10 items — first 7 have images)
  { id: 11, name: "Milk", category: "Dairy", price: 50, image: "https://plus.unsplash.com/premium_photo-1664647903833-318dce8f3239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpcnl8ZW58MHx8MHx8fDA%3D" },
  { id: 12, name: "Cheese", category: "Dairy", price: 150, image: "https://plus.unsplash.com/premium_photo-1691939610797-aba18030c15f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlfGVufDB8fDB8fHww" },
  { id: 13, name: "Butter", category: "Dairy", price: 120, image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhaXJ5fGVufDB8fDB8fHww" },
  { id: 14, name: "Yogurt", category: "Dairy", price: 60, image: "https://media.istockphoto.com/id/1215709425/photo/traditional-indian-cheese-paneer-vegetarian-homemade-soft-cheese-in-cheesecloth-on-dark.webp?a=1&b=1&s=612x612&w=0&k=20&c=pcHl41NCo5dkusO_wNON_jPbXlRtcwZqYeEUAJRcg38=" },
  { id: 15, name: "Paneer", category: "Dairy", price: 200, image: "https://media.istockphoto.com/id/1226425133/photo/various-kinds-of-dairy-products-on-a-dark-bluish-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=t7YOjQuYOhMzibtbHxtbpLxuYq4DkZgENelUv7HAIsc=" },
  { id: 16, name: "Cream", category: "Dairy", price: 100, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 17, name: "Curd", category: "Dairy", price: 40, image: "https://plus.unsplash.com/premium_photo-1691939610599-a9a3dde8e810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D" },
  { id: 18, name: "Ice Cream", category: "Dairy", price: 80, image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D" },
  { id: 19, name: "Ghee", category: "Dairy", price: 250, image: "https://images.unsplash.com/photo-1630253775921-9b79ecf5a565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VsYXRvfGVufDB8fDB8fHww" },
  { id: 20, name: "Milk Powder", category: "Dairy", price: 300, image: "https://images.unsplash.com/photo-1650553448920-9432f8086905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29yYmV0fGVufDB8fDB8fHww" },

  // Bakery (10 items — first 7 have images)
  { id: 21, name: "Bread", category: "Bakery", price: 40, image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWR8ZW58MHx8MHx8fDA%3D" },
  { id: 22, name: "Cake", category: "Bakery", price: 250, image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 23, name: "Donut", category: "Bakery", price: 50, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 24, name: "Croissant", category: "Bakery", price: 70, image: "https://plus.unsplash.com/premium_photo-1661743823829-326b78143b30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvaXNzYW50fGVufDB8fDB8fHww" },
  { id: 25, name: "Muffin", category: "Bakery", price: 60, image: "https://plus.unsplash.com/premium_photo-1677686707023-9ac1e4f75a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFndWV0dGV8ZW58MHx8MHx8fDA%3D" },
  { id: 26, name: "Bagel", category: "Bakery", price: 50, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsYWR8ZW58MHx8MHx8fDA%3D" },
  { id: 27, name: "Bun", category: "Bakery", price: 30, image: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvdXB8ZW58MHx8MHx8fDA%3D" },
  { id: 28, name: "Brownie", category: "Bakery", price: 80, image: "https://images.unsplash.com/photo-1709201759685-459d11d53d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyb3RofGVufDB8fDB8fHww" },
  { id: 29, name: "Pie", category: "Bakery", price: 100, image: "" }, // no image
  { id: 30, name: "Cookies", category: "Bakery", price: 40, image: "" }, // no image

  // Vegtables (10 items — first 7 have images)
  { id: 21, name: "Bread", category: "Vegtables", price: 40, image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWR8ZW58MHx8MHx8fDA%3D" },
  { id: 22, name: "Cake", category: "Vegtables", price: 250, image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 23, name: "Donut", category: "Vegtables", price: 50, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 24, name: "Croissant", category: "Vegtables", price: 70, image: "https://plus.unsplash.com/premium_photo-1661743823829-326b78143b30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvaXNzYW50fGVufDB8fDB8fHww" },
  { id: 25, name: "Muffin", category: "Vegtables", price: 60, image: "https://plus.unsplash.com/premium_photo-1677686707023-9ac1e4f75a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFndWV0dGV8ZW58MHx8MHx8fDA%3D" },
  { id: 26, name: "Bagel", category: "Vegtables", price: 50, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsYWR8ZW58MHx8MHx8fDA%3D" },
  { id: 27, name: "Bun", category: "Vegtables", price: 30, image: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvdXB8ZW58MHx8MHx8fDA%3D" },
  { id: 28, name: "Brownie", category: "Vegtables", price: 80, image: "https://images.unsplash.com/photo-1709201759685-459d11d53d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyb3RofGVufDB8fDB8fHww" },
  { id: 29, name: "Pie", category: "Vegtables", price: 100, image: "" }, // no image
  { id: 30, name: "Cookies", category: "Vegtables", price: 40, image: "" }, // no image
];

export default products;

