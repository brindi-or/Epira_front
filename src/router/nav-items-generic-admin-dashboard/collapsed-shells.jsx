import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import { routes } from 'src/router/routes';

const useMenuItemsCollapsedShells = (t) => {
  return [
    {
      title: 'Dashboards',
      icon: <DashboardTwoToneIcon />,
      route: routes.dashboard['analytics'],
      subMenu: [
        
        {
          title: t('dashboard'),
          route: routes.dashboard['analytics'],
        },
         {
          title: t('Analytics'),
          route: routes.dashboard['analytics'],
          subMenu: [
            {
              title: t('Analytics'),
              route: routes.dashboard['analytics'],
            },
             {
              title: t('Analytics'),
              route: routes.dashboard['analytics'],
            }
          ]
        }
      ],
    }
      ];
};
export default useMenuItemsCollapsedShells;
