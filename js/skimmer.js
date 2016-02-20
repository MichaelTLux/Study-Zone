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
    var string2 = document.getElementById("frm1");
    var string=
    var returning = " ";
    var i;
    var stack= new Stack();
    var queue= new Queue();
    var flag= false;
    //for the forward run put sentences in queue
    for (i = 0; i < string.length ;i++) {
        if (string.charAt(i) ===' '){
        	window.alert("it worked")
    	}
       	returning += string.elements[i].value + "<br>";
    }
    //for backward run put things in a stack
    var j;
    for (j = string.length; j >= 0 ;j--) {

    }
    document.getElementById("skimmer").innerHTML = returning;
}


















