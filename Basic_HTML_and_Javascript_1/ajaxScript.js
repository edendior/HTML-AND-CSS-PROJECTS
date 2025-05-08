function getMsg(){

    //STEP 1: setup the XML HTTP Request object

    let ajaxRequest = new XHLHttpRequest();

    //get input value of name to display to user after 
    //request has been made. 
    let inputVal = document.getElementById("fullName").ariaValueMax;

    //Function to display user input value once request 
    //has been received
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you" +
        inputVal + "for signing up!";

    }
    //STEP 2: Prepare teh type of request and what to 
    //request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //STEP 3: defines the AJAX response callback method that 
    //establishes whether the response was success 
    ajaxRequest.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML =
            ajaxRequest.responseText;
        }
    }
    //STEP 4: Send the request

    ajaxRequest.send
}