# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google-beta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBetaProvider <a name="GoogleBetaProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs google-beta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.provider.GoogleBetaProvider;

GoogleBetaProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessApprovalCustomEndpoint(java.lang.String)
//  .accessContextManagerCustomEndpoint(java.lang.String)
//  .accessToken(java.lang.String)
//  .activeDirectoryCustomEndpoint(java.lang.String)
//  .addTerraformAttributionLabel(java.lang.Boolean)
//  .addTerraformAttributionLabel(IResolvable)
//  .alias(java.lang.String)
//  .alloydbCustomEndpoint(java.lang.String)
//  .apiGatewayCustomEndpoint(java.lang.String)
//  .apigeeCustomEndpoint(java.lang.String)
//  .apikeysCustomEndpoint(java.lang.String)
//  .appEngineCustomEndpoint(java.lang.String)
//  .apphubCustomEndpoint(java.lang.String)
//  .artifactRegistryCustomEndpoint(java.lang.String)
//  .assuredWorkloadsCustomEndpoint(java.lang.String)
//  .backupDrCustomEndpoint(java.lang.String)
//  .batching(IResolvable)
//  .batching(java.util.List<GoogleBetaProviderBatching>)
//  .beyondcorpCustomEndpoint(java.lang.String)
//  .biglakeCustomEndpoint(java.lang.String)
//  .bigqueryAnalyticsHubCustomEndpoint(java.lang.String)
//  .bigqueryConnectionCustomEndpoint(java.lang.String)
//  .bigQueryCustomEndpoint(java.lang.String)
//  .bigqueryDatapolicyCustomEndpoint(java.lang.String)
//  .bigqueryDataTransferCustomEndpoint(java.lang.String)
//  .bigqueryReservationCustomEndpoint(java.lang.String)
//  .bigtableCustomEndpoint(java.lang.String)
//  .billingCustomEndpoint(java.lang.String)
//  .billingProject(java.lang.String)
//  .binaryAuthorizationCustomEndpoint(java.lang.String)
//  .blockchainNodeEngineCustomEndpoint(java.lang.String)
//  .certificateManagerCustomEndpoint(java.lang.String)
//  .cloudAssetCustomEndpoint(java.lang.String)
//  .cloudBillingCustomEndpoint(java.lang.String)
//  .cloudBuildCustomEndpoint(java.lang.String)
//  .cloudbuildv2CustomEndpoint(java.lang.String)
//  .cloudBuildWorkerPoolCustomEndpoint(java.lang.String)
//  .clouddeployCustomEndpoint(java.lang.String)
//  .clouddomainsCustomEndpoint(java.lang.String)
//  .cloudfunctions2CustomEndpoint(java.lang.String)
//  .cloudFunctionsCustomEndpoint(java.lang.String)
//  .cloudIdentityCustomEndpoint(java.lang.String)
//  .cloudIdsCustomEndpoint(java.lang.String)
//  .cloudQuotasCustomEndpoint(java.lang.String)
//  .cloudResourceManagerCustomEndpoint(java.lang.String)
//  .cloudRunCustomEndpoint(java.lang.String)
//  .cloudRunV2CustomEndpoint(java.lang.String)
//  .cloudSchedulerCustomEndpoint(java.lang.String)
//  .cloudTasksCustomEndpoint(java.lang.String)
//  .composerCustomEndpoint(java.lang.String)
//  .computeCustomEndpoint(java.lang.String)
//  .containerAnalysisCustomEndpoint(java.lang.String)
//  .containerAttachedCustomEndpoint(java.lang.String)
//  .containerAwsCustomEndpoint(java.lang.String)
//  .containerAzureCustomEndpoint(java.lang.String)
//  .containerCustomEndpoint(java.lang.String)
//  .coreBillingCustomEndpoint(java.lang.String)
//  .credentials(java.lang.String)
//  .databaseMigrationServiceCustomEndpoint(java.lang.String)
//  .dataCatalogCustomEndpoint(java.lang.String)
//  .dataflowCustomEndpoint(java.lang.String)
//  .dataformCustomEndpoint(java.lang.String)
//  .dataFusionCustomEndpoint(java.lang.String)
//  .dataLossPreventionCustomEndpoint(java.lang.String)
//  .dataPipelineCustomEndpoint(java.lang.String)
//  .dataplexCustomEndpoint(java.lang.String)
//  .dataprocCustomEndpoint(java.lang.String)
//  .dataprocGdcCustomEndpoint(java.lang.String)
//  .dataprocMetastoreCustomEndpoint(java.lang.String)
//  .datastreamCustomEndpoint(java.lang.String)
//  .defaultLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentManagerCustomEndpoint(java.lang.String)
//  .developerConnectCustomEndpoint(java.lang.String)
//  .dialogflowCustomEndpoint(java.lang.String)
//  .dialogflowCxCustomEndpoint(java.lang.String)
//  .discoveryEngineCustomEndpoint(java.lang.String)
//  .dnsCustomEndpoint(java.lang.String)
//  .documentAiCustomEndpoint(java.lang.String)
//  .documentAiWarehouseCustomEndpoint(java.lang.String)
//  .edgecontainerCustomEndpoint(java.lang.String)
//  .edgenetworkCustomEndpoint(java.lang.String)
//  .essentialContactsCustomEndpoint(java.lang.String)
//  .eventarcCustomEndpoint(java.lang.String)
//  .filestoreCustomEndpoint(java.lang.String)
//  .firebaseAppCheckCustomEndpoint(java.lang.String)
//  .firebaseCustomEndpoint(java.lang.String)
//  .firebaseDatabaseCustomEndpoint(java.lang.String)
//  .firebaseExtensionsCustomEndpoint(java.lang.String)
//  .firebaseHostingCustomEndpoint(java.lang.String)
//  .firebaserulesCustomEndpoint(java.lang.String)
//  .firebaseStorageCustomEndpoint(java.lang.String)
//  .firestoreCustomEndpoint(java.lang.String)
//  .geminiCustomEndpoint(java.lang.String)
//  .gkeBackupCustomEndpoint(java.lang.String)
//  .gkeHub2CustomEndpoint(java.lang.String)
//  .gkeHubCustomEndpoint(java.lang.String)
//  .gkehubFeatureCustomEndpoint(java.lang.String)
//  .gkeonpremCustomEndpoint(java.lang.String)
//  .healthcareCustomEndpoint(java.lang.String)
//  .iam2CustomEndpoint(java.lang.String)
//  .iam3CustomEndpoint(java.lang.String)
//  .iamBetaCustomEndpoint(java.lang.String)
//  .iamCredentialsCustomEndpoint(java.lang.String)
//  .iamCustomEndpoint(java.lang.String)
//  .iamWorkforcePoolCustomEndpoint(java.lang.String)
//  .iapCustomEndpoint(java.lang.String)
//  .identityPlatformCustomEndpoint(java.lang.String)
//  .impersonateServiceAccount(java.lang.String)
//  .impersonateServiceAccountDelegates(java.util.List<java.lang.String>)
//  .integrationConnectorsCustomEndpoint(java.lang.String)
//  .integrationsCustomEndpoint(java.lang.String)
//  .kmsCustomEndpoint(java.lang.String)
//  .loggingCustomEndpoint(java.lang.String)
//  .lookerCustomEndpoint(java.lang.String)
//  .managedKafkaCustomEndpoint(java.lang.String)
//  .memcacheCustomEndpoint(java.lang.String)
//  .memorystoreCustomEndpoint(java.lang.String)
//  .migrationCenterCustomEndpoint(java.lang.String)
//  .mlEngineCustomEndpoint(java.lang.String)
//  .monitoringCustomEndpoint(java.lang.String)
//  .netappCustomEndpoint(java.lang.String)
//  .networkConnectivityCustomEndpoint(java.lang.String)
//  .networkManagementCustomEndpoint(java.lang.String)
//  .networkSecurityCustomEndpoint(java.lang.String)
//  .networkServicesCustomEndpoint(java.lang.String)
//  .notebooksCustomEndpoint(java.lang.String)
//  .oracleDatabaseCustomEndpoint(java.lang.String)
//  .orgPolicyCustomEndpoint(java.lang.String)
//  .osConfigCustomEndpoint(java.lang.String)
//  .osLoginCustomEndpoint(java.lang.String)
//  .parallelstoreCustomEndpoint(java.lang.String)
//  .privatecaCustomEndpoint(java.lang.String)
//  .privilegedAccessManagerCustomEndpoint(java.lang.String)
//  .project(java.lang.String)
//  .publicCaCustomEndpoint(java.lang.String)
//  .pubsubCustomEndpoint(java.lang.String)
//  .pubsubLiteCustomEndpoint(java.lang.String)
//  .recaptchaEnterpriseCustomEndpoint(java.lang.String)
//  .redisCustomEndpoint(java.lang.String)
//  .region(java.lang.String)
//  .requestReason(java.lang.String)
//  .requestTimeout(java.lang.String)
//  .resourceManagerCustomEndpoint(java.lang.String)
//  .resourceManagerV3CustomEndpoint(java.lang.String)
//  .runtimeconfigCustomEndpoint(java.lang.String)
//  .runtimeConfigCustomEndpoint(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .secretManagerCustomEndpoint(java.lang.String)
//  .secretManagerRegionalCustomEndpoint(java.lang.String)
//  .secureSourceManagerCustomEndpoint(java.lang.String)
//  .securityCenterCustomEndpoint(java.lang.String)
//  .securityCenterManagementCustomEndpoint(java.lang.String)
//  .securityCenterV2CustomEndpoint(java.lang.String)
//  .securitypostureCustomEndpoint(java.lang.String)
//  .securityScannerCustomEndpoint(java.lang.String)
//  .serviceDirectoryCustomEndpoint(java.lang.String)
//  .serviceManagementCustomEndpoint(java.lang.String)
//  .serviceNetworkingCustomEndpoint(java.lang.String)
//  .serviceUsageCustomEndpoint(java.lang.String)
//  .siteVerificationCustomEndpoint(java.lang.String)
//  .sourceRepoCustomEndpoint(java.lang.String)
//  .spannerCustomEndpoint(java.lang.String)
//  .sqlCustomEndpoint(java.lang.String)
//  .storageCustomEndpoint(java.lang.String)
//  .storageInsightsCustomEndpoint(java.lang.String)
//  .storageTransferCustomEndpoint(java.lang.String)
//  .tagsCustomEndpoint(java.lang.String)
//  .tagsLocationCustomEndpoint(java.lang.String)
//  .terraformAttributionLabelAdditionStrategy(java.lang.String)
//  .tpuCustomEndpoint(java.lang.String)
//  .tpuV2CustomEndpoint(java.lang.String)
//  .transcoderCustomEndpoint(java.lang.String)
//  .universeDomain(java.lang.String)
//  .userProjectOverride(java.lang.Boolean)
//  .userProjectOverride(IResolvable)
//  .vertexAiCustomEndpoint(java.lang.String)
//  .vmwareengineCustomEndpoint(java.lang.String)
//  .vpcAccessCustomEndpoint(java.lang.String)
//  .workbenchCustomEndpoint(java.lang.String)
//  .workflowsCustomEndpoint(java.lang.String)
//  .workstationsCustomEndpoint(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_token GoogleBetaProvider#access_token}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apiGatewayCustomEndpoint">apiGatewayCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.batching">batching</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>></code> | batching block. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.billingProject">billingProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#billing_project GoogleBetaProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBuildWorkerPoolCustomEndpoint">cloudBuildWorkerPoolCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#credentials GoogleBetaProvider#credentials}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataformCustomEndpoint">dataformCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.defaultLabels">defaultLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#default_labels GoogleBetaProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseCustomEndpoint">firebaseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseDatabaseCustomEndpoint">firebaseDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseExtensionsCustomEndpoint">firebaseExtensionsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseHostingCustomEndpoint">firebaseHostingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseStorageCustomEndpoint">firebaseStorageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkehubFeatureCustomEndpoint">gkehubFeatureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#project GoogleBetaProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#region GoogleBetaProvider#region}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.requestReason">requestReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#request_reason GoogleBetaProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#request_timeout GoogleBetaProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.runtimeconfigCustomEndpoint">runtimeconfigCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.runtimeConfigCustomEndpoint">runtimeConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#scopes GoogleBetaProvider#scopes}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityScannerCustomEndpoint">securityScannerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceDirectoryCustomEndpoint">serviceDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tpuCustomEndpoint">tpuCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tpuV2CustomEndpoint">tpuV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.universeDomain">universeDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#universe_domain GoogleBetaProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.userProjectOverride">userProjectOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#user_project_override GoogleBetaProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workstationsCustomEndpoint">workstationsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#zone GoogleBetaProvider#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessApprovalCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}.

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessContextManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_token GoogleBetaProvider#access_token}.

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.activeDirectoryCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}.

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.addTerraformAttributionLabel"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#alias GoogleBetaProvider#alias}

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.alloydbCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}.

---

##### `apiGatewayCustomEndpoint`<sup>Optional</sup> <a name="apiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apiGatewayCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}.

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apigeeCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}.

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apikeysCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}.

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.appEngineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}.

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apphubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}.

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.artifactRegistryCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}.

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.assuredWorkloadsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}.

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.backupDrCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.batching"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>>

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#batching GoogleBetaProvider#batching}

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.beyondcorpCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}.

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.biglakeCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}.

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryAnalyticsHubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryConnectionCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}.

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigQueryCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}.

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryDatapolicyCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryDataTransferCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryReservationCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigtableCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}.

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.billingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}.

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.billingProject"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#billing_project GoogleBetaProvider#billing_project}.

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.binaryAuthorizationCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}.

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.blockchainNodeEngineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.certificateManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}.

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudAssetCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}.

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBillingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}.

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBuildCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudbuildv2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBuildWorkerPoolCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.clouddeployCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.clouddomainsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudfunctions2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudFunctionsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}.

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudIdentityCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}.

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudIdsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}.

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudQuotasCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}.

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudResourceManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudRunCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}.

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudRunV2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudSchedulerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudTasksCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}.

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.composerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}.

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.computeCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}.

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAnalysisCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}.

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAttachedCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}.

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAwsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}.

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAzureCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}.

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}.

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.coreBillingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.credentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#credentials GoogleBetaProvider#credentials}.

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.databaseMigrationServiceCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}.

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataCatalogCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}.

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataflowCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}.

