import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import { Breadcrumb } from 'antd';
const MyBreadcrumb = () => {
  const breadcrumbData = [
    { breadcrumbName: 'Admin', path: '/admin' },
    { breadcrumbName: 'Products', path: '/admin/products' },
    { breadcrumbName: 'Category', path: '/admin/categories' },
  ];
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const breadcrumbs = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const breadcrumbItem = breadcrumbData.find(item => item.path === url);
    console.log(breadcrumbItem);
    
    return breadcrumbItem ? (
      <Breadcrumb.Item key={breadcrumbItem.path}>
        <Link to={breadcrumbItem.path}>{breadcrumbItem.breadcrumbName}</Link>
      </Breadcrumb.Item>
    ) : null;
  });

  return (
      // console.log()
    <Breadcrumb>
      {breadcrumbs}
    </Breadcrumb>
  );
}

export default MyBreadcrumb