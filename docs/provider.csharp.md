# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google-beta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBetaProvider <a name="GoogleBetaProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs google-beta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBetaProvider(Construct Scope, string Id, GoogleBetaProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig">GoogleBetaProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig">GoogleBetaProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint">ResetAccessApprovalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint">ResetAccessContextManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint">ResetActiveDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAddTerraformAttributionLabel">ResetAddTerraformAttributionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint">ResetAlloydbCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint">ResetApiGatewayCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint">ResetApigeeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint">ResetApikeysCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint">ResetAppEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApphubCustomEndpoint">ResetApphubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint">ResetArtifactRegistryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint">ResetAssuredWorkloadsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBackupDrCustomEndpoint">ResetBackupDrCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching">ResetBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint">ResetBeyondcorpCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBiglakeCustomEndpoint">ResetBiglakeCustomEndpoint</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBlockchainNodeEngineCustomEndpoint">ResetBlockchainNodeEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint">ResetCertificateManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetChronicleCustomEndpoint">ResetChronicleCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint">ResetCloudAssetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint">ResetCloudBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint">ResetCloudBuildCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint">ResetCloudbuildv2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint">ResetCloudBuildWorkerPoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint">ResetClouddeployCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddomainsCustomEndpoint">ResetClouddomainsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint">ResetCloudfunctions2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint">ResetCloudFunctionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint">ResetCloudIdentityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint">ResetCloudIdsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudQuotasCustomEndpoint">ResetCloudQuotasCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint">ResetCloudResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint">ResetCloudRunCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint">ResetCloudRunV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint">ResetCloudSchedulerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint">ResetCloudTasksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetColabCustomEndpoint">ResetColabCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint">ResetComposerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint">ResetComputeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint">ResetContainerAnalysisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint">ResetContainerAttachedCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint">ResetContainerAwsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint">ResetContainerAzureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint">ResetContainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCoreBillingCustomEndpoint">ResetCoreBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint">ResetDatabaseMigrationServiceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint">ResetDataCatalogCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint">ResetDataflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint">ResetDataformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint">ResetDataFusionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint">ResetDataLossPreventionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataPipelineCustomEndpoint">ResetDataPipelineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint">ResetDataplexCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint">ResetDataprocCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocGdcCustomEndpoint">ResetDataprocGdcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint">ResetDataprocMetastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint">ResetDatastreamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDefaultLabels">ResetDefaultLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint">ResetDeploymentManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeveloperConnectCustomEndpoint">ResetDeveloperConnectCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint">ResetDialogflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint">ResetDialogflowCxCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDiscoveryEngineCustomEndpoint">ResetDiscoveryEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint">ResetDnsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint">ResetDocumentAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiWarehouseCustomEndpoint">ResetDocumentAiWarehouseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgecontainerCustomEndpoint">ResetEdgecontainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgenetworkCustomEndpoint">ResetEdgenetworkCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint">ResetEssentialContactsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint">ResetEventarcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint">ResetFilestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseAppCheckCustomEndpoint">ResetFirebaseAppCheckCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint">ResetFirebaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint">ResetFirebaseDatabaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseExtensionsCustomEndpoint">ResetFirebaseExtensionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint">ResetFirebaseHostingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint">ResetFirebaserulesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint">ResetFirebaseStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint">ResetFirestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGeminiCustomEndpoint">ResetGeminiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint">ResetGkeBackupCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHub2CustomEndpoint">ResetGkeHub2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint">ResetGkeHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint">ResetGkehubFeatureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint">ResetGkeonpremCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint">ResetHealthcareCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint">ResetIam2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam3CustomEndpoint">ResetIam3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint">ResetIamBetaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint">ResetIamCredentialsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint">ResetIamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint">ResetIamWorkforcePoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint">ResetIapCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint">ResetIdentityPlatformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount">ResetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates">ResetImpersonateServiceAccountDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationConnectorsCustomEndpoint">ResetIntegrationConnectorsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationsCustomEndpoint">ResetIntegrationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint">ResetKmsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint">ResetLoggingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLookerCustomEndpoint">ResetLookerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetManagedKafkaCustomEndpoint">ResetManagedKafkaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint">ResetMemcacheCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemorystoreCustomEndpoint">ResetMemorystoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMigrationCenterCustomEndpoint">ResetMigrationCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint">ResetMlEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint">ResetMonitoringCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetappCustomEndpoint">ResetNetappCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint">ResetNetworkConnectivityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint">ResetNetworkManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint">ResetNetworkSecurityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint">ResetNetworkServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint">ResetNotebooksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOracleDatabaseCustomEndpoint">ResetOracleDatabaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint">ResetOrgPolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint">ResetOsConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint">ResetOsLoginCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParallelstoreCustomEndpoint">ResetParallelstoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParameterManagerCustomEndpoint">ResetParameterManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParameterManagerRegionalCustomEndpoint">ResetParameterManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint">ResetPrivatecaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivilegedAccessManagerCustomEndpoint">ResetPrivilegedAccessManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPublicCaCustomEndpoint">ResetPublicCaCustomEndpoint</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerRegionalCustomEndpoint">ResetSecretManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecureSourceManagerCustomEndpoint">ResetSecureSourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint">ResetSecurityCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterManagementCustomEndpoint">ResetSecurityCenterManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterV2CustomEndpoint">ResetSecurityCenterV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecuritypostureCustomEndpoint">ResetSecuritypostureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint">ResetSecurityScannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint">ResetServiceDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint">ResetServiceManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint">ResetServiceNetworkingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint">ResetServiceUsageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSiteVerificationCustomEndpoint">ResetSiteVerificationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint">ResetSourceRepoCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint">ResetSpannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint">ResetSqlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint">ResetStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageInsightsCustomEndpoint">ResetStorageInsightsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint">ResetStorageTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint">ResetTagsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint">ResetTagsLocationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTerraformAttributionLabelAdditionStrategy">ResetTerraformAttributionLabelAdditionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint">ResetTpuCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuV2CustomEndpoint">ResetTpuV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTranscoderCustomEndpoint">ResetTranscoderCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUniverseDomain">ResetUniverseDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride">ResetUserProjectOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint">ResetVertexAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVmwareengineCustomEndpoint">ResetVmwareengineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint">ResetVpcAccessCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkbenchCustomEndpoint">ResetWorkbenchCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint">ResetWorkflowsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint">ResetWorkstationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessApprovalCustomEndpoint` <a name="ResetAccessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint"></a>

```csharp
private void ResetAccessApprovalCustomEndpoint()
```

##### `ResetAccessContextManagerCustomEndpoint` <a name="ResetAccessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint"></a>

