pragma solidity ^0.5.0;

// opyn interface
contract OTokenInterface {
    function exercise(uint256 oTokensToExercise) public payable;
    function isExerciseWindow() external view returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function oTokenExchangeRate() public returns (uint256, int32);
    function balanceOf(address account) external view returns (uint256);
    function balanceOf(address account) public view returns (uint256);
}