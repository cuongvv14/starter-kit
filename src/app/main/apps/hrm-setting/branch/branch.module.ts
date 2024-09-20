import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { CoreCommonModule } from "@core/common.module";
import { CoreDirectivesModule } from "@core/directives/directives";
import { CorePipesModule } from "@core/pipes/pipes.module";
import { CoreSidebarModule } from "@core/components";

// import { InvoiceListService } from 'app/main/apps/invoice/invoice-list/invoice-list.service';
// import { InvoiceModule } from 'app/main/apps/invoice/invoice.module';

import { UserEditComponent } from "app/main/apps/user/user-edit/user-edit.component";
import { UserEditService } from "app/main/apps/user/user-edit/user-edit.service";

import { UserListComponent } from "app/main/apps/user/user-list/user-list.component";
import { UserListService } from "app/main/apps/user/user-list/user-list.service";

import { UserViewComponent } from "app/main/apps/user/user-view/user-view.component";
import { UserViewService } from "app/main/apps/user/user-view/user-view.service";
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { BranchEditComponent } from "./branch-edit/branch-edit.component";
import { NewBranchSidebarComponent } from "./branch-list/new-branch-sidebar/new-branch-sidebar.component";
import { BranchListComponent } from "./branch-list/branch-list.component";

// routing
const routes: Routes = [
  {
    path: "user-list",
    component: UserListComponent,
    resolve: {
      uls: UserListService,
    },
    data: { animation: "UserListComponent" },
  },
  {
    path: "user-view/:id",
    component: UserViewComponent,
    resolve: {
      data: UserViewService,
      // InvoiceListService,
    },
    data: { path: "view/:id", animation: "UserViewComponent" },
  },
  {
    path: "branch-edit/:id",
    component: BranchEditComponent,
    resolve: {
      ues: BranchEditComponent,
    },
    data: { animation: "BranchEditComponent" },
  },
  {
    path: "user-view",
    redirectTo: "/apps/user/user-view/2", // Redirection
  },
  {
    path: "user-edit",
    redirectTo: "/apps/user/user-edit/2", // Redirection
  },
];

@NgModule({
  declarations: [NewBranchSidebarComponent, BranchListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    NgSelectModule,
    CommonModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    CorePipesModule,
    CoreDirectivesModule,
    // InvoiceModule,
    CoreSidebarModule,
  ],
  providers: [UserListService, UserViewService, UserEditService],
})
export class BranchModule {}
