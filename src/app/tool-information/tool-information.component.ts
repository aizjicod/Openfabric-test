import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ToolsService } from '../services/tools.service';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
// fa-arrow-left-long
@Component({
  selector: 'app-tool-information',
  templateUrl: './tool-information.component.html',
  styleUrls: ['./tool-information.component.css']
})
export class ToolInformationComponent {
  location: Location;
  tool;
  icon;
  constructor(location: Location, service: ToolsService) {
    this.location = location;
    this.tool = service.getItem();
    this.icon = faLeftLong
  }
}
