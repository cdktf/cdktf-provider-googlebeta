# `provider`

Refer to the Terraform Registory for docs: [`google-beta`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google-beta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBetaProvider <a name="GoogleBetaProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs google-beta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/provider"

provider.NewGoogleBetaProvider(scope Construct, id *string, config GoogleBetaProviderConfig) GoogleBetaProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig">GoogleBetaProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig">GoogleBetaProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint">ResetAccessApprovalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint">ResetAccessContextManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint">ResetActiveDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint">ResetAlloydbCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint">ResetApiGatewayCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint">ResetApigeeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint">ResetApikeysCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint">ResetAppEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint">ResetArtifactRegistryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint">ResetAssuredWorkloadsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching">ResetBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint">ResetBeyondcorpCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryAnalyticsHubCustomEndpoint">ResetBigqueryAnalyticsHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryConnectionCustomEndpoint">ResetBigqueryConnectionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigQueryCustomEndpoint">ResetBigQueryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDatapolicyCustomEndpoint">ResetBigqueryDatapolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDataTransferCustomEndpoint">ResetBigqueryDataTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryReservationCustomEndpoint">ResetBigqueryReservationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigtableCustomEndpoint">ResetBigtableCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingCustomEndpoint">ResetBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingProject">ResetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBinaryAuthorizationCustomEndpoint">ResetBinaryAuthorizationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint">ResetCertificateManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint">ResetCloudAssetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint">ResetCloudBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint">ResetCloudBuildCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint">ResetCloudbuildv2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint">ResetCloudBuildWorkerPoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint">ResetClouddeployCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint">ResetCloudfunctions2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint">ResetCloudFunctionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint">ResetCloudIdentityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint">ResetCloudIdsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIotCustomEndpoint">ResetCloudIotCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint">ResetCloudResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint">ResetCloudRunCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint">ResetCloudRunV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint">ResetCloudSchedulerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint">ResetCloudTasksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint">ResetComposerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint">ResetComputeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint">ResetContainerAnalysisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint">ResetContainerAttachedCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint">ResetContainerAwsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint">ResetContainerAzureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint">ResetContainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint">ResetDatabaseMigrationServiceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint">ResetDataCatalogCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint">ResetDataflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint">ResetDataformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint">ResetDataFusionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint">ResetDataLossPreventionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint">ResetDataplexCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint">ResetDataprocCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint">ResetDataprocMetastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastoreCustomEndpoint">ResetDatastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint">ResetDatastreamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint">ResetDeploymentManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint">ResetDialogflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint">ResetDialogflowCxCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint">ResetDnsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint">ResetDocumentAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint">ResetEssentialContactsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint">ResetEventarcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint">ResetFilestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint">ResetFirebaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint">ResetFirebaseDatabaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint">ResetFirebaseHostingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint">ResetFirebaserulesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint">ResetFirebaseStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint">ResetFirestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGameServicesCustomEndpoint">ResetGameServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint">ResetGkeBackupCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint">ResetGkeHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint">ResetGkehubFeatureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint">ResetGkeonpremCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint">ResetHealthcareCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint">ResetIam2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint">ResetIamBetaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint">ResetIamCredentialsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint">ResetIamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint">ResetIamWorkforcePoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint">ResetIapCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint">ResetIdentityPlatformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount">ResetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates">ResetImpersonateServiceAccountDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint">ResetKmsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint">ResetLoggingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint">ResetMemcacheCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint">ResetMlEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint">ResetMonitoringCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint">ResetNetworkConnectivityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint">ResetNetworkManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint">ResetNetworkSecurityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint">ResetNetworkServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint">ResetNotebooksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint">ResetOrgPolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint">ResetOsConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint">ResetOsLoginCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint">ResetPrivatecaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubCustomEndpoint">ResetPubsubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubLiteCustomEndpoint">ResetPubsubLiteCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRecaptchaEnterpriseCustomEndpoint">ResetRecaptchaEnterpriseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRedisCustomEndpoint">ResetRedisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestReason">ResetRequestReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerCustomEndpoint">ResetResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerV3CustomEndpoint">ResetResourceManagerV3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeconfigCustomEndpoint">ResetRuntimeconfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeConfigCustomEndpoint">ResetRuntimeConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerCustomEndpoint">ResetSecretManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint">ResetSecurityCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint">ResetSecurityScannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint">ResetServiceDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint">ResetServiceManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint">ResetServiceNetworkingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint">ResetServiceUsageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint">ResetSourceRepoCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint">ResetSpannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint">ResetSqlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint">ResetStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint">ResetStorageTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint">ResetTagsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint">ResetTagsLocationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint">ResetTpuCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride">ResetUserProjectOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint">ResetVertexAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint">ResetVpcAccessCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint">ResetWorkflowsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint">ResetWorkstationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccessApprovalCustomEndpoint` <a name="ResetAccessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint"></a>

```go
func ResetAccessApprovalCustomEndpoint()
```

##### `ResetAccessContextManagerCustomEndpoint` <a name="ResetAccessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint"></a>

```go
func ResetAccessContextManagerCustomEndpoint()
```

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetActiveDirectoryCustomEndpoint` <a name="ResetActiveDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint"></a>

```go
func ResetActiveDirectoryCustomEndpoint()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAlloydbCustomEndpoint` <a name="ResetAlloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint"></a>

```go
func ResetAlloydbCustomEndpoint()
```

##### `ResetApiGatewayCustomEndpoint` <a name="ResetApiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint"></a>

```go
func ResetApiGatewayCustomEndpoint()
```

##### `ResetApigeeCustomEndpoint` <a name="ResetApigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint"></a>

```go
func ResetApigeeCustomEndpoint()
```

##### `ResetApikeysCustomEndpoint` <a name="ResetApikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint"></a>

```go
func ResetApikeysCustomEndpoint()
```

##### `ResetAppEngineCustomEndpoint` <a name="ResetAppEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint"></a>

```go
func ResetAppEngineCustomEndpoint()
```

##### `ResetArtifactRegistryCustomEndpoint` <a name="ResetArtifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint"></a>

```go
func ResetArtifactRegistryCustomEndpoint()
```

##### `ResetAssuredWorkloadsCustomEndpoint` <a name="ResetAssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```go
func ResetAssuredWorkloadsCustomEndpoint()
```

##### `ResetBatching` <a name="ResetBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching"></a>

```go
func ResetBatching()
```

##### `ResetBeyondcorpCustomEndpoint` <a name="ResetBeyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint"></a>

```go
func ResetBeyondcorpCustomEndpoint()
```

##### `ResetBigqueryAnalyticsHubCustomEndpoint` <a name="ResetBigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```go
func ResetBigqueryAnalyticsHubCustomEndpoint()
```

##### `ResetBigqueryConnectionCustomEndpoint` <a name="ResetBigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryConnectionCustomEndpoint"></a>

```go
func ResetBigqueryConnectionCustomEndpoint()
```

##### `ResetBigQueryCustomEndpoint` <a name="ResetBigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigQueryCustomEndpoint"></a>

```go
func ResetBigQueryCustomEndpoint()
```

##### `ResetBigqueryDatapolicyCustomEndpoint` <a name="ResetBigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```go
func ResetBigqueryDatapolicyCustomEndpoint()
```

##### `ResetBigqueryDataTransferCustomEndpoint` <a name="ResetBigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```go
func ResetBigqueryDataTransferCustomEndpoint()
```

##### `ResetBigqueryReservationCustomEndpoint` <a name="ResetBigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryReservationCustomEndpoint"></a>

```go
func ResetBigqueryReservationCustomEndpoint()
```

##### `ResetBigtableCustomEndpoint` <a name="ResetBigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigtableCustomEndpoint"></a>

```go
func ResetBigtableCustomEndpoint()
```

##### `ResetBillingCustomEndpoint` <a name="ResetBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingCustomEndpoint"></a>

```go
func ResetBillingCustomEndpoint()
```

##### `ResetBillingProject` <a name="ResetBillingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingProject"></a>

```go
func ResetBillingProject()
```

##### `ResetBinaryAuthorizationCustomEndpoint` <a name="ResetBinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```go
func ResetBinaryAuthorizationCustomEndpoint()
```

##### `ResetCertificateManagerCustomEndpoint` <a name="ResetCertificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint"></a>

```go
func ResetCertificateManagerCustomEndpoint()
```

##### `ResetCloudAssetCustomEndpoint` <a name="ResetCloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint"></a>

```go
func ResetCloudAssetCustomEndpoint()
```

##### `ResetCloudBillingCustomEndpoint` <a name="ResetCloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint"></a>

```go
func ResetCloudBillingCustomEndpoint()
```

##### `ResetCloudBuildCustomEndpoint` <a name="ResetCloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint"></a>

```go
func ResetCloudBuildCustomEndpoint()
```

##### `ResetCloudbuildv2CustomEndpoint` <a name="ResetCloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint"></a>

```go
func ResetCloudbuildv2CustomEndpoint()
```

##### `ResetCloudBuildWorkerPoolCustomEndpoint` <a name="ResetCloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```go
func ResetCloudBuildWorkerPoolCustomEndpoint()
```

##### `ResetClouddeployCustomEndpoint` <a name="ResetClouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint"></a>

```go
func ResetClouddeployCustomEndpoint()
```

##### `ResetCloudfunctions2CustomEndpoint` <a name="ResetCloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint"></a>

```go
func ResetCloudfunctions2CustomEndpoint()
```

##### `ResetCloudFunctionsCustomEndpoint` <a name="ResetCloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint"></a>

```go
func ResetCloudFunctionsCustomEndpoint()
```

##### `ResetCloudIdentityCustomEndpoint` <a name="ResetCloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint"></a>

```go
func ResetCloudIdentityCustomEndpoint()
```

##### `ResetCloudIdsCustomEndpoint` <a name="ResetCloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint"></a>

```go
func ResetCloudIdsCustomEndpoint()
```

##### `ResetCloudIotCustomEndpoint` <a name="ResetCloudIotCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIotCustomEndpoint"></a>

```go
func ResetCloudIotCustomEndpoint()
```

##### `ResetCloudResourceManagerCustomEndpoint` <a name="ResetCloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint"></a>

```go
func ResetCloudResourceManagerCustomEndpoint()
```

##### `ResetCloudRunCustomEndpoint` <a name="ResetCloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint"></a>

```go
func ResetCloudRunCustomEndpoint()
```

##### `ResetCloudRunV2CustomEndpoint` <a name="ResetCloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint"></a>

```go
func ResetCloudRunV2CustomEndpoint()
```

##### `ResetCloudSchedulerCustomEndpoint` <a name="ResetCloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint"></a>

```go
func ResetCloudSchedulerCustomEndpoint()
```

##### `ResetCloudTasksCustomEndpoint` <a name="ResetCloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint"></a>

```go
func ResetCloudTasksCustomEndpoint()
```

##### `ResetComposerCustomEndpoint` <a name="ResetComposerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint"></a>

```go
func ResetComposerCustomEndpoint()
```

##### `ResetComputeCustomEndpoint` <a name="ResetComputeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint"></a>

```go
func ResetComputeCustomEndpoint()
```

##### `ResetContainerAnalysisCustomEndpoint` <a name="ResetContainerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint"></a>

```go
func ResetContainerAnalysisCustomEndpoint()
```

##### `ResetContainerAttachedCustomEndpoint` <a name="ResetContainerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint"></a>

```go
func ResetContainerAttachedCustomEndpoint()
```

##### `ResetContainerAwsCustomEndpoint` <a name="ResetContainerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint"></a>

```go
func ResetContainerAwsCustomEndpoint()
```

##### `ResetContainerAzureCustomEndpoint` <a name="ResetContainerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint"></a>

```go
func ResetContainerAzureCustomEndpoint()
```

##### `ResetContainerCustomEndpoint` <a name="ResetContainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint"></a>

```go
func ResetContainerCustomEndpoint()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDatabaseMigrationServiceCustomEndpoint` <a name="ResetDatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```go
func ResetDatabaseMigrationServiceCustomEndpoint()
```

##### `ResetDataCatalogCustomEndpoint` <a name="ResetDataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint"></a>

```go
func ResetDataCatalogCustomEndpoint()
```

##### `ResetDataflowCustomEndpoint` <a name="ResetDataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint"></a>

```go
func ResetDataflowCustomEndpoint()
```

##### `ResetDataformCustomEndpoint` <a name="ResetDataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint"></a>

```go
func ResetDataformCustomEndpoint()
```

##### `ResetDataFusionCustomEndpoint` <a name="ResetDataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint"></a>

```go
func ResetDataFusionCustomEndpoint()
```

##### `ResetDataLossPreventionCustomEndpoint` <a name="ResetDataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint"></a>

```go
func ResetDataLossPreventionCustomEndpoint()
```

##### `ResetDataplexCustomEndpoint` <a name="ResetDataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint"></a>

```go
func ResetDataplexCustomEndpoint()
```

##### `ResetDataprocCustomEndpoint` <a name="ResetDataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint"></a>

```go
func ResetDataprocCustomEndpoint()
```

##### `ResetDataprocMetastoreCustomEndpoint` <a name="ResetDataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint"></a>

```go
func ResetDataprocMetastoreCustomEndpoint()
```

##### `ResetDatastoreCustomEndpoint` <a name="ResetDatastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastoreCustomEndpoint"></a>

```go
func ResetDatastoreCustomEndpoint()
```

##### `ResetDatastreamCustomEndpoint` <a name="ResetDatastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint"></a>

```go
func ResetDatastreamCustomEndpoint()
```

##### `ResetDeploymentManagerCustomEndpoint` <a name="ResetDeploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint"></a>

```go
func ResetDeploymentManagerCustomEndpoint()
```

##### `ResetDialogflowCustomEndpoint` <a name="ResetDialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint"></a>

```go
func ResetDialogflowCustomEndpoint()
```

##### `ResetDialogflowCxCustomEndpoint` <a name="ResetDialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint"></a>

```go
func ResetDialogflowCxCustomEndpoint()
```

##### `ResetDnsCustomEndpoint` <a name="ResetDnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint"></a>

```go
func ResetDnsCustomEndpoint()
```

##### `ResetDocumentAiCustomEndpoint` <a name="ResetDocumentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint"></a>

```go
func ResetDocumentAiCustomEndpoint()
```

##### `ResetEssentialContactsCustomEndpoint` <a name="ResetEssentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint"></a>

```go
func ResetEssentialContactsCustomEndpoint()
```

##### `ResetEventarcCustomEndpoint` <a name="ResetEventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint"></a>

```go
func ResetEventarcCustomEndpoint()
```

##### `ResetFilestoreCustomEndpoint` <a name="ResetFilestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint"></a>

```go
func ResetFilestoreCustomEndpoint()
```

##### `ResetFirebaseCustomEndpoint` <a name="ResetFirebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint"></a>

```go
func ResetFirebaseCustomEndpoint()
```

##### `ResetFirebaseDatabaseCustomEndpoint` <a name="ResetFirebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint"></a>

```go
func ResetFirebaseDatabaseCustomEndpoint()
```

##### `ResetFirebaseHostingCustomEndpoint` <a name="ResetFirebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint"></a>

```go
func ResetFirebaseHostingCustomEndpoint()
```

##### `ResetFirebaserulesCustomEndpoint` <a name="ResetFirebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint"></a>

```go
func ResetFirebaserulesCustomEndpoint()
```

##### `ResetFirebaseStorageCustomEndpoint` <a name="ResetFirebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint"></a>

```go
func ResetFirebaseStorageCustomEndpoint()
```

##### `ResetFirestoreCustomEndpoint` <a name="ResetFirestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint"></a>

```go
func ResetFirestoreCustomEndpoint()
```

##### `ResetGameServicesCustomEndpoint` <a name="ResetGameServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGameServicesCustomEndpoint"></a>

```go
func ResetGameServicesCustomEndpoint()
```

##### `ResetGkeBackupCustomEndpoint` <a name="ResetGkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint"></a>

```go
func ResetGkeBackupCustomEndpoint()
```

##### `ResetGkeHubCustomEndpoint` <a name="ResetGkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint"></a>

```go
func ResetGkeHubCustomEndpoint()
```

##### `ResetGkehubFeatureCustomEndpoint` <a name="ResetGkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint"></a>

```go
func ResetGkehubFeatureCustomEndpoint()
```

##### `ResetGkeonpremCustomEndpoint` <a name="ResetGkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint"></a>

```go
func ResetGkeonpremCustomEndpoint()
```

##### `ResetHealthcareCustomEndpoint` <a name="ResetHealthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint"></a>

```go
func ResetHealthcareCustomEndpoint()
```

##### `ResetIam2CustomEndpoint` <a name="ResetIam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint"></a>

```go
func ResetIam2CustomEndpoint()
```

##### `ResetIamBetaCustomEndpoint` <a name="ResetIamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint"></a>

```go
func ResetIamBetaCustomEndpoint()
```

##### `ResetIamCredentialsCustomEndpoint` <a name="ResetIamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint"></a>

```go
func ResetIamCredentialsCustomEndpoint()
```

##### `ResetIamCustomEndpoint` <a name="ResetIamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint"></a>

```go
func ResetIamCustomEndpoint()
```

##### `ResetIamWorkforcePoolCustomEndpoint` <a name="ResetIamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```go
func ResetIamWorkforcePoolCustomEndpoint()
```

##### `ResetIapCustomEndpoint` <a name="ResetIapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint"></a>

```go
func ResetIapCustomEndpoint()
```

##### `ResetIdentityPlatformCustomEndpoint` <a name="ResetIdentityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint"></a>

```go
func ResetIdentityPlatformCustomEndpoint()
```

##### `ResetImpersonateServiceAccount` <a name="ResetImpersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount"></a>

```go
func ResetImpersonateServiceAccount()
```

##### `ResetImpersonateServiceAccountDelegates` <a name="ResetImpersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates"></a>

```go
func ResetImpersonateServiceAccountDelegates()
```

##### `ResetKmsCustomEndpoint` <a name="ResetKmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint"></a>

```go
func ResetKmsCustomEndpoint()
```

##### `ResetLoggingCustomEndpoint` <a name="ResetLoggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint"></a>

```go
func ResetLoggingCustomEndpoint()
```

##### `ResetMemcacheCustomEndpoint` <a name="ResetMemcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint"></a>

```go
func ResetMemcacheCustomEndpoint()
```

##### `ResetMlEngineCustomEndpoint` <a name="ResetMlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint"></a>

```go
func ResetMlEngineCustomEndpoint()
```

##### `ResetMonitoringCustomEndpoint` <a name="ResetMonitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint"></a>

```go
func ResetMonitoringCustomEndpoint()
```

##### `ResetNetworkConnectivityCustomEndpoint` <a name="ResetNetworkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint"></a>

```go
func ResetNetworkConnectivityCustomEndpoint()
```

##### `ResetNetworkManagementCustomEndpoint` <a name="ResetNetworkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint"></a>

```go
func ResetNetworkManagementCustomEndpoint()
```

##### `ResetNetworkSecurityCustomEndpoint` <a name="ResetNetworkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint"></a>

```go
func ResetNetworkSecurityCustomEndpoint()
```

##### `ResetNetworkServicesCustomEndpoint` <a name="ResetNetworkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint"></a>

```go
func ResetNetworkServicesCustomEndpoint()
```

##### `ResetNotebooksCustomEndpoint` <a name="ResetNotebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint"></a>

```go
func ResetNotebooksCustomEndpoint()
```

##### `ResetOrgPolicyCustomEndpoint` <a name="ResetOrgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint"></a>

```go
func ResetOrgPolicyCustomEndpoint()
```

##### `ResetOsConfigCustomEndpoint` <a name="ResetOsConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint"></a>

```go
func ResetOsConfigCustomEndpoint()
```

##### `ResetOsLoginCustomEndpoint` <a name="ResetOsLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint"></a>

```go
func ResetOsLoginCustomEndpoint()
```

##### `ResetPrivatecaCustomEndpoint` <a name="ResetPrivatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint"></a>

```go
func ResetPrivatecaCustomEndpoint()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPubsubCustomEndpoint` <a name="ResetPubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubCustomEndpoint"></a>

```go
func ResetPubsubCustomEndpoint()
```

##### `ResetPubsubLiteCustomEndpoint` <a name="ResetPubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubLiteCustomEndpoint"></a>

```go
func ResetPubsubLiteCustomEndpoint()
```

##### `ResetRecaptchaEnterpriseCustomEndpoint` <a name="ResetRecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```go
func ResetRecaptchaEnterpriseCustomEndpoint()
```

##### `ResetRedisCustomEndpoint` <a name="ResetRedisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRedisCustomEndpoint"></a>

```go
func ResetRedisCustomEndpoint()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRequestReason` <a name="ResetRequestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestReason"></a>

```go
func ResetRequestReason()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetResourceManagerCustomEndpoint` <a name="ResetResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerCustomEndpoint"></a>

```go
func ResetResourceManagerCustomEndpoint()
```

##### `ResetResourceManagerV3CustomEndpoint` <a name="ResetResourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerV3CustomEndpoint"></a>

```go
func ResetResourceManagerV3CustomEndpoint()
```

##### `ResetRuntimeconfigCustomEndpoint` <a name="ResetRuntimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeconfigCustomEndpoint"></a>

```go
func ResetRuntimeconfigCustomEndpoint()
```

##### `ResetRuntimeConfigCustomEndpoint` <a name="ResetRuntimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeConfigCustomEndpoint"></a>

```go
func ResetRuntimeConfigCustomEndpoint()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecretManagerCustomEndpoint` <a name="ResetSecretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerCustomEndpoint"></a>

```go
func ResetSecretManagerCustomEndpoint()
```

##### `ResetSecurityCenterCustomEndpoint` <a name="ResetSecurityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint"></a>

```go
func ResetSecurityCenterCustomEndpoint()
```

##### `ResetSecurityScannerCustomEndpoint` <a name="ResetSecurityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint"></a>

```go
func ResetSecurityScannerCustomEndpoint()
```

##### `ResetServiceDirectoryCustomEndpoint` <a name="ResetServiceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint"></a>

```go
func ResetServiceDirectoryCustomEndpoint()
```

##### `ResetServiceManagementCustomEndpoint` <a name="ResetServiceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint"></a>

```go
func ResetServiceManagementCustomEndpoint()
```

##### `ResetServiceNetworkingCustomEndpoint` <a name="ResetServiceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint"></a>

```go
func ResetServiceNetworkingCustomEndpoint()
```

##### `ResetServiceUsageCustomEndpoint` <a name="ResetServiceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint"></a>

```go
func ResetServiceUsageCustomEndpoint()
```

##### `ResetSourceRepoCustomEndpoint` <a name="ResetSourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint"></a>

```go
func ResetSourceRepoCustomEndpoint()
```

##### `ResetSpannerCustomEndpoint` <a name="ResetSpannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint"></a>

```go
func ResetSpannerCustomEndpoint()
```

##### `ResetSqlCustomEndpoint` <a name="ResetSqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint"></a>

```go
func ResetSqlCustomEndpoint()
```

##### `ResetStorageCustomEndpoint` <a name="ResetStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint"></a>

```go
func ResetStorageCustomEndpoint()
```

##### `ResetStorageTransferCustomEndpoint` <a name="ResetStorageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint"></a>

```go
func ResetStorageTransferCustomEndpoint()
```

##### `ResetTagsCustomEndpoint` <a name="ResetTagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint"></a>

```go
func ResetTagsCustomEndpoint()
```

##### `ResetTagsLocationCustomEndpoint` <a name="ResetTagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint"></a>

```go
func ResetTagsLocationCustomEndpoint()
```

##### `ResetTpuCustomEndpoint` <a name="ResetTpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint"></a>

```go
func ResetTpuCustomEndpoint()
```

##### `ResetUserProjectOverride` <a name="ResetUserProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride"></a>

```go
func ResetUserProjectOverride()
```

##### `ResetVertexAiCustomEndpoint` <a name="ResetVertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint"></a>

```go
func ResetVertexAiCustomEndpoint()
```

##### `ResetVpcAccessCustomEndpoint` <a name="ResetVpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint"></a>

```go
func ResetVpcAccessCustomEndpoint()
```

##### `ResetWorkflowsCustomEndpoint` <a name="ResetWorkflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint"></a>

```go
func ResetWorkflowsCustomEndpoint()
```

##### `ResetWorkstationsCustomEndpoint` <a name="ResetWorkstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint"></a>

```go
func ResetWorkstationsCustomEndpoint()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/provider"

provider.GoogleBetaProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/provider"

provider.GoogleBetaProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/provider"

provider.GoogleBetaProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput">AccessApprovalCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput">AccessContextManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput">ActiveDirectoryCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput">AlloydbCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput">ApiGatewayCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput">ApigeeCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput">ApikeysCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput">AppEngineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput">ArtifactRegistryCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput">AssuredWorkloadsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput">BatchingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput">BeyondcorpCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput">BigqueryAnalyticsHubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput">BigqueryConnectionCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput">BigQueryCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput">BigqueryDatapolicyCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput">BigqueryDataTransferCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput">BigqueryReservationCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput">BigtableCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput">BillingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput">BillingProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput">BinaryAuthorizationCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput">CertificateManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput">CloudAssetCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput">CloudBillingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput">CloudBuildCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput">Cloudbuildv2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput">CloudBuildWorkerPoolCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput">ClouddeployCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput">Cloudfunctions2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput">CloudFunctionsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput">CloudIdentityCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput">CloudIdsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIotCustomEndpointInput">CloudIotCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput">CloudResourceManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput">CloudRunCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput">CloudRunV2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput">CloudSchedulerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput">CloudTasksCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput">ComposerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput">ComputeCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput">ContainerAnalysisCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput">ContainerAttachedCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput">ContainerAwsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput">ContainerAzureCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput">ContainerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput">CredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput">DatabaseMigrationServiceCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput">DataCatalogCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput">DataflowCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput">DataformCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput">DataFusionCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput">DataLossPreventionCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput">DataplexCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput">DataprocCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput">DataprocMetastoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastoreCustomEndpointInput">DatastoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput">DatastreamCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput">DeploymentManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput">DialogflowCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput">DialogflowCxCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput">DnsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput">DocumentAiCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput">EssentialContactsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput">EventarcCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput">FilestoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput">FirebaseCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput">FirebaseDatabaseCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput">FirebaseHostingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput">FirebaserulesCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput">FirebaseStorageCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput">FirestoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gameServicesCustomEndpointInput">GameServicesCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput">GkeBackupCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput">GkeHubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput">GkehubFeatureCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput">GkeonpremCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput">HealthcareCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput">Iam2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput">IamBetaCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput">IamCredentialsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput">IamCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput">IamWorkforcePoolCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput">IapCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput">IdentityPlatformCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput">ImpersonateServiceAccountDelegatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput">ImpersonateServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput">KmsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput">LoggingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput">MemcacheCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput">MlEngineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput">MonitoringCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput">NetworkConnectivityCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput">NetworkManagementCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput">NetworkSecurityCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput">NetworkServicesCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput">NotebooksCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput">OrgPolicyCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput">OsConfigCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput">OsLoginCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput">PrivatecaCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput">PubsubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput">PubsubLiteCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput">RecaptchaEnterpriseCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput">RedisCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput">RequestReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput">ResourceManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput">ResourceManagerV3CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput">RuntimeconfigCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput">RuntimeConfigCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput">SecretManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput">SecurityCenterCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput">SecurityScannerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput">ServiceDirectoryCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput">ServiceManagementCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput">ServiceNetworkingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput">ServiceUsageCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput">SourceRepoCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput">SpannerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput">SqlCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput">StorageCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput">StorageTransferCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput">TagsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput">TagsLocationCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput">TpuCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput">UserProjectOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput">VertexAiCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput">VpcAccessCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput">WorkflowsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput">WorkstationsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint">ApiGatewayCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching">Batching</a></code> | <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject">BillingProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint">Cloudbuildv2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint">CloudBuildWorkerPoolCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIotCustomEndpoint">CloudIotCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials">Credentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint">DatabaseMigrationServiceCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint">DataformCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastoreCustomEndpoint">DatastoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint">FirebaseCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint">FirebaseDatabaseCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint">FirebaseHostingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint">FirebaseStorageCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gameServicesCustomEndpoint">GameServicesCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint">GkehubFeatureCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint">GkeonpremCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint">NetworkSecurityCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason">RequestReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint">RuntimeconfigCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint">RuntimeConfigCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint">SecurityScannerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint">ServiceDirectoryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride">UserProjectOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint">WorkstationsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccessApprovalCustomEndpointInput`<sup>Optional</sup> <a name="AccessApprovalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput"></a>

```go
func AccessApprovalCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AccessContextManagerCustomEndpointInput`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput"></a>

```go
func AccessContextManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput"></a>

```go
func ActiveDirectoryCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AlloydbCustomEndpointInput`<sup>Optional</sup> <a name="AlloydbCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput"></a>

```go
func AlloydbCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ApiGatewayCustomEndpointInput`<sup>Optional</sup> <a name="ApiGatewayCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput"></a>

```go
func ApiGatewayCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ApigeeCustomEndpointInput`<sup>Optional</sup> <a name="ApigeeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput"></a>

```go
func ApigeeCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ApikeysCustomEndpointInput`<sup>Optional</sup> <a name="ApikeysCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput"></a>

```go
func ApikeysCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AppEngineCustomEndpointInput`<sup>Optional</sup> <a name="AppEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput"></a>

```go
func AppEngineCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ArtifactRegistryCustomEndpointInput`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput"></a>

```go
func ArtifactRegistryCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AssuredWorkloadsCustomEndpointInput`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```go
func AssuredWorkloadsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BatchingInput`<sup>Optional</sup> <a name="BatchingInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput"></a>

```go
func BatchingInput() GoogleBetaProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>

---

##### `BeyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="BeyondcorpCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput"></a>

```go
func BeyondcorpCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryAnalyticsHubCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```go
func BigqueryAnalyticsHubCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryConnectionCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```go
func BigqueryConnectionCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigQueryCustomEndpointInput`<sup>Optional</sup> <a name="BigQueryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput"></a>

```go
func BigQueryCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryDatapolicyCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```go
func BigqueryDatapolicyCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryDataTransferCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```go
func BigqueryDataTransferCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryReservationCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput"></a>

```go
func BigqueryReservationCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigtableCustomEndpointInput`<sup>Optional</sup> <a name="BigtableCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput"></a>

```go
func BigtableCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BillingCustomEndpointInput`<sup>Optional</sup> <a name="BillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput"></a>

```go
func BillingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput"></a>

```go
func BillingProjectInput() *string
```

- *Type:* *string

---

##### `BinaryAuthorizationCustomEndpointInput`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```go
func BinaryAuthorizationCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CertificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="CertificateManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput"></a>

```go
func CertificateManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudAssetCustomEndpointInput`<sup>Optional</sup> <a name="CloudAssetCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput"></a>

```go
func CloudAssetCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudBillingCustomEndpointInput`<sup>Optional</sup> <a name="CloudBillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput"></a>

```go
func CloudBillingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudBuildCustomEndpointInput`<sup>Optional</sup> <a name="CloudBuildCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput"></a>

```go
func CloudBuildCustomEndpointInput() *string
```

- *Type:* *string

---

##### `Cloudbuildv2CustomEndpointInput`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput"></a>

```go
func Cloudbuildv2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudBuildWorkerPoolCustomEndpointInput`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput"></a>

```go
func CloudBuildWorkerPoolCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ClouddeployCustomEndpointInput`<sup>Optional</sup> <a name="ClouddeployCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput"></a>

```go
func ClouddeployCustomEndpointInput() *string
```

- *Type:* *string

---

##### `Cloudfunctions2CustomEndpointInput`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput"></a>

```go
func Cloudfunctions2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudFunctionsCustomEndpointInput`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput"></a>

```go
func CloudFunctionsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudIdentityCustomEndpointInput`<sup>Optional</sup> <a name="CloudIdentityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput"></a>

```go
func CloudIdentityCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudIdsCustomEndpointInput`<sup>Optional</sup> <a name="CloudIdsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput"></a>

```go
func CloudIdsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudIotCustomEndpointInput`<sup>Optional</sup> <a name="CloudIotCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIotCustomEndpointInput"></a>

```go
func CloudIotCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```go
func CloudResourceManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudRunCustomEndpointInput`<sup>Optional</sup> <a name="CloudRunCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput"></a>

```go
func CloudRunCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudRunV2CustomEndpointInput`<sup>Optional</sup> <a name="CloudRunV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput"></a>

```go
func CloudRunV2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudSchedulerCustomEndpointInput`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput"></a>

```go
func CloudSchedulerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudTasksCustomEndpointInput`<sup>Optional</sup> <a name="CloudTasksCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput"></a>

```go
func CloudTasksCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ComposerCustomEndpointInput`<sup>Optional</sup> <a name="ComposerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput"></a>

```go
func ComposerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ComputeCustomEndpointInput`<sup>Optional</sup> <a name="ComputeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput"></a>

```go
func ComputeCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerAnalysisCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput"></a>

```go
func ContainerAnalysisCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerAttachedCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput"></a>

```go
func ContainerAttachedCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerAwsCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAwsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput"></a>

```go
func ContainerAwsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerAzureCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAzureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput"></a>

```go
func ContainerAzureCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerCustomEndpointInput`<sup>Optional</sup> <a name="ContainerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput"></a>

```go
func ContainerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput"></a>

```go
func CredentialsInput() *string
```

- *Type:* *string

---

##### `DatabaseMigrationServiceCustomEndpointInput`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```go
func DatabaseMigrationServiceCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataCatalogCustomEndpointInput`<sup>Optional</sup> <a name="DataCatalogCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput"></a>

```go
func DataCatalogCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataflowCustomEndpointInput`<sup>Optional</sup> <a name="DataflowCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput"></a>

```go
func DataflowCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataformCustomEndpointInput`<sup>Optional</sup> <a name="DataformCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput"></a>

```go
func DataformCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataFusionCustomEndpointInput`<sup>Optional</sup> <a name="DataFusionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput"></a>

```go
func DataFusionCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataLossPreventionCustomEndpointInput`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput"></a>

```go
func DataLossPreventionCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataplexCustomEndpointInput`<sup>Optional</sup> <a name="DataplexCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput"></a>

```go
func DataplexCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataprocCustomEndpointInput`<sup>Optional</sup> <a name="DataprocCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput"></a>

```go
func DataprocCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```go
func DataprocMetastoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DatastoreCustomEndpointInput`<sup>Optional</sup> <a name="DatastoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastoreCustomEndpointInput"></a>

```go
func DatastoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DatastreamCustomEndpointInput`<sup>Optional</sup> <a name="DatastreamCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput"></a>

```go
func DatastreamCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DeploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput"></a>

```go
func DeploymentManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DialogflowCustomEndpointInput`<sup>Optional</sup> <a name="DialogflowCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput"></a>

```go
func DialogflowCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DialogflowCxCustomEndpointInput`<sup>Optional</sup> <a name="DialogflowCxCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput"></a>

```go
func DialogflowCxCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DnsCustomEndpointInput`<sup>Optional</sup> <a name="DnsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput"></a>

```go
func DnsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DocumentAiCustomEndpointInput`<sup>Optional</sup> <a name="DocumentAiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput"></a>

```go
func DocumentAiCustomEndpointInput() *string
```

- *Type:* *string

---

##### `EssentialContactsCustomEndpointInput`<sup>Optional</sup> <a name="EssentialContactsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput"></a>

```go
func EssentialContactsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `EventarcCustomEndpointInput`<sup>Optional</sup> <a name="EventarcCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput"></a>

```go
func EventarcCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FilestoreCustomEndpointInput`<sup>Optional</sup> <a name="FilestoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput"></a>

```go
func FilestoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaseCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput"></a>

```go
func FirebaseCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaseDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseDatabaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput"></a>

```go
func FirebaseDatabaseCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaseHostingCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseHostingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput"></a>

```go
func FirebaseHostingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaserulesCustomEndpointInput`<sup>Optional</sup> <a name="FirebaserulesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput"></a>

```go
func FirebaserulesCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaseStorageCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseStorageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput"></a>

```go
func FirebaseStorageCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirestoreCustomEndpointInput`<sup>Optional</sup> <a name="FirestoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput"></a>

```go
func FirestoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GameServicesCustomEndpointInput`<sup>Optional</sup> <a name="GameServicesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gameServicesCustomEndpointInput"></a>

```go
func GameServicesCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="GkeBackupCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput"></a>

```go
func GkeBackupCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeHubCustomEndpointInput`<sup>Optional</sup> <a name="GkeHubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput"></a>

```go
func GkeHubCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkehubFeatureCustomEndpointInput`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput"></a>

```go
func GkehubFeatureCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeonpremCustomEndpointInput`<sup>Optional</sup> <a name="GkeonpremCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput"></a>

```go
func GkeonpremCustomEndpointInput() *string
```

- *Type:* *string

---

##### `HealthcareCustomEndpointInput`<sup>Optional</sup> <a name="HealthcareCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput"></a>

```go
func HealthcareCustomEndpointInput() *string
```

- *Type:* *string

---

##### `Iam2CustomEndpointInput`<sup>Optional</sup> <a name="Iam2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput"></a>

```go
func Iam2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `IamBetaCustomEndpointInput`<sup>Optional</sup> <a name="IamBetaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput"></a>

```go
func IamBetaCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IamCredentialsCustomEndpointInput`<sup>Optional</sup> <a name="IamCredentialsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput"></a>

```go
func IamCredentialsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IamCustomEndpointInput`<sup>Optional</sup> <a name="IamCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput"></a>

```go
func IamCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IamWorkforcePoolCustomEndpointInput`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```go
func IamWorkforcePoolCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IapCustomEndpointInput`<sup>Optional</sup> <a name="IapCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput"></a>

```go
func IapCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IdentityPlatformCustomEndpointInput`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput"></a>

```go
func IdentityPlatformCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ImpersonateServiceAccountDelegatesInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegatesInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput"></a>

```go
func ImpersonateServiceAccountDelegatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ImpersonateServiceAccountInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput"></a>

```go
func ImpersonateServiceAccountInput() *string
```

- *Type:* *string

---

##### `KmsCustomEndpointInput`<sup>Optional</sup> <a name="KmsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput"></a>

```go
func KmsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `LoggingCustomEndpointInput`<sup>Optional</sup> <a name="LoggingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput"></a>

```go
func LoggingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `MemcacheCustomEndpointInput`<sup>Optional</sup> <a name="MemcacheCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput"></a>

```go
func MemcacheCustomEndpointInput() *string
```

- *Type:* *string

---

##### `MlEngineCustomEndpointInput`<sup>Optional</sup> <a name="MlEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput"></a>

```go
func MlEngineCustomEndpointInput() *string
```

- *Type:* *string

---

##### `MonitoringCustomEndpointInput`<sup>Optional</sup> <a name="MonitoringCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput"></a>

```go
func MonitoringCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetworkConnectivityCustomEndpointInput`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput"></a>

```go
func NetworkConnectivityCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetworkManagementCustomEndpointInput`<sup>Optional</sup> <a name="NetworkManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput"></a>

```go
func NetworkManagementCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetworkSecurityCustomEndpointInput`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput"></a>

```go
func NetworkSecurityCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetworkServicesCustomEndpointInput`<sup>Optional</sup> <a name="NetworkServicesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput"></a>

```go
func NetworkServicesCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NotebooksCustomEndpointInput`<sup>Optional</sup> <a name="NotebooksCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput"></a>

```go
func NotebooksCustomEndpointInput() *string
```

- *Type:* *string

---

##### `OrgPolicyCustomEndpointInput`<sup>Optional</sup> <a name="OrgPolicyCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput"></a>

```go
func OrgPolicyCustomEndpointInput() *string
```

- *Type:* *string

---

##### `OsConfigCustomEndpointInput`<sup>Optional</sup> <a name="OsConfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput"></a>

```go
func OsConfigCustomEndpointInput() *string
```

- *Type:* *string

---

##### `OsLoginCustomEndpointInput`<sup>Optional</sup> <a name="OsLoginCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput"></a>

```go
func OsLoginCustomEndpointInput() *string
```

- *Type:* *string

---

##### `PrivatecaCustomEndpointInput`<sup>Optional</sup> <a name="PrivatecaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput"></a>

```go
func PrivatecaCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PubsubCustomEndpointInput`<sup>Optional</sup> <a name="PubsubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput"></a>

```go
func PubsubCustomEndpointInput() *string
```

- *Type:* *string

---

##### `PubsubLiteCustomEndpointInput`<sup>Optional</sup> <a name="PubsubLiteCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput"></a>

```go
func PubsubLiteCustomEndpointInput() *string
```

- *Type:* *string

---

##### `RecaptchaEnterpriseCustomEndpointInput`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```go
func RecaptchaEnterpriseCustomEndpointInput() *string
```

- *Type:* *string

---

##### `RedisCustomEndpointInput`<sup>Optional</sup> <a name="RedisCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput"></a>

```go
func RedisCustomEndpointInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RequestReasonInput`<sup>Optional</sup> <a name="RequestReasonInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput"></a>

```go
func RequestReasonInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *string
```

- *Type:* *string

---

##### `ResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="ResourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput"></a>

```go
func ResourceManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ResourceManagerV3CustomEndpointInput`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput"></a>

```go
func ResourceManagerV3CustomEndpointInput() *string
```

- *Type:* *string

---

##### `RuntimeconfigCustomEndpointInput`<sup>Optional</sup> <a name="RuntimeconfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput"></a>

```go
func RuntimeconfigCustomEndpointInput() *string
```

- *Type:* *string

---

##### `RuntimeConfigCustomEndpointInput`<sup>Optional</sup> <a name="RuntimeConfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput"></a>

```go
func RuntimeConfigCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretManagerCustomEndpointInput`<sup>Optional</sup> <a name="SecretManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput"></a>

```go
func SecretManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SecurityCenterCustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput"></a>

```go
func SecurityCenterCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SecurityScannerCustomEndpointInput`<sup>Optional</sup> <a name="SecurityScannerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput"></a>

```go
func SecurityScannerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ServiceDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="ServiceDirectoryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput"></a>

```go
func ServiceDirectoryCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ServiceManagementCustomEndpointInput`<sup>Optional</sup> <a name="ServiceManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput"></a>

```go
func ServiceManagementCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ServiceNetworkingCustomEndpointInput`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput"></a>

```go
func ServiceNetworkingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ServiceUsageCustomEndpointInput`<sup>Optional</sup> <a name="ServiceUsageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput"></a>

```go
func ServiceUsageCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SourceRepoCustomEndpointInput`<sup>Optional</sup> <a name="SourceRepoCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput"></a>

```go
func SourceRepoCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SpannerCustomEndpointInput`<sup>Optional</sup> <a name="SpannerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput"></a>

```go
func SpannerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SqlCustomEndpointInput`<sup>Optional</sup> <a name="SqlCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput"></a>

```go
func SqlCustomEndpointInput() *string
```

- *Type:* *string

---

##### `StorageCustomEndpointInput`<sup>Optional</sup> <a name="StorageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput"></a>

```go
func StorageCustomEndpointInput() *string
```

- *Type:* *string

---

##### `StorageTransferCustomEndpointInput`<sup>Optional</sup> <a name="StorageTransferCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput"></a>

```go
func StorageTransferCustomEndpointInput() *string
```

- *Type:* *string

---

##### `TagsCustomEndpointInput`<sup>Optional</sup> <a name="TagsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput"></a>

```go
func TagsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `TagsLocationCustomEndpointInput`<sup>Optional</sup> <a name="TagsLocationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput"></a>

```go
func TagsLocationCustomEndpointInput() *string
```

- *Type:* *string

---

##### `TpuCustomEndpointInput`<sup>Optional</sup> <a name="TpuCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput"></a>

```go
func TpuCustomEndpointInput() *string
```

- *Type:* *string

---

##### `UserProjectOverrideInput`<sup>Optional</sup> <a name="UserProjectOverrideInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput"></a>

```go
func UserProjectOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `VertexAiCustomEndpointInput`<sup>Optional</sup> <a name="VertexAiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput"></a>

```go
func VertexAiCustomEndpointInput() *string
```

- *Type:* *string

---

##### `VpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="VpcAccessCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput"></a>

```go
func VpcAccessCustomEndpointInput() *string
```

- *Type:* *string

---

##### `WorkflowsCustomEndpointInput`<sup>Optional</sup> <a name="WorkflowsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput"></a>

```go
func WorkflowsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `WorkstationsCustomEndpointInput`<sup>Optional</sup> <a name="WorkstationsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput"></a>

```go
func WorkstationsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint"></a>

```go
func AccessApprovalCustomEndpoint() *string
```

- *Type:* *string

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint"></a>

```go
func AccessContextManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint"></a>

```go
func ActiveDirectoryCustomEndpoint() *string
```

- *Type:* *string

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint"></a>

```go
func AlloydbCustomEndpoint() *string
```

- *Type:* *string

---

##### `ApiGatewayCustomEndpoint`<sup>Optional</sup> <a name="ApiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint"></a>

```go
func ApiGatewayCustomEndpoint() *string
```

- *Type:* *string

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint"></a>

```go
func ApigeeCustomEndpoint() *string
```

- *Type:* *string

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint"></a>

```go
func ApikeysCustomEndpoint() *string
```

- *Type:* *string

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint"></a>

```go
func AppEngineCustomEndpoint() *string
```

- *Type:* *string

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint"></a>

```go
func ArtifactRegistryCustomEndpoint() *string
```

- *Type:* *string

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint"></a>

```go
func AssuredWorkloadsCustomEndpoint() *string
```

- *Type:* *string

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching"></a>

```go
func Batching() GoogleBetaProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint"></a>

```go
func BeyondcorpCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```go
func BigqueryAnalyticsHubCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint"></a>

```go
func BigqueryConnectionCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint"></a>

```go
func BigQueryCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```go
func BigqueryDatapolicyCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```go
func BigqueryDataTransferCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint"></a>

```go
func BigqueryReservationCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint"></a>

```go
func BigtableCustomEndpoint() *string
```

- *Type:* *string

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint"></a>

```go
func BillingCustomEndpoint() *string
```

- *Type:* *string

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject"></a>

```go
func BillingProject() *string
```

- *Type:* *string

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint"></a>

```go
func BinaryAuthorizationCustomEndpoint() *string
```

- *Type:* *string

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint"></a>

```go
func CertificateManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint"></a>

```go
func CloudAssetCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint"></a>

```go
func CloudBillingCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint"></a>

```go
func CloudBuildCustomEndpoint() *string
```

- *Type:* *string

---

##### `Cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint"></a>

```go
func Cloudbuildv2CustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```go
func CloudBuildWorkerPoolCustomEndpoint() *string
```

- *Type:* *string

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint"></a>

```go
func ClouddeployCustomEndpoint() *string
```

- *Type:* *string

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint"></a>

```go
func Cloudfunctions2CustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint"></a>

```go
func CloudFunctionsCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint"></a>

```go
func CloudIdentityCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint"></a>

```go
func CloudIdsCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudIotCustomEndpoint`<sup>Optional</sup> <a name="CloudIotCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIotCustomEndpoint"></a>

```go
func CloudIotCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint"></a>

```go
func CloudResourceManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint"></a>

```go
func CloudRunCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint"></a>

```go
func CloudRunV2CustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint"></a>

```go
func CloudSchedulerCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint"></a>

```go
func CloudTasksCustomEndpoint() *string
```

- *Type:* *string

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint"></a>

```go
func ComposerCustomEndpoint() *string
```

- *Type:* *string

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint"></a>

```go
func ComputeCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint"></a>

```go
func ContainerAnalysisCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint"></a>

```go
func ContainerAttachedCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint"></a>

```go
func ContainerAwsCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint"></a>

```go
func ContainerAzureCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint"></a>

```go
func ContainerCustomEndpoint() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials"></a>

```go
func Credentials() *string
```

- *Type:* *string

---

##### `DatabaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```go
func DatabaseMigrationServiceCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint"></a>

```go
func DataCatalogCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint"></a>

```go
func DataflowCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataformCustomEndpoint`<sup>Optional</sup> <a name="DataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint"></a>

```go
func DataformCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint"></a>

```go
func DataFusionCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint"></a>

```go
func DataLossPreventionCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint"></a>

```go
func DataplexCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint"></a>

```go
func DataprocCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint"></a>

```go
func DataprocMetastoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `DatastoreCustomEndpoint`<sup>Optional</sup> <a name="DatastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastoreCustomEndpoint"></a>

```go
func DatastoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint"></a>

```go
func DatastreamCustomEndpoint() *string
```

- *Type:* *string

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint"></a>

```go
func DeploymentManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint"></a>

```go
func DialogflowCustomEndpoint() *string
```

- *Type:* *string

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint"></a>

```go
func DialogflowCxCustomEndpoint() *string
```

- *Type:* *string

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint"></a>

```go
func DnsCustomEndpoint() *string
```

- *Type:* *string

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint"></a>

```go
func DocumentAiCustomEndpoint() *string
```

- *Type:* *string

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint"></a>

```go
func EssentialContactsCustomEndpoint() *string
```

- *Type:* *string

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint"></a>

```go
func EventarcCustomEndpoint() *string
```

- *Type:* *string

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint"></a>

```go
func FilestoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaseCustomEndpoint`<sup>Optional</sup> <a name="FirebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint"></a>

```go
func FirebaseCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="FirebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint"></a>

```go
func FirebaseDatabaseCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="FirebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint"></a>

```go
func FirebaseHostingCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint"></a>

```go
func FirebaserulesCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="FirebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint"></a>

```go
func FirebaseStorageCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint"></a>

```go
func FirestoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `GameServicesCustomEndpoint`<sup>Optional</sup> <a name="GameServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gameServicesCustomEndpoint"></a>

```go
func GameServicesCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint"></a>

```go
func GkeBackupCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint"></a>

```go
func GkeHubCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint"></a>

```go
func GkehubFeatureCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeonpremCustomEndpoint`<sup>Optional</sup> <a name="GkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint"></a>

```go
func GkeonpremCustomEndpoint() *string
```

- *Type:* *string

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint"></a>

```go
func HealthcareCustomEndpoint() *string
```

- *Type:* *string

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint"></a>

```go
func Iam2CustomEndpoint() *string
```

- *Type:* *string

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint"></a>

```go
func IamBetaCustomEndpoint() *string
```

- *Type:* *string

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint"></a>

```go
func IamCredentialsCustomEndpoint() *string
```

- *Type:* *string

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint"></a>

```go
func IamCustomEndpoint() *string
```

- *Type:* *string

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```go
func IamWorkforcePoolCustomEndpoint() *string
```

- *Type:* *string

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint"></a>

```go
func IapCustomEndpoint() *string
```

- *Type:* *string

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint"></a>

```go
func IdentityPlatformCustomEndpoint() *string
```

- *Type:* *string

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount"></a>

```go
func ImpersonateServiceAccount() *string
```

- *Type:* *string

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates"></a>

```go
func ImpersonateServiceAccountDelegates() *[]*string
```

- *Type:* *[]*string

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint"></a>

```go
func KmsCustomEndpoint() *string
```

- *Type:* *string

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint"></a>

```go
func LoggingCustomEndpoint() *string
```

- *Type:* *string

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint"></a>

```go
func MemcacheCustomEndpoint() *string
```

- *Type:* *string

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint"></a>

```go
func MlEngineCustomEndpoint() *string
```

- *Type:* *string

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint"></a>

```go
func MonitoringCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint"></a>

```go
func NetworkConnectivityCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint"></a>

```go
func NetworkManagementCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetworkSecurityCustomEndpoint`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint"></a>

```go
func NetworkSecurityCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint"></a>

```go
func NetworkServicesCustomEndpoint() *string
```

- *Type:* *string

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint"></a>

```go
func NotebooksCustomEndpoint() *string
```

- *Type:* *string

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint"></a>

```go
func OrgPolicyCustomEndpoint() *string
```

- *Type:* *string

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint"></a>

```go
func OsConfigCustomEndpoint() *string
```

- *Type:* *string

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint"></a>

```go
func OsLoginCustomEndpoint() *string
```

- *Type:* *string

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint"></a>

```go
func PrivatecaCustomEndpoint() *string
```

- *Type:* *string

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint"></a>

```go
func PubsubCustomEndpoint() *string
```

- *Type:* *string

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint"></a>

```go
func PubsubLiteCustomEndpoint() *string
```

- *Type:* *string

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```go
func RecaptchaEnterpriseCustomEndpoint() *string
```

- *Type:* *string

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint"></a>

```go
func RedisCustomEndpoint() *string
```

- *Type:* *string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason"></a>

```go
func RequestReason() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout"></a>

```go
func RequestTimeout() *string
```

- *Type:* *string

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint"></a>

```go
func ResourceManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint"></a>

```go
func ResourceManagerV3CustomEndpoint() *string
```

- *Type:* *string

---

##### `RuntimeconfigCustomEndpoint`<sup>Optional</sup> <a name="RuntimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint"></a>

```go
func RuntimeconfigCustomEndpoint() *string
```

- *Type:* *string

---

##### `RuntimeConfigCustomEndpoint`<sup>Optional</sup> <a name="RuntimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint"></a>

```go
func RuntimeConfigCustomEndpoint() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint"></a>

```go
func SecretManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint"></a>

```go
func SecurityCenterCustomEndpoint() *string
```

- *Type:* *string

---

##### `SecurityScannerCustomEndpoint`<sup>Optional</sup> <a name="SecurityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint"></a>

```go
func SecurityScannerCustomEndpoint() *string
```

- *Type:* *string

---

##### `ServiceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ServiceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint"></a>

```go
func ServiceDirectoryCustomEndpoint() *string
```

- *Type:* *string

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint"></a>

```go
func ServiceManagementCustomEndpoint() *string
```

- *Type:* *string

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint"></a>

```go
func ServiceNetworkingCustomEndpoint() *string
```

- *Type:* *string

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint"></a>

```go
func ServiceUsageCustomEndpoint() *string
```

- *Type:* *string

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint"></a>

```go
func SourceRepoCustomEndpoint() *string
```

- *Type:* *string

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint"></a>

```go
func SpannerCustomEndpoint() *string
```

- *Type:* *string

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint"></a>

```go
func SqlCustomEndpoint() *string
```

- *Type:* *string

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint"></a>

```go
func StorageCustomEndpoint() *string
```

- *Type:* *string

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint"></a>

```go
func StorageTransferCustomEndpoint() *string
```

- *Type:* *string

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint"></a>

```go
func TagsCustomEndpoint() *string
```

- *Type:* *string

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint"></a>

```go
func TagsLocationCustomEndpoint() *string
```

- *Type:* *string

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint"></a>

```go
func TpuCustomEndpoint() *string
```

- *Type:* *string

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride"></a>

```go
func UserProjectOverride() interface{}
```

- *Type:* interface{}

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint"></a>

```go
func VertexAiCustomEndpoint() *string
```

- *Type:* *string

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint"></a>

```go
func VpcAccessCustomEndpoint() *string
```

- *Type:* *string

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint"></a>

```go
func WorkflowsCustomEndpoint() *string
```

- *Type:* *string

---

##### `WorkstationsCustomEndpoint`<sup>Optional</sup> <a name="WorkstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint"></a>

```go
func WorkstationsCustomEndpoint() *string
```

- *Type:* *string

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBetaProviderBatching <a name="GoogleBetaProviderBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/provider"

&provider.GoogleBetaProviderBatching {
	EnableBatching: interface{},
	SendAfter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching">EnableBatching</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#enable_batching GoogleBetaProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter">SendAfter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#send_after GoogleBetaProvider#send_after}. |

---

##### `EnableBatching`<sup>Optional</sup> <a name="EnableBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching"></a>

```go
EnableBatching interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#enable_batching GoogleBetaProvider#enable_batching}.

---

##### `SendAfter`<sup>Optional</sup> <a name="SendAfter" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter"></a>

```go
SendAfter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#send_after GoogleBetaProvider#send_after}.

---

### GoogleBetaProviderConfig <a name="GoogleBetaProviderConfig" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/provider"

&provider.GoogleBetaProviderConfig {
	AccessApprovalCustomEndpoint: *string,
	AccessContextManagerCustomEndpoint: *string,
	AccessToken: *string,
	ActiveDirectoryCustomEndpoint: *string,
	Alias: *string,
	AlloydbCustomEndpoint: *string,
	ApiGatewayCustomEndpoint: *string,
	ApigeeCustomEndpoint: *string,
	ApikeysCustomEndpoint: *string,
	AppEngineCustomEndpoint: *string,
	ArtifactRegistryCustomEndpoint: *string,
	AssuredWorkloadsCustomEndpoint: *string,
	Batching: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.provider.GoogleBetaProviderBatching,
	BeyondcorpCustomEndpoint: *string,
	BigqueryAnalyticsHubCustomEndpoint: *string,
	BigqueryConnectionCustomEndpoint: *string,
	BigQueryCustomEndpoint: *string,
	BigqueryDatapolicyCustomEndpoint: *string,
	BigqueryDataTransferCustomEndpoint: *string,
	BigqueryReservationCustomEndpoint: *string,
	BigtableCustomEndpoint: *string,
	BillingCustomEndpoint: *string,
	BillingProject: *string,
	BinaryAuthorizationCustomEndpoint: *string,
	CertificateManagerCustomEndpoint: *string,
	CloudAssetCustomEndpoint: *string,
	CloudBillingCustomEndpoint: *string,
	CloudBuildCustomEndpoint: *string,
	Cloudbuildv2CustomEndpoint: *string,
	CloudBuildWorkerPoolCustomEndpoint: *string,
	ClouddeployCustomEndpoint: *string,
	Cloudfunctions2CustomEndpoint: *string,
	CloudFunctionsCustomEndpoint: *string,
	CloudIdentityCustomEndpoint: *string,
	CloudIdsCustomEndpoint: *string,
	CloudIotCustomEndpoint: *string,
	CloudResourceManagerCustomEndpoint: *string,
	CloudRunCustomEndpoint: *string,
	CloudRunV2CustomEndpoint: *string,
	CloudSchedulerCustomEndpoint: *string,
	CloudTasksCustomEndpoint: *string,
	ComposerCustomEndpoint: *string,
	ComputeCustomEndpoint: *string,
	ContainerAnalysisCustomEndpoint: *string,
	ContainerAttachedCustomEndpoint: *string,
	ContainerAwsCustomEndpoint: *string,
	ContainerAzureCustomEndpoint: *string,
	ContainerCustomEndpoint: *string,
	Credentials: *string,
	DatabaseMigrationServiceCustomEndpoint: *string,
	DataCatalogCustomEndpoint: *string,
	DataflowCustomEndpoint: *string,
	DataformCustomEndpoint: *string,
	DataFusionCustomEndpoint: *string,
	DataLossPreventionCustomEndpoint: *string,
	DataplexCustomEndpoint: *string,
	DataprocCustomEndpoint: *string,
	DataprocMetastoreCustomEndpoint: *string,
	DatastoreCustomEndpoint: *string,
	DatastreamCustomEndpoint: *string,
	DeploymentManagerCustomEndpoint: *string,
	DialogflowCustomEndpoint: *string,
	DialogflowCxCustomEndpoint: *string,
	DnsCustomEndpoint: *string,
	DocumentAiCustomEndpoint: *string,
	EssentialContactsCustomEndpoint: *string,
	EventarcCustomEndpoint: *string,
	FilestoreCustomEndpoint: *string,
	FirebaseCustomEndpoint: *string,
	FirebaseDatabaseCustomEndpoint: *string,
	FirebaseHostingCustomEndpoint: *string,
	FirebaserulesCustomEndpoint: *string,
	FirebaseStorageCustomEndpoint: *string,
	FirestoreCustomEndpoint: *string,
	GameServicesCustomEndpoint: *string,
	GkeBackupCustomEndpoint: *string,
	GkeHubCustomEndpoint: *string,
	GkehubFeatureCustomEndpoint: *string,
	GkeonpremCustomEndpoint: *string,
	HealthcareCustomEndpoint: *string,
	Iam2CustomEndpoint: *string,
	IamBetaCustomEndpoint: *string,
	IamCredentialsCustomEndpoint: *string,
	IamCustomEndpoint: *string,
	IamWorkforcePoolCustomEndpoint: *string,
	IapCustomEndpoint: *string,
	IdentityPlatformCustomEndpoint: *string,
	ImpersonateServiceAccount: *string,
	ImpersonateServiceAccountDelegates: *[]*string,
	KmsCustomEndpoint: *string,
	LoggingCustomEndpoint: *string,
	MemcacheCustomEndpoint: *string,
	MlEngineCustomEndpoint: *string,
	MonitoringCustomEndpoint: *string,
	NetworkConnectivityCustomEndpoint: *string,
	NetworkManagementCustomEndpoint: *string,
	NetworkSecurityCustomEndpoint: *string,
	NetworkServicesCustomEndpoint: *string,
	NotebooksCustomEndpoint: *string,
	OrgPolicyCustomEndpoint: *string,
	OsConfigCustomEndpoint: *string,
	OsLoginCustomEndpoint: *string,
	PrivatecaCustomEndpoint: *string,
	Project: *string,
	PubsubCustomEndpoint: *string,
	PubsubLiteCustomEndpoint: *string,
	RecaptchaEnterpriseCustomEndpoint: *string,
	RedisCustomEndpoint: *string,
	Region: *string,
	RequestReason: *string,
	RequestTimeout: *string,
	ResourceManagerCustomEndpoint: *string,
	ResourceManagerV3CustomEndpoint: *string,
	RuntimeconfigCustomEndpoint: *string,
	RuntimeConfigCustomEndpoint: *string,
	Scopes: *[]*string,
	SecretManagerCustomEndpoint: *string,
	SecurityCenterCustomEndpoint: *string,
	SecurityScannerCustomEndpoint: *string,
	ServiceDirectoryCustomEndpoint: *string,
	ServiceManagementCustomEndpoint: *string,
	ServiceNetworkingCustomEndpoint: *string,
	ServiceUsageCustomEndpoint: *string,
	SourceRepoCustomEndpoint: *string,
	SpannerCustomEndpoint: *string,
	SqlCustomEndpoint: *string,
	StorageCustomEndpoint: *string,
	StorageTransferCustomEndpoint: *string,
	TagsCustomEndpoint: *string,
	TagsLocationCustomEndpoint: *string,
	TpuCustomEndpoint: *string,
	UserProjectOverride: interface{},
	VertexAiCustomEndpoint: *string,
	VpcAccessCustomEndpoint: *string,
	WorkflowsCustomEndpoint: *string,
	WorkstationsCustomEndpoint: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#access_token GoogleBetaProvider#access_token}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint">ApiGatewayCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching">Batching</a></code> | <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a></code> | batching block. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject">BillingProject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#billing_project GoogleBetaProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint">Cloudbuildv2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">CloudBuildWorkerPoolCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIotCustomEndpoint">CloudIotCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_iot_custom_endpoint GoogleBetaProvider#cloud_iot_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials">Credentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#credentials GoogleBetaProvider#credentials}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint">DatabaseMigrationServiceCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint">DataformCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastoreCustomEndpoint">DatastoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#datastore_custom_endpoint GoogleBetaProvider#datastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint">FirebaseCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint">FirebaseDatabaseCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint">FirebaseHostingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint">FirebaseStorageCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gameServicesCustomEndpoint">GameServicesCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#game_services_custom_endpoint GoogleBetaProvider#game_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint">GkehubFeatureCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint">GkeonpremCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint">NetworkSecurityCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#project GoogleBetaProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#region GoogleBetaProvider#region}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason">RequestReason</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#request_reason GoogleBetaProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#request_timeout GoogleBetaProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint">RuntimeconfigCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint">RuntimeConfigCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#scopes GoogleBetaProvider#scopes}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint">SecurityScannerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint">ServiceDirectoryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride">UserProjectOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#user_project_override GoogleBetaProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint">WorkstationsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#zone GoogleBetaProvider#zone}. |

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint"></a>

```go
AccessApprovalCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}.

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```go
AccessContextManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#access_token GoogleBetaProvider#access_token}.

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```go
ActiveDirectoryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#alias GoogleBetaProvider#alias}

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint"></a>

```go
AlloydbCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}.

---

##### `ApiGatewayCustomEndpoint`<sup>Optional</sup> <a name="ApiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint"></a>

```go
ApiGatewayCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}.

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint"></a>

```go
ApigeeCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}.

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint"></a>

```go
ApikeysCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}.

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint"></a>

```go
AppEngineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}.

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```go
ArtifactRegistryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}.

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```go
AssuredWorkloadsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}.

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching"></a>

