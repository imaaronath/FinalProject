$(function() {
    $("#username_error_message").hide();
    $("#password_error_message").hide();
    $("#roleID_error_message").hide();

    var error_username = false;
    var error_password = false;
    var error_roleID = false;

    $("#from_username").focusout(function()
    {
        check_username();
    });
    $("#from_passwrod").focusout(function()
    {
        check_username();
    });
    $("#from_roleID").focusout(function()
    {
        check_username();
    });

    function check_username()
    {
        var username = new ReqExp(/^[+a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/i);

        if(username.test($("#form_username").val())){
            $("#username_error_message").hide();
        }
        else{
            $("#username_error_message").html("Invalid email address");
            $("#username_error_message").show();
            error_username = true;
        }
    }

    function check_password()
    {
        var password_length = $("#form_password").val().length;
        
        if(password_length <12){
            $("#password_error_message").html("At least 12 characters");
            $("#password_error_message").show();
            error_password = true;
        }
        else {
            $("#password_error_message").hide();
        }
    }
});
