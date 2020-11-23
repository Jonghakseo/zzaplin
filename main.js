let isZZaplinOn = true;

chrome.storage.sync.get("toggle", function (result) {
  if (result.toggle) {
    isZZaplinOn = true;
  } else {
    isZZaplinOn = false;
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(request);
  if (!request.toggle) {
    isZZaplinOn = false;
    clearAll();
    showDomGuidLine(false);
  } else if (request.toggle) {
    isZZaplinOn = true;
  }
  return true;
});

const body = $(document.body)[0];
// ! 보더들 생성해서 선언
const { bTop, bLeft, bRight, bBottom } = makeNormalBorders(body);
const { bpTop, bpLeft, bpRight, bpBottom } = makePaddingBorders(body);
const { bmTop, bmBottom, bmLeft, bmRight } = makeMarginBorders(body);

// ! 인포박스 생성 후 선언
const {
  infoBox,
  infoBoxTagName,
  infoBoxDistance,
  infoBoxSizes,
  infoBoxStyles,
} = makeInfobox(body);

// ! 두 번째 보더들 생성해서 선언
const { bsTop, bsRight, bsLeft, bsBottom } = makeNormalBordersSecond(body);
const { bpsTop, bpsBottom, bpsLeft, bpsRight } = makePaddingBordersSecond(body);
const { bmsBottom, bmsLeft, bmsRight, bmsTop } = makeMarginBordersSecond(body);

// ! 거리 재는 라인
const { ydLine, xdLine } = makeDistanceLine(body);

$(document).ready(function () {
  // ! 보더 높이 너비 초기화
  const adjustBorderSize = () => {
    $(".zLeft").css("height", $(document).height());
    $(".zRight").css("height", $(document).height());
    $(".zTop").css("width", $(document).width());
    $(".zBottom").css("width", $(document).width());
  };

  // ? 보더 사이즈 조정
  adjustBorderSize();

  // ? 리사이즈시에 보더 사이즈 조정
  $(window).resize(function () {
    // console.log(isZZaplinOn);
    adjustBorderSize();
  });

  // ! on / off 상태 보는 박스
  const onOffBox = $('<div id="onOffStatusBox"/>')[0];
  const onBox = () => $(onOffBox).css("opacity", "0.8");
  const offBox = () => $(onOffBox).css("opacity", "0");
  body.append(onOffBox);

  // ! 이벤트 연속 추가를 막기 위한 변수

  // ? 기본 기능 켜고 끄기
  let initZZaplin = false;
  let isOnDefault = false;
  $(window).keydown((e) => {
    if (e.keyCode === KEY_TOGGLE_FUNCTION && isZZaplinOn) {
      if (!isOnDefault) {
        initZZaplin = true;
        isOnDefault = true;
        onBox();
        $(body).on("mouseover", handleMouseOverOnDefault);
      }
    }
  });

  $(window).keyup((e) => {
    if (e.keyCode === KEY_TOGGLE_FUNCTION) {
      isOnDefault = false;
      offBox();
      $(body).off("mouseover", handleMouseOverOnDefault);
    }
  });

  // ? 두 번째 보더 기능 켜고 끄기
  let isOnSecond = false;
  let initZZaplinSecond = false;
  $(window).keydown((e) => {
    if (e.keyCode === KEY_TOGGLE_SECOND_FUNCTION && isZZaplinOn) {
      if (!isOnSecond) {
        initZZaplinSecond = true;
        isOnSecond = true;
        onBox();
        $(body).on("mousemove", handleMouseOverOnSecond);
      }
    }
  });

  $(window).keyup((e) => {
    if (e.keyCode === KEY_TOGGLE_SECOND_FUNCTION) {
      isOnSecond = false;
      offBox();
      $(body).off("mousemove", handleMouseOverOnSecond);
    }
  });

  // ? 보더, 인포박스 전체 제거
  $(window).keydown((e) => {
    if (e.keyCode === KEY_CLEAR && isZZaplinOn) {
      $(infoBoxDistance).empty();
      clearAll();
      initZZaplinSecond = false;
      initZZaplin = false;
    }
  });

  // ? div 가이드라인 토글
  let showGL = true;
  $(window).keydown((e) => {
    if (e.keyCode === KEY_TOGGLE_GUIDE_LINE && isZZaplinOn) {
      if (showGL) {
        showDomGuidLine(showGL);
        showGL = !showGL;
        togglePx(showGL);
      } else {
        showDomGuidLine(showGL);
        showGL = !showGL;
        togglePx(showGL);
      }
    }
  });

  let floatingInfoBox = true;
  // ? 인포박스 고정
  $(window).keydown((e) => {
    if (e.keyCode === KEY_FIX_INFO_BOX && isZZaplinOn) {
      if (floatingInfoBox) {
        floatingInfoBox = !floatingInfoBox;
        $(infoBox).addClass("fixed");
      } else {
        floatingInfoBox = !floatingInfoBox;
        $(infoBox).removeClass("fixed");
        $(infoBox).removeClass("hide");
      }
    }
  });

  let hideInfoBox = false;
  // ? 인포박스 가리기
  $(window).keydown((e) => {
    if (e.keyCode === KEY_HIDE_INFO_BOX && isZZaplinOn) {
      if (!hideInfoBox) {
        hideInfoBox = !hideInfoBox;
        $(infoBox).addClass("hide");
      } else {
        hideInfoBox = !hideInfoBox;
        $(infoBox).removeClass("hide");
      }
    }
  });

  // ? defualt 마우스 오버시 측정 시작
  const handleMouseOverOnDefault = (e) => {
    const target = e.target;
    // ! 짭플린 요소면 다 반응안함
    if (isZzaplin(target)) return;
    // ! 보더라인 지정
    const {
      width,
      height,
      targetTop,
      top,
      bottom,
      left,
      computedStyleArray,
    } = setBorderLines(target, MODE_DEFAULT);
    // ! 스타일 정보 배열로 가져오고 합침 -> 추가
    const inlineStyleArray = getStyleInfo(target);
    inlineStyleArray.push({ styleName: "----", styleValue: "----" });
    const styleArray = inlineStyleArray.concat(computedStyleArray);

    setInfoBox(target, height, width, styleArray);
    setInfoBoxPosition(e);
    getDistance();
  };

  // ? Second 마우스 오버시 측정 시작함
  const handleMouseOverOnSecond = (e) => {
    const target = e.target;
    // ! 짭플린 요소면 다 반응안함
    if (isZzaplin(target)) return;

    const {
      width,
      height,
      targetTop,
      top,
      bottom,
      left,
      computedStyleArray,
    } = setBorderLines(target, MODE_SECOND);
    // ! 스타일 정보 배열로 가져오고 합침 -> 추가
    const inlineStyleArray = getStyleInfo(target);
    inlineStyleArray.push({ styleName: "----", styleValue: "----" });
    const styleArray = inlineStyleArray.concat(computedStyleArray);
    setInfoBox(target, height, width, styleArray);
    setInfoBoxPosition(e);
    getDistance();
  };

  // ? 인포 박스 만들기
  const setInfoBox = (target, height, width, styleArray) => {
    // ! 태그 네임 추가
    $(infoBoxTagName).text(target.tagName);
    // ! 사이즈 정보 추가
    // ? 들어온 픽셀 단위 검사 후 문제 없으면 소수점 빼고 리턴
    height = height.toFixed(1).replace(".0", "");
    width = width.toFixed(1).replace(".0", "");
    const sizeText = `H: ${height}px\nW: ${width}px`;
    $(infoBoxSizes).text(sizeText);
    // ! 스타일 요소 비우고
    $(infoBoxStyles).empty();

    styleArray = makeShortHand(styleArray);

    styleArray.map(({ styleName, styleValue }) => {
      return $(infoBoxStyles).append(
        `<section class='zzaplin zInfoStyleRow'><div>${styleName}</div><div>${styleValue}</div></section>`
      );
    });
  };

  // ? 인포 박스 포지션 설정
  const setInfoBoxPosition = (e) => {
    const infoBox = $("#zInfoBox")[0];
    // ! 내용이 삽입됨 인포박스 높이 구함
    const infoBoxHeight = parseInt(
      $(infoBox).css("height").replace("px", ""),
      10
    );
    const infoBoxWidth = parseInt(
      $(infoBox).css("width").replace("px", ""),
      10
    );
    const { pageX, pageY } = e;
    const pointerMargin = 50;
    const infoBoxPadding = 40;
    const isInfoBoxUp =
      window.innerHeight - pageY < infoBoxHeight + pointerMargin;
    const isInfoBoxLeft =
      window.innerWidth - pageX < infoBoxWidth + pointerMargin;
    // 기본은 아래 오른쪽
    let pointerX;
    let pointerY;

    if (isInfoBoxUp) {
      pointerY = pageY - infoBoxHeight - pointerMargin - infoBoxPadding;
    } else {
      pointerY = pageY + pointerMargin;
    }
    if (isInfoBoxLeft) {
      pointerX = pageX - infoBoxWidth - pointerMargin - infoBoxPadding;
    } else {
      pointerX = pageX + pointerMargin;
    }

    $(infoBox).css("display", "flex");
    $(infoBox).css("left", pointerX);
    $(infoBox).css("top", pointerY);
  };

  // ? 거리 계산
  const getDistance = () => {
    if (initZZaplin && initZZaplinSecond) {
      $(infoBoxDistance).empty();
      const bTopPos = removeUnitPx($(bTop).css("top"));
      const bsBottomPos = removeUnitPx($(bsBottom).css("top"));
      const bBottomPos = removeUnitPx($(bBottom).css("top"));
      const bsTopPos = removeUnitPx($(bsTop).css("top"));
      const bsRightPos = removeUnitPx($(bsRight).css("left"));
      const bLeftPos = removeUnitPx($(bLeft).css("left"));
      const bRightPos = removeUnitPx($(bRight).css("left"));
      const bsLeftPos = removeUnitPx($(bsLeft).css("left"));

      // 1. 첫 번째보다 두 번째가 위일 경우
      // 첫번째 탑 보다 두 번째 바텀이 더 위
      let isSecondPosUp = bTopPos > bsBottomPos && bTopPos - bsBottomPos;
      // 2. 첫 번째보다 두 번째가 아래일 경우
      // 첫번째 바텀보다 두 번째 탑이 더 아래
      let isSecondPosDown = bsTopPos > bBottomPos && bsTopPos - bBottomPos;

      // 두 번째가 왼쪽에 있을 경우
      // 두 번째 아이템 오른쪽보다 첫 번째 아이템 왼쪽이 더 커야함
      let isSecondPosLeft = bLeftPos > bsRightPos && bLeftPos - bsRightPos;
      // 두 번째 아이템 왼쪽보다 첫 번째 아이템 오른쪽이 더 작아야함
      let isSecondPosRight = bsLeftPos > bRightPos && bsLeftPos - bRightPos;

      $(ydLine).css("display", `none`);
      $(xdLine).css("display", `none`);

      if (isSecondPosUp) {
        $(infoBoxDistance)
          .append($("<div>UP</div>"))
          .append($(`<div>${isSecondPosUp}px</div>`));
        $(ydLine).css("height", `${isSecondPosUp}px`);
        $(ydLine).css("display", `block`);
        $(ydLine).html(`<div class="zzaplin px dPx">${isSecondPosUp}px</div>`);
        $(bsBottom).append($(ydLine));
      }
      if (isSecondPosDown) {
        $(ydLine).css("height", `${isSecondPosDown}px`);
        $(ydLine).css("display", `block`);
        $(ydLine).html(
          `<div class="zzaplin px dPx">${isSecondPosDown}px</div>`
        );
        $(bBottom).append($(ydLine));
        $(infoBoxDistance)
          .append($("<div>DOWN</div>"))
          .append($(`<div>${isSecondPosDown}px</div>`));
      }
      const xdTop = isSecondPosUp
        ? bsTopPos + isSecondPosUp / 2
        : isSecondPosDown
        ? bTopPos + isSecondPosDown / 2
        : bsTopPos;

      if (isSecondPosLeft) {
        $(xdLine).css("top", `calc(${xdTop}px)`);
        $(xdLine).css("width", `${isSecondPosLeft}px`);
        $(xdLine).css("display", `block`);
        $(xdLine).html(
          `<div class="zzaplin px dPx">${isSecondPosLeft}px</div>`
        );
        $(bsRight).append($(xdLine));
        $(infoBoxDistance)
          .append($("<div>LEFT</div>"))
          .append($(`<div>${isSecondPosLeft}px</div>`));
      }
      if (isSecondPosRight) {
        $(xdLine).css("top", `calc(${xdTop}px)`);
        $(xdLine).css("width", `${isSecondPosRight}px`);
        $(xdLine).css("display", `block`);
        $(xdLine).html(
          `<div class="zzaplin px dPx">${isSecondPosRight}px</div>`
        );
        $(bRight).append($(xdLine));
        $(infoBoxDistance)
          .append($("<div>RIGHT</div>"))
          .append($(`<div>${isSecondPosRight}px</div>`));
      }
    }
  };
});
