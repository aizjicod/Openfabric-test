import { Component, OnInit } from '@angular/core';
import { ToolsService, toolType } from '../services/tools.service';
import { ActivatedRoute } from '@angular/router';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';


@Component({
  selector: 'app-update-tool',
  templateUrl: './update-tool.component.html',
  styleUrls: ['./update-tool.component.css']
})
export class UpdateToolComponent implements OnInit{
  tool:toolType;
  fetched = false
  submitted = false
  icon;
  constructor(
    public location: Location,
    private service: ToolsService,
    private route: ActivatedRoute
  ) { 
    this.location = location;
    this.icon = faLeftLong
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getItem(id).subscribe(tool => {
      this.tool = tool
      this.fetched = true
    })
  }

  onSubmit() {
    const req = this.service.updateTool(this.tool).subscribe()
    if(req) this.submitted = true
  }
}
