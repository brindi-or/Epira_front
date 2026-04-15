import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as LayoutBase } from 'src/layouts/base';
import { authenticationRoutes } from './authentication';
// import { componentsRoutes } from './components';
import { AuthGuard } from 'src/components/auth/auth-guard';
import { dashboardsRoutes } from './dashboard';
import { applicationsRoutes } from './application';
import { Layout } from 'src/layouts';

const HomePage = lazy(() =>
  import('src/pages/index1').then((m) => ({
    default: m.Page,
  }))
);

const AnalyticDashboard = lazy(() =>
  import('src/pages/dashboard/analytics').then((m) => ({
    default: m.Page,
  }))
);

export const routesOutlets = [

  {
    element: (
      <LayoutBase>
        <Outlet />
      </LayoutBase>
    ),
    children: [
      {
        index: true,
        element: 
        (<AuthGuard><Layout>
          <AnalyticDashboard />
        </Layout></AuthGuard>),
      },
      
    ],
  },
    {
    element: (
      <LayoutBase>
        <Outlet />
      </LayoutBase>
    ),
    children: [
      {
        path: 'auth',
        children: [...authenticationRoutes],
      },
    ],
  },   
  {
    element: (
      <LayoutBase>
        <Outlet />
      </LayoutBase>
    ),
    children: [...dashboardsRoutes],
  },
    {
    element: (
      <LayoutBase>
        <Outlet />
      </LayoutBase>
    ),
    children: [...applicationsRoutes],
  },
  
 
];
