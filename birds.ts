export interface BirdData {
    name: string;
    latinName: string;
    description: string[] | null;
    box_habitat: string[] | null;
    box_comportement: string[] | null;
    box_regime: string[] | null;
    box_reproduction: string[] | null;
    box_vol: string[] | null;
    images: Image[];
    key: number;
    songs?: string[];
}

export interface Image {
    sdLink: string;
    hdLink: string;
}

export const birds: BirdData[] = [
    {
        "name": "Mésange bleue",
        "latinName": "Cyanistes caeruleus",
        "description": [
            "La Mésange bleue est une petite mésange qui tire son nom de la couleur bleue de sa calotte, de ses ailes et de sa queue. Sa tête est remarquable. La face, largement blanche, est barrée de trois traits bleu sombre à noirs, deux traits loraux qui passent par l'œil pour rejoindre la nuque de même couleur, et un large trait gulaire qui rejoint un collier, qui lui-même borde les joues blanches et rejoint la nuque. Le mâle adulte se distingue à la teinte bleue du plumage plus marquée, surtout à la calotte. Le bleu de la femelle est plus terne. Le manteau est jaune-vert. Un trait blanc se voit sur l'aile au niveau des grandes couvertures. Les parties inférieures sont jaune-citron, avec une esquisse de ligne médioventrale noirâtre sur le bas de la poitrine et le haut du ventre, rappelant un peu celle de sa cousine charbonnière, mais moins marquée. L'œil est sombre. Bec et pattes sont gris bleuté.",
            "Le juvénile est plus terne que l'adulte. La calotte est grisâtre, le manteau moins vert. Une teinte jaune envahit le blanc de la tête. Les parties inférieures sont blanchâtres. Le plumage commencera à se colorer dès la mue post-juvénile."
        ],
        "box_habitat": [
            "La Mésange bleue est une espèce forestière dont l'optimum écologique est en forêt de feuillus. C'est typiquement l'oiseau de la chênaie en Europe.",
            "Sa densité peut y atteindre 2,5 couples à l'hectare. Elle y côtoie ses consœurs charbonnière et nonnette, elles aussi tournées vers les feuillus. On la trouve néanmoins en forêt mixte, mais avec une densité moindre. Elle évite les forêts de conifères pures, excepté au Moyen-Orient ou alors lors des déplacements inter-nuptiaux. La majorité des nicheurs se trouvent en dessous de 1 200 m d'altitude, mais elle peut monter à 1 500 m, voire plus, dans les Alpes et les Pyrénées, et même à plus de 3 000 m dans le Caucase. Elle déborde du milieu forestier à la faveur de sa plasticité écologique. C'est ainsi qu'on la trouve dans les bosquets, les ripisylves, les haies arborées du bocage, les parcs, vergers et jardins, etc."
        ],
        "box_comportement": [
            "La Mésange bleue est un petit oiseau très actif et très agile. Elle est sans cesse en mouvement à la recherche de sa nourriture. Elle a une façon bien à elle d'évoluer dans les houppiers en adoptant des positions acrobatiques autorisées par ses doigts griffus. Elle se laisse pendre à l'extrémité des rameaux, la tête en bas, et explore du bec suivant la saison bourgeons et fructifications. Lorsqu'elle en a terminé avec une brindille, elle s'installe sur la suivante qui subit un mouvement de balancier caractéristique.",
            "En saison de reproduction, la Mésange bleue forme des couples territoriaux.",
            "Malgré sa petite taille, elle est batailleuse et sait se montrer agressive envers les intrus de même taille qui lui font concurrence, en particulier pour les sites de nidification. Néanmoins, la densité spécifique est souvent l'une des plus élevées parmi les passereaux forestiers. Le mâle en parade se laisse tomber, ailes étendues, depuis les houppiers en vue de la femelle, et se présente devant elle ailes écartées et vibrantes, calotte bleue bien en vue. Il pratique aussi l'offrande de nourriture à la femelle qui quémande dans l'attitude du poussin, en faisant trembler ses ailes. Pour l'attirer vers la cavité qui pourrait abriter le nid, le mâle effectue de lents glissés vers elle pour l'inviter à la visiter.",
            "La Mésange bleue cherche sa nourriture en hauteur dans les arbres, en moyenne plus haut que les autres membres de la famille et descendant plus rarement au sol.",
            "La nuit, la Mésange bleue se tient dans le lierre ou les feuillus denses, mais aussi dans des endroit abrités comme des creux ou des trous quand il fait mauvais temps.",
            "Après l'émancipation des jeunes et pour toute la période inter-nuptiale, les Mésanges bleues forment avec d'autres espèces de mésanges, grimpereaux et roitelets, des groupes qui vagabondent en quête de nourriture, tout d'abord en forêt, puis au fur et à mesure que le froid gagne, se rapprochent des milieux urbanisés où elles savent pouvoir trouver un complément alimentaire. Elles fréquentent assidûment les postes d'alimentation, appréciant graisse et graines grasses.",
            "C'est une migratrice partielle en Europe. Les oiseaux de nos régions sont généralement sédentaires mais les populations vivant en Europe du Nord et du Nord-Est sont affectées par des mouvements d'assez grande ampleur en direction du sud-ouest du continent."
        ],
        "box_regime": [
            "À la belle saison, la Mésange bleue est essentiellement insectivore. Les chenilles de lépidoptères entrent pour une bonne part dans son régime, surtout au moment de l'élevage des jeunes.",
            "Elle peut à se titre jouer un rôle très bénéfique, avec les autres espèces de mésanges, lors des pullulations de ravageurs comme la Tordeuse du chêne. Les pucerons sont aussi très recherchés. En fait, elle peut s'attaquer à une grande variété de proies invertébrées de petite taille. En saison inter-nuptiale, l'espèce devient nettement granivore et frugivore, tout en continuant à être insectivore à la faveur des formes de résistance des insectes (œufs, chrysalides). Elle peut causer des dégâts dans les vergers en s'attaquant aux bourgeons et aux fruits, mais cela est largement compensé par sa consommation d'insectes. Des arbres comme les saules et les peupliers jouent pour elle un rôle important. Au moment de l'abondante floraison printanière, les oiseaux prélèvent nectar et pollen ainsi que les insectes venant butiner les châtons. Ils savent aussi boire la sève qui s'écoule de blessures dues aux pics ou à certains insectes. Enfin, en intersaison, ils se nourrissent des nombreuses graines."
        ],
        "box_reproduction": [
            "La Mésange bleue se reproduit d'avril à juillet. C'est un nicheur cavernicole. Elle construit son nid dans toute cavité de taille convenable, pourvu que son entrée soit suffisamment restreinte pour lui éviter d'être confrontée à des concurrents de plus grande taille comme la charbonnière.",
            "Un trou dans un arbre est le cas le plus fréquent, mais elle peut occuper aussi une cavité rupestre dans une falaise, un mur ou un front de taille de carrière. En fait, toute cavité pouvant contenir son nid peut être choisie, comme des tuyaux, des poteaux creux, des agglos en ciment, etc. Elle adopte volontiers les nichoirs artificiels. Le nid est fait de mousse, d'herbes sèches et autres éléments végétaux, et sa coupe est garnie de poils d'animaux. La ponte est constituée de 9 à 13 œufs dont l'incubation n'excède pas 15 jours. Seule la femelle couve, le mâle s'occupant du ravitaillement. Les jeunes sont nourris par le couple. Leur envol se produit à l'âge de 19-20 jours mais l'émancipation totale n'intervient qu'au bout de 4 semaines. Une seconde ponte en fin de printemps est régulière dans la majorité de l'aire. L'espèce a quelques prédateurs de ses couvées ou nichées tels que les écureuils et les pics."
        ],
        "box_vol": ["La Mésange bleue a un vol assez lent et un peu hésitant, dû à une succession de battements rapides entrecoupée de brèves pauses. Elle effectue des vols courts d'un arbre à l'autre, s'arrêtant brusquement sur un perchoir. Mais lors des déplacements migratoires, les petits groupes lâches, qu'elle constitue alors, volent sur de plus longues distances et assez haut, d'un vol plus soutenu."],
        "images": [
            {
                "sdLink": "https://www.oiseaux.net/photos/christophe.mercier/images/id/mesange.bleue.chme.2p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/christophe.mercier/images/mesange.bleue.chme.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/fabrice.henon/images/id/mesange.bleue.fahe.14p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/fabrice.henon/images/mesange.bleue.fahe.14g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/christophe.mercier/images/id/mesange.bleue.chme.4p.185.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/christophe.mercier/images/mesange.bleue.chme.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/aurelien.audevard/images/id/mesange.bleue.auau.5p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/aurelien.audevard/images/mesange.bleue.auau.5g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/id/mesange.bleue.alch.3p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/mesange.bleue.alch.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/id/mesange.bleue.mafa.10p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/mesange.bleue.mafa.10g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/mesange.bleue.redu.8p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/mesange.bleue.redu.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/id/mesange.bleue.mafa.5p.221.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/mesange.bleue.mafa.5g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/id/mesange.bleue.dico.3p.221.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/mesange.bleue.dico.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/dora.zarzavatsaki/images/id/mesange.bleue.doza.2p.224.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/dora.zarzavatsaki/images/mesange.bleue.doza.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/dominique.marques/images/id/mesange.bleue.doma.1p.211.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/dominique.marques/images/mesange.bleue.doma.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/mesange.bleue.redu.1p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/mesange.bleue.redu.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/herve.enoch/images/id/mesange.bleue.heen.8p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/herve.enoch/images/mesange.bleue.heen.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/id/mesange.bleue.dico.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/mesange.bleue.dico.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/id/mesange.bleue.alch.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/mesange.bleue.alch.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/francois.granja/images/id/mesange.bleue.frgr.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/francois.granja/images/mesange.bleue.frgr.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/mesange.bleue.redu.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/mesange.bleue.redu.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/paul-rene.meffre/images/id/mesange.bleue.prme.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/paul-rene.meffre/images/mesange.bleue.prme.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/fabrice.henon/images/id/mesange.bleue.fahe.13p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/fabrice.henon/images/mesange.bleue.fahe.13g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/nathalie.santa.maria/images/id/mesange.bleue.nasa.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/nathalie.santa.maria/images/mesange.bleue.nasa.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.declercq/images/id/mesange.bleue.mdec.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.declercq/images/mesange.bleue.mdec.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/mesange.bleue.dico.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/mesange.bleue.dico.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/mesange.bleue.dico.4p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/mesange.bleue.dico.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/mesange.bleue.dico.7p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/mesange.bleue.dico.7g.jpg"
            }
        ],
        "key": 384,
        "songs": ["https://www.oiseaux.net/chant/didier.collin/mesange.bleue.1.mp3", "https://www.oiseaux.net/chant/jean.roche/mesange.bleue.2.mp3", "https://www.xeno-canto.org/533328/download", "https://www.xeno-canto.org/533199/download", "https://www.xeno-canto.org/528258/download"]
    },
    {
        "name": "Hirondelle rustique",
        "latinName": "Hirundo rustica",
        "description": [
            "Avec son corps fuselé, ses ailes en faucille, sa queue fourchue et sa vaste répartition, l'Hirondelle rustique peut être prise comme modèle de la famille des Hirundinidés. ",
            "L'adulte en plumage nuptial a le dessus du corps et les couvertures alaires noirâtres à reflets bleutés à bonne lumière. Rémiges et rectrices sont plus brunes et sans reflet. Chez la sous-espèce type \"rustica\", le dessous du corps est blanc teinté de crème. La tête montre un front et une gorge couleur brique typiques.",
            "Ses côtés noirs enserrent la gorge, incluent l'œil sombre et se prolongent en un bandeau pectoral noirâtre plus ou moins régulier qui peut inclure quelques plumes marron. La queue est pourvue de rectrices noirâtres à large tache subterminale blanche. Leur taille augmente légèrement de l'intérieur vers l'extérieur, d'où un aspect fourchu. Les rectrices externes s'allongent tout en s'amincissant pour former deux \"filets\" étroits. Le bec noir, petit mais large, donne accès à une large cavité buccale. Les pattes très courtes sont noirâtres.",
            "Le dimorphisme sexuel est très faible. La femelle adulte se distingue du mâle à ses \"filets\" plus courts et son plumage est un peu moins brillant.",
            "Le juvénile est reconnaissable à son front et sa gorge de couleur fauve rosée et à l'absence de filets à la queue.",
            "L'espèce ne peut être confondue avec une autre hirondelle dans la majeure partie de son aire. En Asie du Sud-Est, il faut faire attention à l'Hirondelle de Tahiti, assez similaire, et dans une moindre mesure à l'Hirondelle à longs brins. En revanche en Afrique où elle hiverne, 3 ou 4 espèces présentent des similitudes.",
            "Les 8 sous-espèces décrites diffèrent entre elles par la couleur des parties inférieures qui peut aller jusqu'à un roux-châtain assez prononcé, par exemple chez les sous-espèces erythrogaster d'Amérique du Nord ou savignii d'Égypte. L'importance du collier pectoral varie également beaucoup suivant les ssp. Il va en s'amincissant d'ouest en est et peut aller jusqu'au bandeau incomplet, avec une ébauche seulement sur les côtés de la poitrine comme dans la ssp saturata de l'est de la Russie."
        ],
        "box_habitat": [
            "L'Hirondelle rustique a besoin pour se nourrir d'espaces dégagés comme les terres agricoles et les zones humides, d'habitude à des altitudes inférieures à 1000 mètres, mais localement jusqu'à 3000 m.",
            "Les plans d'eau jouent un rôle essentiel, d'une part pour la chasse en conditions climatiques difficiles et d'autre part pour y boire lors des périodes de canicule.",
            "Pour la reproduction, elle est très dépendante de l'homme et de ses constructions. Elle affectionne les fermes et les villages ruraux où elle trouve les espaces confinés (écuries, étables, granges, garages et autres lavoirs) où elle peut construire son nid. La condition est que ces espaces soient accessibles en tout temps. C'est pourquoi elle niche plus rarement à l'intérieur des maisons ou appartements. La présence de fils électriques et téléphoniques servant de perchoirs est un facteur très favorable. Cependant, elle est rare en ville, probablement du fait de l'éloignement des zones de chasse et de la rareté des sites de nidification.",
            "On peut à juste titre se demander comment nichait l'espèce avant que l'homme ne se mette à construire des habitations. Elle était alors probablement plus rare et devait nicher dans les grottes.",
            "Après la nidification et en période de migration, les Hirondelles rustiques ont l'habitude de se rassembler pour passer la nuit en groupe au bord de l'eau, essentiellement dans les roselières."
        ],
        "box_comportement": [
            "L'Hirondelle rustique est une espèce anthropophile qui ne craint pas l'homme et niche dans sa proximité, souvent immédiate.",
            "C'est une espèce grégaire qui peut se rassembler en grand nombre en période internuptiale, mais on ne peut la qualifier d'espèce sociale. Elle ne niche pas de façon coloniale et, dans les groupes, les individus gardent une distance d'une 15e de cm entre eux.",
            "La majorité des Hirondelles rustiques sont migratrices et vont passer l'hiver en milieu tropical ou équatorial. Le retour des oiseaux d'Europe occidentale a lieu dès la mi-mars et se poursuit en avril.",
            "Le mâle arrive généralement le premier et son chant signale son retour. Le territoire de nidification est réoccupé sans délai.",
            "En fin de saison, les rassemblements postnuptiaux sur les fils, très visibles dans les villages, préludent au départ en migration qui a lieu en septembre et se poursuit début octobre.",
            "On peut essayer d'attirer chez soi à la campagne un couple d'hirondelles. Il suffit de disposer d'un espace tranquille, un garage ou un débarras par exemple, disposant d'un accès permanent (lucarne, œil de bœuf,...) autorisant les visites et d'un support pour le nid, des poutres au plafond étant l'idéal. Il vaut mieux ne pas avoir de chat à la maison. Si vous avez la chance d'attirer un couple chez vous, vous ne vous lasserez pas d'observer le comportement des oiseaux.",
            "Les hirondelles ayant besoin de terre mouillée pour la construction du nid, on peut les favoriser en ménageant de petites flaques boueuses dans un environnement dégagé.",
            "En revanche, on ne pourra pas grand chose pour elles en cas d'intempéries prolongées qui les empêchent de se nourrir normalement et peuvent entraîner une mortalité de jeunes au nid et même d'adultes."
        ],
        "box_regime": [
            "L'Hirondelle rustique, comme tous les membres de la famille, est un insectivore exclusif, ne se nourrissant que d'insectes capturés au vol.",
            "Elle est morphologiquement adaptée à cette fonction. La vision joue un rôle prépondérant dans la chasse.",
            "Les proies se recrutent parmi plus de 80 familles d'insectes, les Diptères arrivant toujours en tête en nombre. Bien évidemment le régime varie suivant les localités, les saisons et même les années.",
            "Lors des périodes de temps froid et humide défavorable aux insectes, les hirondelles chassent préférentiellement au-dessus de l'eau où l'entomofaune est plus abondante.",
            "Lorsqu'elle chasse pour nourrir sa nichée au nid, l'hirondelle emmagasine plusieurs proies dans sa bouche pour ne pas multiplier les trajets. Une becquée peut comporter une vingtaine d'insectes. Malgré tout, les allers-retours des parents peuvent se répéter près de 400 fois par jour."
        ],
        "box_reproduction": [
            "L'Hirondelle rustique choisit en priorité des étables, écuries et autres granges pour bâtir son nid, l'idéal étant que le plafond comporte des solives. Secondairement, son choix pourra se porter sur tout autre endroit abrité (garage, cave, remise, véranda, etc.), pourvu que son accès soit possible et permanent.",
            "Le nid est construit par le couple avec de la boue qu'il prélève au bord de l'eau. Les oiseaux en font des boulettes qu'ils déposeront petit à petit, donnant ainsi au nid un aspect granuleux typique. Ils y incluent des brindilles sèches qui assureront sa solidité et sa cohésion. C'est un nid permanent qui pourra être réutilisé pendant plusieurs années. Il a la forme d'une fraction de coupe, variable suivant son emplacement. Lorsqu'il est en demi-coupe contre une poutre par exemple, il atteint une 20e de cm de largeur pour une 10e de cm de hauteur. Il ne comporte pas d'orifice d'entrée, accessible qu'il est sur tout son bord libre, mais il est toujours très proche du plafond qui le surplombe et le protège. L'intérieur de la coupe est garni d'herbes sèches et tapissé de plumes et de crin. L'analyse d'un nid a révélé qu'il était formé de 212 grammes de terre sèche et de 2 224 radicelles.",
            "Plus de 1 100 voyages avaient été nécessaires à sa construction (La Hulotte n°60, pp 12-17). De façon anecdotique, on a rapporté le cas d'hirondelles prélevant des poils sur le dos d'un chat pour en garnir leur nid. Lorsque le temps est favorable, huit jours suffisent pour achever l'ouvrage.",
            "Les adultes cherchent toujours à conforter un nid existant plutôt que d'en construire un nouveau, d'où une concurrence en début de saison pour récupérer les meilleurs nids. Il arrive que le nid soit squatté par une autre espèce, le Moineau domestique par exemple, ou encore un Rougequeue noir, une Bergeronnette grise ou encore un Troglodyte mignon. Le moineau est le plus gênant car il est capable d'en expulser les propriétaires légitimes.",
            "Les premières pontes ont lieu de fin avril à juin. Dans nos régions tempérées, elles peuvent être suivies d'une deuxième ponte, plus rarement d'une troisième. Des cas de 4 pontes successives sont cités dans la littérature. La période de nidification s'étale d'avril à août.",
            "La femelle pond 2 à 7 œufs, le plus souvent 4 ou 5, blancs rosés et pointillés de brun, qu'elle va couver presque seule durant 13 à 16 jours. Elle s'absente de courtes périodes pour aller se nourrir. La couvaison permet aussi une thermorégulation des œufs lorsque le nid se trouve exposé à de fortes températures, par exemple dans un hangar agricole en tôle. Les jeunes séjournent au nid 3 semaines environ. Leur poids culminera à 22 grammes, soit 5 grammes de plus que les parents, à 13 jours. Ce surpoids sera rapidement perdu par la suite, notamment du fait de la croissance du plumage et de l'envol.",
            "Vers le quinzième jour, lorsque les plumes sont assez développées pour conserver la chaleur corporelle, les parents ne les abritent plus que pendant la nuit, et seulement par intermittence le jour. Puis vers le 20e jour, les parents cesseront de les nourrir au nid. Pour les obliger à quitter le nid et prendre leur envol, ils s'approchent d'eux avec des insectes mais sans les leur donner. Poussés par la faim et brusqués par les cris des adultes, les jeunes finiront par se jeter dans le vide, le vol étant instinctif chez eux.",
            "Bien que les parents évacuent les sacs fécaux de leurs jeunes, le rebord du nid se garnit de fientes au fur et à mesure de l'élevage et nombres d'entre elles tombent au sol en dessous. C'est ce côté salissant du nid qui rebute certaines personnes qui pour cette raison n'acceptent pas d'hirondelles chez elles.",
            "Rapidement, le couple peut entamer une seconde nidification si les conditions le permettent, le mâle se chargeant de nourrir les juvéniles de la première nichée jusqu'à leur émancipation vers le 35e jour de vie.",
            "Toutes les nidifications ne sont pas couronnées de succès. Il est fréquent qu'une nichée ou une couvée soit perdue. Les œufs improductifs, inféconds ou non-fécondés, sont chose courante chez les passereaux.",
            "Un suivi effectué dans les années 1970-80 en Moselle (J. Méguin, comm. pers.) peut nous éclairer.",
            "En 1978, une assez forte mortalité a été notée au stade œuf. Elle concernait 51 couvées sur 608, soit 8,5 % d'entre elles, dont 21 abandons complets. En 1980, la proportion était de 12 %. Quant aux nichées, leur survie dépend des conditions météorologiques qui influent sur la fréquence et la qualité des nourrissages. En 1978, 32 nichés sur 608 cumulant 87 poussins ont été trouvées mortes. On a constaté que, lorsque la recherche de nourriture est rendue difficile, les adultes arrivent à nourrir tant bien que mal les pulli jusqu'à leur dixième jour mais, passé cet âge, les petits finissent par mourir d'inanition, n'ayant pas la quantité de nourriture nécessaire à leur croissance."
        ],
        "box_vol": [
            "Les hirondelles sont morphologiquement adaptées au milieu aérien dans lequel elles trouvent leur nourriture.",
            "Leurs ailes longues et étroites leur permettent un vol soutenu, y compris sur de longues distances car nombre d'entre elles sont migratrices, et également une grande agilité dans l'air, par exemple quand elles chassent les insectes volants. En revanche, le vol sur place leur est interdit. Le vol de l'Hirondelle rustique correspond bien à ce schéma d'ensemble. Son vol est facile, avec des battements assez lents pour la taille de l'oiseau mais réguliers. L'oiseau alterne des phases de vol battu et de vol plané. Elle virevolte, vire sur l'aile, plonge ou part en chandelle à la poursuite des insectes. Pour boire, elle se laisse glisser, ailes relevées, au dessus de la surface de l'eau qu'elle effleure du bec, comme le font aussi les martinets. Lorsqu'elle s'est posée au sol, en particulier lorsqu'elle récolte de la boue pour le nid, son essor est un peu laborieux, gênée qu'elle est par ses longues ailes et ses courtes pattes."
        ],
        "images": [
            {
                "sdLink": "https://www.oiseaux.net/photos/herve.michel/images/id/hirondelle.rustique.hemi.4p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/herve.michel/images/hirondelle.rustique.hemi.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/id/hirondelle.rustique.jmpo.3p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/hirondelle.rustique.jmpo.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/hirondelle.rustique.juda.12p.181.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/hirondelle.rustique.juda.12g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/hirondelle.rustique.redu.19p.258.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/hirondelle.rustique.redu.19g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/hirondelle.rustique.redu.8p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/hirondelle.rustique.redu.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.2p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/michel.lamarche/images/id/hirondelle.rustique.mila.10p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/michel.lamarche/images/hirondelle.rustique.mila.10g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.11p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.11g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/id/hirondelle.rustique.dico.7p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.7g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.10p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.10g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/hirondelle.rustique.redu.1p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/hirondelle.rustique.redu.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/hirondelle.rustique.redu.24p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/hirondelle.rustique.redu.24g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/robert.hendrick/images/id/hirondelle.rustique.rohe.3p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/robert.hendrick/images/hirondelle.rustique.rohe.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/id/hirondelle.rustique.jmpo.44p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/hirondelle.rustique.jmpo.44g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jacques.riviere/images/id/hirondelle.rustique.jari.10p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jacques.riviere/images/hirondelle.rustique.jari.10g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/hirondelle.rustique.redu.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/hirondelle.rustique.redu.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/francoise.folliard/images/id/hirondelle.rustique.frfo.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/francoise.folliard/images/hirondelle.rustique.frfo.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/id/hirondelle.rustique.jmpo.23p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/hirondelle.rustique.jmpo.23g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/aurelien.audevard/images/id/hirondelle.rustique.auau.8p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/aurelien.audevard/images/hirondelle.rustique.auau.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.6p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.6g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.5p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.5g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.8p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.21p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/hirondelle.rustique.dico.21g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/hirondelle.rustique.juda.10p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/hirondelle.rustique.juda.10g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/hirondelle.rustique.juda.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/hirondelle.rustique.juda.2g.jpg"
            }
        ],
        "key": 334,
        "songs": ["https://www.oiseaux.net/chant/jean.roche/hirondelle.rustique.1.mp3", "https://www.xeno-canto.org/103853/download", "https://www.xeno-canto.org/34544/download", "https://www.xeno-canto.org/575358/download", "https://www.xeno-canto.org/140538/download"]
    },
    {
        "name": "Rougegorge familier",
        "latinName": "Erithacus rubecula",
        "description": [
            "Le Rougegorge familier se présente comme un petit oiseau rondelet, avec des ailes relativement courtes atteignant péniblement le milieu de la queue. L'adulte est aisément reconnaissable à la couleur orangée qui envahit tout le devant du corps, front, lores, côtés de la tête, cou et poitrine. Cette grande zone orange est bordée d'un bandeau gris clair peu visible sur le haut du front et sur les côtés du cou et de la poitrine. Le reste du dessous est blanc sale lavé de roussâtre sur les flancs. Les parties supérieures sont d'un brun nuancé d'olive, assez sombre. Le croupion et les sus-caudales sont d'un brun un peu plus chaud. Les rémiges sont ourlées de chamois, ce qui éclaircit un peu l'aile fermée sur laquelle se détachent les couvertures primaires plus sombres. L'œil est sombre. Le bec fin, court et droit est brun foncé, avec la base un peu plus claire. Les pattes sont rougeâtres ou brunâtres suivant la lumière, quelquefois rosées. ",
            "Le juvénile a une silhouette semblable à celle de l'adulte, mais un aspect très différent. La couleur orange est absente. L'ensemble du corps est brun, largement moucheté de chamois roussâtre comme c'est la règle chez les muscicapidés. Le futur plastron orange transparaît néanmoins déjà car à ce niveau les plumes sont plus rousses qu'ailleurs. Néanmoins, il faudra attendre la mue post-juvénile pour voir apparaître les premières plumes orangées. Sur l'aile fermée se distingue nettement une barre rousse formée par les pointes des grandes couvertures ainsi colorées. Ce caractère persistera après la première mue et permettra l'année suivante de savoir qu'on a affaire à un oiseau de deuxième année. Autrement, les premières semaines, la commissure buccale jaune est bien visible."
        ],
        "box_habitat": [
            "Le Rougegorge familier est avant tout un oiseau de la forêt, qu'elle soit caducifoliée, sempervirente ou mixte.",
            "C'est le milieu optimal qu'il fréquente sur les lieux de reproduction. Mais de là, il déborde sur d'autres milieux arborés favorables tels que les forêts riveraines des cours d'eau, les parcs, les haies arborées, etc. À la mauvaise saison, il quitte largement la forêt, surtout les oiseaux nordiques qui sont migrateurs, pour gagner des milieux plus anthropisés comme les jardins à la campagne, mais aussi en ville, les marges des zones agricoles pourvues de ligneux, garrigue et maquis en biôme méditerranéen, etc. On peut presque dire qu'il peut être partout où il y a des ligneux dans l'aire d'hivernage."
        ],
        "box_comportement": [
            "Le Rougegorge familier est un oiseau au comportement solitaire et territorial. Posé, il adopte une attitude dressée, relevant parfois la queue et baissant les ailes tout en faisant des courbettes sur ses jambes assez robustes. Il use de son plastron \"rouge\" comme avertisseur et n'hésite pas à l'exhiber en toutes occasions quand il s'agit pour lui de faire valoir ses droits, réels ou usurpés. Les mâles territoriaux s'affrontent ainsi, poitrine haute, tout en vocalisant abondamment afin de défendre les limites de leur domaine. Même à la mauvaise saison, les rougegorges plastronnent pour défendre un territoire alimentaire et poursuivent vivement les importuns pour les refouler hors des limites invisibles qu'ils se sont fixées.",
            "Au moment de la reproduction, les mâles chantent perchés en évidence sur une branche pour être bien vus de leurs congénères. Dans un sous-bois, il n'est néanmoins pas facile de les repérer, mais en milieu semi-ouvert d'altitude par exemple, ils peuvent se percher au sommet d'un petit conifère dégagé et deviennent alors bien visibles.",
            "Autrement c'est un oiseau assez peu farouche, et même parfois confiant. Il est assez classique par exemple que le rougegorge s'approche d'une personne en train de jardiner ou de faire de l'affouage en forêt, prompt à fondre sur le ver ou l'insecte dérangé.",
            "Il se montre parfois si confiant qu'il peut se poser sur la bêche ou la cognée du travailleur et même sur sa botte quand il se repose. On ne peut s'empêcher de penser alors à un oiseau provenant d'une forêt profonde du nord qui n'aurait jamais été confronté à l'homme et au danger qu'il peut représenter pour lui. En hiver toujours, on le voit très souvent près des habitations. Il lui arrive de pénétrer dans les granges, hangars et autres endroits confinés.",
            "Le rougegorge se nourrit au sol. Il repère ses proies depuis un perchoir peu élevé et les capture à l'issue d'un petit vol d'approche. Plus rarement, il se déplace au sol en sautillant et en scrutant la surface terrestre.",
            "Le rougegorge est un oiseau peu sociable et pas du tout grégaire. On ne le voit jamais en groupe, même dans les endroits à forte densité spécifique. Il migre en solitaire et de nuit et les jours de grande migration, on peut voir au matin de nombreux rougegorges fraîchement arrivés à un endroit donné, mais ne formant jamais de groupe organisé. Au contraire, ils manifestent entre eux une certaine agressivité. Les querelles territoriales peuvent aller jusqu'à de sérieuses prises de bec qui durent, mais en principe sans issue fatale."
        ],
        "box_regime": [
            "Le Rougegorge familier est essentiellement insectivore, tout particulièrement à la belle saison, mais aussi au sud en hiver.",
            "Il se nourrit d'insectes et de leurs larves (coléoptères et diptères particulièrement) et de divers petits invertébrés (arachnides, myriapodes,...). À la mauvaise saison, il se tourne volontiers vers les petits fruits charnus tels que les baies de divers arbustes fructifères comme les ifs, les genévriers, les cotonéasters et autres sorbiers. Il peut également consommer de petites graines, voire des restes alimentaires en milieu habité. Il est facile de l'attirer sur son balcon avec de simples miettes de pain. En revanche, il ne saura pas profiter de la boule de graisse suspendue en hauteur. Tout au plus pourra-t-il en récupérer quelques bribes tombées au sol."
        ],
        "box_reproduction": [
            "Le Rougegorge familier est un semi-cavernicole pour la nidification. Le nid est toujours très bien caché dans une anfractuosité de rocher ou d'arbre, contre un talus couvert de lierre, dans une souche pourrie, sous une touffe herbacée et très difficile à découvrir.",
            "Il ne s'impose jamais à la vue. C'est la femelle qui le construit, au sol ou alors à très faible hauteur, dans la cache choisie. C'est une structure faite, de brindilles, d'herbes et feuilles sèches, de mousse, et la coupe intérieure est tapissée de crin végétal et/ou de poils animaux, mais pas de plumes.",
            "La femelle y dépose 5 à 7 œufs blanc bleuté avec des taches rouges. L'incubation dure de 11 à 14 jours, assurée par la femelle qui est alors nourrie par le mâle. Les poussins sont nidicoles, nourris et protégés par les parents. Ils quittent le nid à l'âge de 12 à 15 jours et deviennent indépendants en moyenne trois semaines plus tard.",
            "Dans le sud de l'aire, deux nichées successives semblent la règle, mais dans le nord, l'espèce ne doit pouvoir élever qu'une nichée."
        ],
        "box_vol": ["Le rougegorge vole facilement, mais on a rarement l'occasion de le vérifier car c'est un migrateur nocturne dont les déplacements au long cours échappent à l'observation. De lui, on connaît surtout le vol bas et direct qu'il utilise pour fuir quand on le dérange, pour passer d'un arbre ou d'un buisson à l'autre ou traverser une route à découvert. L'essentiel de ses déplacements dans le sous-bois sombre restent invisibles."],
        "images": [
            {
                "sdLink": "https://www.oiseaux.net/photos/robert.balestra/images/id/rougegorge.familier.roba.1p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/robert.balestra/images/rougegorge.familier.roba.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/rougegorge.familier.redu.13p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/rougegorge.familier.redu.13g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/id/rougegorge.familier.jufo.21p.239.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/rougegorge.familier.jufo.21g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/nathalie.santa.maria/images/rougegorge.familier.nasa.7p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/nathalie.santa.maria/images/rougegorge.familier.nasa.7g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/rougegorge.familier.redu.10p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/rougegorge.familier.redu.10g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/rougegorge.familier.redu.2p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/rougegorge.familier.redu.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/serge.vantrimpont/images/rougegorge.familier.seva.14p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/serge.vantrimpont/images/rougegorge.familier.seva.14g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/fabrice.henon/images/id/rougegorge.familier.fahe.3p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/fabrice.henon/images/rougegorge.familier.fahe.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/rougegorge.familier.mafa.23p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/rougegorge.familier.mafa.23g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/id/rougegorge.familier.jufo.11p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/rougegorge.familier.jufo.11g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jacques.riviere/images/id/rougegorge.familier.jari.22p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jacques.riviere/images/rougegorge.familier.jari.22g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jacques.riviere/images/id/rougegorge.familier.jari.8p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jacques.riviere/images/rougegorge.familier.jari.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/id/rougegorge.familier.alch.3p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/rougegorge.familier.alch.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/id/rougegorge.familier.alch.6p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/rougegorge.familier.alch.6g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/id/rougegorge.familier.alch.7p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/alain.chappuis/images/rougegorge.familier.alch.7g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/thierry.helsens/images/id/rougegorge.familier.thhe.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/thierry.helsens/images/rougegorge.familier.thhe.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/regine.le.courtois.nivart/images/id/rougegorge.familier.rlcn.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/regine.le.courtois.nivart/images/rougegorge.familier.rlcn.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.rabosee/images/id/rougegorge.familier.dira.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.rabosee/images/rougegorge.familier.dira.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/id/rougegorge.familier.jufo.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/rougegorge.familier.jufo.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/rougegorge.familier.redu.6p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/rougegorge.familier.redu.6g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/id/rougegorge.familier.mafa.27p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/rougegorge.familier.mafa.27g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/leo.collin/images/id/rougegorge.familier.leco.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/leo.collin/images/rougegorge.familier.leco.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jacques.riviere/images/id/rougegorge.familier.jari.11p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jacques.riviere/images/rougegorge.familier.jari.11g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/loic.epelboin/images/rougegorge.familier.loep.9p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/loic.epelboin/images/rougegorge.familier.loep.9g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/rougegorge.familier.dico.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/rougegorge.familier.dico.1g.jpg"
            }
        ],
        "key": 537,
        "songs": ["https://www.oiseaux.net/chant/didier.collin/rougegorge.familier.1.mp3", "https://www.oiseaux.net/chant/didier.collin/rougegorge.familier.2.mp3", "https://www.oiseaux.net/chant/jean.roche/rougegorge.familier.2.mp3", "https://www.xeno-canto.org/533209/download", "https://www.xeno-canto.org/533200/download"]
    },
    {
        "name": "Orite à longue queue",
        "latinName": "Aegithalos caudatus",
        "description": [
            "Anciennement, et encore couramment, nommée Mésange à longue queue, à tort car ce n'est pas une vraie mésange, l'Orite à longue queue est un tout petit passereau qui possède un corps compact, une grosse tête ronde munie d'un petit bec et une très longue queue noire et blanche (13-16 cm de longueur dont 6 à 10 pour la queue et poids de 6-10 g). C'est précisément cette longue queue étagée qui fait qu'on ne peut confondre cet oiseau de chez nous avec un autre. Les autres orites sont du SE asiatique.",
            "L'espèce possède 17 sous-espèces sur la longueur du continent eurasiatique. D'après la coloration de la tête, on distingue les deux principales sous-espèces européennes : la nordique (Aegithalos caudatus caudatus) qui a la tête d'un blanc pur et celle d'Europe centrale (Aegithalos caudatus europaeus) qui porte un bandeau noir qui va du bec à la nuque en passant au-dessus de l'œil et rejoint le manteau noir. Les hybrides de ces deux sous-espèces sont reconnaissables au bandeau non achevé ou à peine esquissé. Mâle et femelle sont identiques. Les ailes sont noires et blanches. Du rose saumoné est visible sur le dos, le croupion et surtout les scapulaires. Chez \"europaeus\", les parties inférieures sont nettement teintées de rose sur les flancs, le ventre et aux sous-caudales. La gorge et la poitrine sont blanches. ",
            "Le jeune ressemble à l'adulte en plus terne, plus brun, avec le plumage moins contrasté. Le rose n'est présent qu'au niveau des scapulaires."
        ],
        "box_habitat": ["Son habitat optimal est constitué par les forêts de feuillus et les boisements mixtes de feuillus et de conifères, ainsi que par les parcs et les jardins, les haies et bosquets. Elle apprécie les écotones et les ruptures de continuité. Non migratrice, elle occupe ses sites toute l'année. Elle est absente de la taïga du nord de l'Europe et de la Sibérie."],
        "box_comportement": [
            "Rarement observée seule, l'Orite à longue queue passe l'essentiel de sa vie au sein d'un groupe familial.",
            "Ce dernier peut compter 3 ou 4 membres au début de la saison de nidification et jusqu'à 20 ou plus après celle-ci, en automne et en hiver. Les groupes plus importants comprennent plusieurs familles. Les membres du groupe défendent un territoire aussi bien durant la nidification qu'en hiver pour s'y nourrir et y dormir. Bien qu'elle erre çà et là à travers les bois et le long de haies en hiver pour y chercher sa nourriture, l'Orite à longue queue ne s'aventure que rarement au loin et reste pendant des années dans le même secteur. Durant leur incessante quête de ravitaillement, les bandes sont souvent accompagnées par des mésanges vraies du genre Parus, des roitelets et d'autres petits passereaux forestiers. Les mœurs sociables de l'Orite à longue queue lui permettent de survivre en hiver. En se serrant les uns contre les autres le long d'une branche, le plumage ébouriffé, ces petits oiseaux perdent aussi peu de chaleur que possible."
        ],
        "box_regime": [
            "Le bec de l'Orite à longue queue, court et trapu, est trop faible pour venir à bout d'aliments résistants ou gelés.",
            "L'espèce se nourrit donc surtout d'insectes, de leurs larves et de leurs œufs, ainsi que d'autres petits invertébrés. À l'aide de son bec menu, l'orite déloge ses proies des interstices tels que les fentes de l'écorce des arbres. Elle cueille aussi des insectes, comme les pucerons, sur les feuilles et les bourgeons. Quelques petites graines molles sont consommées, telles que celles du fusain du Japon et du chèvrefeuille. Contrairement aux véritables mésanges, l'Orite à longue queue descend rarement à terre pour s'y nourrir mais, comme elles, elle peut se suspendre à l'envers ou tenir sa nourriture dans une patte. Lors des hivers rudes, la mortalité est forte. Dans le nord, les orites passent les neuf dixièmes de chaque journée d'hiver à se nourrir, parcourant ainsi des distances importantes sans s'attarder nulle part."
        ],
        "box_reproduction": [
            "L'Orite à longue queue se différencie des mésanges par le fait qu'elle ne niche pas dans des cavités existantes, mais construit de toutes pièces sa propre cavité dans un arbre ou un buisson.",
            "Elle se range parmi les meilleurs bâtisseurs au royaume des oiseaux et, en dépit du fait qu'elle est un des plus petits oiseaux de chez nous, elle construit un grand nid pour sa taille (environ 20 cm de longueur sur 12). C'est une construction ovale, complètement fermée, avec une entrée latérale dans la partie supérieure. Sa construction demande aux deux bâtisseurs 15 à 20 jours de travail. La paroi est en mousse et en lichen, avec une petite quantité de fibres végétales, le tout tenu par du fil d'araignée. La surface est tapissée de lichens, si bien que le nid passe complètement inaperçu dans un contexte vert (lierre contre un tronc ou un mur, branche de conifère touffue, etc.). Une incroyable quantité de petites plumes garnit la cavité interne. Les œufs, au nombre de 6 à 12, sont couvés par la femelle seule pendant 12 ou 13 jours. Les petites orites restent au nid pendant 15 à 18 jours avant de prendre leur envol. Elles restent cependant près de leurs parents et on a même constaté qu'elles les aident plus tard à nourrir les jeunes nés d'une seconde ponte."
        ],
        "box_vol": null,
        "images": [
            {
                "sdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/id/orite.a.longue.queue.jufo.13p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/orite.a.longue.queue.jufo.13g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.declercq/images/id/orite.a.longue.queue.mdec.10p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.declercq/images/orite.a.longue.queue.mdec.10g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/orite.a.longue.queue.jufo.27p.185.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jules.fouarge/images/orite.a.longue.queue.jufo.27g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/nathalie.santa.maria/images/orite.a.longue.queue.nasa.4p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/nathalie.santa.maria/images/orite.a.longue.queue.nasa.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/serge.vantrimpont/images/orite.a.longue.queue.seva.8p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/serge.vantrimpont/images/orite.a.longue.queue.seva.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/orite.a.longue.queue.mafa.4p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/orite.a.longue.queue.mafa.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/orite.a.longue.queue.mafa.15p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/orite.a.longue.queue.mafa.15g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jean-louis.corsin/images/id/orite.a.longue.queue.jlco.2p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jean-louis.corsin/images/orite.a.longue.queue.jlco.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/orite.a.longue.queue.mafa.11p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/orite.a.longue.queue.mafa.11g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/id/orite.a.longue.queue.mafa.3p.233.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/orite.a.longue.queue.mafa.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/robert.balestra/images/id/orite.a.longue.queue.roba.1p.238.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/robert.balestra/images/orite.a.longue.queue.roba.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/orite.a.longue.queue.redu.3p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/orite.a.longue.queue.redu.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/lars.petersson/images/id/orite.a.longue.queue.lape.3p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/lars.petersson/images/orite.a.longue.queue.lape.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/id/orite.a.longue.queue.jmpo.4p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/orite.a.longue.queue.jmpo.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/orite.a.longue.queue.redu.5p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/orite.a.longue.queue.redu.5g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/orite.a.longue.queue.redu.6p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/orite.a.longue.queue.redu.6g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/orite.a.longue.queue.redu.15p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/orite.a.longue.queue.redu.15g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.declercq/images/id/orite.a.longue.queue.mdec.9p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.declercq/images/orite.a.longue.queue.mdec.9g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/herve.enoch/images/id/orite.a.longue.queue.heen.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/herve.enoch/images/orite.a.longue.queue.heen.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/lars.petersson/images/id/orite.a.longue.queue.lape.4p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/lars.petersson/images/orite.a.longue.queue.lape.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/stephane.merle/images/id/orite.a.longue.queue.stme.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/stephane.merle/images/orite.a.longue.queue.stme.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/orite.a.longue.queue.juda.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/orite.a.longue.queue.juda.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/orite.a.longue.queue.juda.6p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/julien.daubignard/images/orite.a.longue.queue.juda.6g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/orite.a.longue.queue.dico.11p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/orite.a.longue.queue.dico.11g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/orite.a.longue.queue.dico.9p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/orite.a.longue.queue.dico.9g.jpg"
            }
        ],
        "key": 424,
        "songs": ["https://www.oiseaux.net/chant/jean.roche/orite.a.longue.queue.1.mp3", "https://www.xeno-canto.org/532218/download", "https://www.xeno-canto.org/28192/download", "https://www.xeno-canto.org/143978/download", "https://www.xeno-canto.org/134451/download"]
    },
    {
        "name": "Pie bavarde",
        "latinName": "Pica pica",
        "description": [
            "Il n'est nul besoin de décrire la Pie bavarde qui se reconnaît au premier coup d'œil à sa silhouette et à son plumage. Il suffit de regarder les photos ci-contre. Tout le monde peut mettre un nom immédiatement sur cet oiseau à longue queue caractéristique. D'ailleurs son nom fait référence quand on parle d'un animal noir et blanc, par exemple un cheval pie.",
            "Inutile donc de partir dans une longue description. Les images suffisent. Notons simplement les caractéristiques \"corvidé\" à savoir la grande taille, le bec et les pattes robustes.",
            "Les sexes sont semblables. À bonne lumière, le noir du plumage adulte présente des reflets bleus, indigo, violets, vert-bronze du plus bel effet. ",
            "Le juvénile a une queue plus courte, le noir du plumage couleur suie avec des reflets atténués, le blanc très légèrement teinté de roussâtre et le tour de l'œil clair faisant ressortir ce dernier.",
            "Actuellement, 6 sous-espèces sont reconnues. Elles diffèrent légèrement par la taille et les proportions respectives du blanc et du noir dans le plumage, essentiellement au niveau des primaires et du croupion. Auparavant, elles étaient plus nombreuses, mais 4 taxons ont été élevés au rang d'espèce."
        ],
        "box_habitat": [
            "La Pie bavarde occupe tous les habitats terrestres ouverts et semi-ouverts. La condition de sa présence est qu'il y ait au moins quelques ligneux pour la nidification.",
            "Pour cela, elle n'est pas exigeante et quelques arbustes peuvent lui suffire, surtout là où la présence humaine est faible. Elle est absente de la forêt comme des vastes espaces, agricoles ou non, sans arbres (openfield, haut arctique, haute montagne et déserts).",
            "Elle apprécie particulièrement la campagne agricole à l'ancienne, où alternent prairies et cultures avec leur cloisonnement de haies arborées, fermes, villages et hameaux avec leur environnement de jardins et vergers, bosquets, arbres le long des voies... C'est dans ce type d'habitat qu'elle est à son optimum écologique. Elle peut y atteindre une densité de 10 voire 15 couples au km2. Elle est adaptable et c'est ainsi qu'on peut la trouver jusqu'au cœur des villes à la faveur des parcs, espaces verts et jardins. Dans les villes très vertes, elle peut atteindre aussi une densité élevée."
        ],
        "box_comportement": [
            "La Pie bavarde est d'observation facile, par exemple quand elle arpente à pas chaloupés une pelouse ou un carré de jardin. Les balancements de son corps sont assez comiques. Quand elle veut aller plus vite, elle saute sur ses deux pattes à la fois.",
            "On la voit fouiller du bec le sol pour dénicher ses proies car la pie est essentiellement un prédateur. Les plantations du potager ne risquent pas grand chose de sa part. Au contraire, elle contribue à éliminer des ravageurs potentiels. En revanche, on peut craindre pour les couvées ou les nichées des petits passereaux dont on aime être entouré car elle sait très bien repérer leurs nids. C'est probablement la raison pour laquelle elle est classée nuisible en France et peut à ce titre être tirée comme un gibier. Pourtant, la Pie bavarde ne fait que jouer le rôle que la nature lui a attribué. Elle a des ennemis naturels pour limiter sa population, les Accipiter par exemple, épervier et autour. En région méditerranéenne, ses nichées peuvent être parasitées par un coucou, le Coucou geai.",
            "On a vu plus haut que la Pie bavarde se plaisait en ville. Plus généralement, elle vit fréquemment au contact de l'Homme et de ses activités.",
            "Elle est à la fois hardie et très prudente. Elle peut s'approcher de très près des habitations mais reste très méfiante et toujours aux aguets. Un geste de travers et c'est la fuite. En cela, elle rappelle les autres corvidés comme la corneille, connus pour leur niveau de réflexion élevé. En prenant de la hauteur par rapport au sol, elle perd un peu de sa crainte, ce qui peut l'amener à nicher en haut d'un arbre dans un jardin, un parc, une aire de jeux, pourtant régulièrement fréquentés. Il est possible aussi que la pie urbaine soit moins craintive que la pie campagnarde.",
            "La Pie bavarde est accusée d'être voleuse, de dérober des objets voyants puis de les cacher. Pour moi, il s'agit probablement d'une légende, venant d'une mauvaise interprètation d'observations. La pie en effet, comme tous les corvidés, cache la nourriture en surplus pour les jours de disette. Il suffit qu'un jour un quidam ait vu une pie cachant quelque-chose alors qu'il venait de perdre un objet pour se persuader que c'est son objet qu'elle cachait. Ainsi naissent les légendes. De son côté, Géroudet pense que la pie pourrait être attirée par un objet insolite dans son environnement, se l'approprier puis le cacher comme son instinct de prédateur lui commande de le faire avec une proie, voire l'apporter au nid comme le suggère une BD de mon enfance. C'est possible. Les corvidés apprivoisés montrent en tout cas un intérêt certain pour les yeux de leur \"maître\", la seule partie brillante du corps, et cherchent à les atteindre du bec quand ils sont sur l'épaule. Il faut s'en méfier, ou plutôt il fallait, car la détention de ces oiseaux est interdite par la loi en France.",
            "La pie est sédentaire dans toute son aire de répartition. Les déplacements les plus importants, de 20 à 30 km tout au plus, sont le fait des jeunes oiseaux cherchant un territoire vacant.",
            "Comme souvent chez les corvidés, les couples sont pérennes. Mâle et femelle sont ensemble à longueur d'année et vaquent ensemble à leurs occupations. Ils sont territoriaux à la saison de reproduction et se partagent l'espace entre eux. Mais en dehors de cette période, l'espèce devient un peu grégaire. Les groupes familiaux perdurent un certain temps. Ils peuvent se regrouper entre eux, agréger des immatures ou des inemployés, formant de petites troupes lâches qui vagabondent, les individus gardant un contact visuel tout en cherchant leur nourriture. Ils se rassemblent pour la toilette et pour se reposer et passent la nuit ensemble en dortoirs, le tout par souci de protection contre les prédateurs. Dans ces groupes, on arrive à repérer les couples à leur comportement.",
            "En fin d'hiver, l'agitation gagne les individus qui manifestent une certaine nervosité. Cela donne lieu à des conciliabules, des acrobaties dans les arbres et des poursuites ponctuées de cris. Tout cela prélude à l'appariement des jeunes de l'année précédente qui ne tarderont pas à quitter le groupe pour se chercher un nouveau territoire. Les couples déjà constitués quant à eux regagneront leur territoire."
        ],
        "box_regime": [
            "La Pie bavarde se nourrit presqu'exvclusivement au sol. Elle peut être qualifiée d'omnivore, mais elle est avant tout un prédateur.",
            "Son régime est nettement insectivore au sens large à la belle saison, mais les petits vertébrès y entrent aussi pour une bonne part. Parmi les invertébrés, les coléoptères sont toujours bien représentés, avant les lépidoptères et d'autres taxons terrestres comme les annélides. Pour les vertébrés, ce sont les lézards, les petits amphibiens à l'émergence, les oeufs et poussins de passereaux, les jeunes micromammifères, qui sont ciblés par sa prédation. Les graines et les petits fruits sont aussi consommés mais en petite quantité et suivant la saison.",
            "Elle suit les travaux des champs et des jardins susceptibles de tuer des animaux ou de faire sortir des proies du sol.",
            "Comme la Corneille noire, elle est volontiers nécrophage. Elle peut profiter des animaux tués sur la route, y compris les insectes. Elle fréquente aussi régulièrement, avec d'autres corvidés, les décharges et autres centres d'enfouissement qui recueillent des denrées comestibles, les aires de pique-nique, les parcs publics, les zones touristiques, tous endroits où elle peut récupérer des restes de repas. Elle cache régulièrement les surplus d'aliments pour les jours de pénurie."
        ],
        "box_reproduction": [
            "La saison de reproduction commence tôt du fait de la sédentarité de l'espèce et de l'appariement permanent des partenaires. Quelques parades en fin d'hiver suffisent à consolider du couple et la nidification peut commencer. La construction du nid est une œuvre de longue haleine qui demande au couple de longues semaines de travail, jusqu'à 5 à 6. Et ce nid monumental, malgré sa pérennité relative, ne sera utilisé qu'une seule fois pour la reproduction. Généralement en effet, le couple construit un nouveau nid chaque année.",
            "Le nid est le plus souvent construit dans la partie supérieure d'un arbre plutôt jeune, au niveau de la fourche terminale du tronc pour un feuillu, au niveau d'un des derniers verticilles pour un conifère, en moyenne à une 10e de mètres de hauteur.",
            "C'est souvent un peuplier d'Italie qui est choisi car sa morphologie lui convient bien. Lorsqu'il n'a pas le choix, le couple peut opter pour un arbuste ou même pour un buisson, surtout si le site est protégé par des ronces ou des broussailles denses.",
            "L'assise du nid est typiquement \"corvidé\". C'est une structure de brindilles et de branchettes ligneuses sèches, ramassées au sol et tenues par de la boue. La coupe, profonde, est soigneusement tapissée de radicelles. Enfin, un dôme protecteur, fait de branchettes volontiers épineuses et serrées, coiffe le tout. Les oiseaux accèdent au nid par un orifice latéral ménagé dans le dôme. L'aspect du nid de pie est vraiment typique et ne peut être confondu avec aucun autre nid. Celui de l'Écureuil roux peut lui ressembler de loin car en boule lui aussi. Mais il est fait de branchettes feuillées vivantes qui lui confèrent de près un aspect très différent. Ainsi placé en haut d'un arbre, le nid est en butte au vent. Les coups de vent le font osciller de façon importante, mais la souplesse du tronc à ce niveau lui permet de tenir.",
            "La femelle y dépose 4 à 9 œufs gris-vert tachetés de brun. L'incubation, assurée par la femelle, dure 16 à 21 jours. Le mâle la nourrit pendant cette période et après l'éclosion, les deux adultes assureront l'alimentation des jeunes. Le mâle veille en plus à la protection de la nichée, n'hésitant pas à poursuivre au vol tout prédateur trop curieux. Les jeunes quittent le nid à l'âge de 25 à 29 jours. Les groupes familiaux resteront unis pendant l'été. À l'automne, ils rejoignent les groupes de non-nicheurs."
        ],
        "box_vol": [
            "Avec ses ailes courtes et arrondies, la Pie bavarde n'est pas faite pour les records de vitesse. Elle a un vol direct mais assez lent.",
            "Ses battements d'ailes sont rapides et saccadés et donnent l'impression d'irrégularité, avec des variations brutales de rythme. C'est très curieux. Est-ce une impression ou la réalité, toujours est-il que son vol est particulier et typique. Ses capacités de vol limitées font qu'elle se déplace toujours à faible hauteur, jamais haut dans le ciel où elle serait vulnérable. Quand elle vole à découvert, c'est pour gagner rapidement les arbres ou arbustes protecteurs les plus proches dans lesquels elle est plus en confiance."
        ],
        "images": [
            {
                "sdLink": "https://www.oiseaux.net/photos/yann.ponthieux/images/id/pie.bavarde.yapo.1p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/yann.ponthieux/images/pie.bavarde.yapo.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/id/pie.bavarde.mafa.14p.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/pie.bavarde.mafa.14g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/loic.epelboin/images/id/pie.bavarde.loep.4p.236.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/loic.epelboin/images/pie.bavarde.loep.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/id/pie.bavarde.mafa.3p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/pie.bavarde.mafa.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/catherine.et.bernard.lanneluc/images/id/pie.bavarde.cala.1p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/catherine.et.bernard.lanneluc/images/pie.bavarde.cala.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/nathalie.santa.maria/images/id/pie.bavarde.nasa.7p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/nathalie.santa.maria/images/pie.bavarde.nasa.7g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/pie.bavarde.redu.11p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/pie.bavarde.redu.11g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/dora.zarzavatsaki/images/id/pie.bavarde.doza.1p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/dora.zarzavatsaki/images/pie.bavarde.doza.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/herve.enoch/images/id/pie.bavarde.heen.8p.241.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/herve.enoch/images/pie.bavarde.heen.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/id/pie.bavarde.jmpo.3p.241.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/jean-marie.poncelet/images/pie.bavarde.jmpo.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/gilbert.blaising/images/id/pie.bavarde.gibl.5p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/gilbert.blaising/images/pie.bavarde.gibl.5g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/robert.balestra/images/id/pie.bavarde.roba.4p.300.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/robert.balestra/images/pie.bavarde.roba.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/samuel.marlin/images/id/pie.bavarde.sama.1p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/samuel.marlin/images/pie.bavarde.sama.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/id/pie.bavarde.mafa.13p.200.w.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/pie.bavarde.mafa.13g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/marc.fasol/images/id/pie.bavarde.mafa.8p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/marc.fasol/images/pie.bavarde.mafa.8g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/regine.le.courtois.nivart/images/id/pie.bavarde.rlcn.4p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/regine.le.courtois.nivart/images/pie.bavarde.rlcn.4g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/id/pie.bavarde.redu.13p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/rene.dumoulin/images/pie.bavarde.redu.13g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/philippe.stroot/images/id/pie.bavarde.phst.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/philippe.stroot/images/pie.bavarde.phst.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/robert.balestra/images/id/pie.bavarde.roba.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/robert.balestra/images/pie.bavarde.roba.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/aurelien.audevard/images/id/pie.bavarde.auau.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/aurelien.audevard/images/pie.bavarde.auau.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/clement.stievenart/images/id/pie.bavarde.clst.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/clement.stievenart/images/pie.bavarde.clst.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/clement.stievenart/images/id/pie.bavarde.clst.3p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/clement.stievenart/images/pie.bavarde.clst.3g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/pie.bavarde.dico.2p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/pie.bavarde.dico.2g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/didier.collin/images/pie.bavarde.dico.1p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/didier.collin/images/pie.bavarde.dico.1g.jpg"
            },
            {
                "sdLink": "https://www.oiseaux.net/photos/gilbert.blaising/images/pie.bavarde.gibl.7p.152.h.jpg",
                "hdLink": "https://www.oiseaux.net/photos/gilbert.blaising/images/pie.bavarde.gibl.7g.jpg"
            }
        ],
        "key": 473,
        "songs": ["https://www.oiseaux.net/chant/didier.collin/pie.bavarde.1.mp3", "https://www.oiseaux.net/chant/jean.roche/pie.bavarde.1.mp3", "https://www.xeno-canto.org/532224/download", "https://www.xeno-canto.org/27142/download", "https://www.xeno-canto.org/142705/download"]
    }
]
