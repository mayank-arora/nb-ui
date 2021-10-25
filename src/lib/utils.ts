// import {
//   IcoAcademyDark,
//   IcoAcademyWhite,
//   IcoAdminstrationDark,
//   IcoAdminstrationWhite,
//   IcoBoardDark,
//   IcoBoardWhite,
//   IcoChecklistDark,
//   IcoChecklistWhite,
//   IcoDashboardDark,
//   IcoDashboardWhite,
//   IcoTaskDark,
//   IcoTaskWhite,
//   IcoTeamDark,
//   IcoTeamWhite,
//   IcoTrainingDark,
//   IcoTrainingWhite,
//   IcoUnicastDark,
//   IcoUnicastWhite,
// } from '@icons'

export const cloudinaryUrl = (
  url?: string,
  width: number = 64,
  height: number = 64
) =>
  !url && url !== 'null'
    ? undefined
    : `https://res.cloudinary.com/noticeboard/image/upload/w_${width},h_${height},c_scale,f_auto,q_auto:best/${url}`

// type Item = {
//   id: string
//   title: string
//   link: string
//   activeIcon: any
//   inactiveIcon: any
// }

// const navList: Item[] = [
//   {
//     id: 'dashboard',
//     title: 'Dashboard',
//     activeIcon: IcoDashboardWhite,
//   }
// ]