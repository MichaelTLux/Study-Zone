function skimmerFuntion3() {
    var str = document.getElementById("frm1");
    var returning = " ";
    var i=0;
    var flag= true;


    //for the forward run put sentences in queue
    while (str.elements[0].value[i]!=null) {
    	if(flag==true){
    		//queue.enqueue(str.elements[0].value[i]);
    		returning += str.elements[0].value[i];
    	}
    	if(str.elements[0].value[i]=="."){
    		flag=false;
    	}
    	if(str.elements[0].value[i]=="\r" || str.elements[0].value[i]=="\n"){
    		flag=true;
    	}

       	i++;
    }
    document.getElementById("skimmer3").innerHTML = returning;
}


















