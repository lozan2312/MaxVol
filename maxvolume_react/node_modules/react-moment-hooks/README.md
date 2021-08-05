# react-moment-hooks

React hooks for dealing with the Moment.js library.

[![NPM](https://img.shields.io/npm/v/react-moment-hooks.svg)](https://www.npmjs.com/package/react-moment-hooks)

## Installation

```bash
npm install --save react-moment-hooks
```

Install peer dependencies:

```bash
npm install --save react react-dom moment moment-utl
```

## Usage

### `useLocale` hook

```jsx
import React from "react";
import { useLocale } from "react-moment-hooks";

function Example({ locale }) {
  useLocale(locale, {
    callback: normalizedLocale => {
      // Do something with the loaded normalized locale.
      // This callback will be called when the given locale is either known or unknown.
      //
      // If the given locale is unknown, this function will still be called
      // with "normalizedLocale" set to the default Moment's locale (USA's English, i.e. "en"),
      // but only after calling "unknownLocaleCallback" which will always be called before
      // (this is guaranteed by the underlying "moment-utl" package).
      console.log(normalizedLocale);
    },
    unknownLocaleCallback: (defaultLocale, locale) => {
      // Do something with unknown locale.
      // "defaultLocale" will always be "en" (USA's English).
      // "locale" will be the original locale passed to the hook
      // as first parameter.
      console.log(defaultLocale, locale);
    },
    errorCallback: e => {
      // Do something when locale could not be loaded.
      // If this error callback is not given to "useLocale",
      // then an error will be logged to the console during development (not in production)
      // if an error occurs.
      console.error(e);
    },
  });
  return <div />;
}

export default function App() {
  return (
    <div>
      <Example locale="ru" />
    </div>
  );
}
```

## License

MIT © [Anton Bagdatyev (Tonix)](https://github.com/tonix-tuft)
