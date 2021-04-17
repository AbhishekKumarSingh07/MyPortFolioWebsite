import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute,RouterOutlet,RouterModule} from '@angular/router';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal'
import * as AOS from 'aos';
import Typed from 'typed.js'
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
  modalRef:BsModalRef;
  constructor(private modalService:BsModalService) { }

  ngOnInit(): void {
    AOS.init({
      duration:1000
    });
    const options = {
      strings: ['Software Developer', 'Web Developer', 'ML and AI Enthusiast','Part Time Cricketer'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };
 
 const typed = new Typed('.typed-element', options);
  }

  public openModal(template:TemplateRef<any>){
    this.modalRef=this.modalService.show(template)
  }


}