```csharp
private void ResetAccessContextManagerCustomEndpoint()
```

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetActiveDirectoryCustomEndpoint` <a name="ResetActiveDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint"></a>

```csharp
private void ResetActiveDirectoryCustomEndpoint()
```

##### `ResetAddTerraformAttributionLabel` <a name="ResetAddTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAddTerraformAttributionLabel"></a>

```csharp
private void ResetAddTerraformAttributionLabel()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAlloydbCustomEndpoint` <a name="ResetAlloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint"></a>

```csharp
private void ResetAlloydbCustomEndpoint()
```

##### `ResetApiGatewayCustomEndpoint` <a name="ResetApiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint"></a>

```csharp
private void ResetApiGatewayCustomEndpoint()
```

##### `ResetApigeeCustomEndpoint` <a name="ResetApigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint"></a>

```csharp
private void ResetApigeeCustomEndpoint()
```

##### `ResetApikeysCustomEndpoint` <a name="ResetApikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint"></a>

```csharp
private void ResetApikeysCustomEndpoint()
```

##### `ResetAppEngineCustomEndpoint` <a name="ResetAppEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint"></a>

```csharp
private void ResetAppEngineCustomEndpoint()
```

##### `ResetApphubCustomEndpoint` <a name="ResetApphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApphubCustomEndpoint"></a>

```csharp
private void ResetApphubCustomEndpoint()
```

##### `ResetArtifactRegistryCustomEndpoint` <a name="ResetArtifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint"></a>

```csharp
private void ResetArtifactRegistryCustomEndpoint()
```

##### `ResetAssuredWorkloadsCustomEndpoint` <a name="ResetAssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```csharp
private void ResetAssuredWorkloadsCustomEndpoint()
```

##### `ResetBackupDrCustomEndpoint` <a name="ResetBackupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBackupDrCustomEndpoint"></a>

```csharp
private void ResetBackupDrCustomEndpoint()
```

##### `ResetBatching` <a name="ResetBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching"></a>

```csharp
private void ResetBatching()
```

##### `ResetBeyondcorpCustomEndpoint` <a name="ResetBeyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint"></a>

```csharp
private void ResetBeyondcorpCustomEndpoint()
```

##### `ResetBiglakeCustomEndpoint` <a name="ResetBiglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBiglakeCustomEndpoint"></a>

```csharp
private void ResetBiglakeCustomEndpoint()
```

##### `ResetBigqueryAnalyticsHubCustomEndpoint` <a name="ResetBigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```csharp
private void ResetBigqueryAnalyticsHubCustomEndpoint()
```

##### `ResetBigqueryConnectionCustomEndpoint` <a name="ResetBigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryConnectionCustomEndpoint"></a>

```csharp
private void ResetBigqueryConnectionCustomEndpoint()
```

##### `ResetBigQueryCustomEndpoint` <a name="ResetBigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigQueryCustomEndpoint"></a>

```csharp
private void ResetBigQueryCustomEndpoint()
```

##### `ResetBigqueryDatapolicyCustomEndpoint` <a name="ResetBigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```csharp
private void ResetBigqueryDatapolicyCustomEndpoint()
```

##### `ResetBigqueryDataTransferCustomEndpoint` <a name="ResetBigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```csharp
private void ResetBigqueryDataTransferCustomEndpoint()
```

##### `ResetBigqueryReservationCustomEndpoint` <a name="ResetBigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryReservationCustomEndpoint"></a>

```csharp
private void ResetBigqueryReservationCustomEndpoint()
```

##### `ResetBigtableCustomEndpoint` <a name="ResetBigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigtableCustomEndpoint"></a>

```csharp
private void ResetBigtableCustomEndpoint()
```

##### `ResetBillingCustomEndpoint` <a name="ResetBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingCustomEndpoint"></a>

```csharp
private void ResetBillingCustomEndpoint()
```

##### `ResetBillingProject` <a name="ResetBillingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingProject"></a>

```csharp
private void ResetBillingProject()
```

##### `ResetBinaryAuthorizationCustomEndpoint` <a name="ResetBinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```csharp
private void ResetBinaryAuthorizationCustomEndpoint()
```

##### `ResetBlockchainNodeEngineCustomEndpoint` <a name="ResetBlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```csharp
private void ResetBlockchainNodeEngineCustomEndpoint()
```

##### `ResetCertificateManagerCustomEndpoint` <a name="ResetCertificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint"></a>

```csharp
private void ResetCertificateManagerCustomEndpoint()
```

##### `ResetChronicleCustomEndpoint` <a name="ResetChronicleCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetChronicleCustomEndpoint"></a>

```csharp
private void ResetChronicleCustomEndpoint()
```

##### `ResetCloudAssetCustomEndpoint` <a name="ResetCloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint"></a>

```csharp
private void ResetCloudAssetCustomEndpoint()
```

##### `ResetCloudBillingCustomEndpoint` <a name="ResetCloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint"></a>

```csharp
private void ResetCloudBillingCustomEndpoint()
```

##### `ResetCloudBuildCustomEndpoint` <a name="ResetCloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint"></a>

```csharp
private void ResetCloudBuildCustomEndpoint()
```

##### `ResetCloudbuildv2CustomEndpoint` <a name="ResetCloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint"></a>

```csharp
private void ResetCloudbuildv2CustomEndpoint()
```

##### `ResetCloudBuildWorkerPoolCustomEndpoint` <a name="ResetCloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```csharp
private void ResetCloudBuildWorkerPoolCustomEndpoint()
```

##### `ResetClouddeployCustomEndpoint` <a name="ResetClouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint"></a>

```csharp
private void ResetClouddeployCustomEndpoint()
```

##### `ResetClouddomainsCustomEndpoint` <a name="ResetClouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddomainsCustomEndpoint"></a>

```csharp
private void ResetClouddomainsCustomEndpoint()
```

##### `ResetCloudfunctions2CustomEndpoint` <a name="ResetCloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint"></a>

```csharp
private void ResetCloudfunctions2CustomEndpoint()
```

##### `ResetCloudFunctionsCustomEndpoint` <a name="ResetCloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint"></a>

```csharp
private void ResetCloudFunctionsCustomEndpoint()
```

##### `ResetCloudIdentityCustomEndpoint` <a name="ResetCloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint"></a>

```csharp
private void ResetCloudIdentityCustomEndpoint()
```

##### `ResetCloudIdsCustomEndpoint` <a name="ResetCloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint"></a>

```csharp
private void ResetCloudIdsCustomEndpoint()
```

##### `ResetCloudQuotasCustomEndpoint` <a name="ResetCloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudQuotasCustomEndpoint"></a>

```csharp
private void ResetCloudQuotasCustomEndpoint()
```

##### `ResetCloudResourceManagerCustomEndpoint` <a name="ResetCloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint"></a>

```csharp
private void ResetCloudResourceManagerCustomEndpoint()
```

##### `ResetCloudRunCustomEndpoint` <a name="ResetCloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint"></a>

```csharp
private void ResetCloudRunCustomEndpoint()
```

##### `ResetCloudRunV2CustomEndpoint` <a name="ResetCloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint"></a>

```csharp
private void ResetCloudRunV2CustomEndpoint()
```

##### `ResetCloudSchedulerCustomEndpoint` <a name="ResetCloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint"></a>

```csharp
private void ResetCloudSchedulerCustomEndpoint()
```

##### `ResetCloudTasksCustomEndpoint` <a name="ResetCloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint"></a>

```csharp
private void ResetCloudTasksCustomEndpoint()
```

##### `ResetColabCustomEndpoint` <a name="ResetColabCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetColabCustomEndpoint"></a>

```csharp
private void ResetColabCustomEndpoint()
```

##### `ResetComposerCustomEndpoint` <a name="ResetComposerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint"></a>

```csharp
private void ResetComposerCustomEndpoint()
```

##### `ResetComputeCustomEndpoint` <a name="ResetComputeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint"></a>

```csharp
private void ResetComputeCustomEndpoint()
```

##### `ResetContainerAnalysisCustomEndpoint` <a name="ResetContainerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint"></a>

```csharp
private void ResetContainerAnalysisCustomEndpoint()
```

##### `ResetContainerAttachedCustomEndpoint` <a name="ResetContainerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint"></a>

```csharp
private void ResetContainerAttachedCustomEndpoint()
```

##### `ResetContainerAwsCustomEndpoint` <a name="ResetContainerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint"></a>

```csharp
private void ResetContainerAwsCustomEndpoint()
```

##### `ResetContainerAzureCustomEndpoint` <a name="ResetContainerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint"></a>

```csharp
private void ResetContainerAzureCustomEndpoint()
```

##### `ResetContainerCustomEndpoint` <a name="ResetContainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint"></a>

```csharp
private void ResetContainerCustomEndpoint()
```

##### `ResetCoreBillingCustomEndpoint` <a name="ResetCoreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCoreBillingCustomEndpoint"></a>

```csharp
private void ResetCoreBillingCustomEndpoint()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetDatabaseMigrationServiceCustomEndpoint` <a name="ResetDatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```csharp
private void ResetDatabaseMigrationServiceCustomEndpoint()
```

##### `ResetDataCatalogCustomEndpoint` <a name="ResetDataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint"></a>

```csharp
private void ResetDataCatalogCustomEndpoint()
```

##### `ResetDataflowCustomEndpoint` <a name="ResetDataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint"></a>

```csharp
private void ResetDataflowCustomEndpoint()
```

##### `ResetDataformCustomEndpoint` <a name="ResetDataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint"></a>

```csharp
private void ResetDataformCustomEndpoint()
```

##### `ResetDataFusionCustomEndpoint` <a name="ResetDataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint"></a>

```csharp
private void ResetDataFusionCustomEndpoint()
```

##### `ResetDataLossPreventionCustomEndpoint` <a name="ResetDataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint"></a>

```csharp
private void ResetDataLossPreventionCustomEndpoint()
```

##### `ResetDataPipelineCustomEndpoint` <a name="ResetDataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataPipelineCustomEndpoint"></a>

```csharp
private void ResetDataPipelineCustomEndpoint()
```

##### `ResetDataplexCustomEndpoint` <a name="ResetDataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint"></a>

```csharp
private void ResetDataplexCustomEndpoint()
```

##### `ResetDataprocCustomEndpoint` <a name="ResetDataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint"></a>

```csharp
private void ResetDataprocCustomEndpoint()
```

##### `ResetDataprocGdcCustomEndpoint` <a name="ResetDataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocGdcCustomEndpoint"></a>

```csharp
private void ResetDataprocGdcCustomEndpoint()
```

##### `ResetDataprocMetastoreCustomEndpoint` <a name="ResetDataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint"></a>

```csharp
private void ResetDataprocMetastoreCustomEndpoint()
```

##### `ResetDatastreamCustomEndpoint` <a name="ResetDatastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint"></a>

```csharp
private void ResetDatastreamCustomEndpoint()
```

##### `ResetDefaultLabels` <a name="ResetDefaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDefaultLabels"></a>

```csharp
private void ResetDefaultLabels()
```

##### `ResetDeploymentManagerCustomEndpoint` <a name="ResetDeploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint"></a>

```csharp
private void ResetDeploymentManagerCustomEndpoint()
```

##### `ResetDeveloperConnectCustomEndpoint` <a name="ResetDeveloperConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeveloperConnectCustomEndpoint"></a>

```csharp
private void ResetDeveloperConnectCustomEndpoint()
```

##### `ResetDialogflowCustomEndpoint` <a name="ResetDialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint"></a>

```csharp
private void ResetDialogflowCustomEndpoint()
```

##### `ResetDialogflowCxCustomEndpoint` <a name="ResetDialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint"></a>

```csharp
private void ResetDialogflowCxCustomEndpoint()
```

##### `ResetDiscoveryEngineCustomEndpoint` <a name="ResetDiscoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDiscoveryEngineCustomEndpoint"></a>

```csharp
private void ResetDiscoveryEngineCustomEndpoint()
```

##### `ResetDnsCustomEndpoint` <a name="ResetDnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint"></a>

```csharp
private void ResetDnsCustomEndpoint()
```

##### `ResetDocumentAiCustomEndpoint` <a name="ResetDocumentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint"></a>

```csharp
private void ResetDocumentAiCustomEndpoint()
```

##### `ResetDocumentAiWarehouseCustomEndpoint` <a name="ResetDocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```csharp
private void ResetDocumentAiWarehouseCustomEndpoint()
```

##### `ResetEdgecontainerCustomEndpoint` <a name="ResetEdgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgecontainerCustomEndpoint"></a>

```csharp
private void ResetEdgecontainerCustomEndpoint()
```

##### `ResetEdgenetworkCustomEndpoint` <a name="ResetEdgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgenetworkCustomEndpoint"></a>

```csharp
private void ResetEdgenetworkCustomEndpoint()
```

##### `ResetEssentialContactsCustomEndpoint` <a name="ResetEssentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint"></a>

```csharp
private void ResetEssentialContactsCustomEndpoint()
```

##### `ResetEventarcCustomEndpoint` <a name="ResetEventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint"></a>

```csharp
private void ResetEventarcCustomEndpoint()
```

##### `ResetFilestoreCustomEndpoint` <a name="ResetFilestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint"></a>

```csharp
private void ResetFilestoreCustomEndpoint()
```

##### `ResetFirebaseAppCheckCustomEndpoint` <a name="ResetFirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```csharp
private void ResetFirebaseAppCheckCustomEndpoint()
```

##### `ResetFirebaseCustomEndpoint` <a name="ResetFirebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint"></a>

```csharp
private void ResetFirebaseCustomEndpoint()
```

##### `ResetFirebaseDatabaseCustomEndpoint` <a name="ResetFirebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint"></a>

```csharp
private void ResetFirebaseDatabaseCustomEndpoint()
```

##### `ResetFirebaseExtensionsCustomEndpoint` <a name="ResetFirebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseExtensionsCustomEndpoint"></a>

```csharp
private void ResetFirebaseExtensionsCustomEndpoint()
```

##### `ResetFirebaseHostingCustomEndpoint` <a name="ResetFirebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint"></a>

```csharp
private void ResetFirebaseHostingCustomEndpoint()
```

##### `ResetFirebaserulesCustomEndpoint` <a name="ResetFirebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint"></a>

```csharp
private void ResetFirebaserulesCustomEndpoint()
```

##### `ResetFirebaseStorageCustomEndpoint` <a name="ResetFirebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint"></a>

```csharp
private void ResetFirebaseStorageCustomEndpoint()
```

##### `ResetFirestoreCustomEndpoint` <a name="ResetFirestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint"></a>

```csharp
private void ResetFirestoreCustomEndpoint()
```

##### `ResetGeminiCustomEndpoint` <a name="ResetGeminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGeminiCustomEndpoint"></a>

```csharp
private void ResetGeminiCustomEndpoint()
```

##### `ResetGkeBackupCustomEndpoint` <a name="ResetGkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint"></a>

```csharp
private void ResetGkeBackupCustomEndpoint()
```

##### `ResetGkeHub2CustomEndpoint` <a name="ResetGkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHub2CustomEndpoint"></a>

```csharp
private void ResetGkeHub2CustomEndpoint()
```

##### `ResetGkeHubCustomEndpoint` <a name="ResetGkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint"></a>

```csharp
private void ResetGkeHubCustomEndpoint()
```

##### `ResetGkehubFeatureCustomEndpoint` <a name="ResetGkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint"></a>

```csharp
private void ResetGkehubFeatureCustomEndpoint()
```

##### `ResetGkeonpremCustomEndpoint` <a name="ResetGkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint"></a>

```csharp
private void ResetGkeonpremCustomEndpoint()
```

##### `ResetHealthcareCustomEndpoint` <a name="ResetHealthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint"></a>

```csharp
private void ResetHealthcareCustomEndpoint()
```

##### `ResetIam2CustomEndpoint` <a name="ResetIam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint"></a>

```csharp
private void ResetIam2CustomEndpoint()
```

##### `ResetIam3CustomEndpoint` <a name="ResetIam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam3CustomEndpoint"></a>

```csharp
private void ResetIam3CustomEndpoint()
```

##### `ResetIamBetaCustomEndpoint` <a name="ResetIamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint"></a>

```csharp
private void ResetIamBetaCustomEndpoint()
```

##### `ResetIamCredentialsCustomEndpoint` <a name="ResetIamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint"></a>

```csharp
private void ResetIamCredentialsCustomEndpoint()
```

##### `ResetIamCustomEndpoint` <a name="ResetIamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint"></a>

```csharp
private void ResetIamCustomEndpoint()
```

##### `ResetIamWorkforcePoolCustomEndpoint` <a name="ResetIamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```csharp
private void ResetIamWorkforcePoolCustomEndpoint()
```

##### `ResetIapCustomEndpoint` <a name="ResetIapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint"></a>

```csharp
private void ResetIapCustomEndpoint()
```

##### `ResetIdentityPlatformCustomEndpoint` <a name="ResetIdentityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint"></a>

```csharp
private void ResetIdentityPlatformCustomEndpoint()
```

##### `ResetImpersonateServiceAccount` <a name="ResetImpersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount"></a>

```csharp
private void ResetImpersonateServiceAccount()
```

##### `ResetImpersonateServiceAccountDelegates` <a name="ResetImpersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates"></a>

```csharp
private void ResetImpersonateServiceAccountDelegates()
```

##### `ResetIntegrationConnectorsCustomEndpoint` <a name="ResetIntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```csharp
private void ResetIntegrationConnectorsCustomEndpoint()
```

##### `ResetIntegrationsCustomEndpoint` <a name="ResetIntegrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationsCustomEndpoint"></a>

```csharp
private void ResetIntegrationsCustomEndpoint()
```

##### `ResetKmsCustomEndpoint` <a name="ResetKmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint"></a>

```csharp
private void ResetKmsCustomEndpoint()
```

##### `ResetLoggingCustomEndpoint` <a name="ResetLoggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint"></a>

```csharp
private void ResetLoggingCustomEndpoint()
```

##### `ResetLookerCustomEndpoint` <a name="ResetLookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLookerCustomEndpoint"></a>

```csharp
private void ResetLookerCustomEndpoint()
```

##### `ResetManagedKafkaCustomEndpoint` <a name="ResetManagedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetManagedKafkaCustomEndpoint"></a>

```csharp
private void ResetManagedKafkaCustomEndpoint()
```

##### `ResetMemcacheCustomEndpoint` <a name="ResetMemcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint"></a>

```csharp
private void ResetMemcacheCustomEndpoint()
```

##### `ResetMemorystoreCustomEndpoint` <a name="ResetMemorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemorystoreCustomEndpoint"></a>

```csharp
private void ResetMemorystoreCustomEndpoint()
```

##### `ResetMigrationCenterCustomEndpoint` <a name="ResetMigrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMigrationCenterCustomEndpoint"></a>

```csharp
private void ResetMigrationCenterCustomEndpoint()
```

##### `ResetMlEngineCustomEndpoint` <a name="ResetMlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint"></a>

```csharp
private void ResetMlEngineCustomEndpoint()
```

##### `ResetMonitoringCustomEndpoint` <a name="ResetMonitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint"></a>

```csharp
private void ResetMonitoringCustomEndpoint()
```

##### `ResetNetappCustomEndpoint` <a name="ResetNetappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetappCustomEndpoint"></a>

```csharp
private void ResetNetappCustomEndpoint()
```

##### `ResetNetworkConnectivityCustomEndpoint` <a name="ResetNetworkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint"></a>

```csharp
private void ResetNetworkConnectivityCustomEndpoint()
```

##### `ResetNetworkManagementCustomEndpoint` <a name="ResetNetworkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint"></a>

```csharp
private void ResetNetworkManagementCustomEndpoint()
```

##### `ResetNetworkSecurityCustomEndpoint` <a name="ResetNetworkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint"></a>

```csharp
private void ResetNetworkSecurityCustomEndpoint()
```

##### `ResetNetworkServicesCustomEndpoint` <a name="ResetNetworkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint"></a>

```csharp
private void ResetNetworkServicesCustomEndpoint()
```

##### `ResetNotebooksCustomEndpoint` <a name="ResetNotebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint"></a>

```csharp
private void ResetNotebooksCustomEndpoint()
```

##### `ResetOracleDatabaseCustomEndpoint` <a name="ResetOracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOracleDatabaseCustomEndpoint"></a>

```csharp
private void ResetOracleDatabaseCustomEndpoint()
```

##### `ResetOrgPolicyCustomEndpoint` <a name="ResetOrgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint"></a>

```csharp
private void ResetOrgPolicyCustomEndpoint()
```

##### `ResetOsConfigCustomEndpoint` <a name="ResetOsConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint"></a>

```csharp
private void ResetOsConfigCustomEndpoint()
```

##### `ResetOsLoginCustomEndpoint` <a name="ResetOsLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint"></a>

```csharp
private void ResetOsLoginCustomEndpoint()
```

##### `ResetParallelstoreCustomEndpoint` <a name="ResetParallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParallelstoreCustomEndpoint"></a>

```csharp
private void ResetParallelstoreCustomEndpoint()
```

##### `ResetParameterManagerCustomEndpoint` <a name="ResetParameterManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParameterManagerCustomEndpoint"></a>

```csharp
private void ResetParameterManagerCustomEndpoint()
```

##### `ResetParameterManagerRegionalCustomEndpoint` <a name="ResetParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParameterManagerRegionalCustomEndpoint"></a>

```csharp
private void ResetParameterManagerRegionalCustomEndpoint()
```

##### `ResetPrivatecaCustomEndpoint` <a name="ResetPrivatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint"></a>

```csharp
private void ResetPrivatecaCustomEndpoint()
```

##### `ResetPrivilegedAccessManagerCustomEndpoint` <a name="ResetPrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivilegedAccessManagerCustomEndpoint"></a>

```csharp
private void ResetPrivilegedAccessManagerCustomEndpoint()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublicCaCustomEndpoint` <a name="ResetPublicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPublicCaCustomEndpoint"></a>

```csharp
private void ResetPublicCaCustomEndpoint()
```

##### `ResetPubsubCustomEndpoint` <a name="ResetPubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubCustomEndpoint"></a>

```csharp
private void ResetPubsubCustomEndpoint()
```

##### `ResetPubsubLiteCustomEndpoint` <a name="ResetPubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubLiteCustomEndpoint"></a>

```csharp
private void ResetPubsubLiteCustomEndpoint()
```

##### `ResetRecaptchaEnterpriseCustomEndpoint` <a name="ResetRecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```csharp
private void ResetRecaptchaEnterpriseCustomEndpoint()
```

##### `ResetRedisCustomEndpoint` <a name="ResetRedisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRedisCustomEndpoint"></a>

```csharp
private void ResetRedisCustomEndpoint()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRequestReason` <a name="ResetRequestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestReason"></a>

```csharp
private void ResetRequestReason()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetResourceManagerCustomEndpoint` <a name="ResetResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerCustomEndpoint"></a>

```csharp
private void ResetResourceManagerCustomEndpoint()
```

##### `ResetResourceManagerV3CustomEndpoint` <a name="ResetResourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerV3CustomEndpoint"></a>

```csharp
private void ResetResourceManagerV3CustomEndpoint()
```

##### `ResetRuntimeconfigCustomEndpoint` <a name="ResetRuntimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeconfigCustomEndpoint"></a>

```csharp
private void ResetRuntimeconfigCustomEndpoint()
```

##### `ResetRuntimeConfigCustomEndpoint` <a name="ResetRuntimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeConfigCustomEndpoint"></a>

```csharp
private void ResetRuntimeConfigCustomEndpoint()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSecretManagerCustomEndpoint` <a name="ResetSecretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerCustomEndpoint"></a>

```csharp
private void ResetSecretManagerCustomEndpoint()
```

##### `ResetSecretManagerRegionalCustomEndpoint` <a name="ResetSecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerRegionalCustomEndpoint"></a>

```csharp
private void ResetSecretManagerRegionalCustomEndpoint()
```

##### `ResetSecureSourceManagerCustomEndpoint` <a name="ResetSecureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecureSourceManagerCustomEndpoint"></a>

```csharp
private void ResetSecureSourceManagerCustomEndpoint()
```

##### `ResetSecurityCenterCustomEndpoint` <a name="ResetSecurityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint"></a>

```csharp
private void ResetSecurityCenterCustomEndpoint()
```

##### `ResetSecurityCenterManagementCustomEndpoint` <a name="ResetSecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterManagementCustomEndpoint"></a>

```csharp
private void ResetSecurityCenterManagementCustomEndpoint()
```

##### `ResetSecurityCenterV2CustomEndpoint` <a name="ResetSecurityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterV2CustomEndpoint"></a>

```csharp
private void ResetSecurityCenterV2CustomEndpoint()
```

##### `ResetSecuritypostureCustomEndpoint` <a name="ResetSecuritypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecuritypostureCustomEndpoint"></a>

```csharp
private void ResetSecuritypostureCustomEndpoint()
```

##### `ResetSecurityScannerCustomEndpoint` <a name="ResetSecurityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint"></a>

```csharp
private void ResetSecurityScannerCustomEndpoint()
```

##### `ResetServiceDirectoryCustomEndpoint` <a name="ResetServiceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint"></a>

```csharp
private void ResetServiceDirectoryCustomEndpoint()
```

##### `ResetServiceManagementCustomEndpoint` <a name="ResetServiceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint"></a>

```csharp
private void ResetServiceManagementCustomEndpoint()
```

##### `ResetServiceNetworkingCustomEndpoint` <a name="ResetServiceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint"></a>

```csharp
private void ResetServiceNetworkingCustomEndpoint()
```

##### `ResetServiceUsageCustomEndpoint` <a name="ResetServiceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint"></a>

```csharp
private void ResetServiceUsageCustomEndpoint()
```

##### `ResetSiteVerificationCustomEndpoint` <a name="ResetSiteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSiteVerificationCustomEndpoint"></a>

```csharp
private void ResetSiteVerificationCustomEndpoint()
```

##### `ResetSourceRepoCustomEndpoint` <a name="ResetSourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint"></a>

```csharp
private void ResetSourceRepoCustomEndpoint()
```

##### `ResetSpannerCustomEndpoint` <a name="ResetSpannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint"></a>

```csharp
private void ResetSpannerCustomEndpoint()
```

##### `ResetSqlCustomEndpoint` <a name="ResetSqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint"></a>

```csharp
private void ResetSqlCustomEndpoint()
```

##### `ResetStorageCustomEndpoint` <a name="ResetStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint"></a>

```csharp
private void ResetStorageCustomEndpoint()
```

##### `ResetStorageInsightsCustomEndpoint` <a name="ResetStorageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageInsightsCustomEndpoint"></a>

```csharp
private void ResetStorageInsightsCustomEndpoint()
```

##### `ResetStorageTransferCustomEndpoint` <a name="ResetStorageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint"></a>

```csharp
private void ResetStorageTransferCustomEndpoint()
```

##### `ResetTagsCustomEndpoint` <a name="ResetTagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint"></a>

```csharp
private void ResetTagsCustomEndpoint()
```

##### `ResetTagsLocationCustomEndpoint` <a name="ResetTagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint"></a>

```csharp
private void ResetTagsLocationCustomEndpoint()
```

##### `ResetTerraformAttributionLabelAdditionStrategy` <a name="ResetTerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```csharp
private void ResetTerraformAttributionLabelAdditionStrategy()
```

##### `ResetTpuCustomEndpoint` <a name="ResetTpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint"></a>

```csharp
private void ResetTpuCustomEndpoint()
```

##### `ResetTpuV2CustomEndpoint` <a name="ResetTpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuV2CustomEndpoint"></a>

```csharp
private void ResetTpuV2CustomEndpoint()
```

##### `ResetTranscoderCustomEndpoint` <a name="ResetTranscoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTranscoderCustomEndpoint"></a>

```csharp
private void ResetTranscoderCustomEndpoint()
```

##### `ResetUniverseDomain` <a name="ResetUniverseDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUniverseDomain"></a>

```csharp
private void ResetUniverseDomain()
```

##### `ResetUserProjectOverride` <a name="ResetUserProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride"></a>

```csharp
private void ResetUserProjectOverride()
```

##### `ResetVertexAiCustomEndpoint` <a name="ResetVertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint"></a>

```csharp
private void ResetVertexAiCustomEndpoint()
```

##### `ResetVmwareengineCustomEndpoint` <a name="ResetVmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVmwareengineCustomEndpoint"></a>

```csharp
private void ResetVmwareengineCustomEndpoint()
```

##### `ResetVpcAccessCustomEndpoint` <a name="ResetVpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint"></a>

```csharp
private void ResetVpcAccessCustomEndpoint()
```

##### `ResetWorkbenchCustomEndpoint` <a name="ResetWorkbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkbenchCustomEndpoint"></a>

```csharp
private void ResetWorkbenchCustomEndpoint()
```

##### `ResetWorkflowsCustomEndpoint` <a name="ResetWorkflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint"></a>

```csharp
private void ResetWorkflowsCustomEndpoint()
```

##### `ResetWorkstationsCustomEndpoint` <a name="ResetWorkstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint"></a>

```csharp
private void ResetWorkstationsCustomEndpoint()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBetaProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBetaProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBetaProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBetaProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBetaProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBetaProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBetaProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBetaProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBetaProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput">AccessApprovalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput">AccessContextManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput">ActiveDirectoryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabelInput">AddTerraformAttributionLabelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput">AlloydbCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput">ApiGatewayCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput">ApigeeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput">ApikeysCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput">AppEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpointInput">ApphubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput">ArtifactRegistryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput">AssuredWorkloadsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpointInput">BackupDrCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput">BatchingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput">BeyondcorpCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpointInput">BiglakeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput">BigqueryAnalyticsHubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput">BigqueryConnectionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput">BigQueryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput">BigqueryDatapolicyCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput">BigqueryDataTransferCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput">BigqueryReservationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput">BigtableCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput">BillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput">BillingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput">BinaryAuthorizationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpointInput">BlockchainNodeEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput">CertificateManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpointInput">ChronicleCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput">CloudAssetCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput">CloudBillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput">CloudBuildCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput">Cloudbuildv2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput">CloudBuildWorkerPoolCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput">ClouddeployCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpointInput">ClouddomainsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput">Cloudfunctions2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput">CloudFunctionsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput">CloudIdentityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput">CloudIdsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpointInput">CloudQuotasCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput">CloudResourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput">CloudRunCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput">CloudRunV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput">CloudSchedulerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput">CloudTasksCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.colabCustomEndpointInput">ColabCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput">ComposerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput">ComputeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput">ContainerAnalysisCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput">ContainerAttachedCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput">ContainerAwsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput">ContainerAzureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput">ContainerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpointInput">CoreBillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput">DatabaseMigrationServiceCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput">DataCatalogCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput">DataflowCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput">DataformCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput">DataFusionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput">DataLossPreventionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpointInput">DataPipelineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput">DataplexCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput">DataprocCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpointInput">DataprocGdcCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput">DataprocMetastoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput">DatastreamCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabelsInput">DefaultLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput">DeploymentManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpointInput">DeveloperConnectCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput">DialogflowCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput">DialogflowCxCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpointInput">DiscoveryEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput">DnsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput">DocumentAiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpointInput">DocumentAiWarehouseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpointInput">EdgecontainerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpointInput">EdgenetworkCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput">EssentialContactsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput">EventarcCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput">FilestoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpointInput">FirebaseAppCheckCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput">FirebaseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput">FirebaseDatabaseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpointInput">FirebaseExtensionsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput">FirebaseHostingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput">FirebaserulesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput">FirebaseStorageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput">FirestoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpointInput">GeminiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput">GkeBackupCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpointInput">GkeHub2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput">GkeHubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput">GkehubFeatureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput">GkeonpremCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput">HealthcareCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput">Iam2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpointInput">Iam3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput">IamBetaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput">IamCredentialsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput">IamCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput">IamWorkforcePoolCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput">IapCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput">IdentityPlatformCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput">ImpersonateServiceAccountDelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput">ImpersonateServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpointInput">IntegrationConnectorsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpointInput">IntegrationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput">KmsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput">LoggingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpointInput">LookerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpointInput">ManagedKafkaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput">MemcacheCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpointInput">MemorystoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpointInput">MigrationCenterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput">MlEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput">MonitoringCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpointInput">NetappCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput">NetworkConnectivityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput">NetworkManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput">NetworkSecurityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput">NetworkServicesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput">NotebooksCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpointInput">OracleDatabaseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput">OrgPolicyCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput">OsConfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput">OsLoginCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpointInput">ParallelstoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerCustomEndpointInput">ParameterManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerRegionalCustomEndpointInput">ParameterManagerRegionalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput">PrivatecaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpointInput">PrivilegedAccessManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpointInput">PublicCaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput">PubsubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput">PubsubLiteCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput">RecaptchaEnterpriseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput">RedisCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput">RequestReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput">ResourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput">ResourceManagerV3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput">RuntimeconfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput">RuntimeConfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput">SecretManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpointInput">SecretManagerRegionalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpointInput">SecureSourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput">SecurityCenterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpointInput">SecurityCenterManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpointInput">SecurityCenterV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpointInput">SecuritypostureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput">SecurityScannerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput">ServiceDirectoryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput">ServiceManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput">ServiceNetworkingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput">ServiceUsageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpointInput">SiteVerificationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput">SourceRepoCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput">SpannerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput">SqlCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput">StorageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpointInput">StorageInsightsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput">StorageTransferCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput">TagsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput">TagsLocationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategyInput">TerraformAttributionLabelAdditionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput">TpuCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpointInput">TpuV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpointInput">TranscoderCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomainInput">UniverseDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput">UserProjectOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput">VertexAiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpointInput">VmwareengineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput">VpcAccessCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpointInput">WorkbenchCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput">WorkflowsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput">WorkstationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabel">AddTerraformAttributionLabel</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint">ApiGatewayCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpoint">ApphubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpoint">BackupDrCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching">Batching</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpoint">BiglakeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject">BillingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpoint">BlockchainNodeEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpoint">ChronicleCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint">Cloudbuildv2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint">CloudBuildWorkerPoolCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpoint">ClouddomainsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpoint">CloudQuotasCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.colabCustomEndpoint">ColabCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpoint">CoreBillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint">DatabaseMigrationServiceCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint">DataformCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpoint">DataPipelineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpoint">DataprocGdcCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabels">DefaultLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpoint">DeveloperConnectCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpoint">DiscoveryEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpoint">DocumentAiWarehouseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpoint">EdgecontainerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpoint">EdgenetworkCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpoint">FirebaseAppCheckCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint">FirebaseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint">FirebaseDatabaseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpoint">FirebaseExtensionsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint">FirebaseHostingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint">FirebaseStorageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpoint">GeminiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpoint">GkeHub2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint">GkehubFeatureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint">GkeonpremCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpoint">Iam3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpoint">IntegrationConnectorsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpoint">IntegrationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpoint">LookerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpoint">ManagedKafkaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpoint">MemorystoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpoint">MigrationCenterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpoint">NetappCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint">NetworkSecurityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpoint">OracleDatabaseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpoint">ParallelstoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerCustomEndpoint">ParameterManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerRegionalCustomEndpoint">ParameterManagerRegionalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpoint">PrivilegedAccessManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpoint">PublicCaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason">RequestReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout">RequestTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint">RuntimeconfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint">RuntimeConfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpoint">SecretManagerRegionalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpoint">SecureSourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpoint">SecurityCenterManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpoint">SecurityCenterV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpoint">SecuritypostureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint">SecurityScannerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint">ServiceDirectoryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpoint">SiteVerificationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpoint">StorageInsightsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategy">TerraformAttributionLabelAdditionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpoint">TpuV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpoint">TranscoderCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomain">UniverseDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride">UserProjectOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpoint">VmwareengineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpoint">WorkbenchCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint">WorkstationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccessApprovalCustomEndpointInput`<sup>Optional</sup> <a name="AccessApprovalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput"></a>

```csharp
public string AccessApprovalCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AccessContextManagerCustomEndpointInput`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput"></a>

```csharp
public string AccessContextManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput"></a>

