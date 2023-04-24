import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ToolsService } from '../services/tools.service';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tool-information',
  templateUrl: './tool-information.component.html',
  styleUrls: ['./tool-information.component.css']
})
export class ToolInformationComponent implements OnInit {
  tool;
  icon;
  id: number = 1;

  constructor(public location: Location,
    public service: ToolsService,
    private route: ActivatedRoute,
    ) {
    this.location = location;
    this.icon = faLeftLong
    this.tool = this.service.getItem(1)
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tool = this.service.getItem(this.id)
  }
}
