import { API } from 'homebridge';
const Noble = require('noble');
Noble.startScanning([], true);

import { PLATFORM_NAME } from './settings';
import { ExampleHomebridgePlatform } from './platform';

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, ExampleHomebridgePlatform);
};
