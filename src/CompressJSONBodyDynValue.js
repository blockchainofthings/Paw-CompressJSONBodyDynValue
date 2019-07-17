/**
 * Created by claudio on 19/06/17.
 */
import zlib from 'zlib';

@registerDynamicValueClass
class CompressJSONBodyDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.CompressJSONBodyDynValue';
    static title = 'Compress JSON Body';
    static inputs = [
        DynamicValueInput('writeToFile', 'Write To File', 'Checkbox', {
            defaultValue: false
        }),
        DynamicValueInput('hostname', 'Write File Host', 'String', {
            defaultValue: 'localhost:8889',
            placeholder: 'hostname:port'
        }),
        DynamicValueInput('filename', 'Output filename', 'String', {
           defaultValue: 'restapi-body.txt'
        }),
        DynamicValueInput('formatJson', 'Format JSON', 'Checkbox', {
            defaultValue: false
        }),
        DynamicValueInput('jsonBody', 'JSON', 'JSON', {
            "persisted": false
        })
    ];

    evaluate(context) {
        let body = JSON.stringify(this.jsonBody, null, this.formatJson ? 2 : 0);
        const request = context.getCurrentRequest();

        let encoding;

        if ((encoding = request.getHeaderByName('Content-Encoding'))) {
            switch (encoding.toLowerCase()) {
                case 'deflate':
                    body = zlib.deflateSync(body);
                    break;

                case 'gzip':
                    body = zlib.gzipSync(body);
                    break;
            }
        }

        if (this.writeToFile) {
            // Call local HTTP service to write body contents to output file
            const req = new NetworkHTTPRequest();

            req.requestUrl = 'http://' + this.hostname + '/file/' + this.filename;
            req.requestMethod = "POST";
            req.requestTimeout = 15000;
            req.requestBody = (Buffer.isBuffer(body) ? body : Buffer.from(body)).toString('base64');

            req.setRequestHeader("Content-Type", "application/base64");

            req.send();
        }

        return '';
    }

    title(context) {
        return 'Compress JSON';
    }

    text(context) {
        return JSON.stringify(this.jsonBody);
    }
}
