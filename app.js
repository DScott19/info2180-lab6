
document.addEventListener("DOMContentLoaded",() => {

let button = document.getElementsByClassName("Search");
addToButton(button);
});

function addToButton(element){
	for(let i=0;i<element.length;i++){
		element[i].addEventListener("click",function (){
			let xhr=new XMLHttpRequest();
			xhr.open("GET","superheroes.php",true);
			xhr.onreadystatechange=function(){
				 if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					alert(xhr.responseText);
				 }
			};
			xhr.send();
			
		});
	}
	
}

	





	






