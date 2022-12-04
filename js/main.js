let fortuneList = {1:'darjeeling', 2:'harb-tea', 3:'ryoku-cha'};

function clickFortuneStart(){
  let random = Math.floor(Math.random() * 3) + 1;
  let result = document.getElementById('fortune-result');
  result.innerHTML = '<img src="image/' + fortuneList[random] + '.jpg" class = "result-image">';
}
