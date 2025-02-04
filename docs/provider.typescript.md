# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google-beta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBetaProvider <a name="GoogleBetaProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs google-beta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-google-beta'

new provider.GoogleBetaProvider(scope: Construct, id: string, config?: GoogleBetaProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig">GoogleBetaProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig">GoogleBetaProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint">resetAccessApprovalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint">resetAccessContextManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint">resetActiveDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAddTerraformAttributionLabel">resetAddTerraformAttributionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint">resetAlloydbCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint">resetApiGatewayCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint">resetApigeeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApihubCustomEndpoint">resetApihubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint">resetApikeysCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint">resetAppEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApphubCustomEndpoint">resetApphubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint">resetArtifactRegistryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint">resetAssuredWorkloadsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBackupDrCustomEndpoint">resetBackupDrCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching">resetBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint">resetBeyondcorpCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBiglakeCustomEndpoint">resetBiglakeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryAnalyticsHubCustomEndpoint">resetBigqueryAnalyticsHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryConnectionCustomEndpoint">resetBigqueryConnectionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigQueryCustomEndpoint">resetBigQueryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDatapolicyCustomEndpoint">resetBigqueryDatapolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDataTransferCustomEndpoint">resetBigqueryDataTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryReservationCustomEndpoint">resetBigqueryReservationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigtableCustomEndpoint">resetBigtableCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingCustomEndpoint">resetBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingProject">resetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBinaryAuthorizationCustomEndpoint">resetBinaryAuthorizationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBlockchainNodeEngineCustomEndpoint">resetBlockchainNodeEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint">resetCertificateManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetChronicleCustomEndpoint">resetChronicleCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint">resetCloudAssetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint">resetCloudBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint">resetCloudBuildCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint">resetCloudbuildv2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint">resetCloudBuildWorkerPoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint">resetClouddeployCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddomainsCustomEndpoint">resetClouddomainsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint">resetCloudfunctions2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint">resetCloudFunctionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint">resetCloudIdentityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint">resetCloudIdsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudQuotasCustomEndpoint">resetCloudQuotasCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint">resetCloudResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint">resetCloudRunCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint">resetCloudRunV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint">resetCloudSchedulerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint">resetCloudTasksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetColabCustomEndpoint">resetColabCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint">resetComposerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint">resetComputeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint">resetContainerAnalysisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint">resetContainerAttachedCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint">resetContainerAwsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint">resetContainerAzureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint">resetContainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCoreBillingCustomEndpoint">resetCoreBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint">resetDatabaseMigrationServiceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint">resetDataCatalogCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint">resetDataflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint">resetDataformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint">resetDataFusionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint">resetDataLossPreventionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataPipelineCustomEndpoint">resetDataPipelineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint">resetDataplexCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint">resetDataprocCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocGdcCustomEndpoint">resetDataprocGdcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint">resetDataprocMetastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint">resetDatastreamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDefaultLabels">resetDefaultLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint">resetDeploymentManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeveloperConnectCustomEndpoint">resetDeveloperConnectCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint">resetDialogflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint">resetDialogflowCxCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDiscoveryEngineCustomEndpoint">resetDiscoveryEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint">resetDnsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint">resetDocumentAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiWarehouseCustomEndpoint">resetDocumentAiWarehouseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgecontainerCustomEndpoint">resetEdgecontainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgenetworkCustomEndpoint">resetEdgenetworkCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint">resetEssentialContactsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint">resetEventarcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint">resetFilestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseAppCheckCustomEndpoint">resetFirebaseAppCheckCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint">resetFirebaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint">resetFirebaseDatabaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseExtensionsCustomEndpoint">resetFirebaseExtensionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint">resetFirebaseHostingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint">resetFirebaserulesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint">resetFirebaseStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint">resetFirestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGeminiCustomEndpoint">resetGeminiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint">resetGkeBackupCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHub2CustomEndpoint">resetGkeHub2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint">resetGkeHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint">resetGkehubFeatureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint">resetGkeonpremCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint">resetHealthcareCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint">resetIam2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam3CustomEndpoint">resetIam3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint">resetIamBetaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint">resetIamCredentialsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint">resetIamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint">resetIamWorkforcePoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint">resetIapCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint">resetIdentityPlatformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount">resetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates">resetImpersonateServiceAccountDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationConnectorsCustomEndpoint">resetIntegrationConnectorsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationsCustomEndpoint">resetIntegrationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint">resetKmsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint">resetLoggingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLookerCustomEndpoint">resetLookerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetManagedKafkaCustomEndpoint">resetManagedKafkaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint">resetMemcacheCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemorystoreCustomEndpoint">resetMemorystoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMigrationCenterCustomEndpoint">resetMigrationCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint">resetMlEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint">resetMonitoringCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetappCustomEndpoint">resetNetappCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint">resetNetworkConnectivityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint">resetNetworkManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint">resetNetworkSecurityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint">resetNetworkServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint">resetNotebooksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOracleDatabaseCustomEndpoint">resetOracleDatabaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint">resetOrgPolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint">resetOsConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint">resetOsLoginCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParallelstoreCustomEndpoint">resetParallelstoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParameterManagerCustomEndpoint">resetParameterManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParameterManagerRegionalCustomEndpoint">resetParameterManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint">resetPrivatecaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivilegedAccessManagerCustomEndpoint">resetPrivilegedAccessManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPublicCaCustomEndpoint">resetPublicCaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubCustomEndpoint">resetPubsubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubLiteCustomEndpoint">resetPubsubLiteCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRecaptchaEnterpriseCustomEndpoint">resetRecaptchaEnterpriseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRedisCustomEndpoint">resetRedisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestReason">resetRequestReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerCustomEndpoint">resetResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerV3CustomEndpoint">resetResourceManagerV3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeconfigCustomEndpoint">resetRuntimeconfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeConfigCustomEndpoint">resetRuntimeConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerCustomEndpoint">resetSecretManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerRegionalCustomEndpoint">resetSecretManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecureSourceManagerCustomEndpoint">resetSecureSourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint">resetSecurityCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterManagementCustomEndpoint">resetSecurityCenterManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterV2CustomEndpoint">resetSecurityCenterV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecuritypostureCustomEndpoint">resetSecuritypostureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint">resetSecurityScannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint">resetServiceDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint">resetServiceManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint">resetServiceNetworkingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint">resetServiceUsageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSiteVerificationCustomEndpoint">resetSiteVerificationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint">resetSourceRepoCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint">resetSpannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint">resetSqlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint">resetStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageInsightsCustomEndpoint">resetStorageInsightsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint">resetStorageTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint">resetTagsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint">resetTagsLocationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTerraformAttributionLabelAdditionStrategy">resetTerraformAttributionLabelAdditionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint">resetTpuCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuV2CustomEndpoint">resetTpuV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTranscoderCustomEndpoint">resetTranscoderCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUniverseDomain">resetUniverseDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride">resetUserProjectOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint">resetVertexAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVmwareengineCustomEndpoint">resetVmwareengineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint">resetVpcAccessCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkbenchCustomEndpoint">resetWorkbenchCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint">resetWorkflowsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint">resetWorkstationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessApprovalCustomEndpoint` <a name="resetAccessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint"></a>

```typescript
public resetAccessApprovalCustomEndpoint(): void
```

##### `resetAccessContextManagerCustomEndpoint` <a name="resetAccessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint"></a>

```typescript
public resetAccessContextManagerCustomEndpoint(): void
```

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetActiveDirectoryCustomEndpoint` <a name="resetActiveDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint"></a>

```typescript
public resetActiveDirectoryCustomEndpoint(): void
```

##### `resetAddTerraformAttributionLabel` <a name="resetAddTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAddTerraformAttributionLabel"></a>

```typescript
public resetAddTerraformAttributionLabel(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAlloydbCustomEndpoint` <a name="resetAlloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint"></a>

```typescript
public resetAlloydbCustomEndpoint(): void
```

##### `resetApiGatewayCustomEndpoint` <a name="resetApiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint"></a>

```typescript
public resetApiGatewayCustomEndpoint(): void
```

##### `resetApigeeCustomEndpoint` <a name="resetApigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint"></a>

```typescript
public resetApigeeCustomEndpoint(): void
```

##### `resetApihubCustomEndpoint` <a name="resetApihubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApihubCustomEndpoint"></a>

```typescript
public resetApihubCustomEndpoint(): void
```

##### `resetApikeysCustomEndpoint` <a name="resetApikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint"></a>

```typescript
public resetApikeysCustomEndpoint(): void
```

##### `resetAppEngineCustomEndpoint` <a name="resetAppEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint"></a>

```typescript
public resetAppEngineCustomEndpoint(): void
```

##### `resetApphubCustomEndpoint` <a name="resetApphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApphubCustomEndpoint"></a>

```typescript
public resetApphubCustomEndpoint(): void
```

##### `resetArtifactRegistryCustomEndpoint` <a name="resetArtifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint"></a>

```typescript
public resetArtifactRegistryCustomEndpoint(): void
```

##### `resetAssuredWorkloadsCustomEndpoint` <a name="resetAssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```typescript
public resetAssuredWorkloadsCustomEndpoint(): void
```

##### `resetBackupDrCustomEndpoint` <a name="resetBackupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBackupDrCustomEndpoint"></a>

```typescript
public resetBackupDrCustomEndpoint(): void
```

##### `resetBatching` <a name="resetBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching"></a>

```typescript
public resetBatching(): void
```

##### `resetBeyondcorpCustomEndpoint` <a name="resetBeyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint"></a>

```typescript
public resetBeyondcorpCustomEndpoint(): void
```

##### `resetBiglakeCustomEndpoint` <a name="resetBiglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBiglakeCustomEndpoint"></a>

```typescript
public resetBiglakeCustomEndpoint(): void
```

##### `resetBigqueryAnalyticsHubCustomEndpoint` <a name="resetBigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```typescript
public resetBigqueryAnalyticsHubCustomEndpoint(): void
```

##### `resetBigqueryConnectionCustomEndpoint` <a name="resetBigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryConnectionCustomEndpoint"></a>

```typescript
public resetBigqueryConnectionCustomEndpoint(): void
```

##### `resetBigQueryCustomEndpoint` <a name="resetBigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigQueryCustomEndpoint"></a>

```typescript
public resetBigQueryCustomEndpoint(): void
```

##### `resetBigqueryDatapolicyCustomEndpoint` <a name="resetBigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```typescript
public resetBigqueryDatapolicyCustomEndpoint(): void
```

##### `resetBigqueryDataTransferCustomEndpoint` <a name="resetBigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```typescript
public resetBigqueryDataTransferCustomEndpoint(): void
```

##### `resetBigqueryReservationCustomEndpoint` <a name="resetBigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryReservationCustomEndpoint"></a>

```typescript
public resetBigqueryReservationCustomEndpoint(): void
```

##### `resetBigtableCustomEndpoint` <a name="resetBigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigtableCustomEndpoint"></a>

```typescript
public resetBigtableCustomEndpoint(): void
```

##### `resetBillingCustomEndpoint` <a name="resetBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingCustomEndpoint"></a>

```typescript
public resetBillingCustomEndpoint(): void
```

##### `resetBillingProject` <a name="resetBillingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingProject"></a>

```typescript
public resetBillingProject(): void
```

##### `resetBinaryAuthorizationCustomEndpoint` <a name="resetBinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```typescript
public resetBinaryAuthorizationCustomEndpoint(): void
```

##### `resetBlockchainNodeEngineCustomEndpoint` <a name="resetBlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```typescript
public resetBlockchainNodeEngineCustomEndpoint(): void
```

##### `resetCertificateManagerCustomEndpoint` <a name="resetCertificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint"></a>

```typescript
public resetCertificateManagerCustomEndpoint(): void
```

##### `resetChronicleCustomEndpoint` <a name="resetChronicleCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetChronicleCustomEndpoint"></a>

```typescript
public resetChronicleCustomEndpoint(): void
```

##### `resetCloudAssetCustomEndpoint` <a name="resetCloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint"></a>

```typescript
public resetCloudAssetCustomEndpoint(): void
```

##### `resetCloudBillingCustomEndpoint` <a name="resetCloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint"></a>

```typescript
public resetCloudBillingCustomEndpoint(): void
```

##### `resetCloudBuildCustomEndpoint` <a name="resetCloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint"></a>

```typescript
public resetCloudBuildCustomEndpoint(): void
```

##### `resetCloudbuildv2CustomEndpoint` <a name="resetCloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint"></a>

```typescript
public resetCloudbuildv2CustomEndpoint(): void
```

##### `resetCloudBuildWorkerPoolCustomEndpoint` <a name="resetCloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```typescript
public resetCloudBuildWorkerPoolCustomEndpoint(): void
```

##### `resetClouddeployCustomEndpoint` <a name="resetClouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint"></a>

```typescript
public resetClouddeployCustomEndpoint(): void
```

##### `resetClouddomainsCustomEndpoint` <a name="resetClouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddomainsCustomEndpoint"></a>

```typescript
public resetClouddomainsCustomEndpoint(): void
```

##### `resetCloudfunctions2CustomEndpoint` <a name="resetCloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint"></a>

```typescript
public resetCloudfunctions2CustomEndpoint(): void
```

##### `resetCloudFunctionsCustomEndpoint` <a name="resetCloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint"></a>

```typescript
public resetCloudFunctionsCustomEndpoint(): void
```

##### `resetCloudIdentityCustomEndpoint` <a name="resetCloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint"></a>

```typescript
public resetCloudIdentityCustomEndpoint(): void
```

##### `resetCloudIdsCustomEndpoint` <a name="resetCloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint"></a>

```typescript
public resetCloudIdsCustomEndpoint(): void
```

##### `resetCloudQuotasCustomEndpoint` <a name="resetCloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudQuotasCustomEndpoint"></a>

```typescript
public resetCloudQuotasCustomEndpoint(): void
```

##### `resetCloudResourceManagerCustomEndpoint` <a name="resetCloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint"></a>

```typescript
public resetCloudResourceManagerCustomEndpoint(): void
```

##### `resetCloudRunCustomEndpoint` <a name="resetCloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint"></a>

```typescript
public resetCloudRunCustomEndpoint(): void
```

##### `resetCloudRunV2CustomEndpoint` <a name="resetCloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint"></a>

```typescript
public resetCloudRunV2CustomEndpoint(): void
```

##### `resetCloudSchedulerCustomEndpoint` <a name="resetCloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint"></a>

```typescript
public resetCloudSchedulerCustomEndpoint(): void
```

##### `resetCloudTasksCustomEndpoint` <a name="resetCloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint"></a>

```typescript
public resetCloudTasksCustomEndpoint(): void
```

##### `resetColabCustomEndpoint` <a name="resetColabCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetColabCustomEndpoint"></a>

```typescript
public resetColabCustomEndpoint(): void
```

##### `resetComposerCustomEndpoint` <a name="resetComposerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint"></a>

```typescript
public resetComposerCustomEndpoint(): void
```

##### `resetComputeCustomEndpoint` <a name="resetComputeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint"></a>

```typescript
public resetComputeCustomEndpoint(): void
```

##### `resetContainerAnalysisCustomEndpoint` <a name="resetContainerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint"></a>

```typescript
public resetContainerAnalysisCustomEndpoint(): void
```

##### `resetContainerAttachedCustomEndpoint` <a name="resetContainerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint"></a>

```typescript
public resetContainerAttachedCustomEndpoint(): void
```

##### `resetContainerAwsCustomEndpoint` <a name="resetContainerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint"></a>

```typescript
public resetContainerAwsCustomEndpoint(): void
```

##### `resetContainerAzureCustomEndpoint` <a name="resetContainerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint"></a>

```typescript
public resetContainerAzureCustomEndpoint(): void
```

##### `resetContainerCustomEndpoint` <a name="resetContainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint"></a>

```typescript
public resetContainerCustomEndpoint(): void
```

##### `resetCoreBillingCustomEndpoint` <a name="resetCoreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCoreBillingCustomEndpoint"></a>

```typescript
public resetCoreBillingCustomEndpoint(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDatabaseMigrationServiceCustomEndpoint` <a name="resetDatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```typescript
public resetDatabaseMigrationServiceCustomEndpoint(): void
```

##### `resetDataCatalogCustomEndpoint` <a name="resetDataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint"></a>

```typescript
public resetDataCatalogCustomEndpoint(): void
```

##### `resetDataflowCustomEndpoint` <a name="resetDataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint"></a>

```typescript
public resetDataflowCustomEndpoint(): void
```

##### `resetDataformCustomEndpoint` <a name="resetDataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint"></a>

```typescript
public resetDataformCustomEndpoint(): void
```

##### `resetDataFusionCustomEndpoint` <a name="resetDataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint"></a>

```typescript
public resetDataFusionCustomEndpoint(): void
```

##### `resetDataLossPreventionCustomEndpoint` <a name="resetDataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint"></a>

```typescript
public resetDataLossPreventionCustomEndpoint(): void
```

##### `resetDataPipelineCustomEndpoint` <a name="resetDataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataPipelineCustomEndpoint"></a>

```typescript
public resetDataPipelineCustomEndpoint(): void
```

##### `resetDataplexCustomEndpoint` <a name="resetDataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint"></a>

```typescript
public resetDataplexCustomEndpoint(): void
```

##### `resetDataprocCustomEndpoint` <a name="resetDataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint"></a>

```typescript
public resetDataprocCustomEndpoint(): void
```

##### `resetDataprocGdcCustomEndpoint` <a name="resetDataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocGdcCustomEndpoint"></a>

```typescript
public resetDataprocGdcCustomEndpoint(): void
```

##### `resetDataprocMetastoreCustomEndpoint` <a name="resetDataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint"></a>

```typescript
public resetDataprocMetastoreCustomEndpoint(): void
```

##### `resetDatastreamCustomEndpoint` <a name="resetDatastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint"></a>

```typescript
public resetDatastreamCustomEndpoint(): void
```

##### `resetDefaultLabels` <a name="resetDefaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDefaultLabels"></a>

```typescript
public resetDefaultLabels(): void
```

##### `resetDeploymentManagerCustomEndpoint` <a name="resetDeploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint"></a>

```typescript
public resetDeploymentManagerCustomEndpoint(): void
```

##### `resetDeveloperConnectCustomEndpoint` <a name="resetDeveloperConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeveloperConnectCustomEndpoint"></a>

```typescript
public resetDeveloperConnectCustomEndpoint(): void
```

##### `resetDialogflowCustomEndpoint` <a name="resetDialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint"></a>

```typescript
public resetDialogflowCustomEndpoint(): void
```

##### `resetDialogflowCxCustomEndpoint` <a name="resetDialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint"></a>

```typescript
public resetDialogflowCxCustomEndpoint(): void
```

##### `resetDiscoveryEngineCustomEndpoint` <a name="resetDiscoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDiscoveryEngineCustomEndpoint"></a>

```typescript
public resetDiscoveryEngineCustomEndpoint(): void
```

##### `resetDnsCustomEndpoint` <a name="resetDnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint"></a>

```typescript
public resetDnsCustomEndpoint(): void
```

##### `resetDocumentAiCustomEndpoint` <a name="resetDocumentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint"></a>

```typescript
public resetDocumentAiCustomEndpoint(): void
```

##### `resetDocumentAiWarehouseCustomEndpoint` <a name="resetDocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```typescript
public resetDocumentAiWarehouseCustomEndpoint(): void
```

##### `resetEdgecontainerCustomEndpoint` <a name="resetEdgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgecontainerCustomEndpoint"></a>

```typescript
public resetEdgecontainerCustomEndpoint(): void
```

##### `resetEdgenetworkCustomEndpoint` <a name="resetEdgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgenetworkCustomEndpoint"></a>

```typescript
public resetEdgenetworkCustomEndpoint(): void
```

##### `resetEssentialContactsCustomEndpoint` <a name="resetEssentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint"></a>

```typescript
public resetEssentialContactsCustomEndpoint(): void
```

##### `resetEventarcCustomEndpoint` <a name="resetEventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint"></a>

```typescript
public resetEventarcCustomEndpoint(): void
```

##### `resetFilestoreCustomEndpoint` <a name="resetFilestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint"></a>

```typescript
public resetFilestoreCustomEndpoint(): void
```

##### `resetFirebaseAppCheckCustomEndpoint` <a name="resetFirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```typescript
public resetFirebaseAppCheckCustomEndpoint(): void
```

##### `resetFirebaseCustomEndpoint` <a name="resetFirebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint"></a>

```typescript
public resetFirebaseCustomEndpoint(): void
```

##### `resetFirebaseDatabaseCustomEndpoint` <a name="resetFirebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint"></a>

```typescript
public resetFirebaseDatabaseCustomEndpoint(): void
```

##### `resetFirebaseExtensionsCustomEndpoint` <a name="resetFirebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseExtensionsCustomEndpoint"></a>

```typescript
public resetFirebaseExtensionsCustomEndpoint(): void
```

##### `resetFirebaseHostingCustomEndpoint` <a name="resetFirebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint"></a>

```typescript
public resetFirebaseHostingCustomEndpoint(): void
```

##### `resetFirebaserulesCustomEndpoint` <a name="resetFirebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint"></a>

```typescript
public resetFirebaserulesCustomEndpoint(): void
```

##### `resetFirebaseStorageCustomEndpoint` <a name="resetFirebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint"></a>

```typescript
public resetFirebaseStorageCustomEndpoint(): void
```

##### `resetFirestoreCustomEndpoint` <a name="resetFirestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint"></a>

```typescript
public resetFirestoreCustomEndpoint(): void
```

##### `resetGeminiCustomEndpoint` <a name="resetGeminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGeminiCustomEndpoint"></a>

```typescript
public resetGeminiCustomEndpoint(): void
```

##### `resetGkeBackupCustomEndpoint` <a name="resetGkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint"></a>

```typescript
public resetGkeBackupCustomEndpoint(): void
```

##### `resetGkeHub2CustomEndpoint` <a name="resetGkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHub2CustomEndpoint"></a>

```typescript
public resetGkeHub2CustomEndpoint(): void
```

##### `resetGkeHubCustomEndpoint` <a name="resetGkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint"></a>

```typescript
public resetGkeHubCustomEndpoint(): void
```

##### `resetGkehubFeatureCustomEndpoint` <a name="resetGkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint"></a>

```typescript
public resetGkehubFeatureCustomEndpoint(): void
```

##### `resetGkeonpremCustomEndpoint` <a name="resetGkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint"></a>

```typescript
public resetGkeonpremCustomEndpoint(): void
```

##### `resetHealthcareCustomEndpoint` <a name="resetHealthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint"></a>

```typescript
public resetHealthcareCustomEndpoint(): void
```

##### `resetIam2CustomEndpoint` <a name="resetIam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint"></a>

```typescript
public resetIam2CustomEndpoint(): void
```

##### `resetIam3CustomEndpoint` <a name="resetIam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam3CustomEndpoint"></a>

```typescript
public resetIam3CustomEndpoint(): void
```

##### `resetIamBetaCustomEndpoint` <a name="resetIamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint"></a>

```typescript
public resetIamBetaCustomEndpoint(): void
```

##### `resetIamCredentialsCustomEndpoint` <a name="resetIamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint"></a>

```typescript
public resetIamCredentialsCustomEndpoint(): void
```

##### `resetIamCustomEndpoint` <a name="resetIamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint"></a>

```typescript
public resetIamCustomEndpoint(): void
```

##### `resetIamWorkforcePoolCustomEndpoint` <a name="resetIamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```typescript
public resetIamWorkforcePoolCustomEndpoint(): void
```

##### `resetIapCustomEndpoint` <a name="resetIapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint"></a>

```typescript
public resetIapCustomEndpoint(): void
```

##### `resetIdentityPlatformCustomEndpoint` <a name="resetIdentityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint"></a>

```typescript
public resetIdentityPlatformCustomEndpoint(): void
```

##### `resetImpersonateServiceAccount` <a name="resetImpersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount"></a>

```typescript
public resetImpersonateServiceAccount(): void
```

##### `resetImpersonateServiceAccountDelegates` <a name="resetImpersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates"></a>

```typescript
public resetImpersonateServiceAccountDelegates(): void
```

##### `resetIntegrationConnectorsCustomEndpoint` <a name="resetIntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```typescript
public resetIntegrationConnectorsCustomEndpoint(): void
```

##### `resetIntegrationsCustomEndpoint` <a name="resetIntegrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationsCustomEndpoint"></a>

```typescript
public resetIntegrationsCustomEndpoint(): void
```

##### `resetKmsCustomEndpoint` <a name="resetKmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint"></a>

```typescript
public resetKmsCustomEndpoint(): void
```

##### `resetLoggingCustomEndpoint` <a name="resetLoggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint"></a>

```typescript
public resetLoggingCustomEndpoint(): void
```

##### `resetLookerCustomEndpoint` <a name="resetLookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLookerCustomEndpoint"></a>

```typescript
public resetLookerCustomEndpoint(): void
```

##### `resetManagedKafkaCustomEndpoint` <a name="resetManagedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetManagedKafkaCustomEndpoint"></a>

```typescript
public resetManagedKafkaCustomEndpoint(): void
```

##### `resetMemcacheCustomEndpoint` <a name="resetMemcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint"></a>

```typescript
public resetMemcacheCustomEndpoint(): void
```

##### `resetMemorystoreCustomEndpoint` <a name="resetMemorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemorystoreCustomEndpoint"></a>

```typescript
public resetMemorystoreCustomEndpoint(): void
```

##### `resetMigrationCenterCustomEndpoint` <a name="resetMigrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMigrationCenterCustomEndpoint"></a>

```typescript
public resetMigrationCenterCustomEndpoint(): void
```

##### `resetMlEngineCustomEndpoint` <a name="resetMlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint"></a>

```typescript
public resetMlEngineCustomEndpoint(): void
```

##### `resetMonitoringCustomEndpoint` <a name="resetMonitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint"></a>

```typescript
public resetMonitoringCustomEndpoint(): void
```

##### `resetNetappCustomEndpoint` <a name="resetNetappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetappCustomEndpoint"></a>

```typescript
public resetNetappCustomEndpoint(): void
```

##### `resetNetworkConnectivityCustomEndpoint` <a name="resetNetworkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint"></a>

```typescript
public resetNetworkConnectivityCustomEndpoint(): void
```

##### `resetNetworkManagementCustomEndpoint` <a name="resetNetworkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint"></a>

```typescript
public resetNetworkManagementCustomEndpoint(): void
```

##### `resetNetworkSecurityCustomEndpoint` <a name="resetNetworkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint"></a>

```typescript
public resetNetworkSecurityCustomEndpoint(): void
```

##### `resetNetworkServicesCustomEndpoint` <a name="resetNetworkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint"></a>

```typescript
public resetNetworkServicesCustomEndpoint(): void
```

##### `resetNotebooksCustomEndpoint` <a name="resetNotebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint"></a>

```typescript
public resetNotebooksCustomEndpoint(): void
```

##### `resetOracleDatabaseCustomEndpoint` <a name="resetOracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOracleDatabaseCustomEndpoint"></a>

```typescript
public resetOracleDatabaseCustomEndpoint(): void
```

##### `resetOrgPolicyCustomEndpoint` <a name="resetOrgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint"></a>

```typescript
public resetOrgPolicyCustomEndpoint(): void
```

##### `resetOsConfigCustomEndpoint` <a name="resetOsConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint"></a>

```typescript
public resetOsConfigCustomEndpoint(): void
```

##### `resetOsLoginCustomEndpoint` <a name="resetOsLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint"></a>

```typescript
public resetOsLoginCustomEndpoint(): void
```

##### `resetParallelstoreCustomEndpoint` <a name="resetParallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParallelstoreCustomEndpoint"></a>

```typescript
public resetParallelstoreCustomEndpoint(): void
```

##### `resetParameterManagerCustomEndpoint` <a name="resetParameterManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParameterManagerCustomEndpoint"></a>

```typescript
public resetParameterManagerCustomEndpoint(): void
```

##### `resetParameterManagerRegionalCustomEndpoint` <a name="resetParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParameterManagerRegionalCustomEndpoint"></a>

```typescript
public resetParameterManagerRegionalCustomEndpoint(): void
```

##### `resetPrivatecaCustomEndpoint` <a name="resetPrivatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint"></a>

```typescript
public resetPrivatecaCustomEndpoint(): void
```

##### `resetPrivilegedAccessManagerCustomEndpoint` <a name="resetPrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivilegedAccessManagerCustomEndpoint"></a>

```typescript
public resetPrivilegedAccessManagerCustomEndpoint(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublicCaCustomEndpoint` <a name="resetPublicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPublicCaCustomEndpoint"></a>

```typescript
public resetPublicCaCustomEndpoint(): void
```

##### `resetPubsubCustomEndpoint` <a name="resetPubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubCustomEndpoint"></a>

```typescript
public resetPubsubCustomEndpoint(): void
```

##### `resetPubsubLiteCustomEndpoint` <a name="resetPubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubLiteCustomEndpoint"></a>

```typescript
public resetPubsubLiteCustomEndpoint(): void
```

##### `resetRecaptchaEnterpriseCustomEndpoint` <a name="resetRecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```typescript
public resetRecaptchaEnterpriseCustomEndpoint(): void
```

##### `resetRedisCustomEndpoint` <a name="resetRedisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRedisCustomEndpoint"></a>

```typescript
public resetRedisCustomEndpoint(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRequestReason` <a name="resetRequestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestReason"></a>

```typescript
public resetRequestReason(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetResourceManagerCustomEndpoint` <a name="resetResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerCustomEndpoint"></a>

```typescript
public resetResourceManagerCustomEndpoint(): void
```

##### `resetResourceManagerV3CustomEndpoint` <a name="resetResourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerV3CustomEndpoint"></a>

```typescript
public resetResourceManagerV3CustomEndpoint(): void
```

##### `resetRuntimeconfigCustomEndpoint` <a name="resetRuntimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeconfigCustomEndpoint"></a>

```typescript
public resetRuntimeconfigCustomEndpoint(): void
```

##### `resetRuntimeConfigCustomEndpoint` <a name="resetRuntimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeConfigCustomEndpoint"></a>

```typescript
public resetRuntimeConfigCustomEndpoint(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSecretManagerCustomEndpoint` <a name="resetSecretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerCustomEndpoint"></a>

```typescript
public resetSecretManagerCustomEndpoint(): void
```

##### `resetSecretManagerRegionalCustomEndpoint` <a name="resetSecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerRegionalCustomEndpoint"></a>

```typescript
public resetSecretManagerRegionalCustomEndpoint(): void
```

##### `resetSecureSourceManagerCustomEndpoint` <a name="resetSecureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecureSourceManagerCustomEndpoint"></a>

```typescript
public resetSecureSourceManagerCustomEndpoint(): void
```

##### `resetSecurityCenterCustomEndpoint` <a name="resetSecurityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint"></a>

```typescript
public resetSecurityCenterCustomEndpoint(): void
```

##### `resetSecurityCenterManagementCustomEndpoint` <a name="resetSecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterManagementCustomEndpoint"></a>

```typescript
public resetSecurityCenterManagementCustomEndpoint(): void
```

##### `resetSecurityCenterV2CustomEndpoint` <a name="resetSecurityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterV2CustomEndpoint"></a>

```typescript
public resetSecurityCenterV2CustomEndpoint(): void
```

##### `resetSecuritypostureCustomEndpoint` <a name="resetSecuritypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecuritypostureCustomEndpoint"></a>

```typescript
public resetSecuritypostureCustomEndpoint(): void
```

##### `resetSecurityScannerCustomEndpoint` <a name="resetSecurityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint"></a>

```typescript
public resetSecurityScannerCustomEndpoint(): void
```

##### `resetServiceDirectoryCustomEndpoint` <a name="resetServiceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint"></a>

```typescript
public resetServiceDirectoryCustomEndpoint(): void
```

##### `resetServiceManagementCustomEndpoint` <a name="resetServiceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint"></a>

```typescript
public resetServiceManagementCustomEndpoint(): void
```

##### `resetServiceNetworkingCustomEndpoint` <a name="resetServiceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint"></a>

```typescript
public resetServiceNetworkingCustomEndpoint(): void
```

##### `resetServiceUsageCustomEndpoint` <a name="resetServiceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint"></a>

```typescript
public resetServiceUsageCustomEndpoint(): void
```

##### `resetSiteVerificationCustomEndpoint` <a name="resetSiteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSiteVerificationCustomEndpoint"></a>

```typescript
public resetSiteVerificationCustomEndpoint(): void
```

##### `resetSourceRepoCustomEndpoint` <a name="resetSourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint"></a>

```typescript
public resetSourceRepoCustomEndpoint(): void
```

##### `resetSpannerCustomEndpoint` <a name="resetSpannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint"></a>

```typescript
public resetSpannerCustomEndpoint(): void
```

##### `resetSqlCustomEndpoint` <a name="resetSqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint"></a>

```typescript
public resetSqlCustomEndpoint(): void
```

##### `resetStorageCustomEndpoint` <a name="resetStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint"></a>

```typescript
public resetStorageCustomEndpoint(): void
```

##### `resetStorageInsightsCustomEndpoint` <a name="resetStorageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageInsightsCustomEndpoint"></a>

```typescript
public resetStorageInsightsCustomEndpoint(): void
```

##### `resetStorageTransferCustomEndpoint` <a name="resetStorageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint"></a>

```typescript
public resetStorageTransferCustomEndpoint(): void
```

##### `resetTagsCustomEndpoint` <a name="resetTagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint"></a>

```typescript
public resetTagsCustomEndpoint(): void
```

##### `resetTagsLocationCustomEndpoint` <a name="resetTagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint"></a>

```typescript
public resetTagsLocationCustomEndpoint(): void
```

##### `resetTerraformAttributionLabelAdditionStrategy` <a name="resetTerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```typescript
public resetTerraformAttributionLabelAdditionStrategy(): void
```

##### `resetTpuCustomEndpoint` <a name="resetTpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint"></a>

```typescript
public resetTpuCustomEndpoint(): void
```

##### `resetTpuV2CustomEndpoint` <a name="resetTpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuV2CustomEndpoint"></a>

```typescript
public resetTpuV2CustomEndpoint(): void
```

##### `resetTranscoderCustomEndpoint` <a name="resetTranscoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTranscoderCustomEndpoint"></a>

```typescript
public resetTranscoderCustomEndpoint(): void
```

##### `resetUniverseDomain` <a name="resetUniverseDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUniverseDomain"></a>

```typescript
public resetUniverseDomain(): void
```

##### `resetUserProjectOverride` <a name="resetUserProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride"></a>

```typescript
public resetUserProjectOverride(): void
```

##### `resetVertexAiCustomEndpoint` <a name="resetVertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint"></a>

```typescript
public resetVertexAiCustomEndpoint(): void
```

##### `resetVmwareengineCustomEndpoint` <a name="resetVmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVmwareengineCustomEndpoint"></a>

```typescript
public resetVmwareengineCustomEndpoint(): void
```

##### `resetVpcAccessCustomEndpoint` <a name="resetVpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint"></a>

```typescript
public resetVpcAccessCustomEndpoint(): void
```

##### `resetWorkbenchCustomEndpoint` <a name="resetWorkbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkbenchCustomEndpoint"></a>

```typescript
public resetWorkbenchCustomEndpoint(): void
```

##### `resetWorkflowsCustomEndpoint` <a name="resetWorkflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint"></a>

```typescript
public resetWorkflowsCustomEndpoint(): void
```

##### `resetWorkstationsCustomEndpoint` <a name="resetWorkstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint"></a>

```typescript
public resetWorkstationsCustomEndpoint(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBetaProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-google-beta'

provider.GoogleBetaProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-google-beta'

provider.GoogleBetaProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-google-beta'

provider.GoogleBetaProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-google-beta'

provider.GoogleBetaProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBetaProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBetaProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBetaProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBetaProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput">accessApprovalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput">accessContextManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput">activeDirectoryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabelInput">addTerraformAttributionLabelInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput">alloydbCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput">apiGatewayCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput">apigeeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apihubCustomEndpointInput">apihubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput">apikeysCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput">appEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpointInput">apphubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput">artifactRegistryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput">assuredWorkloadsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpointInput">backupDrCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput">batchingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput">beyondcorpCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpointInput">biglakeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput">bigqueryAnalyticsHubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput">bigqueryConnectionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput">bigQueryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput">bigqueryDatapolicyCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput">bigqueryDataTransferCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput">bigqueryReservationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput">bigtableCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput">billingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput">billingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput">binaryAuthorizationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpointInput">blockchainNodeEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput">certificateManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpointInput">chronicleCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput">cloudAssetCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput">cloudBillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput">cloudBuildCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput">cloudbuildv2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput">cloudBuildWorkerPoolCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput">clouddeployCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpointInput">clouddomainsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput">cloudfunctions2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput">cloudFunctionsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput">cloudIdentityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput">cloudIdsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpointInput">cloudQuotasCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput">cloudResourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput">cloudRunCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput">cloudRunV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput">cloudSchedulerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput">cloudTasksCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.colabCustomEndpointInput">colabCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput">composerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput">computeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput">containerAnalysisCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput">containerAttachedCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput">containerAwsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput">containerAzureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput">containerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpointInput">coreBillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput">databaseMigrationServiceCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput">dataCatalogCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput">dataflowCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput">dataformCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput">dataFusionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput">dataLossPreventionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpointInput">dataPipelineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput">dataplexCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput">dataprocCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpointInput">dataprocGdcCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput">dataprocMetastoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput">datastreamCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabelsInput">defaultLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput">deploymentManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpointInput">developerConnectCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput">dialogflowCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput">dialogflowCxCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpointInput">discoveryEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput">dnsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput">documentAiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpointInput">documentAiWarehouseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpointInput">edgecontainerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpointInput">edgenetworkCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput">essentialContactsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput">eventarcCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput">filestoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpointInput">firebaseAppCheckCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput">firebaseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput">firebaseDatabaseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpointInput">firebaseExtensionsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput">firebaseHostingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput">firebaserulesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput">firebaseStorageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput">firestoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpointInput">geminiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput">gkeBackupCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpointInput">gkeHub2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput">gkeHubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput">gkehubFeatureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput">gkeonpremCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput">healthcareCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput">iam2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpointInput">iam3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput">iamBetaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput">iamCredentialsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput">iamCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput">iamWorkforcePoolCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput">iapCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput">identityPlatformCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput">impersonateServiceAccountDelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput">impersonateServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpointInput">integrationConnectorsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpointInput">integrationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput">kmsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput">loggingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpointInput">lookerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpointInput">managedKafkaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput">memcacheCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpointInput">memorystoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpointInput">migrationCenterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput">mlEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput">monitoringCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpointInput">netappCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput">networkConnectivityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput">networkManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput">networkSecurityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput">networkServicesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput">notebooksCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpointInput">oracleDatabaseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput">orgPolicyCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput">osConfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput">osLoginCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpointInput">parallelstoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerCustomEndpointInput">parameterManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerRegionalCustomEndpointInput">parameterManagerRegionalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput">privatecaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpointInput">privilegedAccessManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpointInput">publicCaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput">pubsubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput">pubsubLiteCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput">recaptchaEnterpriseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput">redisCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput">requestReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput">resourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput">resourceManagerV3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput">runtimeconfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput">runtimeConfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput">secretManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpointInput">secretManagerRegionalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpointInput">secureSourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput">securityCenterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpointInput">securityCenterManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpointInput">securityCenterV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpointInput">securitypostureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput">securityScannerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput">serviceDirectoryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput">serviceManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput">serviceNetworkingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput">serviceUsageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpointInput">siteVerificationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput">sourceRepoCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput">spannerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput">sqlCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput">storageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpointInput">storageInsightsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput">storageTransferCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput">tagsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput">tagsLocationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategyInput">terraformAttributionLabelAdditionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput">tpuCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpointInput">tpuV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpointInput">transcoderCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomainInput">universeDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput">userProjectOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput">vertexAiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpointInput">vmwareengineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput">vpcAccessCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpointInput">workbenchCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput">workflowsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput">workstationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint">apiGatewayCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apihubCustomEndpoint">apihubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching">batching</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject">billingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpoint">chronicleCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint">cloudBuildWorkerPoolCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.colabCustomEndpoint">colabCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint">dataformCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabels">defaultLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint">firebaseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint">firebaseDatabaseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpoint">firebaseExtensionsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint">firebaseHostingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint">firebaseStorageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint">gkehubFeatureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerCustomEndpoint">parameterManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerRegionalCustomEndpoint">parameterManagerRegionalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason">requestReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint">runtimeconfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint">runtimeConfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint">securityScannerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint">serviceDirectoryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint">tpuCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpoint">tpuV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomain">universeDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride">userProjectOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint">workstationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessApprovalCustomEndpointInput`<sup>Optional</sup> <a name="accessApprovalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput"></a>

```typescript
public readonly accessApprovalCustomEndpointInput: string;
```

- *Type:* string

---

##### `accessContextManagerCustomEndpointInput`<sup>Optional</sup> <a name="accessContextManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput"></a>

```typescript
public readonly accessContextManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `activeDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="activeDirectoryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput"></a>

```typescript
public readonly activeDirectoryCustomEndpointInput: string;
```

- *Type:* string

---

##### `addTerraformAttributionLabelInput`<sup>Optional</sup> <a name="addTerraformAttributionLabelInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabelInput"></a>

```typescript
public readonly addTerraformAttributionLabelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `alloydbCustomEndpointInput`<sup>Optional</sup> <a name="alloydbCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput"></a>

```typescript
public readonly alloydbCustomEndpointInput: string;
```

- *Type:* string

---

##### `apiGatewayCustomEndpointInput`<sup>Optional</sup> <a name="apiGatewayCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput"></a>

```typescript
public readonly apiGatewayCustomEndpointInput: string;
```

- *Type:* string

---

##### `apigeeCustomEndpointInput`<sup>Optional</sup> <a name="apigeeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput"></a>

```typescript
public readonly apigeeCustomEndpointInput: string;
```

- *Type:* string

---

##### `apihubCustomEndpointInput`<sup>Optional</sup> <a name="apihubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apihubCustomEndpointInput"></a>

```typescript
public readonly apihubCustomEndpointInput: string;
```

- *Type:* string

---

##### `apikeysCustomEndpointInput`<sup>Optional</sup> <a name="apikeysCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput"></a>

```typescript
public readonly apikeysCustomEndpointInput: string;
```

- *Type:* string

---

##### `appEngineCustomEndpointInput`<sup>Optional</sup> <a name="appEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput"></a>

```typescript
public readonly appEngineCustomEndpointInput: string;
```

- *Type:* string

---

##### `apphubCustomEndpointInput`<sup>Optional</sup> <a name="apphubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpointInput"></a>

```typescript
public readonly apphubCustomEndpointInput: string;
```

- *Type:* string

---

##### `artifactRegistryCustomEndpointInput`<sup>Optional</sup> <a name="artifactRegistryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput"></a>

```typescript
public readonly artifactRegistryCustomEndpointInput: string;
```

- *Type:* string

---

##### `assuredWorkloadsCustomEndpointInput`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```typescript
public readonly assuredWorkloadsCustomEndpointInput: string;
```

- *Type:* string

---

##### `backupDrCustomEndpointInput`<sup>Optional</sup> <a name="backupDrCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpointInput"></a>

```typescript
public readonly backupDrCustomEndpointInput: string;
```

- *Type:* string

---

##### `batchingInput`<sup>Optional</sup> <a name="batchingInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput"></a>

```typescript
public readonly batchingInput: IResolvable | GoogleBetaProviderBatching[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>[]

---

##### `beyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="beyondcorpCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput"></a>

```typescript
public readonly beyondcorpCustomEndpointInput: string;
```

- *Type:* string

---

##### `biglakeCustomEndpointInput`<sup>Optional</sup> <a name="biglakeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpointInput"></a>

```typescript
public readonly biglakeCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryAnalyticsHubCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```typescript
public readonly bigqueryAnalyticsHubCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryConnectionCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```typescript
public readonly bigqueryConnectionCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigQueryCustomEndpointInput`<sup>Optional</sup> <a name="bigQueryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput"></a>

```typescript
public readonly bigQueryCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryDatapolicyCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```typescript
public readonly bigqueryDatapolicyCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryDataTransferCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```typescript
public readonly bigqueryDataTransferCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryReservationCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput"></a>

```typescript
public readonly bigqueryReservationCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigtableCustomEndpointInput`<sup>Optional</sup> <a name="bigtableCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput"></a>

```typescript
public readonly bigtableCustomEndpointInput: string;
```

- *Type:* string

---

##### `billingCustomEndpointInput`<sup>Optional</sup> <a name="billingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput"></a>

```typescript
public readonly billingCustomEndpointInput: string;
```

- *Type:* string

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput"></a>

```typescript
public readonly billingProjectInput: string;
```

- *Type:* string

---

##### `binaryAuthorizationCustomEndpointInput`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```typescript
public readonly binaryAuthorizationCustomEndpointInput: string;
```

- *Type:* string

---

##### `blockchainNodeEngineCustomEndpointInput`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```typescript
public readonly blockchainNodeEngineCustomEndpointInput: string;
```

- *Type:* string

---

##### `certificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="certificateManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput"></a>

```typescript
public readonly certificateManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `chronicleCustomEndpointInput`<sup>Optional</sup> <a name="chronicleCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpointInput"></a>

```typescript
public readonly chronicleCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudAssetCustomEndpointInput`<sup>Optional</sup> <a name="cloudAssetCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput"></a>

```typescript
public readonly cloudAssetCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudBillingCustomEndpointInput`<sup>Optional</sup> <a name="cloudBillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput"></a>

```typescript
public readonly cloudBillingCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudBuildCustomEndpointInput`<sup>Optional</sup> <a name="cloudBuildCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput"></a>

```typescript
public readonly cloudBuildCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudbuildv2CustomEndpointInput`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput"></a>

```typescript
public readonly cloudbuildv2CustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudBuildWorkerPoolCustomEndpointInput`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput"></a>

```typescript
public readonly cloudBuildWorkerPoolCustomEndpointInput: string;
```

- *Type:* string

---

##### `clouddeployCustomEndpointInput`<sup>Optional</sup> <a name="clouddeployCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput"></a>

```typescript
public readonly clouddeployCustomEndpointInput: string;
```

- *Type:* string

---

##### `clouddomainsCustomEndpointInput`<sup>Optional</sup> <a name="clouddomainsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpointInput"></a>

```typescript
public readonly clouddomainsCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudfunctions2CustomEndpointInput`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput"></a>

```typescript
public readonly cloudfunctions2CustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudFunctionsCustomEndpointInput`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput"></a>

```typescript
public readonly cloudFunctionsCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudIdentityCustomEndpointInput`<sup>Optional</sup> <a name="cloudIdentityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput"></a>

```typescript
public readonly cloudIdentityCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudIdsCustomEndpointInput`<sup>Optional</sup> <a name="cloudIdsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput"></a>

```typescript
public readonly cloudIdsCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudQuotasCustomEndpointInput`<sup>Optional</sup> <a name="cloudQuotasCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpointInput"></a>

```typescript
public readonly cloudQuotasCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```typescript
public readonly cloudResourceManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudRunCustomEndpointInput`<sup>Optional</sup> <a name="cloudRunCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput"></a>

```typescript
public readonly cloudRunCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudRunV2CustomEndpointInput`<sup>Optional</sup> <a name="cloudRunV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput"></a>

```typescript
public readonly cloudRunV2CustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudSchedulerCustomEndpointInput`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput"></a>

```typescript
public readonly cloudSchedulerCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudTasksCustomEndpointInput`<sup>Optional</sup> <a name="cloudTasksCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput"></a>

```typescript
public readonly cloudTasksCustomEndpointInput: string;
```

- *Type:* string

---

##### `colabCustomEndpointInput`<sup>Optional</sup> <a name="colabCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.colabCustomEndpointInput"></a>

```typescript
public readonly colabCustomEndpointInput: string;
```

- *Type:* string

---

##### `composerCustomEndpointInput`<sup>Optional</sup> <a name="composerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput"></a>

```typescript
public readonly composerCustomEndpointInput: string;
```

- *Type:* string

---

##### `computeCustomEndpointInput`<sup>Optional</sup> <a name="computeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput"></a>

```typescript
public readonly computeCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerAnalysisCustomEndpointInput`<sup>Optional</sup> <a name="containerAnalysisCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput"></a>

```typescript
public readonly containerAnalysisCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerAttachedCustomEndpointInput`<sup>Optional</sup> <a name="containerAttachedCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput"></a>

```typescript
public readonly containerAttachedCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerAwsCustomEndpointInput`<sup>Optional</sup> <a name="containerAwsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput"></a>

```typescript
public readonly containerAwsCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerAzureCustomEndpointInput`<sup>Optional</sup> <a name="containerAzureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput"></a>

```typescript
public readonly containerAzureCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerCustomEndpointInput`<sup>Optional</sup> <a name="containerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput"></a>

```typescript
public readonly containerCustomEndpointInput: string;
```

- *Type:* string

---

##### `coreBillingCustomEndpointInput`<sup>Optional</sup> <a name="coreBillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpointInput"></a>

```typescript
public readonly coreBillingCustomEndpointInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `databaseMigrationServiceCustomEndpointInput`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```typescript
public readonly databaseMigrationServiceCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataCatalogCustomEndpointInput`<sup>Optional</sup> <a name="dataCatalogCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput"></a>

```typescript
public readonly dataCatalogCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataflowCustomEndpointInput`<sup>Optional</sup> <a name="dataflowCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput"></a>

```typescript
public readonly dataflowCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataformCustomEndpointInput`<sup>Optional</sup> <a name="dataformCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput"></a>

```typescript
public readonly dataformCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataFusionCustomEndpointInput`<sup>Optional</sup> <a name="dataFusionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput"></a>

```typescript
public readonly dataFusionCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataLossPreventionCustomEndpointInput`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput"></a>

```typescript
public readonly dataLossPreventionCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataPipelineCustomEndpointInput`<sup>Optional</sup> <a name="dataPipelineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpointInput"></a>

```typescript
public readonly dataPipelineCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataplexCustomEndpointInput`<sup>Optional</sup> <a name="dataplexCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput"></a>

```typescript
public readonly dataplexCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataprocCustomEndpointInput`<sup>Optional</sup> <a name="dataprocCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput"></a>

```typescript
public readonly dataprocCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataprocGdcCustomEndpointInput`<sup>Optional</sup> <a name="dataprocGdcCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpointInput"></a>

```typescript
public readonly dataprocGdcCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```typescript
public readonly dataprocMetastoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `datastreamCustomEndpointInput`<sup>Optional</sup> <a name="datastreamCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput"></a>

```typescript
public readonly datastreamCustomEndpointInput: string;
```

- *Type:* string

---

##### `defaultLabelsInput`<sup>Optional</sup> <a name="defaultLabelsInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabelsInput"></a>

```typescript
public readonly defaultLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="deploymentManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput"></a>

```typescript
public readonly deploymentManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `developerConnectCustomEndpointInput`<sup>Optional</sup> <a name="developerConnectCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpointInput"></a>

```typescript
public readonly developerConnectCustomEndpointInput: string;
```

- *Type:* string

---

##### `dialogflowCustomEndpointInput`<sup>Optional</sup> <a name="dialogflowCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput"></a>

```typescript
public readonly dialogflowCustomEndpointInput: string;
```

- *Type:* string

---

##### `dialogflowCxCustomEndpointInput`<sup>Optional</sup> <a name="dialogflowCxCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput"></a>

```typescript
public readonly dialogflowCxCustomEndpointInput: string;
```

- *Type:* string

---

##### `discoveryEngineCustomEndpointInput`<sup>Optional</sup> <a name="discoveryEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpointInput"></a>

```typescript
public readonly discoveryEngineCustomEndpointInput: string;
```

- *Type:* string

---

##### `dnsCustomEndpointInput`<sup>Optional</sup> <a name="dnsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput"></a>

```typescript
public readonly dnsCustomEndpointInput: string;
```

- *Type:* string

---

##### `documentAiCustomEndpointInput`<sup>Optional</sup> <a name="documentAiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput"></a>

```typescript
public readonly documentAiCustomEndpointInput: string;
```

- *Type:* string

---

##### `documentAiWarehouseCustomEndpointInput`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```typescript
public readonly documentAiWarehouseCustomEndpointInput: string;
```

- *Type:* string

---

##### `edgecontainerCustomEndpointInput`<sup>Optional</sup> <a name="edgecontainerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpointInput"></a>

```typescript
public readonly edgecontainerCustomEndpointInput: string;
```

- *Type:* string

---

##### `edgenetworkCustomEndpointInput`<sup>Optional</sup> <a name="edgenetworkCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpointInput"></a>

```typescript
public readonly edgenetworkCustomEndpointInput: string;
```

- *Type:* string

---

##### `essentialContactsCustomEndpointInput`<sup>Optional</sup> <a name="essentialContactsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput"></a>

```typescript
public readonly essentialContactsCustomEndpointInput: string;
```

- *Type:* string

---

##### `eventarcCustomEndpointInput`<sup>Optional</sup> <a name="eventarcCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput"></a>

```typescript
public readonly eventarcCustomEndpointInput: string;
```

- *Type:* string

---

##### `filestoreCustomEndpointInput`<sup>Optional</sup> <a name="filestoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput"></a>

```typescript
public readonly filestoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseAppCheckCustomEndpointInput`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```typescript
public readonly firebaseAppCheckCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseCustomEndpointInput`<sup>Optional</sup> <a name="firebaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput"></a>

```typescript
public readonly firebaseCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="firebaseDatabaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput"></a>

```typescript
public readonly firebaseDatabaseCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseExtensionsCustomEndpointInput`<sup>Optional</sup> <a name="firebaseExtensionsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpointInput"></a>

```typescript
public readonly firebaseExtensionsCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseHostingCustomEndpointInput`<sup>Optional</sup> <a name="firebaseHostingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput"></a>

```typescript
public readonly firebaseHostingCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaserulesCustomEndpointInput`<sup>Optional</sup> <a name="firebaserulesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput"></a>

```typescript
public readonly firebaserulesCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseStorageCustomEndpointInput`<sup>Optional</sup> <a name="firebaseStorageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput"></a>

```typescript
public readonly firebaseStorageCustomEndpointInput: string;
```

- *Type:* string

---

##### `firestoreCustomEndpointInput`<sup>Optional</sup> <a name="firestoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput"></a>

```typescript
public readonly firestoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `geminiCustomEndpointInput`<sup>Optional</sup> <a name="geminiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpointInput"></a>

```typescript
public readonly geminiCustomEndpointInput: string;
```

- *Type:* string

---

##### `gkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="gkeBackupCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput"></a>

```typescript
public readonly gkeBackupCustomEndpointInput: string;
```

- *Type:* string

---

##### `gkeHub2CustomEndpointInput`<sup>Optional</sup> <a name="gkeHub2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpointInput"></a>

```typescript
public readonly gkeHub2CustomEndpointInput: string;
```

- *Type:* string

---

##### `gkeHubCustomEndpointInput`<sup>Optional</sup> <a name="gkeHubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput"></a>

```typescript
public readonly gkeHubCustomEndpointInput: string;
```

- *Type:* string

---

##### `gkehubFeatureCustomEndpointInput`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput"></a>

```typescript
public readonly gkehubFeatureCustomEndpointInput: string;
```

- *Type:* string

---

##### `gkeonpremCustomEndpointInput`<sup>Optional</sup> <a name="gkeonpremCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput"></a>

```typescript
public readonly gkeonpremCustomEndpointInput: string;
```

- *Type:* string

---

##### `healthcareCustomEndpointInput`<sup>Optional</sup> <a name="healthcareCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput"></a>

```typescript
public readonly healthcareCustomEndpointInput: string;
```

- *Type:* string

---

##### `iam2CustomEndpointInput`<sup>Optional</sup> <a name="iam2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput"></a>

```typescript
public readonly iam2CustomEndpointInput: string;
```

- *Type:* string

---

##### `iam3CustomEndpointInput`<sup>Optional</sup> <a name="iam3CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpointInput"></a>

```typescript
public readonly iam3CustomEndpointInput: string;
```

- *Type:* string

---

##### `iamBetaCustomEndpointInput`<sup>Optional</sup> <a name="iamBetaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput"></a>

```typescript
public readonly iamBetaCustomEndpointInput: string;
```

- *Type:* string

---

##### `iamCredentialsCustomEndpointInput`<sup>Optional</sup> <a name="iamCredentialsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput"></a>

```typescript
public readonly iamCredentialsCustomEndpointInput: string;
```

- *Type:* string

---

##### `iamCustomEndpointInput`<sup>Optional</sup> <a name="iamCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput"></a>

```typescript
public readonly iamCustomEndpointInput: string;
```

- *Type:* string

---

##### `iamWorkforcePoolCustomEndpointInput`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```typescript
public readonly iamWorkforcePoolCustomEndpointInput: string;
```

- *Type:* string

---

##### `iapCustomEndpointInput`<sup>Optional</sup> <a name="iapCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput"></a>

```typescript
public readonly iapCustomEndpointInput: string;
```

- *Type:* string

---

##### `identityPlatformCustomEndpointInput`<sup>Optional</sup> <a name="identityPlatformCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput"></a>

```typescript
public readonly identityPlatformCustomEndpointInput: string;
```

- *Type:* string

---

##### `impersonateServiceAccountDelegatesInput`<sup>Optional</sup> <a name="impersonateServiceAccountDelegatesInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput"></a>

```typescript
public readonly impersonateServiceAccountDelegatesInput: string[];
```

- *Type:* string[]

---

##### `impersonateServiceAccountInput`<sup>Optional</sup> <a name="impersonateServiceAccountInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput"></a>

```typescript
public readonly impersonateServiceAccountInput: string;
```

- *Type:* string

---

##### `integrationConnectorsCustomEndpointInput`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpointInput"></a>

```typescript
public readonly integrationConnectorsCustomEndpointInput: string;
```

- *Type:* string

---

##### `integrationsCustomEndpointInput`<sup>Optional</sup> <a name="integrationsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpointInput"></a>

```typescript
public readonly integrationsCustomEndpointInput: string;
```

- *Type:* string

---

##### `kmsCustomEndpointInput`<sup>Optional</sup> <a name="kmsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput"></a>

```typescript
public readonly kmsCustomEndpointInput: string;
```

- *Type:* string

---

##### `loggingCustomEndpointInput`<sup>Optional</sup> <a name="loggingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput"></a>

```typescript
public readonly loggingCustomEndpointInput: string;
```

- *Type:* string

---

##### `lookerCustomEndpointInput`<sup>Optional</sup> <a name="lookerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpointInput"></a>

```typescript
public readonly lookerCustomEndpointInput: string;
```

- *Type:* string

---

##### `managedKafkaCustomEndpointInput`<sup>Optional</sup> <a name="managedKafkaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpointInput"></a>

```typescript
public readonly managedKafkaCustomEndpointInput: string;
```

- *Type:* string

---

##### `memcacheCustomEndpointInput`<sup>Optional</sup> <a name="memcacheCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput"></a>

```typescript
public readonly memcacheCustomEndpointInput: string;
```

- *Type:* string

---

##### `memorystoreCustomEndpointInput`<sup>Optional</sup> <a name="memorystoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpointInput"></a>

```typescript
public readonly memorystoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `migrationCenterCustomEndpointInput`<sup>Optional</sup> <a name="migrationCenterCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpointInput"></a>

```typescript
public readonly migrationCenterCustomEndpointInput: string;
```

- *Type:* string

---

##### `mlEngineCustomEndpointInput`<sup>Optional</sup> <a name="mlEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput"></a>

```typescript
public readonly mlEngineCustomEndpointInput: string;
```

- *Type:* string

---

##### `monitoringCustomEndpointInput`<sup>Optional</sup> <a name="monitoringCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput"></a>

```typescript
public readonly monitoringCustomEndpointInput: string;
```

- *Type:* string

---

##### `netappCustomEndpointInput`<sup>Optional</sup> <a name="netappCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpointInput"></a>

```typescript
public readonly netappCustomEndpointInput: string;
```

- *Type:* string

---

##### `networkConnectivityCustomEndpointInput`<sup>Optional</sup> <a name="networkConnectivityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput"></a>

```typescript
public readonly networkConnectivityCustomEndpointInput: string;
```

- *Type:* string

---

##### `networkManagementCustomEndpointInput`<sup>Optional</sup> <a name="networkManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput"></a>

```typescript
public readonly networkManagementCustomEndpointInput: string;
```

- *Type:* string

---

##### `networkSecurityCustomEndpointInput`<sup>Optional</sup> <a name="networkSecurityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput"></a>

```typescript
public readonly networkSecurityCustomEndpointInput: string;
```

- *Type:* string

---

##### `networkServicesCustomEndpointInput`<sup>Optional</sup> <a name="networkServicesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput"></a>

```typescript
public readonly networkServicesCustomEndpointInput: string;
```

- *Type:* string

---

##### `notebooksCustomEndpointInput`<sup>Optional</sup> <a name="notebooksCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput"></a>

```typescript
public readonly notebooksCustomEndpointInput: string;
```

- *Type:* string

---

##### `oracleDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpointInput"></a>

```typescript
public readonly oracleDatabaseCustomEndpointInput: string;
```

- *Type:* string

---

##### `orgPolicyCustomEndpointInput`<sup>Optional</sup> <a name="orgPolicyCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput"></a>

```typescript
public readonly orgPolicyCustomEndpointInput: string;
```

- *Type:* string

---

##### `osConfigCustomEndpointInput`<sup>Optional</sup> <a name="osConfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput"></a>

```typescript
public readonly osConfigCustomEndpointInput: string;
```

- *Type:* string

---

##### `osLoginCustomEndpointInput`<sup>Optional</sup> <a name="osLoginCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput"></a>

```typescript
public readonly osLoginCustomEndpointInput: string;
```

- *Type:* string

---

##### `parallelstoreCustomEndpointInput`<sup>Optional</sup> <a name="parallelstoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpointInput"></a>

```typescript
public readonly parallelstoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `parameterManagerCustomEndpointInput`<sup>Optional</sup> <a name="parameterManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerCustomEndpointInput"></a>

```typescript
public readonly parameterManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `parameterManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerRegionalCustomEndpointInput"></a>

```typescript
public readonly parameterManagerRegionalCustomEndpointInput: string;
```

- *Type:* string

---

##### `privatecaCustomEndpointInput`<sup>Optional</sup> <a name="privatecaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput"></a>

```typescript
public readonly privatecaCustomEndpointInput: string;
```

- *Type:* string

---

##### `privilegedAccessManagerCustomEndpointInput`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpointInput"></a>

```typescript
public readonly privilegedAccessManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publicCaCustomEndpointInput`<sup>Optional</sup> <a name="publicCaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpointInput"></a>

```typescript
public readonly publicCaCustomEndpointInput: string;
```

- *Type:* string

---

##### `pubsubCustomEndpointInput`<sup>Optional</sup> <a name="pubsubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput"></a>

```typescript
public readonly pubsubCustomEndpointInput: string;
```

- *Type:* string

---

##### `pubsubLiteCustomEndpointInput`<sup>Optional</sup> <a name="pubsubLiteCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput"></a>

```typescript
public readonly pubsubLiteCustomEndpointInput: string;
```

- *Type:* string

---

##### `recaptchaEnterpriseCustomEndpointInput`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```typescript
public readonly recaptchaEnterpriseCustomEndpointInput: string;
```

- *Type:* string

---

##### `redisCustomEndpointInput`<sup>Optional</sup> <a name="redisCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput"></a>

```typescript
public readonly redisCustomEndpointInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `requestReasonInput`<sup>Optional</sup> <a name="requestReasonInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput"></a>

```typescript
public readonly requestReasonInput: string;
```

- *Type:* string

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: string;
```

- *Type:* string

---

##### `resourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="resourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput"></a>

```typescript
public readonly resourceManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `resourceManagerV3CustomEndpointInput`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput"></a>

```typescript
public readonly resourceManagerV3CustomEndpointInput: string;
```

- *Type:* string

---

##### `runtimeconfigCustomEndpointInput`<sup>Optional</sup> <a name="runtimeconfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput"></a>

```typescript
public readonly runtimeconfigCustomEndpointInput: string;
```

- *Type:* string

---

##### `runtimeConfigCustomEndpointInput`<sup>Optional</sup> <a name="runtimeConfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput"></a>

```typescript
public readonly runtimeConfigCustomEndpointInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `secretManagerCustomEndpointInput`<sup>Optional</sup> <a name="secretManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput"></a>

```typescript
public readonly secretManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `secretManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpointInput"></a>

```typescript
public readonly secretManagerRegionalCustomEndpointInput: string;
```

- *Type:* string

---

##### `secureSourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpointInput"></a>

```typescript
public readonly secureSourceManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `securityCenterCustomEndpointInput`<sup>Optional</sup> <a name="securityCenterCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput"></a>

```typescript
public readonly securityCenterCustomEndpointInput: string;
```

- *Type:* string

---

##### `securityCenterManagementCustomEndpointInput`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpointInput"></a>

```typescript
public readonly securityCenterManagementCustomEndpointInput: string;
```

- *Type:* string

---

##### `securityCenterV2CustomEndpointInput`<sup>Optional</sup> <a name="securityCenterV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpointInput"></a>

```typescript
public readonly securityCenterV2CustomEndpointInput: string;
```

- *Type:* string

---

##### `securitypostureCustomEndpointInput`<sup>Optional</sup> <a name="securitypostureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpointInput"></a>

```typescript
public readonly securitypostureCustomEndpointInput: string;
```

- *Type:* string

---

##### `securityScannerCustomEndpointInput`<sup>Optional</sup> <a name="securityScannerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput"></a>

```typescript
public readonly securityScannerCustomEndpointInput: string;
```

- *Type:* string

---

##### `serviceDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput"></a>

```typescript
public readonly serviceDirectoryCustomEndpointInput: string;
```

- *Type:* string

---

##### `serviceManagementCustomEndpointInput`<sup>Optional</sup> <a name="serviceManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput"></a>

```typescript
public readonly serviceManagementCustomEndpointInput: string;
```

- *Type:* string

---

##### `serviceNetworkingCustomEndpointInput`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput"></a>

```typescript
public readonly serviceNetworkingCustomEndpointInput: string;
```

- *Type:* string

---

##### `serviceUsageCustomEndpointInput`<sup>Optional</sup> <a name="serviceUsageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput"></a>

```typescript
public readonly serviceUsageCustomEndpointInput: string;
```

- *Type:* string

---

##### `siteVerificationCustomEndpointInput`<sup>Optional</sup> <a name="siteVerificationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpointInput"></a>

```typescript
public readonly siteVerificationCustomEndpointInput: string;
```

- *Type:* string

---

##### `sourceRepoCustomEndpointInput`<sup>Optional</sup> <a name="sourceRepoCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput"></a>

```typescript
public readonly sourceRepoCustomEndpointInput: string;
```

- *Type:* string

---

##### `spannerCustomEndpointInput`<sup>Optional</sup> <a name="spannerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput"></a>

```typescript
public readonly spannerCustomEndpointInput: string;
```

- *Type:* string

---

##### `sqlCustomEndpointInput`<sup>Optional</sup> <a name="sqlCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput"></a>

```typescript
public readonly sqlCustomEndpointInput: string;
```

- *Type:* string

---

##### `storageCustomEndpointInput`<sup>Optional</sup> <a name="storageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput"></a>

```typescript
public readonly storageCustomEndpointInput: string;
```

- *Type:* string

---

##### `storageInsightsCustomEndpointInput`<sup>Optional</sup> <a name="storageInsightsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpointInput"></a>

```typescript
public readonly storageInsightsCustomEndpointInput: string;
```

- *Type:* string

---

##### `storageTransferCustomEndpointInput`<sup>Optional</sup> <a name="storageTransferCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput"></a>

```typescript
public readonly storageTransferCustomEndpointInput: string;
```

- *Type:* string

---

##### `tagsCustomEndpointInput`<sup>Optional</sup> <a name="tagsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput"></a>

```typescript
public readonly tagsCustomEndpointInput: string;
```

- *Type:* string

---

##### `tagsLocationCustomEndpointInput`<sup>Optional</sup> <a name="tagsLocationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput"></a>

```typescript
public readonly tagsLocationCustomEndpointInput: string;
```

- *Type:* string

---

##### `terraformAttributionLabelAdditionStrategyInput`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategyInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```typescript
public readonly terraformAttributionLabelAdditionStrategyInput: string;
```

- *Type:* string

---

##### `tpuCustomEndpointInput`<sup>Optional</sup> <a name="tpuCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput"></a>

```typescript
public readonly tpuCustomEndpointInput: string;
```

- *Type:* string

---

##### `tpuV2CustomEndpointInput`<sup>Optional</sup> <a name="tpuV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpointInput"></a>

```typescript
public readonly tpuV2CustomEndpointInput: string;
```

- *Type:* string

---

##### `transcoderCustomEndpointInput`<sup>Optional</sup> <a name="transcoderCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpointInput"></a>

```typescript
public readonly transcoderCustomEndpointInput: string;
```

- *Type:* string

---

##### `universeDomainInput`<sup>Optional</sup> <a name="universeDomainInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomainInput"></a>

```typescript
public readonly universeDomainInput: string;
```

- *Type:* string

---

##### `userProjectOverrideInput`<sup>Optional</sup> <a name="userProjectOverrideInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput"></a>

```typescript
public readonly userProjectOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vertexAiCustomEndpointInput`<sup>Optional</sup> <a name="vertexAiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput"></a>

```typescript
public readonly vertexAiCustomEndpointInput: string;
```

- *Type:* string

---

##### `vmwareengineCustomEndpointInput`<sup>Optional</sup> <a name="vmwareengineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpointInput"></a>

```typescript
public readonly vmwareengineCustomEndpointInput: string;
```

- *Type:* string

---

##### `vpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="vpcAccessCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput"></a>

```typescript
public readonly vpcAccessCustomEndpointInput: string;
```

- *Type:* string

---

##### `workbenchCustomEndpointInput`<sup>Optional</sup> <a name="workbenchCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpointInput"></a>

```typescript
public readonly workbenchCustomEndpointInput: string;
```

- *Type:* string

---

##### `workflowsCustomEndpointInput`<sup>Optional</sup> <a name="workflowsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput"></a>

```typescript
public readonly workflowsCustomEndpointInput: string;
```

- *Type:* string

---

##### `workstationsCustomEndpointInput`<sup>Optional</sup> <a name="workstationsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput"></a>

```typescript
public readonly workstationsCustomEndpointInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint"></a>

```typescript
public readonly accessApprovalCustomEndpoint: string;
```

- *Type:* string

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint"></a>

```typescript
public readonly accessContextManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint"></a>

```typescript
public readonly activeDirectoryCustomEndpoint: string;
```

- *Type:* string

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabel"></a>

```typescript
public readonly addTerraformAttributionLabel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint"></a>

```typescript
public readonly alloydbCustomEndpoint: string;
```

- *Type:* string

---

##### `apiGatewayCustomEndpoint`<sup>Optional</sup> <a name="apiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint"></a>

```typescript
public readonly apiGatewayCustomEndpoint: string;
```

- *Type:* string

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint"></a>

```typescript
public readonly apigeeCustomEndpoint: string;
```

- *Type:* string

---

##### `apihubCustomEndpoint`<sup>Optional</sup> <a name="apihubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apihubCustomEndpoint"></a>

```typescript
public readonly apihubCustomEndpoint: string;
```

- *Type:* string

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint"></a>

```typescript
public readonly apikeysCustomEndpoint: string;
```

- *Type:* string

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint"></a>

```typescript
public readonly appEngineCustomEndpoint: string;
```

- *Type:* string

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpoint"></a>

```typescript
public readonly apphubCustomEndpoint: string;
```

- *Type:* string

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint"></a>

```typescript
public readonly artifactRegistryCustomEndpoint: string;
```

- *Type:* string

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint"></a>

```typescript
public readonly assuredWorkloadsCustomEndpoint: string;
```

- *Type:* string

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpoint"></a>

```typescript
public readonly backupDrCustomEndpoint: string;
```

- *Type:* string

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching"></a>

```typescript
public readonly batching: IResolvable | GoogleBetaProviderBatching[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>[]

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint"></a>

```typescript
public readonly beyondcorpCustomEndpoint: string;
```

- *Type:* string

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpoint"></a>

```typescript
public readonly biglakeCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```typescript
public readonly bigqueryAnalyticsHubCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint"></a>

```typescript
public readonly bigqueryConnectionCustomEndpoint: string;
```

- *Type:* string

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint"></a>

```typescript
public readonly bigQueryCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```typescript
public readonly bigqueryDatapolicyCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```typescript
public readonly bigqueryDataTransferCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint"></a>

```typescript
public readonly bigqueryReservationCustomEndpoint: string;
```

- *Type:* string

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint"></a>

```typescript
public readonly bigtableCustomEndpoint: string;
```

- *Type:* string

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint"></a>

```typescript
public readonly billingCustomEndpoint: string;
```

- *Type:* string

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint"></a>

```typescript
public readonly binaryAuthorizationCustomEndpoint: string;
```

- *Type:* string

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```typescript
public readonly blockchainNodeEngineCustomEndpoint: string;
```

- *Type:* string

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint"></a>

```typescript
public readonly certificateManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `chronicleCustomEndpoint`<sup>Optional</sup> <a name="chronicleCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpoint"></a>

```typescript
public readonly chronicleCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint"></a>

```typescript
public readonly cloudAssetCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint"></a>

```typescript
public readonly cloudBillingCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint"></a>

```typescript
public readonly cloudBuildCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint"></a>

```typescript
public readonly cloudbuildv2CustomEndpoint: string;
```

- *Type:* string

---

##### `cloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```typescript
public readonly cloudBuildWorkerPoolCustomEndpoint: string;
```

- *Type:* string

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint"></a>

```typescript
public readonly clouddeployCustomEndpoint: string;
```

- *Type:* string

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpoint"></a>

```typescript
public readonly clouddomainsCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint"></a>

```typescript
public readonly cloudfunctions2CustomEndpoint: string;
```

- *Type:* string

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint"></a>

```typescript
public readonly cloudFunctionsCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint"></a>

```typescript
public readonly cloudIdentityCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint"></a>

```typescript
public readonly cloudIdsCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpoint"></a>

```typescript
public readonly cloudQuotasCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint"></a>

```typescript
public readonly cloudResourceManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint"></a>

```typescript
public readonly cloudRunCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint"></a>

```typescript
public readonly cloudRunV2CustomEndpoint: string;
```

- *Type:* string

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint"></a>

```typescript
public readonly cloudSchedulerCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint"></a>

```typescript
public readonly cloudTasksCustomEndpoint: string;
```

- *Type:* string

---

##### `colabCustomEndpoint`<sup>Optional</sup> <a name="colabCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.colabCustomEndpoint"></a>

```typescript
public readonly colabCustomEndpoint: string;
```

- *Type:* string

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint"></a>

```typescript
public readonly composerCustomEndpoint: string;
```

- *Type:* string

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint"></a>

```typescript
public readonly computeCustomEndpoint: string;
```

- *Type:* string

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint"></a>

```typescript
public readonly containerAnalysisCustomEndpoint: string;
```

- *Type:* string

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint"></a>

```typescript
public readonly containerAttachedCustomEndpoint: string;
```

- *Type:* string

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint"></a>

```typescript
public readonly containerAwsCustomEndpoint: string;
```

- *Type:* string

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint"></a>

```typescript
public readonly containerAzureCustomEndpoint: string;
```

- *Type:* string

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint"></a>

```typescript
public readonly containerCustomEndpoint: string;
```

- *Type:* string

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpoint"></a>

```typescript
public readonly coreBillingCustomEndpoint: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```typescript
public readonly databaseMigrationServiceCustomEndpoint: string;
```

- *Type:* string

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint"></a>

```typescript
public readonly dataCatalogCustomEndpoint: string;
```

- *Type:* string

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint"></a>

```typescript
public readonly dataflowCustomEndpoint: string;
```

- *Type:* string

---

##### `dataformCustomEndpoint`<sup>Optional</sup> <a name="dataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint"></a>

```typescript
public readonly dataformCustomEndpoint: string;
```

- *Type:* string

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint"></a>

```typescript
public readonly dataFusionCustomEndpoint: string;
```

- *Type:* string

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint"></a>

```typescript
public readonly dataLossPreventionCustomEndpoint: string;
```

- *Type:* string

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpoint"></a>

```typescript
public readonly dataPipelineCustomEndpoint: string;
```

- *Type:* string

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint"></a>

```typescript
public readonly dataplexCustomEndpoint: string;
```

- *Type:* string

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint"></a>

```typescript
public readonly dataprocCustomEndpoint: string;
```

- *Type:* string

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpoint"></a>

```typescript
public readonly dataprocGdcCustomEndpoint: string;
```

- *Type:* string

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint"></a>

```typescript
public readonly dataprocMetastoreCustomEndpoint: string;
```

- *Type:* string

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint"></a>

```typescript
public readonly datastreamCustomEndpoint: string;
```

- *Type:* string

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabels"></a>

```typescript
public readonly defaultLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint"></a>

```typescript
public readonly deploymentManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpoint"></a>

```typescript
public readonly developerConnectCustomEndpoint: string;
```

- *Type:* string

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint"></a>

```typescript
public readonly dialogflowCustomEndpoint: string;
```

- *Type:* string

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint"></a>

```typescript
public readonly dialogflowCxCustomEndpoint: string;
```

- *Type:* string

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpoint"></a>

```typescript
public readonly discoveryEngineCustomEndpoint: string;
```

- *Type:* string

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint"></a>

```typescript
public readonly dnsCustomEndpoint: string;
```

- *Type:* string

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint"></a>

```typescript
public readonly documentAiCustomEndpoint: string;
```

- *Type:* string

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpoint"></a>

```typescript
public readonly documentAiWarehouseCustomEndpoint: string;
```

- *Type:* string

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpoint"></a>

```typescript
public readonly edgecontainerCustomEndpoint: string;
```

- *Type:* string

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpoint"></a>

```typescript
public readonly edgenetworkCustomEndpoint: string;
```

- *Type:* string

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint"></a>

```typescript
public readonly essentialContactsCustomEndpoint: string;
```

- *Type:* string

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint"></a>

```typescript
public readonly eventarcCustomEndpoint: string;
```

- *Type:* string

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint"></a>

```typescript
public readonly filestoreCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpoint"></a>

```typescript
public readonly firebaseAppCheckCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint"></a>

```typescript
public readonly firebaseCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint"></a>

```typescript
public readonly firebaseDatabaseCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseExtensionsCustomEndpoint`<sup>Optional</sup> <a name="firebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpoint"></a>

```typescript
public readonly firebaseExtensionsCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint"></a>

```typescript
public readonly firebaseHostingCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint"></a>

```typescript
public readonly firebaserulesCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="firebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint"></a>

```typescript
public readonly firebaseStorageCustomEndpoint: string;
```

- *Type:* string

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint"></a>

```typescript
public readonly firestoreCustomEndpoint: string;
```

- *Type:* string

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpoint"></a>

```typescript
public readonly geminiCustomEndpoint: string;
```

- *Type:* string

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint"></a>

```typescript
public readonly gkeBackupCustomEndpoint: string;
```

- *Type:* string

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpoint"></a>

```typescript
public readonly gkeHub2CustomEndpoint: string;
```

- *Type:* string

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint"></a>

```typescript
public readonly gkeHubCustomEndpoint: string;
```

- *Type:* string

---

##### `gkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint"></a>

```typescript
public readonly gkehubFeatureCustomEndpoint: string;
```

- *Type:* string

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint"></a>

```typescript
public readonly gkeonpremCustomEndpoint: string;
```

- *Type:* string

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint"></a>

```typescript
public readonly healthcareCustomEndpoint: string;
```

- *Type:* string

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint"></a>

```typescript
public readonly iam2CustomEndpoint: string;
```

- *Type:* string

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpoint"></a>

```typescript
public readonly iam3CustomEndpoint: string;
```

- *Type:* string

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint"></a>

```typescript
public readonly iamBetaCustomEndpoint: string;
```

- *Type:* string

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint"></a>

```typescript
public readonly iamCredentialsCustomEndpoint: string;
```

- *Type:* string

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint"></a>

```typescript
public readonly iamCustomEndpoint: string;
```

- *Type:* string

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```typescript
public readonly iamWorkforcePoolCustomEndpoint: string;
```

- *Type:* string

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint"></a>

```typescript
public readonly iapCustomEndpoint: string;
```

- *Type:* string

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint"></a>

```typescript
public readonly identityPlatformCustomEndpoint: string;
```

- *Type:* string

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount"></a>

```typescript
public readonly impersonateServiceAccount: string;
```

- *Type:* string

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates"></a>

```typescript
public readonly impersonateServiceAccountDelegates: string[];
```

- *Type:* string[]

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpoint"></a>

```typescript
public readonly integrationConnectorsCustomEndpoint: string;
```

- *Type:* string

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpoint"></a>

```typescript
public readonly integrationsCustomEndpoint: string;
```

- *Type:* string

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint"></a>

```typescript
public readonly kmsCustomEndpoint: string;
```

- *Type:* string

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint"></a>

```typescript
public readonly loggingCustomEndpoint: string;
```

- *Type:* string

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpoint"></a>

```typescript
public readonly lookerCustomEndpoint: string;
```

- *Type:* string

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpoint"></a>

```typescript
public readonly managedKafkaCustomEndpoint: string;
```

- *Type:* string

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint"></a>

```typescript
public readonly memcacheCustomEndpoint: string;
```

- *Type:* string

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpoint"></a>

```typescript
public readonly memorystoreCustomEndpoint: string;
```

- *Type:* string

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpoint"></a>

```typescript
public readonly migrationCenterCustomEndpoint: string;
```

- *Type:* string

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint"></a>

```typescript
public readonly mlEngineCustomEndpoint: string;
```

- *Type:* string

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint"></a>

```typescript
public readonly monitoringCustomEndpoint: string;
```

- *Type:* string

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpoint"></a>

```typescript
public readonly netappCustomEndpoint: string;
```

- *Type:* string

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint"></a>

```typescript
public readonly networkConnectivityCustomEndpoint: string;
```

- *Type:* string

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint"></a>

```typescript
public readonly networkManagementCustomEndpoint: string;
```

- *Type:* string

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint"></a>

```typescript
public readonly networkSecurityCustomEndpoint: string;
```

- *Type:* string

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint"></a>

```typescript
public readonly networkServicesCustomEndpoint: string;
```

- *Type:* string

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint"></a>

```typescript
public readonly notebooksCustomEndpoint: string;
```

- *Type:* string

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpoint"></a>

```typescript
public readonly oracleDatabaseCustomEndpoint: string;
```

- *Type:* string

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint"></a>

```typescript
public readonly orgPolicyCustomEndpoint: string;
```

- *Type:* string

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint"></a>

```typescript
public readonly osConfigCustomEndpoint: string;
```

- *Type:* string

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint"></a>

```typescript
public readonly osLoginCustomEndpoint: string;
```

- *Type:* string

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpoint"></a>

```typescript
public readonly parallelstoreCustomEndpoint: string;
```

- *Type:* string

---

##### `parameterManagerCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerCustomEndpoint"></a>

```typescript
public readonly parameterManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `parameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parameterManagerRegionalCustomEndpoint"></a>

```typescript
public readonly parameterManagerRegionalCustomEndpoint: string;
```

- *Type:* string

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint"></a>

```typescript
public readonly privatecaCustomEndpoint: string;
```

- *Type:* string

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpoint"></a>

```typescript
public readonly privilegedAccessManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpoint"></a>

```typescript
public readonly publicCaCustomEndpoint: string;
```

- *Type:* string

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint"></a>

```typescript
public readonly pubsubCustomEndpoint: string;
```

- *Type:* string

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint"></a>

```typescript
public readonly pubsubLiteCustomEndpoint: string;
```

- *Type:* string

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```typescript
public readonly recaptchaEnterpriseCustomEndpoint: string;
```

- *Type:* string

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint"></a>

```typescript
public readonly redisCustomEndpoint: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason"></a>

```typescript
public readonly requestReason: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint"></a>

```typescript
public readonly resourceManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint"></a>

```typescript
public readonly resourceManagerV3CustomEndpoint: string;
```

- *Type:* string

---

##### `runtimeconfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint"></a>

```typescript
public readonly runtimeconfigCustomEndpoint: string;
```

- *Type:* string

---

##### `runtimeConfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint"></a>

```typescript
public readonly runtimeConfigCustomEndpoint: string;
```

- *Type:* string

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint"></a>

```typescript
public readonly secretManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpoint"></a>

```typescript
public readonly secretManagerRegionalCustomEndpoint: string;
```

- *Type:* string

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpoint"></a>

```typescript
public readonly secureSourceManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint"></a>

```typescript
public readonly securityCenterCustomEndpoint: string;
```

- *Type:* string

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpoint"></a>

```typescript
public readonly securityCenterManagementCustomEndpoint: string;
```

- *Type:* string

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpoint"></a>

```typescript
public readonly securityCenterV2CustomEndpoint: string;
```

- *Type:* string

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpoint"></a>

```typescript
public readonly securitypostureCustomEndpoint: string;
```

- *Type:* string

---

##### `securityScannerCustomEndpoint`<sup>Optional</sup> <a name="securityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint"></a>

```typescript
public readonly securityScannerCustomEndpoint: string;
```

- *Type:* string

---

##### `serviceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint"></a>

```typescript
public readonly serviceDirectoryCustomEndpoint: string;
```

- *Type:* string

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint"></a>

```typescript
public readonly serviceManagementCustomEndpoint: string;
```

- *Type:* string

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint"></a>

```typescript
public readonly serviceNetworkingCustomEndpoint: string;
```

- *Type:* string

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint"></a>

```typescript
public readonly serviceUsageCustomEndpoint: string;
```

- *Type:* string

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpoint"></a>

```typescript
public readonly siteVerificationCustomEndpoint: string;
```

- *Type:* string

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint"></a>

```typescript
public readonly sourceRepoCustomEndpoint: string;
```

- *Type:* string

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint"></a>

```typescript
public readonly spannerCustomEndpoint: string;
```

- *Type:* string

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint"></a>

```typescript
public readonly sqlCustomEndpoint: string;
```

- *Type:* string

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint"></a>

```typescript
public readonly storageCustomEndpoint: string;
```

- *Type:* string

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpoint"></a>

```typescript
public readonly storageInsightsCustomEndpoint: string;
```

- *Type:* string

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint"></a>

```typescript
public readonly storageTransferCustomEndpoint: string;
```

- *Type:* string

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint"></a>

```typescript
public readonly tagsCustomEndpoint: string;
```

- *Type:* string

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint"></a>

```typescript
public readonly tagsLocationCustomEndpoint: string;
```

- *Type:* string

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```typescript
public readonly terraformAttributionLabelAdditionStrategy: string;
```

- *Type:* string

---

##### `tpuCustomEndpoint`<sup>Optional</sup> <a name="tpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint"></a>

```typescript
public readonly tpuCustomEndpoint: string;
```

- *Type:* string

---

##### `tpuV2CustomEndpoint`<sup>Optional</sup> <a name="tpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpoint"></a>

```typescript
public readonly tpuV2CustomEndpoint: string;
```

- *Type:* string

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpoint"></a>

```typescript
public readonly transcoderCustomEndpoint: string;
```

- *Type:* string

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomain"></a>

```typescript
public readonly universeDomain: string;
```

- *Type:* string

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride"></a>

```typescript
public readonly userProjectOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint"></a>

```typescript
public readonly vertexAiCustomEndpoint: string;
```

- *Type:* string

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpoint"></a>

```typescript
public readonly vmwareengineCustomEndpoint: string;
```

- *Type:* string

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint"></a>

```typescript
public readonly vpcAccessCustomEndpoint: string;
```

- *Type:* string

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpoint"></a>

```typescript
public readonly workbenchCustomEndpoint: string;
```

- *Type:* string

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint"></a>

```typescript
public readonly workflowsCustomEndpoint: string;
```

- *Type:* string

---

##### `workstationsCustomEndpoint`<sup>Optional</sup> <a name="workstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint"></a>

```typescript
public readonly workstationsCustomEndpoint: string;
```

- *Type:* string

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBetaProviderBatching <a name="GoogleBetaProviderBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-google-beta'

const googleBetaProviderBatching: provider.GoogleBetaProviderBatching = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching">enableBatching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#enable_batching GoogleBetaProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter">sendAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#send_after GoogleBetaProvider#send_after}. |

---

##### `enableBatching`<sup>Optional</sup> <a name="enableBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching"></a>

```typescript
public readonly enableBatching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#enable_batching GoogleBetaProvider#enable_batching}.

---

##### `sendAfter`<sup>Optional</sup> <a name="sendAfter" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter"></a>

```typescript
public readonly sendAfter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#send_after GoogleBetaProvider#send_after}.

---

### GoogleBetaProviderConfig <a name="GoogleBetaProviderConfig" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-google-beta'

const googleBetaProviderConfig: provider.GoogleBetaProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#access_token GoogleBetaProvider#access_token}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint">apiGatewayCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apihubCustomEndpoint">apihubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#apihub_custom_endpoint GoogleBetaProvider#apihub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching">batching</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>[]</code> | batching block. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject">billingProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#billing_project GoogleBetaProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.chronicleCustomEndpoint">chronicleCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#chronicle_custom_endpoint GoogleBetaProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">cloudBuildWorkerPoolCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.colabCustomEndpoint">colabCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#colab_custom_endpoint GoogleBetaProvider#colab_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials">credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#credentials GoogleBetaProvider#credentials}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint">dataformCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.defaultLabels">defaultLabels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#default_labels GoogleBetaProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint">firebaseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint">firebaseDatabaseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseExtensionsCustomEndpoint">firebaseExtensionsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint">firebaseHostingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint">firebaseStorageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint">gkehubFeatureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parameterManagerCustomEndpoint">parameterManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#parameter_manager_custom_endpoint GoogleBetaProvider#parameter_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parameterManagerRegionalCustomEndpoint">parameterManagerRegionalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#parameter_manager_regional_custom_endpoint GoogleBetaProvider#parameter_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#project GoogleBetaProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#region GoogleBetaProvider#region}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason">requestReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#request_reason GoogleBetaProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#request_timeout GoogleBetaProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint">runtimeconfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint">runtimeConfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#scopes GoogleBetaProvider#scopes}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint">securityScannerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint">serviceDirectoryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint">tpuCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuV2CustomEndpoint">tpuV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.universeDomain">universeDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#universe_domain GoogleBetaProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride">userProjectOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#user_project_override GoogleBetaProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint">workstationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#zone GoogleBetaProvider#zone}. |

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint"></a>

```typescript
public readonly accessApprovalCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}.

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```typescript
public readonly accessContextManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#access_token GoogleBetaProvider#access_token}.

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```typescript
public readonly activeDirectoryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}.

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.addTerraformAttributionLabel"></a>

```typescript
public readonly addTerraformAttributionLabel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#alias GoogleBetaProvider#alias}

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint"></a>

```typescript
public readonly alloydbCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}.

---

##### `apiGatewayCustomEndpoint`<sup>Optional</sup> <a name="apiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint"></a>

```typescript
public readonly apiGatewayCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}.

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint"></a>

```typescript
public readonly apigeeCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}.

---

##### `apihubCustomEndpoint`<sup>Optional</sup> <a name="apihubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apihubCustomEndpoint"></a>

```typescript
public readonly apihubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#apihub_custom_endpoint GoogleBetaProvider#apihub_custom_endpoint}.

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint"></a>

```typescript
public readonly apikeysCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}.

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint"></a>

```typescript
public readonly appEngineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}.

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apphubCustomEndpoint"></a>

```typescript
public readonly apphubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}.

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```typescript
public readonly artifactRegistryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}.

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```typescript
public readonly assuredWorkloadsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}.

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.backupDrCustomEndpoint"></a>

```typescript
public readonly backupDrCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching"></a>

```typescript
public readonly batching: IResolvable | GoogleBetaProviderBatching[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>[]

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#batching GoogleBetaProvider#batching}

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint"></a>

```typescript
public readonly beyondcorpCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}.

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.biglakeCustomEndpoint"></a>

```typescript
public readonly biglakeCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}.

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```typescript
public readonly bigqueryAnalyticsHubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```typescript
public readonly bigqueryConnectionCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}.

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint"></a>

```typescript
public readonly bigQueryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}.

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```typescript
public readonly bigqueryDatapolicyCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```typescript
public readonly bigqueryDataTransferCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```typescript
public readonly bigqueryReservationCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint"></a>

```typescript
public readonly bigtableCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}.

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint"></a>

```typescript
public readonly billingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}.

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#billing_project GoogleBetaProvider#billing_project}.

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```typescript
public readonly binaryAuthorizationCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}.

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```typescript
public readonly blockchainNodeEngineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint"></a>