---

##### `dataformCustomEndpoint`<sup>Optional</sup> <a name="dataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataformCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}.

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataFusionCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}.

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataLossPreventionCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}.

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataPipelineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}.

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataplexCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}.

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}.

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocGdcCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}.

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocMetastoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.datastreamCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}.

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.defaultLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#default_labels GoogleBetaProvider#default_labels}.

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.deploymentManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}.

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.developerConnectCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}.

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dialogflowCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}.

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dialogflowCxCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}.

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.discoveryEngineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}.

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dnsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}.

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.documentAiCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}.

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.documentAiWarehouseCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.edgecontainerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.edgenetworkCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}.

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.essentialContactsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}.

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.eventarcCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}.

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.filestoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}.

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseAppCheckCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}.

---

##### `firebaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}.

---

##### `firebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseDatabaseCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}.

---

##### `firebaseExtensionsCustomEndpoint`<sup>Optional</sup> <a name="firebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseExtensionsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}.

---

##### `firebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseHostingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}.

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaserulesCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}.

---

##### `firebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="firebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseStorageCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}.

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firestoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}.

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.geminiCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}.

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeBackupCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}.

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeHub2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}.

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeHubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}.

---

##### `gkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkehubFeatureCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeonpremCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}.

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.healthcareCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}.

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iam2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}.

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iam3CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}.

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamBetaCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}.

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamCredentialsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}.

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}.

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamWorkforcePoolCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iapCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}.

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.identityPlatformCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}.

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.impersonateServiceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}.

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.impersonateServiceAccountDelegates"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}.

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.integrationConnectorsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}.

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.integrationsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}.

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.kmsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}.

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.loggingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}.

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.lookerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}.

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.managedKafkaCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}.

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.memcacheCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}.

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.memorystoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}.

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.migrationCenterCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}.

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.mlEngineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}.

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.monitoringCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}.

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.netappCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}.

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkConnectivityCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}.

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkManagementCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}.

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkSecurityCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}.

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkServicesCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}.

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.notebooksCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}.

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.oracleDatabaseCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}.

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.orgPolicyCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}.

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.osConfigCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}.

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.osLoginCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}.

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.parallelstoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}.

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.privatecaCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}.

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.privilegedAccessManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#project GoogleBetaProvider#project}.

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.publicCaCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}.

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.pubsubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}.

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.pubsubLiteCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.recaptchaEnterpriseCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.redisCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#region GoogleBetaProvider#region}.

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.requestReason"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#request_reason GoogleBetaProvider#request_reason}.

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.requestTimeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#request_timeout GoogleBetaProvider#request_timeout}.

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.resourceManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}.

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.resourceManagerV3CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}.

---

##### `runtimeconfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.runtimeconfigCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}.

---

##### `runtimeConfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.runtimeConfigCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#scopes GoogleBetaProvider#scopes}.

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secretManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}.

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secretManagerRegionalCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}.

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secureSourceManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}.

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}.

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterManagementCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}.

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterV2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}.

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securitypostureCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}.

---

##### `securityScannerCustomEndpoint`<sup>Optional</sup> <a name="securityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityScannerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}.

---

##### `serviceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceDirectoryCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}.

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceManagementCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}.

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceNetworkingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}.

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceUsageCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}.

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.siteVerificationCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}.

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.sourceRepoCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}.

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.spannerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}.

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.sqlCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}.

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}.

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageInsightsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}.

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageTransferCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}.

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tagsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}.

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tagsLocationCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}.

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.terraformAttributionLabelAdditionStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpuCustomEndpoint`<sup>Optional</sup> <a name="tpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tpuCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}.

---

##### `tpuV2CustomEndpoint`<sup>Optional</sup> <a name="tpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tpuV2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}.

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.transcoderCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}.

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.universeDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#universe_domain GoogleBetaProvider#universe_domain}.

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.userProjectOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#user_project_override GoogleBetaProvider#user_project_override}.

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vertexAiCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vmwareengineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}.

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vpcAccessCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}.

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workbenchCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}.

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workflowsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}.

---

##### `workstationsCustomEndpoint`<sup>Optional</sup> <a name="workstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workstationsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#zone GoogleBetaProvider#zone}.

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessApprovalCustomEndpoint` <a name="resetAccessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint"></a>

```java
public void resetAccessApprovalCustomEndpoint()
```

##### `resetAccessContextManagerCustomEndpoint` <a name="resetAccessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint"></a>

