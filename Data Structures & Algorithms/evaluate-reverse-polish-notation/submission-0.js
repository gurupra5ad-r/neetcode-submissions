class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const c of tokens) {
            switch (c) {
                case "+": {
                    stack.push(stack.pop() + stack.pop())
                    break;
                }
                case "-": {
                    const a = stack.pop()
                    const b = stack.pop()
                    stack.push(b - a)
                    break;
                }
                case "*": {
                    stack.push(stack.pop() * stack.pop())
                    break;
                }
                case "/": {
                    const a = stack.pop()
                    const b = stack.pop()
                    stack.push(Math.trunc(b / a))
                    break;
                }
                default: {
                    stack.push(parseInt(c))
                    break;
                }
            }
        }
        return stack.pop();
    }
}
