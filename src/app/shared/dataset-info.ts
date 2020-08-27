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

import { ElegibilityCriteria } from './elegibility-criteria';
import { FeatureSetInfo } from './feature-set-info';
import { DatasetSource } from './dataset-source';

export class DatasetInfo {
    dataset_id: string;
    project_id: string;
    featureset: FeatureSetInfo;
    name: string;
    description: string;
    eligibility_criteria: ElegibilityCriteria;
    dataset_sources: DatasetSource[];
    execution_state: string;
    created_by: string;
    created_on: string;
}
