 function passwordChanged() {
        var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        var pwd = document.getElementById("password");
        if (pwd.value.length == 0) {
           
        } else if (false == enoughRegex.test(pwd.value)) {
            document.getElementById("b").style.background-color="red";

        } else if (strongRegex.test(pwd.value)) {
            
            document.getElementById("c").style.background-color="red";
        } else if (mediumRegex.test(pwd.value)) {
           
            document.getElementById("d").style.background-color="red";
        } else {
           
        }
    }