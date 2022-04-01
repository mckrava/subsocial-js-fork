// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchClass, FrameSupportWeightsDispatchInfo, FrameSupportWeightsPays, FrameSupportWeightsPerDispatchClassU32, FrameSupportWeightsPerDispatchClassU64, FrameSupportWeightsPerDispatchClassWeightsPerClass, FrameSupportWeightsRuntimeDbWeight, FrameSupportWeightsWeightToFeeCoefficient, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, FrameSystemRawOrigin, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReleases, PalletBalancesReserveData, PalletDomainsCall, PalletDomainsDomain, PalletDomainsDomainInnerLink, PalletDomainsDomainMeta, PalletDomainsError, PalletDomainsEvent, PalletDotsamaClaimsCall, PalletDotsamaClaimsEnsureAllowedToClaimTokens, PalletDotsamaClaimsError, PalletDotsamaClaimsEvent, PalletFaucetsCall, PalletFaucetsError, PalletFaucetsFaucet, PalletFaucetsFaucetUpdate, PalletFaucetsRawEvent, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletPermissionsCall, PalletPermissionsSpacePermission, PalletPermissionsSpacePermissions, PalletPostHistoryPostHistoryRecord, PalletPostsCall, PalletPostsComment, PalletPostsError, PalletPostsPost, PalletPostsPostExtension, PalletPostsPostUpdate, PalletPostsRawEvent, PalletProfileFollowsCall, PalletProfileFollowsError, PalletProfileFollowsRawEvent, PalletProfileHistoryProfileHistoryRecord, PalletProfilesCall, PalletProfilesError, PalletProfilesProfile, PalletProfilesProfileUpdate, PalletProfilesRawEvent, PalletProfilesSocialAccount, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletReactionsCall, PalletReactionsError, PalletReactionsRawEvent, PalletReactionsReaction, PalletReactionsReactionKind, PalletRolesCall, PalletRolesError, PalletRolesRawEvent, PalletRolesRole, PalletRolesRoleUpdate, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerReleases, PalletSchedulerScheduledV2, PalletSpaceFollowsCall, PalletSpaceFollowsError, PalletSpaceFollowsRawEvent, PalletSpaceHistorySpaceHistoryRecord, PalletSpaceOwnershipCall, PalletSpaceOwnershipError, PalletSpaceOwnershipRawEvent, PalletSpacesCall, PalletSpacesError, PalletSpacesRawEvent, PalletSpacesSpace, PalletSpacesSpaceUpdate, PalletSpacesSpacesSettings, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentReleases, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletUtilsContent, PalletUtilsError, PalletUtilsRawEvent, PalletUtilsUser, PalletUtilsWhoAndWhen, SpCoreChangesTrieChangesTrieConfiguration, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreSr25519Signature, SpCoreVoid, SpFinalityGrandpaAppPublic, SpFinalityGrandpaAppSignature, SpFinalityGrandpaEquivocation, SpFinalityGrandpaEquivocationProof, SpRuntimeArithmeticError, SpRuntimeDigest, SpRuntimeDigestChangesTrieSignal, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpVersionRuntimeVersion, SubsocialRuntimeOriginCaller, SubsocialRuntimeProxyType, SubsocialRuntimeRuntime } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  export interface InterfaceTypes {
    FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
    FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
    FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
    FinalityGrandpaPrevote: FinalityGrandpaPrevote;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSupportWeightsDispatchClass: FrameSupportWeightsDispatchClass;
    FrameSupportWeightsDispatchInfo: FrameSupportWeightsDispatchInfo;
    FrameSupportWeightsPays: FrameSupportWeightsPays;
    FrameSupportWeightsPerDispatchClassU32: FrameSupportWeightsPerDispatchClassU32;
    FrameSupportWeightsPerDispatchClassU64: FrameSupportWeightsPerDispatchClassU64;
    FrameSupportWeightsPerDispatchClassWeightsPerClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
    FrameSupportWeightsRuntimeDbWeight: FrameSupportWeightsRuntimeDbWeight;
    FrameSupportWeightsWeightToFeeCoefficient: FrameSupportWeightsWeightToFeeCoefficient;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    FrameSystemRawOrigin: FrameSystemRawOrigin;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReleases: PalletBalancesReleases;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletDomainsCall: PalletDomainsCall;
    PalletDomainsDomain: PalletDomainsDomain;
    PalletDomainsDomainInnerLink: PalletDomainsDomainInnerLink;
    PalletDomainsDomainMeta: PalletDomainsDomainMeta;
    PalletDomainsError: PalletDomainsError;
    PalletDomainsEvent: PalletDomainsEvent;
    PalletDotsamaClaimsCall: PalletDotsamaClaimsCall;
    PalletDotsamaClaimsEnsureAllowedToClaimTokens: PalletDotsamaClaimsEnsureAllowedToClaimTokens;
    PalletDotsamaClaimsError: PalletDotsamaClaimsError;
    PalletDotsamaClaimsEvent: PalletDotsamaClaimsEvent;
    PalletFaucetsCall: PalletFaucetsCall;
    PalletFaucetsError: PalletFaucetsError;
    PalletFaucetsFaucet: PalletFaucetsFaucet;
    PalletFaucetsFaucetUpdate: PalletFaucetsFaucetUpdate;
    PalletFaucetsRawEvent: PalletFaucetsRawEvent;
    PalletGrandpaCall: PalletGrandpaCall;
    PalletGrandpaError: PalletGrandpaError;
    PalletGrandpaEvent: PalletGrandpaEvent;
    PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
    PalletGrandpaStoredState: PalletGrandpaStoredState;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletPermissionsCall: PalletPermissionsCall;
    PalletPermissionsSpacePermission: PalletPermissionsSpacePermission;
    PalletPermissionsSpacePermissions: PalletPermissionsSpacePermissions;
    PalletPostHistoryPostHistoryRecord: PalletPostHistoryPostHistoryRecord;
    PalletPostsCall: PalletPostsCall;
    PalletPostsComment: PalletPostsComment;
    PalletPostsError: PalletPostsError;
    PalletPostsPost: PalletPostsPost;
    PalletPostsPostExtension: PalletPostsPostExtension;
    PalletPostsPostUpdate: PalletPostsPostUpdate;
    PalletPostsRawEvent: PalletPostsRawEvent;
    PalletProfileFollowsCall: PalletProfileFollowsCall;
    PalletProfileFollowsError: PalletProfileFollowsError;
    PalletProfileFollowsRawEvent: PalletProfileFollowsRawEvent;
    PalletProfileHistoryProfileHistoryRecord: PalletProfileHistoryProfileHistoryRecord;
    PalletProfilesCall: PalletProfilesCall;
    PalletProfilesError: PalletProfilesError;
    PalletProfilesProfile: PalletProfilesProfile;
    PalletProfilesProfileUpdate: PalletProfilesProfileUpdate;
    PalletProfilesRawEvent: PalletProfilesRawEvent;
    PalletProfilesSocialAccount: PalletProfilesSocialAccount;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletReactionsCall: PalletReactionsCall;
    PalletReactionsError: PalletReactionsError;
    PalletReactionsRawEvent: PalletReactionsRawEvent;
    PalletReactionsReaction: PalletReactionsReaction;
    PalletReactionsReactionKind: PalletReactionsReactionKind;
    PalletRolesCall: PalletRolesCall;
    PalletRolesError: PalletRolesError;
    PalletRolesRawEvent: PalletRolesRawEvent;
    PalletRolesRole: PalletRolesRole;
    PalletRolesRoleUpdate: PalletRolesRoleUpdate;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerReleases: PalletSchedulerReleases;
    PalletSchedulerScheduledV2: PalletSchedulerScheduledV2;
    PalletSpaceFollowsCall: PalletSpaceFollowsCall;
    PalletSpaceFollowsError: PalletSpaceFollowsError;
    PalletSpaceFollowsRawEvent: PalletSpaceFollowsRawEvent;
    PalletSpaceHistorySpaceHistoryRecord: PalletSpaceHistorySpaceHistoryRecord;
    PalletSpaceOwnershipCall: PalletSpaceOwnershipCall;
    PalletSpaceOwnershipError: PalletSpaceOwnershipError;
    PalletSpaceOwnershipRawEvent: PalletSpaceOwnershipRawEvent;
    PalletSpacesCall: PalletSpacesCall;
    PalletSpacesError: PalletSpacesError;
    PalletSpacesRawEvent: PalletSpacesRawEvent;
    PalletSpacesSpace: PalletSpacesSpace;
    PalletSpacesSpaceUpdate: PalletSpacesSpaceUpdate;
    PalletSpacesSpacesSettings: PalletSpacesSpacesSettings;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletUtilsContent: PalletUtilsContent;
    PalletUtilsError: PalletUtilsError;
    PalletUtilsRawEvent: PalletUtilsRawEvent;
    PalletUtilsUser: PalletUtilsUser;
    PalletUtilsWhoAndWhen: PalletUtilsWhoAndWhen;
    SpCoreChangesTrieChangesTrieConfiguration: SpCoreChangesTrieChangesTrieConfiguration;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Public: SpCoreEd25519Public;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpFinalityGrandpaAppPublic: SpFinalityGrandpaAppPublic;
    SpFinalityGrandpaAppSignature: SpFinalityGrandpaAppSignature;
    SpFinalityGrandpaEquivocation: SpFinalityGrandpaEquivocation;
    SpFinalityGrandpaEquivocationProof: SpFinalityGrandpaEquivocationProof;
    SpRuntimeArithmeticError: SpRuntimeArithmeticError;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestChangesTrieSignal: SpRuntimeDigestChangesTrieSignal;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SubsocialRuntimeOriginCaller: SubsocialRuntimeOriginCaller;
    SubsocialRuntimeProxyType: SubsocialRuntimeProxyType;
    SubsocialRuntimeRuntime: SubsocialRuntimeRuntime;
  } // InterfaceTypes
} // declare module
