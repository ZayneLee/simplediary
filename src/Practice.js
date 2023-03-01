// 콜백 함수 : 함수의 파라미터로 함수를 넘기는 것

function chekcMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // 기분 좋을 때
    goodCallback();
  } else {
    // 기분 안좋을 때
    badCallback();
  }
}

function cry() {
  console.log("ACTION :: CRY");
}

function sing() {
  console.log("ACTION :: SING");
}

function dance() {
  console.log("ACTION :: DANCE");
}

chekcMood("good", sing, cry);
