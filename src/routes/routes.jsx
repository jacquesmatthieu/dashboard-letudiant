import React from 'react';
import Layout from '../modules/layout/pages/layout.component';
import Home from './modules/dashboard/pages/dashboard.pages';

export default [
  {
    component: Layout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
    ]
  }
]