```java
public void resetAccessContextManagerCustomEndpoint()
```

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetActiveDirectoryCustomEndpoint` <a name="resetActiveDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint"></a>

```java
public void resetActiveDirectoryCustomEndpoint()
```

##### `resetAddTerraformAttributionLabel` <a name="resetAddTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAddTerraformAttributionLabel"></a>

```java
public void resetAddTerraformAttributionLabel()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAlloydbCustomEndpoint` <a name="resetAlloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint"></a>

```java
public void resetAlloydbCustomEndpoint()
```

##### `resetApiGatewayCustomEndpoint` <a name="resetApiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint"></a>

```java
public void resetApiGatewayCustomEndpoint()
```

##### `resetApigeeCustomEndpoint` <a name="resetApigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint"></a>

```java
public void resetApigeeCustomEndpoint()
```

##### `resetApikeysCustomEndpoint` <a name="resetApikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint"></a>

```java
public void resetApikeysCustomEndpoint()
```

##### `resetAppEngineCustomEndpoint` <a name="resetAppEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint"></a>

```java
public void resetAppEngineCustomEndpoint()
```

##### `resetApphubCustomEndpoint` <a name="resetApphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApphubCustomEndpoint"></a>

```java
public void resetApphubCustomEndpoint()
```

##### `resetArtifactRegistryCustomEndpoint` <a name="resetArtifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint"></a>

```java
public void resetArtifactRegistryCustomEndpoint()
```

##### `resetAssuredWorkloadsCustomEndpoint` <a name="resetAssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```java
public void resetAssuredWorkloadsCustomEndpoint()
```

##### `resetBackupDrCustomEndpoint` <a name="resetBackupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBackupDrCustomEndpoint"></a>

```java
public void resetBackupDrCustomEndpoint()
```

##### `resetBatching` <a name="resetBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching"></a>

```java
public void resetBatching()
```

##### `resetBeyondcorpCustomEndpoint` <a name="resetBeyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint"></a>

```java
public void resetBeyondcorpCustomEndpoint()
```

##### `resetBiglakeCustomEndpoint` <a name="resetBiglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBiglakeCustomEndpoint"></a>

```java
public void resetBiglakeCustomEndpoint()
```

##### `resetBigqueryAnalyticsHubCustomEndpoint` <a name="resetBigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```java
public void resetBigqueryAnalyticsHubCustomEndpoint()
```

##### `resetBigqueryConnectionCustomEndpoint` <a name="resetBigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryConnectionCustomEndpoint"></a>

```java
public void resetBigqueryConnectionCustomEndpoint()
```

##### `resetBigQueryCustomEndpoint` <a name="resetBigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigQueryCustomEndpoint"></a>

```java
public void resetBigQueryCustomEndpoint()
```

##### `resetBigqueryDatapolicyCustomEndpoint` <a name="resetBigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```java
public void resetBigqueryDatapolicyCustomEndpoint()
```

##### `resetBigqueryDataTransferCustomEndpoint` <a name="resetBigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```java
public void resetBigqueryDataTransferCustomEndpoint()
```

##### `resetBigqueryReservationCustomEndpoint` <a name="resetBigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryReservationCustomEndpoint"></a>

```java
public void resetBigqueryReservationCustomEndpoint()
```

##### `resetBigtableCustomEndpoint` <a name="resetBigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigtableCustomEndpoint"></a>

```java
public void resetBigtableCustomEndpoint()
```

##### `resetBillingCustomEndpoint` <a name="resetBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingCustomEndpoint"></a>

```java
public void resetBillingCustomEndpoint()
```

##### `resetBillingProject` <a name="resetBillingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingProject"></a>

```java
public void resetBillingProject()
```

##### `resetBinaryAuthorizationCustomEndpoint` <a name="resetBinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```java
public void resetBinaryAuthorizationCustomEndpoint()
```

##### `resetBlockchainNodeEngineCustomEndpoint` <a name="resetBlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```java
public void resetBlockchainNodeEngineCustomEndpoint()
```

##### `resetCertificateManagerCustomEndpoint` <a name="resetCertificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint"></a>

```java
public void resetCertificateManagerCustomEndpoint()
```

##### `resetCloudAssetCustomEndpoint` <a name="resetCloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint"></a>

```java
public void resetCloudAssetCustomEndpoint()
```

##### `resetCloudBillingCustomEndpoint` <a name="resetCloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint"></a>

```java
public void resetCloudBillingCustomEndpoint()
```

##### `resetCloudBuildCustomEndpoint` <a name="resetCloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint"></a>

```java
public void resetCloudBuildCustomEndpoint()
```

##### `resetCloudbuildv2CustomEndpoint` <a name="resetCloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint"></a>

```java
public void resetCloudbuildv2CustomEndpoint()
```

##### `resetCloudBuildWorkerPoolCustomEndpoint` <a name="resetCloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```java
public void resetCloudBuildWorkerPoolCustomEndpoint()
```

##### `resetClouddeployCustomEndpoint` <a name="resetClouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint"></a>

```java
public void resetClouddeployCustomEndpoint()
```

##### `resetClouddomainsCustomEndpoint` <a name="resetClouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddomainsCustomEndpoint"></a>

```java
public void resetClouddomainsCustomEndpoint()
```

##### `resetCloudfunctions2CustomEndpoint` <a name="resetCloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint"></a>

```java
public void resetCloudfunctions2CustomEndpoint()
```

##### `resetCloudFunctionsCustomEndpoint` <a name="resetCloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint"></a>

```java
public void resetCloudFunctionsCustomEndpoint()
```

##### `resetCloudIdentityCustomEndpoint` <a name="resetCloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint"></a>

```java
public void resetCloudIdentityCustomEndpoint()
```

##### `resetCloudIdsCustomEndpoint` <a name="resetCloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint"></a>

```java
public void resetCloudIdsCustomEndpoint()
```

##### `resetCloudQuotasCustomEndpoint` <a name="resetCloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudQuotasCustomEndpoint"></a>

```java
public void resetCloudQuotasCustomEndpoint()
```

##### `resetCloudResourceManagerCustomEndpoint` <a name="resetCloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint"></a>

```java
public void resetCloudResourceManagerCustomEndpoint()
```

##### `resetCloudRunCustomEndpoint` <a name="resetCloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint"></a>

```java
public void resetCloudRunCustomEndpoint()
```

##### `resetCloudRunV2CustomEndpoint` <a name="resetCloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint"></a>

```java
public void resetCloudRunV2CustomEndpoint()
```

##### `resetCloudSchedulerCustomEndpoint` <a name="resetCloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint"></a>

```java
public void resetCloudSchedulerCustomEndpoint()
```

##### `resetCloudTasksCustomEndpoint` <a name="resetCloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint"></a>

```java
public void resetCloudTasksCustomEndpoint()
```

##### `resetComposerCustomEndpoint` <a name="resetComposerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint"></a>

```java
public void resetComposerCustomEndpoint()
```

##### `resetComputeCustomEndpoint` <a name="resetComputeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint"></a>

```java
public void resetComputeCustomEndpoint()
```

##### `resetContainerAnalysisCustomEndpoint` <a name="resetContainerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint"></a>

```java
public void resetContainerAnalysisCustomEndpoint()
```

##### `resetContainerAttachedCustomEndpoint` <a name="resetContainerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint"></a>

```java
public void resetContainerAttachedCustomEndpoint()
```

##### `resetContainerAwsCustomEndpoint` <a name="resetContainerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint"></a>

```java
public void resetContainerAwsCustomEndpoint()
```

##### `resetContainerAzureCustomEndpoint` <a name="resetContainerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint"></a>

```java
public void resetContainerAzureCustomEndpoint()
```

##### `resetContainerCustomEndpoint` <a name="resetContainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint"></a>

```java
public void resetContainerCustomEndpoint()
```

##### `resetCoreBillingCustomEndpoint` <a name="resetCoreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCoreBillingCustomEndpoint"></a>

```java
public void resetCoreBillingCustomEndpoint()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetDatabaseMigrationServiceCustomEndpoint` <a name="resetDatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```java
public void resetDatabaseMigrationServiceCustomEndpoint()
```

##### `resetDataCatalogCustomEndpoint` <a name="resetDataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint"></a>

```java
public void resetDataCatalogCustomEndpoint()
```

##### `resetDataflowCustomEndpoint` <a name="resetDataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint"></a>

```java
public void resetDataflowCustomEndpoint()
```

##### `resetDataformCustomEndpoint` <a name="resetDataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint"></a>

```java
public void resetDataformCustomEndpoint()
```

##### `resetDataFusionCustomEndpoint` <a name="resetDataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint"></a>

```java
public void resetDataFusionCustomEndpoint()
```

##### `resetDataLossPreventionCustomEndpoint` <a name="resetDataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint"></a>

```java
public void resetDataLossPreventionCustomEndpoint()
```

##### `resetDataPipelineCustomEndpoint` <a name="resetDataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataPipelineCustomEndpoint"></a>

```java
public void resetDataPipelineCustomEndpoint()
```

##### `resetDataplexCustomEndpoint` <a name="resetDataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint"></a>

```java
public void resetDataplexCustomEndpoint()
```

##### `resetDataprocCustomEndpoint` <a name="resetDataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint"></a>

```java
public void resetDataprocCustomEndpoint()
```

##### `resetDataprocGdcCustomEndpoint` <a name="resetDataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocGdcCustomEndpoint"></a>

```java
public void resetDataprocGdcCustomEndpoint()
```

##### `resetDataprocMetastoreCustomEndpoint` <a name="resetDataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint"></a>

```java
public void resetDataprocMetastoreCustomEndpoint()
```

##### `resetDatastreamCustomEndpoint` <a name="resetDatastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint"></a>

```java
public void resetDatastreamCustomEndpoint()
```

##### `resetDefaultLabels` <a name="resetDefaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDefaultLabels"></a>

```java
public void resetDefaultLabels()
```

##### `resetDeploymentManagerCustomEndpoint` <a name="resetDeploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint"></a>

```java
public void resetDeploymentManagerCustomEndpoint()
```

##### `resetDeveloperConnectCustomEndpoint` <a name="resetDeveloperConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeveloperConnectCustomEndpoint"></a>

```java
public void resetDeveloperConnectCustomEndpoint()
```

##### `resetDialogflowCustomEndpoint` <a name="resetDialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint"></a>

```java
public void resetDialogflowCustomEndpoint()
```

##### `resetDialogflowCxCustomEndpoint` <a name="resetDialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint"></a>

```java
public void resetDialogflowCxCustomEndpoint()
```

##### `resetDiscoveryEngineCustomEndpoint` <a name="resetDiscoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDiscoveryEngineCustomEndpoint"></a>

```java
public void resetDiscoveryEngineCustomEndpoint()
```

##### `resetDnsCustomEndpoint` <a name="resetDnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint"></a>

```java
public void resetDnsCustomEndpoint()
```

##### `resetDocumentAiCustomEndpoint` <a name="resetDocumentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint"></a>

```java
public void resetDocumentAiCustomEndpoint()
```

##### `resetDocumentAiWarehouseCustomEndpoint` <a name="resetDocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```java
public void resetDocumentAiWarehouseCustomEndpoint()
```

##### `resetEdgecontainerCustomEndpoint` <a name="resetEdgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgecontainerCustomEndpoint"></a>

```java
public void resetEdgecontainerCustomEndpoint()
```

##### `resetEdgenetworkCustomEndpoint` <a name="resetEdgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgenetworkCustomEndpoint"></a>

```java
public void resetEdgenetworkCustomEndpoint()
```

##### `resetEssentialContactsCustomEndpoint` <a name="resetEssentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint"></a>

```java
public void resetEssentialContactsCustomEndpoint()
```

##### `resetEventarcCustomEndpoint` <a name="resetEventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint"></a>

```java
public void resetEventarcCustomEndpoint()
```

##### `resetFilestoreCustomEndpoint` <a name="resetFilestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint"></a>

```java
public void resetFilestoreCustomEndpoint()
```

##### `resetFirebaseAppCheckCustomEndpoint` <a name="resetFirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```java
public void resetFirebaseAppCheckCustomEndpoint()
```

##### `resetFirebaseCustomEndpoint` <a name="resetFirebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint"></a>

```java
public void resetFirebaseCustomEndpoint()
```

##### `resetFirebaseDatabaseCustomEndpoint` <a name="resetFirebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint"></a>

```java
public void resetFirebaseDatabaseCustomEndpoint()
```

##### `resetFirebaseExtensionsCustomEndpoint` <a name="resetFirebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseExtensionsCustomEndpoint"></a>

```java
public void resetFirebaseExtensionsCustomEndpoint()
```

##### `resetFirebaseHostingCustomEndpoint` <a name="resetFirebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint"></a>

```java
public void resetFirebaseHostingCustomEndpoint()
```

##### `resetFirebaserulesCustomEndpoint` <a name="resetFirebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint"></a>

```java
public void resetFirebaserulesCustomEndpoint()
```

##### `resetFirebaseStorageCustomEndpoint` <a name="resetFirebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint"></a>

```java
public void resetFirebaseStorageCustomEndpoint()
```

##### `resetFirestoreCustomEndpoint` <a name="resetFirestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint"></a>

```java
public void resetFirestoreCustomEndpoint()
```

##### `resetGeminiCustomEndpoint` <a name="resetGeminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGeminiCustomEndpoint"></a>

```java
public void resetGeminiCustomEndpoint()
```

##### `resetGkeBackupCustomEndpoint` <a name="resetGkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint"></a>

```java
public void resetGkeBackupCustomEndpoint()
```

##### `resetGkeHub2CustomEndpoint` <a name="resetGkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHub2CustomEndpoint"></a>

```java
public void resetGkeHub2CustomEndpoint()
```

##### `resetGkeHubCustomEndpoint` <a name="resetGkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint"></a>

```java
public void resetGkeHubCustomEndpoint()
```

##### `resetGkehubFeatureCustomEndpoint` <a name="resetGkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint"></a>

```java
public void resetGkehubFeatureCustomEndpoint()
```

##### `resetGkeonpremCustomEndpoint` <a name="resetGkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint"></a>

```java
public void resetGkeonpremCustomEndpoint()
```

##### `resetHealthcareCustomEndpoint` <a name="resetHealthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint"></a>

```java
public void resetHealthcareCustomEndpoint()
```

##### `resetIam2CustomEndpoint` <a name="resetIam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint"></a>

```java
public void resetIam2CustomEndpoint()
```

##### `resetIam3CustomEndpoint` <a name="resetIam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam3CustomEndpoint"></a>

```java
public void resetIam3CustomEndpoint()
```

##### `resetIamBetaCustomEndpoint` <a name="resetIamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint"></a>

```java
public void resetIamBetaCustomEndpoint()
```

##### `resetIamCredentialsCustomEndpoint` <a name="resetIamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint"></a>

```java
public void resetIamCredentialsCustomEndpoint()
```

##### `resetIamCustomEndpoint` <a name="resetIamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint"></a>

```java
public void resetIamCustomEndpoint()
```

##### `resetIamWorkforcePoolCustomEndpoint` <a name="resetIamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```java
public void resetIamWorkforcePoolCustomEndpoint()
```

##### `resetIapCustomEndpoint` <a name="resetIapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint"></a>

```java
public void resetIapCustomEndpoint()
```

##### `resetIdentityPlatformCustomEndpoint` <a name="resetIdentityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint"></a>

```java
public void resetIdentityPlatformCustomEndpoint()
```

##### `resetImpersonateServiceAccount` <a name="resetImpersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount"></a>

```java
public void resetImpersonateServiceAccount()
```

##### `resetImpersonateServiceAccountDelegates` <a name="resetImpersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates"></a>

```java
public void resetImpersonateServiceAccountDelegates()
```

##### `resetIntegrationConnectorsCustomEndpoint` <a name="resetIntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```java
public void resetIntegrationConnectorsCustomEndpoint()
```

##### `resetIntegrationsCustomEndpoint` <a name="resetIntegrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationsCustomEndpoint"></a>

```java
public void resetIntegrationsCustomEndpoint()
```

##### `resetKmsCustomEndpoint` <a name="resetKmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint"></a>

```java
public void resetKmsCustomEndpoint()
```

##### `resetLoggingCustomEndpoint` <a name="resetLoggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint"></a>

```java
public void resetLoggingCustomEndpoint()
```

##### `resetLookerCustomEndpoint` <a name="resetLookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLookerCustomEndpoint"></a>

```java
public void resetLookerCustomEndpoint()
```

##### `resetManagedKafkaCustomEndpoint` <a name="resetManagedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetManagedKafkaCustomEndpoint"></a>

```java
public void resetManagedKafkaCustomEndpoint()
```

##### `resetMemcacheCustomEndpoint` <a name="resetMemcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint"></a>

```java
public void resetMemcacheCustomEndpoint()
```

##### `resetMemorystoreCustomEndpoint` <a name="resetMemorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemorystoreCustomEndpoint"></a>

```java
public void resetMemorystoreCustomEndpoint()
```

##### `resetMigrationCenterCustomEndpoint` <a name="resetMigrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMigrationCenterCustomEndpoint"></a>

```java
public void resetMigrationCenterCustomEndpoint()
```

##### `resetMlEngineCustomEndpoint` <a name="resetMlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint"></a>

```java
public void resetMlEngineCustomEndpoint()
```

##### `resetMonitoringCustomEndpoint` <a name="resetMonitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint"></a>

```java
public void resetMonitoringCustomEndpoint()
```

##### `resetNetappCustomEndpoint` <a name="resetNetappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetappCustomEndpoint"></a>

```java
public void resetNetappCustomEndpoint()
```

##### `resetNetworkConnectivityCustomEndpoint` <a name="resetNetworkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint"></a>

```java
public void resetNetworkConnectivityCustomEndpoint()
```

##### `resetNetworkManagementCustomEndpoint` <a name="resetNetworkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint"></a>

```java
public void resetNetworkManagementCustomEndpoint()
```

##### `resetNetworkSecurityCustomEndpoint` <a name="resetNetworkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint"></a>

```java
public void resetNetworkSecurityCustomEndpoint()
```

##### `resetNetworkServicesCustomEndpoint` <a name="resetNetworkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint"></a>

```java
public void resetNetworkServicesCustomEndpoint()
```

##### `resetNotebooksCustomEndpoint` <a name="resetNotebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint"></a>

```java
public void resetNotebooksCustomEndpoint()
```

##### `resetOracleDatabaseCustomEndpoint` <a name="resetOracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOracleDatabaseCustomEndpoint"></a>

```java
public void resetOracleDatabaseCustomEndpoint()
```

##### `resetOrgPolicyCustomEndpoint` <a name="resetOrgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint"></a>

```java
public void resetOrgPolicyCustomEndpoint()
```

##### `resetOsConfigCustomEndpoint` <a name="resetOsConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint"></a>

```java
public void resetOsConfigCustomEndpoint()
```

##### `resetOsLoginCustomEndpoint` <a name="resetOsLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint"></a>

```java
public void resetOsLoginCustomEndpoint()
```

##### `resetParallelstoreCustomEndpoint` <a name="resetParallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParallelstoreCustomEndpoint"></a>

```java
public void resetParallelstoreCustomEndpoint()
```

##### `resetPrivatecaCustomEndpoint` <a name="resetPrivatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint"></a>

```java
public void resetPrivatecaCustomEndpoint()
```

##### `resetPrivilegedAccessManagerCustomEndpoint` <a name="resetPrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivilegedAccessManagerCustomEndpoint"></a>

```java
public void resetPrivilegedAccessManagerCustomEndpoint()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublicCaCustomEndpoint` <a name="resetPublicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPublicCaCustomEndpoint"></a>

```java
public void resetPublicCaCustomEndpoint()
```

##### `resetPubsubCustomEndpoint` <a name="resetPubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubCustomEndpoint"></a>

```java
public void resetPubsubCustomEndpoint()
```

##### `resetPubsubLiteCustomEndpoint` <a name="resetPubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubLiteCustomEndpoint"></a>

```java
public void resetPubsubLiteCustomEndpoint()
```

##### `resetRecaptchaEnterpriseCustomEndpoint` <a name="resetRecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```java
public void resetRecaptchaEnterpriseCustomEndpoint()
```

##### `resetRedisCustomEndpoint` <a name="resetRedisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRedisCustomEndpoint"></a>

```java
public void resetRedisCustomEndpoint()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRequestReason` <a name="resetRequestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestReason"></a>

```java
public void resetRequestReason()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetResourceManagerCustomEndpoint` <a name="resetResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerCustomEndpoint"></a>

```java
public void resetResourceManagerCustomEndpoint()
```

##### `resetResourceManagerV3CustomEndpoint` <a name="resetResourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerV3CustomEndpoint"></a>

```java
public void resetResourceManagerV3CustomEndpoint()
```

##### `resetRuntimeconfigCustomEndpoint` <a name="resetRuntimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeconfigCustomEndpoint"></a>

```java
public void resetRuntimeconfigCustomEndpoint()
```

##### `resetRuntimeConfigCustomEndpoint` <a name="resetRuntimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeConfigCustomEndpoint"></a>

```java
public void resetRuntimeConfigCustomEndpoint()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSecretManagerCustomEndpoint` <a name="resetSecretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerCustomEndpoint"></a>

```java
public void resetSecretManagerCustomEndpoint()
```

##### `resetSecretManagerRegionalCustomEndpoint` <a name="resetSecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerRegionalCustomEndpoint"></a>

```java
public void resetSecretManagerRegionalCustomEndpoint()
```

##### `resetSecureSourceManagerCustomEndpoint` <a name="resetSecureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecureSourceManagerCustomEndpoint"></a>

```java
public void resetSecureSourceManagerCustomEndpoint()
```

##### `resetSecurityCenterCustomEndpoint` <a name="resetSecurityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint"></a>

```java
public void resetSecurityCenterCustomEndpoint()
```

##### `resetSecurityCenterManagementCustomEndpoint` <a name="resetSecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterManagementCustomEndpoint"></a>

```java
public void resetSecurityCenterManagementCustomEndpoint()
```

##### `resetSecurityCenterV2CustomEndpoint` <a name="resetSecurityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterV2CustomEndpoint"></a>

```java
public void resetSecurityCenterV2CustomEndpoint()
```

##### `resetSecuritypostureCustomEndpoint` <a name="resetSecuritypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecuritypostureCustomEndpoint"></a>

```java
public void resetSecuritypostureCustomEndpoint()
```

##### `resetSecurityScannerCustomEndpoint` <a name="resetSecurityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint"></a>

```java
public void resetSecurityScannerCustomEndpoint()
```

##### `resetServiceDirectoryCustomEndpoint` <a name="resetServiceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint"></a>

```java
public void resetServiceDirectoryCustomEndpoint()
```

##### `resetServiceManagementCustomEndpoint` <a name="resetServiceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint"></a>

```java
public void resetServiceManagementCustomEndpoint()
```

##### `resetServiceNetworkingCustomEndpoint` <a name="resetServiceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint"></a>

```java
public void resetServiceNetworkingCustomEndpoint()
```

##### `resetServiceUsageCustomEndpoint` <a name="resetServiceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint"></a>

```java
public void resetServiceUsageCustomEndpoint()
```

##### `resetSiteVerificationCustomEndpoint` <a name="resetSiteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSiteVerificationCustomEndpoint"></a>

```java
public void resetSiteVerificationCustomEndpoint()
```

##### `resetSourceRepoCustomEndpoint` <a name="resetSourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint"></a>

```java
public void resetSourceRepoCustomEndpoint()
```

##### `resetSpannerCustomEndpoint` <a name="resetSpannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint"></a>

```java
public void resetSpannerCustomEndpoint()
```

##### `resetSqlCustomEndpoint` <a name="resetSqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint"></a>

```java
public void resetSqlCustomEndpoint()
```

##### `resetStorageCustomEndpoint` <a name="resetStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint"></a>

```java
public void resetStorageCustomEndpoint()
```

##### `resetStorageInsightsCustomEndpoint` <a name="resetStorageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageInsightsCustomEndpoint"></a>

```java
public void resetStorageInsightsCustomEndpoint()
```

##### `resetStorageTransferCustomEndpoint` <a name="resetStorageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint"></a>

```java
public void resetStorageTransferCustomEndpoint()
```

##### `resetTagsCustomEndpoint` <a name="resetTagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint"></a>

```java
public void resetTagsCustomEndpoint()
```

##### `resetTagsLocationCustomEndpoint` <a name="resetTagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint"></a>

```java
public void resetTagsLocationCustomEndpoint()
```

##### `resetTerraformAttributionLabelAdditionStrategy` <a name="resetTerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```java
public void resetTerraformAttributionLabelAdditionStrategy()
```

##### `resetTpuCustomEndpoint` <a name="resetTpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint"></a>

```java
public void resetTpuCustomEndpoint()
```

##### `resetTpuV2CustomEndpoint` <a name="resetTpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuV2CustomEndpoint"></a>

```java
public void resetTpuV2CustomEndpoint()
```

##### `resetTranscoderCustomEndpoint` <a name="resetTranscoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTranscoderCustomEndpoint"></a>

```java
public void resetTranscoderCustomEndpoint()
```

##### `resetUniverseDomain` <a name="resetUniverseDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUniverseDomain"></a>

```java
public void resetUniverseDomain()
```

##### `resetUserProjectOverride` <a name="resetUserProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride"></a>

```java
public void resetUserProjectOverride()
```

##### `resetVertexAiCustomEndpoint` <a name="resetVertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint"></a>

```java
public void resetVertexAiCustomEndpoint()
```

##### `resetVmwareengineCustomEndpoint` <a name="resetVmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVmwareengineCustomEndpoint"></a>

```java
public void resetVmwareengineCustomEndpoint()
```

##### `resetVpcAccessCustomEndpoint` <a name="resetVpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint"></a>

```java
public void resetVpcAccessCustomEndpoint()
```

##### `resetWorkbenchCustomEndpoint` <a name="resetWorkbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkbenchCustomEndpoint"></a>

```java
public void resetWorkbenchCustomEndpoint()
```

##### `resetWorkflowsCustomEndpoint` <a name="resetWorkflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint"></a>

```java
public void resetWorkflowsCustomEndpoint()
```

##### `resetWorkstationsCustomEndpoint` <a name="resetWorkstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint"></a>

```java
public void resetWorkstationsCustomEndpoint()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone"></a>

