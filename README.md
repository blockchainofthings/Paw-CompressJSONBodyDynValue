# Compress JSON Body Paw Extension

This is a Dynamic Value Paw extension that is used to insert a JSON that is compressed according to the current value
 of the Content-Encoding HTTP header.

## Use

To have the body of a request set to a JSON value that is dynamically compressed, follow the steps bellow.

- Install the [Write File Server](https://github.com/blockchainofthings/WriteFileServer.git) Node.js application, and
 start it.
 
- Create an empty file, named after the Paw request to be used (e.g. my-request-body), in the output directory of
 the Write File Server application.
 
- Set the body of the Paw request to the file created in the previous step. 

- Define an HTTP header named *X-Body* (or any other non-standard header name) selecting the Compress JSON Body
 dynamic value as its value, and configure it by entering the *Write File Host* (according to the settings of the
 Write File Server application) and the *Output Filename* (the same as the name of the file assigned to the request
 body). Then check the *Write To File* option, and enter the appropriate value for the *JSON*.
 
> **Note 1**: the Compress JSON Body dynamic value never returns the value of the entered JSON but rather stores it
 to the output file via the Write File Server application. Thus the *X-Body* header will always have an empty value.
 
> **Note 2**: to avoid interference with other dynamic value HTTP headers, it is recommended that the *X-Body* header be
 the first HTTP header of the request.
 
> **Note 3**: it is important that the *Write To File* option **only** be checked **after** the *Output Filename* is
 fully entered. Otherwise, many output files with incomplete filenames might be inadvertently written.

- Optionally, check the *Format JSON* option of the Compress JSON Body dynamic value for the resulting JSON to be
 multi-line formatted (with 2-space indentation).
 
- Define a *Content-Type* HTTP header and set its value to **application/json**.
 
- Define a *Content-Encoding* HTTP header and set its value.
 
As the value of the *Content-Encoding* header is set to either **deflate** or **gzip**, the resulting JSON value in
 the body is compressed.

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
