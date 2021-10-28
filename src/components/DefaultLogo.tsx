import React from 'react'
import { colorPalette, getInitials } from 'src/lib/utils'

export function DefaultLogo({ id, name }: { id: string; name: string }) {
  return (
    <div
      style={{
        backgroundColor: `${colorPalette[Number(id) % 8].bg}`,
        borderRadius: '50%',
        height: 40,
        width: 40,
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
