import { Locale } from '@/lib/dictionary';

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

const localizedPrograms: Record<Locale, ProgramDetail[]> = {
  en: [
    {
      id: 'education',
      label: 'Education',
      tagline: 'Learning opens every door',
      image: '/images/education.webp',
      imageAlt: 'Children seated in a bright classroom, engaged in learning',
      intro: 'Education is the most powerful tool we can give a child. When a child can read, write, and think critically, they gain the ability to shape their own future — and to lift their entire community.',
      body: 'Many children in the communities we serve have never had access to a proper classroom. School fees, lack of textbooks, or the need to work at home keeps them out of school. Hope Foundation removes these barriers one by one — so that every child, regardless of family income or location, can take their place in a classroom.',
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
      intro: 'A child who is hungry or unwell cannot focus, cannot learn, and cannot grow. Good nutrition and basic health care are not luxuries — they are the starting point for everything else we do.',
      body: 'Many children arrive at our centres having eaten nothing since the previous day. We run structured meal programs that provide a warm, balanced breakfast and lunch every school day. Beyond food, we work alongside local clinics to bring routine healthcare directly into the communities that need it most.',
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
      intro: "Safety is a child's most basic need. Without a secure, stable environment, no amount of food or teaching can unlock a child's potential. Our learning centres are designed to be the safest place in every community we serve.",
      body: 'For children from overcrowded or unstable homes, our centres offer more than just a place to learn. They are a refuge — somewhere warm, clean, and supervised — where every child is known by name and looked after by caring, trained staff every single day.',
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
      intro: 'When floods, droughts, or other hardships hit, children suffer most. Families lose their homes, schools close, and children go without food for days. Hope Foundation mobilises quickly to make sure no child is left behind in a crisis.',
      body: 'We maintain emergency supply stockpiles in all 12 countries where we operate. When a disaster strikes, our local teams are on the ground within 48 hours — distributing essentials and carefully assessing which children and families need the most urgent support.',
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
      intro: 'True change lasts only when families and communities have the tools to sustain it themselves. Resilience is about more than recovering from hardship — it is about building the skills, confidence, and resources to prevent hardship from taking hold in the first place.',
      body: 'We work alongside parents, grandparents, and community leaders — because when adults are supported and informed, children benefit directly. Our resilience programs are co-designed with local communities so they reflect real needs rather than assumptions from the outside.',
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
      intro: 'We believe that accountability is not optional — it is a promise we make to every person who donates, volunteers, or places their trust in us. We measure everything, report transparently, and work continuously to improve.',
      body: 'Since 2005, Hope Foundation has grown from a single program supporting 50 children in one community to a network reaching over 5,000 children across 45 communities in 12 countries. We publish annual impact reports and welcome independent audits of both our finances and our program outcomes.',
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
  ],
  bn: [
    {
      id: 'education',
      label: 'শিক্ষা',
      tagline: 'শিক্ষা প্রতিটি দুয়ার খুলে দেয়',
      image: '/images/education.webp',
      imageAlt: 'শিশুরা উজ্জ্বল একটি ক্লাসরুমে বসে মনোযোগ দিয়ে শিখছে',
      intro: 'শিক্ষা হলো সবচেয়ে শক্তিশালী হাতিয়ার যা আমরা একটি শিশুকে দিতে পারি। যখন একটি শিশু পড়তে, লিখতে এবং গভীরভাবে চিন্তা করতে পারে, তখন সে নিজের ভবিষ্যৎ গড়ার এবং তার পুরো সম্প্রদায়কে বদলে দেওয়ার ক্ষমতা অর্জন করে।',
      body: 'আমাদের সেবা দেওয়া অনেক সম্প্রদায়ের শিশুরই কখনো উপযুক্ত ক্লাসরুমে যাওয়ার সুযোগ হয়নি। স্কুলের বেতন দিতে না পারা, পাঠ্যপুস্তকের অভাব বা বাড়িতে কাজের সহায়তার প্রয়োজন তাদের স্কুল থেকে দূরে রাখে। হোপ ফাউন্ডেশন এই বাধাগুলো একে একে দূর করে — যাতে পারিবারিক আয় বা অবস্থান নির্বিশেষে প্রতিটি শিশু ক্লাসরুমে তার জায়গা করে নিতে পারে।',
      activities: [
        'প্রতি বছর স্কুল ইউনিফর্ম, স্কুলব্যাগ, নোটবুক এবং স্টেশনারি সামগ্রী প্রদান করা',
        'সবচেয়ে অসচ্ছল পরিবারের শিশুদের টিউশন ফি স্পনসর করা',
        'ডেস্ক, ব্ল্যাকবোর্ড এবং উপযুক্ত আলোর ব্যবস্থা সহ ক্লাসরুম নির্মাণ ও সংস্কার করা',
        'প্রশিক্ষিত স্বেচ্ছাসেবক শিক্ষকদের নিয়ে স্কুল-পরবর্তী টিউটরিং সেশন পরিচালনা',
        'যেসব বয়স্ক শিশু শৈশবে স্কুলে যেতে পারেনি তাদের জন্য সাক্ষরতা ক্লাসের আয়োজন করা',
        'কন্যাশিশুদের শিক্ষার ক্ষেত্রে যেসব সম্প্রদায়ে বৈষম্য রয়েছে সেখানে সচেতনতা বৃদ্ধি ও সহযোগিতা করা',
      ],
      stats: [
        { value: '৩,২০০+', label: 'বর্তমানে স্কুলে পড়াশোনায় সহায়তা প্রাপ্ত শিশু' },
        { value: '৮৭%',    label: 'আমাদের কর্মসূচিতে স্কুলে উপস্থিতির হার'  },
        { value: '১২০+',   label: 'প্রশিক্ষিত স্বেচ্ছাসেবক শিক্ষক'              },
      ],
    },
    {
      id: 'health',
      label: 'স্বাস্থ্য ও পুষ্টি',
      tagline: 'একটি পেটভরা শিশুই প্রকৃত শিক্ষা নিতে পারে',
      image: '/images/health.webp',
      imageAlt: 'অভিভাবক এবং শিশুরা একটি কমিউনিটি রান্নাঘরে একসাথে খাবার তৈরি করছেন',
      intro: 'একটি শিশু যে ক্ষুধার্ত বা অসুস্থ সে কখনো পড়াশোনায় মনোযোগ দিতে পারে না এবং বেড়ে উঠতে পারে না। ভালো পুষ্টি এবং মৌলিক স্বাস্থ্যসেবা কোনো বিলাসিতা নয় — এগুলো আমাদের প্রতিটি কার্যক্রমের প্রারম্ভিক ভিত্তি।',
      body: 'অনেক শিশু আগের দিন থেকে কিছু না খেয়েই আমাদের কেন্দ্রে আসে। আমরা একটি কাঠামোগত খাবার কর্মসূচি পরিচালনা করি যা প্রতিটি স্কুলের দিনে পুষ্টিকর ও ভারসাম্যপূর্ণ সকালের নাস্তা এবং দুপুরের খাবার সরবরাহ করে। খাবারের পাশাপাশি আমরা স্থানীয় ক্লিনিকগুলোর সাথে কাজ করি যাতে সবচেয়ে প্রয়োজনীয় সম্প্রদায়গুলোতে সরাসরি নিয়মিত স্বাস্থ্যসেবা পৌঁছে দেওয়া যায়।',
      activities: [
        'আমাদের সমস্ত কেন্দ্র জুড়ে প্রতিদিন ১,৮০০টিরও বেশি পুষ্টিকর খাবার পরিবেশন',
        'সাবান, টুথব্রাশ এবং স্যানিটারি সামগ্রী সহ মাসিক স্বাস্থ্যবিধি কিট বিতরণ',
        'ত্রৈমাসিক স্বাস্থ্য পরীক্ষা এবং বৃদ্ধি পর্যবেক্ষণের জন্য স্থানীয় নার্সদের সাথে অংশীদারিত্ব',
        'অপুষ্টির লক্ষণযুক্ত শিশুদের ভিটামিন এবং আয়রন সাপ্লিমেন্ট প্রদান করা',
        'শিশু ও অভিভাবকদের জন্য হাত ধোয়া এবং স্বাস্থ্য সচেতনতা সেশন চালানো',
        'প্রতিটি কেন্দ্রে ফিল্টারিং সিস্টেম স্থাপনের মাধ্যমে বিশুদ্ধ খাবার পানি সরবরাহ',
      ],
      stats: [
        { value: '১,৮০০+', label: 'প্রতিদিন পরিবেশন করা খাবার সংখ্যা'                },
        { value: '৯৬%',    label: 'তীব্র অপুষ্টি থেকে মুক্ত শিশু'        },
        { value: '২২',     label: 'স্থানীয় স্বাস্থ্য ক্লিনিক যাদের সাথে আমরা অংশীদার'         },
      ],
    },
    {
      id: 'shelter',
      label: 'নিরাপদ আশ্রয়',
      tagline: 'প্রতিটি শিশুই একটি নিরাপদ স্থানের অধিকারী',
      image: '/images/shelter.webp',
      imageAlt: 'নারী ও শিশুরা খেলনা ও ম্যাট সহ একটি নিরাপদ আশ্রয় কক্ষে খেলছেন',
      intro: 'নিরাপত্তা একটি শিশুর সবচেয়ে মৌলিক প্রয়োজন। একটি সুরক্ষিত ও স্থিতিশীল পরিবেশ ছাড়া কোনো খাবার বা শিক্ষা শিশুর সুপ্ত প্রতিভাকে বিকশিত করতে পারে না। আমাদের লার্নিং সেন্টারগুলো প্রতিটি সম্প্রদায়ের সবচেয়ে নিরাপদ স্থান হিসেবে গড়ে তোলা হয়েছে।',
      body: 'অতিরিক্ত জনাকীর্ণ বা অস্থির পরিবারের শিশুদের জন্য আমাদের কেন্দ্রগুলো কেবল শেখার জায়গার চেয়েও বেশি কিছু অফার করে। এগুলো তাদের জন্য একটি আশ্রয়স্থল — উষ্ণ, পরিচ্ছন্ন এবং তত্ত্বাবধানকৃত স্থান — যেখানে প্রতিটি শিশুকে নামে জানা যায় এবং যত্নশীল ও প্রশিক্ষিত কর্মী দ্বারা প্রতিদিন দেখাশোনা করা হয়।',
      activities: [
        'প্রশিক্ষিত ও ব্যাকগ্রাউন্ড-যাচাইকৃত কর্মী সহ ৪৫টির বেশি শিশু-বান্ধব স্থান',
        'কর্মজীবী অভিভাবকদের সন্তানদের জন্য নিরাপদ ও তত্ত্বাবধানে স্কুল-পরবর্তী যত্ন',
        'মানসিক আঘাত বা শোকের মুখোমুখি হওয়া শিশুদের জন্য ব্যক্তিগত পরামর্শ সেশন',
        'আত্মবিশ্বাস ও আনন্দ বাড়াতে সাপ্তাহিক গ্রুপ কার্যক্রম — খেলাধুলা, আর্ট, নাটক',
        'সব কটি কেন্দ্রই শিশু-নিরাপত্তা ও অগ্নিনির্বাপণ বিল্ডিং মানদণ্ড পূরণ করে',
        'সকল কর্মী এবং স্বেচ্ছাসেবক শিশু সুরক্ষা নীতিমালায় প্রশিক্ষিত',
      ],
      stats: [
        { value: '৪৫+',    label: 'নিরাপদ শিক্ষা কেন্দ্র চালু রয়েছে'     },
        { value: '২,৪০০+', label: 'প্রতি সপ্তাহে আমাদের কেন্দ্র ব্যবহারকারী শিশু'  },
        { value: '১০০%',   label: 'কর্মী যারা শিশু সুরক্ষায় প্রশিক্ষিত'   },
      ],
    },
    {
      id: 'emergencies',
      label: 'জরুরি ত্রাণ',
      tagline: 'সবচেয়ে কঠিন মুহূর্তে সমর্থন',
      image: '/images/food-bank-volunteers.webp',
      imageAlt: 'হোপ ফাউন্ডেশন টিম অভাবী পরিবারগুলোর মাঝে ত্রাণ সামগ্রী বিতরণ করছে',
      intro: 'যখন বন্যা, খরা বা অন্যান্য বিপর্যয় দেখা দেয়, তখন শিশুরা সবচেয়ে বেশি কষ্ট পায়। পরিবারগুলো তাদের ঘরবাড়ি হারায়, স্কুল বন্ধ হয়ে যায় এবং শিশুরা দিনের পর দিন না খেয়ে থাকে। হোপ ফাউন্ডেশন দ্রুত সাড়া দিয়ে সংকটে কোনো শিশু যাতে পিছিয়ে না থাকে তা নিশ্চিত করে।',
      body: 'আমরা যে ১২টি দেশে কাজ করি তার সবকটিতেই জরুরি ত্রাণের মজুত রাখি। যখন কোনো দুর্যোগ আঘাত হানে, আমাদের স্থানীয় দলগুলো ৪৮ ঘণ্টার মধ্যে মাঠে নেমে পড়ে — প্রয়োজনীয় সামগ্রী বিতরণ করে এবং কোন পরিবারগুলোর সবচেয়ে জরুরি সহায়তা প্রয়োজন তা সতর্কতার সাথে মূল্যায়ন করে।',
      activities: [
        'এক সপ্তাহের প্রধান খাদ্য সামগ্রী সহ জরুরি খাদ্য প্যাকেজ বিতরণ',
        'বহনযোগ্য পাত্রে বিশুদ্ধ পানি এবং পানি বিশুদ্ধকরণ ট্যাবলেট সরবরাহ করা',
        'স্কুল কিট বিতরণ যাতে স্কুল খোলার পর শিশুরা পড়াশোনায় ফিরে যেতে পারে',
        'বাস্তুচ্যুত পরিবারগুলোর মাঝে কম্বল এবং মৌলিক পোশাক বিতরণ',
        'আশ্রয় শিবিরগুলোতে অস্থায়ী শিশু-বান্ধব স্থান স্থাপন করা',
        'তীব্র সংকট কাটার পর পরিবারগুলোকে দীর্ঘমেয়াদী সহায়তা কর্মসূচির সাথে যুক্ত করা',
      ],
      stats: [
        { value: '১২',     label: 'জরুরি সাড়াদানকারী দল সম্পন্ন দেশ'    },
        { value: '৪৮ ঘণ্টা', label: 'দুর্যোগের পর গড় প্রতিক্রিয়া সময়'       },
        { value: '৮,০০০+', label: 'অতীতের জরুরি পরিস্থিতিতে সাহায্যপ্রাপ্ত পরিবার'   },
      ],
    },
    {
      id: 'resilience',
      label: 'স্থিতিস্থাপকতা',
      tagline: 'পরিবারগুলোকে দীর্ঘমেয়াদী ক্ষমতায়ন',
      image: '/images/resilience.webp',
      imageAlt: 'একটি পারিবারিক কর্মশালায় অভিভাবক এবং শিশুরা একসাথে কাজ করছেন',
      intro: 'প্রকৃত পরিবর্তন তখনই স্থায়ী হয় যখন পরিবার ও সম্প্রদায়ের কাছে তা নিজে পরিচালনা করার মতো সরঞ্জাম থাকে। স্থিতিস্থাপকতা বলতে কেবল কঠিন পরিস্থিতি কাটিয়ে ওঠাকে বোঝায় না — এটি এমন দক্ষতা, আত্মবিশ্বাস ও সম্পদ গড়ে তোলা যা ভবিষ্যৎ সংকট প্রতিরোধে সাহায্য করে।',
      body: 'আমরা অভিভাবক এবং সম্প্রদায়ের নেতাদের সাথে কাজ করি — কারণ যখন প্রাপ্তবয়স্করা সমর্থিত ও সচেতন হন, তখন শিশুরা সরাসরি উপকৃত হয়। আমাদের স্থিতিস্থাপকতা কর্মসূচিগুলো স্থানীয় সম্প্রদায়ের সাথে সহ-নকশা করা হয় যাতে তা বাইরের কোনো অনুমানের পরিবর্তে তাদের প্রকৃত চাহিদা প্রতিফলিত করে।',
      activities: [
        'শিশু বিকাশ, ইতিবাচক শৃঙ্খলা এবং পুষ্টির উপর মাসিক প্যারেন্টিং কর্মশালা',
        'অভিভাবকদের জন্য বৃত্তিমূলক দক্ষতা প্রশিক্ষণ — সেলাই, ক্ষুদ্র ব্যবসা, কৃষি',
        'কমিউনিটি সঞ্চয় গ্রুপ যা পরিবারগুলোকে একটি আর্থিক নিরাপত্তা জাল তৈরিতে সহায়তা করে',
        'স্বাধীনভাবে কার্যক্রম চালিয়ে যাওয়ার জন্য স্থানীয় সম্প্রদায়ের স্বেচ্ছাসেবকদের প্রশিক্ষণ দেওয়া',
        'অভিভাবকদের তাদের সন্তানদের দীর্ঘমেয়াদে স্কুলে ভর্তি ও ধরে রাখতে সহায়তা করা',
        'পরিবারগুলোকে সরকারি সহায়তা ও সামাজিক সুরক্ষা কর্মসূচির সাথে যুক্ত করা',
      ],
      stats: [
        { value: '৯০০+', label: 'স্থিতিস্থাপকতা কর্মসূচিতে নিবন্ধিত পরিবার'            },
        { value: '৭৫%',  label: 'এক বছরের মধ্যে উন্নত আর্থিক স্থিতিশীলতার রিপোর্ট'  },
        { value: '৪০+',  label: 'সক্রিয় ও প্রশিক্ষিত কমিউনিটি স্বেচ্ছাসেবক'              },
      ],
    },
    {
      id: 'impact',
      label: 'আমাদের প্রভাব',
      tagline: 'প্রতিটি সংখ্যাই একটি বাস্তব শিশুর গল্প',
      image: '/images/impact.webp',
      imageAlt: 'একটি পারিবারিক সহায়তা সমাবেশে হাসি ভাগ করে নেওয়া সম্প্রদায়ের সদস্যরা',
      intro: 'আমরা বিশ্বাস করি যে জবাবদিহিতা কোনো ঐচ্ছিক বিষয় নয় — এটি একটি প্রতিশ্রুতি যা আমরা প্রতিটি দাতাকে, স্বেচ্ছাসেবককে এবং আমাদের বিশ্বাস করা প্রতিটি মানুষকে দিই। আমরা সবকিছু পরিমাপ করি, স্বচ্ছভাবে প্রতিবেদন প্রকাশ করি এবং ক্রমাগত উন্নতির জন্য কাজ করি।',
      body: '২০০৫ সাল থেকে হোপ ফাউন্ডেশন একটি একক কর্মসূচি থেকে একটি নেটওয়ার্কে পরিণত হয়েছে যা আজ ১২টি দেশের ৪৫টি সম্প্রদায়ের ৫,০০০-এরও বেশি শিশুর কাছে পৌঁছেছে। আমরা বার্ষিক প্রভাব প্রতিবেদন প্রকাশ করি এবং আমাদের অর্থ ও কর্মসূচি উভয়েরই স্বাধীন নিরীক্ষাকে স্বাগত জানাই।',
      activities: [
        'দাতাদের জন্য উন্মুক্ত একটি বিশদ বার্ষিক প্রভাব প্রতিবেদন প্রকাশ করা',
        'সংগৃহীত প্রতি ডলারের ৮৫ সেন্ট সরাসরি শিশুদের কর্মসূচিতে বরাদ্দ করা',
        'প্রতি দুই বছর পর পর কর্মসূচির স্বাধীন তৃতীয় পক্ষের মূল্যায়ন পরিচালনা করা',
        'আমাদের কর্মসূচিতে থাকা প্রতিটি শিশুর ব্যক্তিগত অগ্রগতির ফলাফল ট্র্যাক করা',
        'আমরা যে সম্প্রদায়গুলোতে কাজ করি সেখান থেকে বাস্তব গল্প এবং ফটো আপডেট শেয়ার করা',
        'শিশুদের জন্য জাতিসংঘের টেকসই উন্নয়ন লক্ষ্যমাত্রা (SDGs) অর্জনে কাজ করা',
      ],
      stats: [
        { value: '৫,০০০+', label: '২০০৫ সাল থেকে এ পর্যন্ত পৌঁছে যাওয়া শিশুর সংখ্যা'     },
        { value: '৮৫ পয়সা',  label: 'প্রতি ১ ডলার অনুদানের মধ্যে সরাসরি কর্মসূচিতে যায়'  },
        { value: '৪৫',     label: '১২টি দেশ জুড়ে সেবা দেওয়া সম্প্রদায়'         },
      ],
    },
  ],
  ar: [
    {
      id: 'education',
      label: 'التعليم',
      tagline: 'التعليم يفتح كل الأبواب',
      image: '/images/education.webp',
      imageAlt: 'أطفال يجلسون في فصل دراسي مضيء، منخرطون في التعلم',
      intro: 'التعليم هو أقوى أداة يمكننا منحها للطفل. عندما يتمكن الطفل من القراءة والكتابة والتفكير النقدي، فإنه يكتسب القدرة على تشكيل مستقبله الخاص - والنهوض بمجتمعه بأكمله.',
      body: 'لم تتح الفرصة للعديد من الأطفال في المجتمعات التي نخدمها لدخول فصل دراسي مناسب. الرسوم المدرسية، أو الافتقار إلى الكتب المدرسية، أو الحاجة إلى العمل في المنزل تبقيهم خارج المدرسة. تعمل مؤسسة الأمل على إزالة هذه العقبات واحدة تلو الأخرى - حتى يتمكن كل طفل، بغض النظر عن دخل أسرته أو موقعه، من أخذ مكانه في المدرسة.',
      activities: [
        'توفير الزي المدرسي والحقائب المدرسية والدفاتر والأدوات القرطاسية كل عام',
        'رعاية الرسوم الدراسية للأطفال من الأسر الأكثر ضعفاً واحتياجاً',
        'بناء وترميم الفصول الدراسية وتزويدها بالمقاعد والسبورات والإضاءة المناسبة',
        'إقامة جلسات تقوية بعد المدرسة يقودها معلمون متطوعون مدربون',
        'تقديم فصول لمحو الأمية للأطفال الأكبر سناً الذين فاتهم التعليم الأساسي',
        'دعم تعليم الفتيات في المجتمعات التي لا تزال تعاني من فجوات في تمدرس الإناث',
      ],
      stats: [
        { value: '٣,٢٠٠+', label: 'الأطفال المدعومون حالياً في المدارس' },
        { value: '٨٧%',    label: 'معدل الحضور المدرسي في برامجنا'  },
        { value: '١٢٠+',   label: 'المعلمون المتطوعون المدربون'              },
      ],
    },
    {
      id: 'health',
      label: 'الصحة والتغذية',
      tagline: 'الطفل الذي يتناول غذاءً جيداً يمكنه التعلم حقاً',
      image: '/images/health.webp',
      imageAlt: 'آباء وأطفال يعدون الطعام معاً في مطبخ مجتمعي',
      intro: 'لا يمكن للطفل الجائع أو المريض أن يركز أو يتعلم أو ينمو. التغذية الجيدة والرعاية الصحية الأساسية ليست من الرفاهيات، بل هي نقطة الانطلاق لكل ما نقوم به.',
      body: 'يصل العديد من الأطفال إلى مراكزنا ولم يتناولوا أي طعام منذ اليوم السابق. نحن ندير برامج وجبات منظمة توفر وجبة إفطار وغداء دافئة ومتوازنة كل يوم دراسي. وإلى جانب الغذاء، نعمل جنباً إلى جنب مع العيادات المحلية لتقديم الرعاية الصحية الروتينية مباشرة إلى المجتمعات الأكثر احتياجاً.',
      activities: [
        'تقديم أكثر من ١,٨٠٠ وجبة مغذية يومياً في جميع مراكزنا',
        'توزيع مستلزمات النظافة الشخصية الشهرية بما في ذلك الصابون وفراشي الأسنان والمعجون',
        'الشراكة مع الممرضات المحليين لإجراء فحوصات صحية ربع سنوية ومراقبة النمو',
        'تقديم مكملات الفيتامينات والحديد للأطفال الذين تظهر عليهم علامات سوء التغذية',
        'إقامة جلسات توعية بغسل اليدين والنظافة الشخصية للأطفال والآباء',
        'توفير مياه الشرب النظيفة من خلال تركيب أنظمة فلترة المياه في كل مركز',
      ],
      stats: [
        { value: '١,٨٠٠+', label: 'الوجبات المقدمة يومياً'                },
        { value: '٩٦%',    label: 'الأطفال الخالون من سوء التغذية الحاد'        },
        { value: '٢٢',     label: 'العيادات الصحية المحلية التي نشاركها'         },
      ],
    },
    {
      id: 'shelter',
      label: 'المأوى الآمن',
      tagline: 'كل طفل يستحق مكاناً آمناً',
      image: '/images/shelter.webp',
      imageAlt: 'نساء وأطفال يلعبون في غرفة مأوى آمنة مع الألعاب والحصائر',
      intro: 'الأمان هو أبسط احتياجات الطفل. فبدون بيئة آمنة ومستقرة، لن يتمكن أي قدر من الطعام أو التعليم من إطلاق إمكانات الطفل. وقد تم تصميم مراكز التعلم لدينا لتكون المكان الأكثر أماناً في كل مجتمع نخدمه.',
      body: 'بالنسبة للأطفال الذين يعيشون في منازل مزدحمة أو غير مستقرة، تقدم مراكزنا أكثر من مجرد مكان للتعلم؛ إنها ملاذ دافئ ونظيف وخاضع للإشراف، حيث يُعرف كل طفل باسمه وتتم رعايته من قبل موظفين مدربين ومتعاطفين يومياً.',
      activities: [
        'توفير أكثر من ٤٥ مساحة صديقة للطفل مع موظفين مدربين ومؤهلين',
        'رعاية آمنة وخاضعة للإشراف بعد المدرسة لأطفال الآباء العاملين',
        'جلسات إرشاد وتوجيه فردية للأطفال الذين يعانون من صدمات نفسية أو فقدان أسرهم',
        'أنشطة جماعية أسبوعية - رياضة، فن، دراما - لبناء الثقة بالنفس وبث البهجة',
        'تلبي جميع المراكز معايير سلامة المباني والوقاية من الحرائق للأطفال',
        'تدريب جميع الموظفين والمتطوعين على سياسات حماية الطفل والدفاع عنه',
      ],
      stats: [
        { value: '٤٥+',    label: 'مراكز التعلم الآمنة المفعلة حالياً'     },
        { value: '٢,٤٠٠+', label: 'الأطفال الذين يستخدمون مراكزنا أسبوعياً'  },
        { value: '١٠٠%',   label: 'الموظفون المدربون على حماية وسلامة الطفل'   },
      ],
    },
    {
      id: 'emergencies',
      label: 'الإغاثة الطارئة',
      tagline: 'الدعم والمساندة في أصعب الأوقات',
      image: '/images/food-bank-volunteers.webp',
      imageAlt: 'فريق مؤسسة الأمل يوزع مستلزمات الإغاثة على العائلات المحتاجة',
      intro: 'عندما تضرب الفيضانات أو الجفاف أو غيرها من الكوارث، يكون الأطفال هم الأكثر معاناة. تفقد العائلات منازلها، وتغلق المدارس أبوابها، ويمضي الأطفال أياماً دون طعام. تتحرك مؤسسة الأمل بسرعة لضمان عدم ترك أي طفل في الأزمات.',
      body: 'نحتفظ بمخزون من الإمدادات الطارئة في جميع البلدان الـ ١٢ التي نعمل فيها. وعند وقوع الكارثة، تتواجد فرقنا المحلية على الأرض في غضون ٤٨ ساعة لتوزيع الأساسيات وتقييم العائلات والأطفال الأكثر احتياجاً للدعم العاجل.',
      activities: [
        'توزيع طرود غذائية طارئة تحتوي على ما يكفي الأسرة من الأغذية الأساسية لمدة أسبوع',
        'توفير المياه النظيفة في حاويات محمولة وأقراص تنقية المياه لمنع الأمراض',
        'تقديم الحقائب المدرسية لتمكين الأطفال من العودة للتعلم فور إعادة فتح المدارس',
        'توزيع البطانيات الدافئة والملابس الأساسية على العائلات النازحة والمتضررة',
        'إنشاء مساحات مؤقتة صديقة للأطفال في ملاجئ الإخلاء ومراكز الإيواء',
        'ربط العائلات ببرامج دعم طويلة الأجل بعد انقضاء الحالة الطارئة الحادة',
      ],
      stats: [
        { value: '١٢',     label: 'بلداً يضم فرق استجابة للطوارئ'    },
        { value: '٤٨ ساعة', label: 'متوسط سرعة الاستجابة بعد حدوث الأزمة'       },
        { value: '٨,٠٠٠+', label: 'العائلات التي وصلنا إليها في حالات الطوارئ السابقة'   },
      ],
    },
    {
      id: 'resilience',
      label: 'المرونة والتنمية',
      tagline: 'تمكين العائلات على المدى الطويل',
      image: '/images/resilience.webp',
      imageAlt: 'آباء وأطفال يتعاونون في ورشة عمل عائلية',
      intro: 'التغيير الحقيقي يدوم فقط عندما تمتلك العائلات والمجتمعات الأدوات والقدرات اللازمة للحفاظ عليه بأنفسهم. المرونة تعني أكثر من مجرد التعافي من الكوارث؛ إنها بناء المهارات والثقة والموارد لمنع حدوث الأزمات من الأساس.',
      body: 'نحن نعمل جنباً إلى جنب مع الآباء والأجداد وقادة المجتمع - لأنه عندما يتم دعم البالغين وتوعيتهم، يستفيد الأطفال بشكل مباشر. وتُصمم برامج المرونة لدينا بمشاركة المجتمعات المحلية لتعكس احتياجاتها الحقيقية بدلاً من فرض افتراضات خارجية.',
      activities: [
        'ورش عمل تربوية شهرية حول نمو الطفل، والتربية الإيجابية، والتغذية السليمة',
        'تدريب على المهارات المهنية - الخياطة، المشاريع الصغيرة، الزراعة - لمدبري رعاية الأطفال',
        'إنشاء مجموعات ادخار مجتمعية لمساعدة العائلات على بناء شبكة أمان مالي',
        'تدريب متطوعين من المجتمع المحلي لمواصلة تشغيل البرامج بشكل مستقل ومستدام',
        'مساعدة الآباء على تسجيل أطفالهم في المدارس وإبقائهم فيها على المدى الطويل',
        'ربط العائلات بخدمات الدعم الحكومية وبرامج الحماية الاجتماعية المتاحة',
      ],
      stats: [
        { value: '٩٠٠+', label: 'العائلات المسجلة في برامج التنمية والمرونة'            },
        { value: '٧٥%',  label: 'العائلات التي أبلغت عن استقرار مالي محسن في غضون عام'  },
        { value: '٤٠+',  label: 'المتطوعون المحليون المدربون والنشطون'              },
      ],
    },
    {
      id: 'impact',
      label: 'أثرنا الإنساني',
      tagline: 'كل رقم هو قصة طفل حقيقية',
      image: '/images/impact.webp',
      imageAlt: 'أفراد المجتمع يبتسمون خلال لقاء دعم عائلي مشترك',
      intro: 'نحن نؤمن بأن المسؤولية والمساءلة ليست خياراً ثانوياً - بل هي وعد نقطعه لكل شخص يتبرع، أو يتطوع، أو يضع ثقته فينا. نحن نقيس كل شيء، ونقدم التقارير بشفافية، ونعمل باستمرار على التحسين والتطوير.',
      body: 'منذ عام ٢٠٠٥، نمت مؤسسة الأمل من برنامج فردي يدعم ٥٠ طفلاً في مجتمع واحد إلى شبكة تصل إلى أكثر من ٥,٠٠٠ طفل في ٤٥ مجتمعاً محلياً في ١٢ دولة. نحن ننشر تقارير الأثر السنوية ونرحب بالتدقيق المستقل لماليتنا ونتائج برامجنا.',
      activities: [
        'نشر تقرير أثر سنوي مفصل ومتاح مجاناً لجميع المانحين والداعمين',
        'تخصيص ٨٥ سنتاً من كل دولار يتم جمعه مباشرة لبرامج رعاية الأطفال الميدانية',
        'إجراء تقييمات مستقلة للبرامج من قبل أطراف ثالثة كل سنتين بانتظام',
        'تتبع نتائج التقدم الفردي لكل طفل مسجل في برامجنا التنموية',
        'مشاركة قصص حقيقية وتحديثات مصورة من قلب المجتمعات المحلية التي نخدمها',
        'العمل على تحقيق أهداف التنمية المستدامة للأمم المتحدة الخاصة بالأطفال والتعليم',
      ],
      stats: [
        { value: '٥,٠٠٠+', label: 'الأطفال الذين تم الوصول إليهم ودعمهم منذ عام ٢٠٠٥'     },
        { value: '٨٥٪',    label: 'من كل دولار متبرع به يذهب مباشرة لخدمة الأطفال'  },
        { value: '٤٥',     label: 'مجتمعاً محلياً نخدمه في ١٢ دولة حول العالم'         },
      ],
    },
  ],
};

export const programDetails = localizedPrograms.en; // fallback

export function getPrograms(lang: Locale): ProgramDetail[] {
  return localizedPrograms[lang] ?? localizedPrograms.en;
}

export function getProgramById(id: string, lang: Locale): ProgramDetail | undefined {
  const list = getPrograms(lang);
  return list.find((p) => p.id === id);
}

export function getAllProgramIds(): string[] {
  return localizedPrograms.en.map((p) => p.id);
}
