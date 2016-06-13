const assert = require('chai').assert

describe('adder', function() {

  const adder = require('../../lib/math/adder.js')

  describe('add', function () {
    it('should return 2 when given 1 and 1', function () {
      assert.equal(2, adder.add(1, 1))
    })
    it('should return -2 when given -1 and -1', function () {
      assert.equal(-2, adder.add(-1, -1))
    })
  })
})
