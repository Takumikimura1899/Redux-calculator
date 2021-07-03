import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR,
} from "../actions/types";

// 初期値
const initialAppState = {
  inputValue: 0,
  operator: "",
  resulutValue: 0,
  calculate: false,
  showingResult: false,
};

// stateとして初期値を渡す。actionも渡す。
const calculator = (state = initialAppState, action) => {
  // switch文でアクションのタイプ別の処理を書いていく。
  switch (action.type) {
    // 数字が押されたとき
    case INPUT_NUMBER:
      return {
        // ステートをまずコピー
        ...state,
        // 最初は０なので０＊１０で0と押した数字(アクションナンバーが表示)
        // ２回目以降はstateの入力された値(例えば２)*10で２０＋例えば３などで２３となる。
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      };

    //+が押されたとき
    case PLUS:
      // 各演算子が押されるとstateのcalculateがtrueになるのでこちらの処理が走る
      if (state.caluclate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          resulutValue: state.resulutValue + state.inputValue,
          showingResult: true,
        };
      } else {
        //   初期値が何もない場合はこちらの処理が走る(最初の状態かACを押した後)
        return {
          ...state,
          inputValue: 0,
          operator: "+",
          calculate: true,
          resulutValue: state.inputValue,
          showingResult: true,
        };
      }

    case MINUS:
      if (state.caluclate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          resulutValue: state.resulutValue - state.inputValue,
          showingResult: true,
        };
      } else {
        //   初期値が何もない場合はこちらの処理が走る
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          calculate: true,
          resulutValue: state.inputValue,
          showingResult: true,
        };
      }

    case MULTIPLY:
      if (state.caluclate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          resulutValue: state.resulutValue * state.inputValue,
          showingResult: true,
        };
      } else {
        //   初期値が何もない場合はこちらの処理が走る
        return {
          ...state,
          inputValue: 0,
          operator: "*",
          calculate: true,
          resulutValue: state.inputValue,
          showingResult: true,
        };
      }

    case DIVIDE:
      if (state.caluclate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          resulutValue: state.resulutValue / state.inputValue,
          showingResult: true,
        };
      } else {
        //   初期値が何もない場合はこちらの処理が走る
        return {
          ...state,
          inputValue: 0,
          operator: "/",
          calculate: true,
          resulutValue: state.inputValue,
          showingResult: true,
        };
      }

    case CLEAR:
      // 初期値に戻す感じ
      return {
        inputValue: 0,
        operator: "",
        calculator: false,
        resulutValue: 0,
        showingResult: false,
      };

    case EQUAL:
      // stateのオペレーター(演算子の種類)によってスイッチする。
      switch (state.operator) {
        case "+":
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resulutValue + state.inputValue,
            showingResult: true,
          };

        case "-":
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resulutValue - state.inputValue,
            showingResult: true,
          };

        case "*":
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resulutValue * state.inputValue,
            showingResult: true,
          };

        case "/":
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: "",
            calculator: false,
            resultValue: state.resulutValue / state.inputValue,
            showingResult: true,
          };
        // どのパターンにも当てはまらない時stateを返す。
        default:
          return state;
      }
    default:
      return state;
  }
};

export default calculator;