```go
Batching GoogleBetaProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#batching GoogleBetaProvider#batching}

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint"></a>

```go
BeyondcorpCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}.

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```go
BigqueryAnalyticsHubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```go
BigqueryConnectionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}.

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint"></a>

```go
BigQueryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}.

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```go
BigqueryDatapolicyCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```go
BigqueryDataTransferCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```go
BigqueryReservationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}.

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint"></a>

```go
BigtableCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}.

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint"></a>

```go
BillingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}.

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject"></a>

```go
BillingProject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#billing_project GoogleBetaProvider#billing_project}.

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```go
BinaryAuthorizationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}.

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint"></a>

```go
CertificateManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}.

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint"></a>

```go
CloudAssetCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}.

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint"></a>

```go
CloudBillingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}.

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint"></a>

```go
CloudBuildCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}.

---

##### `Cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```go
Cloudbuildv2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}.

---

##### `CloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```go
CloudBuildWorkerPoolCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint"></a>

```go
ClouddeployCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}.

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```go
Cloudfunctions2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}.

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```go
CloudFunctionsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}.

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```go
CloudIdentityCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}.

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint"></a>

```go
CloudIdsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}.

---

##### `CloudIotCustomEndpoint`<sup>Optional</sup> <a name="CloudIotCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIotCustomEndpoint"></a>

```go
CloudIotCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_iot_custom_endpoint GoogleBetaProvider#cloud_iot_custom_endpoint}.

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```go
CloudResourceManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}.

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint"></a>

```go
CloudRunCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}.

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```go
CloudRunV2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}.

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```go
CloudSchedulerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}.

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint"></a>

