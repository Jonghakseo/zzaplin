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

// ? default 마진 보더 생성
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
