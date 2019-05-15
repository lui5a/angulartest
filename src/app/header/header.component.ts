import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  clickAddModal(){
    const modal = this.modalService.open(SignInFormComponent);
    modal.result.then(
      this.handleModalFormClose.bind(this),
      this.handleModalFormClose.bind(this)

    )
  }


  handleModalFormClose(){
  }

}
