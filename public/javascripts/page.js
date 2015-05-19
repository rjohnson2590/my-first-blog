(function() {
	// function createP(text,element){
	// var p2=document.createElement('p');
	// p2.innerHTML=text;
	// element.appendChild(p2);
	// }

	// function createH(text,element){
	// var h1=document.createElement('h1')
	// h1.innerHTML=text
	// element.appendChild(h1);
	// }

	// document.body.classList.add("hello")

	

	var article1= document.getElementsByTagName('article')
	// var work=document.getElementsByTagName('p');
	// article1[0].removeChild(work[0])

	// var title=document.getElementsByTagName('title');
	// title[0].innerHTML="My JavaScript Blog";

	// var head=document.getElementsByTagName('h1');
	// head[0].innerHTML="My JavaScript Blog"

	// createH("My Second Blog Post",article1[0])

	// // var h1=document.createElement('h1')
	// // h1.innerHTML="My Second Blog Post"
	// // article1[0].appendChild(h1);


	// createP("This is a blog post about really awesome stuff I've done in JavaScript.", article1[0])

	// // var p2=document.createElement('p');
	// // p2.innerHTML="This is a blog post about really awesome stuff I've done in JavaScript.";
	// // article1[0].appendChild(p2);

	// var arti= document.createElement('article')
	// document.body.appendChild(arti)

	// createH("My First Blog Post",arti)

	// // var hA=document.createElement('h1')
	// // hA.innerHTML="My First Blog Post"
	// // arti.appendChild(hA)

	// createP("This is the first blog post I've ever written", arti)

	// // var p3=document.createElement('p');
	// // p3.innerHTML="This is the first blog post I've ever written"
	// // arti.appendChild(p3)

	// work[0].classList.add("before","stuff")

	// work[1].classList.add("before","stuff")

	// var get=document.getElementsByTagName('h1');

	// get[1].addEventListener("click", function(event){
	// 	work[0].classList.toggle("before");
	// })

	// get[2].addEventListener("click", function(event){
	// 	work[1].classList.toggle("before");
	// })

	// work[0].addEventListener("click", function(event){
	// 	article1[0].classList.toggle("highlight")
	// })

	// work[1].addEventListener("click", function(event){
	// 	article1[1].classList.toggle("highlight")
	// })

	// var makeForm=document.createElement("form");

	// var makeLabel=document.createElement('label')

	// var makeInput=document.createElement('input')

	// makeForm.setAttribute("action", '""')

	// makeLabel.setAttribute("for", "GET-name")

	// makeLabel.innerHTML="Email: "

	// makeInput.setAttribute("type", "text")

	// makeForm.appendChild(makeLabel)

	// makeForm.appendChild(makeInput)

	// document.body.appendChild(makeForm)

	var makeForm=document.createElement("form");

	function foamy(text,verification){
	var makeLabel=document.createElement('label')
	var makeInput=document.createElement('input')
	var makeDiv=document.createElement("div")


	makeForm.setAttribute("action", '""')

	makeLabel.setAttribute("for", "GET-name")

	makeLabel.innerHTML=text;

	// makeInput.setAttribute("class", verification)

	makeInput.setAttribute("type", "text")

	makeInput.setAttribute("name", text)

	makeDiv.appendChild(makeLabel)

	makeDiv.appendChild(makeInput)		

	makeForm.appendChild(makeDiv)


	}

	function opt(state){
	var makeOption=document.createElement("option")
	makeOption.setAttribute("value", "value")
	makeOption.innerHTML=state;
	makeSelect.appendChild(makeOption)

	}

	foamy("Email: ");
	foamy("Credit Card Number: ");
	foamy("Credit Card expiration: ");
	foamy("Name on card: ");
	foamy("Card verification code: ");
	foamy("City: ");
	document.body.appendChild(makeForm)

	function lab(text){
	var makeLabel=document.createElement('label');
	makeLabel.setAttribute("for", "GET-name")
	makeLabel.innerHTML=text
	makeForm.appendChild(makeLabel)
	}

	lab("State: ")

	var makeSelect=document.createElement("select");
	var makeDiv=document.createElement("div")
	var makeInput=document.createElement('input')
	makeSelect.setAttribute("name", "select")
	makeSelect.setAttribute("label", "State")
	makeForm.appendChild(makeSelect)
	makeInput.setAttribute("type", "submit")
	makeInput.setAttribute("id","button")
	makeDiv.appendChild(makeInput)
	makeInput.addEventListener("click",verifyField)

	
	// button.addEventListener("click", verifyField())
	
	

	
	opt("Alabama");
	opt("Chicago");
	opt("Portland is state")
	opt("Tattoine")
	opt("Random state")
		makeForm.appendChild(makeDiv)


	function verifyField(event){
		event.preventDefault();
		for(var i=0; i<6;i++){
		var ins=makeForm.getElementsByTagName("input")
		if(ins[i].value=== null || ins[i].value=== ""){
			alert("Those are not vaild inputs, please refresh and try again")
			console.log("hello")

			}
		}
	}
	


})();





// Loop through each input in forms and check those.












