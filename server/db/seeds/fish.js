
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
    description:""

  },
  {
    id: 3,
    name: "Butterfish",
   image: "fish_butterfish",
    description:""
  },
  {
    id: 4,
    name: "Cockles",
   image: "fish_cockles",
    description:""
  },
  {
    id: 5,
    name: "Crayfish",
   image: "fish_crayfish",
    description:"",
  },
  {
    id: 6,
    name: "Eel",
   image: "fish_eel",
    description:""
  },
  {
    id: 7,
    name: "Groper",
   image: "fish_groper",
    description:""
  },
  {
    id: 8,
    name: "John Dory",
   image: "fish_johnDory",
    description:""
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
    description:""
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
    description:""
  },
  {
    id: 13,
    name: "Red Cod",
   image: "fish_redCod",
    description:""
  },
  {
    id: 14,
    name: "Red Gurnard",
   image: "fish_redGurnard",
    description:""
  },
  {
    id: 15,
    name: "Red Moki",
   image: "fish_redMoki",
    description:""
  },
  {
    id: 16,
    name: "Salmon",
   image: "fish_salmon",
    description:""
  },
  {
    id: 17,
    name: "Sand Flounder",
   image: "fish_sandFlounder",
    description:""
  },
  {
    id: 18,
    name: "Scallops",
   image: "fish_scallops",
    description:""
  },
  {
    id: 19,
    name: "Sea Perch",
   image: "fish_seaPerch",
    description:""
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
    description:""
  },
  {
    id: 22,
    name: "Trevalley",
   image: "fish_trevalley",
    description:""
  },
  {
    id: 23,
    name: "Trumpeter",
   image: "fish_trumpeter",
    description:""
  },
  {
    id: 24,
    name: "Albacore Tuna",
   image: "fish_albacoreTuna",
    description:""
  },
  {
    id: 25,
    name: "Barracouta",
   image: "fish_barracuda",
    description:""
  },
  {
    id: 26,
    name: "Big Eye Tuna",
   image: "fish_bigeyeTuna",
    description:""
  },
  {
    id: 27,
    name: "Bluefin Tuna",
   image: "fish_bluefin",
    description:""
  },
  {
    id: 28,
    name: "Bluenose",
   image: "fish_bluenose",
    description:""
  },
  {
    id: 29,
    name: "Swordfish",
   image: "fish_broadbillSwordfish",
    description:""
  },
  {
    id: 30,
    name: "Conger Eel",
   image: "fish_congerEel",
    description:""
  },
  {
    id: 31,
    name: "Gemfish",
   image: "fish_gemfish",
    description:""
  },
  {
    id: 32,
    name: "Greyboy Shark",
   image: "fish_greyboyShark",
    description:""
  },
  {
    id: 33,
    name: "Hapuka Bass",
   image: "fish_hapuka",
    description:""
  },
  {
    id: 34,
    name: "Leather Jacket",
   image: "fish_leatherJacket",
    description:""
  },
  {
    id: 35,
    name: "Red Rock Cod",
   image: "fish_redRockCod",
    description:""
  },
  {
    id: 36,
    name: "Rig",
   image: "fish_rig",
    description:""
  },
  {
    id: 37,
    name: "Spiny Dogfish",
   image: "fish_spinydogfish",
    description:""
  },
  {
    id: 38,
    name: "Yellowfin Tuna",
   image: "fish_yellowfinTuna",
    description:""
  },
  {
    id: 39,
    name: "Rainbow Trout",
   image: "fish_rainbowTrout",
    description:""
  },
  {
    id: 40,
    name: "Brown Trout",
   image: "fish_brownTrout",
    description:""
  },
  {
    id: 41,
    name: "Marlin",
   image: "fish_marlin",
    description:""
  },
  {
    id: 42,
    name: "Mussels",
   image: "fish_mussels",
    description:""
  }
]);
});
};
