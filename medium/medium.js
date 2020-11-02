var words = prompt ("Enter Text");

if( words === words.toUpperCase()){
    console.log("Shouting");
}

else if( words === words.toLowerCase()){
    console.log("Whispering");
}

else{
    console.log("Normal");
}

