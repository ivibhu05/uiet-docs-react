import CsePapers from "../../containers/cse-papers";

export const PAPERS = [
    {
      label: 'Computer Science & Engineering',
      value: 'containers/cse-papers',
      component: () => <CsePapers/>,
    },
    {
      label: 'Information Technology',
      value: 'containers/it-papers',
      component: () => <CsePapers/>,
    },
    {
      label: 'Eletronics and Communication Engineering',
      value: 'containers/ece-papers',
      component: () => <CsePapers/>,
    },
    {
      label: 'Mechanical Engineering',
      value: 'containers/mee-papers',
      component: () => <CsePapers/>,
    },
    {
      label: ' Materials Science & Metallurgical Engineering',
      value: 'containers/msme-papers',
      component: () => <CsePapers/>,
    },
    {
      label: ' Chemical Engineering',
      value: 'containers/che-papers',
      component: () => <CsePapers/>,
    },
  ];
  