```typescript
public readonly certificateManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}.

---

##### `chronicleCustomEndpoint`<sup>Optional</sup> <a name="chronicleCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.chronicleCustomEndpoint"></a>

```typescript
public readonly chronicleCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#chronicle_custom_endpoint GoogleBetaProvider#chronicle_custom_endpoint}.

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint"></a>

```typescript
public readonly cloudAssetCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}.

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint"></a>

```typescript
public readonly cloudBillingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}.

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint"></a>

```typescript
public readonly cloudBuildCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```typescript
public readonly cloudbuildv2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```typescript
public readonly cloudBuildWorkerPoolCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint"></a>

```typescript
public readonly clouddeployCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddomainsCustomEndpoint"></a>

```typescript
public readonly clouddomainsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```typescript
public readonly cloudfunctions2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```typescript
public readonly cloudFunctionsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}.

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```typescript
public readonly cloudIdentityCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}.

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint"></a>

```typescript
public readonly cloudIdsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}.

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```typescript
public readonly cloudQuotasCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}.

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```typescript
public readonly cloudResourceManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint"></a>

```typescript
public readonly cloudRunCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}.

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```typescript
public readonly cloudRunV2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```typescript
public readonly cloudSchedulerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint"></a>

```typescript
public readonly cloudTasksCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}.

---

##### `colabCustomEndpoint`<sup>Optional</sup> <a name="colabCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.colabCustomEndpoint"></a>

```typescript
public readonly colabCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#colab_custom_endpoint GoogleBetaProvider#colab_custom_endpoint}.

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint"></a>

