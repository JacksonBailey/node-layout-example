const assert = require('chai').assert

describe('padder', function() {

  const padder = require('../../lib/string/padder.js')

  describe('leftPad', function () {
    it('should return "  foo" when given "foo" and 5', function () {
      assert.equal('  foo', padder.leftPad('foo', 5))
    })
    it('should return "--foo" when given "foo", 5, and "-"', function () {
      assert.equal('--foo', padder.leftPad('foo', 5, '-'))
    })
  })

  describe('rightPad', function () {
    it('should return "foo  " when given "foo" and 5', function () {
      assert.equal('foo  ', padder.rightPad('foo', 5))
    })
    it('should return "foo--" when given "foo", 5, and "-"', function () {
      assert.equal('foo--', padder.rightPad('foo', 5, '-'))
    })
  })
})
