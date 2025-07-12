import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBinderComponent } from './data-binder/data-binder.component';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { AttributeDirectiveDemoComponent } from './attribute-directive-demo/attribute-directive-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { LoginComponent } from './login/login.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';

/**
 * <Route> is an object
 */
export const routes: Routes = [
    // { path: "", component: UserComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: MyHomeComponent },
    { path: "user", component: LoginComponent },
    { path: "data-binding", component: DataBinderComponent },
    { path: "structural-directive", component: StructuralDirectiveDemoComponent },
    { path: "attribute-directive", component: AttributeDirectiveDemoComponent },
    { path: "pipes", component: BuiltInPipesComponent },
    /**
     * Wild card must be the last component
     */
    { path: "**", component: PageNotFoundComponent }
];
