
import React, { lazy} from 'react';
import { Layout } from 'src/layouts';

const prestationPage = lazy(() =>
import('src/pages/components/prestation/index').then((m)=>({
    default : m.Page
}))
);
export const applicationsRoutes = [
    {
        path:'prestation',
        children:[
            {
                index:true,
                path:'list',
                element:( <Layout>
                            <prestationPage />
                          </Layout>),
            }
        ],

    },
]