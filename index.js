// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun(activity="")

function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork(activity="")

function wrapAdjective(result = "*") {
    return function(emphatic) {
      return `You are ${result}${emphatic}${result}!`;
    }
  }

  const wrap = wrapAdjective();
  console.log(wrap("hard worker"));