```typescript
public readonly composerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}.

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint"></a>

```typescript
public readonly computeCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}.

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```typescript
public readonly containerAnalysisCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}.

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint"></a>

```typescript
public readonly containerAttachedCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}.

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint"></a>

```typescript
public readonly containerAwsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}.

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint"></a>

```typescript
public readonly containerAzureCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}.

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint"></a>

```typescript
public readonly containerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}.

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.coreBillingCustomEndpoint"></a>

```typescript
public readonly coreBillingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#credentials GoogleBetaProvider#credentials}.

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```typescript
public readonly databaseMigrationServiceCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}.

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint"></a>

```typescript
public readonly dataCatalogCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}.

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint"></a>

```typescript
public readonly dataflowCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}.

---

##### `dataformCustomEndpoint`<sup>Optional</sup> <a name="dataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint"></a>

```typescript
public readonly dataformCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}.

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint"></a>

```typescript
public readonly dataFusionCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}.

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```typescript
public readonly dataLossPreventionCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}.

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataPipelineCustomEndpoint"></a>

```typescript
public readonly dataPipelineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}.

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint"></a>

```typescript
public readonly dataplexCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}.

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint"></a>

```typescript
public readonly dataprocCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}.

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocGdcCustomEndpoint"></a>

```typescript
public readonly dataprocGdcCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}.

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```typescript
public readonly dataprocMetastoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint"></a>

```typescript
public readonly datastreamCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}.

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.defaultLabels"></a>