```java
public void resetZone()
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

```java
import com.hashicorp.cdktf.providers.google_beta.provider.GoogleBetaProvider;

GoogleBetaProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.provider.GoogleBetaProvider;

GoogleBetaProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.provider.GoogleBetaProvider;

GoogleBetaProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.provider.GoogleBetaProvider;

GoogleBetaProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBetaProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBetaProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBetaProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBetaProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBetaProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput">accessApprovalCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput">accessContextManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput">activeDirectoryCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabelInput">addTerraformAttributionLabelInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput">alloydbCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput">apiGatewayCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput">apigeeCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput">apikeysCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput">appEngineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpointInput">apphubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput">artifactRegistryCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput">assuredWorkloadsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpointInput">backupDrCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput">batchingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput">beyondcorpCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpointInput">biglakeCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput">bigqueryAnalyticsHubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput">bigqueryConnectionCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput">bigQueryCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput">bigqueryDatapolicyCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput">bigqueryDataTransferCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput">bigqueryReservationCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput">bigtableCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput">billingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput">billingProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput">binaryAuthorizationCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpointInput">blockchainNodeEngineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput">certificateManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput">cloudAssetCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput">cloudBillingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput">cloudBuildCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput">cloudbuildv2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput">cloudBuildWorkerPoolCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput">clouddeployCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpointInput">clouddomainsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput">cloudfunctions2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput">cloudFunctionsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput">cloudIdentityCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput">cloudIdsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpointInput">cloudQuotasCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput">cloudResourceManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput">cloudRunCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput">cloudRunV2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput">cloudSchedulerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput">cloudTasksCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput">composerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput">computeCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput">containerAnalysisCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput">containerAttachedCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput">containerAwsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput">containerAzureCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput">containerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpointInput">coreBillingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput">databaseMigrationServiceCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput">dataCatalogCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput">dataflowCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput">dataformCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput">dataFusionCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput">dataLossPreventionCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpointInput">dataPipelineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput">dataplexCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput">dataprocCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpointInput">dataprocGdcCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput">dataprocMetastoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput">datastreamCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabelsInput">defaultLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput">deploymentManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpointInput">developerConnectCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput">dialogflowCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput">dialogflowCxCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpointInput">discoveryEngineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput">dnsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput">documentAiCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpointInput">documentAiWarehouseCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpointInput">edgecontainerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpointInput">edgenetworkCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput">essentialContactsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput">eventarcCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput">filestoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpointInput">firebaseAppCheckCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput">firebaseCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput">firebaseDatabaseCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpointInput">firebaseExtensionsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput">firebaseHostingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput">firebaserulesCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput">firebaseStorageCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput">firestoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpointInput">geminiCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput">gkeBackupCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpointInput">gkeHub2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput">gkeHubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput">gkehubFeatureCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput">gkeonpremCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput">healthcareCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput">iam2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpointInput">iam3CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput">iamBetaCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput">iamCredentialsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput">iamCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput">iamWorkforcePoolCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput">iapCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput">identityPlatformCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput">impersonateServiceAccountDelegatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput">impersonateServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpointInput">integrationConnectorsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpointInput">integrationsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput">kmsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput">loggingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpointInput">lookerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpointInput">managedKafkaCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput">memcacheCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpointInput">memorystoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpointInput">migrationCenterCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput">mlEngineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput">monitoringCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpointInput">netappCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput">networkConnectivityCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput">networkManagementCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput">networkSecurityCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput">networkServicesCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput">notebooksCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpointInput">oracleDatabaseCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput">orgPolicyCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput">osConfigCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput">osLoginCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpointInput">parallelstoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput">privatecaCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpointInput">privilegedAccessManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpointInput">publicCaCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput">pubsubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput">pubsubLiteCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput">recaptchaEnterpriseCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput">redisCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput">requestReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput">resourceManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput">resourceManagerV3CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput">runtimeconfigCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput">runtimeConfigCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput">secretManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpointInput">secretManagerRegionalCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpointInput">secureSourceManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput">securityCenterCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpointInput">securityCenterManagementCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpointInput">securityCenterV2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpointInput">securitypostureCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput">securityScannerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput">serviceDirectoryCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput">serviceManagementCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput">serviceNetworkingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput">serviceUsageCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpointInput">siteVerificationCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput">sourceRepoCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput">spannerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput">sqlCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput">storageCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpointInput">storageInsightsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput">storageTransferCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput">tagsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput">tagsLocationCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategyInput">terraformAttributionLabelAdditionStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput">tpuCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpointInput">tpuV2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpointInput">transcoderCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomainInput">universeDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput">userProjectOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput">vertexAiCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpointInput">vmwareengineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput">vpcAccessCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpointInput">workbenchCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput">workflowsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput">workstationsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint">apiGatewayCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching">batching</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject">billingProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint">cloudBuildWorkerPoolCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint">dataformCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabels">defaultLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint">firebaseCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint">firebaseDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpoint">firebaseExtensionsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint">firebaseHostingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint">firebaseStorageCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint">gkehubFeatureCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason">requestReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint">runtimeconfigCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint">runtimeConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint">securityScannerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint">serviceDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint">tpuCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpoint">tpuV2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomain">universeDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride">userProjectOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint">workstationsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accessApprovalCustomEndpointInput`<sup>Optional</sup> <a name="accessApprovalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput"></a>

```java
public java.lang.String getAccessApprovalCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `accessContextManagerCustomEndpointInput`<sup>Optional</sup> <a name="accessContextManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput"></a>

```java
public java.lang.String getAccessContextManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="activeDirectoryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput"></a>

```java
public java.lang.String getActiveDirectoryCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `addTerraformAttributionLabelInput`<sup>Optional</sup> <a name="addTerraformAttributionLabelInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabelInput"></a>

```java
public java.lang.Object getAddTerraformAttributionLabelInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `alloydbCustomEndpointInput`<sup>Optional</sup> <a name="alloydbCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput"></a>

```java
public java.lang.String getAlloydbCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `apiGatewayCustomEndpointInput`<sup>Optional</sup> <a name="apiGatewayCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput"></a>

```java
public java.lang.String getApiGatewayCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `apigeeCustomEndpointInput`<sup>Optional</sup> <a name="apigeeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput"></a>

```java
public java.lang.String getApigeeCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `apikeysCustomEndpointInput`<sup>Optional</sup> <a name="apikeysCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput"></a>

```java
public java.lang.String getApikeysCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `appEngineCustomEndpointInput`<sup>Optional</sup> <a name="appEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput"></a>

```java
public java.lang.String getAppEngineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `apphubCustomEndpointInput`<sup>Optional</sup> <a name="apphubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpointInput"></a>

```java
public java.lang.String getApphubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `artifactRegistryCustomEndpointInput`<sup>Optional</sup> <a name="artifactRegistryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput"></a>

```java
public java.lang.String getArtifactRegistryCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `assuredWorkloadsCustomEndpointInput`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```java
public java.lang.String getAssuredWorkloadsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `backupDrCustomEndpointInput`<sup>Optional</sup> <a name="backupDrCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpointInput"></a>

```java
public java.lang.String getBackupDrCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `batchingInput`<sup>Optional</sup> <a name="batchingInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput"></a>

```java
public java.lang.Object getBatchingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>>

---

##### `beyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="beyondcorpCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput"></a>

```java
public java.lang.String getBeyondcorpCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `biglakeCustomEndpointInput`<sup>Optional</sup> <a name="biglakeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpointInput"></a>

```java
public java.lang.String getBiglakeCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryAnalyticsHubCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryAnalyticsHubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryConnectionCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryConnectionCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigQueryCustomEndpointInput`<sup>Optional</sup> <a name="bigQueryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput"></a>

```java
public java.lang.String getBigQueryCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryDatapolicyCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryDatapolicyCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryDataTransferCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryDataTransferCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryReservationCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryReservationCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigtableCustomEndpointInput`<sup>Optional</sup> <a name="bigtableCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput"></a>

```java
public java.lang.String getBigtableCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `billingCustomEndpointInput`<sup>Optional</sup> <a name="billingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput"></a>

```java
public java.lang.String getBillingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput"></a>

```java
public java.lang.String getBillingProjectInput();
```

- *Type:* java.lang.String

---

##### `binaryAuthorizationCustomEndpointInput`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```java
public java.lang.String getBinaryAuthorizationCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `blockchainNodeEngineCustomEndpointInput`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```java
public java.lang.String getBlockchainNodeEngineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `certificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="certificateManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput"></a>

```java
public java.lang.String getCertificateManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudAssetCustomEndpointInput`<sup>Optional</sup> <a name="cloudAssetCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput"></a>

```java
public java.lang.String getCloudAssetCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudBillingCustomEndpointInput`<sup>Optional</sup> <a name="cloudBillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput"></a>

```java
public java.lang.String getCloudBillingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudBuildCustomEndpointInput`<sup>Optional</sup> <a name="cloudBuildCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput"></a>

```java
public java.lang.String getCloudBuildCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudbuildv2CustomEndpointInput`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput"></a>

```java
public java.lang.String getCloudbuildv2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudBuildWorkerPoolCustomEndpointInput`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput"></a>

```java
public java.lang.String getCloudBuildWorkerPoolCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `clouddeployCustomEndpointInput`<sup>Optional</sup> <a name="clouddeployCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput"></a>

```java
public java.lang.String getClouddeployCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `clouddomainsCustomEndpointInput`<sup>Optional</sup> <a name="clouddomainsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpointInput"></a>

```java
public java.lang.String getClouddomainsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudfunctions2CustomEndpointInput`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput"></a>

```java
public java.lang.String getCloudfunctions2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudFunctionsCustomEndpointInput`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput"></a>

```java
public java.lang.String getCloudFunctionsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudIdentityCustomEndpointInput`<sup>Optional</sup> <a name="cloudIdentityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput"></a>

```java
public java.lang.String getCloudIdentityCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudIdsCustomEndpointInput`<sup>Optional</sup> <a name="cloudIdsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput"></a>

```java
public java.lang.String getCloudIdsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudQuotasCustomEndpointInput`<sup>Optional</sup> <a name="cloudQuotasCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpointInput"></a>

```java
public java.lang.String getCloudQuotasCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```java
public java.lang.String getCloudResourceManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudRunCustomEndpointInput`<sup>Optional</sup> <a name="cloudRunCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput"></a>

```java
public java.lang.String getCloudRunCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudRunV2CustomEndpointInput`<sup>Optional</sup> <a name="cloudRunV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput"></a>

```java
public java.lang.String getCloudRunV2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudSchedulerCustomEndpointInput`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput"></a>

```java
public java.lang.String getCloudSchedulerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudTasksCustomEndpointInput`<sup>Optional</sup> <a name="cloudTasksCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput"></a>

```java
public java.lang.String getCloudTasksCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `composerCustomEndpointInput`<sup>Optional</sup> <a name="composerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput"></a>

