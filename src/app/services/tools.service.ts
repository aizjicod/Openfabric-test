import { Injectable } from '@angular/core';
type toolType = {
  title: string,
  img: string,
  description: string,
  category: string,
  price: number
}
@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  tools = [
    {
      title: 'Graphite pencils',
      img: 'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FhClI1l-JCfcq0xbKhv8UzQ%252FCT06A%2Bok.jpg&width=910',
      description: ' Graphite pencils are best sharpened using a sharp craft knife rather than a pencil sharpener. They are graded from hard (H) to soft (B). 9H is the hardest whereas 9B is the softest, with F (for fine) and HB in the middle range. H pencils (2H, 3H, and 4K;',
      category: 'Art',
      price: 45,
      id: 1
    },
    {
      title: 'Graphite pencils',
      img: 'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FhClI1l-JCfcq0xbKhv8UzQ%252FCT06A%2Bok.jpg&width=910',
      description: ' Graphite pencils are best sharpened using a sharp craft knife rather than a pencil sharpener. They are graded from hard (H) to soft (B). 9H is the hardest whereas 9B is the softest, with F (for fine) and HB in the middle range. H pencils (2H, 3H, and 4K;',
      category: 'Art',
      price: 45,
      id: 2
    },
    {
      title: 'Graphite pencils',
      img: 'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FhClI1l-JCfcq0xbKhv8UzQ%252FCT06A%2Bok.jpg&width=910',
      description: ' Graphite pencils are best sharpened using a sharp craft knife rather than a pencil sharpener. They are graded from hard (H) to soft (B). 9H is the hardest whereas 9B is the softest, with F (for fine) and HB in the middle range. H pencils (2H, 3H, and 4K;',
      category: 'Art',
      price: 45,
      id: 3
    },
    {
      title: 'Graphite pencils',
      img: 'https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FhClI1l-JCfcq0xbKhv8UzQ%252FCT06A%2Bok.jpg&width=910',
      description: ' Graphite pencils are best sharpened using a sharp craft knife rather than a pencil sharpener. They are graded from hard (H) to soft (B). 9H is the hardest whereas 9B is the softest, with F (for fine) and HB in the middle range. H pencils (2H, 3H, and 4K;',
      category: 'Art',
      price: 45,
      id: 4
    }
  ];
  constructor() { }

  getItems() {
    return this.tools
  }

  getItem(id:number) {
    return this.tools[id]
  }

  addTool(tool: toolType) {
    this.tools.push({ ...tool, id: this.tools.length - 1 })
  }
}
