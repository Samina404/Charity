import type { Story } from '@/types';
import { IMAGES } from '../lib/images';

export const stories: Story[] = [
  {
    id: '1',
    slug: 'family-at-the-end-of-the-unpaved-road',
    title: 'The Family at the End of the Unpaved Road',
    excerpt:
      'An emergency food parcel reached a family in time to turn an empty table into a full one.',
    content:
      'In a village far from any main road, a family had reached the point where there was nothing left to give the children for dinner. An emergency food parcel, funded entirely through charity, arrived within days. It was not a large sum by international standards, but in that household it was the difference between an empty table and a full one.\n\nWhat This Story Teaches About Charity\nCharity does not need to be large to be transformative. It needs to arrive at the right moment, for the right family, with sincerity behind it.',
    childName: 'The Rahman Family',
    date: '2026-06-28',
    image: IMAGES.storyEmergency,
    category: 'Emergency Relief',
  },
  {
    id: '2',
    slug: 'widow-who-was-not-forgotten',
    title: 'The Widow Who Was Not Forgotten',
    excerpt:
      'Monthly food support gave a mother of three more than groceries. It gave her back a sense of dignity and stability.',
    content:
      'A widow raising three children alone had quietly stopped expecting help from anyone. When monthly food support began arriving through a charity programme, it did more than fill her cupboard. It told her, in a language stronger than words, that she had not been forgotten.\n\nWithin a few months, her household routine stabilised, and she began planning for her children\'s future again instead of just surviving the week.',
    childName: 'Samira and her children',
    date: '2026-06-14',
    image: IMAGES.storyResilience,
    category: 'Family Support',
  },
  {
    id: '3',
    slug: 'fasting-family-in-ramadan',
    title: 'The Fasting Family in Ramadan',
    excerpt:
      'A Ramadan parcel arrived before Maghrib and became a moment of gratitude for an entire family.',
    content:
      'During Ramadan, a fasting family in a remote village had nothing to break their fast with beyond plain water. Through a Ramadan-specific charity distribution, a parcel arrived just before Maghrib. Tradition holds that the prayer of a fasting person at the moment of breaking fast ascends with particular speed, and that evening the family prayed for the unknown donor whose charity reached them in time.\n\nThe meal was simple, but the relief was profound. For one evening, hunger was replaced by gratitude.',
    childName: 'The Hassan Family',
    date: '2026-05-27',
    image: '/images/ramadan.jpg',
    category: 'Ramadan Appeal',
  },
  {
    id: '4',
    slug: 'orphan-who-was-fed',
    title: 'The Orphan Who Was Fed',
    excerpt:
      'A meal programme fed an orphan and brought a donor closer to the softness charity can create.',
    content:
      'An orphan in a household stretched thin by loss had grown used to going without. A charity-funded meal programme changed that. The hadith says:\n\n"If you want your heart to be soft, feed the poor and pat the head of the orphan." (Ahmad)\n\nThis story is a direct illustration of that teaching. The orphan was fed, and somewhere, a donor\'s heart was softened by the act of giving.',
    childName: 'A young orphan',
    date: '2026-05-09',
    image: IMAGES.storyChild1,
    category: 'Orphans',
  },
  {
    id: '5',
    slug: 'household-saved-from-collapse',
    title: 'The Household Saved From Collapse',
    excerpt:
      'Emergency support prevented eviction and helped a struggling father breathe again.',
    content:
      'Sometimes charity does not just relieve hunger. It prevents a household from breaking apart entirely. A family facing eviction and an empty pantry at the same time received emergency support that addressed both.\n\nThe father, who had begun apologising nightly to his children, was finally able to sleep without that weight. What had felt like collapse became, with help, a chance to steady the home again.',
    childName: 'The Karim Family',
    date: '2026-04-19',
    image: IMAGES.storyShelter,
    category: 'Emergency Relief',
  },
  {
    id: '6',
    slug: 'village-with-no-clean-water',
    title: 'The Village With No Clean Water',
    excerpt:
      'A clean water initiative replaced years of contamination with safe water and regular school attendance.',
    content:
      'Charity is not only about food. In one village, families had been drinking from a contaminated source for years. A clean water initiative, funded through ongoing charity, gave the entire community access to safe water for the first time.\n\nChildren who had been frequently ill began attending school consistently again. Health, dignity, and learning all improved together.',
    childName: 'The village community',
    date: '2026-03-30',
    image: IMAGES.storyHealth,
    category: 'Clean Water',
  },
  {
    id: '7',
    slug: 'child-who-remembers-the-relief',
    title: 'The Child Who Remembers the Relief',
    excerpt:
      'Years later, a grown girl still remembers the feeling charity gave her family: breathing room.',
    content:
      'A young girl, now grown, recalls little about the specific donations that reached her household during difficult years, but she remembers the feeling. The arithmetic of poverty, briefly, became bearable.\n\nThat memory of relief, made possible entirely through charity, shaped how she views generosity today. She learned early that a gift can become a memory that lasts for years.',
    childName: 'A grown daughter',
    date: '2026-03-12',
    image: IMAGES.storyChild2,
    category: 'Lasting Impact',
  },
  {
    id: '8',
    slug: 'family-charity-has-not-yet-reached',
    title: 'The Family Your Charity Has Not Yet Reached',
    excerpt:
      'The final story is still waiting to be written, and it depends on whether help arrives in time.',
    content:
      'The final story has not been written yet. It belongs to a family who, right now, is waiting for a food parcel, for a month of support, for the simple message that the world has not passed them by.\n\nThis story depends on whether charity continues to move forward, and whether the next gift is sent.',
    childName: 'A waiting family',
    date: '2026-02-24',
    image: IMAGES.storyMission,
    category: 'Future Hope',
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getAllStorySlugs(): string[] {
  return stories.map((story) => story.slug);
}
