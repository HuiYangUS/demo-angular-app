import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { CommonModule } from '@angular/common';
import { TransformNamePipe } from '../pipes/transform-name.pipe';

@Component({
  selector: 'app-resource-api',
  imports: [CommonModule, TransformNamePipe],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss'
})
export class ResourceApiComponent implements OnInit {

  dataAPI: any;

  constructor(private resource: ResourceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // this.resource.getUsers().subscribe(result => {
    //   this.dataAPI = result
    // });
    // this.dataAPI = this.resource.rxResourceData;
    this.dataAPI = this.resource.resourceData;
  }

}
