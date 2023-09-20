// **Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//* An input string is valid if:
//* Open brackets must be closed by the same type of brackets.
//* Open brackets must be closed in the correct order.
//* Every close bracket has a corresponding open bracket of the same type.

const validParenthesis = (s) => {
  // ? First we initalize an stack
  const stack = [];
  // ? now we initialize an mapping object that maps opening parenthesis to their corresponding closing parenthesis.
  const mapping = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  //? Now we loop through each character in the input string.

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (mapping[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (mapping[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const s = "()";
console.log(validParenthesis(s));
