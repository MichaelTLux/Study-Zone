function Stack() {
    this._size = 0;
    this._storage = {};
}
 
Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};
 
Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};

function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
 
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
};

function myFunction2() {
    var str = document.getElementById("frm1");
    var returning = " ";
    var i=0;
    var stack= new Stack();
    var queue= new Queue();
    var flag= false;


    //for the forward run put sentences in queue
    while (str.elements[0].value[i]!=null) {
    	
    	if(str.elements[0].value[i]=="."){
    		flag=false;
    	}
    	if(str.elements[0].value[i]=="\r" || str.elements[0].value[i]=="\n"){
    		flag=true;
    	}
    	if(flag==true){
    		//queue.enqueue(str.elements[0].value[i]);
    		returning += str.elements[0].value[i];
    	}
       	i++;
    }
    var j=i;
    i--;
    flag=false;

    //for backward run put things in a stack
    while (str.elements[0].value[i]!=null){
    	if(str.elements[0].value[i]=="."){
    		flag=false;
    	}
    	if(str.elements[0].value[i]=="\r" || str.elements[0].value[i]=="\n"){
    		flag=true;
    		i--;
    	}
    	if(flag==true){
    		//stack.push(str.elements[0].value[i]);
    		returning += str.elements[0].value[i];
    	}
    	i--;
    }
 //   while (queue.size>=0 || stack.size>=0)
 //   {
 //   	returning=returning+queue.dequeue()+stack.pop();
 //   	returning += str.elements[i].value;
 //   	document.write("you made it");
 //   }
    document.getElementById("skimmer").innerHTML = returning;
}


