```csharp
public string ActiveDirectoryCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AddTerraformAttributionLabelInput`<sup>Optional</sup> <a name="AddTerraformAttributionLabelInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabelInput"></a>

```csharp
public object AddTerraformAttributionLabelInput { get; }
```

- *Type:* object

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AlloydbCustomEndpointInput`<sup>Optional</sup> <a name="AlloydbCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput"></a>

```csharp
public string AlloydbCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ApiGatewayCustomEndpointInput`<sup>Optional</sup> <a name="ApiGatewayCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput"></a>

```csharp
public string ApiGatewayCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ApigeeCustomEndpointInput`<sup>Optional</sup> <a name="ApigeeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput"></a>

```csharp
public string ApigeeCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ApikeysCustomEndpointInput`<sup>Optional</sup> <a name="ApikeysCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput"></a>

```csharp
public string ApikeysCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AppEngineCustomEndpointInput`<sup>Optional</sup> <a name="AppEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput"></a>

```csharp
public string AppEngineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ApphubCustomEndpointInput`<sup>Optional</sup> <a name="ApphubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpointInput"></a>

```csharp
public string ApphubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ArtifactRegistryCustomEndpointInput`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput"></a>

```csharp
public string ArtifactRegistryCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AssuredWorkloadsCustomEndpointInput`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```csharp
public string AssuredWorkloadsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BackupDrCustomEndpointInput`<sup>Optional</sup> <a name="BackupDrCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpointInput"></a>

```csharp
public string BackupDrCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BatchingInput`<sup>Optional</sup> <a name="BatchingInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput"></a>

```csharp
public object BatchingInput { get; }
```

- *Type:* object

---

##### `BeyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="BeyondcorpCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput"></a>

