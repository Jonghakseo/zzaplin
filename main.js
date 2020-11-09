// ! 키 정의
const KEY_TOGGLE_FUNCTION = "z" || "Z" || "ㅋ";
const KEY_TOGGLE_SECOND_FUNCTION = "x" || "X" || "ㅌ";
const KEY_CLEAR = "c" || "C" || "ㅊ";
const KEY_FIX_INFO_BOX = "h" || "H" || "ㅗ";
const KEY_HIDE_INFO_BOX = "v" || "V" || "ㅍ";
const KEY_TOGGLE_PX = "b" || "B" || "ㅠ";

const MODE_DEFAULT = "default";
const MODE_SECOND = "second";

// ! 무시할 밸류들
const ignoreValues = [0, "0", "0px", "none", "initial", undefined, null];

// ! 찾을 스타일 밸류들( 추가해야 함 )
const styleValues = [
  "border",
  "borderRadius",
  "fontSize",
  "lineHeight",
  "color",
  "backgroundColor",
  "paddingTop",
  "paddingLeft",
  "paddingRight",
  "paddingBottom",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
];

// ! 패딩, 마진 값이 없을 경우
const NONE = "0px";

const makeNormalBorders = (body) => {
  // ? 기본 패딩영역 포함한 보더라인
  const makeBorder = (id, cls) => {
    return `<div id=${id} class='zzaplin normalBorder ${cls}'></div>`;
  };
  const bTop = $(makeBorder("bTop", "zTop"))[0];
  const bBottom = $(makeBorder("bBottom", "zBottom"))[0];
  const bLeft = $(makeBorder("bLeft", "zLeft"))[0];
  const bRight = $(makeBorder("bRight", "zRight"))[0];

  body.append(bTop);
  body.append(bBottom);
  body.append(bLeft);
  body.append(bRight);

  return { bTop, bBottom, bLeft, bRight };
};

const makeNormalBordersSecond = (body) => {
  const makeBorder = (id, cls) => {
    return `<div id=${id} class='zzaplin normalBorderSecond ${cls}'></div>`;
  };
  const bsTop = $(makeBorder("bsTop", "zTop"))[0];
  const bsBottom = $(makeBorder("bsBottom", "zBottom"))[0];
  const bsLeft = $(makeBorder("bsLeft", "zLeft"))[0];
  const bsRight = $(makeBorder("bsRight", "zRight"))[0];

  body.append(bsTop);
  body.append(bsBottom);
  body.append(bsLeft);
  body.append(bsRight);

  return { bsTop, bsBottom, bsLeft, bsRight };
};

const makePaddingBorders = (body) => {
  // ? 패딩 영역을 보여주기 위한 보더라인
  const makePaddingBorder = (id, cls) => {
    return `<div id=${id} class='zzaplin paddingBorder ${cls}'></div>`;
  };
  const bpTop = $(makePaddingBorder("bpTop", "zTop"))[0];
  const bpBottom = $(makePaddingBorder("bpBottom", "zBottom"))[0];
  const bpLeft = $(makePaddingBorder("bpLeft", "zLeft"))[0];
  const bpRight = $(makePaddingBorder("bpRight", "zRight"))[0];

  body.append(bpTop);
  body.append(bpBottom);
  body.append(bpLeft);
  body.append(bpRight);

  return { bpTop, bpBottom, bpLeft, bpRight };
};

const makePaddingBordersSecond = (body) => {
  // ? 패딩 영역을 보여주기 위한 보더라인
  const makePaddingBorder = (id, cls) => {
    return `<div id=${id} class='zzaplin paddingBorderSecond ${cls}'></div>`;
  };
  const bpsTop = $(makePaddingBorder("bpsTop", "zTop"))[0];
  const bpsBottom = $(makePaddingBorder("bpsBottom", "zBottom"))[0];
  const bpsLeft = $(makePaddingBorder("bpsLeft", "zLeft"))[0];
  const bpsRight = $(makePaddingBorder("bpsRight", "zRight"))[0];

  body.append(bpsTop);
  body.append(bpsBottom);
  body.append(bpsLeft);
  body.append(bpsRight);

  return { bpsTop, bpsBottom, bpsLeft, bpsRight };
};

