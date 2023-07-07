// SPDX-License-Identifier: UNLICENSED

//https://github.com/spartan-protocol/spartanswap-contracts/tree/master

pragma solidity 0.8.3;
interface iBASEv1 {
    function transferTo(address,uint256) external returns(bool);
}