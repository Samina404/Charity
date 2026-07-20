export interface ProgramDetail {
  id: string;
  label: string;
  tagline: string;
  image: string;
  imageAlt: string;
  intro: string;
  body: string;
  activities: string[];
  stats: { value: string; label: string }[];
}

export const programDetails: ProgramDetail[] = [
  {
    id: 'education',
    label: 'Education',
    tagline: 'Learning opens every door',
    image: '/images/education.webp',
    imageAlt: 'Children seated in a bright classroom, engaged in learning',
    intro:
      'Education is the most powerful tool we can give a child. When a child can read, write, and think critically, they gain the ability to shape their own future — and to lift their entire community.',
    body:
      'Many children in the communities we serve have never had access to a proper classroom. School fees, lack of textbooks, or the need to work at home keeps them out of school. Hope Foundation removes these barriers one by one — so that every child, regardless of family income or location, can take their place in a classroom.',
    activities: [
      'Providing school uniforms, backpacks, notebooks, and stationery every year',
      'Sponsoring tuition fees for children from the most vulnerable households',
      'Building and refurbishing classrooms with desks, blackboards, and proper lighting',
      'Running after-school tutoring sessions led by trained volunteer teachers',
      'Offering literacy classes for older children who missed their early school years',
      "Supporting girls' education in communities where gender gaps in schooling persist",
    ],
    stats: [
      { value: '3,200+', label: 'Children currently supported in school' },
      { value: '87%',    label: 'School attendance rate in our programs'  },
      { value: '120+',   label: 'Volunteer teachers trained'              },
    ],
  },
  {
    id: 'health',
    label: 'Health & Nutrition',
    tagline: 'A well-fed child can truly learn',
    image: '/images/health.webp',
    imageAlt: 'Parents and children preparing food together in a community kitchen',
    intro:
      'A child who is hungry or unwell cannot focus, cannot learn, and cannot grow. Good nutrition and basic health care are not luxuries — they are the starting point for everything else we do.',
    body:
      'Many children arrive at our centres having eaten nothing since the previous day. We run structured meal programs that provide a warm, balanced breakfast and lunch every school day. Beyond food, we work alongside local clinics to bring routine healthcare directly into the communities that need it most.',
    activities: [
      'Serving over 1,800 nutritious meals per day across all our centres',
      'Distributing monthly hygiene kits including soap, toothbrushes, and sanitary supplies',
      'Partnering with local nurses for quarterly health check-ups and growth monitoring',
      'Providing vitamin and iron supplements to children showing signs of malnutrition',
      'Running hand-washing and hygiene awareness sessions for children and parents',
      'Supplying clean drinking water through installed filtration systems at each centre',
    ],
    stats: [
      { value: '1,800+', label: 'Meals served every single day'                },
      { value: '96%',    label: 'Children free from acute malnutrition'        },
      { value: '22',     label: 'Local health clinics we partner with'         },
    ],
  },
  {
    id: 'shelter',
    label: 'Safe Shelter',
    tagline: 'Every child deserves a safe place',
    image: '/images/shelter.webp',
    imageAlt: 'Women and children playing in a safe shelter room with toys and mats',
    intro:
      "Safety is a child's most basic need. Without a secure, stable environment, no amount of food or teaching can unlock a child's potential. Our learning centres are designed to be the safest place in every community we serve.",
    body:
      'For children from overcrowded or unstable homes, our centres offer more than just a place to learn. They are a refuge — somewhere warm, clean, and supervised — where every child is known by name and looked after by caring, trained staff every single day.',
    activities: [
      '45+ child-friendly spaces with trained, background-checked staff',
      'Safe, supervised after-school care for children of working parents',
      'Individual counselling sessions for children dealing with trauma or grief',
      'Weekly group activities — sports, art, drama — to build confidence and joy',
      'All centres meet child-safety building and fire safety standards',
      'All staff and volunteers trained in child protection and safeguarding policies',
    ],
    stats: [
      { value: '45+',    label: 'Safe learning centres operational'     },
      { value: '2,400+', label: 'Children using our centres each week'  },
      { value: '100%',   label: 'Staff trained in child safeguarding'   },
    ],
  },
  {
    id: 'emergencies',
    label: 'Emergency Relief',
    tagline: 'Support when it matters most',
    image: '/images/food-bank-volunteers.webp',
    imageAlt: 'Hope Foundation team distributing relief supplies to families in need',
    intro:
      'When floods, droughts, or other hardships hit, children suffer most. Families lose their homes, schools close, and children go without food for days. Hope Foundation mobilises quickly to make sure no child is left behind in a crisis.',
    body:
      'We maintain emergency supply stockpiles in all 12 countries where we operate. When a disaster strikes, our local teams are on the ground within 48 hours — distributing essentials and carefully assessing which children and families need the most urgent support.',
    activities: [
      "Distributing emergency food packages containing a week's supply of staple foods",
      'Providing clean water in portable containers and water purification tablets',
      'Handing out school kits so children can return to learning when schools reopen',
      'Distributing warm blankets and basic clothing to displaced families',
      'Setting up temporary child-friendly spaces in evacuation shelters',
      'Connecting families to longer-term support programs after the acute emergency',
    ],
    stats: [
      { value: '12',     label: 'Countries with emergency response teams'    },
      { value: '48 hrs', label: 'Average response time after a crisis'       },
      { value: '8,000+', label: 'Families reached across past emergencies'   },
    ],
  },
  {
    id: 'resilience',
    label: 'Resilience',
    tagline: 'Empowering families for the long term',
    image: '/images/resilience.webp',
    imageAlt: 'Parents and children collaborating at a family workshop',
    intro:
      'True change lasts only when families and communities have the tools to sustain it themselves. Resilience is about more than recovering from hardship — it is about building the skills, confidence, and resources to prevent hardship from taking hold in the first place.',
    body:
      'We work alongside parents, grandparents, and community leaders — because when adults are supported and informed, children benefit directly. Our resilience programs are co-designed with local communities so they reflect real needs rather than assumptions from the outside.',
    activities: [
      'Monthly parenting workshops on child development, positive discipline, and nutrition',
      'Vocational skills training — sewing, small business, agriculture — for caregivers',
      'Community savings groups that help families build a financial safety net',
      'Training local community volunteers to carry on programs independently',
      'Supporting parents to enrol and keep their children in school long-term',
      'Connecting families to government support services and social protection schemes',
    ],
    stats: [
      { value: '900+', label: 'Families enrolled in resilience programs'            },
      { value: '75%',  label: 'Report improved financial stability within one year'  },
      { value: '40+',  label: 'Community volunteers trained and active'              },
    ],
  },
  {
    id: 'impact',
    label: 'Our Impact',
    tagline: "Every number is a real child's story",
    image: '/images/impact.webp',
    imageAlt: 'Community members sharing smiles during a family support gathering',
    intro:
      'We believe that accountability is not optional — it is a promise we make to every person who donates, volunteers, or places their trust in us. We measure everything, report transparently, and work continuously to improve.',
    body:
      'Since 2005, Hope Foundation has grown from a single program supporting 50 children in one community to a network reaching over 5,000 children across 45 communities in 12 countries. We publish annual impact reports and welcome independent audits of both our finances and our program outcomes.',
    activities: [
      'Publishing a detailed annual impact report freely available to all donors',
      'Allocating 85 cents of every dollar raised directly to child programs',
      'Conducting independent third-party program evaluations every two years',
      'Tracking individual progress outcomes for every child in our programs',
      'Sharing real stories and photo updates from the communities we serve',
      'Working toward the United Nations Sustainable Development Goals for children',
    ],
    stats: [
      { value: '5,000+', label: 'Children reached and supported since 2005'     },
      { value: '85¢',    label: 'Of every $1 donated goes directly to programs'  },
      { value: '45',     label: 'Communities served across 12 countries'         },
    ],
  },
];

export function getProgramById(id: string): ProgramDetail | undefined {
  return programDetails.find((p) => p.id === id);
}

export function getAllProgramIds(): string[] {
  return programDetails.map((p) => p.id);
}
