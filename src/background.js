'use strict'

import { app, protocol, BrowserWindow, Tray, globalShortcut, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import Positioner from 'electron-positioner'

const isDevelopment = process.env.NODE_ENV !== 'production'
const windowSizes = {
  win32: {
    height: 583,
    width: 420,
  },
  darwin: {
    height: 568,
    width: 400,
  },
}

let window = null
let tray = null

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  window = new BrowserWindow({
    height: windowSizes[process.platform].height,
    width: windowSizes[process.platform].width,
    frame: false,
    resizable: false,
    transparent: true,
    skipTaskbar: false,
    show: true,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await window.loadURL(process.env.WEBPACK_DEV_SERVER_URL)

    if (!process.env.IS_TEST) window.webContents.openDevTools()
  } else {
    createProtocol('app')

    window.loadURL('app://./index.html')
  }

  if (!isDevelopment) {
    const positioner = new Positioner(window)

    if (process.platform == 'win32') {
      let position = positioner.calculate('trayBottomCenter', tray.getBounds())

      window.setPosition(position.x, position.y - 10)
    } else if (process.platform == 'darwin') {
      let position = positioner.calculate('trayCenter', tray.getBounds())

      window.setPosition(position.x, position.y + 10)
    }
  }

  /*
  * Workaround for window flickering on Windows 10
  * TODO test on mac
  */
  window.on('hide', () => {
    if (!isDevelopment) window.setOpacity(0)
  })

  window.on('closed', () => {
    window = null
  })

  window.on('blur', () => {
    if (!isDevelopment) window.hide()
  })
}

function createTray() {
  tray = new Tray('src/assets/icons/icon.ico')

  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: 'Quit', 
      type: 'normal',
      role: 'quit'
    }
  ]))
  tray.setToolTip('Magic Control')

  tray.on('click', () => { toggleWindow() })
  tray.on('double-click', () => { toggleWindow() })
}

function toggleWindow() {
  if (window.isVisible()) {
    window.hide()
  } else {
    if (process.platform == 'win32') {
      const windowsTrayManager = require('tray-window-state-manager')

      windowsTrayManager.hidePopup()
    }

    window.show()
    window.focus()

    /*
    * Workaround for window flickering on Windows 10
    * TODO test on mac
    */
    setTimeout(() => {
      window.setOpacity(1);
    }, 100);
  }
}

app.on('ready', async () => {
  if (!isDevelopment) createTray()

  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  createWindow()
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

app.on('window-all-closed', () => {
  app.quit()
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
