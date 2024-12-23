import { menus } from '@/data/sidebar/DashboardData'
import { Item } from './item'

export default function ListItems() {

    
  return (
    <>
    {menus.map((menu)=>{
        return (
            <Item menu={menu.menu} id={menu.id} icon={menu.icon} items={menu.items}/>
        )
    })}
    </>
  )
}