```csharp
public string BeyondcorpCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BiglakeCustomEndpointInput`<sup>Optional</sup> <a name="BiglakeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpointInput"></a>

```csharp
public string BiglakeCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryAnalyticsHubCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```csharp
public string BigqueryAnalyticsHubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryConnectionCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```csharp
public string BigqueryConnectionCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigQueryCustomEndpointInput`<sup>Optional</sup> <a name="BigQueryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput"></a>

```csharp
public string BigQueryCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryDatapolicyCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```csharp
public string BigqueryDatapolicyCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryDataTransferCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```csharp
public string BigqueryDataTransferCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryReservationCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput"></a>

```csharp
public string BigqueryReservationCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigtableCustomEndpointInput`<sup>Optional</sup> <a name="BigtableCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput"></a>

```csharp
public string BigtableCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BillingCustomEndpointInput`<sup>Optional</sup> <a name="BillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput"></a>

```csharp
public string BillingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput"></a>

```csharp
public string BillingProjectInput { get; }
```

- *Type:* string

---

##### `BinaryAuthorizationCustomEndpointInput`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```csharp
public string BinaryAuthorizationCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BlockchainNodeEngineCustomEndpointInput`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```csharp
public string BlockchainNodeEngineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CertificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="CertificateManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput"></a>

```csharp
public string CertificateManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ChronicleCustomEndpointInput`<sup>Optional</sup> <a name="ChronicleCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpointInput"></a>

```csharp
public string ChronicleCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudAssetCustomEndpointInput`<sup>Optional</sup> <a name="CloudAssetCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput"></a>

```csharp
public string CloudAssetCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudBillingCustomEndpointInput`<sup>Optional</sup> <a name="CloudBillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput"></a>

```csharp
public string CloudBillingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudBuildCustomEndpointInput`<sup>Optional</sup> <a name="CloudBuildCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput"></a>

```csharp
public string CloudBuildCustomEndpointInput { get; }
```

- *Type:* string

---

##### `Cloudbuildv2CustomEndpointInput`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput"></a>

```csharp
public string Cloudbuildv2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudBuildWorkerPoolCustomEndpointInput`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput"></a>

```csharp
public string CloudBuildWorkerPoolCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ClouddeployCustomEndpointInput`<sup>Optional</sup> <a name="ClouddeployCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput"></a>

```csharp
public string ClouddeployCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ClouddomainsCustomEndpointInput`<sup>Optional</sup> <a name="ClouddomainsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpointInput"></a>

```csharp
public string ClouddomainsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `Cloudfunctions2CustomEndpointInput`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput"></a>

```csharp
public string Cloudfunctions2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudFunctionsCustomEndpointInput`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput"></a>

```csharp
public string CloudFunctionsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudIdentityCustomEndpointInput`<sup>Optional</sup> <a name="CloudIdentityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput"></a>

```csharp
public string CloudIdentityCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudIdsCustomEndpointInput`<sup>Optional</sup> <a name="CloudIdsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput"></a>

```csharp
public string CloudIdsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudQuotasCustomEndpointInput`<sup>Optional</sup> <a name="CloudQuotasCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpointInput"></a>

```csharp
public string CloudQuotasCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```csharp
public string CloudResourceManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudRunCustomEndpointInput`<sup>Optional</sup> <a name="CloudRunCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput"></a>

```csharp
public string CloudRunCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudRunV2CustomEndpointInput`<sup>Optional</sup> <a name="CloudRunV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput"></a>

```csharp
public string CloudRunV2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudSchedulerCustomEndpointInput`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput"></a>

```csharp
public string CloudSchedulerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudTasksCustomEndpointInput`<sup>Optional</sup> <a name="CloudTasksCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput"></a>

```csharp
public string CloudTasksCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ColabCustomEndpointInput`<sup>Optional</sup> <a name="ColabCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.colabCustomEndpointInput"></a>

```csharp
public string ColabCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ComposerCustomEndpointInput`<sup>Optional</sup> <a name="ComposerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput"></a>

```csharp
public string ComposerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ComputeCustomEndpointInput`<sup>Optional</sup> <a name="ComputeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput"></a>

```csharp
public string ComputeCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerAnalysisCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput"></a>

```csharp
public string ContainerAnalysisCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerAttachedCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput"></a>

```csharp
public string ContainerAttachedCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerAwsCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAwsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput"></a>

```csharp
public string ContainerAwsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerAzureCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAzureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput"></a>

```csharp
public string ContainerAzureCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerCustomEndpointInput`<sup>Optional</sup> <a name="ContainerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput"></a>

```csharp
public string ContainerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CoreBillingCustomEndpointInput`<sup>Optional</sup> <a name="CoreBillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpointInput"></a>

```csharp
public string CoreBillingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `DatabaseMigrationServiceCustomEndpointInput`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```csharp
public string DatabaseMigrationServiceCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataCatalogCustomEndpointInput`<sup>Optional</sup> <a name="DataCatalogCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput"></a>

```csharp
public string DataCatalogCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataflowCustomEndpointInput`<sup>Optional</sup> <a name="DataflowCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput"></a>

```csharp
public string DataflowCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataformCustomEndpointInput`<sup>Optional</sup> <a name="DataformCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput"></a>

```csharp
public string DataformCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataFusionCustomEndpointInput`<sup>Optional</sup> <a name="DataFusionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput"></a>

```csharp
public string DataFusionCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataLossPreventionCustomEndpointInput`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput"></a>

```csharp
public string DataLossPreventionCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataPipelineCustomEndpointInput`<sup>Optional</sup> <a name="DataPipelineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpointInput"></a>

```csharp
public string DataPipelineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataplexCustomEndpointInput`<sup>Optional</sup> <a name="DataplexCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput"></a>

```csharp
public string DataplexCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataprocCustomEndpointInput`<sup>Optional</sup> <a name="DataprocCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput"></a>

```csharp
public string DataprocCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataprocGdcCustomEndpointInput`<sup>Optional</sup> <a name="DataprocGdcCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpointInput"></a>

```csharp
public string DataprocGdcCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```csharp
public string DataprocMetastoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DatastreamCustomEndpointInput`<sup>Optional</sup> <a name="DatastreamCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput"></a>

```csharp
public string DatastreamCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DefaultLabelsInput`<sup>Optional</sup> <a name="DefaultLabelsInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput"></a>

```csharp
public string DeploymentManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DeveloperConnectCustomEndpointInput`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpointInput"></a>

```csharp
public string DeveloperConnectCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DialogflowCustomEndpointInput`<sup>Optional</sup> <a name="DialogflowCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput"></a>

```csharp
public string DialogflowCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DialogflowCxCustomEndpointInput`<sup>Optional</sup> <a name="DialogflowCxCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput"></a>

```csharp
public string DialogflowCxCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DiscoveryEngineCustomEndpointInput`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpointInput"></a>

```csharp
public string DiscoveryEngineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DnsCustomEndpointInput`<sup>Optional</sup> <a name="DnsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput"></a>

```csharp
public string DnsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DocumentAiCustomEndpointInput`<sup>Optional</sup> <a name="DocumentAiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput"></a>

```csharp
public string DocumentAiCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DocumentAiWarehouseCustomEndpointInput`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```csharp
public string DocumentAiWarehouseCustomEndpointInput { get; }
```

- *Type:* string

---

##### `EdgecontainerCustomEndpointInput`<sup>Optional</sup> <a name="EdgecontainerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpointInput"></a>

```csharp
public string EdgecontainerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `EdgenetworkCustomEndpointInput`<sup>Optional</sup> <a name="EdgenetworkCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpointInput"></a>

```csharp
public string EdgenetworkCustomEndpointInput { get; }
```

- *Type:* string

---

##### `EssentialContactsCustomEndpointInput`<sup>Optional</sup> <a name="EssentialContactsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput"></a>

```csharp
public string EssentialContactsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `EventarcCustomEndpointInput`<sup>Optional</sup> <a name="EventarcCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput"></a>

```csharp
public string EventarcCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FilestoreCustomEndpointInput`<sup>Optional</sup> <a name="FilestoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput"></a>

```csharp
public string FilestoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseAppCheckCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```csharp
public string FirebaseAppCheckCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput"></a>

```csharp
public string FirebaseCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseDatabaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput"></a>

```csharp
public string FirebaseDatabaseCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseExtensionsCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseExtensionsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpointInput"></a>

```csharp
public string FirebaseExtensionsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseHostingCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseHostingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput"></a>

```csharp
public string FirebaseHostingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaserulesCustomEndpointInput`<sup>Optional</sup> <a name="FirebaserulesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput"></a>

```csharp
public string FirebaserulesCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseStorageCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseStorageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput"></a>

```csharp
public string FirebaseStorageCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirestoreCustomEndpointInput`<sup>Optional</sup> <a name="FirestoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput"></a>

```csharp
public string FirestoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GeminiCustomEndpointInput`<sup>Optional</sup> <a name="GeminiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpointInput"></a>

```csharp
public string GeminiCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="GkeBackupCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput"></a>

```csharp
public string GkeBackupCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkeHub2CustomEndpointInput`<sup>Optional</sup> <a name="GkeHub2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpointInput"></a>

```csharp
public string GkeHub2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkeHubCustomEndpointInput`<sup>Optional</sup> <a name="GkeHubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput"></a>

```csharp
public string GkeHubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkehubFeatureCustomEndpointInput`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput"></a>

```csharp
public string GkehubFeatureCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkeonpremCustomEndpointInput`<sup>Optional</sup> <a name="GkeonpremCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput"></a>

```csharp
public string GkeonpremCustomEndpointInput { get; }
```

- *Type:* string

---

##### `HealthcareCustomEndpointInput`<sup>Optional</sup> <a name="HealthcareCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput"></a>

```csharp
public string HealthcareCustomEndpointInput { get; }
```

- *Type:* string

---

##### `Iam2CustomEndpointInput`<sup>Optional</sup> <a name="Iam2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput"></a>

```csharp
public string Iam2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `Iam3CustomEndpointInput`<sup>Optional</sup> <a name="Iam3CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpointInput"></a>

```csharp
public string Iam3CustomEndpointInput { get; }
```

- *Type:* string

---

##### `IamBetaCustomEndpointInput`<sup>Optional</sup> <a name="IamBetaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput"></a>

```csharp
public string IamBetaCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IamCredentialsCustomEndpointInput`<sup>Optional</sup> <a name="IamCredentialsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput"></a>

```csharp
public string IamCredentialsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IamCustomEndpointInput`<sup>Optional</sup> <a name="IamCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput"></a>

```csharp
public string IamCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IamWorkforcePoolCustomEndpointInput`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```csharp
public string IamWorkforcePoolCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IapCustomEndpointInput`<sup>Optional</sup> <a name="IapCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput"></a>

```csharp
public string IapCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IdentityPlatformCustomEndpointInput`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput"></a>

```csharp
public string IdentityPlatformCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ImpersonateServiceAccountDelegatesInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegatesInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput"></a>

```csharp
public string[] ImpersonateServiceAccountDelegatesInput { get; }
```

- *Type:* string[]

---

##### `ImpersonateServiceAccountInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput"></a>

```csharp
public string ImpersonateServiceAccountInput { get; }
```

- *Type:* string

---

##### `IntegrationConnectorsCustomEndpointInput`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpointInput"></a>

```csharp
public string IntegrationConnectorsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IntegrationsCustomEndpointInput`<sup>Optional</sup> <a name="IntegrationsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpointInput"></a>

```csharp
public string IntegrationsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `KmsCustomEndpointInput`<sup>Optional</sup> <a name="KmsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput"></a>

```csharp
public string KmsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `LoggingCustomEndpointInput`<sup>Optional</sup> <a name="LoggingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput"></a>

```csharp
public string LoggingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `LookerCustomEndpointInput`<sup>Optional</sup> <a name="LookerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpointInput"></a>

```csharp
public string LookerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ManagedKafkaCustomEndpointInput`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpointInput"></a>

```csharp
public string ManagedKafkaCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MemcacheCustomEndpointInput`<sup>Optional</sup> <a name="MemcacheCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput"></a>

```csharp
public string MemcacheCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MemorystoreCustomEndpointInput`<sup>Optional</sup> <a name="MemorystoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpointInput"></a>

```csharp
public string MemorystoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MigrationCenterCustomEndpointInput`<sup>Optional</sup> <a name="MigrationCenterCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpointInput"></a>

```csharp
public string MigrationCenterCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MlEngineCustomEndpointInput`<sup>Optional</sup> <a name="MlEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput"></a>

```csharp
public string MlEngineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MonitoringCustomEndpointInput`<sup>Optional</sup> <a name="MonitoringCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput"></a>

```csharp
public string MonitoringCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetappCustomEndpointInput`<sup>Optional</sup> <a name="NetappCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpointInput"></a>

```csharp
public string NetappCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetworkConnectivityCustomEndpointInput`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput"></a>

```csharp
public string NetworkConnectivityCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetworkManagementCustomEndpointInput`<sup>Optional</sup> <a name="NetworkManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput"></a>

```csharp
public string NetworkManagementCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityCustomEndpointInput`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput"></a>

```csharp
public string NetworkSecurityCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetworkServicesCustomEndpointInput`<sup>Optional</sup> <a name="NetworkServicesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput"></a>

```csharp
public string NetworkServicesCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NotebooksCustomEndpointInput`<sup>Optional</sup> <a name="NotebooksCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput"></a>

```csharp
public string NotebooksCustomEndpointInput { get; }
```

- *Type:* string

---

##### `OracleDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpointInput"></a>

