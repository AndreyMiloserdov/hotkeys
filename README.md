# Hotkeys

This is the fork of [[hotkeys-js|https://www.npmjs.com/package/hotkeys-js]]

## Install

Install from npm
```bash
npm i --save @hotkeys/manager
```

Import to file:
```javascript
import hotkeysManager from '@hotkeys/manager';
```

## Changes

### addCustomKeyMap

```javascript
// update keyName => keyCode map
hotkeysManager.addCustomKeyMap({
  "numPad#1": 97,
  "numPad#2": 98,
  "numPad#3": 99,
  "=>": 39, 'arrow right' 
});

// use new keys in shotcuts
hotkeysManager('ctrl+numPad#1+=>', () => console.log('hotkey pressed!'));
```

### Bind by key codes

```javascript
// bind just with key codes
hotkeysManager([18, 97, 39], () => console.log('hotkey pressed!'));

// unbind
hotkeysManager.unbind([18, 97, 39]);
```
