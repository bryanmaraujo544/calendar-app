interface ThemeProps {
  light: {
    title: string,
    white: string,
    black: string,
    gray: {
      '100': string,
      '300': string,
    }
  },
  dark: {
    title: string,
    white: string,
    black: string,
    gray: {
      '100': string,
      '300': string,
    }
  }
}

export const theme: ThemeProps = {
  light: {
    title: 'light',
    white: '#fff',
    black: '#000',
    gray: {
      100: '#E9ECEF',
      300: '#6C757D'
    }
  },
  dark: {
    title: 'dark',
    white: '#000',
    black: '#fff',
    gray: {
      100: '#E9ECEF',
      300: '#6C757D'
    }
  }
}
