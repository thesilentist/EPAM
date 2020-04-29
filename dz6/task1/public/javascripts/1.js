const $form = $(".form");
const $submitButton = $(".form-submit");
const emailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

$form.on('input', function(event) {
    if (validateInput($(event.target)).success == true) {
        $(event.target).css('border','1px solid black');
        $(event.target).siblings('.hint').css("display","none");
    }
    else {
        $(event.target).css('border','1px solid red');
        $(event.target).siblings('.hint').css("display","block");
        $(event.target).siblings('.hint').text(validateInput($(event.target)).message);
    }
});

$submitButton.on('click', function (ev) {
    ev.preventDefault();
    sendUserData();
});

function sendUserData() {
    let allFieldsProperlyFilled = true;
    $('input').each( function () {
        if (validateInput($(this)).success == false) {
            allFieldsProperlyFilled = false;
        }
    });

    if (allFieldsProperlyFilled == false) {
        alert("You can't send POST request. Fill all the fields properly before");
    } else {
        const requestData = { "name" : $('.form-name__input').val(),"email":$('.form-email__input').val(),"message":$('.form-message__input').val()}
        console.log(JSON.stringify(requestData));
        $.ajax({
            url: "http://postman-echo.com/post",
            data: JSON.stringify(requestData),
            type: "post",
            dataType: "jsonp",
            contentType: "application/x-www-form-urlencoded",
            success: (result, reqStatus) => {
                console.log(result);
            },
            error: (xhr, reqStatus, error) => {
                console.log(reqStatus, error);
            }
        })
    }
}

function validateInput(element) {
    if (element.attr('data-validate') == 'email') {
        return validateEmail(element);
    } else if (element.attr('data-validate') == 'text') {
        return validateText(element);
    } else {
        return { success : true, message : ''};
    }
}

function validateEmail(element) {
    if (element.val().length == 0) { 
        return { success: false, message : 'This field must not be empty'}
    } else {
        if (emailPattern.test(element.val())) {
            return { success : true, message : ''}
        } else {
            return {success : false, message: 'Email is not valid'}
        }
    }
}

function validateText(element) {
    if (element.attr('data-minlength') == undefined) {
        return { success : true, message : ''}
    } else {
        if (element.val().length >= element.attr('data-minlength')) {
            return { success : true, message : ''}
        } else {
            return { success : false, message : `You must enter minimum ${element.attr('data-minlength')} characters`};
        }
    }
}