import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dezign-nest';
  constructor()
  {

  }
  ngOnInit()
  {
   console.log("On in it");
  }
  uploadPlan():void
  {
     console.log("call the service and upload the plan");
  }

}
