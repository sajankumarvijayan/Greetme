/**
 * Created by sajankumar on 09/10/15.
 */


/**
 * Just say hello if someone says hi to you.
 *
 * @param  {String}
 * @return {String}
 */
module.exports = {
    greetThem: function(str) {
        switch (str.toLowerCase()){
            case "hi":
                return "Hello !";
            break;
            case "hello":
                return "Hey hi, How do you do ?";
            break;
            case "bye":
                return "Bye bye, see you later.";
            break;
            case "hi, good morning":
                return "Hello, Very Good Morning";
            break;

        }
    }

};