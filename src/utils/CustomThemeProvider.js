import { createContext, useCallback, useMemo, useReducer, useContext } from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

const themeKey = 'ninpeng-theme';
const ThemeContext = createContext();

// MUI의 ThemeProvider를 한 번 더 감싸준다
export const CustomThemeProvider = ({ children }) => {
  // 로컬 저장소에 저장된 값
  const localThemeType = localStorage.getItem(themeKey);
  const initDarkmode = localThemeType ? localThemeType : 'light';

  const [states, dispatch] = useReducer(
    (state, action) => {
      let rtnValue = {};

      switch (action.type) {
        case 'CHANGE':
          localStorage.setItem(themeKey, action.payload.darkmode);
          rtnValue = { ...state, darkmode: action.payload.darkmode };
          break;
        default:
          rtnValue = state;
      }

      return rtnValue;
    },
    { darkmode: initDarkmode }
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: states.darkmode,
        },
      }),
    [states]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={dispatch}>{children}</ThemeContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

// 테마 변경 함수
export const useChangeDarkmode = () => {
  const dispatch = useContext(ThemeContext);
  const changeDarkmode = useCallback(
    (payload) => dispatch({ type: 'CHANGE', payload }),
    [dispatch]
  );

  return changeDarkmode;
};
