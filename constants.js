// ! 키 정의
const KEY_TOGGLE_FUNCTION = 90; //"z" || "Z" || "ㅋ";
const KEY_TOGGLE_SECOND_FUNCTION = 88; // "x" || "X" || "ㅌ";
const KEY_CLEAR = 67; // "c" || "C" || "ㅊ";
const KEY_FIX_INFO_BOX = 72; //"h" || "H" || "ㅗ";
const KEY_HIDE_INFO_BOX = 86; // V
const KEY_TOGGLE_GUIDE_LINE = 66; //"b" || "B" || "ㅠ";

const MODE_DEFAULT = "default";
const MODE_SECOND = "second";

// ! 무시할 밸류들
const ignoreValues = [0, "0", "0px", "none", "initial", undefined, null];

// ! 찾을 스타일 밸류들( 추가해야 함 )
const styleValues = [
  "fontSize",
  "lineHeight",
  "color",
  "backgroundColor",
  "border",
  "borderRadius",
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
