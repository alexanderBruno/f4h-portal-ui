/**
 * @license
 * Copyright (C) 2020  Atos Spain SA. All rights reserved.
 *
 * Use of this source code is governed by a license style Apache License, Version 2.0 that can be
 * found in the LICENSE file at https://github.com/fair4health/f4h-portal-ui/blob/master/LICENSE
 *
 * The software is provided "AS IS", without any warranty of any kind, express or implied,
 * including but not limited to the warranties of merchantability, fitness for a particular
 * purpose and noninfringement, in no event shall the authors or copyright holders be
 * liable for any claim, damages or other liability, whether in action of contract, tort or
 * otherwise, arising from, out of or in connection with the software or the use or other
 * dealings in the software.
 *
 * See README file for the full disclaimer information and LICENSE file for full license
 * information in the project root.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../core/services/backend.service';
import { UserCommunicationService } from '../core/services/user-communication.service';
import { LocalStorageService } from '../core/services/local-storage.service';

import { UseCase } from '../shared/use-case';

@Component({
  selector: 'app-use-case-list',
  templateUrl: './use-case-list.component.html',
  styleUrls: ['./use-case-list.component.css']
})
export class UseCaseListComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['name', 'description', 'project_type', 'created_by', 'created_on', 'select'];

  constructor(
    private router: Router,
    private backendService: BackendService,
    private userCommunication: UserCommunicationService,
    private localStorage: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.getUseCaseList();
    this.localStorage.reset();
  }

  getUseCaseList(): void {
    this.backendService.getUseCaseList().subscribe(
      (usecaselist) => {
        console.log(usecaselist);
        this.dataSource = usecaselist;
      },
      (err) => {
        this.backendService.handleError('home', err);
        this.userCommunication.createMessage(this.userCommunication.ERROR, 'Get use case list operation failed');
      });
  }

  onCreateNewUseCase(): void {
    // TO DO
    this.userCommunication.createMessage(this.userCommunication.INFO, 'Not ready yet');
  }

  onUseCaseSelected(useCaseSelected: UseCase): void {
    console.log('Use case is selected ' + JSON.stringify(useCaseSelected));
    if (useCaseSelected.project_type === 'association') {
      console.log('Association use case selected!');
      this.localStorage.setProjectId(useCaseSelected.project_id);
      this.router.navigate(['/ucmenu']);
    } else if (useCaseSelected.project_type === 'prediction') {
      console.log('Prediction use case selected!');
      // TO DO prediction use case navigation
      this.userCommunication.createMessage(this.userCommunication.INFO, 'Prediction use case is not supported yet');
    } else {
      console.log('Project type does not match association nor prediction');
      this.userCommunication.createMessage(this.userCommunication.ERROR, 'Project type does not match association nor prediction');
    }
  }
}


