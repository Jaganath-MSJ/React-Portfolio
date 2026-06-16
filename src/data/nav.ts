export interface NavItem {
  label: string;
  id: string;
  num: string;
}

export const NAV: NavItem[] = [
  { label: 'About', id: 'About', num: '01' },
  { label: 'Projects', id: 'Projects', num: '02' },
  { label: 'Stack', id: 'Stack', num: '03' },
  { label: 'Timeline', id: 'Timeline', num: '04' },
  { label: 'Contact', id: 'Contact', num: '05' },
];
