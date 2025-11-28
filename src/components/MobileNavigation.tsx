import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import AccountIcon from '../icons/Account.svg?react'
import PaymentsIcon from '../icons/Payments.svg?react'
import HomeIcon from '../icons/Home.svg?react'
import CreditIcon from '../icons/Credit.svg?react'

export default function MobileNavigation() {
    const [value, setValue] = React.useState(1);
    const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
 
  &.Mui-selected {
    color: #01D167;
  }
`);
    return (
        <Box className="lg:hidden z-[9999]">
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}


                >
                    <BottomNavigationAction
                        label="Home"
                        icon={<HomeIcon className={value === 0 ? "text-primary" : "text-gray-500"} />}
                    />

                    <BottomNavigationAction
                        label="Cards"
                        icon={<CreditIcon className={value === 1 ? "text-primary" : "text-gray-500"} />}
                    />

                    <BottomNavigationAction
                        label="Payments"
                        icon={<PaymentsIcon className={value === 2 ? "text-primary" : "text-gray-500"} />}
                    />

                    <BottomNavigationAction
                        label="Profile"
                        icon={<AccountIcon className={value === 3 ? "text-primary" : "text-gray-500"} />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
