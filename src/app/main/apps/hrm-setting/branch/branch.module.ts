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

import { UserEditService } from "app/main/apps/user/user-edit/user-edit.service";

import { UserListService } from "app/main/apps/user/user-list/user-list.service";

import { UserViewService } from "app/main/apps/user/user-view/user-view.service";
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { BranchEditComponent } from "./branch-edit/branch-edit.component";
import { NewBranchSidebarComponent } from "./branch-list/new-branch-sidebar/new-branch-sidebar.component";
import { BranchListComponent } from "./branch-list/branch-list.component";
import { BranchListService } from "./branch-list/branch-list.service";
import { BranchViewComponent } from "./branch-view/branch-view.component";
import { BranchViewService } from "./branch-view/branch-view.service";
import { BranchEditService } from "./branch-edit/branch-edit.service";

// routing
const routes: Routes = [
  {
    path: "branch/branch-list",
    component: BranchListComponent,
    resolve: {
      bls: BranchListService,
    },
    data: { animation: "BranchListComponent" },
  },
  {
    path: "branch/branch-view/:id",
    component: BranchViewComponent,
    resolve: {
      data: BranchViewService,
    },
    data: { path: "view/:id", animation: "BranchViewComponent" },
  },
  {
    path: "branch/branch-edit/:id",
    component: BranchEditComponent,
    resolve: {
      ues: BranchEditService,
    },
    data: { animation: "BranchEditComponent" },
  },
  {
    path: "branch/branch-view",
    redirectTo: "/apps/branch/branch-view/1", // Redirection to default branch view
  },
  {
    path: "branch/branch-edit",
    redirectTo: "/apps/branch/branch-edit/1", // Redirection to default branch edit
  },
];

@NgModule({
  declarations: [
    BranchEditComponent,
    BranchListComponent,
    BranchViewComponent,
    NewBranchSidebarComponent,
  ],
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
  providers: [BranchListService, BranchViewService, BranchEditService],
})
export class BranchModule {}
