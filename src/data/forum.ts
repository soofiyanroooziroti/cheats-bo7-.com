export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  developer?: boolean;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  /** Meta description. Cards keep the shorter excerpt. */
  description: string;
  author: string;
  age: string;
  date: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
  /** Answered threads that should show a closed badge. */
  closed?: boolean;
}

export const FORUM_DEVELOPER = 'BO7 Cheats';

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

/** Stable filter keys — always derived from English category names. */
export const FORUM_CATEGORY_KEYS: Record<string, string> = {
  General: 'general',
  'Guides & Builds': 'guidesbuilds',
  'Patch Talk': 'patchtalk',
  Community: 'community',
};

export function forumCategoryFilterKey(category: string): string {
  return FORUM_CATEGORY_KEYS[category] ?? category.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function countComments(comments: ForumComment[]): number {
  return comments.reduce(
    (total, comment) => total + 1 + (comment.replies ? countComments(comment.replies) : 0),
    0,
  );
}

function withCounts(post: Omit<ForumPost, 'commentsCount'>): ForumPost {
  return { ...post, commentsCount: countComments(post.comments) };
}

export function forumLastReply(comments: ForumComment[]): { author: string; age: string } | null {
  let last: ForumComment | null = null;
  const walk = (list: ForumComment[]) => {
    for (const comment of list) {
      last = comment;
      if (comment.replies?.length) walk(comment.replies);
    }
  };
  walk(comments);
  return last ? { author: last.author, age: last.age } : null;
}

const rawPosts: Array<Omit<ForumPost, 'commentsCount'>> = [
  {
    "slug": "aim-assistance-after-update",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Aimbot and no recoil control: what does each feature do?",
    "excerpt": "Aimbot and no recoil control are both listed. Which part of aiming does each describe?",
    "description": "Aimbot and no recoil control are both listed. Which part of aiming does each describe?",
    "author": "Phoenix",
    "age": "15 Nov, 9:10 AM",
    "date": "2026-11-15T04:10:00.000Z",
    "upvotes": 0,
    "flair": "Aimbot",
    "closed": true,
    "sourceTitle": "Call of Duty BO7 Aimbot Settings Explained",
    "sourcePath": "/blog/call-of-duty-bo7-aimbot-settings-explained/",
    "body": [
      "Aimbot and no recoil control are both listed. Which part of aiming does each describe?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "15 Nov, 9:29 AM",
        "score": 0,
        "developer": true,
        "body": "Aimbot describes aiming assistance. No recoil control addresses weapon kick during firing.",
        "replies": [
          {
            "author": "IronWolf",
            "age": "15 Nov, 9:42 AM",
            "score": 0,
            "body": "Does that mean no recoil control chooses the target too?",
            "replies": [
              {
                "author": "NeonReaper",
                "age": "15 Nov, 9:55 AM",
                "score": 0,
                "body": "Target selection belongs to the aiming feature."
              }
            ]
          }
        ]
      },
      {
        "author": "StormCrow",
        "age": "15 Nov, 10:08 AM",
        "score": 0,
        "body": "Where do ESP and radar fit into the feature list?",
        "replies": [
          {
            "author": "Onyx",
            "age": "15 Nov, 10:21 AM",
            "score": 0,
            "body": "ESP adds markers in the main view. Radar uses a map overlay."
          }
        ]
      },
      {
        "author": "Phoenix",
        "age": "15 Nov, 10:34 AM",
        "score": 0,
        "body": "That explains why they are listed separately."
      }
    ]
  },
  {
    "slug": "esp-overlay-markers",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "ESP boxes or skeletons when the screen feels crowded?",
    "excerpt": "The Visuals screenshot shows both boxes and skeletons. What information does each add?",
    "description": "The Visuals screenshot shows both boxes and skeletons. What information does each add?",
    "author": "NightRaid",
    "age": "15 Nov, 10:11 AM",
    "date": "2026-11-15T05:11:00.000Z",
    "upvotes": 0,
    "flair": "ESP",
    "closed": false,
    "sourceTitle": "BO7 ESP Cheat: Map Awareness Explained",
    "sourcePath": "/blog/bo7-esp-cheat-map-awareness-explained/",
    "body": [
      "The Visuals screenshot shows both boxes and skeletons. What information does each add?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "15 Nov, 10:30 AM",
        "score": 0,
        "developer": true,
        "body": "A box marks the outline area. A skeleton shows the body joints as connected lines.",
        "replies": [
          {
            "author": "Onyx",
            "age": "15 Nov, 10:46 AM",
            "score": 0,
            "body": "Distance labels are a separate piece of information too.",
            "replies": [
              {
                "author": "RoguePixel",
                "age": "15 Nov, 11:02 AM",
                "score": 0,
                "body": "The screenshot makes more sense when I read each label on its own."
              }
            ]
          }
        ]
      },
      {
        "author": "HexShot",
        "age": "15 Nov, 11:18 AM",
        "score": 0,
        "body": "Does the article explain name labels as well?",
        "replies": [
          {
            "author": "NightRaid",
            "age": "15 Nov, 11:34 AM",
            "score": 0,
            "body": "Yes, it covers what the different overlay labels describe."
          }
        ]
      }
    ]
  },
  {
    "slug": "recoil-control-settings",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Does no recoil also change where the weapon aims?",
    "excerpt": "I keep seeing recoil control and aimbot listed together. Does recoil control pick a target?",
    "description": "I keep seeing recoil control and aimbot listed together. Does recoil control pick a target?",
    "author": "GhostRift",
    "age": "15 Nov, 11:12 AM",
    "date": "2026-11-15T06:12:00.000Z",
    "upvotes": 0,
    "flair": "Recoil control",
    "closed": true,
    "sourceTitle": "Black Ops 7 No Recoil: How Recoil Control Works",
    "sourcePath": "/blog/black-ops-7-no-recoil-how-recoil-control-works/",
    "body": [
      "I keep seeing recoil control and aimbot listed together. Does recoil control pick a target?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "15 Nov, 11:31 AM",
        "score": 0,
        "developer": true,
        "body": "Recoil control concerns weapon movement during firing. Target selection belongs to aiming assistance.",
        "replies": [
          {
            "author": "GhostRift",
            "age": "15 Nov, 11:50 AM",
            "score": 0,
            "body": "Got it. I was treating the two as one feature."
          }
        ]
      }
    ]
  },
  {
    "slug": "config-settings-reset",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Is speed part of the BO7 feature package?",
    "excerpt": "Is speed included with the other seven features or listed as a separate product?",
    "description": "Is speed included with the other seven features or listed as a separate product?",
    "author": "NovaStrike",
    "age": "15 Nov, 12:13 PM",
    "date": "2026-11-15T07:13:00.000Z",
    "upvotes": 0,
    "flair": "Speed",
    "closed": true,
    "sourceTitle": "BO7 Speed Cheat: What It Does",
    "sourcePath": "/blog/bo7-speed-cheat-what-it-does/",
    "body": [
      "Is speed included with the other seven features or listed as a separate product?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "15 Nov, 12:32 PM",
        "score": 0,
        "developer": true,
        "body": "Speed is listed alongside aimbot, ESP, wallhack, radar, triggerbot, no recoil control and stream-proof.",
        "replies": [
          {
            "author": "NovaStrike",
            "age": "15 Nov, 12:54 PM",
            "score": 0,
            "body": "Thanks. I can see all eight on the product page now."
          }
        ]
      }
    ]
  },
  {
    "slug": "spoofer-and-account-restrictions",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Why is the HWID spoofer a separate product?",
    "excerpt": "The catalog has a loader and a spoofer. Does buying one include the other?",
    "description": "The catalog has a loader and a spoofer. Does buying one include the other?",
    "author": "Viper",
    "age": "16 Nov, 9:14 AM",
    "date": "2026-11-16T04:14:00.000Z",
    "upvotes": 0,
    "flair": "Spoofer",
    "closed": false,
    "sourceTitle": "Discover What an HWID Spoofer Does",
    "sourcePath": "/blog/discover-what-an-hwid-spoofer-does/",
    "body": [
      "The catalog has a loader and a spoofer. Does buying one include the other?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "16 Nov, 9:33 AM",
        "score": 0,
        "developer": true,
        "body": "They have separate checkout links and licenses.",
        "replies": [
          {
            "author": "Zenith",
            "age": "16 Nov, 9:58 AM",
            "score": 0,
            "body": "Does a spoofer restore an already restricted account?",
            "replies": [
              {
                "author": "RiftWalker",
                "age": "16 Nov, 10:23 AM",
                "score": 0,
                "body": "Changing hardware identifiers does not restore access to an existing banned account. Activision handles account enforcement."
              }
            ]
          }
        ]
      },
      {
        "author": "Viper",
        "age": "16 Nov, 10:48 AM",
        "score": 0,
        "body": "That distinction should be the first thing people read before choosing a product."
      }
    ]
  },
  {
    "slug": "ready-updating-paused",
    "category": "Patch Talk",
    "categoryTone": "orange",
    "title": "Where should I look after a Black Ops 7 update?",
    "excerpt": "After a game patch, should I use an old forum reply to decide whether the loader is current?",
    "description": "After a game patch, should I use an old forum reply to decide whether the loader is current?",
    "author": "FrostByte",
    "age": "16 Nov, 10:15 AM",
    "date": "2026-11-16T05:15:00.000Z",
    "upvotes": 0,
    "flair": "Status",
    "closed": true,
    "sourceTitle": "Black Ops 7 Anti Cheat Ricochet: How It Works",
    "sourcePath": "/blog/black-ops-7-anti-cheat-ricochet-how-it-works/",
    "body": [
      "After a game patch, should I use an old forum reply to decide whether the loader is current?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "16 Nov, 10:34 AM",
        "score": 0,
        "developer": true,
        "body": "Use the current status page. A reply written before a patch can be out of date.",
        "replies": [
          {
            "author": "Arctic",
            "age": "16 Nov, 11:02 AM",
            "score": 0,
            "body": "The patch list is game history, though. Is that different from loader status?",
            "replies": [
              {
                "author": "FrostByte",
                "age": "16 Nov, 11:30 AM",
                "score": 0,
                "body": "Yes. Game patch notes and the provider’s loader compatibility status describe different things."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "radar-and-wallhack",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Radar markers and wallhack: how are they different?",
    "excerpt": "Both descriptions mention locating players. What is different about the display?",
    "description": "Both descriptions mention locating players. What is different about the display?",
    "author": "RavenX",
    "age": "16 Nov, 11:16 AM",
    "date": "2026-11-16T06:16:00.000Z",
    "upvotes": 0,
    "flair": "Radar",
    "closed": false,
    "sourceTitle": "Black Ops 7 Radar Cheat: What It Does",
    "sourcePath": "/blog/black-ops-7-radar-cheat-what-it-does/",
    "body": [
      "Both descriptions mention locating players. What is different about the display?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "16 Nov, 11:35 AM",
        "score": 0,
        "developer": true,
        "body": "Radar puts markers on a compact map. Wallhack places indicators in the main game view.",
        "replies": [
          {
            "author": "Dusk",
            "age": "16 Nov, 12:06 PM",
            "score": 0,
            "body": "So the radar panel is a different presentation from an on-screen box?",
            "replies": [
              {
                "author": "Venom",
                "age": "16 Nov, 12:37 PM",
                "score": 0,
                "body": "Exactly. ESP labels, radar markers and main-view indicators describe different displays."
              }
            ]
          }
        ]
      },
      {
        "author": "ApexWolf",
        "age": "16 Nov, 1:08 PM",
        "score": 0,
        "body": "The Visuals screenshot has radar next to other options, which is why I mixed them up.",
        "replies": [
          {
            "author": "RavenX",
            "age": "16 Nov, 1:39 PM",
            "score": 0,
            "body": "The linked radar article gives that setting its own explanation."
          }
        ]
      }
    ]
  },
  {
    "slug": "stream-capture-preview",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Does stream-proof describe every capture mode?",
    "excerpt": "The Misc tab has a stream-proof option. Does that tell me how every recording app handles it?",
    "description": "The Misc tab has a stream-proof option. Does that tell me how every recording app handles it?",
    "author": "ShadowFox",
    "age": "16 Nov, 12:17 PM",
    "date": "2026-11-16T07:17:00.000Z",
    "upvotes": 0,
    "flair": "Stream-proof",
    "closed": false,
    "sourceTitle": "Stream Proof BO7 Cheats: What It Means",
    "sourcePath": "/blog/stream-proof-bo7-cheats-what-it-means/",
    "body": [
      "The Misc tab has a stream-proof option. Does that tell me how every recording app handles it?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "16 Nov, 12:36 PM",
        "score": 0,
        "developer": true,
        "body": "The label alone cannot confirm support for every capture method. Capture modes can behave differently.",
        "replies": [
          {
            "author": "Orion",
            "age": "16 Nov, 1:10 PM",
            "score": 0,
            "body": "I would want the provider to confirm the recording mode before relying on that label.",
            "replies": [
              {
                "author": "ShadowFox",
                "age": "16 Nov, 1:44 PM",
                "score": 0,
                "body": "That is the detail missing when people just repeat the feature name."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "discord-ticket-help",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Triggerbot and aimbot are listed separately. Why?",
    "excerpt": "Does a triggerbot move the aim, or does it only relate to firing?",
    "description": "Does a triggerbot move the aim, or does it only relate to firing?",
    "author": "Blaze",
    "age": "17 Nov, 9:18 AM",
    "date": "2026-11-17T04:18:00.000Z",
    "upvotes": 0,
    "flair": "Triggerbot",
    "closed": true,
    "sourceTitle": "Black Ops 7 Triggerbot: How It Works",
    "sourcePath": "/blog/black-ops-7-triggerbot-how-it-works/",
    "body": [
      "Does a triggerbot move the aim, or does it only relate to firing?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "17 Nov, 9:37 AM",
        "score": 0,
        "developer": true,
        "body": "Triggerbot describes firing when a target meets its trigger condition. Aimbot describes aiming assistance.",
        "replies": [
          {
            "author": "Blaze",
            "age": "17 Nov, 10:14 AM",
            "score": 0,
            "body": "That explains the separate feature entries."
          }
        ]
      }
    ]
  },
  {
    "slug": "multiplayer-and-zombies",
    "category": "General",
    "categoryTone": "purple",
    "title": "Zombies cheat sheet: what should a new player read first?",
    "excerpt": "I opened the Zombies article expecting a list of button codes. What does cheat sheet mean here?",
    "description": "I opened the Zombies article expecting a list of button codes. What does cheat sheet mean here?",
    "author": "Spectre",
    "age": "17 Nov, 10:19 AM",
    "date": "2026-11-17T05:19:00.000Z",
    "upvotes": 0,
    "flair": "Zombies",
    "closed": false,
    "sourceTitle": "BO7 Zombies Cheat Sheet: Easter Eggs, Wonder Weapons and Round Tips",
    "sourcePath": "/blog/bo7-zombies-cheat-sheet-easter-eggs-wonder-weapons-and-round-tips/",
    "body": [
      "I opened the Zombies article expecting a list of button codes. What does cheat sheet mean here?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "17 Nov, 10:38 AM",
        "score": 0,
        "developer": true,
        "body": "Here it means a quick reference for the mode, including round planning and map objectives.",
        "replies": [
          {
            "author": "Sparks",
            "age": "17 Nov, 11:18 AM",
            "score": 0,
            "body": "So it is a gameplay reference rather than a menu screenshot?",
            "replies": [
              {
                "author": "Phoenix",
                "age": "17 Nov, 11:58 AM",
                "score": 0,
                "body": "Yes. The article ends with a Zombies-specific note."
              }
            ]
          }
        ]
      },
      {
        "author": "Spectre",
        "age": "17 Nov, 12:38 PM",
        "score": 0,
        "body": "I would start with the early-round section and then read the map-specific material."
      }
    ]
  },
  {
    "slug": "windows-11-and-ricochet",
    "category": "Guides & Builds",
    "categoryTone": "blue",
    "title": "Windows requirements: game specs or loader compatibility?",
    "excerpt": "When the setup guide says Windows PC, is that the full hardware requirement?",
    "description": "When the setup guide says Windows PC, is that the full hardware requirement?",
    "author": "ZeroHour",
    "age": "17 Nov, 11:20 AM",
    "date": "2026-11-17T06:20:00.000Z",
    "upvotes": 0,
    "flair": "Requirements",
    "closed": true,
    "sourceTitle": "BO7 Cheats PC Setup: What You Need to Get Started",
    "sourcePath": "/blog/bo7-cheats-pc-setup-what-you-need-to-get-started/",
    "body": [
      "When the setup guide says Windows PC, is that the full hardware requirement?"
    ],
    "comments": [
      {
        "author": "BO7 Cheats",
        "age": "17 Nov, 11:39 AM",
        "score": 0,
        "developer": true,
        "body": "No. The game has its own PC specifications, and the provider has separate product compatibility requirements.",
        "replies": [
          {
            "author": "GhostRift",
            "age": "17 Nov, 12:22 PM",
            "score": 0,
            "body": "Does meeting the game minimum automatically confirm the loader works?",
            "replies": [
              {
                "author": "NovaStrike",
                "age": "17 Nov, 1:05 PM",
                "score": 0,
                "body": "It does not establish product compatibility. Check the current provider requirements."
              }
            ]
          }
        ]
      },
      {
        "author": "ZeroHour",
        "age": "17 Nov, 1:48 PM",
        "score": 0,
        "body": "That distinction answers my question."
      }
    ]
  }
];

export const forumPosts: ForumPost[] = rawPosts.map(withCounts);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}
