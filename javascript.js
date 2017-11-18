var i = 0, pic = 0;

function more_info(){
	i+=1;

	if(i%2==1){
		document.getElementById("demo").innerHTML="To celebrate the release"+
		" of the film in March 2016, Warner Bros. Pictures invites visual"+
		" artists from around the world to create artwork inspired by this"+
		" epic clash of superheroes.";
	}
	else{
		document.getElementById("demo").innerHTML="Batman vs Superman Competition:"
		+ " The New Batmobile vs The Previous Batmobiles";
		i = 0;
	}	
}

function more_info1(){
	window.location='http://dcextendeduniverse.wikia.com/wiki/June_Finch';
}

function scrollToElement(ele) {
	document.getElementById(ele).scrollIntoView();
}

function change_picture(){
	if (pic==0) {
		pic+=1;
	}
	else{
		pic=0;
	}

	if (pic==0) {
		document.getElementById('ss').style.background = "url('b.jpg') no-repeat center";
		document.getElementById('ss').style.backgroundSize = "cover";
	}
	else if (pic==1) {
		document.getElementById('ss').style.background = "url('a.jpg') no-repeat center";
		document.getElementById('ss').style.backgroundSize = "cover";
	}
}

function change_picture1(){
	if(pic==0){
		pic=1;
	}
	else{
		pic-=1;
	}

	if (pic==0) {
		document.getElementById('ss').style.background = "url('b.jpg') no-repeat center";
		document.getElementById('ss').style.backgroundSize = "cover";
	}
	else if (pic==1) {
		document.getElementById('ss').style.background = "url('a.jpg') no-repeat center";
		document.getElementById('ss').style.backgroundSize = "cover";
	}
}

