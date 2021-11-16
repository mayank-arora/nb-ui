export const cloudinaryUrl = (
  url?: string,
  width: number = 64,
  height: number = 64
) =>
  !url && url !== 'null'
    ? undefined
    : `https://res.cloudinary.com/noticeboard/image/upload/w_${width},h_${height},c_scale,f_auto,q_auto:best/${url}`

export const colorPalette = [
  {
    fg: '#FF8A80',
    bg: '#FFECEA',
  },
  {
    fg: '#FF80AB',
    bg: '#FFEAF1',
  },
  {
    fg: '#EA80FC',
    bg: '#FBEAFE',
  },
  {
    fg: '#B388FF',
    bg: '#F3ECFF',
  },
  {
    fg: '#8C9EFF',
    bg: '#ECEFFF',
  },
  {
    fg: '#82B1FF',
    bg: '#EBF2FF',
  },
  {
    fg: '#80D8FF',
    bg: '#E6F7FF',
  },
  {
    fg: '#FFD180',
    bg: '#FFF6E6',
  },
]

export function getInitials(name: string) {
  let temp: Array<string> = name.split(' ')
  
  switch (temp.length) {
    case 0:
      return 'NB'
    case 1:
      return temp[0].charAt(0).toUpperCase() + temp[0].charAt(1).toUpperCase()
    case 2:
      return temp[0].charAt(0).toUpperCase() + temp[1].charAt(0).toUpperCase()
    default:
      return temp[0].substring(0, 2)
  }
}
