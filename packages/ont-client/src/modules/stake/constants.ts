export enum StakeCommand {
  getStakeRoundInfo = 'getStakeRoundInfo',
  getNodeList = 'getNodeList',
  getTotalStake = 'getTotalStake',
  getNodeStakeInfo = 'getNodeStakeInfo',
  getStakedClaimableOng = 'getStakedClaimableOng',
  getStakedClaimableOngRewards = 'getStakedClaimableOngRewards',

  // request to add ONT to stake
  addStake = 'addStake',
  // makeAuthorizeForPeerTx

  // request withdraw from stake
  requestStakeWithdraw = 'requestStakeWithdraw',
  // makeUnauthorizeForPeerTx

  // withdraw available ont from previous stake
  withdrawStake = 'withdrawStake',
  // makeWithdrawTx

  // claim ong from staked ont
  claimStakedOng = 'claimStakedOng',
  // makeWithdrawPeerUnboundOngTx

  // redeem staked ong rewards
  claimStakedOngRewards = 'claimStakedOngRewards',
  // makeWithdrawFeeTx
}
