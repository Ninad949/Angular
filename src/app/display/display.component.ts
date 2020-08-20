@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  database :IDatabase [];
  errorMessage: any;

 database2 : IDatabase[];


  constructor (private dbservice: DatabaseService) { }

  ngOnInit() {
    
  }

  getProduct(id: number) {
    this.dbservice.getProduct(id).subscribe({
      next: database => this.database2 ,
      error: err => this.errorMessage = err
    });
}
  

}