```typescript
public readonly defaultLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#default_labels GoogleBetaProvider#default_labels}.

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```typescript
public readonly deploymentManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}.

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.developerConnectCustomEndpoint"></a>

```typescript
public readonly developerConnectCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}.

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint"></a>

```typescript
public readonly dialogflowCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}.

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```typescript
public readonly dialogflowCxCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}.

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```typescript
public readonly discoveryEngineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}.

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint"></a>

```typescript
public readonly dnsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}.

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint"></a>

```typescript
public readonly documentAiCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}.

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```typescript
public readonly documentAiWarehouseCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgecontainerCustomEndpoint"></a>

```typescript
public readonly edgecontainerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgenetworkCustomEndpoint"></a>

```typescript
public readonly edgenetworkCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}.

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint"></a>

```typescript
public readonly essentialContactsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}.

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint"></a>

```typescript
public readonly eventarcCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}.

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint"></a>

```typescript
public readonly filestoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}.

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```typescript
public readonly firebaseAppCheckCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}.

---

##### `firebaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint"></a>

```typescript
public readonly firebaseCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}.

---

##### `firebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint"></a>

```typescript
public readonly firebaseDatabaseCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}.

---

##### `firebaseExtensionsCustomEndpoint`<sup>Optional</sup> <a name="firebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseExtensionsCustomEndpoint"></a>

```typescript
public readonly firebaseExtensionsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}.

