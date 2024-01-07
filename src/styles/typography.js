export const fonts = {
  primary: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  secondary: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
};

export const typography = {
  head: {
    head1: `
    font-family: ${fonts.secondary};
    font-size: 96px;
    line-height: 128px;
    `,
    head2: `
    font-family: ${fonts.secondary};
    font-size: 64px;
    line-height: 88px;
    `,
    head3: `
    font-family: ${fonts.secondary};
    font-size: 48px;
    line-height: 64px;
    `,
    head4: `
    font-family: ${fonts.secondary};
    font-size: 36px;
    line-height: 48px;
    `,
    head5: `
    font-family: ${fonts.secondary};
    font-size: 24px;
    line-height: 32px;
    `,
    head6: `
    font-family: ${fonts.secondary};
    font-size: 20px;
    line-height: 28px;
    `,
  },
  subtitle: {
    subtitle1: `
    font-family: ${fonts.secondary};
    font-size: 16px;
    line-height: 24px;
    `,
    subtitle2: `
    font-family: ${fonts.secondary};
    font-size: 14px;
    line-height: 20px;
    `,
  },
  text: {
    body1: `
    font-family: ${fonts.primary};
    font-size: 16px;
    line-height: 24px;
    `,
    body2: `
    font-family: ${fonts.primary};
    font-size: 14px;
    line-height: 20px;
    `,
  },
  button: {
    button1: `
    font-family: ${fonts.primary};
    font-size: 14px;
    line-height: 24px;
    letter:1.25px;
    `,
  },
  caption: {
    caption1: `
    font-family: ${fonts.primary};
    font-size: 12px;
    line-height: 16px;
    `,
  },
  overline: {
    overline1: `
    font-family: ${fonts.primary};
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 1.5px;
    `,

    overline2: `
    font-family: ${fonts.primary};
    font-size: 10px;
    line-height: 16px;
    `,
  },
};