```java
public java.lang.String getComposerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `computeCustomEndpointInput`<sup>Optional</sup> <a name="computeCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput"></a>

```java
public java.lang.String getComputeCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerAnalysisCustomEndpointInput`<sup>Optional</sup> <a name="containerAnalysisCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput"></a>

```java
public java.lang.String getContainerAnalysisCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerAttachedCustomEndpointInput`<sup>Optional</sup> <a name="containerAttachedCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput"></a>

```java
public java.lang.String getContainerAttachedCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerAwsCustomEndpointInput`<sup>Optional</sup> <a name="containerAwsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput"></a>

```java
public java.lang.String getContainerAwsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerAzureCustomEndpointInput`<sup>Optional</sup> <a name="containerAzureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput"></a>

```java
public java.lang.String getContainerAzureCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerCustomEndpointInput`<sup>Optional</sup> <a name="containerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput"></a>

```java
public java.lang.String getContainerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `coreBillingCustomEndpointInput`<sup>Optional</sup> <a name="coreBillingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpointInput"></a>

```java
public java.lang.String getCoreBillingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `databaseMigrationServiceCustomEndpointInput`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```java
public java.lang.String getDatabaseMigrationServiceCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataCatalogCustomEndpointInput`<sup>Optional</sup> <a name="dataCatalogCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput"></a>

```java
public java.lang.String getDataCatalogCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataflowCustomEndpointInput`<sup>Optional</sup> <a name="dataflowCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput"></a>

```java
public java.lang.String getDataflowCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataformCustomEndpointInput`<sup>Optional</sup> <a name="dataformCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput"></a>

```java
public java.lang.String getDataformCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataFusionCustomEndpointInput`<sup>Optional</sup> <a name="dataFusionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput"></a>

```java
public java.lang.String getDataFusionCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataLossPreventionCustomEndpointInput`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput"></a>

```java
public java.lang.String getDataLossPreventionCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataPipelineCustomEndpointInput`<sup>Optional</sup> <a name="dataPipelineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpointInput"></a>

```java
public java.lang.String getDataPipelineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataplexCustomEndpointInput`<sup>Optional</sup> <a name="dataplexCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput"></a>

```java
public java.lang.String getDataplexCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataprocCustomEndpointInput`<sup>Optional</sup> <a name="dataprocCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput"></a>

```java
public java.lang.String getDataprocCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataprocGdcCustomEndpointInput`<sup>Optional</sup> <a name="dataprocGdcCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpointInput"></a>

```java
public java.lang.String getDataprocGdcCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```java
public java.lang.String getDataprocMetastoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `datastreamCustomEndpointInput`<sup>Optional</sup> <a name="datastreamCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput"></a>

```java
public java.lang.String getDatastreamCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `defaultLabelsInput`<sup>Optional</sup> <a name="defaultLabelsInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="deploymentManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput"></a>

```java
public java.lang.String getDeploymentManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `developerConnectCustomEndpointInput`<sup>Optional</sup> <a name="developerConnectCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpointInput"></a>

```java
public java.lang.String getDeveloperConnectCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dialogflowCustomEndpointInput`<sup>Optional</sup> <a name="dialogflowCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput"></a>

```java
public java.lang.String getDialogflowCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dialogflowCxCustomEndpointInput`<sup>Optional</sup> <a name="dialogflowCxCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput"></a>

```java
public java.lang.String getDialogflowCxCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `discoveryEngineCustomEndpointInput`<sup>Optional</sup> <a name="discoveryEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpointInput"></a>

```java
public java.lang.String getDiscoveryEngineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dnsCustomEndpointInput`<sup>Optional</sup> <a name="dnsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput"></a>

```java
public java.lang.String getDnsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `documentAiCustomEndpointInput`<sup>Optional</sup> <a name="documentAiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput"></a>

```java
public java.lang.String getDocumentAiCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `documentAiWarehouseCustomEndpointInput`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```java
public java.lang.String getDocumentAiWarehouseCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `edgecontainerCustomEndpointInput`<sup>Optional</sup> <a name="edgecontainerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpointInput"></a>

```java
public java.lang.String getEdgecontainerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `edgenetworkCustomEndpointInput`<sup>Optional</sup> <a name="edgenetworkCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpointInput"></a>

```java
public java.lang.String getEdgenetworkCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `essentialContactsCustomEndpointInput`<sup>Optional</sup> <a name="essentialContactsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput"></a>

```java
public java.lang.String getEssentialContactsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `eventarcCustomEndpointInput`<sup>Optional</sup> <a name="eventarcCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput"></a>

```java
public java.lang.String getEventarcCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `filestoreCustomEndpointInput`<sup>Optional</sup> <a name="filestoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput"></a>

```java
public java.lang.String getFilestoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseAppCheckCustomEndpointInput`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseAppCheckCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseCustomEndpointInput`<sup>Optional</sup> <a name="firebaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="firebaseDatabaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseDatabaseCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseExtensionsCustomEndpointInput`<sup>Optional</sup> <a name="firebaseExtensionsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseExtensionsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseHostingCustomEndpointInput`<sup>Optional</sup> <a name="firebaseHostingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseHostingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaserulesCustomEndpointInput`<sup>Optional</sup> <a name="firebaserulesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput"></a>

```java
public java.lang.String getFirebaserulesCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseStorageCustomEndpointInput`<sup>Optional</sup> <a name="firebaseStorageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseStorageCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firestoreCustomEndpointInput`<sup>Optional</sup> <a name="firestoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput"></a>

```java
public java.lang.String getFirestoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `geminiCustomEndpointInput`<sup>Optional</sup> <a name="geminiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpointInput"></a>

```java
public java.lang.String getGeminiCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="gkeBackupCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput"></a>

```java
public java.lang.String getGkeBackupCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkeHub2CustomEndpointInput`<sup>Optional</sup> <a name="gkeHub2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpointInput"></a>

```java
public java.lang.String getGkeHub2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkeHubCustomEndpointInput`<sup>Optional</sup> <a name="gkeHubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput"></a>

```java
public java.lang.String getGkeHubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkehubFeatureCustomEndpointInput`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput"></a>

```java
public java.lang.String getGkehubFeatureCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkeonpremCustomEndpointInput`<sup>Optional</sup> <a name="gkeonpremCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput"></a>

```java
public java.lang.String getGkeonpremCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `healthcareCustomEndpointInput`<sup>Optional</sup> <a name="healthcareCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput"></a>

```java
public java.lang.String getHealthcareCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iam2CustomEndpointInput`<sup>Optional</sup> <a name="iam2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput"></a>

```java
public java.lang.String getIam2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iam3CustomEndpointInput`<sup>Optional</sup> <a name="iam3CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpointInput"></a>

```java
public java.lang.String getIam3CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamBetaCustomEndpointInput`<sup>Optional</sup> <a name="iamBetaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput"></a>

```java
public java.lang.String getIamBetaCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamCredentialsCustomEndpointInput`<sup>Optional</sup> <a name="iamCredentialsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput"></a>

```java
public java.lang.String getIamCredentialsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamCustomEndpointInput`<sup>Optional</sup> <a name="iamCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput"></a>

```java
public java.lang.String getIamCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamWorkforcePoolCustomEndpointInput`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```java
public java.lang.String getIamWorkforcePoolCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iapCustomEndpointInput`<sup>Optional</sup> <a name="iapCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput"></a>

```java
public java.lang.String getIapCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `identityPlatformCustomEndpointInput`<sup>Optional</sup> <a name="identityPlatformCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput"></a>

```java
public java.lang.String getIdentityPlatformCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `impersonateServiceAccountDelegatesInput`<sup>Optional</sup> <a name="impersonateServiceAccountDelegatesInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput"></a>

```java
public java.util.List<java.lang.String> getImpersonateServiceAccountDelegatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `impersonateServiceAccountInput`<sup>Optional</sup> <a name="impersonateServiceAccountInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput"></a>

```java
public java.lang.String getImpersonateServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `integrationConnectorsCustomEndpointInput`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpointInput"></a>

```java
public java.lang.String getIntegrationConnectorsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `integrationsCustomEndpointInput`<sup>Optional</sup> <a name="integrationsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpointInput"></a>

```java
public java.lang.String getIntegrationsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `kmsCustomEndpointInput`<sup>Optional</sup> <a name="kmsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput"></a>

```java
public java.lang.String getKmsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `loggingCustomEndpointInput`<sup>Optional</sup> <a name="loggingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput"></a>

```java
public java.lang.String getLoggingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `lookerCustomEndpointInput`<sup>Optional</sup> <a name="lookerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpointInput"></a>

```java
public java.lang.String getLookerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `managedKafkaCustomEndpointInput`<sup>Optional</sup> <a name="managedKafkaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpointInput"></a>

```java
public java.lang.String getManagedKafkaCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `memcacheCustomEndpointInput`<sup>Optional</sup> <a name="memcacheCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput"></a>

```java
public java.lang.String getMemcacheCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `memorystoreCustomEndpointInput`<sup>Optional</sup> <a name="memorystoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpointInput"></a>

```java
public java.lang.String getMemorystoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `migrationCenterCustomEndpointInput`<sup>Optional</sup> <a name="migrationCenterCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpointInput"></a>

```java
public java.lang.String getMigrationCenterCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `mlEngineCustomEndpointInput`<sup>Optional</sup> <a name="mlEngineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput"></a>

```java
public java.lang.String getMlEngineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `monitoringCustomEndpointInput`<sup>Optional</sup> <a name="monitoringCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput"></a>

```java
public java.lang.String getMonitoringCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `netappCustomEndpointInput`<sup>Optional</sup> <a name="netappCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpointInput"></a>

```java
public java.lang.String getNetappCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `networkConnectivityCustomEndpointInput`<sup>Optional</sup> <a name="networkConnectivityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput"></a>

```java
public java.lang.String getNetworkConnectivityCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `networkManagementCustomEndpointInput`<sup>Optional</sup> <a name="networkManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput"></a>

```java
public java.lang.String getNetworkManagementCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityCustomEndpointInput`<sup>Optional</sup> <a name="networkSecurityCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput"></a>

```java
public java.lang.String getNetworkSecurityCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `networkServicesCustomEndpointInput`<sup>Optional</sup> <a name="networkServicesCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput"></a>

```java
public java.lang.String getNetworkServicesCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `notebooksCustomEndpointInput`<sup>Optional</sup> <a name="notebooksCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput"></a>

```java
public java.lang.String getNotebooksCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `oracleDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpointInput"></a>

```java
public java.lang.String getOracleDatabaseCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `orgPolicyCustomEndpointInput`<sup>Optional</sup> <a name="orgPolicyCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput"></a>

```java
public java.lang.String getOrgPolicyCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `osConfigCustomEndpointInput`<sup>Optional</sup> <a name="osConfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput"></a>

```java
public java.lang.String getOsConfigCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `osLoginCustomEndpointInput`<sup>Optional</sup> <a name="osLoginCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput"></a>

```java
public java.lang.String getOsLoginCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `parallelstoreCustomEndpointInput`<sup>Optional</sup> <a name="parallelstoreCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpointInput"></a>

```java
public java.lang.String getParallelstoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `privatecaCustomEndpointInput`<sup>Optional</sup> <a name="privatecaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput"></a>

```java
public java.lang.String getPrivatecaCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `privilegedAccessManagerCustomEndpointInput`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpointInput"></a>

```java
public java.lang.String getPrivilegedAccessManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publicCaCustomEndpointInput`<sup>Optional</sup> <a name="publicCaCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpointInput"></a>

```java
public java.lang.String getPublicCaCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `pubsubCustomEndpointInput`<sup>Optional</sup> <a name="pubsubCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput"></a>

```java
public java.lang.String getPubsubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `pubsubLiteCustomEndpointInput`<sup>Optional</sup> <a name="pubsubLiteCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput"></a>

```java
public java.lang.String getPubsubLiteCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `recaptchaEnterpriseCustomEndpointInput`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```java
public java.lang.String getRecaptchaEnterpriseCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `redisCustomEndpointInput`<sup>Optional</sup> <a name="redisCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput"></a>

```java
public java.lang.String getRedisCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `requestReasonInput`<sup>Optional</sup> <a name="requestReasonInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput"></a>

```java
public java.lang.String getRequestReasonInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput"></a>

```java
public java.lang.String getRequestTimeoutInput();
```

- *Type:* java.lang.String

---

##### `resourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="resourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput"></a>

```java
public java.lang.String getResourceManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `resourceManagerV3CustomEndpointInput`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput"></a>

```java
public java.lang.String getResourceManagerV3CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `runtimeconfigCustomEndpointInput`<sup>Optional</sup> <a name="runtimeconfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput"></a>

```java
public java.lang.String getRuntimeconfigCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `runtimeConfigCustomEndpointInput`<sup>Optional</sup> <a name="runtimeConfigCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput"></a>

```java
public java.lang.String getRuntimeConfigCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretManagerCustomEndpointInput`<sup>Optional</sup> <a name="secretManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput"></a>

```java
public java.lang.String getSecretManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `secretManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpointInput"></a>

```java
public java.lang.String getSecretManagerRegionalCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `secureSourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpointInput"></a>

```java
public java.lang.String getSecureSourceManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securityCenterCustomEndpointInput`<sup>Optional</sup> <a name="securityCenterCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput"></a>

```java
public java.lang.String getSecurityCenterCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securityCenterManagementCustomEndpointInput`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpointInput"></a>

```java
public java.lang.String getSecurityCenterManagementCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securityCenterV2CustomEndpointInput`<sup>Optional</sup> <a name="securityCenterV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpointInput"></a>

```java
public java.lang.String getSecurityCenterV2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securitypostureCustomEndpointInput`<sup>Optional</sup> <a name="securitypostureCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpointInput"></a>

```java
public java.lang.String getSecuritypostureCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securityScannerCustomEndpointInput`<sup>Optional</sup> <a name="securityScannerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput"></a>

```java
public java.lang.String getSecurityScannerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput"></a>

