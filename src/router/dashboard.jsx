
import React, { lazy} from 'react';
import { Layout } from 'src/layouts';

const AnalyticDashboard = lazy(() =>
import('src/pages/dashboard/analytics').then((m)=>({
    default : m.Page
}))
);

export const dashboardsRoutes = [
    {
        path:'dashboard',
        children:[
            {
                index:true,
                path:'analytics',
                element:( <Layout>
                            <AnalyticDashboard />
                          </Layout>),
            }
        ],
    },
]