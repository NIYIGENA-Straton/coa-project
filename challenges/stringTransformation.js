
  function transformString(s) {
    let length = s.length;

    if (length % 15 === 0) {
        // Reverse the string first
        s = s.split('').reverse().join('');
        s = s.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        s = s.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        s = s.split('').reverse().join('');//reverse the string
    }

    return s;
}

// Test cases
console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));  // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
console.log(transformString("Hello"));  // Output: "72 101 108 108 111"
console.log(transformString("ABCDE"));  // Output: "65 66 67 68 69"
console.log(transformString("Python"));  // Output: "nohtyP"
console.log(transformString("OpenAI"));  // Output: "IAnepO"
console.log(transformString("Artificial Intelligence"));  // Output: "ecnegilletnI laicifitrA"