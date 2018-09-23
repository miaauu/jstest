import { assert } from '/scripts/assert.js'
import { test } from '/scripts/jst-test.js'

let echo = assert.echo

console.log('test from main.js')
console.log('echo ping = ' + echo('ping'))

// test example:
test("Echo Ping").result("ping", () => {
    let expectedEcho = 'ping'
    let actualEcho = echo('ping')
    assert.equal(expectedEcho, actualEcho)
})

test("Echo Ping returns ping", () => {
    let expectedEcho = 'ping'
    let actualEcho = echo('ping')
    assert.equal(expectedEcho, actualEcho)
})

test("Echo Ping").does("return ping", () => {
    let expectedEcho = 'ping'
    let actualEcho = echo('ping')
    assert.equal(expectedEcho, actualEcho)
})

test("Echo ping").assertEqual('ping', () => echo('ping'))

test("Echo ping", () => echo('ping')).assertEqual('ping')

// console.log('assert true   -> ' + assert.equals('ping'))
// console.log('asssert false ->= ' + assert.equals('ping'))