---

##### `firebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint"></a>

```typescript
public readonly firebaseHostingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}.

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint"></a>

```typescript
public readonly firebaserulesCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}.

---

##### `firebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="firebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint"></a>

```typescript
public readonly firebaseStorageCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}.

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint"></a>

```typescript
public readonly firestoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}.

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.geminiCustomEndpoint"></a>

```typescript
public readonly geminiCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}.

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint"></a>

```typescript
public readonly gkeBackupCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}.

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHub2CustomEndpoint"></a>

```typescript
public readonly gkeHub2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}.

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint"></a>

```typescript
public readonly gkeHubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}.

---

##### `gkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint"></a>

```typescript
public readonly gkehubFeatureCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint"></a>

```typescript
public readonly gkeonpremCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}.

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint"></a>

```typescript
public readonly healthcareCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}.

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint"></a>

```typescript
public readonly iam2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}.

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam3CustomEndpoint"></a>

```typescript
public readonly iam3CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}.

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint"></a>

```typescript
public readonly iamBetaCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}.

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```typescript
public readonly iamCredentialsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}.

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint"></a>

```typescript
public readonly iamCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}.

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```typescript
public readonly iamWorkforcePoolCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint"></a>

```typescript
public readonly iapCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}.

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint"></a>

```typescript
public readonly identityPlatformCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}.

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount"></a>

```typescript
public readonly impersonateServiceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}.

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates"></a>

