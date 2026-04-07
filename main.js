function login_input () {
    var username = (document.getElementById("input1").value);
    var password = (document.getElementById("input2").value);

    if(username === 'mrbeast67' && password === '12345678') {
        window.alert("Welcome, mrbeast67!");
    }

    else {
        window.alert('Your username and/or password is wrong.');
    }

}

function login_instructions(){
    window.alert('Please input your username and password in the corresponding text boxes. Please be aware of typos!');
}