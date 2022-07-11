$(document).ready(function($) {
    
    var n = 0;
    $(".btn_right").click(function() {
        if(n > 3) {
            n = 0;
        } else {
            n++;
        }
        close_block(n);
	});
    $(".btn_left").click(function() {
        if(n > 0) n--;
        close_block(n);
	});

    $("#phone").mask("+7 (999) 999-99-99");

    $("input[type=radio]").click(function() {
        $(".proc").css({'opacity': 1, 'width': '33.3%'});
        $(".block_bottom p span").html('33.3%');
    });
    $("input[type=checkbox]").click(function() {
        let x = 0;
        $("input[type='checkbox']:checked").each(function() {
            x++;
        });
        if(x > 1) {
            $(".proc").css({'width': '66.6%'});
            $(".block_bottom p span").html('66.6%');
        } else {
            $(".proc").css({'width': '33.3%'});
            $(".block_bottom p span").html('33.3%');
        }
    });
    // console.log(x);
    function close_block(nnn) {
        switch(nnn) {
            case 1:
                let radioSelected = $("input[type=radio]:checked").val();
                if(radioSelected) {
                    console.log(radioSelected);
                    $("#block1").addClass("hide_class");
                    $("#block2").removeClass("hide_class");
                    $("#block3").addClass("hide_class");
                    $("#block4").addClass("hide_class");
                } else {
                    alert("Выберите вариант");
                    n = 0;
                }
                break;
            case 2:
                let checkboxSelected = [];
                $("input[type='checkbox']:checked").each(function() {
                    if($(this).val() !== "on") {
                        checkboxSelected.push( $(this).val() );
                    }
                });
                if(checkboxSelected.length !== 0) {
                    console.log(checkboxSelected);
                    $("#block1").addClass("hide_class");
                    $("#block2").addClass("hide_class");
                    $("#block3").removeClass("hide_class");
                    $("#block4").addClass("hide_class");
                } else {
                    alert("Выберите вариант");
                    n = 1;
                }
                break;
            case 3:
                let name = $("input[name='name']").val();
                let tel = $("input[name='tel']").val();
                let email = $("input[name='email']").val();
                if(!name) {
                    alert('Введите имя');
                    n = 2;
                } else if(!tel) {
                    alert('Введите телефон');
                    n = 2;
                } else if(!email) {
                    alert('Введите email');
                    n = 2;
                } else {
                    $("#block1").addClass("hide_class");
                    $("#block2").addClass("hide_class");
                    $("#block3").addClass("hide_class");
                    $("#block4").removeClass("hide_class");
                }
                break;
            case 0:
                $("#block1").removeClass("hide_class");
                $("#block2").addClass("hide_class");
                $("#block3").addClass("hide_class");
                $("#block4").addClass("hide_class");
        }
    }

    $(".cl-btn-1").click(function() {
        location.reload();
    });
});
