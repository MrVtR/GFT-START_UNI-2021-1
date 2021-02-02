const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');
let value = 0;
describe('Math class', function () {
  //Hooks -> before, beforeEach, after, afterEach
  beforeEach(function () {
    value = 0;
  });
  it('Sum two numbers', function (done) {
    //Done faz com que o teste seja concluído apenas quando for invocado
    const math = new Math();
    this.timeout(3000);
    value = 5;
    math.sum(value, 5, (value) => {
      expect(value).to.equal(10);
      // assert.strictEqual(value, 10);
      done();
    });
  });
  //Métodos de it: skip e only
  it('Multiply two numbers', function () {
    const math = new Math();
    const obj = {
      name: 'Vitor RIbeiro',
    };
    const obj2 = {
      name: 'Vitor RIbeiro',
    };
    expect(obj).to.deep.equal(obj2); //lib Chai
    expect(math.multiply(value, 5)).to.equal(0);
    // assert.strictEqual(math.multiply(value, 5), 0);
  }); //teste pendente
  it.only('Calls req with sum and index values', function () {
    const req = {};
    const res = {
      load: function load() {
        console.log('Called');
      }, //Saber como uma função é chamada
    };
    sinon.stub(res, 'load').returns('xpto');
    const math = new Math();
    math.printSum(req, res, 5, 5);
    expect(res.load.calledOnce).to.be.true;
  });
});
