export enum Oep8Command {
  // get node attributes
  // max ONG allocation
  // percent of ong rewards to stake users
  // getAttributes = 'getAttributes',
  // get governance params fee, number of nodes, min stake, pos limit
  // getGlobalParam = 'getGlobalParam',

  // current round number
  // number of blocks in round
  // start block
  // end block
  // current block
  getStakeRoundInfo = 'getStakeRoundInfo',
  // getGovernanceView = 'getGovernanceView',

  // get list of all nodes
  getNodeList = 'getNodeList',
  // getPeerPoolMap = 'getPeerPoolMap',

  // get total ont staked
  getTotalStake = 'getTotalStake',

  // get stake details for a given node and address
  // amount staked
  // amount for next round
  // amount froze for withdraw
  // amount able to withdraw
  getNodeStakeInfo = 'getNodeStakeInfo',
  // getAuthorizeInfo = 'getAuthorizeInfo',

  // get claimable ong from staked ont
  getClaimableOng = 'getClamaibeOng',
  // getPeerUnboundOng = 'getPeerUnboundOng',

  // get total ong rewards avail from staking, user can claim this amount
  getClaimableOngRewards = 'getClaimableOngRewards',
  // getSplitFeeAddress = 'getSplitFeeAddress',
}
// getAttributes
// getAuthorizeInfo
// getGlobalParam
// getGovernanceView
// getPeerPoolMap
// getPeerUnboundOng
// getSplitFeeAddress
// getTotalStake
//
// makeAddInitPosTx
// makeApproveCandidateTx
// makeAuthorizeForPeerTx
// makeChangeAuthorizationTx
// makeQuitNodeTx
// makeReduceInitPosTx
// makeRegisterCandidateTx
// makeRejectCandidateTx
// makeSetPeerCostTx
// makeUnauthorizeForPeerTx
// makeUnregisterCandidateTx
// makeUnvoteForPeerTx
// makeVoteForPeerTx
// makeWithdrawFeeTx
// makeWithdrawPeerUnboundOngTx
// makeWithdrawTx
