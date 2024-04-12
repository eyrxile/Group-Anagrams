var groupAnagrams = function(strs) {
    const map = new Map();

    for(let str of strs) {
        const sortedStr = str.split('').sort().join('');

        if(map.has(sortedStr)){
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    return Array.from(map.values());
};


//Example usage:
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1));

const strs2 = [""];
console.log(groupAnagrams(strs2));

const strs3 = ["a"];
console.log(groupAnagrams(strs3));