/*function add(...args) {
   
     let   sum = 0;
for(const arg of args){
sum += arg;
}
return sum;

    }
console.log(add(32, 6, 13, 19, 8)); //78
*/

/*function addOverNum(value, ...args) {
    let sum = 0;
    for(const arg of args){
        if(arg > value){
            sum += arg;
        }
    }
    return sum;
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
*/

/*function getExtremeScores(scores) {
 return { 
    best: Math.max(...scores),
   worst: Math.min(...scores)
};
 }
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])) //{ best: 93, worst: 17 }
*/

/*const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
console.log(allScores, bestScore, worstScore);
*/

/*const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
...defaultSettings, ...overrideSettings
};
console.log(finalSettings);
*/