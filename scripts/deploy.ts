import hre from "hardhat";

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, World!");

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();

  const JuegaCoinToken = await hre.ethers.getContractFactory("JuegaCoinToken");
  const juegacoinToken = await JuegaCoinToken.deploy(1000000, "Juega Coin", "JuegaCoin");

  await greeter.deployed();
  await token.deployed();
  await juegacoinToken.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Token deployed to:", token.address);
  console.log("juegacoinToken deployed to:", juegacoinToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
