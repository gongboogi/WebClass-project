function w3_open() {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideBar").style.display = "block";
}

function w3_close() {
    document.getElementById("sideBar").style.display = "none";
}


function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}


function login(){
           let id = document.getElementById("id").value;
           let pw = document.getElementById("pw").value;
           if(id==="admin"){
               if(pw=="1234"){
                   alert (id + "님 로그인되었습니다.")
                   document.getElementById("login").innerHTML="<h4>" + id + 
                      "님 반갑습니다! </h2>"; 
                    
                      document.getElementById("myPage").innerHTML= "<button style='margin-right: 10px;'>마이페이지</button>" 
                      + "<a href='./myproject.html'><button>내프로젝트</button></a>"
                      
               } else {
                   alert("비밀번호를 확인하세요.");
               }
           }else{
               alert("회원가입 하세요.");
           }
       }



var slideIndex = 1;
    showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
    }

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mainSlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
        x[slideIndex-1].style.display = "block";  
    }