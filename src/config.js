const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

const namePrefix = "TheMutantPlanets";
const description = "The Mutant Planets Club is a collection of 999 mutant NFTs—unique digital collectibles living on the Polygon blockchain. With over 170+ hand-drawn traits, your exclusive NFT serves as a membership to an elite club with multiple members-only benefits.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "TMP",
  seller_fee_basis_points: 1000, 
  external_url: "https://www.thepunisherclub.com/",
  creators: [
    {
      address: "0x8d53d48ec4d550c1b91b832922f42fed717d6f3a",
      share: 100,
    },
  ],
};

const layerConfigurations = 
[
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "PLANETS" },
      { name: "EYES" },
      { name: "MOUTH" },
            ]
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1500,
  height: 1500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  external_url: "https://thenftworld.wixsite.com/themutantplanets",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
