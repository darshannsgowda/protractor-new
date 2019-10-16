
var randomtext = function(){
    

    this.random = function(){
        let text =  Math.random().toString(36).substring(2, 15);
        console.log(text);
    }
   
}


