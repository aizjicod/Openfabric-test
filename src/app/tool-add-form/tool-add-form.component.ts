import { Component } from '@angular/core';
import { ToolsService } from '../services/tools.service';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

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
  icon;
  error:Error;
  constructor(
    public location: Location,

    private service: ToolsService
  ) {
    this.location = location;
    this.icon = faLeftLong
  }

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
    try {
      this.service.addTool(this.tool).subscribe()
    } catch (error) {
      console.log('errorrr')
      console.log(error)
      this.error = error;
    }
  }
}
