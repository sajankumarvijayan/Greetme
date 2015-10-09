/**
 * Created by sajankumar on 09/10/15.
 */

var should = require('chai').should(),
    GreetThem = require('../index'),
    greet  = GreetThem.greetThem;

describe('#greet', function() {

    it('say hi you should get hello back', function() {
         greet('Hi').should.equal('Hello !');
    });

    it('say hello you should get Hey hi, How do you do ?', function() {
        greet('Hello').should.equal('Hey hi, How do you do ?');
    });

    it('say bye you should get Bye bye, see you later.', function(){
        greet('bye').should.equal('Bye bye, see you later.');
    });

    it('say hi, good morning you should get Hello, Very Good Morning', function(){
        greet('hi, good morning').should.equal('Hello, Very Good Morning');
    });

});
