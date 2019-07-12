/**
 * Created by claudio on 19/06/17.
 */
import zlib from 'zlib';

@registerDynamicValueClass
class CompressJSONBodyDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.CompressJSONBodyDynValue';
    static title = 'Compress JSON Body';
    static inputs = [
        DynamicValueInput('formatJson', 'Format JSON', 'Checkbox', {
            defaultValue: false
        }),
        DynamicValueInput('jsonBody', 'JSON', 'JSON', {
            "persisted": false
        })
    ];

    evaluate(context) {
        let value = JSON.stringify(this.jsonBody, null, this.formatJson ? 2 : 0);
        const request = context.getCurrentRequest();

        let encoding;

        if ((encoding = request.getHeaderByName('Content-Encoding'))) {
            switch (encoding.toLowerCase()) {
                case 'deflate':
                    value = zlib.deflateSync(value);
                    break;

                case 'gzip':
                    value = zlib.gzipSync(value);
                    break;
            }
        }

        return value;
    }

    title(context) {
        return 'Compress JSON';
    }

    text(context) {
        return JSON.stringify(this.jsonBody);
    }
}
