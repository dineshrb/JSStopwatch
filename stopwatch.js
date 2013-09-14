var StopWatch = {};
StopWatch.sec = 0;
StopWatch.min = 0;
StopWatch.hour = 0;
StopWatch.IntervalID;

StopWatch.constructAttributes = function(elementObj){
	var div = document.createElement('div');
	div.setAttribute("id", elementObj.id);
	if(elementObj.className)
	{
		div.className = elementObj.className;
	}
	if(elementObj.click)
	{
		div.onclick = elementObj.click;
	}
	return div;
}

StopWatch.constructWatch = function(){
	var parentDiv = document.createElement('div');
	parentDiv.className = "container";
	var circleDiv = document.createElement('div');
	circleDiv.className = "circle";
	var elementArr = [{id:'pausebtn', className:"hide", click:StopWatch.pause}, {id:'content', className:"hide"},
	{id:'startbtn',  click:StopWatch.start}, {id:'resetbtn', className : "hide", click:StopWatch.reset}];
	for(var i =0; i < elementArr.length; i++){
		var div = StopWatch.constructAttributes(elementArr[i]);
		circleDiv.appendChild(div);
	}
	parentDiv.appendChild(circleDiv);
	document.body.appendChild(parentDiv);
}

StopWatch.updateTime = function(){
	var hour = StopWatch.hour, min = StopWatch.min, sec = StopWatch.sec;
	var displayHour = hour, displayMin = min, displaySec = sec;
		 if(hour < 10)
		 {
		 	displayHour = "0"+hour; 	
		 }
		 if(min < 10)
		 {
		 	displayMin = "0"+min; 	
		 }
		 if(sec < 10)
		 {
		 	displaySec = "0"+sec; 	
		 }
   if(document.getElementById('content').innerText)
   {
   	document.getElementById('content').innerText = displayHour+":"+displayMin+":"+displaySec;
   }		 	
   else{
   	document.getElementById('content').textContent = displayHour+":"+displayMin+":"+displaySec;
   }
};

StopWatch.calculateTime = function(){
	StopWatch.updateTime()
    StopWatch.sec++;
    if(StopWatch.sec > 59) {
         StopWatch.sec = 0;
         StopWatch.min++;
    } else if(StopWatch.min > 59){
         StopWatch.min = 0;
         StopWatch.hour++;
    }  
};

StopWatch.start = function(){
	StopWatch.updateTime();
    document.getElementById('startbtn').className = "hide";
    document.getElementById('content').className = "show";
    document.getElementById('pausebtn').className = "show";
    document.getElementById('resetbtn').className = "show";
    StopWatch.intervalID = window.setInterval(StopWatch.calculateTime, 1000);
}

StopWatch.reset = function(){
    StopWatch.pause();
    StopWatch.sec = 0;
    StopWatch.min = 0; 
    StopWatch.hour = 0;
    StopWatch.updateTime();
}

StopWatch.pause = function(){
	document.getElementById('pausebtn').className = "hide";
    document.getElementById('startbtn').className = "startbtnhelper show";
    window.clearInterval(StopWatch.intervalID);
}





