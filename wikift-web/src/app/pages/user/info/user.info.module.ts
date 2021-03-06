/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ArchwizardModule } from 'ng2-archwizard';
import { ModalModule } from 'ngx-bootstrap/modal';

import { UserInfoComponent } from './user.info.component';
import { ArticleService } from '../../../../services/article.service';

const USER_INFO_ROUTES: Routes = [
    { path: '', component: UserInfoComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ArchwizardModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        RouterModule.forChild(USER_INFO_ROUTES)
    ],
    exports: [],
    declarations: [UserInfoComponent],
    providers: [
        ArticleService
    ],
})
export class UserInfoModule { }