```java
public java.lang.String getServiceDirectoryCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceManagementCustomEndpointInput`<sup>Optional</sup> <a name="serviceManagementCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput"></a>

```java
public java.lang.String getServiceManagementCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceNetworkingCustomEndpointInput`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput"></a>

```java
public java.lang.String getServiceNetworkingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceUsageCustomEndpointInput`<sup>Optional</sup> <a name="serviceUsageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput"></a>

```java
public java.lang.String getServiceUsageCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `siteVerificationCustomEndpointInput`<sup>Optional</sup> <a name="siteVerificationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpointInput"></a>

```java
public java.lang.String getSiteVerificationCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `sourceRepoCustomEndpointInput`<sup>Optional</sup> <a name="sourceRepoCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput"></a>

```java
public java.lang.String getSourceRepoCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `spannerCustomEndpointInput`<sup>Optional</sup> <a name="spannerCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput"></a>

```java
public java.lang.String getSpannerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `sqlCustomEndpointInput`<sup>Optional</sup> <a name="sqlCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput"></a>

```java
public java.lang.String getSqlCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageCustomEndpointInput`<sup>Optional</sup> <a name="storageCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput"></a>

```java
public java.lang.String getStorageCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageInsightsCustomEndpointInput`<sup>Optional</sup> <a name="storageInsightsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpointInput"></a>

```java
public java.lang.String getStorageInsightsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageTransferCustomEndpointInput`<sup>Optional</sup> <a name="storageTransferCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput"></a>

```java
public java.lang.String getStorageTransferCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `tagsCustomEndpointInput`<sup>Optional</sup> <a name="tagsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput"></a>

```java
public java.lang.String getTagsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `tagsLocationCustomEndpointInput`<sup>Optional</sup> <a name="tagsLocationCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput"></a>

```java
public java.lang.String getTagsLocationCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `terraformAttributionLabelAdditionStrategyInput`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategyInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```java
public java.lang.String getTerraformAttributionLabelAdditionStrategyInput();
```

- *Type:* java.lang.String

---

##### `tpuCustomEndpointInput`<sup>Optional</sup> <a name="tpuCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput"></a>

```java
public java.lang.String getTpuCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `tpuV2CustomEndpointInput`<sup>Optional</sup> <a name="tpuV2CustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpointInput"></a>

```java
public java.lang.String getTpuV2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `transcoderCustomEndpointInput`<sup>Optional</sup> <a name="transcoderCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpointInput"></a>

```java
public java.lang.String getTranscoderCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `universeDomainInput`<sup>Optional</sup> <a name="universeDomainInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomainInput"></a>

```java
public java.lang.String getUniverseDomainInput();
```

- *Type:* java.lang.String

---

##### `userProjectOverrideInput`<sup>Optional</sup> <a name="userProjectOverrideInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput"></a>

```java
public java.lang.Object getUserProjectOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vertexAiCustomEndpointInput`<sup>Optional</sup> <a name="vertexAiCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput"></a>

```java
public java.lang.String getVertexAiCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `vmwareengineCustomEndpointInput`<sup>Optional</sup> <a name="vmwareengineCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpointInput"></a>

```java
public java.lang.String getVmwareengineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `vpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="vpcAccessCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput"></a>

```java
public java.lang.String getVpcAccessCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `workbenchCustomEndpointInput`<sup>Optional</sup> <a name="workbenchCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpointInput"></a>

```java
public java.lang.String getWorkbenchCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `workflowsCustomEndpointInput`<sup>Optional</sup> <a name="workflowsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput"></a>

```java
public java.lang.String getWorkflowsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `workstationsCustomEndpointInput`<sup>Optional</sup> <a name="workstationsCustomEndpointInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput"></a>

```java
public java.lang.String getWorkstationsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint"></a>

```java
public java.lang.String getAccessApprovalCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint"></a>

```java
public java.lang.String getAccessContextManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint"></a>

```java
public java.lang.String getActiveDirectoryCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabel"></a>

```java
public java.lang.Object getAddTerraformAttributionLabel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint"></a>

```java
public java.lang.String getAlloydbCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `apiGatewayCustomEndpoint`<sup>Optional</sup> <a name="apiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint"></a>

```java
public java.lang.String getApiGatewayCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint"></a>

```java
public java.lang.String getApigeeCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint"></a>

```java
public java.lang.String getApikeysCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint"></a>

```java
public java.lang.String getAppEngineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpoint"></a>

```java
public java.lang.String getApphubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint"></a>

```java
public java.lang.String getArtifactRegistryCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint"></a>

```java
public java.lang.String getAssuredWorkloadsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpoint"></a>

```java
public java.lang.String getBackupDrCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching"></a>

```java
public java.lang.Object getBatching();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>>

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint"></a>

```java
public java.lang.String getBeyondcorpCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpoint"></a>

```java
public java.lang.String getBiglakeCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```java
public java.lang.String getBigqueryAnalyticsHubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint"></a>

```java
public java.lang.String getBigqueryConnectionCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint"></a>

```java
public java.lang.String getBigQueryCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```java
public java.lang.String getBigqueryDatapolicyCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```java
public java.lang.String getBigqueryDataTransferCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint"></a>

```java
public java.lang.String getBigqueryReservationCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint"></a>

```java
public java.lang.String getBigtableCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint"></a>

```java
public java.lang.String getBillingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject"></a>

```java
public java.lang.String getBillingProject();
```

- *Type:* java.lang.String

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint"></a>

```java
public java.lang.String getBinaryAuthorizationCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```java
public java.lang.String getBlockchainNodeEngineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint"></a>

```java
public java.lang.String getCertificateManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint"></a>

```java
public java.lang.String getCloudAssetCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint"></a>

```java
public java.lang.String getCloudBillingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint"></a>

```java
public java.lang.String getCloudBuildCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint"></a>

```java
public java.lang.String getCloudbuildv2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```java
public java.lang.String getCloudBuildWorkerPoolCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint"></a>

```java
public java.lang.String getClouddeployCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpoint"></a>

```java
public java.lang.String getClouddomainsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint"></a>

```java
public java.lang.String getCloudfunctions2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint"></a>

```java
public java.lang.String getCloudFunctionsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint"></a>

```java
public java.lang.String getCloudIdentityCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint"></a>

```java
public java.lang.String getCloudIdsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpoint"></a>

```java
public java.lang.String getCloudQuotasCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint"></a>

```java
public java.lang.String getCloudResourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint"></a>

```java
public java.lang.String getCloudRunCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint"></a>

```java
public java.lang.String getCloudRunV2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint"></a>

```java
public java.lang.String getCloudSchedulerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint"></a>

```java
public java.lang.String getCloudTasksCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint"></a>

```java
public java.lang.String getComposerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint"></a>

```java
public java.lang.String getComputeCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint"></a>

```java
public java.lang.String getContainerAnalysisCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint"></a>

```java
public java.lang.String getContainerAttachedCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint"></a>

```java
public java.lang.String getContainerAwsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint"></a>

```java
public java.lang.String getContainerAzureCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint"></a>

```java
public java.lang.String getContainerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpoint"></a>

```java
public java.lang.String getCoreBillingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```java
public java.lang.String getDatabaseMigrationServiceCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint"></a>

```java
public java.lang.String getDataCatalogCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint"></a>

```java
public java.lang.String getDataflowCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataformCustomEndpoint`<sup>Optional</sup> <a name="dataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint"></a>

```java
public java.lang.String getDataformCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint"></a>

```java
public java.lang.String getDataFusionCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint"></a>

```java
public java.lang.String getDataLossPreventionCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpoint"></a>

```java
public java.lang.String getDataPipelineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint"></a>

```java
public java.lang.String getDataplexCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint"></a>

```java
public java.lang.String getDataprocCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpoint"></a>

```java
public java.lang.String getDataprocGdcCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint"></a>

```java
public java.lang.String getDataprocMetastoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint"></a>

```java
public java.lang.String getDatastreamCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint"></a>

```java
public java.lang.String getDeploymentManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpoint"></a>

```java
public java.lang.String getDeveloperConnectCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint"></a>

```java
public java.lang.String getDialogflowCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint"></a>

```java
public java.lang.String getDialogflowCxCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpoint"></a>

```java
public java.lang.String getDiscoveryEngineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint"></a>

```java
public java.lang.String getDnsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint"></a>

```java
public java.lang.String getDocumentAiCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpoint"></a>

```java
public java.lang.String getDocumentAiWarehouseCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpoint"></a>

```java
public java.lang.String getEdgecontainerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpoint"></a>

```java
public java.lang.String getEdgenetworkCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint"></a>

```java
public java.lang.String getEssentialContactsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint"></a>

```java
public java.lang.String getEventarcCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint"></a>

```java
public java.lang.String getFilestoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpoint"></a>

```java
public java.lang.String getFirebaseAppCheckCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint"></a>

```java
public java.lang.String getFirebaseCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint"></a>

```java
public java.lang.String getFirebaseDatabaseCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseExtensionsCustomEndpoint`<sup>Optional</sup> <a name="firebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpoint"></a>

```java
public java.lang.String getFirebaseExtensionsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint"></a>

```java
public java.lang.String getFirebaseHostingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint"></a>

```java
public java.lang.String getFirebaserulesCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="firebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint"></a>

```java
public java.lang.String getFirebaseStorageCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint"></a>

```java
public java.lang.String getFirestoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpoint"></a>

```java
public java.lang.String getGeminiCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint"></a>

```java
public java.lang.String getGkeBackupCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpoint"></a>

```java
public java.lang.String getGkeHub2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint"></a>

```java
public java.lang.String getGkeHubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint"></a>

```java
public java.lang.String getGkehubFeatureCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint"></a>

```java
public java.lang.String getGkeonpremCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint"></a>

```java
public java.lang.String getHealthcareCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint"></a>

```java
public java.lang.String getIam2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpoint"></a>

```java
public java.lang.String getIam3CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint"></a>

```java
public java.lang.String getIamBetaCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint"></a>

```java
public java.lang.String getIamCredentialsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint"></a>

```java
public java.lang.String getIamCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```java
public java.lang.String getIamWorkforcePoolCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint"></a>

```java
public java.lang.String getIapCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint"></a>

```java
public java.lang.String getIdentityPlatformCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount"></a>

```java
public java.lang.String getImpersonateServiceAccount();
```

- *Type:* java.lang.String

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates"></a>

```java
public java.util.List<java.lang.String> getImpersonateServiceAccountDelegates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpoint"></a>

```java
public java.lang.String getIntegrationConnectorsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpoint"></a>

```java
public java.lang.String getIntegrationsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint"></a>

```java
public java.lang.String getKmsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint"></a>

```java
public java.lang.String getLoggingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpoint"></a>

```java
public java.lang.String getLookerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpoint"></a>

```java
public java.lang.String getManagedKafkaCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint"></a>

```java
public java.lang.String getMemcacheCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpoint"></a>

```java
public java.lang.String getMemorystoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpoint"></a>

```java
public java.lang.String getMigrationCenterCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint"></a>

```java
public java.lang.String getMlEngineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint"></a>

```java
public java.lang.String getMonitoringCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpoint"></a>

```java
public java.lang.String getNetappCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint"></a>

```java
public java.lang.String getNetworkConnectivityCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint"></a>

```java
public java.lang.String getNetworkManagementCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint"></a>

```java
public java.lang.String getNetworkSecurityCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint"></a>

```java
public java.lang.String getNetworkServicesCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint"></a>

```java
public java.lang.String getNotebooksCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpoint"></a>

```java
public java.lang.String getOracleDatabaseCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint"></a>

```java
public java.lang.String getOrgPolicyCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint"></a>

```java
public java.lang.String getOsConfigCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint"></a>

```java
public java.lang.String getOsLoginCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpoint"></a>

```java
public java.lang.String getParallelstoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint"></a>

```java
public java.lang.String getPrivatecaCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpoint"></a>

```java
public java.lang.String getPrivilegedAccessManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpoint"></a>

```java
public java.lang.String getPublicCaCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint"></a>

```java
public java.lang.String getPubsubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint"></a>

```java
public java.lang.String getPubsubLiteCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```java
public java.lang.String getRecaptchaEnterpriseCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint"></a>

```java
public java.lang.String getRedisCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason"></a>

```java
public java.lang.String getRequestReason();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout"></a>

```java
public java.lang.String getRequestTimeout();
```

- *Type:* java.lang.String

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint"></a>

```java
public java.lang.String getResourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint"></a>

```java
public java.lang.String getResourceManagerV3CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `runtimeconfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint"></a>

```java
public java.lang.String getRuntimeconfigCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `runtimeConfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint"></a>

```java
public java.lang.String getRuntimeConfigCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint"></a>

```java
public java.lang.String getSecretManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpoint"></a>

```java
public java.lang.String getSecretManagerRegionalCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpoint"></a>

```java
public java.lang.String getSecureSourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterManagementCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterV2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpoint"></a>

```java
public java.lang.String getSecuritypostureCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securityScannerCustomEndpoint`<sup>Optional</sup> <a name="securityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint"></a>

```java
public java.lang.String getSecurityScannerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint"></a>

```java
public java.lang.String getServiceDirectoryCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint"></a>

```java
public java.lang.String getServiceManagementCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint"></a>

```java
public java.lang.String getServiceNetworkingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint"></a>

```java
public java.lang.String getServiceUsageCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpoint"></a>

```java
public java.lang.String getSiteVerificationCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint"></a>

```java
public java.lang.String getSourceRepoCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint"></a>

```java
public java.lang.String getSpannerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint"></a>

```java
public java.lang.String getSqlCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint"></a>

```java
public java.lang.String getStorageCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpoint"></a>

```java
public java.lang.String getStorageInsightsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint"></a>

```java
public java.lang.String getStorageTransferCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint"></a>

```java
public java.lang.String getTagsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint"></a>

```java
public java.lang.String getTagsLocationCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```java
public java.lang.String getTerraformAttributionLabelAdditionStrategy();
```

- *Type:* java.lang.String

---

##### `tpuCustomEndpoint`<sup>Optional</sup> <a name="tpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint"></a>

```java
public java.lang.String getTpuCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `tpuV2CustomEndpoint`<sup>Optional</sup> <a name="tpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpoint"></a>

