import CsePapers from '../../containers/cse-papers';
export const PAPERS = [
  {
    label: 'Computer Science & Engineering',
    value: '/cse-papers',
    component: () => <CsePapers />,
  },
  {
    label: 'Information Technology',
    value: '/it-papers',
    component: () => <CsePapers />,
  },
  {
    label: 'Eletronics and Communication Engineering',
    value: '/ece-papers',
    component: () => <CsePapers />,
  },
  {
    label: 'Mechanical Engineering',
    value: '/mee-papers',
    component: () => <CsePapers />,
  },
  {
    label: ' Materials Science & Metallurgical Engineering',
    value: '/msme-papers',
    component: () => <CsePapers />,
  },
  {
    label: ' Chemical Engineering',
    value: '/che-papers',
    component: () => <CsePapers />,
  },
];
