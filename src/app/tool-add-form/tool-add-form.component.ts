import { Component } from '@angular/core';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-tool-add-form',
  templateUrl: './tool-add-form.component.html',
  styleUrls: ['./tool-add-form.component.css']
})
export class ToolAddFormComponent {
  tool = {
    name: '',
    image: '',
    description: '',
    category: '',
    price: 0
  }
  submitted = false
  constructor(
    private service: ToolsService
  ) { }

  newTool() {
    this.tool = {
      name: '',
      image: '',
      description: '',
      category: '',
      price: 0
    }
  }

  onSubmit() {
    this.service.addTool(this.tool)
    this.tool = {
      name: '',
      image: '',
      description: '',
      category: '',
      price: 0
    }
  }
}
