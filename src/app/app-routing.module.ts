import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component'
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { WelcomeScreen2Component } from './welcome-screen2/welcome-screen2.component';
import { LoginComponent} from './login/login.component';
import { HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { Homepage3Component } from './homepage3/homepage3.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { ListingView2Component } from './listing-view2/listing-view2.component';
import { ListingView3Component } from './listing-view3/listing-view3.component';
import { ListingView6Component } from './listing-view6/listing-view6.component';
import { ListingView5Component } from './listing-view5/listing-view5.component';
import { ListingView7Component } from './listing-view7/listing-view7.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { ListingView8Component } from './listing-view8/listing-view8.component';
import { FriendsComponent } from './friends/friends.component';
import { MyContributionComponent } from './my-contribution/my-contribution.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FilterComponent } from './filter/filter.component';
import { RegisterationStepOneComponent } from './registeration-step-one/registeration-step-one.component';
import { CommentsComponent } from './comments/comments.component';
import { AddContributionComponent } from './add-contribution/add-contribution.component'
import { AuthGuard } from './security/auth.guard'
import { ShareArticleComponent } from './share-article/share-article.component';
import { CropImageComponent } from './crop-image/crop-image.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [// { path: 'home',      component: HomeComponent },
    // { path: 'admin',      component: AdminComponent },
    { path: '',   component: CategoryViewComponent,canActivate:[AuthGuard]},
    { path: 'welcome-screen', component: WelcomeScreenComponent },
    { path: 'welcome-screen2', component: WelcomeScreen2Component },
    { path: 'home',  component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registerationStepOne',component:RegisterationStepOneComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'otp', component: OtpComponent},
    { path: 'homepage', component: HomepageComponent,canActivate:[AuthGuard]},
    { path: 'homepage2', component: Homepage2Component,canActivate:[AuthGuard] },
    { path: 'homepage3', component: Homepage3Component,canActivate:[AuthGuard] },
    { path: 'article-details', component: ArticleDetailsComponent,canActivate:[AuthGuard] },
    { path: 'listing-view', component: ListingViewComponent,canActivate:[AuthGuard] },
    // { path: 'listing-view2', component: ListingView2Component },
    // { path: 'listing-view3', component: ListingView3Component },
    // { path: 'listing-view6', component: ListingView6Component },
    // { path: 'listing-view5', component: ListingView5Component },
    // { path: 'listing-view7', component: ListingView7Component },
    { path: 'category-view', component: CategoryViewComponent,canActivate:[AuthGuard] },
    // { path: 'listing-view8', component: ListingView8Component },
    { path: 'friends', component: FriendsComponent,canActivate:[AuthGuard] },
    { path: 'my-contribution', component: MyContributionComponent,canActivate:[AuthGuard] },
    { path: 'my-profile', component: MyProfileComponent,canActivate:[AuthGuard] },
    // { path: 'filter', component: FilterComponent },
    // { path: 'comments', component: CommentsComponent },
    { path: 'addContribution', component:AddContributionComponent,canActivate:[AuthGuard]},
    { path: 'shareArticle/:id', component:ShareArticleComponent},
    { path: 'crop-image',component:CropImageComponent,canActivate:[AuthGuard]},
    { path: 'Faq',component:FaqComponent},
    { path: 'notification',component:NotificationComponent,canActivate:[AuthGuard]},
    { path: 'registerationStepOne/:referralId',component:WelcomeScreen2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
