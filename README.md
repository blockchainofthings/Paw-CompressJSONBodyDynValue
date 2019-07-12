# Compress JSON Body Plugin

This is a Dynamic Value Paw extension that is used to insert a JSON that is compressed according to the current value
 of the Content-Encoding HTTP header.

## Use

Define a Content-Encoding HTTP header and set its value. Then, define a text type body containing a single Compress
 JSON Body dynamic value. Enter the appropriate value for the JSON. As the value of the Content-Encoding HTTP header
 is set to either 'deflate' or 'gzip', the resulting JSON value in the body is compressed.

## Development

### Prerequisites

```shell
nvm install
nvm use
npm install
```

### Build

```shell
npm run build
```

### Install

```shell
make install
```

### Test

```shell
npm test
```

## License

This Paw Extension is released under the [MIT License](LICENSE). Feel free to fork, and modify!

Copyright © 2019 Blockchain of Things Inc.
