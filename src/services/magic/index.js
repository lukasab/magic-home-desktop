import { Discovery } from 'magic-home'

import config from '@/config'

export async function discoverDevices() {
  let discovery = new Discovery()

  try {
    let devices = await discovery.scan(config.discoveryTime)

    return devices
  } catch (e) {
    return []
  }
}
