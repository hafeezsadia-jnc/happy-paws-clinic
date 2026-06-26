export type BlogSection = { heading: string; body: string[] };

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  author: string;
  date: string;
  intro: string;
  sections: BlogSection[];
  tip: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "feeding-your-dog-balanced-meals",
    category: "Nutrition",
    title: "Feeding Your Dog: A Simple Guide to Balanced Meals",
    excerpt:
      "Portion sizes, treats and the nutrients every dog needs to thrive at each life stage.",
    image: "/images/blog/nutrition.jpg",
    readTime: "5 min read",
    author: "Dr. Ayesha Khan",
    date: "June 2026",
    intro:
      "Good nutrition is the single biggest thing you can do at home to keep your dog healthy. The right balance of protein, fat, carbohydrates and micronutrients supports everything from a shiny coat to a strong immune system — and it changes as your dog grows.",
    sections: [
      {
        heading: "The five building blocks of a healthy bowl",
        body: [
          "A complete diet contains protein for muscle and repair, healthy fats for energy and coat condition, carbohydrates for fibre and fuel, plus vitamins and minerals for everything in between. Fresh water is the often-forgotten sixth essential — always keep it topped up.",
          "When choosing a commercial food, look for a named meat as the first ingredient and a statement that it is 'complete and balanced' for your dog's life stage.",
        ],
      },
      {
        heading: "Match the food to the life stage",
        body: [
          "Puppies need more calories, protein and calcium to fuel rapid growth — feed a dedicated puppy formula in three to four small meals a day.",
          "Adult dogs do well on two measured meals a day. Seniors usually need fewer calories but more joint and digestive support, so a senior-specific food is often worth the switch.",
        ],
      },
      {
        heading: "Getting portion sizes right",
        body: [
          "Use the feeding guide on the packaging as a starting point, then adjust based on body condition. You should be able to feel your dog's ribs easily but not see them.",
          "Treats should make up no more than 10% of daily calories. Account for them — those little rewards add up faster than most owners expect.",
        ],
      },
    ],
    tip: "Switch foods gradually over 7–10 days, mixing increasing amounts of the new food into the old, to avoid an upset stomach.",
  },
  {
    slug: "why-dental-care-matters",
    category: "Dental",
    title: "Why Dental Care Matters More Than You Think",
    excerpt:
      "Bad breath can signal bigger problems. Here's how to keep your pet's smile healthy.",
    image: "/images/blog/dental.jpg",
    readTime: "4 min read",
    author: "Dr. Sara Mendoza",
    date: "June 2026",
    intro:
      "By the age of three, most dogs and cats show some signs of dental disease. Left untreated, it doesn't just cause bad breath — bacteria from the mouth can affect the heart, liver and kidneys. The good news: it's largely preventable.",
    sections: [
      {
        heading: "Spot the early warning signs",
        body: [
          "Persistent bad breath is the most common red flag. Others include yellow-brown tartar along the gumline, red or bleeding gums, drooling, and reluctance to eat hard food.",
          "Because pets hide pain well, many owners only notice once disease is advanced. Regular checks help you catch it early.",
        ],
      },
      {
        heading: "Build a simple home routine",
        body: [
          "Daily brushing with a pet-safe toothpaste is the gold standard — never use human toothpaste, which can be toxic to pets.",
          "Dental chews, water additives and special diets can all help reduce plaque, but they work best alongside brushing, not instead of it.",
        ],
      },
      {
        heading: "When to see the vet",
        body: [
          "A professional cleaning under anaesthetic allows us to scale below the gumline and take dental X-rays — the only way to assess the roots and hidden disease.",
          "We recommend a dental check at every wellness visit, and a professional clean as advised based on your pet's individual needs.",
        ],
      },
    ],
    tip: "Start brushing slowly and make it positive — a lick of toothpaste and praise for a few days before you ever touch the brush builds trust.",
  },
  {
    slug: "vaccination-schedules-explained",
    category: "Preventive",
    title: "Vaccination Schedules Explained for New Pet Owners",
    excerpt:
      "Which vaccines your puppy or kitten needs, and when — a stress-free timeline.",
    image: "/images/blog/vaccine.jpg",
    readTime: "6 min read",
    author: "Dr. Omar Farooq",
    date: "June 2026",
    intro:
      "Vaccines are one of the safest, most effective ways to protect your pet from serious — and sometimes fatal — diseases. If you've just welcomed a puppy or kitten, here's how the schedule actually works.",
    sections: [
      {
        heading: "Core vs lifestyle vaccines",
        body: [
          "Core vaccines are recommended for every pet because the diseases they prevent are widespread and dangerous. For dogs these include distemper, parvovirus and rabies; for cats, panleukopenia and cat flu.",
          "Lifestyle (non-core) vaccines are added based on your pet's environment and risk — for example kennel cough for dogs that board, or feline leukaemia for cats that go outdoors.",
        ],
      },
      {
        heading: "The puppy and kitten timeline",
        body: [
          "The first vaccinations usually begin at 6–8 weeks, followed by boosters every 3–4 weeks until around 16 weeks of age. This series is needed because immunity from their mother fades gradually.",
          "Until the course is complete, keep your pet away from unvaccinated animals and high-risk areas.",
        ],
      },
      {
        heading: "Staying protected as an adult",
        body: [
          "After the initial course, pets receive a booster at one year, then regular boosters based on the vaccine and risk level.",
          "Your vet will tailor the exact schedule to your pet — there's no need to memorise it, just keep your appointments.",
        ],
      },
    ],
    tip: "Bring your pet's vaccination record to every visit, and ask us for a reminder so a booster is never missed.",
  },
  {
    slug: "pet-first-aid-basics",
    category: "Emergency",
    title: "Pet First Aid: What to Do Before You Reach the Vet",
    excerpt:
      "Simple steps that can make a real difference in an emergency situation.",
    image: "/images/blog/firstaid.jpg",
    readTime: "7 min read",
    author: "Dr. Omar Farooq",
    date: "June 2026",
    intro:
      "In an emergency, the calm, correct action in the first few minutes can save your pet's life. First aid is never a substitute for veterinary care — but it can stabilise your pet on the way to us.",
    sections: [
      {
        heading: "Stay calm and keep yourself safe",
        body: [
          "Even the gentlest pet may bite or scratch when frightened or in pain. Approach slowly, speak softly, and use a towel or makeshift muzzle if needed — never on a pet that is vomiting or struggling to breathe.",
          "Call the clinic on your way so our team is ready when you arrive.",
        ],
      },
      {
        heading: "Common situations and first steps",
        body: [
          "For bleeding, apply gentle, firm pressure with a clean cloth. For a suspected broken bone, keep your pet as still as possible and support the area without straightening it.",
          "If you suspect poisoning, do not try to make your pet vomit unless told to by a vet — bring the packaging of whatever was eaten with you.",
        ],
      },
      {
        heading: "Build a simple pet first-aid kit",
        body: [
          "Keep gauze, non-stick bandages, sticky tape, blunt-tipped scissors, a digital thermometer, saline solution and a spare towel in one box.",
          "Add our clinic number and the nearest 24/7 emergency contact to the lid so it's always to hand.",
        ],
      },
    ],
    tip: "Programme our 24/7 emergency number into your phone today — in a real emergency you won't want to be searching for it.",
  },
  {
    slug: "grooming-at-home",
    category: "Grooming",
    title: "Grooming at Home: Tips for a Calm, Happy Pet",
    excerpt:
      "Brushing, bathing and nail care made easy with these gentle techniques.",
    image: "/images/blog/grooming2.jpg",
    readTime: "4 min read",
    author: "Dr. Sara Mendoza",
    date: "June 2026",
    intro:
      "Regular grooming isn't just about looks — it's a chance to check for lumps, parasites and skin problems early, and it keeps your pet comfortable. With a gentle approach, it can even become a bonding ritual.",
    sections: [
      {
        heading: "Brushing the right way",
        body: [
          "Brush in the direction of hair growth using a brush suited to your pet's coat. Long-haired breeds may need daily brushing to prevent painful mats; short-haired pets are happy with a weekly once-over.",
          "Work in short, positive sessions and reward calm behaviour so your pet learns to enjoy it.",
        ],
      },
      {
        heading: "Bathing without the battle",
        body: [
          "Most pets only need a bath every few weeks, or when genuinely dirty — over-bathing strips natural oils. Use lukewarm water and a pet-specific shampoo, and rinse thoroughly.",
          "Place a non-slip mat in the tub and keep treats nearby to keep the experience relaxed.",
        ],
      },
      {
        heading: "Nails, ears and eyes",
        body: [
          "Trim just the tip of each nail to avoid the sensitive quick. If you can hear nails clicking on the floor, they're due.",
          "Gently wipe the outer ear and the corners of the eyes with a damp cloth — never insert anything into the ear canal.",
        ],
      },
    ],
    tip: "If your pet finds grooming stressful, build up one step at a time and stop while it's still going well — short and positive beats long and overwhelming.",
  },
  {
    slug: "healthy-treats-for-cats",
    category: "Nutrition",
    title: "Healthy Treats Your Cat Will Actually Love",
    excerpt:
      "Reward your feline friend without the extra calories — vet-approved ideas inside.",
    image: "/images/blog/cat-treats.jpg",
    readTime: "3 min read",
    author: "Dr. Ayesha Khan",
    date: "June 2026",
    intro:
      "Treats are a wonderful way to bond with your cat and reward good behaviour — but cats are small, and the calories add up quickly. Here's how to treat kindly without tipping into weight gain.",
    sections: [
      {
        heading: "Treats vet-approved favourites",
        body: [
          "Small pieces of cooked, plain chicken or fish are a hit with most cats and are naturally high in the animal protein they're built to eat.",
          "Freeze-dried meat treats are convenient and single-ingredient. A little cooked egg is another safe, protein-rich option.",
        ],
      },
      {
        heading: "Foods to keep off the menu",
        body: [
          "Avoid onion, garlic, chocolate, grapes and raisins, which are toxic to cats. Many cats are also lactose intolerant, so skip the saucer of milk despite the cliché.",
          "Steer clear of anything heavily salted or seasoned, and never give cooked bones.",
        ],
      },
      {
        heading: "The 10% rule",
        body: [
          "Treats should make up no more than 10% of your cat's daily calories — the rest should come from a complete, balanced food.",
          "Use treats with intention: for training, enrichment or a little daily ritual, rather than constant grazing.",
        ],
      },
    ],
    tip: "Swap food rewards for play. For many cats, five minutes with a feather wand is more exciting than any snack — and it keeps them fit.",
  },
];

export const categoryColors: Record<string, string> = {
  Nutrition: "green",
  Dental: "blue",
  Preventive: "cyan",
  Emergency: "red",
  Grooming: "purple",
};

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
