import { ErrorReport } from './types';

export function getDummyData() {
  const errorReports: ErrorReport[] = [
    {
      name: '00ef11ed18',
      creation: '2022-08-22 13:25:38',
      error_name: 'TypeError',
      message: "Cannot read properties of undefined (reading 'length')",
      stack:
        "TypeError: Cannot read properties of undefined (reading 'length')\n    at app://./js/index.87c353a6.js:1:201059\n    at r (app://./js/chunk-vendors.ae1f6522.js:344:74536)\n    at St (app://./js/chunk-vendors.ae1f6522.js:344:91662)\n    at Proxy.r (app://./js/index.87c353a6.js:1:386775)\n    at ne (app://./js/chunk-vendors.ae1f6522.js:344:74838)\n    at j.u [as fn] (app://./js/chunk-vendors.ae1f6522.js:344:110321)\n    at j.run (app://./js/chunk-vendors.ae1f6522.js:344:23429)\n    at V.e.update (app://./js/chunk-vendors.ae1f6522.js:344:111051)\n    at p (app://./js/chunk-vendors.ae1f6522.js:344:71004)\n    at q (app://./js/chunk-vendors.ae1f6522.js:344:72624)",
      count: 66,
    },
    {
      name: '1e6dfd9541',
      creation: '2022-04-24 08:12:53',
      error_name: 'Error',
      message:
        "delete from `Account` where `name` = 'Current Assets' - SQLITE_CONSTRAINT_TRIGGER: FOREIGN KEY constraint failed",
      stack:
        "Error: delete from `Account` where `name` = 'Current Assets' - SQLITE_CONSTRAINT_TRIGGER: FOREIGN KEY constraint failed",
      count: 7,
    },
    {
      name: '066deaf4bd',
      creation: '2022-08-23 17:58:34',
      error_name: 'Updation Error',
      message:
        "ENOENT: no such file or directory, open '/opt/Frappe Books/resources/app-update.yml'",
      stack:
        "Error: ENOENT: no such file or directory, open '/opt/Frappe Books/resources/app-update.yml'",
      count: 83,
    },
    {
      name: '0103156fc0',
      creation: '2022-08-24 02:15:34',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\DELL\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\DELL\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\DELL\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\DELL\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      count: 6,
    },
    {
      name: '20c92aa478',
      creation: '2022-08-01 20:38:23',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\dgfoo\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\dgfoo\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\dgfoo\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\dgfoo\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      count: 8,
    },
    {
      name: '03afa9a00d',
      creation: '2022-07-31 16:58:57',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\GANESH\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\GANESH\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\GANESH\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\GANESH\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      count: 8,
    },
    {
      name: '3b52a33127',
      creation: '2022-08-08 18:14:16',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\Krishna\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\Krishna\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\Krishna\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\Krishna\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      count: 20,
    },
    {
      name: '0cf78dbc09',
      creation: '2022-08-19 13:44:45',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\Lenovo\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\Lenovo\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\Lenovo\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\Lenovo\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      count: 6,
    },
    {
      name: '904c19c520',
      creation: '2022-08-24 02:23:20',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\lucas\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\lucas\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\lucas\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\lucas\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      count: 6,
    },
    {
      name: '02456b1e5b',
      creation: '2022-08-10 09:24:31',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\mscre\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\mscre\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\mscre\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\mscre\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      count: 15,
    },
    {
      name: '1343a58c8f',
      creation: '2022-08-02 19:03:05',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\njric\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\njric\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\njric\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\njric\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      count: 16,
    },
    {
      name: '3d6a2aad59',
      creation: '2022-08-17 12:00:46',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\rjnar\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\rjnar\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\rjnar\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\rjnar\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      count: 6,
    },
    {
      name: '032b125d74',
      creation: '2022-08-02 02:07:32',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\user\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\user\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\user\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.2-beta.0.exe' -> 'C:\\Users\\user\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.2-beta.0.exe'",
      count: 8,
    },
    {
      name: '155b59c86b',
      creation: '2022-08-18 20:05:43',
      error_name: 'Error',
      message:
        "ENOENT: no such file or directory, rename 'C:\\Users\\user\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\user\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      stack:
        "Error: ENOENT: no such file or directory, rename 'C:\\Users\\user\\AppData\\Local\\frappe-books-updater\\pending\\temp-Frappe-Books-Setup-0.6.3-beta.0.exe' -> 'C:\\Users\\user\\AppData\\Local\\frappe-books-updater\\pending\\Frappe-Books-Setup-0.6.3-beta.0.exe'",
      count: 18,
    },
    {
      name: '138c7d6e7e',
      creation: '2022-08-19 23:53:12',
      error_name: 'DatabaseError',
      message:
        "Error\nENOENT: no such file or directory, unlink '/home/vinay/Downloads/__premigratory_temp.db'",
      stack:
        "Error: ENOENT: no such file or directory, unlink '/home/vinay/Downloads/__premigratory_temp.db'",
      count: 13,
    },
    {
      name: '015c4d5470',
      creation: '2022-08-25 12:44:41',
      error_name: 'Error',
      message:
        "Error invoking remote method 'check-for-updates': Error: ENOENT: no such file or directory, open '/opt/Frappe Books/resources/app-update.yml'",
      stack:
        "Error: Error invoking remote method 'check-for-updates': Error: ENOENT: no such file or directory, open '/opt/Frappe Books/resources/app-update.yml'\n    at o.invoke (node:electron/js2c/renderer_init:57:526)\n    at async EventEmitter.invoke (app://./js/index.3e97c35f.js:7:55577)\n    at async l (app://./js/index.3e97c35f.js:1:86997)\n    at async Proxy.setDesk (app://./js/index.3e97c35f.js:1:191240)\n    at async Proxy.setupComplete (app://./js/index.3e97c35f.js:1:191768)",
      count: 136,
    },
    {
      name: '0a9881f366',
      creation: '2022-08-19 11:25:32',
      error_name: 'Error',
      message:
        "Error invoking remote method 'check-for-updates': Error: net::ERR_CONNECTION_RESET",
      stack:
        "Error: Error invoking remote method 'check-for-updates': Error: net::ERR_CONNECTION_RESET\n    at o.invoke (node:electron/js2c/renderer_init:57:526)\n    at async EventEmitter.invoke (app://./js/index.0a819800.js:7:55565)\n    at async l (app://./js/index.0a819800.js:1:86984)\n    at async Proxy.setDesk (app://./js/index.0a819800.js:1:191241)\n    at async Proxy.showSetupWizardOrDesk (app://./js/index.0a819800.js:1:191974)\n    at async Proxy.fileSelected (app://./js/index.0a819800.js:1:191620)\n    at async Proxy.mounted (app://./js/index.0a819800.js:1:191025)",
      count: 6,
    },
    {
      name: '22066c062e',
      creation: '2022-08-17 03:08:07',
      error_name: 'Error',
      message:
        "Error invoking remote method 'check-for-updates': Error: net::ERR_NETWORK_CHANGED",
      stack:
        "Error: Error invoking remote method 'check-for-updates': Error: net::ERR_NETWORK_CHANGED\n    at o.invoke (node:electron/js2c/renderer_init:57:526)\n    at async EventEmitter.invoke (app://./js/index.79a0ef61.js:7:55577)\n    at async l (app://./js/index.79a0ef61.js:1:86997)\n    at async Proxy.setDesk (app://./js/index.79a0ef61.js:1:191254)\n    at async Proxy.showSetupWizardOrDesk (app://./js/index.79a0ef61.js:1:191987)\n    at async Proxy.fileSelected (app://./js/index.79a0ef61.js:1:191633)\n    at async Proxy.mounted (app://./js/index.79a0ef61.js:1:191038)",
      count: 6,
    },
    {
      name: '0d0ca94e19',
      creation: '2022-05-24 03:55:04',
      error_name: 'TypeError',
      message:
        "Failed to execute 'sendBeacon' on 'Navigator': Beacons are only supported over HTTP(S).",
      stack:
        "TypeError: Failed to execute 'sendBeacon' on 'Navigator': Beacons are only supported over HTTP(S).\n    at y.stop (app://./js/index.ddb32af4.js:1:37285)\n    at HTMLDocument.<anonymous> (app://./js/index.ddb32af4.js:8:31641)",
      count: 56,
    },
    {
      name: '6cb50e34a9',
      creation: '2022-05-30 17:07:51',
      error_name: 'ReferenceError',
      message: 'fyo is not defined',
      stack:
        'ReferenceError: fyo is not defined\n    at Proxy.mounted (app://./js/index.caed909a.js:1:210239)\n    at d (app://./js/chunk-vendors.f44c6d44.js:521:109955)\n    at h (app://./js/chunk-vendors.f44c6d44.js:521:110044)\n    at Array.t.__weh.t.__weh (app://./js/chunk-vendors.f44c6d44.js:521:128510)\n    at F (app://./js/chunk-vendors.f44c6d44.js:521:111417)\n    at $ (app://./js/chunk-vendors.f44c6d44.js:521:111620)',
      count: 7,
    },
    {
      name: '55be249781',
      creation: '2022-05-30 20:00:31',
      error_name: 'Error',
      message:
        "invalid value null found value: 'null' of type: object, fieldname: 'writeoff', label: 'Write Off / Refund'",
      stack:
        "Error: invalid value null found value: 'null' of type: object, fieldname: 'writeoff', label: 'Write Off / Refund'\n    at app://./js/chunk-vendors.0752cf3e.js:9:88752\n    at Array.forEach (<anonymous>)\n    at z.A (app://./js/chunk-vendors.0752cf3e.js:9:88675)\n    at z.set value [as value] (app://./js/chunk-vendors.0752cf3e.js:9:87082)\n    at new z (app://./js/chunk-vendors.0752cf3e.js:9:86083)\n    at new te (app://./js/chunk-vendors.0752cf3e.js:9:89970)\n    at ie (app://./js/chunk-vendors.0752cf3e.js:9:93945)\n    at f.pesa (app://./js/chunk-vendors.0752cf3e.js:9:94067)\n    at _.getDocFormattedValues (app://./js/index.86a3a5e3.js:1:242525)\n    at app://./js/index.86a3a5e3.js:1:242383",
      count: 6,
    },
    {
      name: '00b191ad07',
      creation: '2022-08-24 02:44:45',
      error_name: 'Error',
      message: 'net::ERR_FAILED',
      stack:
        'Error: net::ERR_FAILED\n    at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/browser_init:101:7169)\n    at SimpleURLLoaderWrapper.emit (node:events:390:28)',
      count: 6,
    },
    {
      name: '06b2d36232',
      creation: '2022-08-05 03:43:25',
      error_name: 'Error',
      message: 'net::ERR_NETWORK_CHANGED',
      stack:
        'Error: net::ERR_NETWORK_CHANGED\n    at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/browser_init:101:7169)\n    at SimpleURLLoaderWrapper.emit (node:events:390:28)',
      count: 8,
    },
    {
      name: '09ce40bfef',
      creation: '2022-05-09 20:28:40',
      error_name: 'NotFoundError',
      message: "Not Found: Account Revenues d'intérêts",
      stack:
        "NotFoundError: Not Found: Account Revenues d'intérêts\n    at m.load (app://./js/index.86a3a5e3.js:6:130118)\n    at async f.getDoc (app://./js/index.86a3a5e3.js:6:48103)\n    at async F.setAccountBalanceChange (app://./js/index.86a3a5e3.js:1:251577)\n    at async F.credit (app://./js/index.86a3a5e3.js:1:251450)\n    at async Proxy.getPosting (app://./js/index.86a3a5e3.js:5:3278)\n    at async Proxy.beforeInsert (app://./js/index.86a3a5e3.js:5:2125)\n    at async Proxy.trigger (app://./js/index.86a3a5e3.js:6:134665)\n    at async Proxy.insert (app://./js/index.86a3a5e3.js:6:133105)\n    at async Proxy.insertOrUpdate (app://./js/index.86a3a5e3.js:6:134040)",
      count: 7,
    },
    {
      name: '0068123c46',
      creation: '2022-06-01 20:08:19',
      error_name: 'Error',
      message: 'SQLITE_CANTOPEN: unable to open database file',
      stack: 'Error: SQLITE_CANTOPEN: unable to open database file',
      count: 160,
    },
    {
      name: '1db9cd3bd4',
      creation: '2022-08-20 21:16:29',
      error_name: 'DatabaseError',
      message: 'SqliteError\nunable to open database file',
      stack:
        'SqliteError: unable to open database file\n    at new Database (C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2C7LmqXrQBpDrWbJebFmoVmY8Wk\\resources\\app.asar\\node_modules\\better-sqlite3\\lib\\database.js:63:26)\n    at Client_BetterSQLite3.acquireRawConnection (C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2C7LmqXrQBpDrWbJebFmoVmY8Wk\\resources\\app.asar\\node_modules\\knex\\lib\\dialects\\better-sqlite3\\index.js:12:12)\n    at create (C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2C7LmqXrQBpDrWbJebFmoVmY8Wk\\resources\\app.asar\\node_modules\\knex\\lib\\client.js:249:39)',
      count: 12,
    },
    {
      name: '06d144e65a',
      creation: '2022-08-17 15:25:02',
      error_name: 'DatabaseError',
      message:
        'TypeError\nCannot open database because the directory does not exist',
      stack:
        'TypeError: Cannot open database because the directory does not exist\n    at new Database (/Applications/Frappe Books.app/Contents/Resources/app.asar/node_modules/better-sqlite3/lib/database.js:59:9)\n    at Client_BetterSQLite3.acquireRawConnection (/Applications/Frappe Books.app/Contents/Resources/app.asar/node_modules/knex/lib/dialects/better-sqlite3/index.js:12:12)\n    at create (/Applications/Frappe Books.app/Contents/Resources/app.asar/node_modules/knex/lib/client.js:249:39)',
      count: 19,
    },
    {
      name: '1462b729cd',
      creation: '2022-03-28 05:04:38',
      error_name: 'Error',
      message:
        "update `Account` set `name` = 'Itau' where `name` = 'Sales' - SQLITE_CONSTRAINT_PRIMARYKEY: UNIQUE constraint failed: Account.name",
      stack:
        "Error: update `Account` set `name` = 'Itau' where `name` = 'Sales' - SQLITE_CONSTRAINT_PRIMARYKEY: UNIQUE constraint failed: Account.name",
      count: 7,
    },
    {
      name: '06eb380362',
      creation: '2022-08-19 15:23:54',
      error_name: 'DatabaseError',
      message: 'ValidationError\nname is mandatory',
      stack:
        'ValidationError: name is mandatory\n    at wa.get (C:\\Users\\KAJALS~1\\AppData\\Local\\Temp\\2CU5IlGKSf1LngBumObFzQGs3w2\\resources\\app.asar\\background.js:2:908108)\n    at Sa.call (C:\\Users\\KAJALS~1\\AppData\\Local\\Temp\\2CU5IlGKSf1LngBumObFzQGs3w2\\resources\\app.asar\\background.js:2:920105)\n    at C:\\Users\\KAJALS~1\\AppData\\Local\\Temp\\2CU5IlGKSf1LngBumObFzQGs3w2\\resources\\app.asar\\background.js:2:927818\n    at O (C:\\Users\\KAJALS~1\\AppData\\Local\\Temp\\2CU5IlGKSf1LngBumObFzQGs3w2\\resources\\app.asar\\background.js:2:887767)\n    at C:\\Users\\KAJALS~1\\AppData\\Local\\Temp\\2CU5IlGKSf1LngBumObFzQGs3w2\\resources\\app.asar\\background.js:2:927782\n    at node:electron/js2c/browser_init:189:579\n    at EventEmitter.<anonymous> (node:electron/js2c/browser_init:161:11093)\n    at EventEmitter.emit (node:events:390:28)',
      count: 40,
    },
  ].map((e) => {
    return {
      name: e.name,
      last: new Date(e.creation),
      error_name: e.error_name,
      message: e.message,
      stack: e.stack,
      occurances: e.count,
      done: false,
    } as ErrorReport;
  });

  const timestamp = new Date('2022-08-25 16:10:53.729529');
  return { errorReports, timestamp };
}
