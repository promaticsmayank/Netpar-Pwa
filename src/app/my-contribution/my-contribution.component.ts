import { Component, OnInit, ElementRef } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AllPostsService} from '../providers/allPost.service';
import {AppProvider} from '../providers/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-contribution',
  templateUrl: './my-contribution.component.html',
  styleUrls: ['./my-contribution.component.css'],
  providers:[AllPostsService]
})
export class MyContributionComponent implements OnInit {

  private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    count:number=1;
    userInfo=JSON.parse(localStorage['userInfo']);
    userId;
    savedPosts;
    constructor(private router:Router,private appProvider:AppProvider,private allPostsService:AllPostsService,location: Location,  private element: ElementRef) {
      	this.location = location;
        this.sidebarVisible = false;
        this.userId=this.userInfo._id;
    }
  	ngOnInit() {
  		//this.listTitles = ROUTES.filter(listTitle => listTitle);
  		const navbar: HTMLElement = this.element.nativeElement;
  		this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
      this.getSavedPost();
  	}

  	navRemove(){
  		/*alert('home')*/
  		if (localStorage['menuOpen']=='true') {

	  		const body = document.getElementsByTagName('body')[0];
	        this.toggleButton.classList.remove('toggled');
	        this.sidebarVisible = false;
	        body.classList.remove('nav-open');
  			//localStorage['menuOpen']=='false'
  		}
  		
  	}

    getSavedPost(){
      this.allPostsService.getSavedPosts(this.userId).subscribe(data=>{
        if (data.success==true) {
          this.savedPosts=data.saved_articles;
        }
      },err=>{

      })
    }

  colorClass(i){
    if (i%7==0) {
      return "color-red";
    }
    else if (i%7==1) {
      return "color-orange";
    }
    else if (i%7==2) {
      return "color-yellow";
    }
     else if (i%7==3) {
      return "color-blue";
    }
     else if (i%7==4) {
      return "color-green";
    }
     else if (i%7==5) {
      return "color-purple";
    }
     else if (i%7==6) {
      return "color-pink";
    }
  }

  onSaved(articleData){
    this.appProvider.current.articleDetails=articleData;
    this.router.navigate(["/article-details"],{skipLocationChange:true});
  }

}
