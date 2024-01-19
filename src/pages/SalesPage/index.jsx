import React from 'react'
import ItemsConstructor from '../../components/itemsConstructor'
import NavInPages from '../../components/navInPages'

export default function Sales() {
  return (
    <div>
      <NavInPages/>
      <ItemsConstructor isSales={true}/>
    </div>
  )
}