```typescript
public readonly impersonateServiceAccountDelegates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}.

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```typescript
public readonly integrationConnectorsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}.

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationsCustomEndpoint"></a>

```typescript
public readonly integrationsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}.

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint"></a>

```typescript
public readonly kmsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}.

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint"></a>

```typescript
public readonly loggingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}.

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.lookerCustomEndpoint"></a>

```typescript
public readonly lookerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}.

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.managedKafkaCustomEndpoint"></a>

```typescript
public readonly managedKafkaCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}.

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint"></a>

```typescript
public readonly memcacheCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}.

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memorystoreCustomEndpoint"></a>

```typescript
public readonly memorystoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}.

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.migrationCenterCustomEndpoint"></a>

```typescript
public readonly migrationCenterCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}.

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint"></a>

```typescript
public readonly mlEngineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}.

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint"></a>

```typescript
public readonly monitoringCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}.

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.netappCustomEndpoint"></a>

```typescript
public readonly netappCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}.

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```typescript
public readonly networkConnectivityCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}.

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint"></a>

```typescript
public readonly networkManagementCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}.

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint"></a>

```typescript
public readonly networkSecurityCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}.

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint"></a>

```typescript
public readonly networkServicesCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}.

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint"></a>

```typescript
public readonly notebooksCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}.

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.oracleDatabaseCustomEndpoint"></a>

