import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
// import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
// import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
// import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { routes } from 'src/router/routes';

const useMenuItemsVerticalShells = (t) => {
  return [
    {
      title: t('General'),
      subMenu: [
        {
          title: t('Dashboards'),
          icon: <DashboardRoundedIcon />,
          subMenu: [
         
            {
              title: t('Analytics'),
              route: routes.dashboard['analytics'],
            }
          ],
        }
      ],
    },
    {
      title: t('prestations'),
      subMenu: [
        {
          title: t('Manage prestations'),
          icon: <PeopleRoundedIcon />,
          subMenu: [
         
            {
              title: t('All prestations'),
              route: routes.dashboard['analytics'],
            },
             {
              
                  title: t('New pres'),
                  route: routes.dashboard['analytics'],
                
            }
          ],
        }
      ],
    },
    {
      title: t('patients'),
      subMenu: [
        {
          title: t('Manage patients'),
          icon: <PeopleRoundedIcon />,
          subMenu: [
         
            {
              title: t('All patients'),
              route: routes.dashboard['analytics'],
            },
             {
              
                  title: t('New patient'),
                  route: routes.dashboard['analytics'],
                
            }
          ],
        }
      ],
    },
   
  ];
};
export default useMenuItemsVerticalShells;
