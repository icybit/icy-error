var test = require('tape'),
    CustomError = require('../lib/error.js');

test('Should create specified error type', function (t) {
    var IcyError = CustomError('IcyError'),
        error = new IcyError('Icy message');

    t.plan(5);
    t.true(error instanceof Error, 'Should be true');
    t.true(error instanceof IcyError, 'Should be true');
    t.equal(error.name, 'IcyError', 'Should be equal');
    t.equal(error.message, 'Icy message', 'Should be equal');
    t.true(error.stack, 'Should be true');
});

test('Should set specified data', function (t) {
    var IcyError = CustomError('IcyError'),
        error = new IcyError('Icy message', { status: 400, foo: 'bar' });

    t.plan(5);
    t.equal(error.name, 'IcyError', 'Should be equal');
    t.equal(error.message, 'Icy message', 'Should be equal');
    t.true(error.data, 'Should be true');
    t.equal(error.data.status, 400, 'Should be equal');
    t.equal(error.data.foo, 'bar', 'Should be equal');
});

test('Should set default values', function (t) {
    var UnexpectedError = CustomError(),
        error = new UnexpectedError();

    t.plan(3);
    t.equal(error.name, 'UnexpectedError', 'Should be equal');
    t.equal(error.message, 'An unexpected error has occurred', 'Should be equal');
    t.true(error.data, 'Should be true');
});