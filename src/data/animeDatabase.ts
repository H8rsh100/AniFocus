export interface DatabaseAnime {
  id: string;
  title: string;
  totalEps: number;
  genres: string[];
  synopsis: string;
  type: 'Series' | 'Movie' | 'Special';
  info: string; // Detail about seasons, movies, specials
}

export const ANIME_DATABASE: DatabaseAnime[] = [
  {
    id: 'aot',
    title: 'Attack on Titan (Shingeki no Kyojin)',
    totalEps: 87,
    genres: ['Action', 'Drama', 'Fantasy', 'Suspense'],
    synopsis: 'Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born of hunger but what seems to be out of pleasure.',
    type: 'Series',
    info: '4 Seasons (87 Episodes) • 4 Recap/Final Movies • 8 OVAs'
  },
  {
    id: 'onepiece',
    title: 'One Piece',
    totalEps: 1110,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece.',
    type: 'Series',
    info: '20+ Seasons (1110+ Episodes) • 15 Movies • 6 Specials • 3 OVAs'
  },
  {
    id: 'demonslayer',
    title: 'Demon Slayer: Kimetsu no Yaiba',
    totalEps: 63,
    genres: ['Action', 'Fantasy', 'Historical'],
    synopsis: 'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Tanjiro sets out to become a demon slayer.',
    type: 'Series',
    info: '4 Seasons (63 Episodes) • 2 Movies (Mugen Train & To the Hashira Training)'
  },
  {
    id: 'jjk',
    title: 'Jujutsu Kaisen',
    totalEps: 47,
    genres: ['Action', 'Fantasy', 'School'],
    synopsis: 'A boy fights... for "the right death." Hardship, regret, shame: the negative emotions that humans feel become Curses that lurk in our everyday lives. Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life.',
    type: 'Series',
    info: '2 Seasons (47 Episodes) • 1 Movie (Jujutsu Kaisen 0)'
  },
  {
    id: 'fma_b',
    title: 'Fullmetal Alchemist: Brotherhood',
    totalEps: 64,
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    synopsis: 'After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in catastrophic situations. Edward decides to become a State Alchemist, searching for the Philosopher\'s Stone to restore their bodies.',
    type: 'Series',
    info: '1 Season (64 Episodes) • 2 Movies • 4 Specials (OVAs)'
  },
  {
    id: 'naruto_s',
    title: 'Naruto Shippuden',
    totalEps: 500,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in the Leaf Village. Years after his training with Jiraiya, he returns home to fight the Akatsuki organization and bring back his friend Sasuke Uchiha.',
    type: 'Series',
    info: '21 Seasons (500 Episodes) • 7 Movies • 8 OVAs'
  },
  {
    id: 'hxh_2011',
    title: 'Hunter x Hunter (2011)',
    totalEps: 148,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'Gon Freecss aspires to become a Hunter, an exceptional beast who is capable of finding rare treasures, exploring uncharted territories, and capturing dangerous lawbreakers. Gon departs to take the Hunter Exam to find his father.',
    type: 'Series',
    info: '6 Arcs (148 Episodes) • 2 Movies • 3 Specials'
  },
  {
    id: 'deathnote',
    title: 'Death Note',
    totalEps: 37,
    genres: ['Suspense', 'Psychological', 'Thriller'],
    synopsis: 'A high-school student who discovers a supernatural notebook that grants its user the ability to kill anyone whose name and face they know. The series centers around his subsequent attempts to create and rule a world cleansed of evil.',
    type: 'Series',
    info: '1 Season (37 Episodes) • 2 Recap Specials'
  },
  {
    id: 'vinland',
    title: 'Vinland Saga',
    totalEps: 48,
    genres: ['Action', 'Adventure', 'Drama', 'Historical'],
    synopsis: 'Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It is the land of warmth and fertile soil, where there would be no need for fighting—nothing like the frozen village in Iceland.',
    type: 'Series',
    info: '2 Seasons (48 Episodes)'
  },
  {
    id: 'frieren',
    title: 'Frieren: Beyond Journey\'s End (Sousou no Frieren)',
    totalEps: 28,
    genres: ['Adventure', 'Drama', 'Fantasy'],
    synopsis: 'Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the humans around her?',
    type: 'Series',
    info: '1 Season (28 Episodes)'
  },
  {
    id: 'steinsgate',
    title: 'Steins;Gate',
    totalEps: 24,
    genres: ['Sci-Fi', 'Thriller'],
    synopsis: 'A self-proclaimed mad scientist named Rintaro Okabe rents out a room in a rickety old building in Akihabara. Together with his friends, they accidentally build a device that can send text messages into the past, altering timelines.',
    type: 'Series',
    info: '1 Season (24 Episodes) • 1 Sequel Season (S;G 0, 23 Eps) • 1 Movie'
  },
  {
    id: 'chainsaw',
    title: 'Chainsaw Man',
    totalEps: 12,
    genres: ['Action', 'Comedy', 'Gore'],
    synopsis: 'Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil carcasses. One day, he is betrayed and killed.',
    type: 'Series',
    info: '1 Season (12 Episodes) • 1 Movie (Reze Arc, Upcoming)'
  },
  {
    id: 'edgerunners',
    title: 'Cyberpunk: Edgerunners',
    totalEps: 10,
    genres: ['Sci-Fi', 'Action', 'Gore'],
    synopsis: 'A street kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an edgerunner—a mercenary outlaw also known as a cyberpunk.',
    type: 'Series',
    info: '1 Season Complete (10 Episodes)'
  },
  {
    id: 'bleach_tybw',
    title: 'Bleach: Thousand-Year Blood War',
    totalEps: 39,
    genres: ['Action', 'Fantasy'],
    synopsis: 'The final arc of Bleach. Ichigo Kurosaki, substitute Soul Reaper, returns to the battlefield with his Zanpakuto to protect the Soul Society from a sudden invasion by the Quincy king Yhwach.',
    type: 'Series',
    info: '3 Parts / Cours (39 Episodes Current) • 4 Original Bleach Movies'
  },
  {
    id: 'bleach_original',
    title: 'Bleach',
    totalEps: 366,
    genres: ['Action', 'Fantasy', 'Adventure'],
    synopsis: 'Ichigo Kurosaki is a high school student who can see ghosts. His life changes when he meets Rukia Kuchiki, a Soul Reaper who fights evil spirits called Hollows. Rukia is injured, forcing her to transfer her powers to Ichigo, turning him into a Soul Reaper.',
    type: 'Series',
    info: '16 Seasons (366 Episodes) • 4 Movies • 2 Specials • 1 OVA'
  },
  {
    id: 'myhero',
    title: 'My Hero Academia (Boku no Hero Academia)',
    totalEps: 151,
    genres: ['Action', 'Fantasy', 'School'],
    synopsis: 'In a world where 80% of the population has some kind of superpower, Izuku Midoriya is born without any. Nevertheless, he dreams of becoming a hero and gets scouted by the world\'s greatest hero, All Might.',
    type: 'Series',
    info: '7 Seasons (151+ Episodes) • 3 Movies • 5 OVAs'
  },
  {
    id: 'onepunch',
    title: 'One Punch Man',
    totalEps: 24,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    synopsis: 'Saitama is a hero who only became a hero for fun. After three years of "special training," he\'s become so strong that he can defeat opponents with a single punch. Now, he faces a major existential crisis: boredom.',
    type: 'Series',
    info: '2 Seasons (24 Episodes) • 2 Specials (OVAs)'
  },
  {
    id: 'mobpsycho',
    title: 'Mob Psycho 100',
    totalEps: 37,
    genres: ['Action', 'Comedy', 'Supernatural'],
    synopsis: 'Shigeo Kageyama (a.k.a. Mob) is an average 8th grader who is a powerful esper. He tries to suppress his power to live a normal life, but when his emotions reach 100%, his pent-up energy explodes.',
    type: 'Series',
    info: '3 Seasons Complete (37 Episodes) • 2 OVAs'
  },
  {
    id: 'sao',
    title: 'Sword Art Online',
    totalEps: 96,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'In the year 2022, virtual reality has progressed by leaps and bounds. Players log into SAO, only to discover that they are trapped in the game. To escape, they must defeat all 100 floors, but dying in game means dying in real life.',
    type: 'Series',
    info: '4 Seasons (96 Episodes) • 2 Progressive Movies • 1 Movie (Ordinal Scale)'
  },
  {
    id: 'tokyoghoul',
    title: 'Tokyo Ghoul',
    totalEps: 48,
    genres: ['Action', 'Gore', 'Psychological', 'Thriller'],
    synopsis: 'Lurking in the shadows of Tokyo are flesh-eating monsters known as ghouls. Ken Kaneki, an ordinary college student, gets implanted with ghoul organs after a date goes horribly wrong, turning him into a half-ghoul.',
    type: 'Series',
    info: '4 Seasons (48 Episodes) • 2 OVAs'
  },
  {
    id: 'codegeass',
    title: 'Code Geass: Lelouch of the Rebellion',
    totalEps: 50,
    genres: ['Action', 'Drama', 'Sci-Fi', 'Mecha'],
    synopsis: 'In the year 2010, the Holy Empire of Britannia conquered Japan, renaming it Area 11. Lelouch Lamperouge, an exiled Britannian prince, gains the power of Geass—absolute obedience—and leads a rebellion under the alias Zero.',
    type: 'Series',
    info: '2 Seasons Complete (50 Episodes) • 4 Recap/Sequel Movies • 1 OVA Series'
  },
  {
    id: 'evangelion',
    title: 'Neon Genesis Evangelion',
    totalEps: 26,
    genres: ['Drama', 'Sci-Fi', 'Mecha', 'Psychological'],
    synopsis: 'In a post-apocalyptic Tokyo-3, teenager Shinji Ikari is summoned by his cold father to pilot Evangelion Unit-01, a giant bio-machine built to defend humanity against alien invaders known as Angels.',
    type: 'Series',
    info: '1 Season Complete (26 Episodes) • End of Evangelion Movie • 4 Rebuild Movies'
  },
  {
    id: 'yourname',
    title: 'Your Name (Kimi no Na wa.)',
    totalEps: 1,
    genres: ['Drama', 'Romance', 'Supernatural'],
    synopsis: 'Mitsuha, a high school girl in a rural town, and Taki, a high school boy in Tokyo, wake up one day in each other\'s bodies. They must navigate this strange event while trying to find a way to meet in person.',
    type: 'Movie',
    info: 'Standalone Movie (106 Minutes)'
  },
  {
    id: 'spiritedaway',
    title: 'Spirited Away (Sen to Chihiro no Kamikakushi)',
    totalEps: 1,
    genres: ['Adventure', 'Fantasy'],
    synopsis: 'A young girl named Chihiro wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts. She must work in a bathhouse to find a way to free herself and her parents.',
    type: 'Movie',
    info: 'Studio Ghibli Movie (125 Minutes)'
  },
  {
    id: 'weathering',
    title: 'Weathering With You (Tenki no Ko)',
    totalEps: 1,
    genres: ['Drama', 'Romance', 'Fantasy'],
    synopsis: 'High school freshman Hodaka runs away to Tokyo, where he meets Hina, a girl who possesses the ability to stop the rain and clear the sky by praying.',
    type: 'Movie',
    info: 'Standalone Movie (112 Minutes)'
  },
  {
    id: 'silentvoice',
    title: 'A Silent Voice (Koe no Katachi)',
    totalEps: 1,
    genres: ['Drama', 'School'],
    synopsis: 'Shoya Ishida, a former school bully, attempts to make amends with Shoko Nishimiya, a deaf girl he bullied in elementary school, hoping to redeem himself in the eyes of his peers and himself.',
    type: 'Movie',
    info: 'Standalone Movie (130 Minutes)'
  },
  {
    id: 'jjk0',
    title: 'Jujutsu Kaisen 0',
    totalEps: 1,
    genres: ['Action', 'Fantasy'],
    synopsis: 'Prequel to Jujutsu Kaisen. Yuta Okkotsu, a high schooler suffering from a curse by his late childhood friend Rika, enters Jujutsu High under Satoru Gojo\'s guidance to learn how to control his power.',
    type: 'Movie',
    info: 'Prequel Movie (105 Minutes)'
  },
  {
    id: 'mugen_train',
    title: 'Demon Slayer: Mugen Train Movie',
    totalEps: 1,
    genres: ['Action', 'Fantasy'],
    synopsis: 'Tanjiro, Nezuko, Zenitsu, and Inosuke board the Mugen Train to assist the Flame Hashira Kyojuro Rengoku in hunting a demon that has consumed over 40 passengers.',
    type: 'Movie',
    info: 'Sequel Movie / Arc (117 Minutes)'
  },
  {
    id: 'blackclover',
    title: 'Black Clover',
    totalEps: 170,
    genres: ['Action', 'Fantasy'],
    synopsis: 'Asta and Yuno are orphans raised in a church. In a world where magic is everything, Asta is born without any, while Yuno is a genius. They set out to compete to become the next Wizard King.',
    type: 'Series',
    info: '4 Seasons (170 Episodes) • 1 Movie (Sword of the Wizard King)'
  },
  {
    id: 'rezero',
    title: 'Re:Zero - Starting Life in Another World',
    totalEps: 50,
    genres: ['Drama', 'Fantasy', 'Suspense'],
    synopsis: 'Subaru Natsuki is suddenly summoned to another world. With no sign of who summoned him, things get worse when he is attacked. However, he discovers he has the power of "Return by Death," resetting timelines.',
    type: 'Series',
    info: '2 Seasons (50 Episodes) • Season 3 (Upcoming) • 2 OVAs'
  },
  {
    id: 'kaguya',
    title: 'Kaguya-sama: Love is War',
    totalEps: 37,
    genres: ['Comedy', 'Romance', 'School'],
    synopsis: 'Miyuki Shirogane and Kaguya Shinomiya are the student council leaders. Though they are in love, their pride prevents them from confessing first. Thus, they engage in highly intellectual mind games to force a confession.',
    type: 'Series',
    info: '3 Seasons (37 Episodes) • 1 Movie (First Kiss Never Ends)'
  },
  {
    id: 'sololeveling',
    title: 'Solo Leveling (Ore dake Level Up na Ken)',
    totalEps: 12,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'In a world where hunters must battle monsters to protect mankind, Sung Jinwoo, the weakest hunter of all mankind, finds himself in a struggle for survival in a double dungeon, gaining the ability to level up infinitely.',
    type: 'Series',
    info: '1 Season (12 Episodes)'
  },
  {
    id: 'sololeveling_s2',
    title: 'Solo Leveling Season 2: Arise from the Shadow',
    totalEps: 12,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'Following the events of the first season, Sung Jinwoo has risen from the weakest hunter to a powerful shadow monarch. He continues his ascension, commanding his shadow army and conquering increasingly dangerous dungeons while uncovering the truth behind the system.',
    type: 'Series',
    info: 'Season 2 (12 Episodes)'
  },
  {
    id: 'dororo',
    title: 'Dororo',
    totalEps: 24,
    genres: ['Action', 'Adventure', 'Historical', 'Supernatural'],
    synopsis: 'A samurai lord barters away his newborn son\'s organs to forty-eight demons in exchange for dominance on the battlefield. The child, abandoned but surviving thanks to a medicine man who provides him with prosthetics and weapons, sets out to hunt down the demons to reclaim his body parts, accompanied by the young thief Dororo.',
    type: 'Series',
    info: '1 Season Complete (24 Episodes)'
  },
  {
    id: 'spyfamily',
    title: 'Spy x Family',
    totalEps: 37,
    genres: ['Action', 'Comedy'],
    synopsis: 'A spy known as Twilight must construct a fake family for a mission. However, his adopted daughter is a telepath, and his fake wife is a professional assassin, with none of them knowing each other\'s secrets.',
    type: 'Series',
    info: '2 Seasons (37 Episodes) • 1 Movie (Code: White)'
  },
  {
    id: 'deathparade',
    title: 'Death Parade',
    totalEps: 12,
    genres: ['Drama', 'Psychological', 'Suspense'],
    synopsis: 'When two people die at the same time, they are sent to the Quindecim bar run by Decim. They must play death games that reveal their true nature, deciding whether they get reincarnated or sent to the void.',
    type: 'Series',
    info: '1 Season Complete (12 Episodes) • 1 Prequel OVA'
  },
  {
    id: 'cowboybebop',
    title: 'Cowboy Bebop',
    totalEps: 26,
    genres: ['Action', 'Sci-Fi'],
    synopsis: 'In the year 2071, Spike Spiegel and Jet Black lead a crew of bounty hunters aboard the spaceship Bebop, traveling the solar system while escaping the ghosts of their pasts.',
    type: 'Series',
    info: '1 Season Complete (26 Episodes) • 1 Movie'
  },
  {
    id: 'samuraichamploo',
    title: 'Samurai Champloo',
    totalEps: 26,
    genres: ['Action', 'Comedy', 'Adventure'],
    synopsis: 'Fuu, a young waitress, rescues two rogue warriors, Mugen and Jin, from execution. In return, she recruits them to help her find a samurai who smells of sunflowers.',
    type: 'Series',
    info: '1 Season Complete (26 Episodes)'
  },
  {
    id: 'gurrenlagann',
    title: 'Tengen Toppa Gurren Lagann',
    totalEps: 27,
    genres: ['Action', 'Sci-Fi', 'Mecha', 'Adventure'],
    synopsis: 'Simon and Kamina are born in an underground village. After discovering a mysterious drill-shaped key, they breach the surface world, fighting beastmen to reclaim the earth for humanity.',
    type: 'Series',
    info: '1 Season Complete (27 Episodes) • 2 Recap Movies'
  },
  {
    id: 'parasyte',
    title: 'Parasyte: The Maxim (Kiseijuu: Sei no Kakuritsu)',
    totalEps: 24,
    genres: ['Action', 'Gore', 'Sci-Fi', 'Thriller'],
    synopsis: 'Parasitic aliens descend to Earth, infiltrating human brains. 16-year-old Shinichi Izumi manages to block his parasite, Migi, in his right hand, forcing them into a bizarre co-existence to survive.',
    type: 'Series',
    info: '1 Season Complete (24 Episodes)'
  },
  {
    id: 'haikyu',
    title: 'Haikyu!!',
    totalEps: 85,
    genres: ['Sports', 'Drama'],
    synopsis: 'Shoyo Hinata, inspired by the "Little Giant," joins the Karasuno High volleyball club to defeat his rival Tobio Kageyama. They end up joining forces to return Karasuno to its former glory.',
    type: 'Series',
    info: '4 Seasons (85 Episodes) • 4 Recap Movies • 2 Sequel Movies (Dumpster Battle)'
  },
  {
    id: 'kuroko',
    title: 'Kuroko\'s Basketball (Kuroko no Basket)',
    totalEps: 75,
    genres: ['Sports', 'Comedy'],
    synopsis: 'Tetsuya Kuroko, the "Phantom Sixth Man" of the Generation of Miracles, joins Seirin High to help Taiga Kagami defeat his former teammates and make Seirin the number one team in Japan.',
    type: 'Series',
    info: '3 Seasons Complete (75 Episodes) • 3 Recap Movies • 1 Sequel Movie (Last Game)'
  },
  {
    id: 'bluelock',
    title: 'Blue Lock',
    totalEps: 24,
    genres: ['Sports', 'Thriller'],
    synopsis: 'To win the World Cup, the Japanese Football Association recruits 300 high school strikers to a prison-like facility called Blue Lock, aiming to create the ultimate egoist striker who can lead Japan to victory.',
    type: 'Series',
    info: '1 Season (24 Episodes) • Season 2 (Upcoming) • 1 Movie (Episode Nagi)'
  },
  {
    id: 'hellsparadise',
    title: 'Hell\'s Paradise (Jigokuraku)',
    totalEps: 13,
    genres: ['Action', 'Fantasy', 'Historical'],
    synopsis: 'Gabimaru the Hollow, an elite ninja on death row, is offered a full pardon if he travels to a mysterious island to find the Elixir of Life, battling horrific monsters and other death-row convicts.',
    type: 'Series',
    info: '1 Season (13 Episodes) • Season 2 (Upcoming)'
  },
  {
    id: 'oshinoko',
    title: 'Oshi no Ko',
    totalEps: 11,
    genres: ['Drama', 'Supernatural'],
    synopsis: 'Gorou Amamiya, a gynecologist, is murdered on the day of idol Ai Hoshino\'s delivery. He wakes up reincarnated as Ai\'s newborn son Aquamarine, entering the dark entertainment world to find his killer.',
    type: 'Series',
    info: '1 Season (11 Episodes) • Season 2 (Upcoming)'
  },
  {
    id: 'assclass',
    title: 'Assassination Classroom (Ansatsu Kyoushitsu)',
    totalEps: 47,
    genres: ['Action', 'Comedy', 'School'],
    synopsis: 'A powerful octopus-like creature destroys 70% of the moon. He becomes the homeroom teacher of Class 3-E, giving them one year to assassinate him before he destroys Earth, while teaching them life lessons.',
    type: 'Series',
    info: '2 Seasons Complete (47 Episodes) • 1 Movie'
  },
  {
    id: 'yourlie',
    title: 'Your Lie in April (Shigatsu wa Kimi no Uso)',
    totalEps: 22,
    genres: ['Drama', 'Romance', 'Music'],
    synopsis: 'Kosei Arima, a piano prodigy, loses his ability to hear the piano after his mother\'s death. Two years later, he meets Kaori Miyazono, a free-spirited violinist who helps him return to the music world.',
    type: 'Series',
    info: '1 Season Complete (22 Episodes) • 1 OVA'
  },
  {
    id: 'heavenly',
    title: 'Heavenly Delusion (Tengoku Daimakyo)',
    totalEps: 13,
    genres: ['Sci-Fi', 'Mystery', 'Adventure'],
    synopsis: 'In a post-apocalyptic Japan destroyed by a disaster, Maru and Kiruko travel searching for "Heaven," navigating ruins infested with monsters, while children live in an isolated facility with supernatural traits.',
    type: 'Series',
    info: '1 Season (13 Episodes)'
  },
  {
    id: 'pluto',
    title: 'Pluto',
    totalEps: 8,
    genres: ['Sci-Fi', 'Suspense', 'Mecha', 'Mystery'],
    synopsis: 'Europol detective Gesicht is assigned to investigate the murders of the world\'s seven most advanced robots and their human creators, uncovering a conspiracy that threatens to destroy humanity.',
    type: 'Series',
    info: '1 Season Complete (8 Episodes, 1-Hour each)'
  },
  {
    id: 'kaiju8',
    title: 'Kaiju No. 8',
    totalEps: 12,
    genres: ['Action', 'Sci-Fi'],
    synopsis: 'Kafka Hibino, a sanitation worker who cleans up Kaiju remains, dreams of joining the Defense Force. After a small Kaiju enters his body, he gains the ability to transform into Kaiju No. 8, fighting to save Japan.',
    type: 'Series',
    info: '1 Season (12 Episodes) • Season 2 (Upcoming)'
  },
  {
    id: 'monster',
    title: 'Monster',
    totalEps: 74,
    genres: ['Drama', 'Mystery', 'Suspense', 'Psychological'],
    synopsis: 'Dr. Kenzo Tenma, a brilliant neurosurgeon, risks his career to save a young boy named Johan Liebert. Years later, Tenma discovers that the boy he saved has grown up to be a charismatic and psychopathic serial killer.',
    type: 'Series',
    info: '1 Season Complete (74 Episodes)'
  },
  {
    id: 'naruto',
    title: 'Naruto',
    totalEps: 220,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'Naruto Uzumaki, a mischievous adolescent ninja, struggles for recognition in the Leaf Village, hoping to earn the respect of his peers and become the Hokage, the village leader.',
    type: 'Series',
    info: '9 Seasons (220 Episodes) • 3 Original Movies • 4 OVAs'
  }
];