```csharp
public string OracleDatabaseCustomEndpointInput { get; }
```

- *Type:* string

---

##### `OrgPolicyCustomEndpointInput`<sup>Optional</sup> <a name="OrgPolicyCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput"></a>

```csharp
public string OrgPolicyCustomEndpointInput { get; }
```

- *Type:* string

---

##### `OsConfigCustomEndpointInput`<sup>Optional</sup> <a name="OsConfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput"></a>

```csharp
public string OsConfigCustomEndpointInput { get; }
```

- *Type:* string

---

##### `OsLoginCustomEndpointInput`<sup>Optional</sup> <a name="OsLoginCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput"></a>

```csharp
public string OsLoginCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ParallelstoreCustomEndpointInput`<sup>Optional</sup> <a name="ParallelstoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpointInput"></a>

```csharp
public string ParallelstoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ParameterManagerCustomEndpointInput`<sup>Optional</sup> <a name="ParameterManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerCustomEndpointInput"></a>

```csharp
public string ParameterManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ParameterManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerRegionalCustomEndpointInput"></a>

```csharp
public string ParameterManagerRegionalCustomEndpointInput { get; }
```

- *Type:* string

---

##### `PrivatecaCustomEndpointInput`<sup>Optional</sup> <a name="PrivatecaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput"></a>

```csharp
public string PrivatecaCustomEndpointInput { get; }
```

- *Type:* string

---

##### `PrivilegedAccessManagerCustomEndpointInput`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpointInput"></a>

```csharp
public string PrivilegedAccessManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublicCaCustomEndpointInput`<sup>Optional</sup> <a name="PublicCaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpointInput"></a>

```csharp
public string PublicCaCustomEndpointInput { get; }
```

- *Type:* string

---

##### `PubsubCustomEndpointInput`<sup>Optional</sup> <a name="PubsubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput"></a>

```csharp
public string PubsubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `PubsubLiteCustomEndpointInput`<sup>Optional</sup> <a name="PubsubLiteCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput"></a>

```csharp
public string PubsubLiteCustomEndpointInput { get; }
```

- *Type:* string

---

##### `RecaptchaEnterpriseCustomEndpointInput`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```csharp
public string RecaptchaEnterpriseCustomEndpointInput { get; }
```

- *Type:* string

---

##### `RedisCustomEndpointInput`<sup>Optional</sup> <a name="RedisCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput"></a>

```csharp
public string RedisCustomEndpointInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RequestReasonInput`<sup>Optional</sup> <a name="RequestReasonInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput"></a>

```csharp
public string RequestReasonInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput"></a>

```csharp
public string RequestTimeoutInput { get; }
```

- *Type:* string

---

##### `ResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="ResourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput"></a>

```csharp
public string ResourceManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ResourceManagerV3CustomEndpointInput`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput"></a>

```csharp
public string ResourceManagerV3CustomEndpointInput { get; }
```

- *Type:* string

---

##### `RuntimeconfigCustomEndpointInput`<sup>Optional</sup> <a name="RuntimeconfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput"></a>

```csharp
public string RuntimeconfigCustomEndpointInput { get; }
```

- *Type:* string

---

##### `RuntimeConfigCustomEndpointInput`<sup>Optional</sup> <a name="RuntimeConfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput"></a>

```csharp
public string RuntimeConfigCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SecretManagerCustomEndpointInput`<sup>Optional</sup> <a name="SecretManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput"></a>

```csharp
public string SecretManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecretManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpointInput"></a>

```csharp
public string SecretManagerRegionalCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecureSourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpointInput"></a>

```csharp
public string SecureSourceManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecurityCenterCustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput"></a>

```csharp
public string SecurityCenterCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecurityCenterManagementCustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpointInput"></a>

```csharp
public string SecurityCenterManagementCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecurityCenterV2CustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpointInput"></a>

```csharp
public string SecurityCenterV2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecuritypostureCustomEndpointInput`<sup>Optional</sup> <a name="SecuritypostureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpointInput"></a>

```csharp
public string SecuritypostureCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecurityScannerCustomEndpointInput`<sup>Optional</sup> <a name="SecurityScannerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput"></a>

```csharp
public string SecurityScannerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ServiceDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="ServiceDirectoryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput"></a>

```csharp
public string ServiceDirectoryCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ServiceManagementCustomEndpointInput`<sup>Optional</sup> <a name="ServiceManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput"></a>

```csharp
public string ServiceManagementCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ServiceNetworkingCustomEndpointInput`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput"></a>

```csharp
public string ServiceNetworkingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ServiceUsageCustomEndpointInput`<sup>Optional</sup> <a name="ServiceUsageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput"></a>

```csharp
public string ServiceUsageCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SiteVerificationCustomEndpointInput`<sup>Optional</sup> <a name="SiteVerificationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpointInput"></a>

```csharp
public string SiteVerificationCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SourceRepoCustomEndpointInput`<sup>Optional</sup> <a name="SourceRepoCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput"></a>

```csharp
public string SourceRepoCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SpannerCustomEndpointInput`<sup>Optional</sup> <a name="SpannerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput"></a>

```csharp
public string SpannerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SqlCustomEndpointInput`<sup>Optional</sup> <a name="SqlCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput"></a>

```csharp
public string SqlCustomEndpointInput { get; }
```

- *Type:* string

---

##### `StorageCustomEndpointInput`<sup>Optional</sup> <a name="StorageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput"></a>

```csharp
public string StorageCustomEndpointInput { get; }
```

- *Type:* string

---

##### `StorageInsightsCustomEndpointInput`<sup>Optional</sup> <a name="StorageInsightsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpointInput"></a>

```csharp
public string StorageInsightsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `StorageTransferCustomEndpointInput`<sup>Optional</sup> <a name="StorageTransferCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput"></a>

```csharp
public string StorageTransferCustomEndpointInput { get; }
```

- *Type:* string

---

##### `TagsCustomEndpointInput`<sup>Optional</sup> <a name="TagsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput"></a>

```csharp
public string TagsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `TagsLocationCustomEndpointInput`<sup>Optional</sup> <a name="TagsLocationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput"></a>

```csharp
public string TagsLocationCustomEndpointInput { get; }
```

- *Type:* string

---

##### `TerraformAttributionLabelAdditionStrategyInput`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategyInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```csharp
public string TerraformAttributionLabelAdditionStrategyInput { get; }
```

- *Type:* string

---

##### `TpuCustomEndpointInput`<sup>Optional</sup> <a name="TpuCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput"></a>

```csharp
public string TpuCustomEndpointInput { get; }
```

- *Type:* string

---

##### `TpuV2CustomEndpointInput`<sup>Optional</sup> <a name="TpuV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpointInput"></a>

```csharp
public string TpuV2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `TranscoderCustomEndpointInput`<sup>Optional</sup> <a name="TranscoderCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpointInput"></a>

```csharp
public string TranscoderCustomEndpointInput { get; }
```

- *Type:* string

---

##### `UniverseDomainInput`<sup>Optional</sup> <a name="UniverseDomainInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomainInput"></a>

```csharp
public string UniverseDomainInput { get; }
```

- *Type:* string

---

##### `UserProjectOverrideInput`<sup>Optional</sup> <a name="UserProjectOverrideInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput"></a>

```csharp
public object UserProjectOverrideInput { get; }
```

- *Type:* object

---

##### `VertexAiCustomEndpointInput`<sup>Optional</sup> <a name="VertexAiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput"></a>

```csharp
public string VertexAiCustomEndpointInput { get; }
```

- *Type:* string

---

##### `VmwareengineCustomEndpointInput`<sup>Optional</sup> <a name="VmwareengineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpointInput"></a>

```csharp
public string VmwareengineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `VpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="VpcAccessCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput"></a>

```csharp
public string VpcAccessCustomEndpointInput { get; }
```

- *Type:* string

---

##### `WorkbenchCustomEndpointInput`<sup>Optional</sup> <a name="WorkbenchCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpointInput"></a>

```csharp
public string WorkbenchCustomEndpointInput { get; }
```

- *Type:* string

---

##### `WorkflowsCustomEndpointInput`<sup>Optional</sup> <a name="WorkflowsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput"></a>

```csharp
public string WorkflowsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `WorkstationsCustomEndpointInput`<sup>Optional</sup> <a name="WorkstationsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput"></a>

```csharp
public string WorkstationsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint"></a>

```csharp
public string AccessApprovalCustomEndpoint { get; }
```

- *Type:* string

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint"></a>

```csharp
public string AccessContextManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint"></a>

```csharp
public string ActiveDirectoryCustomEndpoint { get; }
```

- *Type:* string

---

##### `AddTerraformAttributionLabel`<sup>Optional</sup> <a name="AddTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabel"></a>

```csharp
public object AddTerraformAttributionLabel { get; }
```

- *Type:* object

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint"></a>

```csharp
public string AlloydbCustomEndpoint { get; }
```

- *Type:* string

---

##### `ApiGatewayCustomEndpoint`<sup>Optional</sup> <a name="ApiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint"></a>

```csharp
public string ApiGatewayCustomEndpoint { get; }
```

- *Type:* string

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint"></a>

```csharp
public string ApigeeCustomEndpoint { get; }
```

- *Type:* string

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint"></a>

```csharp
public string ApikeysCustomEndpoint { get; }
```

- *Type:* string

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint"></a>

```csharp
public string AppEngineCustomEndpoint { get; }
```

- *Type:* string

---

##### `ApphubCustomEndpoint`<sup>Optional</sup> <a name="ApphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpoint"></a>

```csharp
public string ApphubCustomEndpoint { get; }
```

- *Type:* string

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint"></a>

```csharp
public string ArtifactRegistryCustomEndpoint { get; }
```

- *Type:* string

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint"></a>

```csharp
public string AssuredWorkloadsCustomEndpoint { get; }
```

- *Type:* string

---

##### `BackupDrCustomEndpoint`<sup>Optional</sup> <a name="BackupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpoint"></a>

```csharp
public string BackupDrCustomEndpoint { get; }
```

- *Type:* string

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching"></a>

```csharp
public object Batching { get; }
```

- *Type:* object

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint"></a>

```csharp
public string BeyondcorpCustomEndpoint { get; }
```

- *Type:* string

---

##### `BiglakeCustomEndpoint`<sup>Optional</sup> <a name="BiglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpoint"></a>

```csharp
public string BiglakeCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```csharp
public string BigqueryAnalyticsHubCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint"></a>

```csharp
public string BigqueryConnectionCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint"></a>

```csharp
public string BigQueryCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```csharp
public string BigqueryDatapolicyCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```csharp
public string BigqueryDataTransferCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint"></a>

```csharp
public string BigqueryReservationCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint"></a>

```csharp
public string BigtableCustomEndpoint { get; }
```

- *Type:* string

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint"></a>

```csharp
public string BillingCustomEndpoint { get; }
```

- *Type:* string

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject"></a>

```csharp
public string BillingProject { get; }
```

- *Type:* string

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint"></a>

```csharp
public string BinaryAuthorizationCustomEndpoint { get; }
```

- *Type:* string

---

##### `BlockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```csharp
public string BlockchainNodeEngineCustomEndpoint { get; }
```

- *Type:* string

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint"></a>

```csharp
public string CertificateManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ChronicleCustomEndpoint`<sup>Optional</sup> <a name="ChronicleCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpoint"></a>

```csharp
public string ChronicleCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint"></a>

```csharp
public string CloudAssetCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint"></a>

```csharp
public string CloudBillingCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint"></a>

```csharp
public string CloudBuildCustomEndpoint { get; }
```

- *Type:* string

---

##### `Cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint"></a>

```csharp
public string Cloudbuildv2CustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```csharp
public string CloudBuildWorkerPoolCustomEndpoint { get; }
```

- *Type:* string

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint"></a>

```csharp
public string ClouddeployCustomEndpoint { get; }
```

- *Type:* string

---

##### `ClouddomainsCustomEndpoint`<sup>Optional</sup> <a name="ClouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpoint"></a>

```csharp
public string ClouddomainsCustomEndpoint { get; }
```

- *Type:* string

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint"></a>

```csharp
public string Cloudfunctions2CustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint"></a>

```csharp
public string CloudFunctionsCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint"></a>

```csharp
public string CloudIdentityCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint"></a>

```csharp
public string CloudIdsCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="CloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpoint"></a>

```csharp
public string CloudQuotasCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint"></a>

```csharp
public string CloudResourceManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint"></a>

```csharp
public string CloudRunCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint"></a>

```csharp
public string CloudRunV2CustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint"></a>

```csharp
public string CloudSchedulerCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint"></a>

```csharp
public string CloudTasksCustomEndpoint { get; }
```

- *Type:* string

---

##### `ColabCustomEndpoint`<sup>Optional</sup> <a name="ColabCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.colabCustomEndpoint"></a>

```csharp
public string ColabCustomEndpoint { get; }
```

- *Type:* string

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint"></a>

```csharp
public string ComposerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint"></a>

```csharp
public string ComputeCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint"></a>

```csharp
public string ContainerAnalysisCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint"></a>

```csharp
public string ContainerAttachedCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint"></a>

```csharp
public string ContainerAwsCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint"></a>

```csharp
public string ContainerAzureCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint"></a>

```csharp
public string ContainerCustomEndpoint { get; }
```

- *Type:* string

---

##### `CoreBillingCustomEndpoint`<sup>Optional</sup> <a name="CoreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpoint"></a>

```csharp
public string CoreBillingCustomEndpoint { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `DatabaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```csharp
public string DatabaseMigrationServiceCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint"></a>

```csharp
public string DataCatalogCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint"></a>

```csharp
public string DataflowCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataformCustomEndpoint`<sup>Optional</sup> <a name="DataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint"></a>

```csharp
public string DataformCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint"></a>

```csharp
public string DataFusionCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint"></a>

```csharp
public string DataLossPreventionCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataPipelineCustomEndpoint`<sup>Optional</sup> <a name="DataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpoint"></a>

```csharp
public string DataPipelineCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint"></a>

```csharp
public string DataplexCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint"></a>

```csharp
public string DataprocCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="DataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpoint"></a>

```csharp
public string DataprocGdcCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint"></a>

