// Find unique number
const ip = [9,9,8,6,2,9,0,2,9,1];
/**
{
  9:4,
  0:1,
  8:1,
  2:2,
  6:1
  1:1
}
 */
const uniqueMap = {};
const iLen = ip.length;
for (let index = 0; index < iLen; index++) {
  const key = ip[index];
  if(uniqueMap[key]){
    uniqueMap[key] += 1;
  } else {
    uniqueMap[key] = 1;
  }
}
console.log(uniqueMap);

const uniqueWithForIn = [];
for(key in uniqueMap) {
  const value = uniqueMap[key];
  if(value === 1){
    uniqueWithForIn.push(Number(key))
  }
}
console.log('uniqueWithForIn', uniqueWithForIn)

const uniqueWithObjectEntries = [];
// Object.entries(uniqueMap) = [['0', 1], ['1', 1],,,['9', 4]]
Object.entries(uniqueMap).forEach(([key, value]) => {
  if(value === 1){
    uniqueWithObjectEntries.push(Number(key))
  }
})

console.log('uniqueWithObjectEntries', uniqueWithObjectEntries)