```java
public java.lang.String getTpuV2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpoint"></a>

```java
public java.lang.String getTranscoderCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomain"></a>

```java
public java.lang.String getUniverseDomain();
```

- *Type:* java.lang.String

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride"></a>

```java
public java.lang.Object getUserProjectOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint"></a>

```java
public java.lang.String getVertexAiCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpoint"></a>

```java
public java.lang.String getVmwareengineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint"></a>

```java
public java.lang.String getVpcAccessCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpoint"></a>

```java
public java.lang.String getWorkbenchCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint"></a>

```java
public java.lang.String getWorkflowsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `workstationsCustomEndpoint`<sup>Optional</sup> <a name="workstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint"></a>

```java
public java.lang.String getWorkstationsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBetaProviderBatching <a name="GoogleBetaProviderBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.provider.GoogleBetaProviderBatching;

GoogleBetaProviderBatching.builder()
//  .enableBatching(java.lang.Boolean)
//  .enableBatching(IResolvable)
//  .sendAfter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching">enableBatching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#enable_batching GoogleBetaProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter">sendAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#send_after GoogleBetaProvider#send_after}. |

---

##### `enableBatching`<sup>Optional</sup> <a name="enableBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching"></a>

```java
public java.lang.Object getEnableBatching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#enable_batching GoogleBetaProvider#enable_batching}.

---

##### `sendAfter`<sup>Optional</sup> <a name="sendAfter" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter"></a>

```java
public java.lang.String getSendAfter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#send_after GoogleBetaProvider#send_after}.

---

### GoogleBetaProviderConfig <a name="GoogleBetaProviderConfig" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.provider.GoogleBetaProviderConfig;

GoogleBetaProviderConfig.builder()
//  .accessApprovalCustomEndpoint(java.lang.String)
//  .accessContextManagerCustomEndpoint(java.lang.String)
//  .accessToken(java.lang.String)
//  .activeDirectoryCustomEndpoint(java.lang.String)
//  .addTerraformAttributionLabel(java.lang.Boolean)
//  .addTerraformAttributionLabel(IResolvable)
//  .alias(java.lang.String)
//  .alloydbCustomEndpoint(java.lang.String)
//  .apiGatewayCustomEndpoint(java.lang.String)
//  .apigeeCustomEndpoint(java.lang.String)
//  .apikeysCustomEndpoint(java.lang.String)
//  .appEngineCustomEndpoint(java.lang.String)
//  .apphubCustomEndpoint(java.lang.String)
//  .artifactRegistryCustomEndpoint(java.lang.String)
//  .assuredWorkloadsCustomEndpoint(java.lang.String)
//  .backupDrCustomEndpoint(java.lang.String)
//  .batching(IResolvable)
//  .batching(java.util.List<GoogleBetaProviderBatching>)
//  .beyondcorpCustomEndpoint(java.lang.String)
//  .biglakeCustomEndpoint(java.lang.String)
//  .bigqueryAnalyticsHubCustomEndpoint(java.lang.String)
//  .bigqueryConnectionCustomEndpoint(java.lang.String)
//  .bigQueryCustomEndpoint(java.lang.String)
//  .bigqueryDatapolicyCustomEndpoint(java.lang.String)
//  .bigqueryDataTransferCustomEndpoint(java.lang.String)
//  .bigqueryReservationCustomEndpoint(java.lang.String)
//  .bigtableCustomEndpoint(java.lang.String)
//  .billingCustomEndpoint(java.lang.String)
//  .billingProject(java.lang.String)
//  .binaryAuthorizationCustomEndpoint(java.lang.String)
//  .blockchainNodeEngineCustomEndpoint(java.lang.String)
//  .certificateManagerCustomEndpoint(java.lang.String)
//  .cloudAssetCustomEndpoint(java.lang.String)
//  .cloudBillingCustomEndpoint(java.lang.String)
//  .cloudBuildCustomEndpoint(java.lang.String)
//  .cloudbuildv2CustomEndpoint(java.lang.String)
//  .cloudBuildWorkerPoolCustomEndpoint(java.lang.String)
//  .clouddeployCustomEndpoint(java.lang.String)
//  .clouddomainsCustomEndpoint(java.lang.String)
//  .cloudfunctions2CustomEndpoint(java.lang.String)
//  .cloudFunctionsCustomEndpoint(java.lang.String)
//  .cloudIdentityCustomEndpoint(java.lang.String)
//  .cloudIdsCustomEndpoint(java.lang.String)
//  .cloudQuotasCustomEndpoint(java.lang.String)
//  .cloudResourceManagerCustomEndpoint(java.lang.String)
//  .cloudRunCustomEndpoint(java.lang.String)
//  .cloudRunV2CustomEndpoint(java.lang.String)
//  .cloudSchedulerCustomEndpoint(java.lang.String)
//  .cloudTasksCustomEndpoint(java.lang.String)
//  .composerCustomEndpoint(java.lang.String)
//  .computeCustomEndpoint(java.lang.String)
//  .containerAnalysisCustomEndpoint(java.lang.String)
//  .containerAttachedCustomEndpoint(java.lang.String)
//  .containerAwsCustomEndpoint(java.lang.String)
//  .containerAzureCustomEndpoint(java.lang.String)
//  .containerCustomEndpoint(java.lang.String)
//  .coreBillingCustomEndpoint(java.lang.String)
//  .credentials(java.lang.String)
//  .databaseMigrationServiceCustomEndpoint(java.lang.String)
//  .dataCatalogCustomEndpoint(java.lang.String)
//  .dataflowCustomEndpoint(java.lang.String)
//  .dataformCustomEndpoint(java.lang.String)
//  .dataFusionCustomEndpoint(java.lang.String)
//  .dataLossPreventionCustomEndpoint(java.lang.String)
//  .dataPipelineCustomEndpoint(java.lang.String)
//  .dataplexCustomEndpoint(java.lang.String)
//  .dataprocCustomEndpoint(java.lang.String)
//  .dataprocGdcCustomEndpoint(java.lang.String)
//  .dataprocMetastoreCustomEndpoint(java.lang.String)
//  .datastreamCustomEndpoint(java.lang.String)
//  .defaultLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentManagerCustomEndpoint(java.lang.String)
//  .developerConnectCustomEndpoint(java.lang.String)
//  .dialogflowCustomEndpoint(java.lang.String)
//  .dialogflowCxCustomEndpoint(java.lang.String)
//  .discoveryEngineCustomEndpoint(java.lang.String)
//  .dnsCustomEndpoint(java.lang.String)
//  .documentAiCustomEndpoint(java.lang.String)
//  .documentAiWarehouseCustomEndpoint(java.lang.String)
//  .edgecontainerCustomEndpoint(java.lang.String)
//  .edgenetworkCustomEndpoint(java.lang.String)
//  .essentialContactsCustomEndpoint(java.lang.String)
//  .eventarcCustomEndpoint(java.lang.String)
//  .filestoreCustomEndpoint(java.lang.String)
//  .firebaseAppCheckCustomEndpoint(java.lang.String)
//  .firebaseCustomEndpoint(java.lang.String)
//  .firebaseDatabaseCustomEndpoint(java.lang.String)
//  .firebaseExtensionsCustomEndpoint(java.lang.String)
//  .firebaseHostingCustomEndpoint(java.lang.String)
//  .firebaserulesCustomEndpoint(java.lang.String)
//  .firebaseStorageCustomEndpoint(java.lang.String)
//  .firestoreCustomEndpoint(java.lang.String)
//  .geminiCustomEndpoint(java.lang.String)
//  .gkeBackupCustomEndpoint(java.lang.String)
//  .gkeHub2CustomEndpoint(java.lang.String)
//  .gkeHubCustomEndpoint(java.lang.String)
//  .gkehubFeatureCustomEndpoint(java.lang.String)
//  .gkeonpremCustomEndpoint(java.lang.String)
//  .healthcareCustomEndpoint(java.lang.String)
//  .iam2CustomEndpoint(java.lang.String)
//  .iam3CustomEndpoint(java.lang.String)
//  .iamBetaCustomEndpoint(java.lang.String)
//  .iamCredentialsCustomEndpoint(java.lang.String)
//  .iamCustomEndpoint(java.lang.String)
//  .iamWorkforcePoolCustomEndpoint(java.lang.String)
//  .iapCustomEndpoint(java.lang.String)
//  .identityPlatformCustomEndpoint(java.lang.String)
//  .impersonateServiceAccount(java.lang.String)
//  .impersonateServiceAccountDelegates(java.util.List<java.lang.String>)
//  .integrationConnectorsCustomEndpoint(java.lang.String)
//  .integrationsCustomEndpoint(java.lang.String)
//  .kmsCustomEndpoint(java.lang.String)
//  .loggingCustomEndpoint(java.lang.String)
//  .lookerCustomEndpoint(java.lang.String)
//  .managedKafkaCustomEndpoint(java.lang.String)
//  .memcacheCustomEndpoint(java.lang.String)
//  .memorystoreCustomEndpoint(java.lang.String)
//  .migrationCenterCustomEndpoint(java.lang.String)
//  .mlEngineCustomEndpoint(java.lang.String)
//  .monitoringCustomEndpoint(java.lang.String)
//  .netappCustomEndpoint(java.lang.String)
//  .networkConnectivityCustomEndpoint(java.lang.String)
//  .networkManagementCustomEndpoint(java.lang.String)
//  .networkSecurityCustomEndpoint(java.lang.String)
//  .networkServicesCustomEndpoint(java.lang.String)
//  .notebooksCustomEndpoint(java.lang.String)
//  .oracleDatabaseCustomEndpoint(java.lang.String)
//  .orgPolicyCustomEndpoint(java.lang.String)
//  .osConfigCustomEndpoint(java.lang.String)
//  .osLoginCustomEndpoint(java.lang.String)
//  .parallelstoreCustomEndpoint(java.lang.String)
//  .privatecaCustomEndpoint(java.lang.String)
//  .privilegedAccessManagerCustomEndpoint(java.lang.String)
//  .project(java.lang.String)
//  .publicCaCustomEndpoint(java.lang.String)
//  .pubsubCustomEndpoint(java.lang.String)
//  .pubsubLiteCustomEndpoint(java.lang.String)
//  .recaptchaEnterpriseCustomEndpoint(java.lang.String)
//  .redisCustomEndpoint(java.lang.String)
//  .region(java.lang.String)
//  .requestReason(java.lang.String)
//  .requestTimeout(java.lang.String)
//  .resourceManagerCustomEndpoint(java.lang.String)
//  .resourceManagerV3CustomEndpoint(java.lang.String)
//  .runtimeconfigCustomEndpoint(java.lang.String)
//  .runtimeConfigCustomEndpoint(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .secretManagerCustomEndpoint(java.lang.String)
//  .secretManagerRegionalCustomEndpoint(java.lang.String)
//  .secureSourceManagerCustomEndpoint(java.lang.String)
//  .securityCenterCustomEndpoint(java.lang.String)
//  .securityCenterManagementCustomEndpoint(java.lang.String)
//  .securityCenterV2CustomEndpoint(java.lang.String)
//  .securitypostureCustomEndpoint(java.lang.String)
//  .securityScannerCustomEndpoint(java.lang.String)
//  .serviceDirectoryCustomEndpoint(java.lang.String)
//  .serviceManagementCustomEndpoint(java.lang.String)
//  .serviceNetworkingCustomEndpoint(java.lang.String)
//  .serviceUsageCustomEndpoint(java.lang.String)
//  .siteVerificationCustomEndpoint(java.lang.String)
//  .sourceRepoCustomEndpoint(java.lang.String)
//  .spannerCustomEndpoint(java.lang.String)
//  .sqlCustomEndpoint(java.lang.String)
//  .storageCustomEndpoint(java.lang.String)
//  .storageInsightsCustomEndpoint(java.lang.String)
//  .storageTransferCustomEndpoint(java.lang.String)
//  .tagsCustomEndpoint(java.lang.String)
//  .tagsLocationCustomEndpoint(java.lang.String)
//  .terraformAttributionLabelAdditionStrategy(java.lang.String)
//  .tpuCustomEndpoint(java.lang.String)
//  .tpuV2CustomEndpoint(java.lang.String)
//  .transcoderCustomEndpoint(java.lang.String)
//  .universeDomain(java.lang.String)
//  .userProjectOverride(java.lang.Boolean)
//  .userProjectOverride(IResolvable)
//  .vertexAiCustomEndpoint(java.lang.String)
//  .vmwareengineCustomEndpoint(java.lang.String)
//  .vpcAccessCustomEndpoint(java.lang.String)
//  .workbenchCustomEndpoint(java.lang.String)
//  .workflowsCustomEndpoint(java.lang.String)
//  .workstationsCustomEndpoint(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_token GoogleBetaProvider#access_token}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint">apiGatewayCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching">batching</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>></code> | batching block. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject">billingProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#billing_project GoogleBetaProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">cloudBuildWorkerPoolCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#credentials GoogleBetaProvider#credentials}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint">dataformCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.defaultLabels">defaultLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#default_labels GoogleBetaProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint">firebaseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint">firebaseDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseExtensionsCustomEndpoint">firebaseExtensionsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint">firebaseHostingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint">firebaseStorageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint">gkehubFeatureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#project GoogleBetaProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#region GoogleBetaProvider#region}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason">requestReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#request_reason GoogleBetaProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#request_timeout GoogleBetaProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint">runtimeconfigCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint">runtimeConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#scopes GoogleBetaProvider#scopes}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint">securityScannerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint">serviceDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint">tpuCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuV2CustomEndpoint">tpuV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.universeDomain">universeDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#universe_domain GoogleBetaProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride">userProjectOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#user_project_override GoogleBetaProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint">workstationsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#zone GoogleBetaProvider#zone}. |

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint"></a>

```java
public java.lang.String getAccessApprovalCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}.

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```java
public java.lang.String getAccessContextManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#access_token GoogleBetaProvider#access_token}.

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```java
public java.lang.String getActiveDirectoryCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}.

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.addTerraformAttributionLabel"></a>

