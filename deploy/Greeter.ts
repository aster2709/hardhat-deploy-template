import { DeployFunction } from "hardhat-deploy/types";

const deploy: DeployFunction = async (hre) => {
  const { deployer } = await hre.getNamedAccounts();
  await hre.deployments.deploy("Greeter", { from: deployer, log: true });
};

export default deploy;
