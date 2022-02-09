/* function submit() {
    var values1 = document.getElementById("pwd1");
    var values2 = document.getElementById("pwd2");
    if (values1.value != values2.value) {
        alert("false");
        pwd1.value = "";
pwd2.value = "";
        return false;
    }
    else document.forms[0].submit();


if(value1.length > 8)// 密碼長度需大於8位元 */


$(document).ready(function () {  /* 類似HTML BODY */
    let values1 = document.getElementById("pwd1").value;
    let values2 = document.getElementById("pwd2").value;
    $("#pwd1").keyup(function submit(){
        if (values1 === null || values1 === ""){
            $("#warring").text("密碼未填");
            return false  /* return false如果有錯誤就不往下執行 */
        } else if (values1.length < 8){
            $("#warring").text("密碼需8位元");
            return false 
        } else {
            $("#warring").text("");
        }
    });
    
    $("#pwd2").keyup(function submit(){
        if (values1 != values2 ) {
            
            $("#warring").text("密碼不一致");  /* alert("密碼不一致");不用alert不然會跳8次提示訊息很不友善 */ 
            console.log("密碼不一致");
            return false;
        }  



    });
});



    /* $("button").click(function submit() {

        let values1 = document.getElementById("pwd1").value;
        let values2 = document.getElementById("pwd2").value;
        
        if (values1){ 
           
    
        }
              
        
         $.post("https://www.townway.com.tw/auth", {
            username: $("username").val(),
            password: $("password").val(),

        }); 


    });



});
 */