```csharp
public string DataprocMetastoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint"></a>

```csharp
public string DatastreamCustomEndpoint { get; }
```

- *Type:* string

---

##### `DefaultLabels`<sup>Optional</sup> <a name="DefaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint"></a>

```csharp
public string DeploymentManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `DeveloperConnectCustomEndpoint`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpoint"></a>

```csharp
public string DeveloperConnectCustomEndpoint { get; }
```

- *Type:* string

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint"></a>

```csharp
public string DialogflowCustomEndpoint { get; }
```

- *Type:* string

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint"></a>

```csharp
public string DialogflowCxCustomEndpoint { get; }
```

- *Type:* string

---

##### `DiscoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpoint"></a>

```csharp
public string DiscoveryEngineCustomEndpoint { get; }
```

- *Type:* string

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint"></a>

```csharp
public string DnsCustomEndpoint { get; }
```

- *Type:* string

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint"></a>

```csharp
public string DocumentAiCustomEndpoint { get; }
```

- *Type:* string

---

##### `DocumentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpoint"></a>

```csharp
public string DocumentAiWarehouseCustomEndpoint { get; }
```

- *Type:* string

---

##### `EdgecontainerCustomEndpoint`<sup>Optional</sup> <a name="EdgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpoint"></a>

```csharp
public string EdgecontainerCustomEndpoint { get; }
```

- *Type:* string

---

##### `EdgenetworkCustomEndpoint`<sup>Optional</sup> <a name="EdgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpoint"></a>

```csharp
public string EdgenetworkCustomEndpoint { get; }
```

- *Type:* string

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint"></a>

```csharp
public string EssentialContactsCustomEndpoint { get; }
```

- *Type:* string

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint"></a>

```csharp
public string EventarcCustomEndpoint { get; }
```

- *Type:* string

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint"></a>

```csharp
public string FilestoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpoint"></a>

```csharp
public string FirebaseAppCheckCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseCustomEndpoint`<sup>Optional</sup> <a name="FirebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint"></a>

```csharp
public string FirebaseCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="FirebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint"></a>

```csharp
public string FirebaseDatabaseCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseExtensionsCustomEndpoint`<sup>Optional</sup> <a name="FirebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpoint"></a>

```csharp
public string FirebaseExtensionsCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="FirebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint"></a>

```csharp
public string FirebaseHostingCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint"></a>

```csharp
public string FirebaserulesCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="FirebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint"></a>

```csharp
public string FirebaseStorageCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint"></a>

```csharp
public string FirestoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `GeminiCustomEndpoint`<sup>Optional</sup> <a name="GeminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpoint"></a>

```csharp
public string GeminiCustomEndpoint { get; }
```

- *Type:* string

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint"></a>

```csharp
public string GkeBackupCustomEndpoint { get; }
```

- *Type:* string

---

##### `GkeHub2CustomEndpoint`<sup>Optional</sup> <a name="GkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpoint"></a>

```csharp
public string GkeHub2CustomEndpoint { get; }
```

- *Type:* string

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint"></a>

```csharp
public string GkeHubCustomEndpoint { get; }
```

- *Type:* string

---

##### `GkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint"></a>

```csharp
public string GkehubFeatureCustomEndpoint { get; }
```

- *Type:* string

---

##### `GkeonpremCustomEndpoint`<sup>Optional</sup> <a name="GkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint"></a>

```csharp
public string GkeonpremCustomEndpoint { get; }
```

- *Type:* string

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint"></a>

```csharp
public string HealthcareCustomEndpoint { get; }
```

- *Type:* string

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint"></a>

```csharp
public string Iam2CustomEndpoint { get; }
```

- *Type:* string

---

##### `Iam3CustomEndpoint`<sup>Optional</sup> <a name="Iam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpoint"></a>

```csharp
public string Iam3CustomEndpoint { get; }
```

- *Type:* string

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint"></a>

```csharp
public string IamBetaCustomEndpoint { get; }
```

- *Type:* string

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint"></a>

```csharp
public string IamCredentialsCustomEndpoint { get; }
```

- *Type:* string

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint"></a>

```csharp
public string IamCustomEndpoint { get; }
```

- *Type:* string

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```csharp
public string IamWorkforcePoolCustomEndpoint { get; }
```

- *Type:* string

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint"></a>

```csharp
public string IapCustomEndpoint { get; }
```

- *Type:* string

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint"></a>

```csharp
public string IdentityPlatformCustomEndpoint { get; }
```

- *Type:* string

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount"></a>

```csharp
public string ImpersonateServiceAccount { get; }
```

- *Type:* string

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates"></a>

```csharp
public string[] ImpersonateServiceAccountDelegates { get; }
```

- *Type:* string[]

---

##### `IntegrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpoint"></a>

```csharp
public string IntegrationConnectorsCustomEndpoint { get; }
```

- *Type:* string

---

##### `IntegrationsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpoint"></a>

```csharp
public string IntegrationsCustomEndpoint { get; }
```

- *Type:* string

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint"></a>

```csharp
public string KmsCustomEndpoint { get; }
```

- *Type:* string

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint"></a>

```csharp
public string LoggingCustomEndpoint { get; }
```

- *Type:* string

---

##### `LookerCustomEndpoint`<sup>Optional</sup> <a name="LookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpoint"></a>

```csharp
public string LookerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ManagedKafkaCustomEndpoint`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpoint"></a>

```csharp
public string ManagedKafkaCustomEndpoint { get; }
```

- *Type:* string

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint"></a>

```csharp
public string MemcacheCustomEndpoint { get; }
```

- *Type:* string

---

##### `MemorystoreCustomEndpoint`<sup>Optional</sup> <a name="MemorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpoint"></a>

```csharp
public string MemorystoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `MigrationCenterCustomEndpoint`<sup>Optional</sup> <a name="MigrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpoint"></a>

```csharp
public string MigrationCenterCustomEndpoint { get; }
```

- *Type:* string

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint"></a>

```csharp
public string MlEngineCustomEndpoint { get; }
```

- *Type:* string

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint"></a>

```csharp
public string MonitoringCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetappCustomEndpoint`<sup>Optional</sup> <a name="NetappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpoint"></a>

```csharp
public string NetappCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint"></a>

```csharp
public string NetworkConnectivityCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint"></a>

```csharp
public string NetworkManagementCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetworkSecurityCustomEndpoint`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint"></a>

```csharp
public string NetworkSecurityCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint"></a>

```csharp
public string NetworkServicesCustomEndpoint { get; }
```

- *Type:* string

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint"></a>

```csharp
public string NotebooksCustomEndpoint { get; }
```

- *Type:* string

---

##### `OracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpoint"></a>

```csharp
public string OracleDatabaseCustomEndpoint { get; }
```

- *Type:* string

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint"></a>

```csharp
public string OrgPolicyCustomEndpoint { get; }
```

- *Type:* string

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint"></a>

```csharp
public string OsConfigCustomEndpoint { get; }
```

- *Type:* string

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint"></a>

```csharp
public string OsLoginCustomEndpoint { get; }
```

- *Type:* string

---

##### `ParallelstoreCustomEndpoint`<sup>Optional</sup> <a name="ParallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpoint"></a>

```csharp
public string ParallelstoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `ParameterManagerCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerCustomEndpoint"></a>

```csharp
public string ParameterManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ParameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerRegionalCustomEndpoint"></a>

```csharp
public string ParameterManagerRegionalCustomEndpoint { get; }
```

- *Type:* string

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint"></a>

```csharp
public string PrivatecaCustomEndpoint { get; }
```

- *Type:* string

---

##### `PrivilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpoint"></a>

```csharp
public string PrivilegedAccessManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PublicCaCustomEndpoint`<sup>Optional</sup> <a name="PublicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpoint"></a>

```csharp
public string PublicCaCustomEndpoint { get; }
```

- *Type:* string

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint"></a>

```csharp
public string PubsubCustomEndpoint { get; }
```

- *Type:* string

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint"></a>

```csharp
public string PubsubLiteCustomEndpoint { get; }
```

- *Type:* string

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```csharp
public string RecaptchaEnterpriseCustomEndpoint { get; }
```

- *Type:* string

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint"></a>

