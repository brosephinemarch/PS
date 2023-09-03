dataSetVersion = "2023-09-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Season",
    key: "season",
    tooltip: "Check this to choose which seasons' contestants to rank.",
    checked: false,
    sub: [
      { name: "Season 1 Finalists", key: "S1" },
      { name: "Season 2 Finalists", key: "S2" },
      { name: "Season 3 Finalists", key: "S3" },
      { name: "Season 4 Finalists", key: "S4" },
      { name: "Season 4 Contestants (Non-Finalists)", key: "S4all" },
    ]
  },
{
    name: "Filter by Voice Type",
    key: "type",
    tooltip: "Filter to restrict to singers of a certain voice type/music background.",
    checked: false,
    sub: [ 
      { name: "Classical (성악가)", key: "classical" }, 
      { name: "Musical actor (뮤지컬배우)", key: "musical" }, 
      { name: "Sorikkun (소리꾼)", key: "gugak" }, 
      { name: "Rock/Pop (로커/팝 보컬)", key: "rockpop" }
    ]
  },
{
    name: "Filter by Vocal Range",
    key: "range",
    tooltip: "Filter to restrict to singers of a certain vocal range.",
    checked: false,
    sub: [ 
      { name: "Bass (베이스)", key: "bass" }, 
      { name: "Bass Baritone (베이스 바리톤)", key: "bb" }, 
      { name: "Baritone (바리톤)", key: "baritone" }, 
      { name: "Tenor (테너)", key: "tenor" }, 
      { name: "Countertenor (카운터테너)", key: "counter" }
    ]
  },
 ];

dataSet[dataSetVersion].characterData = [
  {
    name: "Ko Hoonjeong (고훈정)\nForte di Quattro, Musical Actor/Classical - Baritone\n포르테 디 콰트로, 성악가/뮤지컬배우 - 바리톤",
    img: "kohoonjeong.png",
    opts: {
      season: [ "S1" ],
      type: ["classical", "musical"],
      range: ["baritone"]
    }
  },
  {
    name: "Kim Hyunsoo",
    img: "audreycrop.jpg",
    opts: {
      season: [ "S1" ],
      type: ["classical"],
      range: ["tenor"]
    }
  },
  {
    name: "Son Taejin",
    img: "0YT7QlS.png",
    opts: {
      season: [ "S1" ],
      type: ["classical"],
      range: ["bb"]
    }
  },
  {
    name: "Lee Byeori",
    img: "NWlZud3.png",
    opts: {
      season: [ "S1" ],
      type: ["classical"],
      range: ["tenor"]
    },
  }
];
