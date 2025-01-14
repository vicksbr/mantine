import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/core';

interface NotificationProviderStyles {
  theme: MantineTheme;
}

export default createUseStyles(
  {
    notifications: ({ theme }: NotificationProviderStyles) => ({
      width: `calc(100% - ${theme.spacing.md * 2}px)`,
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: 1000,
    }),

    notification: ({ theme }: NotificationProviderStyles) => ({
      '& + &': {
        marginTop: theme.spacing.sm,
      },
    }),
  },
  { link: true }
);
