import React from 'react'
import ItemsConstructor from '../../components/itemsConstructor'
import NavInPages from '../../components/navInPages'

export default function SalesPage() {
  return (
    <div>
      <NavInPages/>
      <ItemsConstructor isSales={true}/>
    </div>
  )
}
