'use strict';
const chai = require('chai');
const assert = chai.assert;
const parquet_codec_plain = require('../lib/codec/plain.js');
const assert_util = require('./util/assert_util.js');

describe('arrow', function() {

  it('should encode BOOLEAN values', function() {
    let buf = parquet_codec_plain.encodeValues(
        'BOOLEAN',
        [true, false, true, true, false, true, false, false]);

    assert.deepEqual(buf, Buffer.from([0x2d])); // b101101
  });


});