```csharp
public string RedisCustomEndpoint { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason"></a>

```csharp
public string RequestReason { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout"></a>

```csharp
public string RequestTimeout { get; }
```

- *Type:* string

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint"></a>

```csharp
public string ResourceManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint"></a>

```csharp
public string ResourceManagerV3CustomEndpoint { get; }
```

- *Type:* string

---

##### `RuntimeconfigCustomEndpoint`<sup>Optional</sup> <a name="RuntimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint"></a>

```csharp
public string RuntimeconfigCustomEndpoint { get; }
```

- *Type:* string

---

##### `RuntimeConfigCustomEndpoint`<sup>Optional</sup> <a name="RuntimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint"></a>

```csharp
public string RuntimeConfigCustomEndpoint { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint"></a>

```csharp
public string SecretManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpoint"></a>

```csharp
public string SecretManagerRegionalCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpoint"></a>

```csharp
public string SecureSourceManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint"></a>

```csharp
public string SecurityCenterCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecurityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpoint"></a>

```csharp
public string SecurityCenterManagementCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecurityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpoint"></a>

```csharp
public string SecurityCenterV2CustomEndpoint { get; }
```

- *Type:* string

---

##### `SecuritypostureCustomEndpoint`<sup>Optional</sup> <a name="SecuritypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpoint"></a>

```csharp
public string SecuritypostureCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecurityScannerCustomEndpoint`<sup>Optional</sup> <a name="SecurityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint"></a>

```csharp
public string SecurityScannerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ServiceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ServiceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint"></a>

```csharp
public string ServiceDirectoryCustomEndpoint { get; }
```

- *Type:* string

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint"></a>

```csharp
public string ServiceManagementCustomEndpoint { get; }
```

- *Type:* string

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint"></a>

```csharp
public string ServiceNetworkingCustomEndpoint { get; }
```

- *Type:* string

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint"></a>

```csharp
public string ServiceUsageCustomEndpoint { get; }
```

- *Type:* string

---

##### `SiteVerificationCustomEndpoint`<sup>Optional</sup> <a name="SiteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpoint"></a>

```csharp
public string SiteVerificationCustomEndpoint { get; }
```

- *Type:* string

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint"></a>

```csharp
public string SourceRepoCustomEndpoint { get; }
```

- *Type:* string

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint"></a>

```csharp
public string SpannerCustomEndpoint { get; }
```

- *Type:* string

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint"></a>

```csharp
public string SqlCustomEndpoint { get; }
```

- *Type:* string

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint"></a>

```csharp
public string StorageCustomEndpoint { get; }
```

- *Type:* string

---

##### `StorageInsightsCustomEndpoint`<sup>Optional</sup> <a name="StorageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpoint"></a>

```csharp
public string StorageInsightsCustomEndpoint { get; }
```

- *Type:* string

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint"></a>

```csharp
public string StorageTransferCustomEndpoint { get; }
```

- *Type:* string

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint"></a>

```csharp
public string TagsCustomEndpoint { get; }
```

- *Type:* string

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint"></a>

```csharp
public string TagsLocationCustomEndpoint { get; }
```

- *Type:* string

---

##### `TerraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```csharp
public string TerraformAttributionLabelAdditionStrategy { get; }
```

- *Type:* string

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint"></a>

```csharp
public string TpuCustomEndpoint { get; }
```

- *Type:* string

---

##### `TpuV2CustomEndpoint`<sup>Optional</sup> <a name="TpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpoint"></a>

```csharp
public string TpuV2CustomEndpoint { get; }
```

- *Type:* string

---

##### `TranscoderCustomEndpoint`<sup>Optional</sup> <a name="TranscoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpoint"></a>

```csharp
public string TranscoderCustomEndpoint { get; }
```

- *Type:* string

---

##### `UniverseDomain`<sup>Optional</sup> <a name="UniverseDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomain"></a>

```csharp
public string UniverseDomain { get; }
```

- *Type:* string

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride"></a>

```csharp
public object UserProjectOverride { get; }
```

- *Type:* object

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint"></a>

```csharp
public string VertexAiCustomEndpoint { get; }
```

- *Type:* string

---

##### `VmwareengineCustomEndpoint`<sup>Optional</sup> <a name="VmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpoint"></a>

```csharp
public string VmwareengineCustomEndpoint { get; }
```

- *Type:* string

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint"></a>

```csharp
public string VpcAccessCustomEndpoint { get; }
```

- *Type:* string

---

##### `WorkbenchCustomEndpoint`<sup>Optional</sup> <a name="WorkbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpoint"></a>

```csharp
public string WorkbenchCustomEndpoint { get; }
```

- *Type:* string

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint"></a>

```csharp
public string WorkflowsCustomEndpoint { get; }
```

- *Type:* string

---

##### `WorkstationsCustomEndpoint`<sup>Optional</sup> <a name="WorkstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint"></a>

```csharp
public string WorkstationsCustomEndpoint { get; }
```

- *Type:* string

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBetaProviderBatching <a name="GoogleBetaProviderBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBetaProviderBatching {
    object EnableBatching = null,
    string SendAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching">EnableBatching</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#enable_batching GoogleBetaProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter">SendAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#send_after GoogleBetaProvider#send_after}. |

---

##### `EnableBatching`<sup>Optional</sup> <a name="EnableBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching"></a>

```csharp
public object EnableBatching { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#enable_batching GoogleBetaProvider#enable_batching}.

---

##### `SendAfter`<sup>Optional</sup> <a name="SendAfter" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter"></a>

```csharp
public string SendAfter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#send_after GoogleBetaProvider#send_after}.

---

### GoogleBetaProviderConfig <a name="GoogleBetaProviderConfig" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBetaProviderConfig {
    string AccessApprovalCustomEndpoint = null,
    string AccessContextManagerCustomEndpoint = null,
    string AccessToken = null,
    string ActiveDirectoryCustomEndpoint = null,
    object AddTerraformAttributionLabel = null,
    string Alias = null,
    string AlloydbCustomEndpoint = null,
    string ApiGatewayCustomEndpoint = null,
    string ApigeeCustomEndpoint = null,
    string ApikeysCustomEndpoint = null,
    string AppEngineCustomEndpoint = null,
    string ApphubCustomEndpoint = null,
    string ArtifactRegistryCustomEndpoint = null,
    string AssuredWorkloadsCustomEndpoint = null,
    string BackupDrCustomEndpoint = null,
    object Batching = null,
    string BeyondcorpCustomEndpoint = null,
    string BiglakeCustomEndpoint = null,
    string BigqueryAnalyticsHubCustomEndpoint = null,
    string BigqueryConnectionCustomEndpoint = null,
    string BigQueryCustomEndpoint = null,
    string BigqueryDatapolicyCustomEndpoint = null,
    string BigqueryDataTransferCustomEndpoint = null,
    string BigqueryReservationCustomEndpoint = null,
    string BigtableCustomEndpoint = null,
    string BillingCustomEndpoint = null,
    string BillingProject = null,
    string BinaryAuthorizationCustomEndpoint = null,
    string BlockchainNodeEngineCustomEndpoint = null,
    string CertificateManagerCustomEndpoint = null,
    string ChronicleCustomEndpoint = null,
    string CloudAssetCustomEndpoint = null,
    string CloudBillingCustomEndpoint = null,
    string CloudBuildCustomEndpoint = null,
    string Cloudbuildv2CustomEndpoint = null,
    string CloudBuildWorkerPoolCustomEndpoint = null,
    string ClouddeployCustomEndpoint = null,
    string ClouddomainsCustomEndpoint = null,
    string Cloudfunctions2CustomEndpoint = null,
    string CloudFunctionsCustomEndpoint = null,
    string CloudIdentityCustomEndpoint = null,
    string CloudIdsCustomEndpoint = null,
    string CloudQuotasCustomEndpoint = null,
    string CloudResourceManagerCustomEndpoint = null,
    string CloudRunCustomEndpoint = null,
    string CloudRunV2CustomEndpoint = null,
    string CloudSchedulerCustomEndpoint = null,
    string CloudTasksCustomEndpoint = null,
    string ColabCustomEndpoint = null,
    string ComposerCustomEndpoint = null,
    string ComputeCustomEndpoint = null,
    string ContainerAnalysisCustomEndpoint = null,
    string ContainerAttachedCustomEndpoint = null,
    string ContainerAwsCustomEndpoint = null,
    string ContainerAzureCustomEndpoint = null,
    string ContainerCustomEndpoint = null,
    string CoreBillingCustomEndpoint = null,
    string Credentials = null,
    string DatabaseMigrationServiceCustomEndpoint = null,
    string DataCatalogCustomEndpoint = null,
    string DataflowCustomEndpoint = null,
    string DataformCustomEndpoint = null,
    string DataFusionCustomEndpoint = null,
    string DataLossPreventionCustomEndpoint = null,
    string DataPipelineCustomEndpoint = null,
    string DataplexCustomEndpoint = null,
    string DataprocCustomEndpoint = null,
    string DataprocGdcCustomEndpoint = null,
    string DataprocMetastoreCustomEndpoint = null,
    string DatastreamCustomEndpoint = null,
    System.Collections.Generic.IDictionary<string, string> DefaultLabels = null,
    string DeploymentManagerCustomEndpoint = null,
    string DeveloperConnectCustomEndpoint = null,
    string DialogflowCustomEndpoint = null,
    string DialogflowCxCustomEndpoint = null,
    string DiscoveryEngineCustomEndpoint = null,
    string DnsCustomEndpoint = null,
    string DocumentAiCustomEndpoint = null,
    string DocumentAiWarehouseCustomEndpoint = null,
    string EdgecontainerCustomEndpoint = null,
    string EdgenetworkCustomEndpoint = null,
    string EssentialContactsCustomEndpoint = null,
    string EventarcCustomEndpoint = null,
    string FilestoreCustomEndpoint = null,
    string FirebaseAppCheckCustomEndpoint = null,
    string FirebaseCustomEndpoint = null,
    string FirebaseDatabaseCustomEndpoint = null,
    string FirebaseExtensionsCustomEndpoint = null,
    string FirebaseHostingCustomEndpoint = null,
    string FirebaserulesCustomEndpoint = null,
    string FirebaseStorageCustomEndpoint = null,
    string FirestoreCustomEndpoint = null,
    string GeminiCustomEndpoint = null,
    string GkeBackupCustomEndpoint = null,
    string GkeHub2CustomEndpoint = null,
    string GkeHubCustomEndpoint = null,
    string GkehubFeatureCustomEndpoint = null,
    string GkeonpremCustomEndpoint = null,
    string HealthcareCustomEndpoint = null,
    string Iam2CustomEndpoint = null,
    string Iam3CustomEndpoint = null,
    string IamBetaCustomEndpoint = null,
    string IamCredentialsCustomEndpoint = null,
    string IamCustomEndpoint = null,
    string IamWorkforcePoolCustomEndpoint = null,
    string IapCustomEndpoint = null,
    string IdentityPlatformCustomEndpoint = null,
    string ImpersonateServiceAccount = null,
    string[] ImpersonateServiceAccountDelegates = null,
    string IntegrationConnectorsCustomEndpoint = null,
    string IntegrationsCustomEndpoint = null,
    string KmsCustomEndpoint = null,
    string LoggingCustomEndpoint = null,
    string LookerCustomEndpoint = null,
    string ManagedKafkaCustomEndpoint = null,
    string MemcacheCustomEndpoint = null,
    string MemorystoreCustomEndpoint = null,
    string MigrationCenterCustomEndpoint = null,
    string MlEngineCustomEndpoint = null,
    string MonitoringCustomEndpoint = null,
    string NetappCustomEndpoint = null,
    string NetworkConnectivityCustomEndpoint = null,
    string NetworkManagementCustomEndpoint = null,
    string NetworkSecurityCustomEndpoint = null,
    string NetworkServicesCustomEndpoint = null,
    string NotebooksCustomEndpoint = null,
    string OracleDatabaseCustomEndpoint = null,
    string OrgPolicyCustomEndpoint = null,
    string OsConfigCustomEndpoint = null,
    string OsLoginCustomEndpoint = null,
    string ParallelstoreCustomEndpoint = null,
    string ParameterManagerCustomEndpoint = null,
    string ParameterManagerRegionalCustomEndpoint = null,
    string PrivatecaCustomEndpoint = null,
    string PrivilegedAccessManagerCustomEndpoint = null,
    string Project = null,
    string PublicCaCustomEndpoint = null,
    string PubsubCustomEndpoint = null,
    string PubsubLiteCustomEndpoint = null,
    string RecaptchaEnterpriseCustomEndpoint = null,
    string RedisCustomEndpoint = null,
    string Region = null,
    string RequestReason = null,
    string RequestTimeout = null,
    string ResourceManagerCustomEndpoint = null,
    string ResourceManagerV3CustomEndpoint = null,
    string RuntimeconfigCustomEndpoint = null,
    string RuntimeConfigCustomEndpoint = null,
    string[] Scopes = null,
    string SecretManagerCustomEndpoint = null,
    string SecretManagerRegionalCustomEndpoint = null,
    string SecureSourceManagerCustomEndpoint = null,
    string SecurityCenterCustomEndpoint = null,
    string SecurityCenterManagementCustomEndpoint = null,
    string SecurityCenterV2CustomEndpoint = null,
    string SecuritypostureCustomEndpoint = null,
    string SecurityScannerCustomEndpoint = null,
    string ServiceDirectoryCustomEndpoint = null,
    string ServiceManagementCustomEndpoint = null,
    string ServiceNetworkingCustomEndpoint = null,
    string ServiceUsageCustomEndpoint = null,
    string SiteVerificationCustomEndpoint = null,
    string SourceRepoCustomEndpoint = null,
    string SpannerCustomEndpoint = null,
    string SqlCustomEndpoint = null,
    string StorageCustomEndpoint = null,
    string StorageInsightsCustomEndpoint = null,
    string StorageTransferCustomEndpoint = null,
    string TagsCustomEndpoint = null,
    string TagsLocationCustomEndpoint = null,
    string TerraformAttributionLabelAdditionStrategy = null,
    string TpuCustomEndpoint = null,
    string TpuV2CustomEndpoint = null,
    string TranscoderCustomEndpoint = null,
    string UniverseDomain = null,
    object UserProjectOverride = null,
    string VertexAiCustomEndpoint = null,
    string VmwareengineCustomEndpoint = null,
    string VpcAccessCustomEndpoint = null,
    string WorkbenchCustomEndpoint = null,
    string WorkflowsCustomEndpoint = null,
    string WorkstationsCustomEndpoint = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#access_token GoogleBetaProvider#access_token}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.addTerraformAttributionLabel">AddTerraformAttributionLabel</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint">ApiGatewayCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apphubCustomEndpoint">ApphubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.backupDrCustomEndpoint">BackupDrCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching">Batching</a></code> | <code>object</code> | batching block. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.biglakeCustomEndpoint">BiglakeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject">BillingProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#billing_project GoogleBetaProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.blockchainNodeEngineCustomEndpoint">BlockchainNodeEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.chronicleCustomEndpoint">ChronicleCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#chronicle_custom_endpoint GoogleBetaProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint">Cloudbuildv2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">CloudBuildWorkerPoolCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddomainsCustomEndpoint">ClouddomainsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudQuotasCustomEndpoint">CloudQuotasCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.colabCustomEndpoint">ColabCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#colab_custom_endpoint GoogleBetaProvider#colab_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.coreBillingCustomEndpoint">CoreBillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials">Credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#credentials GoogleBetaProvider#credentials}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint">DatabaseMigrationServiceCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint">DataformCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataPipelineCustomEndpoint">DataPipelineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocGdcCustomEndpoint">DataprocGdcCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.defaultLabels">DefaultLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#default_labels GoogleBetaProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.developerConnectCustomEndpoint">DeveloperConnectCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.discoveryEngineCustomEndpoint">DiscoveryEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiWarehouseCustomEndpoint">DocumentAiWarehouseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgecontainerCustomEndpoint">EdgecontainerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgenetworkCustomEndpoint">EdgenetworkCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseAppCheckCustomEndpoint">FirebaseAppCheckCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint">FirebaseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint">FirebaseDatabaseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseExtensionsCustomEndpoint">FirebaseExtensionsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint">FirebaseHostingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint">FirebaseStorageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.geminiCustomEndpoint">GeminiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHub2CustomEndpoint">GkeHub2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint">GkehubFeatureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint">GkeonpremCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam3CustomEndpoint">Iam3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationConnectorsCustomEndpoint">IntegrationConnectorsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationsCustomEndpoint">IntegrationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.lookerCustomEndpoint">LookerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.managedKafkaCustomEndpoint">ManagedKafkaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memorystoreCustomEndpoint">MemorystoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.migrationCenterCustomEndpoint">MigrationCenterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.netappCustomEndpoint">NetappCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint">NetworkSecurityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.oracleDatabaseCustomEndpoint">OracleDatabaseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parallelstoreCustomEndpoint">ParallelstoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parameterManagerCustomEndpoint">ParameterManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#parameter_manager_custom_endpoint GoogleBetaProvider#parameter_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parameterManagerRegionalCustomEndpoint">ParameterManagerRegionalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#parameter_manager_regional_custom_endpoint GoogleBetaProvider#parameter_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privilegedAccessManagerCustomEndpoint">PrivilegedAccessManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#project GoogleBetaProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.publicCaCustomEndpoint">PublicCaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#region GoogleBetaProvider#region}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason">RequestReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#request_reason GoogleBetaProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#request_timeout GoogleBetaProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint">RuntimeconfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint">RuntimeConfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#scopes GoogleBetaProvider#scopes}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerRegionalCustomEndpoint">SecretManagerRegionalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secureSourceManagerCustomEndpoint">SecureSourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterManagementCustomEndpoint">SecurityCenterManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterV2CustomEndpoint">SecurityCenterV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securitypostureCustomEndpoint">SecuritypostureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint">SecurityScannerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint">ServiceDirectoryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.siteVerificationCustomEndpoint">SiteVerificationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageInsightsCustomEndpoint">StorageInsightsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.terraformAttributionLabelAdditionStrategy">TerraformAttributionLabelAdditionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuV2CustomEndpoint">TpuV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.transcoderCustomEndpoint">TranscoderCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.universeDomain">UniverseDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#universe_domain GoogleBetaProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride">UserProjectOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#user_project_override GoogleBetaProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vmwareengineCustomEndpoint">VmwareengineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workbenchCustomEndpoint">WorkbenchCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint">WorkstationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#zone GoogleBetaProvider#zone}. |

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint"></a>

```csharp
public string AccessApprovalCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}.

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```csharp
public string AccessContextManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#access_token GoogleBetaProvider#access_token}.

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```csharp
public string ActiveDirectoryCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}.

---

##### `AddTerraformAttributionLabel`<sup>Optional</sup> <a name="AddTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.addTerraformAttributionLabel"></a>

```csharp
public object AddTerraformAttributionLabel { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#alias GoogleBetaProvider#alias}

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint"></a>

```csharp
public string AlloydbCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}.

---

##### `ApiGatewayCustomEndpoint`<sup>Optional</sup> <a name="ApiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint"></a>

```csharp
public string ApiGatewayCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}.

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint"></a>

```csharp
public string ApigeeCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}.

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint"></a>

```csharp
public string ApikeysCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}.

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint"></a>

```csharp
public string AppEngineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}.

---

##### `ApphubCustomEndpoint`<sup>Optional</sup> <a name="ApphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apphubCustomEndpoint"></a>

```csharp
public string ApphubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}.

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```csharp
public string ArtifactRegistryCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}.

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```csharp
public string AssuredWorkloadsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}.

---

##### `BackupDrCustomEndpoint`<sup>Optional</sup> <a name="BackupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.backupDrCustomEndpoint"></a>

```csharp
public string BackupDrCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}.

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching"></a>

```csharp
public object Batching { get; set; }
```

- *Type:* object

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#batching GoogleBetaProvider#batching}

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint"></a>

```csharp
public string BeyondcorpCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}.

---

##### `BiglakeCustomEndpoint`<sup>Optional</sup> <a name="BiglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.biglakeCustomEndpoint"></a>

```csharp
public string BiglakeCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}.

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```csharp
public string BigqueryAnalyticsHubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```csharp
public string BigqueryConnectionCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}.

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint"></a>

```csharp
public string BigQueryCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}.

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```csharp
public string BigqueryDatapolicyCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```csharp
public string BigqueryDataTransferCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```csharp
public string BigqueryReservationCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}.

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint"></a>

```csharp
public string BigtableCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}.

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint"></a>

```csharp
public string BillingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}.

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject"></a>

```csharp
public string BillingProject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#billing_project GoogleBetaProvider#billing_project}.

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```csharp
public string BinaryAuthorizationCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}.

---