```typescript
public readonly oracleDatabaseCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}.

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint"></a>

```typescript
public readonly orgPolicyCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}.

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint"></a>

```typescript
public readonly osConfigCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}.

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint"></a>

```typescript
public readonly osLoginCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}.

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parallelstoreCustomEndpoint"></a>

```typescript
public readonly parallelstoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}.

---

##### `parameterManagerCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parameterManagerCustomEndpoint"></a>

```typescript
public readonly parameterManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#parameter_manager_custom_endpoint GoogleBetaProvider#parameter_manager_custom_endpoint}.

---

##### `parameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parameterManagerRegionalCustomEndpoint"></a>

```typescript
public readonly parameterManagerRegionalCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#parameter_manager_regional_custom_endpoint GoogleBetaProvider#parameter_manager_regional_custom_endpoint}.

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint"></a>

```typescript
public readonly privatecaCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}.

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privilegedAccessManagerCustomEndpoint"></a>

```typescript
public readonly privilegedAccessManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#project GoogleBetaProvider#project}.

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.publicCaCustomEndpoint"></a>

```typescript
public readonly publicCaCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}.

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint"></a>

```typescript
public readonly pubsubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}.

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```typescript
public readonly pubsubLiteCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```typescript
public readonly recaptchaEnterpriseCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint"></a>

```typescript
public readonly redisCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#region GoogleBetaProvider#region}.

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason"></a>

