/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

import { Property } from 'gateway-addon';
import { ShellyDevice } from './shelly-device';

export class HumidityProperty extends Property {
    constructor(device: ShellyDevice, name: string, title: string) {
        super(device, name, {
            '@type': 'HumidityProperty',
            type: 'number',
            unit: 'percent',
            minimum: 0,
            maximum: 100,
            multipleOf: 0.1,
            title,
            readOnly: true
        });
    }
}
