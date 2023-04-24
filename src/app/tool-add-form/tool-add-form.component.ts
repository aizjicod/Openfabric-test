import { Component } from '@angular/core';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-tool-add-form',
  templateUrl: './tool-add-form.component.html',
  styleUrls: ['./tool-add-form.component.css']
})
export class ToolAddFormComponent {
  tool = {
    title: 'dogo',
    img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: 'good dogo',
    category: 'shibu',
    price: 120
  }
  submitted = false
  constructor(
    private service: ToolsService
  ) { }

  newTool() {
    this.tool = {
      title: '',
      img: '',
      description: '',
      category: '',
      price: 0
    }
  }

  onSubmit() {
    this.service.addTool(this.tool)
    this.tool = {
      title: '',
      img: '',
      description: '',
      category: '',
      price: 0
    }
  }
}
