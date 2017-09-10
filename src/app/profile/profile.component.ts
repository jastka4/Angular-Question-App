import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../_services/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private _route: any;
  private username: number;
  profile: any = [];
  profiles: any = [];

  constructor(private profilesService: ProfilesService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.profiles = this.profilesService.profiles;
    this._route = this.route.params.subscribe(params => {
      this.username = params['username'];
      this.profile = this.profiles.filter((profile)=>{
        if(profile.username === this.username){
          return profile
        }
      });
      this.profile = this.profile[0];
    });
    console.log(this.profile)
  }

}