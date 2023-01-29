export interface BirdData {
    name: string;
    latinName: string;
    box_comportement: string[] | null;
    images: Image[];
}

export interface Image {
    sdLink?: string;
    hdLink: string;
}

export const birds: BirdData[] = [
    {
        "name": "Mésange bleue",
        "latinName": "Cyanistes caeruleus",
        "box_comportement": [
            "La Mésange bleue est un petit oiseau très actif et très agile. Elle est sans cesse en mouvement à la recherche de sa nourriture. Elle a une façon bien à elle d'évoluer dans les houppiers en adoptant des positions acrobatiques autorisées par ses doigts griffus. Elle se laisse pendre à l'extrémité des rameaux, la tête en bas, et explore du bec suivant la saison bourgeons et fructifications. Lorsqu'elle en a terminé avec une brindille, elle s'installe sur la suivante qui subit un mouvement de balancier caractéristique.",
            "En saison de reproduction, la Mésange bleue forme des couples territoriaux.",
            "Malgré sa petite taille, elle est batailleuse et sait se montrer agressive envers les intrus de même taille qui lui font concurrence, en particulier pour les sites de nidification. Néanmoins, la densité spécifique est souvent l'une des plus élevées parmi les passereaux forestiers. Le mâle en parade se laisse tomber, ailes étendues, depuis les houppiers en vue de la femelle, et se présente devant elle ailes écartées et vibrantes, calotte bleue bien en vue. Il pratique aussi l'offrande de nourriture à la femelle qui quémande dans l'attitude du poussin, en faisant trembler ses ailes. Pour l'attirer vers la cavité qui pourrait abriter le nid, le mâle effectue de lents glissés vers elle pour l'inviter à la visiter.",
            "La Mésange bleue cherche sa nourriture en hauteur dans les arbres, en moyenne plus haut que les autres membres de la famille et descendant plus rarement au sol.",
            "La nuit, la Mésange bleue se tient dans le lierre ou les feuillus denses, mais aussi dans des endroit abrités comme des creux ou des trous quand il fait mauvais temps.",
            "Après l'émancipation des jeunes et pour toute la période inter-nuptiale, les Mésanges bleues forment avec d'autres espèces de mésanges, grimpereaux et roitelets, des groupes qui vagabondent en quête de nourriture, tout d'abord en forêt, puis au fur et à mesure que le froid gagne, se rapprochent des milieux urbanisés où elles savent pouvoir trouver un complément alimentaire. Elles fréquentent assidûment les postes d'alimentation, appréciant graisse et graines grasses.",
            "C'est une migratrice partielle en Europe. Les oiseaux de nos régions sont généralement sédentaires mais les populations vivant en Europe du Nord et du Nord-Est sont affectées par des mouvements d'assez grande ampleur en direction du sud-ouest du continent."
        ],
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
    },
    {
        "name": "Hirondelle rustique",
        "latinName": "Hirundo rustica",

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

    },
    {
        "name": "Rougegorge familier",
        "latinName": "Erithacus rubecula",

        "box_comportement": [
            "Le Rougegorge familier est un oiseau au comportement solitaire et territorial. Posé, il adopte une attitude dressée, relevant parfois la queue et baissant les ailes tout en faisant des courbettes sur ses jambes assez robustes. Il use de son plastron \"rouge\" comme avertisseur et n'hésite pas à l'exhiber en toutes occasions quand il s'agit pour lui de faire valoir ses droits, réels ou usurpés. Les mâles territoriaux s'affrontent ainsi, poitrine haute, tout en vocalisant abondamment afin de défendre les limites de leur domaine. Même à la mauvaise saison, les rougegorges plastronnent pour défendre un territoire alimentaire et poursuivent vivement les importuns pour les refouler hors des limites invisibles qu'ils se sont fixées.",
            "Au moment de la reproduction, les mâles chantent perchés en évidence sur une branche pour être bien vus de leurs congénères. Dans un sous-bois, il n'est néanmoins pas facile de les repérer, mais en milieu semi-ouvert d'altitude par exemple, ils peuvent se percher au sommet d'un petit conifère dégagé et deviennent alors bien visibles.",
            "Autrement c'est un oiseau assez peu farouche, et même parfois confiant. Il est assez classique par exemple que le rougegorge s'approche d'une personne en train de jardiner ou de faire de l'affouage en forêt, prompt à fondre sur le ver ou l'insecte dérangé.",
            "Il se montre parfois si confiant qu'il peut se poser sur la bêche ou la cognée du travailleur et même sur sa botte quand il se repose. On ne peut s'empêcher de penser alors à un oiseau provenant d'une forêt profonde du nord qui n'aurait jamais été confronté à l'homme et au danger qu'il peut représenter pour lui. En hiver toujours, on le voit très souvent près des habitations. Il lui arrive de pénétrer dans les granges, hangars et autres endroits confinés.",
            "Le rougegorge se nourrit au sol. Il repère ses proies depuis un perchoir peu élevé et les capture à l'issue d'un petit vol d'approche. Plus rarement, il se déplace au sol en sautillant et en scrutant la surface terrestre.",
            "Le rougegorge est un oiseau peu sociable et pas du tout grégaire. On ne le voit jamais en groupe, même dans les endroits à forte densité spécifique. Il migre en solitaire et de nuit et les jours de grande migration, on peut voir au matin de nombreux rougegorges fraîchement arrivés à un endroit donné, mais ne formant jamais de groupe organisé. Au contraire, ils manifestent entre eux une certaine agressivité. Les querelles territoriales peuvent aller jusqu'à de sérieuses prises de bec qui durent, mais en principe sans issue fatale."
        ],

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
    },
    {
        "name": "Orite à longue queue",
        "latinName": "Aegithalos caudatus",

        "box_comportement": [
            "Rarement observée seule, l'Orite à longue queue passe l'essentiel de sa vie au sein d'un groupe familial.",
            "Ce dernier peut compter 3 ou 4 membres au début de la saison de nidification et jusqu'à 20 ou plus après celle-ci, en automne et en hiver. Les groupes plus importants comprennent plusieurs familles. Les membres du groupe défendent un territoire aussi bien durant la nidification qu'en hiver pour s'y nourrir et y dormir. Bien qu'elle erre çà et là à travers les bois et le long de haies en hiver pour y chercher sa nourriture, l'Orite à longue queue ne s'aventure que rarement au loin et reste pendant des années dans le même secteur. Durant leur incessante quête de ravitaillement, les bandes sont souvent accompagnées par des mésanges vraies du genre Parus, des roitelets et d'autres petits passereaux forestiers. Les mœurs sociables de l'Orite à longue queue lui permettent de survivre en hiver. En se serrant les uns contre les autres le long d'une branche, le plumage ébouriffé, ces petits oiseaux perdent aussi peu de chaleur que possible."
        ],

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
        ]
    },
    {
        "name": "Pie bavarde",
        "latinName": "Pica pica",
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
        ]
    },
    {
        "name": "Martin triste",
        "latinName": "Acridotheres tristis",
        "box_comportement": [
            "Le martin triste est un oiseau grégaire et vie en petite colonie. La nuit il se regroupe en dortoirs parfois très important, jusqu'à 1 000 individus.",
            "Il choisit des lieux où il sera hors de danger, comme des forêts de bambous ou arbres couverts de lianes. Oiseau de nature querelleur et familier envers les humains. Très opportuniste il ne dédaigne pas les dépôts d'ordures pour se nourrir, ni la proximité des animaux domestiques. Il se nourrit en marchant et en picorant au sol. La distance entre le site de nourrissage et le dortoir peut atteindre 10 km.",
            "En période de nidification le martin triste est très territorial et n'hésite pas à défendre son territoire en se battant violemment. Les combats sont en général une mise au sol avec de violents coups de bec. Les couples de martin triste sont fidèles à vie et gardent leur site de nidification.",
            "Son agressivité se dirige aussi sur les espèces indigènes lors des recherches de cavités naturelles. Le martin triste prolifère à leur détriment."
        ],
        images: [
            { hdLink: "https://www.oiseaux.net/photos/nathalie.santa.maria/images/martin.triste.nasa.12g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/philippe.stroot/images/martin.triste.phst.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/samuel.marlin/images/martin.triste.sama.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/tom.lindroos/images/martin.triste.toli.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/jean-claude.jamoulle/images/martin.triste.jcja.12g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/philippe.martignon/images/martin.triste.phma.11g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/jean-claude.jamoulle/images/martin.triste.jcja.2g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/lars.petersson/images/martin.triste.lape.2g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/francois.granja/images/martin.triste.frgr.3g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/patrick.baude/images/martin.triste.paba.4g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/robert.balestra/images/martin.triste.roba.4g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/didier.rabosee/images/martin.triste.dira.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/nathalie.santa.maria/images/martin.triste.nasa.2g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/patrick.l.hoir/images/martin.triste.palh.2g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/arnaud.delberghe/images/martin.triste.adel.5g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/stephane.merle/images/martin.triste.stme.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/jean-claude.jamoulle/images/martin.triste.jcja.11g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/callie.de.wet/images/martin.triste.cadw.3g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/loic.epelboin/images/martin.triste.loep.3g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/loic.epelboin/images/martin.triste.loep.9g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/loic.epelboin/images/martin.triste.loep.15g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/dietmar.petrausch/images/martin.triste.dpet.1g.jpg" },
        ]
    },
    {
        "name": "Paille en queue",
        "latinName": "Phaethon lepturus",
        "box_comportement": [
            "Les pailles-en-queue sont des oiseaux de haute mer, ils capturent les poissons en plongeant de très haut dans l'océan. D'ailleurs pour la pêche au gros, les pêcheurs suivent les vols de ces oiseaux pour repérer les bancs de poissons et donc les bancs de Marlins ou Thons et Bonites.",
            "Les femelles pondent un oeuf unique dans les anfractuosités des rochers. L'oeuf est couvé pendant un mois et l'oisillon est nourri pendant deux mois environ par des régurgitations de l'estomac des adultes. Quand le petit est en âge de voler, les parents l'abandonnent comme le font beaucoup d'oiseaux de mer. La faim le pousse à sortir du nid et à chercher nourriture.",
            "Le Paille en Queue est l'emblème d'Air Mauritius. le paille-en-queue figure parmi le plus beau et le plus élégant des oiseaux marins. Il existe à Maurice deux espèces de Paille en Queue : Le commun à brins noirs et celui à brins rouges (plus rare, vous n'en apercevrez que vers les îles du Nord de Maurice, Coin de Mire, ile plate, îlot Gabriel, Ile Ronde, Ile aux Serpents)."
        ],
        images: [
            { hdLink: "https://woody.cloudly.space/app/uploads/crt-reunion/2020/04/thumbs/faune_terrestre33_paille_en_queue_-_credit_irt_-_emmanuel_virin-1920x960.jpg" },
            { hdLink: "https://t4.ftcdn.net/jpg/02/38/07/91/360_F_238079182_n1qTlN8XoAbi1iB7wxR0sND4XEjRW9YA.jpg" },
            { hdLink: "https://i.pinimg.com/originals/e3/29/4e/e3294eb6a44d64bb117e9a8c992ddf38.jpg" },
            { hdLink: "https://woody.cloudly.space/app/uploads/crt-reunion/2019/09/thumbs/faune-terrestre44-paille-en-queue---credit-irt---yabalex-dts-07-2017-640x640.jpg" },
            { hdLink: "https://www.petzl.com/sfc/servlet.shepherd/version/download/068680000066sfhAAA" },
            { hdLink: "https://parc-marin-mayotte.fr/sites/default/files/styles/pnm_paragraphe_illustration/public/media/2020-08/phaeton%20a%20bec%20jaune%20final.jpg?h=47ac10cc&itok=PxBCjwks" },
            { hdLink: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Red-tail.jpg" },
            { hdLink: "https://media.routard.com/image/20/0/pt64822.1274200.w430.jpg" },
            { hdLink: "https://t3.ftcdn.net/jpg/03/73/74/16/360_F_373741683_iFNiyjX53sKIrquVTCssiUY2crcvgxeF.jpg" },
            { hdLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Tropicbird_Seychelles.jpg/1200px-Tropicbird_Seychelles.jpg" },
            { hdLink: "https://i.ytimg.com/vi/vVHRdfbJZ7E/maxresdefault.jpg" },
            { hdLink: "https://jadopteunprojet.com/assets/Uploads/_resampled/ResizedImageWzYwMCwzMDBd/paille-en-queue.jpg" },
        ]
    },
    {
        "name": "Foudi rouge",
        "latinName": "Foudia madagascariensis",
        "box_comportement": [
            "Le cardinal de Madagascar (un de ses autres noms) vit en solitaire ou en couple. Après la saison de reproduction et la mue, il forme des petites bandes lâches qui fréquentent pour se nourrir les jardins, les plantations de basse et de moyenne altitude, les savanes sèches, les prairies et les brandes élevées.",

            "Il pénètre aussi parfois dans les forêts pourvu qu'elles soient clairsemées. Le mâle se poste volontiers sur une éminence, sommet d'un arbre, fil électrique d'où il domine son territoire. De cet endoit, il émet un long trille aigu ou quelques notes cristallines. Le foudi de Madagascar n'est pas particulièrement sociable, mais dans de nombreuses îles, il se laisse approcher et il vit à proximité des habitations."
        ],
        images: [
            { hdLink: "https://www.oiseaux.net/photos/loic.epelboin/images/foudi.rouge.loep.7g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/nathalie.santa.maria/images/foudi.rouge.nasa.13g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/loic.epelboin/images/foudi.rouge.loep.11g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/arnaud.delberghe/images/foudi.rouge.adel.7g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/regine.le.courtois.nivart/images/foudi.rouge.rlcn.3g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/loic.epelboin/images/foudi.rouge.loep.27g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/dietmar.petrausch/images/foudi.rouge.dpet.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/regine.le.courtois.nivart/images/foudi.rouge.rlcn.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/michel.carre/images/foudi.rouge.mica.2g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/michel.carre/images/foudi.rouge.mica.3g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/francoise.folliard/images/foudi.rouge.frfo.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/gilles.touratier/images/foudi.rouge.gito.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/dan.stefanescu/images/foudi.rouge.dast.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/jean-michel.fenerole/images/foudi.rouge.jefe.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/jean-claude.jamoulle/images/foudi.rouge.jcja.12g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/regine.le.courtois.nivart/images/foudi.rouge.rlcn.4g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/stephane.merle/images/foudi.rouge.stme.5g.jpg" }
        ]
    },
    {
        "name": "Dodo",
        "latinName": "Dodo",
        "box_comportement": [
            "Le dodo était un oiseau de la taille d'un dindon, pesant environ 20 kg et mesurant à peu prés 1 mètre.",
            "Il était court sur ses pattes avec un bec recourbé, il vivait autrefois sur l'île Maurice, dans l'archipel des Mascareignes. Du fait de l'absence de prédateurs, il avait perdu son aptitude au vol. Incroyablement maladroit dans ses mouvements, c'est d'ailleurs pour cette raison que les Mauriciens l'ont surnommé Dodo.",
            "Il construisait son nid en pyramide à même le sol, grâce aux feuilles du palmier. Il pondait un seul œuf dans le nid qui était à tour de rôle couvé par les parents car le petit prenait du temps à se développer. La durée de vie, était, au minimum 30 ans. Malheureusement, comme le nid était construit à même le sol, les petits du dodo bénéficiaient de peu de protection contre l'introduction des prédateurs tels que les chiens et les cochons sauvages.",
            "Le dernier dodo est mort en 1681. La reconstitution de cet animal disparu peut-être admirée au musée d'Histoire Naturelle à Port-Louis grâce à un naturaliste qui en 1865 découvrît un squelette complet du dodo près de Plaisance."
        ],
        images: [
            { hdLink: "https://www.ile-maurice.fr/images/categories/typiquement.jpg" },
        ]
    },
    {
        "name": "Bulbul orphée",
        "latinName": "Pycnonotus jocosus",
        "box_comportement": [
            "Le bulbul orphée est un oiseau très bruyant, au cri puissant et perçant, émettant une large variété d'appels et de jacassements, certains rauques, d'autres anxieux.",
            "Il vit dans les arbres et les buissons (bois, zones cultivées, parc et jardin). Il s'accommode facilement de la compagnie de l'homme.",
            "Des études réalisées à Maurice et à la Réunion ont montré que le bulbul orphée contribue à la dispersion de graines de certaines plantes invasives, le passage des graines dans son tube digestif facilitant leur germination. Les facultés d'adaptation de cet oiseau ont également été démontrées dans une autre étude menée à la Réunion : au bout d'une dizaine de générations, on a constaté que 2 populations séparées, vivant dans des régions opposées de l'île, avaient évolué différemment, la morphologie du bec s'étant adaptée aux sources de nourriture disponibles localement."
        ],
        images: [
            { hdLink: "https://www.oiseaux.net/photos/jean-michel.fenerole/images/bulbul.orphee.jefe.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/nathalie.santa.maria/images/bulbul.orphee.nasa.3g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/michel.carre/images/bulbul.orphee.mica.6g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/jean-claude.jamoulle/images/bulbul.orphee.jcja.12g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/stephane.beillard/images/bulbul.orphee.stbe.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/stanislas.gallen/images/bulbul.orphee.stan.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/michel.carre/images/bulbul.orphee.mica.5g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/michel.carre/images/bulbul.orphee.mica.4g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/dan.stefanescu/images/bulbul.orphee.dast.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/jean-claude.jamoulle/images/bulbul.orphee.jcja.7g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/catherine.et.bernard.lanneluc/images/bulbul.orphee.cala.2g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/francoise.folliard/images/bulbul.orphee.frfo.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/regine.le.courtois.nivart/images/bulbul.orphee.rlcn.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/gilles.touratier/images/bulbul.orphee.gito.2g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/gilles.touratier/images/bulbul.orphee.gito.1g.jpg" },
            { hdLink: "https://www.oiseaux.net/photos/loic.epelboin/images/bulbul.orphee.loep.3g.jpg" },
        ]
    }
]