```java
public java.lang.Object getAddTerraformAttributionLabel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#alias GoogleBetaProvider#alias}

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint"></a>

```java
public java.lang.String getAlloydbCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}.

---

##### `apiGatewayCustomEndpoint`<sup>Optional</sup> <a name="apiGatewayCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint"></a>

```java
public java.lang.String getApiGatewayCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}.

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint"></a>

```java
public java.lang.String getApigeeCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}.

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint"></a>

```java
public java.lang.String getApikeysCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}.

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint"></a>

```java
public java.lang.String getAppEngineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}.

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apphubCustomEndpoint"></a>

```java
public java.lang.String getApphubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}.

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```java
public java.lang.String getArtifactRegistryCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}.

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```java
public java.lang.String getAssuredWorkloadsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}.

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.backupDrCustomEndpoint"></a>

```java
public java.lang.String getBackupDrCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching"></a>

```java
public java.lang.Object getBatching();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>>

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#batching GoogleBetaProvider#batching}

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint"></a>

```java
public java.lang.String getBeyondcorpCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}.

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.biglakeCustomEndpoint"></a>

```java
public java.lang.String getBiglakeCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}.

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```java
public java.lang.String getBigqueryAnalyticsHubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```java
public java.lang.String getBigqueryConnectionCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}.

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint"></a>

```java
public java.lang.String getBigQueryCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}.

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```java
public java.lang.String getBigqueryDatapolicyCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```java
public java.lang.String getBigqueryDataTransferCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```java
public java.lang.String getBigqueryReservationCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint"></a>

```java
public java.lang.String getBigtableCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}.

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint"></a>

```java
public java.lang.String getBillingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}.

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject"></a>

```java
public java.lang.String getBillingProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#billing_project GoogleBetaProvider#billing_project}.

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```java
public java.lang.String getBinaryAuthorizationCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}.

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```java
public java.lang.String getBlockchainNodeEngineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint"></a>

```java
public java.lang.String getCertificateManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}.

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint"></a>

```java
public java.lang.String getCloudAssetCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}.

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint"></a>

```java
public java.lang.String getCloudBillingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}.

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint"></a>

```java
public java.lang.String getCloudBuildCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```java
public java.lang.String getCloudbuildv2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```java
public java.lang.String getCloudBuildWorkerPoolCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint"></a>

```java
public java.lang.String getClouddeployCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddomainsCustomEndpoint"></a>

```java
public java.lang.String getClouddomainsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```java
public java.lang.String getCloudfunctions2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```java
public java.lang.String getCloudFunctionsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}.

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```java
public java.lang.String getCloudIdentityCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}.

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint"></a>

```java
public java.lang.String getCloudIdsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}.

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```java
public java.lang.String getCloudQuotasCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}.

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```java
public java.lang.String getCloudResourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint"></a>

```java
public java.lang.String getCloudRunCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}.

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```java
public java.lang.String getCloudRunV2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```java
public java.lang.String getCloudSchedulerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint"></a>

```java
public java.lang.String getCloudTasksCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}.

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint"></a>

```java
public java.lang.String getComposerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}.

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint"></a>

```java
public java.lang.String getComputeCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}.

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```java
public java.lang.String getContainerAnalysisCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}.

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint"></a>

```java
public java.lang.String getContainerAttachedCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}.

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint"></a>

```java
public java.lang.String getContainerAwsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}.

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint"></a>

```java
public java.lang.String getContainerAzureCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}.

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint"></a>

```java
public java.lang.String getContainerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}.

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.coreBillingCustomEndpoint"></a>

```java
public java.lang.String getCoreBillingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#credentials GoogleBetaProvider#credentials}.

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```java
public java.lang.String getDatabaseMigrationServiceCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}.

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint"></a>

```java
public java.lang.String getDataCatalogCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}.

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint"></a>

```java
public java.lang.String getDataflowCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}.

---

##### `dataformCustomEndpoint`<sup>Optional</sup> <a name="dataformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint"></a>

```java
public java.lang.String getDataformCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}.

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint"></a>

```java
public java.lang.String getDataFusionCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}.

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```java
public java.lang.String getDataLossPreventionCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}.

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataPipelineCustomEndpoint"></a>

```java
public java.lang.String getDataPipelineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}.

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint"></a>

```java
public java.lang.String getDataplexCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}.

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint"></a>

```java
public java.lang.String getDataprocCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}.

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocGdcCustomEndpoint"></a>

```java
public java.lang.String getDataprocGdcCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}.

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```java
public java.lang.String getDataprocMetastoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint"></a>

```java
public java.lang.String getDatastreamCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}.

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.defaultLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#default_labels GoogleBetaProvider#default_labels}.

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```java
public java.lang.String getDeploymentManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}.

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.developerConnectCustomEndpoint"></a>

```java
public java.lang.String getDeveloperConnectCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}.

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint"></a>

```java
public java.lang.String getDialogflowCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}.

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```java
public java.lang.String getDialogflowCxCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}.

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```java
public java.lang.String getDiscoveryEngineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}.

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint"></a>

```java
public java.lang.String getDnsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}.

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint"></a>

```java
public java.lang.String getDocumentAiCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}.

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```java
public java.lang.String getDocumentAiWarehouseCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgecontainerCustomEndpoint"></a>

```java
public java.lang.String getEdgecontainerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgenetworkCustomEndpoint"></a>

```java
public java.lang.String getEdgenetworkCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}.

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint"></a>

```java
public java.lang.String getEssentialContactsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}.

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint"></a>

```java
public java.lang.String getEventarcCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}.

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint"></a>

```java
public java.lang.String getFilestoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}.

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```java
public java.lang.String getFirebaseAppCheckCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}.

---

##### `firebaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint"></a>

```java
public java.lang.String getFirebaseCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}.

---

##### `firebaseDatabaseCustomEndpoint`<sup>Optional</sup> <a name="firebaseDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint"></a>

```java
public java.lang.String getFirebaseDatabaseCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}.

---

##### `firebaseExtensionsCustomEndpoint`<sup>Optional</sup> <a name="firebaseExtensionsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseExtensionsCustomEndpoint"></a>

```java
public java.lang.String getFirebaseExtensionsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}.

---

##### `firebaseHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseHostingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint"></a>

```java
public java.lang.String getFirebaseHostingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}.

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint"></a>

```java
public java.lang.String getFirebaserulesCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}.

---

##### `firebaseStorageCustomEndpoint`<sup>Optional</sup> <a name="firebaseStorageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint"></a>

```java
public java.lang.String getFirebaseStorageCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}.

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint"></a>

```java
public java.lang.String getFirestoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}.

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.geminiCustomEndpoint"></a>

```java
public java.lang.String getGeminiCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}.

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint"></a>

```java
public java.lang.String getGkeBackupCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}.

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHub2CustomEndpoint"></a>

```java
public java.lang.String getGkeHub2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}.

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint"></a>

```java
public java.lang.String getGkeHubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}.

---

##### `gkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint"></a>

```java
public java.lang.String getGkehubFeatureCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint"></a>

```java
public java.lang.String getGkeonpremCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}.

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint"></a>

```java
public java.lang.String getHealthcareCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}.

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint"></a>

```java
public java.lang.String getIam2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}.

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam3CustomEndpoint"></a>

```java
public java.lang.String getIam3CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}.

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint"></a>

```java
public java.lang.String getIamBetaCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}.

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```java
public java.lang.String getIamCredentialsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}.

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint"></a>

```java
public java.lang.String getIamCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}.

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```java
public java.lang.String getIamWorkforcePoolCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint"></a>

```java
public java.lang.String getIapCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}.

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint"></a>

```java
public java.lang.String getIdentityPlatformCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}.

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount"></a>

```java
public java.lang.String getImpersonateServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}.

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates"></a>

```java
public java.util.List<java.lang.String> getImpersonateServiceAccountDelegates();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}.

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```java
public java.lang.String getIntegrationConnectorsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}.

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationsCustomEndpoint"></a>

```java
public java.lang.String getIntegrationsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}.

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint"></a>

```java
public java.lang.String getKmsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}.

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint"></a>

```java
public java.lang.String getLoggingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}.

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.lookerCustomEndpoint"></a>

```java
public java.lang.String getLookerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}.

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.managedKafkaCustomEndpoint"></a>

```java
public java.lang.String getManagedKafkaCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}.

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint"></a>

```java
public java.lang.String getMemcacheCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}.

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memorystoreCustomEndpoint"></a>

```java
public java.lang.String getMemorystoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}.

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.migrationCenterCustomEndpoint"></a>

```java
public java.lang.String getMigrationCenterCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}.

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint"></a>

```java
public java.lang.String getMlEngineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}.

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint"></a>

```java
public java.lang.String getMonitoringCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}.

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.netappCustomEndpoint"></a>

```java
public java.lang.String getNetappCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}.

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```java
public java.lang.String getNetworkConnectivityCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}.

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint"></a>

```java
public java.lang.String getNetworkManagementCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}.

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint"></a>

```java
public java.lang.String getNetworkSecurityCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}.

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint"></a>

```java
public java.lang.String getNetworkServicesCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}.

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint"></a>

```java
public java.lang.String getNotebooksCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}.

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.oracleDatabaseCustomEndpoint"></a>

```java
public java.lang.String getOracleDatabaseCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}.

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint"></a>

```java
public java.lang.String getOrgPolicyCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}.

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint"></a>

```java
public java.lang.String getOsConfigCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}.

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint"></a>

```java
public java.lang.String getOsLoginCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}.

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parallelstoreCustomEndpoint"></a>

```java
public java.lang.String getParallelstoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}.

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint"></a>

```java
public java.lang.String getPrivatecaCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}.

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privilegedAccessManagerCustomEndpoint"></a>

```java
public java.lang.String getPrivilegedAccessManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#project GoogleBetaProvider#project}.

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.publicCaCustomEndpoint"></a>

```java
public java.lang.String getPublicCaCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}.

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint"></a>

```java
public java.lang.String getPubsubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}.

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```java
public java.lang.String getPubsubLiteCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```java
public java.lang.String getRecaptchaEnterpriseCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint"></a>

```java
public java.lang.String getRedisCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#region GoogleBetaProvider#region}.

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason"></a>

```java
public java.lang.String getRequestReason();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#request_reason GoogleBetaProvider#request_reason}.

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout"></a>

```java
public java.lang.String getRequestTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#request_timeout GoogleBetaProvider#request_timeout}.

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint"></a>

```java
public java.lang.String getResourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}.

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```java
public java.lang.String getResourceManagerV3CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}.

---

##### `runtimeconfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeconfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint"></a>

```java
public java.lang.String getRuntimeconfigCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}.

---

##### `runtimeConfigCustomEndpoint`<sup>Optional</sup> <a name="runtimeConfigCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint"></a>

```java
public java.lang.String getRuntimeConfigCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#scopes GoogleBetaProvider#scopes}.

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint"></a>

```java
public java.lang.String getSecretManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}.

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerRegionalCustomEndpoint"></a>

```java
public java.lang.String getSecretManagerRegionalCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}.

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```java
public java.lang.String getSecureSourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}.

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}.

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterManagementCustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterManagementCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}.

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterV2CustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterV2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}.

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securitypostureCustomEndpoint"></a>

```java
public java.lang.String getSecuritypostureCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}.

---

##### `securityScannerCustomEndpoint`<sup>Optional</sup> <a name="securityScannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint"></a>

```java
public java.lang.String getSecurityScannerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}.

---

##### `serviceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint"></a>

```java
public java.lang.String getServiceDirectoryCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}.

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint"></a>

```java
public java.lang.String getServiceManagementCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}.

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```java
public java.lang.String getServiceNetworkingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}.

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint"></a>

```java
public java.lang.String getServiceUsageCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}.

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.siteVerificationCustomEndpoint"></a>

```java
public java.lang.String getSiteVerificationCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}.

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint"></a>

```java
public java.lang.String getSourceRepoCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}.

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint"></a>

```java
public java.lang.String getSpannerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}.

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint"></a>

```java
public java.lang.String getSqlCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}.

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint"></a>

```java
public java.lang.String getStorageCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}.

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageInsightsCustomEndpoint"></a>

```java
public java.lang.String getStorageInsightsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}.

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint"></a>

```java
public java.lang.String getStorageTransferCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}.

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint"></a>

```java
public java.lang.String getTagsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}.

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint"></a>

```java
public java.lang.String getTagsLocationCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}.

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```java
public java.lang.String getTerraformAttributionLabelAdditionStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpuCustomEndpoint`<sup>Optional</sup> <a name="tpuCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint"></a>

```java
public java.lang.String getTpuCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}.

---

##### `tpuV2CustomEndpoint`<sup>Optional</sup> <a name="tpuV2CustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuV2CustomEndpoint"></a>

```java
public java.lang.String getTpuV2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}.

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.transcoderCustomEndpoint"></a>

```java
public java.lang.String getTranscoderCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}.

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.universeDomain"></a>

```java
public java.lang.String getUniverseDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#universe_domain GoogleBetaProvider#universe_domain}.

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride"></a>

```java
public java.lang.Object getUserProjectOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#user_project_override GoogleBetaProvider#user_project_override}.

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint"></a>

```java
public java.lang.String getVertexAiCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vmwareengineCustomEndpoint"></a>

```java
public java.lang.String getVmwareengineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}.

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint"></a>

```java
public java.lang.String getVpcAccessCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}.

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workbenchCustomEndpoint"></a>

```java
public java.lang.String getWorkbenchCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}.

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint"></a>

```java
public java.lang.String getWorkflowsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}.

---

##### `workstationsCustomEndpoint`<sup>Optional</sup> <a name="workstationsCustomEndpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint"></a>

```java
public java.lang.String getWorkstationsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs#zone GoogleBetaProvider#zone}.

---



