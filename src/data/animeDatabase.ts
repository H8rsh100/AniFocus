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
    title: 'Jujutsu Kaisen (2 Seasons (47 Episodes))',
    totalEps: 47,
    genres: ['Action', 'Fantasy', 'School'],
    synopsis: 'A boy fights... for "the right death." Yuji Itadori, a high school student with outstanding physical traits, swallows a cursed talisman to save his friends, becoming the vessel for Ryomen Sukuna (King of Curses). Tokyo Prefectural Jujutsu High School enrolls him to exorcise Sukuna\'s other fingers.',
    type: 'Series',
    info: '2 Seasons (47 Episodes)'
  },
  {
    id: 'jjk-s3',
    title: 'Jujutsu Kaisen (Season 3)',
    totalEps: 12,
    genres: ['Action', 'Fantasy', 'School'],
    synopsis: 'Following the devastating Shibuya Incident, Tokyo lies in ruins. The Culling Game begins—a deadly battle royale orchestrated by Kenjaku, forcing sorcerers and cursed vessels to fight for survival.',
    type: 'Series',
    info: 'Season 3 (12 Episodes)'
  },
  {
    id: 'jjk-0',
    title: 'Jujutsu Kaisen 0 (Movie)',
    totalEps: 1,
    genres: ['Action', 'Fantasy', 'School'],
    synopsis: 'Prequel film following Yuta Okkotsu, a nervous high school student who is haunted by Rika, the curse of his childhood friend. Gojo Satoru mentors Yuta at Tokyo Prefectural Jujutsu High to help him control the grade-special curse.',
    type: 'Movie',
    info: '1 Movie (Prequel)'
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
  },
  {
    id: 'violet_evergarden',
    title: 'Violet Evergarden',
    totalEps: 13,
    genres: ['Drama', 'Fantasy'],
    synopsis: 'The Great War has finally come to an end after four long years. Violet Evergarden, a young girl formerly known as "the weapon," begins a new life working as an Auto Memory Doll, transcribing people\'s thoughts and feelings into letters.',
    type: 'Series',
    info: '1 Season (13 Episodes) • 1 Special Episode • 2 Movies'
  },
  {
    id: 'clannad_as',
    title: 'Clannad: After Story',
    totalEps: 24,
    genres: ['Drama', 'Romance', 'Supernatural'],
    synopsis: 'Clannad: After Story, the sequel to the critically acclaimed slice-of-life series Clannad, begins after Tomoya Okazaki and Nagisa Furukawa graduate from high school. As they grow up, they face the emotional hardships of adult life.',
    type: 'Series',
    info: '1 Season Complete (24 Episodes) • 1 Special'
  },
  {
    id: 'fate_zero',
    title: 'Fate/Zero',
    totalEps: 25,
    genres: ['Action', 'Fantasy', 'Supernatural'],
    synopsis: 'With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In search of the fourth war, seven magi summon legendary Heroic Spirits.',
    type: 'Series',
    info: '2 Seasons Complete (25 Episodes)'
  },
  {
    id: 'fate_stay_night_ubw',
    title: 'Fate/stay night: Unlimited Blade Works',
    totalEps: 26,
    genres: ['Action', 'Fantasy', 'Supernatural'],
    synopsis: 'The Holy Grail War is a battle royale among seven magi who serve as Masters. Summoning Heroic Spirits as Servants, they fight to the death to claim the Holy Grail, which can grant wishes.',
    type: 'Series',
    info: '2 Seasons Complete (26 Episodes) • 1 Movie Prequel'
  },
  {
    id: 'no_game_no_life',
    title: 'No Game No Life',
    totalEps: 12,
    genres: ['Comedy', 'Fantasy', 'Ecchi'],
    synopsis: 'Sora and Shiro are two shut-in NEET siblings who form the legendary online gamer duo known as "Blank." They view the real world as just another lousy game until a god summons them to a fantasy world where all conflicts are settled by games.',
    type: 'Series',
    info: '1 Season Complete (12 Episodes) • 1 Movie (NGNL: Zero)'
  },
  {
    id: 'another',
    title: 'Another',
    totalEps: 12,
    genres: ['Horror', 'Mystery', 'Suspense'],
    synopsis: 'In 1998, Kouichi Sakakibara transfers to Yomiyama North Middle School. He immediately senses a fearful atmosphere in his class, centering on a quiet girl named Mei Misaki, whom his classmates treat like she doesn\'t exist.',
    type: 'Series',
    info: '1 Season Complete (12 Episodes) • 1 OVA'
  },
  {
    id: 'mirai_nikki',
    title: 'Future Diary (Mirai Nikki)',
    totalEps: 26,
    genres: ['Action', 'Suspense', 'Supernatural'],
    synopsis: 'Yukiteru Amano is a shy middle schooler who keeps a diary on his phone. He finds himself dragged into a battle royale game where the contestants must use their unique "Future Diaries" to eliminate each other and become the new God of Time and Space.',
    type: 'Series',
    info: '1 Season Complete (26 Episodes) • 1 OVA (Redial)'
  },
  {
    id: 'mushoku_tensei',
    title: 'Mushoku Tensei: Jobless Reincarnation',
    totalEps: 48,
    genres: ['Adventure', 'Fantasy', 'Isekai'],
    synopsis: 'A 34-year-old underachiever is killed in a traffic accident and reincarnates in a world of magic and swordplay as Rudeus Greyrat, a newborn baby. Retaining his memories and intellect, he resolves to live his new life to the fullest.',
    type: 'Series',
    info: '2 Seasons (48 Episodes) • 1 Special OVA'
  },
  {
    id: 'classroom_of_the_elite',
    title: 'Classroom of the Elite (Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e)',
    totalEps: 38,
    genres: ['Drama', 'Suspense', 'School'],
    synopsis: 'Kiyotaka Ayanokouji enrolls at the prestigious Tokyo Metropolitan Advanced Nurturing High School, where students are granted immense freedom. However, he ends up in the lowest Class D, discovering the school\'s cutthroat merit system.',
    type: 'Series',
    info: '3 Seasons (38 Episodes)'
  },
  {
    id: 'overlord',
    title: 'Overlord',
    totalEps: 52,
    genres: ['Action', 'Fantasy', 'Isekai'],
    synopsis: 'In the final hour of the popular virtual reality game Yggdrasil, veteran player Momonga decides to stay logged in until the servers shut down. Instead of being logged out, he finds himself trapped in his skeletal character in a new world.',
    type: 'Series',
    info: '4 Seasons Complete (52 Episodes) • 3 Movies'
  },
  {
    id: 'gintama',
    title: 'Gintama',
    totalEps: 367,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    synopsis: 'In an alternate Edo-period Japan conquered by aliens called Amanto, samurai Gintoki Sakata runs an odd-jobs business alongside Shinpachi and Kagura, taking on bizarre requests while dodging trouble.',
    type: 'Series',
    info: '10+ Seasons (367 Episodes) • 3 Movies • 5 Specials'
  },
  {
    id: 'psycho_pass',
    title: 'Psycho-Pass',
    totalEps: 41,
    genres: ['Action', 'Sci-Fi', 'Suspense'],
    synopsis: 'In a futuristic Japan, the Sibyl System measures the mental state of citizens to determine their criminal intent, known as their Psycho-Pass. Inspector Akane Tsunemori and Enforcer Shinya Kogami hunt down those with high crime coefficients.',
    type: 'Series',
    info: '3 Seasons (41 Episodes) • 5 Movies'
  },
  {
    id: 'akame_ga_kill',
    title: 'Akame ga Kill!',
    totalEps: 24,
    genres: ['Action', 'Fantasy', 'Gore'],
    synopsis: 'Tatsumi, a young villager who travels to the Capital to raise money, discovers the deep corruption of the empire. He joins Night Raid, an assassin branch of the Revolutionary Army, to overthrow the prime minister.',
    type: 'Series',
    info: '1 Season Complete (24 Episodes)'
  },
  {
    id: 'kill_la_kill',
    title: 'Kill la Kill',
    totalEps: 24,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    synopsis: 'Ryuuko Matoi transfers to Honnouji Academy, carrying a giant half-scissors blade to search for her father\'s killer. She challenges Satsuki Kiryuuin and the school\'s elite, who wear superhuman Goku Uniforms.',
    type: 'Series',
    info: '1 Season Complete (24 Episodes) • 1 Special'
  },
  {
    id: 'nanatsu_no_taizai',
    title: 'The Seven Deadly Sins (Nanatsu no Taizai)',
    totalEps: 100,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'Princess Elizabeth searches for the Seven Deadly Sins, a group of powerful knights who were accused of plotting to overthrow the Liones Kingdom, hoping to recruit them to save her home from the corrupt Holy Knights.',
    type: 'Series',
    info: '4 Seasons Complete (100 Episodes) • 3 Movies • 1 Special'
  },
  {
    id: 'fairy_tail',
    title: 'Fairy Tail',
    totalEps: 328,
    genres: ['Action', 'Adventure', 'Fantasy'],
    synopsis: 'Lucy Heartfilia, a teenage wizard, runs away from home to join the famous Fairy Tail Guild. She teams up with fire wizard Natsu Dragneel and his cat companion Happy, embarking on magical quests.',
    type: 'Series',
    info: '9 Seasons (328 Episodes) • 2 Movies • 9 OVAs'
  },
  {
    id: 'noragami',
    title: 'Noragami',
    totalEps: 25,
    genres: ['Action', 'Fantasy', 'Supernatural'],
    synopsis: 'Yato is a minor deity who dreams of having millions of worshippers. Lacking even a single shrine, he performs odd jobs for five yen. His life changes when high schooler Hiyori Iki saves him from a bus accident.',
    type: 'Series',
    info: '2 Seasons Complete (25 Episodes) • 4 OVAs'
  },
  {
    id: 'erased',
    title: 'Erased (Boku dake ga Inai Machi)',
    totalEps: 12,
    genres: ['Mystery', 'Suspense', 'Supernatural'],
    synopsis: 'Satoru Fujinuma possesses a supernatural ability called "Revival" that sends him back in time minutes before a tragedy. After his mother is murdered, he is sent back 18 years to prevent her death and save his childhood classmates.',
    type: 'Series',
    info: '1 Season Complete (12) Episodes'
  },
  {
    id: 'charlotte',
    title: 'Charlotte',
    totalEps: 13,
    genres: ['Drama', 'Supernatural', 'School'],
    synopsis: 'In an alternate world, a small percentage of children develop short-lived supernatural abilities at puberty. Yuu Otosaka uses his body-slip ability to live a perfect school life until he is caught by Nao Tomori.',
    type: 'Series',
    info: '1 Season Complete (13 Episodes) • 1 Special OVA'
  },
  {
    id: 'angel_beats',
    title: 'Angel Beats!',
    totalEps: 13,
    genres: ['Drama', 'Comedy', 'Supernatural'],
    synopsis: 'Yuzuru Otonashi wakes up with amnesia in the afterlife, finding himself in a high-school-style purgatory. He is recruited by Yuri Nakamura to join the Afterlife Battlefront, fighting against the school president Angel.',
    type: 'Series',
    info: '1 Season Complete (13 Episodes) • 2 Specials'
  },
  {
    id: 'food_wars',
    title: 'Food Wars! Shokugeki no Soma',
    totalEps: 86,
    genres: ['Comedy', 'Ecchi', 'School'],
    synopsis: 'Soma Yukihira aims to become a full-time chef in his father\'s restaurant. His father sends him to Totsuki Culinary Academy, an elite cooking school where students settle arguments through intense culinary duels.',
    type: 'Series',
    info: '5 Seasons Complete (86 Episodes) • 5 OVAs'
  },
  {
    id: 'konosuba',
    title: 'KonoSuba: God\'s Blessing on this Wonderful World!',
    totalEps: 33,
    genres: ['Adventure', 'Comedy', 'Fantasy'],
    synopsis: 'After dying a laughable death, high schooler Kazuma Satou is offered a choice by the goddess Aqua: go to heaven or reincarnate in a fantasy world. He chooses the fantasy world and takes Aqua with him, only to discover she is useless.',
    type: 'Series',
    info: '3 Seasons (33 Episodes) • 1 Movie • 2 OVAs'
  },
  {
    id: 'horimiya',
    title: 'Horimiya',
    totalEps: 26,
    genres: ['Romance', 'School'],
    synopsis: 'Kyoko Hori is a popular high schooler who hides her domestic side. Izumi Miyamura is a gloomy classmate who hides his tattoos and piercings. They cross paths outside school, discovering each other\'s secrets and growing close.',
    type: 'Series',
    info: '2 Seasons Complete (26 Episodes)'
  },
  {
    id: 'toradora',
    title: 'Toradora!',
    totalEps: 25,
    genres: ['Comedy', 'Romance', 'School'],
    synopsis: 'Ryuuji Takasu is a gentle high schooler whose intimidating eyes make him look like a delinquent. He crosses paths with Taiga Aisaka, the pint-sized "Palmtop Tiger," agreeing to help each other confess to their respective best friends.',
    type: 'Series',
    info: '1 Season Complete (25 Episodes) • 1 Special'
  },
  {
    id: 'anohana',
    title: 'Anohana: The Flower We Saw That Day',
    totalEps: 11,
    genres: ['Drama', 'Supernatural'],
    synopsis: 'Jinta Yadomi lives as a hermit after his childhood friend Menma dies. One summer day, Menma\'s ghost appears, asking him to grant her forgotten wish. Jinta must reunite their drifted group of childhood friends to help her pass on.',
    type: 'Series',
    info: '1 Season Complete (11 Episodes) • 1 Movie Sequel'
  },
  {
    id: 'jojo_part3',
    title: 'JoJo\'s Bizarre Adventure: Stardust Crusaders',
    totalEps: 48,
    genres: ['Action', 'Adventure', 'Supernatural'],
    synopsis: 'Jotaro Kujo, grandson of Joseph Joestar, discovers he possesses a supernatural manifestation called a Stand. He embarks on a journey to Egypt with Joseph and their allies to defeat the revived vampire DIO and save his mother.',
    type: 'Series',
    info: '2 Seasons Complete (48 Episodes)'
  },
  {
    id: 'fire_force',
    title: 'Fire Force (Enen no Shouboutai)',
    totalEps: 48,
    genres: ['Action', 'Sci-Fi', 'Supernatural'],
    synopsis: 'Spontaneous Human Combustion turns victims into fiery monsters known as Infernals. Shinra Kusakabe, a youth who can ignite his feet at will, joins Special Fire Force Company 8 to combat the phenomenon and find the truth behind his family\'s death.',
    type: 'Series',
    info: '2 Seasons (48 Episodes) • Season 3 (Upcoming)'
  },
  {
    id: 'darling_in_the_franxx',
    title: 'Darling in the Franxx',
    totalEps: 24,
    genres: ['Action', 'Drama', 'Sci-Fi', 'Mecha'],
    synopsis: 'In a post-apocalyptic future, children pilot giant mechas called Franxx in male-female pairs. Hiro, a failed pilot, meets Zero Two, a mysterious horned hybrid pilot who offers to let him become her co-pilot.',
    type: 'Series',
    info: '1 Season Complete (24 Episodes)'
  },
  {
    id: 'hellsing_ultimate',
    title: 'Hellsing Ultimate',
    totalEps: 10,
    genres: ['Action', 'Horror', 'Gore', 'Supernatural'],
    synopsis: 'The Hellsing Organization fights rogue vampires and supernatural threats. Their ultimate weapon is Alucard, an ancient and incredibly powerful vampire who serves the organization under Sir Integra Hellsing.',
    type: 'Series',
    info: '10 OVA Episodes Complete (50-minute average)'
  },
  {
    id: 'dr_stone',
    title: 'Dr. Stone',
    totalEps: 35,
    genres: ['Adventure', 'Sci-Fi'],
    synopsis: 'A mysterious green light petrifies all humanity. Thousands of years later, genius Senku Ishigami wakes up, resolving to rebuild civilization from scratch using the power of science alongside his classmates.',
    type: 'Series',
    info: '3 Seasons (35 Episodes) • 1 Special Movie'
  },
  {
    id: 'tate_no_yuusha',
    title: 'The Rising of the Shield Hero (Tate no Yuusha no Nariagari)',
    totalEps: 38,
    genres: ['Action', 'Adventure', 'Fantasy', 'Isekai'],
    synopsis: 'Naofumi Iwatani is summoned to a parallel world as one of the Four Cardinal Heroes, armed with only a shield. Betrayed and falsely accused, he must build his strength and reputation from zero to protect the land.',
    type: 'Series',
    info: '3 Seasons (38 Episodes)'
  },
  {
    id: 'blue_exorcist',
    title: 'Blue Exorcist (Ao no Exorcist)',
    totalEps: 37,
    genres: ['Action', 'Fantasy', 'School'],
    synopsis: 'Rin Okumura discovers he is the son of Satan, the ruler of Gehenna. After Satan kills Rin\'s adoptive father, Rin enrolls at True Cross Academy to become an exorcist and defeat Satan.',
    type: 'Series',
    info: '3 Seasons (37 Episodes) • 1 Movie'
  },
  {
    id: 'made_in_abyss',
    title: 'Made in Abyss',
    totalEps: 25,
    genres: ['Adventure', 'Drama', 'Fantasy', 'Mystery'],
    synopsis: 'Riko, an orphan girl, dreams of exploring the Abyss, a colossal pit filled with relics and monsters. She meets a humanoid robot named Reg, descending into the Abyss to find her mother, discovering dark truths along the way.',
    type: 'Series',
    info: '2 Seasons (25 Episodes) • 3 Movies'
  },
  {
    id: 'serial_experiments_lain',
    title: 'Serial Experiments Lain',
    totalEps: 13,
    genres: ['Sci-Fi', 'Psychological', 'Mystery'],
    synopsis: 'Lain Iwakura, an introverted middle schooler, receives an email from a classmate who recently committed suicide. She is drawn into the Wired, a global virtual communications network, questioning the boundaries of reality and identity.',
    type: 'Series',
    info: '1 Season Complete (13 Episodes)'
  },
  {
    id: 'dorohedoro',
    title: 'Dorohedoro',
    totalEps: 12,
    genres: ['Action', 'Comedy', 'Fantasy', 'Gore'],
    synopsis: 'Caiman is a man with a reptile head and amnesia, living in the Hole, a dismal city. Alongside his friend Nikaido, he hunts down sorcerers who use citizens as test subjects, hoping to find the one who cursed him.',
    type: 'Series',
    info: '1 Season (12 Episodes) • 6 Specials • Season 2 (Upcoming)'
  },
  {
    id: 'bungou_stray_dogs',
    title: 'Bungou Stray Dogs',
    totalEps: 61,
    genres: ['Action', 'Mystery', 'Supernatural'],
    synopsis: 'Atsushi Nakajima is kicked out of his orphanage and rescues detective Osamu Dazai. He joins the Armed Detective Agency, a group of supernatural investigators who protect Yokohama from the Port Mafia and overseas syndicates.',
    type: 'Series',
    info: '5 Seasons Complete (61 Episodes) • 1 Movie • 1 OVA'
  },
  {
    id: 'black_lagoon',
    title: 'Black Lagoon',
    totalEps: 24,
    genres: ['Action', 'Thriller'],
    synopsis: 'Rokurou Okajima, a Japanese businessman, is kidnapped by the Lagoon Company, a group of pirate mercenaries operating out of Roanapur, Thailand. He decides to join them, renaming himself Rock and adapting to a violent life.',
    type: 'Series',
    info: '2 Seasons Complete (24 Episodes) • 5 OVA Episodes'
  },
  {
    id: 'claymore',
    title: 'Claymore',
    totalEps: 26,
    genres: ['Action', 'Fantasy', 'Gore'],
    synopsis: 'In a medieval world plagued by shape-shifting monsters called Yoma, a mysterious organization breeds half-human, half-Yoma female warriors known as Claymores to hunt the beasts in exchange for payments from villages.',
    type: 'Series',
    info: '1 Season Complete (26 Episodes)'
  },
  {
    id: 'baccano',
    title: 'Baccano!',
    totalEps: 16,
    genres: ['Action', 'Mystery', 'Supernatural'],
    synopsis: 'In 1930s America, a diverse cast of characters, including alchemists, mafiosi, thieves, and assassins, become entangled in an immortal elixir conspiracy. The story is told through non-linear overlapping timelines.',
    type: 'Series',
    info: '1 Season Complete (16 Episodes)'
  },
  {
    id: 'durarara',
    title: 'Durarara!!',
    totalEps: 60,
    genres: ['Action', 'Mystery', 'Supernatural'],
    synopsis: 'Mikado Ryuugamine moves to Ikebukuro, Tokyo, searching for excitement. He uncovers the neighborhood\'s secrets, including street gangs, a slash-happy serial killer, and the legendary Headless Rider Celty Sturluson.',
    type: 'Series',
    info: '4 Seasons Complete (60 Episodes) • 5 Specials'
  },
  {
    id: 'great_teacher_onizuka',
    title: 'Great Teacher Onizuka (GTO)',
    totalEps: 43,
    genres: ['Comedy', 'Drama', 'School'],
    synopsis: 'Eikichi Onizuka, a 22-year-old former gang leader, resolves to become the greatest high school teacher in Japan. He is assigned to Class 3-4, a class of delinquent students whom he wins over using unconventional life lessons.',
    type: 'Series',
    info: '1 Season Complete (43 Episodes) • 1 Special'
  }
];