const makeMakrginBorders = (body) => {
  // ? 마진 영역을 보여주기 위한 보더라인
  const makeMarginBorder = (id, cls) => {
    return `<div id=${id} class='zzaplin marginBorder ${cls}'></div>`;
  };
  const bmTop = $(makeMarginBorder("bmTop", "zTop"))[0];
  const bmBottom = $(makeMarginBorder("bmBottom", "zBottom"))[0];
  const bmLeft = $(makeMarginBorder("bmLeft", "zLeft"))[0];
  const bmRight = $(makeMarginBorder("bmRight", "zRight"))[0];

  body.append(bmTop);
  body.append(bmBottom);
  body.append(bmLeft);
  body.append(bmRight);

  return { bmTop, bmBottom, bmLeft, bmRight };
};

const makeMakrginBordersSecond = (body) => {
  // ? 마진 영역을 보여주기 위한 보더라인
  const makeMarginBorder = (id, cls) => {
    return `<div id=${id} class='zzaplin marginBorderSecond ${cls}'></div>`;
  };
  const bmsTop = $(makeMarginBorder("bmsTop", "zTop"))[0];
  const bmsBottom = $(makeMarginBorder("bmsBottom", "zBottom"))[0];
  const bmsLeft = $(makeMarginBorder("bmsLeft", "zLeft"))[0];
  const bmsRight = $(makeMarginBorder("bmsRight", "zRight"))[0];

  body.append(bmsTop);
  body.append(bmsBottom);
  body.append(bmsLeft);
  body.append(bmsRight);

  return { bmsTop, bmsBottom, bmsLeft, bmsRight };
};

// ? 인포박스 생성
const makeInfobox = (body) => {
  const infoBox = $('<div id="zInfoBox" class="zzaplin"></div>')[0];
  const infoBoxHeader = $('<section id="infoBoxHeader"></section>')[0];
  const infoBoxDistance = $('<section id="infoBoxDistance"></section>')[0];
  const infoBoxTagName = $('<div id="infoBoxTagName"></div>')[0];
  const infoBoxSizes = $('<div id="infoBoxSizes"></div>')[0];
  const infoBoxStyles = $('<div id="infoBoxStyles"></div>')[0];
  $(infoBox)
    .append($(infoBoxHeader))
    .append($(infoBoxDistance))
    .append($(infoBoxStyles));
  $(infoBoxHeader).append($(infoBoxTagName)).append($(infoBoxSizes));
  // 인포박스 추가
  body.append(infoBox);
  return {
    infoBox,
    infoBoxHeader,
    infoBoxDistance,
    infoBoxTagName,
    infoBoxSizes,
    infoBoxStyles,
  };
};

// default랑 SECOND랑 거리 재는 라인
const makeDistanceLine = (body) => {
  const ydLine = $('<div id="ydLine" class="zzaplin zLeft"></div>')[0];
  const xdLine = $('<div id="xdLine" class="zzaplin zTop"></div>')[0];
  body.append(ydLine, xdLine);
  return { ydLine, xdLine };
};

