var index0 = 0;
var index1 = 0;
var index2 = 0;
var clickCount = 0;
var array = new Array();

function rand1() { // 첫번째 자리 난수 발생 함수
  if (index0 != 1) { // 난수 발생한 적이 없을 때
    var span = document.getElementById("num1");
    var num = Math.random() * 3;
    var result = Math.floor(num);
    span.innerHTML = result;
    array[0] = result;

    clickCount++;
    index0 = 1; // 1회 끝

    if (clickCount == 3) {
      var standardNum = array[0];
      var win = 1; // 1이면 게임 성공

      for (var i = 1; i < 3; i++) {
        if (array[i] != standardNum) {
          win = 0; // 0이면 게임 실패
          break;
        }
      }

      var obj = document.getElementById("result");
      if (win == 1) {
        obj.innerHTML = "Success(click here to do again)"
      } else {
        obj.innerHTML = "fail(click here to do again)"
      }
    }
  }
}
function rand2() { // 두번째 자리 난수 발생 함수
  if (index1 != 1) { // 난수 발생한 적이 없으면
    var span = document.getElementById("num2");
    var num = Math.random() * 3;
    var result = Math.floor(num);
    span.innerHTML = result;
    array[1] = result;

    clickCount++;
    index1 = 1; // 1회 끝

    if (clickCount == 3) {
      var standardNum = array[0];
      var win = 1; // 1이면 게임 성공

      for (var i = 1; i < 3; i++) {
        if (array[i] != standardNum) {
          win = 0; // 0이면 게임 실패
          break;
        }
      }

      var obj = document.getElementById("result");
      if (win == 1) {
        obj.innerHTML = "Success(click here to do again)"
      } else {
        obj.innerHTML = "fail(click here to do again)"
      }
    }
  }
}
function rand3() { // 세번째 자리 난수 발생 함수
  if (index2 != 1) { // 난수 발생한 적이 없을 때
    var span = document.getElementById("num3");
    var num = Math.random() * 3;
    var result = Math.floor(num);
    span.innerHTML = result;
    array[2] = result;

    clickCount++;
    index2 = 1; // 1회 끝

    if (clickCount == 3) {
      var standardNum = array[0];
      var win = 1; // 1이면 게임 성공

      for (var i = 1; i < 3; i++) {
        if (array[i] != standardNum) {
          win = 0; // 0이면 게임 실패
          break;
        }
      }

      var obj = document.getElementById("result");
      if (win == 1) {
        obj.innerHTML = "Success(click here to do again)"
      } else {
        obj.innerHTML = "fail(click here to do again)"
      }
    }
  }
}

function restart() {
  location.reload(); // 다시 불러오기
}