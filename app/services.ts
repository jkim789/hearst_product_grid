export const getProducts = () => {
  // hardcoded to return example data 
  return {
    products: [
      {'product_id': 1, 'url': '/product/1', 'title': 'Product A', 'image': 'https://picsum.photos/200'},
      {'product_id': 2, 'url': '/product/2', 'title': 'Gizmo B', 'image': 'https://picsum.photos/200'},
      {'product_id': 3, 'url': '/product/3', 'title': 'Widget C', 'image': 'https://picsum.photos/200'},
      {'product_id': 5, 'url': '/product/5', 'title': 'Subscription E', 'image': 'https://picsum.photos/200'},
      {'product_id': 4, 'url': '/product/4', 'title': 'Magazine D', 'image': 'https://picsum.photos/200'},
      {'product_id': 6, 'url': '/product/6', 'title': 'Ticket F', 'image': 'https://picsum.photos/200'},
      {'product_id': 7, 'url': '/product/7', 'title': 'Video G', 'image': 'https://picsum.photos/200'}
    ]
  }
}

export const getContents = () => {
  //hardcoded to return example
  return {
    data: [
      {'type': 'html', 'contents': '<p>Free shipping on orders over $50</p>', 'position': 'row-3'},
      {'type': 'html', 'contents': '<p>Example banner HTML text</p>', 'position': 'row-1'},
      {'type': 'html', 'contents': '<p>Some other content</p>', 'position': 'cell-3'},
      {'type': 'html', 'contents': '<p>Content in product cell</p>', 'position': 'cell-5'}
    ]
  }
}