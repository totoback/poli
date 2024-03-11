const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //질문 전체 확인
  const btn = question.querySelector(".question-btn");

  //버튼이 클릭되었을 때, 현재 클릭된 질문 요소를 제외한 나머지 질문 요소들에 대해 클래스를 제거
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});