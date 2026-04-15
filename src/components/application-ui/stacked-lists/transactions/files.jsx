import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography,
  useTheme,
} from '@mui/material';
import { format, subDays } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

function Component0() {
  const { t } = useTranslation();
  const theme = useTheme();
  const transactionsData = [
    {
      date: 'Required files',
      transactions: [
        {
        
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: '1.	Connaissement (BL)',
        },
        {
        
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: '2.	Facture commerciale.',
        },{
        
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: '3. Facture de fret',
        }
        ,
        {
        
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: '4. Sous BL',
        },{
        
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: '5.	Inscription au FIMEX ou autorisation spéciale ',
        }
        ,
      ],
    },
    {
      date: 'Optionals files',
      transactions: [
        {
          avatarBackground: theme.palette.error.main,
          avatarColor: theme.palette.error.contrastText,
          avatarIcon: <TrendingFlatTwoToneIcon />,
          primaryText: '1.	La fiche GUCE ou la déclaration d’importation ',
        },
        {
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: '2.	La liste de colisage ',
        },
         {
          avatarBackground: theme.palette.error.main,
          avatarColor: theme.palette.error.contrastText,
          avatarIcon: <TrendingFlatTwoToneIcon />,
          primaryText: '3.	Carte grise pour les véhicules ',
        },
        {
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: '4.	Attestation d’immatriculation',
        },
      ],
    },
  ];
  return (
    <Card>
      <Box p={0.5}>
        <Typography
          variant="h5"
          fontWeight={600}
        >
          {t('All files')}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 258,
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {transactionsData.map((group) => (
              <React.Fragment key={group.date.toString()}>
                <ListSubheader
                  color="primary"
                  sx={{
                    background: theme.palette.background.default,
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                  }}
                >
                  {group.date}
                </ListSubheader>
                <Divider />
                {group.transactions.map((transaction, idx) => (
                  <React.Fragment key={idx}>
                    <ListItem
                      sx={{
                        p: 0.5,
                      }}
                    >
                      <ListItemAvatar
                        sx={{
                          mr: 1,
                          display: 'flex',
                          alignItems: 'center',
                          minWidth: 0,
                        }}
                      >
                        <Avatar
                          sx={{
                            background: transaction.avatarBackground,
                            color: transaction.avatarColor,
                            width: 20,
                            height: 20,
                          }}
                        >
                          {transaction.avatarIcon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            noWrap
                            variant="h5"
                          >
                            {t(transaction.primaryText)}
                          </Typography>
                        }
                       
                      />
                    
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
     
    </Card>
  );
}
export default Component0;