```go
CloudTasksCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}.

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint"></a>

```go
ComposerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}.

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint"></a>

```go
ComputeCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}.

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```go
ContainerAnalysisCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}.

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint"></a>

```go
ContainerAttachedCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}.

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint"></a>

```go
ContainerAwsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}.

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint"></a>

```go
ContainerAzureCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}.

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint"></a>

```go
ContainerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials"></a>

```go
Credentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#credentials GoogleBetaProvider#credentials}.

---

##### `DatabaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```go
DatabaseMigrationServiceCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}.

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint"></a>

```go
DataCatalogCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}.

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint"></a>

```go
DataflowCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}.

---

##### `DataformCustomEndpoint`<sup>Optional</sup> <a name="DataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint"></a>

```go
DataformCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}.

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint"></a>

```go
DataFusionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}.

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```go
DataLossPreventionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}.

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint"></a>

```go
DataplexCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}.

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint"></a>

```go
DataprocCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}.

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```go
DataprocMetastoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}.

---

##### `DatastoreCustomEndpoint`<sup>Optional</sup> <a name="DatastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastoreCustomEndpoint"></a>

```go
DatastoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#datastore_custom_endpoint GoogleBetaProvider#datastore_custom_endpoint}.

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint"></a>

```go
DatastreamCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}.

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```go
DeploymentManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}.

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint"></a>

