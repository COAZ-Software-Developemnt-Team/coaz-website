import React from 'react'
import { notFound } from 'next/navigation';
import {menus,findMenu} from '../_constants/data'

interface PageProps {
  params: Promise<{ path: string[] }>;  // Expecting params as a Promise
}

const MenuContent = async ({params} : PageProps) => {
    const resolvedParams = await params;  // Await the Promise
    const { path } = resolvedParams;
    let menu = null;
    if(path && path.length > 0) {
      let fullPath = '';
      for (const pathItem of path) {
        fullPath += `/${pathItem}`;
      }
      menu = findMenu(menus,fullPath);

      if(menu && menu.Component) {
        return (
          <div><menu.Component/></div>
        )
      } else {
        notFound()
      }
    }
}

export default MenuContent