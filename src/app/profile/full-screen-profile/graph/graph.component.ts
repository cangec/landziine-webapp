import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnInit {

  // Radar
  public radarChartLabels:string[] = ['Skil', 'Drinking', 'Sleeping', 'Designing', 'Coding'];

  public radarChartData:any = [
    {data: [120, 130, 100, 95, 120]}
  ];
  public radarChartType:string = 'radar';

  public radarColors:any = [
    { // purple
      backgroundColor: 'rgba(129, 142, 248,0.3)',
      borderColor: 'rgba(129, 142, 248,1)',
      pointBackgroundColor: 'rgba(129, 142, 248,0.3)',
      pointBorderColor: 'rgba(129, 142, 248,1)',
      pointHoverBackgroundColor: 'rgba(129, 142, 248,1)',
      pointHoverBorderColor: 'rgba(129, 142, 248,0.3)'
    }
  ];

  public graphOptions:any = {
    maintainAspectRatio:false,
    scale: {
      ticks: {
        display: false
      }
    }
  };

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
