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
  id: string = '';

  constructor(public location: Location,
    service: ToolsService,
    private route: ActivatedRoute,
    ) {
    this.location = location;
    this.tool = service.getItem(1);
    this.icon = faLeftLong
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
}
