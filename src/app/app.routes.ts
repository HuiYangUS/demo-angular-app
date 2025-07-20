import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBinderComponent } from './data-binder/data-binder.component';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { AttributeDirectiveDemoComponent } from './attribute-directive-demo/attribute-directive-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { LoginComponent } from './login/login.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';

/**
 * <Route> is an object
 */
export const routes: Routes = [
    // { path: "", component: UserComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: MyHomeComponent },
    { path: "user", component: LoginComponent },
    { path: "profile", component: ProfileComponent },
    { path: "data-binding", component: DataBinderComponent },
    { path: "structural-directive", component: StructuralDirectiveDemoComponent },
    { path: "attribute-directive", component: AttributeDirectiveDemoComponent },
    { path: "pipes", component: PipeDemoComponent },
    { path: "simple-form", component: SimpleFormComponent },
    { path: "reactive-form", component: ReactiveFormComponent },
    /**
     * Wild card must be the last component
     */
    { path: "**", component: PageNotFoundComponent }
];
