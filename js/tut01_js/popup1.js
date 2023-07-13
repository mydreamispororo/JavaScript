function register() {
    if( confirm('회원가입을 하시겠습니까?')) {
        location.href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/";
    }
}

//delete from member where id = ?;
function memberDelete(id) {
    if(confirm(id + '번 사원의 정보를 정말 삭제하시겠습니까?\n삭제하신 정보는 복구할 수 없습니다.')) {
        //delete from member where id = ?;
        location.href = "https://daum.net";
    }
}