window.onload = function () {
  const body = $(document.body)[0];
  // ! 보더들 생성해서 선언
  const { bTop, bLeft, bRight, bBottom } = makeNormalBorders(body);
  const { bpTop, bpLeft, bpRight, bpBottom } = makePaddingBorders(body);
  const { bmTop, bmBottom, bmLeft, bmRight } = makeMakrginBorders(body);

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
  const { bpsTop, bpsBottom, bpsLeft, bpsRight } = makePaddingBordersSecond(
    body
  );
  const { bmsBottom, bmsLeft, bmsRight, bmsTop } = makeMakrginBordersSecond(
    body
  );

  // ! 거리 재는 라인
  const { ydLine, xdLine } = makeDistanceLine(body);

  // ! 보더 높이 너비 초기화
  $(".zLeft").css("height", $(document).height());
  $(".zRight").css("height", $(document).height());
  $(".zTop").css("width", $(document).width());
  $(".zBottom").css("width", $(document).width());

  // ! 이벤트 연속 추가를 막기 위한 변수

  // ? 기본 기능 켜고 끄기
  let initZZaplin = false;
  let isOnDefault = false;
  $(document).keydown((e) => {
    if (e.key === KEY_TOGGLE_FUNCTION) {
      if (!isOnDefault) {
        initZZaplin = true;
        isOnDefault = true;
        $(body).on("mouseover", handleMouseOverOnDefault);
      }
    }
  });

  $(document).keyup((e) => {
    if (e.key === KEY_TOGGLE_FUNCTION) {
      isOnDefault = false;
      $(body).off("mouseover", handleMouseOverOnDefault);
    }
  });

  // ? 두 번째 보더 기능 켜고 끄기
  let isOnSecond = false;
  let initZZaplinSecond = false;
  $(document).keydown((e) => {
    if (e.key === KEY_TOGGLE_SECOND_FUNCTION) {
      if (!isOnSecond) {
        initZZaplinSecond = true;
        isOnSecond = true;
        $(body).on("mousemove", handleMouseOverOnSecond);
      }
    }
  });

  $(document).keyup((e) => {
    if (e.key === KEY_TOGGLE_SECOND_FUNCTION) {
      isOnSecond = false;
      $(body).off("mousemove", handleMouseOverOnSecond);
    }
  });

  // ? 보더, 인포박스 전체 제거
  $(document).keydown((e) => {
    if (e.key === KEY_CLEAR) {
      $(infoBoxDistance).empty();
      clearAll();
      initZZaplinSecond = false;
      initZZaplin = false;
    }
  });

  // ? px 토글
  let showPx = true;
  $(document).keydown((e) => {
    if (e.key === KEY_TOGGLE_PX) {
      if (showPx) {
        showPx = !showPx;
        togglePx(showPx);
      } else {
        showPx = !showPx;
        togglePx(showPx);
      }
    }
  });

  let floatingInfoBox = true;
  // ? 인포박스 고정
  $(document).keydown((e) => {
    if (e.key === KEY_FIX_INFO_BOX) {
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
  $(document).keydown((e) => {
    if (e.key === KEY_HIDE_INFO_BOX) {
      if (!hideInfoBox) {
        hideInfoBox = !hideInfoBox;
        $(infoBox).addClass("hide");
      } else {
        hideInfoBox = !hideInfoBox;
        $(infoBox).removeClass("hide");
      }
    }
  });

  // ? default 모드에서 기본 보더 생성
  const setNormalBorderDefault = (top, left, right, bottom) => {
    $(bTop).css("top", `calc(${top}px)`);
    $(bLeft).css("left", `calc(${left}px)`);
    $(bRight).css("left", `calc(${right}px)`);
    $(bBottom).css("top", `calc(${bottom}px)`);
    $(".normalBorder").css("display", "block");
  };

  // ? default 모드에서 패딩 보더 생성
  const setPaddingBorderDefault = (
    top,
    left,
    right,
    bottom,
    height,
    width,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  ) => {
    const paddingBorders = $(".paddingBorder");
    paddingBorders.css("display", "none");
    paddingBorders.empty();

    if (paddingTop !== NONE) {
      $(bpTop).css("top", `calc(${top}px + ${paddingTop})`);
      $(bpTop).css("display", "block");
      $(bpTop).css("width", `${width}px`);
      $(bpTop).css("left", `${left}px`);
      $(bpTop).html(`<div class="zzaplin px">${paddingTop}</div>`);
    }

    if (paddingBottom !== NONE) {
      $(bpBottom).css("top", `calc(${bottom}px - ${paddingBottom})`);
      $(bpBottom).css("display", "block");
      $(bpBottom).css("width", `${width}px`);
      $(bpBottom).css("left", `${left}px`);
      $(bpBottom).html(`<div class="zzaplin px">${paddingBottom}</div>`);
    }

    if (paddingLeft !== NONE) {
      $(bpLeft).css("left", `calc(${left}px + ${paddingLeft})`);
      $(bpLeft).css("display", "block");
      $(bpLeft).css("height", `${height}px`);
      $(bpLeft).css("top", `${top}px`);
      $(bpLeft).html(`<div class="zzaplin px">${paddingLeft}</div>`);
    }

    if (paddingRight !== NONE) {
      $(bpRight).css("left", `calc(${right}px - ${paddingRight})`);
      $(bpRight).css("display", "block");
      $(bpRight).css("height", `${height}px`);
      $(bpRight).css("top", `${top}px`);
      $(bpRight).html(`<div class="zzaplin px">${paddingRight}</div>`);
    }
  };

  // ? default 모드에서 마진 보더 생성
  const setMarginBorderDefault = (
    top,
    left,
    right,
    bottom,
    height,
    width,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
  ) => {
    const marginBorders = $(".marginBorder");
    marginBorders.css("display", "none");
    marginBorders.empty();

    if (marginTop !== NONE) {
      $(bmTop).css("top", `calc(${top}px - ${marginTop})`);
      $(bmTop).css("display", "block");
      $(bmTop).css("width", `${width}px`);
      $(bmTop).css("left", `${left}px`);
      $(bmTop).html(`<div class="zzaplin px">${marginTop}</div>`);
    }
    if (marginBottom !== NONE) {
      $(bmBottom).css("top", `calc(${bottom}px + ${marginBottom})`);
      $(bmBottom).css("display", "block");
      $(bmBottom).css("width", `${width}px`);
      $(bmBottom).css("left", `${left}px`);
      $(bmBottom).html(`<div class="zzaplin px">${marginBottom}</div>`);
    }
    if (marginLeft !== NONE) {
      $(bmLeft).css("left", `calc(${left}px - ${marginLeft})`);
      $(bmLeft).css("display", "block");
      $(bmLeft).css("height", `${height}px`);
      $(bmLeft).css("top", `${top}px`);
      $(bmLeft).html(`<div class="zzaplin px">${marginLeft}</div>`);
    }
    if (marginRight !== NONE) {
      $(bmRight).css("left", `calc(${right}px + ${marginRight})`);
      $(bmRight).css("display", "block");
      $(bmRight).css("height", `${height}px`);
      $(bmRight).css("top", `${top}px`);
      $(bmRight).html(`<div class="zzaplin px">${marginRight}</div>`);
    }
  };

  // ? Second 모드에서 기본 보더 생성
  const setNormalBorderSecond = (top, left, right, bottom) => {
    $(bsTop).css("top", `calc(${top}px)`);
    $(bsLeft).css("left", `calc(${left}px)`);
    $(bsRight).css("left", `calc(${right}px)`);
    $(bsBottom).css("top", `calc(${bottom}px)`);
    $(".normalBorderSecond").css("display", "block");
  };

  // ? Second 모드에서 패딩 보더 생성
  const setPaddingBorderSecond = (
    top,
    left,
    right,
    bottom,
    height,
    width,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  ) => {
    const paddingBorders = $(".paddingBorderSecond");
    paddingBorders.css("display", "none");
    paddingBorders.empty();

    if (paddingTop !== NONE) {
      $(bpsTop).css("top", `calc(${top}px + ${paddingTop})`);
      $(bpsTop).css("display", "block");
      $(bpsTop).css("width", `${width}px`);
      $(bpsTop).css("left", `${left}px`);
      $(bpsTop).html(`<div class="zzaplin px">${paddingTop}</div>`);
    }

    if (paddingBottom !== NONE) {
      $(bpsBottom).css("top", `calc(${bottom}px - ${paddingBottom})`);
      $(bpsBottom).css("display", "block");
      $(bpsBottom).css("width", `${width}px`);
      $(bpsBottom).css("left", `${left}px`);
      $(bpsBottom).html(`<div class="zzaplin px">${paddingBottom}</div>`);
    }

    if (paddingLeft !== NONE) {
      $(bpsLeft).css("left", `calc(${left}px + ${paddingLeft})`);
      $(bpsLeft).css("display", "block");
      $(bpsLeft).css("height", `${height}px`);
      $(bpsLeft).css("top", `${top}px`);
      $(bpsLeft).html(`<div class="zzaplin px">${paddingLeft}</div>`);
    }

    if (paddingRight !== NONE) {
      $(bpsRight).css("left", `calc(${right}px - ${paddingRight})`);
      $(bpsRight).css("display", "block");
      $(bpsRight).css("height", `${height}px`);
      $(bpsRight).css("top", `${top}px`);
      $(bpsRight).html(`<div class="zzaplin px">${paddingRight}</div>`);
    }
  };

  // ? Second 모드에서 마진 보더 생성
  const setMarginBorderSecond = (
    top,
    left,
    right,
    bottom,
    height,
    width,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
  ) => {
    const marginBorders = $(".marginBorderSecond");
    marginBorders.css("display", "none");
    marginBorders.empty();

    if (marginTop !== NONE) {
      $(bmsTop).css("top", `calc(${top}px - ${marginTop})`);
      $(bmsTop).css("display", "block");
      $(bmsTop).css("width", `${width}px`);
      $(bmsTop).css("left", `${left}px`);
      $(bmsTop).html(`<div class="zzaplin px">${marginTop}</div>`);
    }
    if (marginBottom !== NONE) {
      $(bmsBottom).css("top", `calc(${bottom}px + ${marginBottom})`);
      $(bmsBottom).css("display", "block");
      $(bmsBottom).css("width", `${width}px`);
      $(bmsBottom).css("left", `${left}px`);
      $(bmsBottom).html(`<div class="zzaplin px">${marginBottom}</div>`);
    }
    if (marginLeft !== NONE) {
      $(bmsLeft).css("left", `calc(${left}px - ${marginLeft})`);
      $(bmsLeft).css("display", "block");
      $(bmsLeft).css("height", `${height}px`);
      $(bmsLeft).css("top", `${top}px`);
      $(bmsLeft).html(`<div class="zzaplin px">${marginLeft}</div>`);
    }
    if (marginRight !== NONE) {
      $(bmsRight).css("left", `calc(${right}px + ${marginRight})`);
      $(bmsRight).css("display", "block");
      $(bmsRight).css("height", `${height}px`);
      $(bmsRight).css("top", `${top}px`);
      $(bmsRight).html(`<div class="zzaplin px">${marginRight}</div>`);
    }
  };

  // ?보더라인 설정, 요소 크기 반환
  const setBorderLines = (e, mode) => {
    let {
      width,
      height,
      top: targetTop,
      bottom,
      left,
      right,
    } = e.getBoundingClientRect();
    let computedStyle = window.getComputedStyle(e);
    let {
      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
    } = computedStyle;

    const computedStyleArray = [];
    styleValues.map((styleName) => {
      const styleValue = computedStyle[styleName] && computedStyle[styleName];
      if (styleValue && !ignoreValues.includes(styleValue)) {
        computedStyleArray.push({ styleName, styleValue });
      }
    });

    let top = targetTop + window.scrollY;
    left += window.scrollX;
    right += window.scrollX;
    bottom += window.scrollY;

    if (mode === MODE_DEFAULT) {
      setNormalBorderDefault(top, left, right, bottom);
      setPaddingBorderDefault(
        top,
        left,
        right,
        bottom,
        height,
        width,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
      );
      setMarginBorderDefault(
        top,
        left,
        right,
        bottom,
        height,
        width,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight
      );

      return {
        width,
        height,
        targetTop,
        top,
        bottom,
        left,
        right,
        computedStyleArray,
      };
    } else {
      setNormalBorderSecond(top, left, right, bottom);
      setPaddingBorderSecond(
        top,
        left,
        right,
        bottom,
        height,
        width,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
      );
      setMarginBorderSecond(
        top,
        left,
        right,
        bottom,
        height,
        width,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight
      );

      return {
        width,
        height,
        targetTop,
        top,
        bottom,
        left,
        right,
        computedStyleArray,
      };
    }
  };

  // ? 스타일 정보 배열로 가져옴
  const getStyleInfo = (e) => {
    const style = e.style;
    const cssItemLength = style.length;
    const styleArray = [];
    [...Array(cssItemLength)].map((v, i) => {
      const styleName = style.item(i);
      const styleValue = style[styleName];
      if (styleValue && !ignoreValues.includes(styleValue)) {
        styleArray.push({ styleName, styleValue });
      }
    });
    return styleArray;
  };

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
    const styleArray = computedStyleArray.concat(inlineStyleArray);

    makeInfoBox(target, height, width, styleArray);
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
    const styleArray = computedStyleArray.concat(inlineStyleArray);
    makeInfoBox(target, height, width, styleArray);
    setInfoBoxPosition(e);
    getDistance();
  };

  // ? 인포박스 만들기
  const makeInfoBox = (target, height, width, styleArray) => {
    // ! 태그 네임 추가
    $(infoBoxTagName).text(target.tagName);
    // ! 사이즈 정보 추가
    $(infoBoxSizes).text(`H: ${height.toFixed(1)}px\nW: ${width.toFixed(1)}px`);
    // ! 스타일 요소 비우고
    $(infoBoxStyles).empty();

    styleArray.map(({ styleName, styleValue }) => {
      return $(infoBoxStyles).append(
        `<section class='zzaplin zInfoStyleRow'><div>${styleName}</div><div>${styleValue}</div></section>`
      );
    });
  };

  // ? 인포박스 포지션 설정
  const setInfoBoxPosition = (e) => {
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

  // ? 짭플린 요소인지 확인
  const isZzaplin = (target) => {
    try {
      if (target.className) {
        if (target.className.split(" ")[0] === "zzaplin") {
          return true;
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  // ? 청소
  const clearAll = () => {
    $(".zzaplin").css("display", "none");
  };

  // ? px 가리기 보이기
  const togglePx = (toggle) => {
    if (toggle) {
      $(".px").css("opacity", "1");
    } else {
      $(".px").css("opacity", "0");
    }
  };

  const removeUnitPx = (item) => {
    return Math.round(Number(item.replace("px", "")));
  };
};
