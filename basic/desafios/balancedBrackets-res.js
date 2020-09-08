function isBalanced(s) {
    let opening = [];
    let closing = [];

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if(element === '{' || element === '[' || element === '(') {
            opening.push(element);
        } else {
            closing.push(opening.pop());
        }
    }

    return opening.length === 0 ? 'YES' : 'NO';
}

console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');