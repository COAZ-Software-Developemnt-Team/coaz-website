import React from 'react'
import { notFound } from 'next/navigation';
import {menus,findMenu} from '../_constants/data'
import { notDeepEqual } from 'assert';

const MenuContent = async ({params} : {params: {path:string[]}}) => {
    const {path} = await params;
    let menu = null;
    if(path && path.length > 0) {
      let fullPath = '';
      for (let pathItem of path) {
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