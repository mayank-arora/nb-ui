import React from 'react'
import { colorPalette, getInitials } from 'src/lib/utils'

export function DefaultLogo({
  id,
  name,
  alternate,
}: {
  id: string
  name: string
  alternate?: boolean
}) {
  return (
    <div
      style={{
        backgroundColor: `${colorPalette[Number(id) % 8].bg}`,
        borderRadius: '50%',
        height: alternate ? 100 : 35,
        width: alternate ? 100 : 35,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <span
        style={{
          color: `${colorPalette[Number(id) % 8].fg}`,
          fontWeight: 'bold',
        }}>
        {getInitials(name)}
      </span>
    </div>
  )
}
