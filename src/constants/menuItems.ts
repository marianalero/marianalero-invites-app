

export interface MenuItem {
  label: string;
  path: string;
//   icon: React.ReactNode;
  roles: string[]; // roles que pueden ver esta opción
}

export const menuItems: MenuItem[] = [
   {
    label: 'Lita de Invitados',
    path: '/guests',
    roles: [ 'cliente']
  },
  // {
  //   label: 'Panel de Confirmaciones',
  //   path: '/panel',
  //   roles: ['cliente']
  // },
  {
    label: 'Usuarios',
    path: '/admin',
    roles: ['admin']
  },
  {
    label: 'Invitaciones',
    path: '/invitations',
    roles: ['admin']
  }
];
