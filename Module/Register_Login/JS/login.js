$(document).ready(function() {
    //文本框失去焦点事件
    $("input").blur(function() {
        $(this).parent().find("span").remove();
        if ($(this).is("#username")) {
            if (this.value == "") {
                var show = $("<span class='error'>请输入账号</span>");
                $(this).parent().append(show);
            }
        }
        if ($(this).is("#password")) {
            if (this.value == "") {
                var show = $("<span class='error'>请输入密码</span>");
                $(this).parent().append(show);
            }
        }
    });
    //登录按钮单击事件
    $("#login").click(function() {
        $(".form-group>span").remove();
        var username = $("input[name='username']");
        var password = $("input[name='password']");
        var result = $(".drag-out").find("span").html();
        if (username.val() == "") {
            var show = $("<span class='error'>请输入账号</span>");
            username.parent().append(show);
            username.focus();
            return false;
        } else if (username.val() != "mingri") {
            var show = $("<span class='error'>账号不正确</span>");
            username.parent().append(show);
            return false;
        }
        if (password.val() == "") {
            var show = $("<span class='error'>请输入密码</span>");
            password.parent().append(show);
            password.focus();
            return false;
        } else if (password.val() != "mingrisoft") {
            var show = $("<span class='error'>密码不正确</span>");
            password.parent().append(show);
            return false;
        }
        if (result != "验证通过") {
            var show = $("<span class='error'>请拖动滑块</span>");
            $(".drag-out").after(show);
            return false;
        }
        //验证登录是否成功
        if (username.val() == "mingri" && password.val() == "mingrisoft" && result == "验证通过") {
            alert("登录成功");
        }
    });
});