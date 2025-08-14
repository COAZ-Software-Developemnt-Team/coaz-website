import React, {use} from 'react'
import { notFound } from 'next/navigation';
import {menus,findMenu} from '../_constants/data'

interface PageProps {
  params: Promise<{ path: string[] }>; // Define params as a Promise
}

const MenuContent = ({params} : PageProps) => {
    const resolvedParams = use(params);
    const {path} = resolvedParams;
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