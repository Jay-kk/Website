$(document).ready(function() {
    //文本失去焦点事件
    $("form :input[type!='checkbox']").blur(function() {
        $(this).parent().find("span").remove();
        if ($(this).is("#name")) {
            if (this.value == "") {
                var show = $("<sapn class='error'>用户名不能为空</span>");
                $(this).parent().append(show);
            } else if (this.value.length < 3) {
                var show = $("<span class='error'>用户名不能小于3位</span>");
                $(this).parent().append(show);
            } else {
                var show = $("<span class='right'>正确</span>");
                $(this).parent().append(show);
            }
        }
        $(this).parent().find("span").remove();
        if ($(this).is("#passsword")) {
            if (this.value == "") {
                var show = $("<sapn class='error'>密码不能为空</span>");
                $(this).parent().append(show);
            } else if (this.value.length < 6) {
                var show = $("<span class='error'>密码不能小于6位</span>");
                $(this).parent().append(show);
            } else {
                var show = $("<span class='right'>正确</span>");
                $(this).parent().append(show);
            }
        }
        if ($(this).is("#passwords")) {
            if (this.value == "") {
                var show = $("<sapn class='error'>请再次输入密码</span>");
                $(this).parent().append(show);
            } else if (this.value != $("#password").val()) {
                var show = $("<span class='error'>两次密码输入不一致</span>");
                $(this).parent().append(show);
            } else {
                var show = $("<span class='right'>正确</span>");
                $(this).parent().append(show);
            }
        }
    });
    //复选框单击事件
    $("form:checkbox").click(function() {
        if (!$(this).prop('checked')) {
            var show = $("<span class='error'>请同意协议</span>");
            $(this).parent().append(show);
        } else {
            $(this).parent().find("span").remove();
        }
    });
    //注册按钮单击事件
    $("#spen").click(function() {
        $("input").trigger("blur");
        if ($(".error").length) {
            return false;
        } else {
            alert("注册成功！");
        }
    });
});

//滑块
var dragFun = function() {
    var maxWidth;
    var move = false;
    var leftArae;
    var dragOut = $(".drag-out");
    var dragArea = $(".drag-out .drag-area");
    var dragCode = $(".drag-out .drag-code");
    //鼠标按下事件
    dragArea.mousedown(function() {
            move = true;
            maxWidth = dragOut.width() - dragArea.width();
            leftArae = parseInt(dragOut.offset().left);
        })
        //鼠标拖动事件
    $(document).mousemove(function(e) {
            movePx = e.pageX - leftArae;
            if (move == true) {
                if (movePx > 0 && movePx <= maxWidth) {
                    dragArea.css({ "left": movePx });
                    dragCode.css({ "width": movePx });
                } else if (movePx > maxWidth) {
                    dragArea.unbind("mousedown");
                    $(document).unbind("mousemove");
                    $(document).unbind("mouseup");
                    dragOut.find("span").html("验证通过").css({ "color": "#fff" });
                    dragArea.html("");
                    dragArea.css("background", "url(images/ok.gif) no-repeat center");
                }
            }
        })
        //鼠标松开事件
    $(document).mouseup(function() {
        if (move == true) {
            move = false;
            if (maxWidth > movePx) {
                dragArea.css({ "left": 0 });
                dragCode.css({ "width": 0 });
            }
        }
    })
}
$(function() {
    dragFun();
})