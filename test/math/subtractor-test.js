const assert = require('chai').assert

describe('subtractor', function() {

  const subtractor = require('../../lib/math/subtractor.js')

  describe('subtract', function () {
    it('should return 0 when given 1 and 1', function () {
      assert.equal(0, subtractor.subtract(1, 1))
    })
    it('should return 0 when given -1 and -1', function () {
      assert.equal(0, subtractor.subtract(-1, -1))
    })
  })
})
