
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fish').del()
    .then(function () {
      // Inserts seed entries
      return knex('fish').insert(

[
  {
    id: 1,
    name: "Blue Cod",
   image: "fish_blueCod",
   description: "Blue cod are: bottom-dwelling fish found at depths of up to 150m only found in New Zealand waters more common around the South Island and the Chatham Islands. Blue cod can live up to 32 years and grow up to 60cm. Their growth is influenced by several things, including sex, habitat, and local fishing pressure. They can change sex from female to male, and males are generally larger than females."
  },
  {
    id: 2,
    name: "Blue Moki",
   image: "fish_blueMoki",
    description:"Blue moki spawn off the east coast of the North Island.&nbsp; Adults are thought to make an annual migration in April/May from the north-eastern South Island.&nbsp; Spawning takes place in August/September off the Mahia Peninsula an Gisborne coast.&nbsp; The fish then return south towards Kaikoura."

  },
  {
    id: 3,
    name: "Butterfish",
   image: "fish_butterfish",
    description:"They are found only around the New Zealand coast, and are widespread, feeding on kelp beds over shallow rocky outcrops. They are rarely found at depths greater than 15 metres. Butterfish are more abundant south of East Cape, especially around Cook Strait."
  },
  {
    id: 4,
    name: "Cockles",
   image: "fish_cockles",
    description:"Cockles are widespread in New Zealand harbours and estuaries from the mean tide level to low tide. Found in sediments ranging from soft mud to soft, silty sand, they often form dense beds that contain cockles of similar size. Cockles dig a shallow burrow into the seabed."
  },
  {
    id: 5,
    name: "Crayfish",
   image: "fish_crayfish",
    description:"This species can be identified by its distinctively deep red outer shell and bright orange legs. Its sweet flavour and succulent meat is attributed in part.",
  },
  {
    id: 6,
    name: "Eel",
   image: "fish_eel",
    description:"Longfinned eels belong to the Anguillidae family (freshwater eels) and are endemic to New Zealand."
  },
  {
    id: 7,
    name: "Groper",
   image: "fish_groper",
    description:"Dark blue-grey or grey-brown body above and white below with small scales.&nbsp; The body is robust with a pointed head, protruding lower jaw, and a prominent ridge on the gill cover.&nbsp; Smaller fish are a more distinctive blue.&nbsp; Groper are also known as Hapuku."
  },
  {
    id: 8,
    name: "John Dory",
   image: "fish_johnDory",
    description:"They are solitary fish that have a range of habitats, from reefs to sand and mud bottoms. John Dory are found in the warm waters around the North Island of New Zealand, most commonly north of the Bay of Plenty."
  },
  {
    id: 9,
    name: "Kahawai",
    image: "fish_kahawai",
    description:"The kahawai species most people are familiar with (Arripis trutta) is found around the North Island, South Island, Kermadec and Chatham Islands. They mainly occur in coastal seas, harbours and estuaries, and enter brackish water in rivers. The Kermadec kahawai (Arripis xylabion) is found seasonally around Northland. Kahawai: school together in large groups take bait easily feed in water above the seabed (are pelagic), but will take food from the seabed mostly eat other fish, but also eat krill. Kahawai spawning isn't well understood but is thought to be offshore on the seabed. Kahawai can live up to 26 years and grow up to 65cm long."
  },
  {
    id: 10,
    name: "Kina",
   image: "fish_kina",
    description:"The species is found only in New Zealand, but there are about 500 species of sea urchins worldwide. Kina are widespread along New Zealand coasts down to 50 metres, with the main concentrations found between the sub-tidal zone and 15 metres"
  },
  {
    id: 11,
    name: "Kingfish",
    image: "fish_kingfish",
    description:"Kingfish are green on top with a white underside and a green-gold band from the nose through to the yellow tail. About 75% of all kingfish harvested in New Zealand are caught by recreational fishers. Kingfish are: mostly found in the water column (semi-pelagic), at depths of up to 200m most abundant in the northern half of the North Island but also occur from the Kermadec Islands to Foveaux Strait found in open coastal waters, preferring high currents or tidal flows near rocky outcrops, reefs and pinnacles sometimes found in areas with an open sandy bottom and in shallow enclosed bays. Kingfish are large predatory fish with adults growing to over 1.5m in length. They usually occur in schools ranging from a few fish to well over 100. Recreationally-caught kingfish average 10kg but can be more than 30kg."
  },
  {
    id: 12,
    name: "Paua",
   image: "fish_paua",
    description:"Pāua are large sea snails that are highly valued by Māori, recreational fishers and the commercial fishing industry. Pāua have always been a food source for Māori, and play a significant role in manaakitanga ki ngā manuhiri (hosting of visitors). Black-foot pāua (Haliotis iris) make up most of the pāua fishery while yellow-foot pāua (Haliotis australis) are only caught in small numbers. Pāua: live in shallow waters (generally less than 10m) off the coastline of New Zealand have a very small home range and can form large groups in suitable areas reproduce by releasing large amounts of spawn that are carried by ocean currents to new settlement sites. Successful spawning is related to the number and size of groups, so it's important to leave some pāua to breed for the next generation. Habitat such as reefs and seaweed are important for settlement of their larvae."
  },
  {
    id: 43,
    name: "Pipi",
   image: "fish_pipi",
    description:"They are common all around New Zealand and around the Chatham Islands. They are often found on silty sandbars or sandy beaches just inside harbour entrances, especially in areas where there is freshwater seepage. The species has a short siphon and does not burrow deeply."
  },
  {
    id: 13,
    name: "Red Cod",
   image: "fish_redCod",
    description:"They are found throughout New Zealand seas, more commonly in southern waters at depths of 100 to 300 metres, occasionally as deep as 700 metres."
  },
  {
    id: 14,
    name: "Red Gurnard",
   image: "fish_redGurnard",
    description:"Body is reddish-pink to red above and white below. The large pectoral fins are bluish-green with one large, dark spot and several small white or blue spots and a blue margin. They are widespread around New Zealand and are found on sandy shell seabeds to a depth of about 180 metres. "
  },
  {
    id: 15,
    name: "Red Moki",
   image: "fish_redMoki",
    description:"Blue moki spawn off the east coast of the North Island.&nbsp; Adults are thought to make an annual migration in April/May from the north-eastern South Island.&nbsp; Spawning takes place in August/September off the Mahia Peninsula an Gisborne coast.&nbsp; The fish then return south towards Kaikoura."
  },
  {
    id: 16,
    name: "Salmon",
   image: "fish_salmon",
    description:"Variable colour. Fresh-run salmon are largely silver with a greenish tinge above, dotted with black spots. The species has a small adipose fin and an anal fin base that is longer than the longest anal fin ray. They are found mainly in the gravel rivers on the east coast of the South Island."
  },
  {
    id: 17,
    name: "Sand Flounder",
   image: "fish_sandFlounder",
    description:"Dark olive green body above with yellow or white on the belly and dark spots. The body is oval. Yellowbelly flounder are plumper than Sand flounder, and have smaller eyes and larger, dark-edged scales."
  },
  {
    id: 18,
    name: "Scallops",
   image: "fish_scallops",
    description:"Fan-shaped bivalve shell with deep ridges that radiate from the hinge. Colours are variable, including brown, orange, yellow, pink, or flesh-coloured or a mix of these. They are found around the coast in the sandbanks and mudbanks of sheltered bays from the low tide mark out to about 50 metres depth. "
  },
  {
    id: 19,
    name: "Sea Perch",
   image: "fish_seaPerch",
    description:"Distinctive reddish-orange white flesh fish found throughout New Zealand waters, more commonly off the East Coast of the South Island"
  },
  {
    id: 20,
    name: "Snapper",
   image: "fish_snapper",
   description:"Snapper are copper-pink on top with a silver-white underside and a number of small blue dots on their sides. They are: most abundant at depths of 15m to 60m but are found down to about 200m widely distributed in the warmer waters of New Zealand, and most abundant in the Hauraki Gulf the dominant fish in northern inshore communities at home in a wide range of habitats, including rocky reefs and areas with sandy or muddy bottoms. Snapper mature at 3 to 4 years when they are 20cm to 28cm long. They can live for over 60 years and grow up to 105cm. They release numerous batches of eggs throughout spring and summer."
  },
  {
    id: 21,
    name: "Tarakihi",
   image: "fish_tarakihi",
    description:"Usually silver-grey with a blue-green sheen, shading to silver and white on the belly. There is a distinctive black band between the head and the dorsal fin. The head and mouth are small, and the laterally compressed body tapers to a forked tail. The scales are moderate and firm."
  },
  {
    id: 22,
    name: "Trevally",
   image: "fish_trevalley",
    description:"Blue-green on the top and silvery white on the belly, with a yellowish sheen running along the length of the fish. A small dark blotch often appears on the upper gill cover. "
  },
  {
    id: 23,
    name: "Trumpeter",
   image: "fish_trumpeter",
    description:"Latris lineata, the striped trumpeter, is a species of trumpeter native to the temperate oceans of the southern hemisphere. They inhabit rocky reefs at depths of from 50 to 400 metres. This species can reach a length of 120 centimetres TL with a maximum known weight of 25 kilograms"
  },
  {
    id: 24,
    name: "Albacore Tuna",
   image: "fish_albacoreTuna",
    description:"Dark metallic blue body above, silvery-white below, and iridescent, lighter-blue sides. The body is rounded and streamlined and is moderately slender."
  },
  {
    id: 25,
    name: "Barracouta",
   image: "fish_barracuda",
    description:"Thyrsites atun, the snoek, is a long, thin species of snake mackerel found in the seas of the Southern Hemisphere, and a popular food fish in South Africa, particularly along the west and southwest coast"
  },
  {
    id: 26,
    name: "Big Eye Tuna",
   image: "fish_bigeyeTuna",
    description:"Bigeye Tuna belong to the Scombridae family (mackerels, tunas). They are present for much of the year off the coast of the North Island and are deeper swimming than other tuna. &nbsp; The main fishing grounds for Bigeye Tuna are off the north and northeast coasts of New Zealand. They are caught in the northeast (from January to March) and in the north (from September to November) mainly by longliners."
  },
  {
    id: 27,
    name: "Bluefin Tuna",
   image: "fish_bluefin",
    description:"Tuna belong to the Scombridae family (mackerels, tunas). A major migratory species, they are found in the warm ocean waters north of New Zealand. They move south to East Cape in the summer. They are generally found over the outer shelf and occur above and below the thermocline. They are caught mainly from December to March to the east of New Zealand between East Cape and North Cape."
  },
  {
    id: 28,
    name: "Bluenose",
   image: "fish_bluenose",
    description:"Dark metallic blue-black to grey on the back of the body, shading to silver on the sides and belly. Bluenose is distinguished from Hapuku/Groper by a blunt snout and laterally compressed body with large eyes set low in the head. Bluenose have larger mouths and more prominent dorsal fins than (closely related) Warehou."
  },
  {
    id: 29,
    name: "Swordfish",
   image: "fish_broadbillSwordfish",
    description:"Swordfish roam the temperate, subtropical and tropical seas worldwide. They are present in New Zealand waters year-round in the north and south to Foveaux Strait in the summer months. Swordfish live close to the seabed at around 500 to 800 metres during the day. They swim up to the surface at night – when they are caught."
  },
  {
    id: 30,
    name: "Conger Eel",
   image: "fish_congerEel",
    description:"Congers are scaleless eels with large heads, large gill slits, wide mouths, and strong teeth. They are usually grayish to blackish, with paler bellies Conger Eels are marine eels. They are solitary and nocturnal. There are two Conger species that occur in New Zealand"
  },
  {
    id: 31,
    name: "Gemfish",
   image: "fish_gemfish",
    description:"Back and head have blue tones with a darker stripe along the back. The body shades to iridescent dark silver with paler white on the belly. The skin is smooth and shimmering. The dorsal fin has a prominent black blotch on the membrane between the first three spines."
  },
  {
    id: 32,
    name: "Greyboy Shark",
   image: "fish_greyboyShark",
    description:"Brown body above with a pattern of pale stripes and spots, the colouring paling to silver on the belly. The head is blunt and rounded, the eyes large, and there is a long tapering tail. The first dorsal fin is preceded by a strong spine, and the pectoral fins are very large. "
  },
  {
    id: 33,
    name: "Hapuka Bass",
   image: "fish_hapuka",
    description:"Dark blue-grey or grey-brown body above and white below with small scales.&nbsp; The body is robust with a pointed head, protruding lower jaw, and a prominent ridge on the gill cover.&nbsp; Smaller fish are a more distinctive blue.&nbsp; Groper are also known as Hapuku."
  },
  {
    id: 34,
    name: "Leather Jacket",
   image: "fish_leatherJacket",
    description:"Leatherjackets are a firm fish with a very white flesh. Named for their tough leathery skin, Leatherjackets have a distinctive retractable dorsal spine. They are common throughout coastal New Zealand waters in rocky and weedy areas. They can also be found in more open sea areas at depths of 80 metres or more."
  },
  {
    id: 35,
    name: "Red Rock Cod",
   image: "fish_redRockCod",
    description:"Red-brown above, becoming pink on the sides and belly. The dorsal and anal fins are pink with black margins, and there is a black spot at the pectoral fin base. The vivid colour fades to a greyish pink when first captured. The scales are soft and easily removed, and the skin is slimy. The square-tipped tail and black pectoral spot distinguishes them from their close relatives."
  },
  {
    id: 36,
    name: "Rig",
   image: "fish_rig",
    description:"Pale golden-brown to grey body above with numerous small blue and white spots and white below. There are no spines or dorsal fins."
  },
  {
    id: 37,
    name: "Spiny Dogfish",
   image: "fish_spinydogfish",
    description:"Spiny dogfish are a small species of shark."
  },
  {
    id: 38,
    name: "Yellowfin Tuna",
   image: "fish_yellowfinTuna",
    description:"Yellowfin Tuna belong to the Scombridae family (mackerels, tunas). A major migratory species, they are found in the warm ocean waters north of New Zealand. They move south to East Cape in the summer. They are generally found over the outer shelf and occur above and below the thermocline. They are caught mainly from December to March to the east of New Zealand between East Cape and North Cape."
  },
  {
    id: 39,
    name: "Rainbow Trout",
   image: "fish_rainbowTrout",
    description:"The adult “rainbow” is distinguished by its silver colour and dark olive green back covered with many small black spots"
  },
  {
    id: 40,
    name: "Brown Trout",
   image: "fish_brownTrout",
    description:"The brown trout is an introduced northern hemisphere sports fish and can be found in most New Zealand waters excepting the very north of the North Island."
  },
  {
    id: 41,
    name: "Marlin",
   image: "fish_marlin",
    description:"A marlin is a fish from the family Istiophoridae, which includes about 10 species. It has an elongated body, a spear-like snout or bill, and a long, rigid dorsal fin which extends forward to form a crest. "
  },
  {
    id: 42,
    name: "Mussels",
   image: "fish_mussels",
    description:"A dark green shell often blended with yellow, red, or brown streaks, especially in juveniles or those grown on ropes. Inside, the shell is iridescent. Mature males have creamy-white flesh, while female flesh is apricot-orange. Intertidal and exposed mussels are often blue-black. All specimens have a distinctive green lip."
  }
]);
});
};
