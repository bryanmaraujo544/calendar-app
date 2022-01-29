interface ThemeProps {
  light: {
    title: string,
    white: string,
    black: string,
    gray: {
      '100': string,
      '200': string,
      '300': string,
      '400': string
    },
    shadow:{
      sm: string
    }
  },
  dark: {
    title: string,
    white: string,
    black: string,
    gray: {
      '100': string,
      '200': string,
      '300': string,
      '400': string
    },
    shadow: {
      sm: string
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
      200: '#EBF5FF',
      300: '#CED4DA',
      400: '#6C757D'
    },
    shadow: {
      sm: '#00000010'
    }
  },
  dark: {
    title: 'dark',
    white: '#000',
    black: '#fff',
    gray: {
      100: '#E9ECEF',
      200: '#EBF5FF',
      300: '#CED4DA',
      400: '#6C757D'
    },
    shadow: {
      sm: '#ffffff10'
    }
  }
}
