
function handleJoin() {
    // 요소 가져오기 (+ 공백 제거(trim으로))
    const userId = document.querySelector("input[name=userId]").value.trim();
    const userPw = document.querySelector("input[name=userPw]").value.trim();
    const userPw2 = document.querySelector("input[name=userPw2]").value.trim();
    const userNick = document.querySelector("input[name=userNick]").value.trim();

    //1. 검증
    //1.1 id (소문자 및 숫자 허용, 4~8글자)
    const idOk = /^[a-z0-9]{4,8}$/.test(userId);
    if (!idOk) {
        alert("[ERROR!] 아이디를 확인하세요~!!")
        return false;
    }
    //1.2 pw (숫자만 허용, 4~8글자)
    const pwOk1 = /^[0-9]{4,8}$/.test(userPw);
    const pwOk2 = userPw === userPw2;
    const pwOk = pwOk1 && pwOk2;
    if (!pwOk) {
        alert("[ERROR!] 비번 확인하세요~!!")
        return false;
    }
    //1.3 nick (한글만, 2~4글자)
    const nickOk = /^[가-힣]{2,4}$/.test(userNick);
    if (!nickOk) {
        alert("[ERROR!] 닉네임 확인하세요~!!")
        return false;
    }







}