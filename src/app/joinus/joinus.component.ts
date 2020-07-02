import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $('.owl-carousel').owlCarousel(
        {
          autoplay: true ,
          dots : false,
          autoplayTimeout : 1000,
          autoplaySpeed : 500,
          video : true ,
          animateOut :true ,
          loop : true ,
          margin : 20,
          autoWidth : true ,
          merge : true ,
          videoWidth : true


        }
      );
  
    }); 
  }


    
}
