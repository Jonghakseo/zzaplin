//? rgb to hex code
const rgb2hex = (input) => {
  const searchIndex = input.search("rgb");
  if (searchIndex === -1) {
    return input;
  } else {
    let rgb = input.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    if (!rgb) {
      return input;
    }
    return (
      input.substr(0, searchIndex) +
      ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toString()
    );
  }
};

// ? PX 단위 제거
const removeUnitPx = (item) => {
  return Math.round(Number(item.replace("px", "")));
};

// ? 마진 패딩 숏핸드 속성 만들기 + 색상 코드 변환
const makeShortHand = (styleArray) => {
  let mt = "0px",
    mr = "0px",
    ml = "0px",
    mb = "0px";
  let pt = "0px",
    pr = "0px",
    pl = "0px",
    pb = "0px";

  const shortArr = [];

  styleArray.map(({ styleName, styleValue }) => {
    if (styleName === "border" && styleValue.split(" ").includes("none"))
      return;
    const newValue = rgb2hex(styleValue);

    switch (styleName) {
      case "marginTop":
        mt = styleValue;
        break;
      case "marginRight":
        mr = styleValue;
        break;
      case "marginLeft":
        ml = styleValue;
        break;
      case "marginBottom":
        mb = styleValue;
        break;
      case "paddingTop":
        pt = styleValue;
        break;
      case "paddingLeft":
        pl = styleValue;
        break;
      case "paddingRight":
        pr = styleValue;
        break;
      case "paddingBottom":
        pb = styleValue;
        break;
      default:
        shortArr.push({ styleName, styleValue: newValue });
    }
  });

  const marginValue = () => {
    if (new Set([mt, mb, mr, ml]).size === 1) {
      return mt;
    }
    if (mt === mb && mr === ml) {
      return `${mt} ${mr}`;
    }
    return `${mt} ${mr} ${ml} ${mb}`;
  };

  const paddingValue = () => {
    if (new Set([pt, pb, pr, pl]).size === 1) {
      return pt;
    }
    if (pt === pb && pr === pl) {
      return `${pt} ${pr}`;
    }
    return `${pt} ${pr} ${pl} ${pb}`;
  };

  shortArr.push({
    styleName: "margin",
    styleValue: marginValue(),
  });
  shortArr.push({
    styleName: "padding",
    styleValue: paddingValue(),
  });
  return shortArr;
};

// ? 청소
const clearAll = () => {
  $(".zzaplin").css("display", "none");
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

// ? px 가리기 보이기
const togglePx = (toggle) => {
  if (toggle) {
    $(".px").css("opacity", "1");
  } else {
    $(".px").css("opacity", "0");
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
