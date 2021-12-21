
$("#myform").submit(function (e) {
    e.preventDefault();
    const data = {
        name: $("#name")[0].value,
        phone: $("#phone")[0].value,
        email: $("#email")[0].value,
        message: $("#message")[0].value
    }
    // console.log($("#name")[0].value);
    // console.log("fsjnsjdfn")
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/list',
        data: data
    });

    $("#name")[0].value = null;
    $("#phone")[0].value = null;
    $("#email")[0].value = null;
    $("#message")[0].value = null;

    toast._element.style.display="";
    toast.show()
    

    return false;
});


