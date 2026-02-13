import type { Story, CategoryLabel } from '@/types/story';

export const CATEGORIES: CategoryLabel[] = [
  { id: 'repentance', labelAr: 'التوبة', labelEn: 'Repentance' },
  { id: 'gratitude', labelAr: 'الشكر', labelEn: 'Gratitude' },
  { id: 'patience', labelAr: 'الصبر', labelEn: 'Patience' },
  { id: 'forgiveness', labelAr: 'المغفرة', labelEn: 'Forgiveness' },
  { id: 'mercy', labelAr: 'الرحمة', labelEn: 'Mercy' },
];

export const STORIES: Story[] = [
  {
    id: '1',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'من ضيق اليتم إلى سعة الملايين: قصة أرملة غيّر الاستغفار حياتها',
        content: 'قصة ملهمة لأرملة واجهت الفقد والفقر بخمسة أيتام، وكيف تبدلت حالها من الحزن واليأس إلى السعادة والثراء بفضل لزوم الاستغفار.',
        excerpt: 'قصة ملهمة لأرملة واجهت الفقد والفقر بخمسة أيتام...',
      },
      en: {
        title: 'From Orphan Poverty to Millions: A Widow\'s Story',
        content: 'An inspiring story of a widow who faced loss and poverty with five orphans, and how her situation transformed from sadness and despair to happiness and wealth through constant istighfar.',
        excerpt: 'An inspiring story of a widow who faced loss and poverty...',
      },
    },
  },
  {
    id: '2',
    category: 'gratitude',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 2,
    translations: {
      ar: {
        title: 'دعوات مستجابة خلف فرن الخبز: قصة الإمام أحمد والخبّاز',
        content: '## المحنة\n\nحاول الإمام أن يبيت في المسجد، لكن حارسه منعه بشدة وقسوة...',
        excerpt: 'كيف ساق الله إمام أهل السنة ليحقق أمنية خبّاز...',
      },
      en: {
        title: 'Answered Prayers Behind the Bakery: Imam Ahmad and the Baker',
        content: 'The story of how Allah guided Imam Ahmad to fulfill the wish of a simple baker who never ceased saying istighfar.',
        excerpt: 'How Allah guided Imam Ahmad to fulfill a baker\'s wish...',
      },
    },
  },
  {
    id: '3',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 2,
    translations: {
      ar: {
        title: 'الدواء الشامل لكل داء: وصفة الحسن البصري العجيبة',
        content: '## العبرة من القصة\n\nتؤكد لنا مدرسة الحسن البصري أن الاستغفار...',
        excerpt: 'وصفة الحسن البصري الشاملة لكل داء...',
      },
      en: {
        title: 'The Comprehensive Cure: Al-Hasan Al-Basri\'s Recipe',
        content: 'Al-Hasan Al-Basri taught that istighfar is a comprehensive protocol for prosperity, not just for seeking forgiveness.',
        excerpt: 'Al-Hasan Al-Basri\'s comprehensive recipe for all ailments...',
      },
    },
  },
  {
    id: '4',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'من وطأة الديون إلى سعة الرصيد: قصة المال المبارك',
        content: '## المحنة\n\nكان الرجل يعاني من "وجه فقر"...',
        excerpt: 'كيف حول الاستغفار ديوناً إلى وفرة...',
      },
      en: {
        title: 'From Debt Burden to Abundant Balance: The Blessed Money',
        content: 'A story of how istighfar transformed debts into abundance without increasing income.',
        excerpt: 'How istighfar transformed debts into abundance...',
      },
    },
  },
  {
    id: '5',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'حين تتحطم القيود بالذكر: قصة السجين الذي استنزل الفرج',
        content: '## المحنة\n\nكان صاحب القصة رجلاً فقيراً...',
        excerpt: 'قصة سجين حرره الاستغفار من قيوده...',
      },
      en: {
        title: 'When Chains Break by Remembrance: The Prisoner\'s Story',
        content: 'The story of a prisoner who was freed from his chains through istighfar.',
        excerpt: 'A prisoner freed from his chains through istighfar...',
      },
    },
  },
  {
    id: '6',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'حين تهدي السماء "بشارة": قصة الفوز بالسيارة',
        content: '## المحنة\n\nكانت الزوجة تراقب بصمت معاناة زوجها...',
        excerpt: 'كيف فازت بسيارة ببركة الاستغفار...',
      },
      en: {
        title: 'When the Sky Gives "Glad Tidings": The Car Win Story',
        content: 'A story of how a woman won a car through the blessings of istighfar.',
        excerpt: 'How a woman won a car through istighfar blessings...',
      },
    },
  },
  {
    id: '7',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'حين يضحك القدر بعد ثلاثين عاماً: معجزة الأمومة بالاستغفار',
        content: '## المحنة\n\nثلاثون عاماً من الشوق المتجدد...',
        excerpt: 'معجزة أنجاب بعد ثلاثين عاماً بالاستغفار...',
      },
      en: {
        title: 'When Destiny Smiles After Thirty Years: The Motherhood Miracle',
        content: 'The miraculous story of a woman who became a mother after 30 years through istighfar.',
        excerpt: 'A motherhood miracle after 30 years through istighfar...',
      },
    },
  },
  {
    id: '8',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'حين ينهزم الألم بالذكر: قصة الشفاء من السحر بالاستغفار',
        content: '## المحنة\n\n## نقطة التحول\n\n## النتيجة\n\n---\n\n## العبرة من القصة\n\n**نصيحة:**\n\n**أستغفر الله العظيم الذي يشفي كل داء.**',
        excerpt: 'قصة شفاء من السحر بفضل الاستغفار...',
      },
      en: {
        title: 'When Pain is Defeated by Remembrance: Healing from Magic',
        content: 'The story of healing from magic through the power of istighfar.',
        excerpt: 'Healing from magic through istighfar...',
      },
    },
  },
  {
    id: '9',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'عجائب الاستغفار: قصة ملهمة عن تحول المحنة إلى منحة',
        content: 'قصة ملهمة عن تحول المحنة إلى منحة...',
        excerpt: 'كيف حول الاستغفار المحنة إلى منحة...',
      },
      en: {
        title: 'Wonders of Istighfar: From Trial to Blessing',
        content: 'An inspiring story of how istighfar transformed hardship into blessing.',
        excerpt: 'How istighfar transformed hardship into blessing...',
      },
    },
  },
  {
    id: '10',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'حين يزهر العقم استغفاراً: قصة \'أبو يوسف\' والذرية الصالحة',
        content: '## المحنة\n\n## نقطة التحول\n\n## النتيجة\n\n---\n\n## العبرة من القصة\n\n**نصيحة:**\n\n**أستغفر الله العظيم.**',
        excerpt: 'قصة إنجاب ذرية صالحة بعد العقم...',
      },
      en: {
        title: 'When Barrenness Blooms with Istighfar: Abu Yusuf\'s Story',
        content: 'The story of Abu Yusuf and how istighfar granted him righteous offspring.',
        excerpt: 'How istighfar granted righteous offspring...',
      },
    },
  },
  {
    id: '11',
    category: 'repentance',
    source: 'التراث الإسلامي',
    date: '2026-02-13',
    readTime: 3,
    translations: {
      ar: {
        title: 'نجاةٌ من أعماق الظلمات: قصة نبي الله يونس عليه السلام',
        content: '## المحنة\n\n## نقطة التحول\n\n## النتيجة\n\n---\n\n## العبرة من القصة\n\n**نصيحة:**\n\n**أستغفر الله العظيم.**',
        excerpt: 'قصة نجاة نبي الله يونس من بطن الحوت...',
      },
      en: {
        title: 'Salvation from the Depths of Darkness: Prophet Yunus',
        content: 'The story of Prophet Yunus (Jonah) and his salvation from the whale\'s belly through istighfar.',
        excerpt: 'Prophet Yunus\' salvation from the whale\'s belly...',
      },
    },
  },
];
