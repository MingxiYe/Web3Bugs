pragma solidity >=0.6.0 <0.7.0;

interface IChainlinkAggregator {
  function latestRound() external view returns (uint256); 
  function latestAnswer() external view returns (int256);
}