import * as actions from '../actions';

const STORED_SETTINGS = (storedSettings: object) => {
  const settings = {};
  Object.keys(storedSettings).forEach(key => {
    const item = JSON.parse(localStorage.getItem(`app.settings.${key}`));
    settings[key] = item === null ? storedSettings[key] : item;
  });
  return settings;
};

export interface SettingState {
  isMobileView: boolean;
  isTabletView: boolean;
  isMobileMenuOpen: boolean;
  isLightTheme: boolean;
  isSettingsOpen: boolean;
  isMenuTop: boolean;
  isMenuCollapsed: boolean;
  isBorderless: boolean;
  isSquaredBorders: boolean;
  isFixedWidth: boolean;
  isMenuShadow: boolean;
}
export const initialState: SettingState = {
  // default settings, if not exist in localStorage
    isMobileView: false,
    isTabletView: false,
    isMobileMenuOpen: false,
    isLightTheme: true,
    isSettingsOpen: false,
    isMenuTop: false,
    isMenuCollapsed: false,
    isBorderless: true,
    isSquaredBorders: false,
    isFixedWidth: false,
    isMenuShadow: true,
  }),
};

export function reducer(state = initialState, action: actions.AllSettingActions): object {
  switch (action.type) {
    case actions.SET_STATE:
      const key = Object.keys(action.payload)[0];
      window.localStorage.setItem(`app.settings.${key}`, action.payload[key]);
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const getSettings = (state: any) => state;