```go
DialogflowCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}.

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```go
DialogflowCxCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}.

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint"></a>

```go
DnsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}.

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint"></a>

```go
DocumentAiCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}.

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint"></a>

```go
EssentialContactsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}.

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint"></a>

```go
EventarcCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}.

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint"></a>

```go
FilestoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}.

---

##### `FirebaseCustomEndpoint`<sup>Optional</sup> <a name="FirebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint"></a>

```go
FirebaseCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}.

---

##### `FirebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="FirebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint"></a>

```go
FirebaseDatabaseCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}.

---

##### `FirebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="FirebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint"></a>

```go
FirebaseHostingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}.

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint"></a>

```go
FirebaserulesCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}.

---

##### `FirebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="FirebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint"></a>

```go
FirebaseStorageCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}.

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint"></a>

```go
FirestoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}.

---

##### `GameServicesCustomEndpoint`<sup>Optional</sup> <a name="GameServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gameServicesCustomEndpoint"></a>

```go
GameServicesCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#game_services_custom_endpoint GoogleBetaProvider#game_services_custom_endpoint}.

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint"></a>

```go
GkeBackupCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}.

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint"></a>

```go
GkeHubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}.

---

##### `GkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint"></a>

```go
GkehubFeatureCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}.

---

##### `GkeonpremCustomEndpoint`<sup>Optional</sup> <a name="GkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint"></a>

```go
GkeonpremCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}.

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint"></a>

```go
HealthcareCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}.

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint"></a>

```go
Iam2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}.

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint"></a>

```go
IamBetaCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}.

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```go
IamCredentialsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}.

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint"></a>

```go
IamCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}.

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```go
IamWorkforcePoolCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}.

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint"></a>

```go
IapCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}.

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint"></a>

```go
IdentityPlatformCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}.

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount"></a>

```go
ImpersonateServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}.

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates"></a>

```go
ImpersonateServiceAccountDelegates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}.

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint"></a>

```go
KmsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}.

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint"></a>

```go
LoggingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}.

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint"></a>

```go
MemcacheCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}.

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint"></a>

```go
MlEngineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}.

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint"></a>

```go
MonitoringCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}.

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```go
NetworkConnectivityCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}.

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint"></a>

```go
NetworkManagementCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}.

---

##### `NetworkSecurityCustomEndpoint`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint"></a>

```go
NetworkSecurityCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}.

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint"></a>

```go
NetworkServicesCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}.

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint"></a>

```go
NotebooksCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}.

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint"></a>

```go
OrgPolicyCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}.

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint"></a>

```go
OsConfigCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}.

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint"></a>

```go
OsLoginCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}.

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint"></a>

```go
PrivatecaCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#project GoogleBetaProvider#project}.

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint"></a>

```go
PubsubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}.

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```go
PubsubLiteCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}.

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```go
RecaptchaEnterpriseCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint"></a>

```go
RedisCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#region GoogleBetaProvider#region}.

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason"></a>

```go
RequestReason *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#request_reason GoogleBetaProvider#request_reason}.

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout"></a>

```go
RequestTimeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#request_timeout GoogleBetaProvider#request_timeout}.

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint"></a>

```go
ResourceManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}.

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```go
ResourceManagerV3CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}.

---

##### `RuntimeconfigCustomEndpoint`<sup>Optional</sup> <a name="RuntimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint"></a>

```go
RuntimeconfigCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}.

---

##### `RuntimeConfigCustomEndpoint`<sup>Optional</sup> <a name="RuntimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint"></a>

```go
RuntimeConfigCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#scopes GoogleBetaProvider#scopes}.

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint"></a>

```go
SecretManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}.

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint"></a>

```go
SecurityCenterCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}.

---

##### `SecurityScannerCustomEndpoint`<sup>Optional</sup> <a name="SecurityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint"></a>

```go
SecurityScannerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}.

---

##### `ServiceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ServiceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint"></a>

```go
ServiceDirectoryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}.

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint"></a>

```go
ServiceManagementCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}.

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```go
ServiceNetworkingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}.

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint"></a>

```go
ServiceUsageCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}.

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint"></a>

```go
SourceRepoCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}.

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint"></a>

```go
SpannerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}.

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint"></a>

```go
SqlCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}.

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint"></a>

```go
StorageCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}.

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint"></a>

```go
StorageTransferCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}.

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint"></a>

```go
TagsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}.

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint"></a>

```go
TagsLocationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}.

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint"></a>

```go
TpuCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}.

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride"></a>

```go
UserProjectOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#user_project_override GoogleBetaProvider#user_project_override}.

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint"></a>

```go
VertexAiCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}.

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint"></a>

```go
VpcAccessCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}.

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint"></a>

```go
WorkflowsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}.

---

##### `WorkstationsCustomEndpoint`<sup>Optional</sup> <a name="WorkstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint"></a>

```go
WorkstationsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs#zone GoogleBetaProvider#zone}.

---