##### `BlockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```csharp
public string BlockchainNodeEngineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}.

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint"></a>

```csharp
public string CertificateManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}.

---

##### `ChronicleCustomEndpoint`<sup>Optional</sup> <a name="ChronicleCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.chronicleCustomEndpoint"></a>

```csharp
public string ChronicleCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#chronicle_custom_endpoint GoogleBetaProvider#chronicle_custom_endpoint}.

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint"></a>

```csharp
public string CloudAssetCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}.

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint"></a>

```csharp
public string CloudBillingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}.

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint"></a>

```csharp
public string CloudBuildCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}.

---

##### `Cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```csharp
public string Cloudbuildv2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}.

---

##### `CloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```csharp
public string CloudBuildWorkerPoolCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint"></a>

```csharp
public string ClouddeployCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}.

---

##### `ClouddomainsCustomEndpoint`<sup>Optional</sup> <a name="ClouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddomainsCustomEndpoint"></a>

```csharp
public string ClouddomainsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}.

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```csharp
public string Cloudfunctions2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}.

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```csharp
public string CloudFunctionsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}.

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```csharp
public string CloudIdentityCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}.

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint"></a>

```csharp
public string CloudIdsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}.

---

##### `CloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="CloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```csharp
public string CloudQuotasCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}.

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```csharp
public string CloudResourceManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}.

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint"></a>

```csharp
public string CloudRunCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}.

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```csharp
public string CloudRunV2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}.

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```csharp
public string CloudSchedulerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}.

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint"></a>

```csharp
public string CloudTasksCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}.

---

##### `ColabCustomEndpoint`<sup>Optional</sup> <a name="ColabCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.colabCustomEndpoint"></a>

```csharp
public string ColabCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#colab_custom_endpoint GoogleBetaProvider#colab_custom_endpoint}.

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint"></a>

```csharp
public string ComposerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}.

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint"></a>

```csharp
public string ComputeCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}.

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```csharp
public string ContainerAnalysisCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}.

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint"></a>

```csharp
public string ContainerAttachedCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}.

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint"></a>

```csharp
public string ContainerAwsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}.

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint"></a>

```csharp
public string ContainerAzureCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}.

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint"></a>

```csharp
public string ContainerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}.

---

##### `CoreBillingCustomEndpoint`<sup>Optional</sup> <a name="CoreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.coreBillingCustomEndpoint"></a>

```csharp
public string CoreBillingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#credentials GoogleBetaProvider#credentials}.

---

##### `DatabaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```csharp
public string DatabaseMigrationServiceCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}.

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint"></a>

```csharp
public string DataCatalogCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}.

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint"></a>

```csharp
public string DataflowCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}.

---

##### `DataformCustomEndpoint`<sup>Optional</sup> <a name="DataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint"></a>

```csharp
public string DataformCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}.

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint"></a>

```csharp
public string DataFusionCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}.

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```csharp
public string DataLossPreventionCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}.

---

##### `DataPipelineCustomEndpoint`<sup>Optional</sup> <a name="DataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataPipelineCustomEndpoint"></a>

```csharp
public string DataPipelineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}.

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint"></a>

```csharp
public string DataplexCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}.

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint"></a>

```csharp
public string DataprocCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}.

---

##### `DataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="DataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocGdcCustomEndpoint"></a>

```csharp
public string DataprocGdcCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}.

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```csharp
public string DataprocMetastoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}.

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint"></a>

```csharp
public string DatastreamCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}.

---

##### `DefaultLabels`<sup>Optional</sup> <a name="DefaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.defaultLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#default_labels GoogleBetaProvider#default_labels}.

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```csharp
public string DeploymentManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}.

---

##### `DeveloperConnectCustomEndpoint`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.developerConnectCustomEndpoint"></a>

```csharp
public string DeveloperConnectCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}.

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint"></a>

```csharp
public string DialogflowCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}.

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```csharp
public string DialogflowCxCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}.

---

##### `DiscoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```csharp
public string DiscoveryEngineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}.

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint"></a>

```csharp
public string DnsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}.

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint"></a>

```csharp
public string DocumentAiCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}.

---

##### `DocumentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```csharp
public string DocumentAiWarehouseCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}.

---

##### `EdgecontainerCustomEndpoint`<sup>Optional</sup> <a name="EdgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgecontainerCustomEndpoint"></a>

```csharp
public string EdgecontainerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}.

---

##### `EdgenetworkCustomEndpoint`<sup>Optional</sup> <a name="EdgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgenetworkCustomEndpoint"></a>

```csharp
public string EdgenetworkCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}.

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint"></a>

```csharp
public string EssentialContactsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}.

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint"></a>

```csharp
public string EventarcCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}.

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint"></a>

```csharp
public string FilestoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}.

---

##### `FirebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```csharp
public string FirebaseAppCheckCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}.

---

##### `FirebaseCustomEndpoint`<sup>Optional</sup> <a name="FirebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint"></a>

```csharp
public string FirebaseCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}.

---

##### `FirebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="FirebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint"></a>

```csharp
public string FirebaseDatabaseCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}.

---

##### `FirebaseExtensionsCustomEndpoint`<sup>Optional</sup> <a name="FirebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseExtensionsCustomEndpoint"></a>

```csharp
public string FirebaseExtensionsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}.

---

##### `FirebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="FirebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint"></a>

```csharp
public string FirebaseHostingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}.

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint"></a>

```csharp
public string FirebaserulesCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}.

---

##### `FirebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="FirebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint"></a>

```csharp
public string FirebaseStorageCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}.

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint"></a>

```csharp
public string FirestoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}.

---

##### `GeminiCustomEndpoint`<sup>Optional</sup> <a name="GeminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.geminiCustomEndpoint"></a>

```csharp
public string GeminiCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}.

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint"></a>

```csharp
public string GkeBackupCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}.

---

##### `GkeHub2CustomEndpoint`<sup>Optional</sup> <a name="GkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHub2CustomEndpoint"></a>

```csharp
public string GkeHub2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}.

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint"></a>

```csharp
public string GkeHubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}.

---

##### `GkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint"></a>

```csharp
public string GkehubFeatureCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}.

---

##### `GkeonpremCustomEndpoint`<sup>Optional</sup> <a name="GkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint"></a>

```csharp
public string GkeonpremCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}.

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint"></a>

```csharp
public string HealthcareCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}.

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint"></a>

```csharp
public string Iam2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}.

---

##### `Iam3CustomEndpoint`<sup>Optional</sup> <a name="Iam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam3CustomEndpoint"></a>

```csharp
public string Iam3CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}.

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint"></a>

```csharp
public string IamBetaCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}.

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```csharp
public string IamCredentialsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}.

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint"></a>

```csharp
public string IamCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}.

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```csharp
public string IamWorkforcePoolCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}.

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint"></a>

```csharp
public string IapCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}.

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint"></a>

```csharp
public string IdentityPlatformCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}.

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount"></a>

```csharp
public string ImpersonateServiceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}.

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates"></a>

```csharp
public string[] ImpersonateServiceAccountDelegates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}.

---

##### `IntegrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```csharp
public string IntegrationConnectorsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}.

---

##### `IntegrationsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationsCustomEndpoint"></a>

```csharp
public string IntegrationsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}.

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint"></a>

```csharp
public string KmsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}.

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint"></a>

```csharp
public string LoggingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}.

---

##### `LookerCustomEndpoint`<sup>Optional</sup> <a name="LookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.lookerCustomEndpoint"></a>

```csharp
public string LookerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}.

---

##### `ManagedKafkaCustomEndpoint`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.managedKafkaCustomEndpoint"></a>

```csharp
public string ManagedKafkaCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}.

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint"></a>

```csharp
public string MemcacheCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}.

---

##### `MemorystoreCustomEndpoint`<sup>Optional</sup> <a name="MemorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memorystoreCustomEndpoint"></a>

```csharp
public string MemorystoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}.

---

##### `MigrationCenterCustomEndpoint`<sup>Optional</sup> <a name="MigrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.migrationCenterCustomEndpoint"></a>

```csharp
public string MigrationCenterCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}.

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint"></a>

```csharp
public string MlEngineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}.

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint"></a>

```csharp
public string MonitoringCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}.

---

##### `NetappCustomEndpoint`<sup>Optional</sup> <a name="NetappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.netappCustomEndpoint"></a>

```csharp
public string NetappCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}.

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```csharp
public string NetworkConnectivityCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}.

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint"></a>

```csharp
public string NetworkManagementCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}.

---

##### `NetworkSecurityCustomEndpoint`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint"></a>

```csharp
public string NetworkSecurityCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}.

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint"></a>

```csharp
public string NetworkServicesCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}.

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint"></a>

```csharp
public string NotebooksCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}.

---

##### `OracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.oracleDatabaseCustomEndpoint"></a>

```csharp
public string OracleDatabaseCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}.

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint"></a>

```csharp
public string OrgPolicyCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}.

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint"></a>

```csharp
public string OsConfigCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}.

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint"></a>

```csharp
public string OsLoginCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}.

---

##### `ParallelstoreCustomEndpoint`<sup>Optional</sup> <a name="ParallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parallelstoreCustomEndpoint"></a>

```csharp
public string ParallelstoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}.

---

##### `ParameterManagerCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parameterManagerCustomEndpoint"></a>

```csharp
public string ParameterManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#parameter_manager_custom_endpoint GoogleBetaProvider#parameter_manager_custom_endpoint}.

---

##### `ParameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parameterManagerRegionalCustomEndpoint"></a>

```csharp
public string ParameterManagerRegionalCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#parameter_manager_regional_custom_endpoint GoogleBetaProvider#parameter_manager_regional_custom_endpoint}.

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint"></a>

```csharp
public string PrivatecaCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}.

---

##### `PrivilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privilegedAccessManagerCustomEndpoint"></a>

```csharp
public string PrivilegedAccessManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#project GoogleBetaProvider#project}.

---

##### `PublicCaCustomEndpoint`<sup>Optional</sup> <a name="PublicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.publicCaCustomEndpoint"></a>

```csharp
public string PublicCaCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}.

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint"></a>

```csharp
public string PubsubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}.

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```csharp
public string PubsubLiteCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}.

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```csharp
public string RecaptchaEnterpriseCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint"></a>

```csharp
public string RedisCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#region GoogleBetaProvider#region}.

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason"></a>

```csharp
public string RequestReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#request_reason GoogleBetaProvider#request_reason}.

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout"></a>

```csharp
public string RequestTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#request_timeout GoogleBetaProvider#request_timeout}.

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint"></a>

```csharp
public string ResourceManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}.

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```csharp
public string ResourceManagerV3CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}.

---

##### `RuntimeconfigCustomEndpoint`<sup>Optional</sup> <a name="RuntimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint"></a>

```csharp
public string RuntimeconfigCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}.

---

##### `RuntimeConfigCustomEndpoint`<sup>Optional</sup> <a name="RuntimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint"></a>

```csharp
public string RuntimeConfigCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#scopes GoogleBetaProvider#scopes}.

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint"></a>

```csharp
public string SecretManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}.

---

##### `SecretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerRegionalCustomEndpoint"></a>

```csharp
public string SecretManagerRegionalCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}.

---

##### `SecureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```csharp
public string SecureSourceManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}.

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint"></a>

```csharp
public string SecurityCenterCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}.

---

##### `SecurityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterManagementCustomEndpoint"></a>

```csharp
public string SecurityCenterManagementCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}.

---

##### `SecurityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterV2CustomEndpoint"></a>

```csharp
public string SecurityCenterV2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}.

---

##### `SecuritypostureCustomEndpoint`<sup>Optional</sup> <a name="SecuritypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securitypostureCustomEndpoint"></a>

```csharp
public string SecuritypostureCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}.

---

##### `SecurityScannerCustomEndpoint`<sup>Optional</sup> <a name="SecurityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint"></a>

```csharp
public string SecurityScannerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}.

---

##### `ServiceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ServiceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint"></a>

```csharp
public string ServiceDirectoryCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}.

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint"></a>

```csharp
public string ServiceManagementCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}.

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```csharp
public string ServiceNetworkingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}.

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint"></a>

```csharp
public string ServiceUsageCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}.

---

##### `SiteVerificationCustomEndpoint`<sup>Optional</sup> <a name="SiteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.siteVerificationCustomEndpoint"></a>

```csharp
public string SiteVerificationCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}.

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint"></a>

```csharp
public string SourceRepoCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}.

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint"></a>

```csharp
public string SpannerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}.

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint"></a>

```csharp
public string SqlCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}.

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint"></a>

```csharp
public string StorageCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}.

---

##### `StorageInsightsCustomEndpoint`<sup>Optional</sup> <a name="StorageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageInsightsCustomEndpoint"></a>

```csharp
public string StorageInsightsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}.

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint"></a>

```csharp
public string StorageTransferCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}.

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint"></a>

```csharp
public string TagsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}.

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint"></a>

```csharp
public string TagsLocationCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}.

---

##### `TerraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```csharp
public string TerraformAttributionLabelAdditionStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}.

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint"></a>

```csharp
public string TpuCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}.

---

##### `TpuV2CustomEndpoint`<sup>Optional</sup> <a name="TpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuV2CustomEndpoint"></a>

```csharp
public string TpuV2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}.

---

##### `TranscoderCustomEndpoint`<sup>Optional</sup> <a name="TranscoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.transcoderCustomEndpoint"></a>

```csharp
public string TranscoderCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}.

---

##### `UniverseDomain`<sup>Optional</sup> <a name="UniverseDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.universeDomain"></a>

```csharp
public string UniverseDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#universe_domain GoogleBetaProvider#universe_domain}.

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride"></a>

```csharp
public object UserProjectOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#user_project_override GoogleBetaProvider#user_project_override}.

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint"></a>

```csharp
public string VertexAiCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}.

---

##### `VmwareengineCustomEndpoint`<sup>Optional</sup> <a name="VmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vmwareengineCustomEndpoint"></a>

```csharp
public string VmwareengineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}.

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint"></a>

```csharp
public string VpcAccessCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}.

---

##### `WorkbenchCustomEndpoint`<sup>Optional</sup> <a name="WorkbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workbenchCustomEndpoint"></a>

```csharp
public string WorkbenchCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}.

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint"></a>

```csharp
public string WorkflowsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}.

---

##### `WorkstationsCustomEndpoint`<sup>Optional</sup> <a name="WorkstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint"></a>

```csharp
public string WorkstationsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs#zone GoogleBetaProvider#zone}.

---