```typescript
public readonly requestReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#request_reason GoogleBetaProvider#request_reason}.

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#request_timeout GoogleBetaProvider#request_timeout}.

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint"></a>

```typescript
public readonly resourceManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}.

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```typescript
public readonly resourceManagerV3CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}.

---

##### `runtimeconfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint"></a>

```typescript
public readonly runtimeconfigCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}.

---

##### `runtimeConfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint"></a>

```typescript
public readonly runtimeConfigCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#scopes GoogleBetaProvider#scopes}.

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint"></a>

```typescript
public readonly secretManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}.

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerRegionalCustomEndpoint"></a>

```typescript
public readonly secretManagerRegionalCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}.

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```typescript
public readonly secureSourceManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}.

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint"></a>

```typescript
public readonly securityCenterCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}.

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterManagementCustomEndpoint"></a>

```typescript
public readonly securityCenterManagementCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}.

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterV2CustomEndpoint"></a>

```typescript
public readonly securityCenterV2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}.

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securitypostureCustomEndpoint"></a>

```typescript
public readonly securitypostureCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}.

---

##### `securityScannerCustomEndpoint`<sup>Optional</sup> <a name="securityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint"></a>

```typescript
public readonly securityScannerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}.

---

##### `serviceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint"></a>

```typescript
public readonly serviceDirectoryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}.

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint"></a>

```typescript
public readonly serviceManagementCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}.

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```typescript
public readonly serviceNetworkingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}.

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint"></a>

```typescript
public readonly serviceUsageCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}.

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.siteVerificationCustomEndpoint"></a>

```typescript
public readonly siteVerificationCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}.

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint"></a>

```typescript
public readonly sourceRepoCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}.

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint"></a>

```typescript
public readonly spannerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}.

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint"></a>

```typescript
public readonly sqlCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}.

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint"></a>

```typescript
public readonly storageCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}.

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageInsightsCustomEndpoint"></a>

```typescript
public readonly storageInsightsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}.

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint"></a>

```typescript
public readonly storageTransferCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}.

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint"></a>

```typescript
public readonly tagsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}.

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint"></a>

```typescript
public readonly tagsLocationCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}.

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```typescript
public readonly terraformAttributionLabelAdditionStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpuCustomEndpoint`<sup>Optional</sup> <a name="tpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint"></a>

```typescript
public readonly tpuCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}.

---

##### `tpuV2CustomEndpoint`<sup>Optional</sup> <a name="tpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuV2CustomEndpoint"></a>

```typescript
public readonly tpuV2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}.

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.transcoderCustomEndpoint"></a>

```typescript
public readonly transcoderCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}.

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.universeDomain"></a>

```typescript
public readonly universeDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#universe_domain GoogleBetaProvider#universe_domain}.

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride"></a>

```typescript
public readonly userProjectOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#user_project_override GoogleBetaProvider#user_project_override}.

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint"></a>

```typescript
public readonly vertexAiCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vmwareengineCustomEndpoint"></a>

```typescript
public readonly vmwareengineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}.

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint"></a>

```typescript
public readonly vpcAccessCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}.

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workbenchCustomEndpoint"></a>

```typescript
public readonly workbenchCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}.

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint"></a>

```typescript
public readonly workflowsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}.

---

##### `workstationsCustomEndpoint`<sup>Optional</sup> <a name="workstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint"></a>

```typescript
public readonly workstationsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs#zone GoogleBetaProvider#zone}.

---



