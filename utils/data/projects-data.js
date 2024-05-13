import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Clinic Management system - Klinify',
        description: "Klinify has been providing world-class digital solutions for over 7 years to help clinics around the region to manage their clinical operations in a seamless and hassle-free way. We’re now focused on supporting clinics in Malaysia, with over 1,200 doctors and 350 clinics actively using our system.",
        tools: ['React', 'Flow', 'PouchDB', 'Typescript', 'Styled components', 'NodeJS'],
        role: 'Frontend Developer',
        code: '',
        demo: 'https://www.klinify.com/',
        image: crefin,
    },
    {
        id: 2,
        name: 'CMS for insurers & health providers',
        description: 'Heals Healthcare (Asia) is headquartered in Hong Kong where Heals is the leading market provider of CMS to about 3,000 clinic users, the Heals cloud-based platform extends to connecting health providers, insurers/ medical scheme payors, e-pharmacy distributors and medication delivery partners.',
        tools: ['Tailwind CSS', "VueJS", "TypeScript", "GraphQL", "NodeJS", "Agora"],
        role: 'Frontend Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Heals Clinic',
        description: 'Heals Clinic is fully dedicated to virtual care. Designed with online consultation and care in mind. Outcome: a different patient experience.',
        tools: ['NextJS', 'Tailwind CSS', "ReactJS", "VueJS", "TypeScript", "GraphQL", "NodeJS", "Agora"],
        role: 'Lead Frontend Engineer',
        code: '',
        demo: 'https://www.heals.asia/',
        image: travel,
    },
    {
        id: 4,
        name: 'Foodluv',
        description: 'A solution built to empower restaurants with a symphony of products working in harmony. From online orders and delivery to on-premises customers, and our state-of-the-art expo/kitchen display system, FoodLuv has it all. Zero commissions, zero transaction fees, and zero reliance on third parties.',
        tools: ['ReactJS', 'NextJS', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'Material UI', 'SocketIO',],
        code: '',
        role: 'Frontend Engineer',
        demo: 'https://www.foodluv.io/',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },