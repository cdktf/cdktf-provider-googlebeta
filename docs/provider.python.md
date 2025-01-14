# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google-beta.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBetaProvider <a name="GoogleBetaProvider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs google-beta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import provider

provider.GoogleBetaProvider(
  scope: Construct,
  id: str,
  access_approval_custom_endpoint: str = None,
  access_context_manager_custom_endpoint: str = None,
  access_token: str = None,
  active_directory_custom_endpoint: str = None,
  add_terraform_attribution_label: typing.Union[bool, IResolvable] = None,
  alias: str = None,
  alloydb_custom_endpoint: str = None,
  api_gateway_custom_endpoint: str = None,
  apigee_custom_endpoint: str = None,
  apikeys_custom_endpoint: str = None,
  app_engine_custom_endpoint: str = None,
  apphub_custom_endpoint: str = None,
  artifact_registry_custom_endpoint: str = None,
  assured_workloads_custom_endpoint: str = None,
  backup_dr_custom_endpoint: str = None,
  batching: typing.Union[IResolvable, typing.List[GoogleBetaProviderBatching]] = None,
  beyondcorp_custom_endpoint: str = None,
  biglake_custom_endpoint: str = None,
  bigquery_analytics_hub_custom_endpoint: str = None,
  bigquery_connection_custom_endpoint: str = None,
  big_query_custom_endpoint: str = None,
  bigquery_datapolicy_custom_endpoint: str = None,
  bigquery_data_transfer_custom_endpoint: str = None,
  bigquery_reservation_custom_endpoint: str = None,
  bigtable_custom_endpoint: str = None,
  billing_custom_endpoint: str = None,
  billing_project: str = None,
  binary_authorization_custom_endpoint: str = None,
  blockchain_node_engine_custom_endpoint: str = None,
  certificate_manager_custom_endpoint: str = None,
  chronicle_custom_endpoint: str = None,
  cloud_asset_custom_endpoint: str = None,
  cloud_billing_custom_endpoint: str = None,
  cloud_build_custom_endpoint: str = None,
  cloudbuildv2_custom_endpoint: str = None,
  cloud_build_worker_pool_custom_endpoint: str = None,
  clouddeploy_custom_endpoint: str = None,
  clouddomains_custom_endpoint: str = None,
  cloudfunctions2_custom_endpoint: str = None,
  cloud_functions_custom_endpoint: str = None,
  cloud_identity_custom_endpoint: str = None,
  cloud_ids_custom_endpoint: str = None,
  cloud_quotas_custom_endpoint: str = None,
  cloud_resource_manager_custom_endpoint: str = None,
  cloud_run_custom_endpoint: str = None,
  cloud_run_v2_custom_endpoint: str = None,
  cloud_scheduler_custom_endpoint: str = None,
  cloud_tasks_custom_endpoint: str = None,
  composer_custom_endpoint: str = None,
  compute_custom_endpoint: str = None,
  container_analysis_custom_endpoint: str = None,
  container_attached_custom_endpoint: str = None,
  container_aws_custom_endpoint: str = None,
  container_azure_custom_endpoint: str = None,
  container_custom_endpoint: str = None,
  core_billing_custom_endpoint: str = None,
  credentials: str = None,
  database_migration_service_custom_endpoint: str = None,
  data_catalog_custom_endpoint: str = None,
  dataflow_custom_endpoint: str = None,
  dataform_custom_endpoint: str = None,
  data_fusion_custom_endpoint: str = None,
  data_loss_prevention_custom_endpoint: str = None,
  data_pipeline_custom_endpoint: str = None,
  dataplex_custom_endpoint: str = None,
  dataproc_custom_endpoint: str = None,
  dataproc_gdc_custom_endpoint: str = None,
  dataproc_metastore_custom_endpoint: str = None,
  datastream_custom_endpoint: str = None,
  default_labels: typing.Mapping[str] = None,
  deployment_manager_custom_endpoint: str = None,
  developer_connect_custom_endpoint: str = None,
  dialogflow_custom_endpoint: str = None,
  dialogflow_cx_custom_endpoint: str = None,
  discovery_engine_custom_endpoint: str = None,
  dns_custom_endpoint: str = None,
  document_ai_custom_endpoint: str = None,
  document_ai_warehouse_custom_endpoint: str = None,
  edgecontainer_custom_endpoint: str = None,
  edgenetwork_custom_endpoint: str = None,
  essential_contacts_custom_endpoint: str = None,
  eventarc_custom_endpoint: str = None,
  filestore_custom_endpoint: str = None,
  firebase_app_check_custom_endpoint: str = None,
  firebase_custom_endpoint: str = None,
  firebase_database_custom_endpoint: str = None,
  firebase_extensions_custom_endpoint: str = None,
  firebase_hosting_custom_endpoint: str = None,
  firebaserules_custom_endpoint: str = None,
  firebase_storage_custom_endpoint: str = None,
  firestore_custom_endpoint: str = None,
  gemini_custom_endpoint: str = None,
  gke_backup_custom_endpoint: str = None,
  gke_hub2_custom_endpoint: str = None,
  gke_hub_custom_endpoint: str = None,
  gkehub_feature_custom_endpoint: str = None,
  gkeonprem_custom_endpoint: str = None,
  healthcare_custom_endpoint: str = None,
  iam2_custom_endpoint: str = None,
  iam3_custom_endpoint: str = None,
  iam_beta_custom_endpoint: str = None,
  iam_credentials_custom_endpoint: str = None,
  iam_custom_endpoint: str = None,
  iam_workforce_pool_custom_endpoint: str = None,
  iap_custom_endpoint: str = None,
  identity_platform_custom_endpoint: str = None,
  impersonate_service_account: str = None,
  impersonate_service_account_delegates: typing.List[str] = None,
  integration_connectors_custom_endpoint: str = None,
  integrations_custom_endpoint: str = None,
  kms_custom_endpoint: str = None,
  logging_custom_endpoint: str = None,
  looker_custom_endpoint: str = None,
  managed_kafka_custom_endpoint: str = None,
  memcache_custom_endpoint: str = None,
  memorystore_custom_endpoint: str = None,
  migration_center_custom_endpoint: str = None,
  ml_engine_custom_endpoint: str = None,
  monitoring_custom_endpoint: str = None,
  netapp_custom_endpoint: str = None,
  network_connectivity_custom_endpoint: str = None,
  network_management_custom_endpoint: str = None,
  network_security_custom_endpoint: str = None,
  network_services_custom_endpoint: str = None,
  notebooks_custom_endpoint: str = None,
  oracle_database_custom_endpoint: str = None,
  org_policy_custom_endpoint: str = None,
  os_config_custom_endpoint: str = None,
  os_login_custom_endpoint: str = None,
  parallelstore_custom_endpoint: str = None,
  privateca_custom_endpoint: str = None,
  privileged_access_manager_custom_endpoint: str = None,
  project: str = None,
  public_ca_custom_endpoint: str = None,
  pubsub_custom_endpoint: str = None,
  pubsub_lite_custom_endpoint: str = None,
  recaptcha_enterprise_custom_endpoint: str = None,
  redis_custom_endpoint: str = None,
  region: str = None,
  request_reason: str = None,
  request_timeout: str = None,
  resource_manager_custom_endpoint: str = None,
  resource_manager_v3_custom_endpoint: str = None,
  runtimeconfig_custom_endpoint: str = None,
  runtime_config_custom_endpoint: str = None,
  scopes: typing.List[str] = None,
  secret_manager_custom_endpoint: str = None,
  secret_manager_regional_custom_endpoint: str = None,
  secure_source_manager_custom_endpoint: str = None,
  security_center_custom_endpoint: str = None,
  security_center_management_custom_endpoint: str = None,
  security_center_v2_custom_endpoint: str = None,
  securityposture_custom_endpoint: str = None,
  security_scanner_custom_endpoint: str = None,
  service_directory_custom_endpoint: str = None,
  service_management_custom_endpoint: str = None,
  service_networking_custom_endpoint: str = None,
  service_usage_custom_endpoint: str = None,
  site_verification_custom_endpoint: str = None,
  source_repo_custom_endpoint: str = None,
  spanner_custom_endpoint: str = None,
  sql_custom_endpoint: str = None,
  storage_custom_endpoint: str = None,
  storage_insights_custom_endpoint: str = None,
  storage_transfer_custom_endpoint: str = None,
  tags_custom_endpoint: str = None,
  tags_location_custom_endpoint: str = None,
  terraform_attribution_label_addition_strategy: str = None,
  tpu_custom_endpoint: str = None,
  tpu_v2_custom_endpoint: str = None,
  transcoder_custom_endpoint: str = None,
  universe_domain: str = None,
  user_project_override: typing.Union[bool, IResolvable] = None,
  vertex_ai_custom_endpoint: str = None,
  vmwareengine_custom_endpoint: str = None,
  vpc_access_custom_endpoint: str = None,
  workbench_custom_endpoint: str = None,
  workflows_custom_endpoint: str = None,
  workstations_custom_endpoint: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessApprovalCustomEndpoint">access_approval_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessContextManagerCustomEndpoint">access_context_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_token GoogleBetaProvider#access_token}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.activeDirectoryCustomEndpoint">active_directory_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.addTerraformAttributionLabel">add_terraform_attribution_label</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.alloydbCustomEndpoint">alloydb_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apiGatewayCustomEndpoint">api_gateway_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apigeeCustomEndpoint">apigee_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apikeysCustomEndpoint">apikeys_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.appEngineCustomEndpoint">app_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apphubCustomEndpoint">apphub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.artifactRegistryCustomEndpoint">artifact_registry_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.assuredWorkloadsCustomEndpoint">assured_workloads_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.backupDrCustomEndpoint">backup_dr_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.batching">batching</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>]]</code> | batching block. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.beyondcorpCustomEndpoint">beyondcorp_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.biglakeCustomEndpoint">biglake_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryAnalyticsHubCustomEndpoint">bigquery_analytics_hub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryConnectionCustomEndpoint">bigquery_connection_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigQueryCustomEndpoint">big_query_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryDatapolicyCustomEndpoint">bigquery_datapolicy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryDataTransferCustomEndpoint">bigquery_data_transfer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryReservationCustomEndpoint">bigquery_reservation_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigtableCustomEndpoint">bigtable_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.billingCustomEndpoint">billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.billingProject">billing_project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#billing_project GoogleBetaProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.binaryAuthorizationCustomEndpoint">binary_authorization_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.blockchainNodeEngineCustomEndpoint">blockchain_node_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.certificateManagerCustomEndpoint">certificate_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.chronicleCustomEndpoint">chronicle_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#chronicle_custom_endpoint GoogleBetaProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudAssetCustomEndpoint">cloud_asset_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBillingCustomEndpoint">cloud_billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBuildCustomEndpoint">cloud_build_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudbuildv2CustomEndpoint">cloudbuildv2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBuildWorkerPoolCustomEndpoint">cloud_build_worker_pool_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.clouddeployCustomEndpoint">clouddeploy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.clouddomainsCustomEndpoint">clouddomains_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudfunctions2CustomEndpoint">cloudfunctions2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudFunctionsCustomEndpoint">cloud_functions_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudIdentityCustomEndpoint">cloud_identity_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudIdsCustomEndpoint">cloud_ids_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudQuotasCustomEndpoint">cloud_quotas_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudResourceManagerCustomEndpoint">cloud_resource_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudRunCustomEndpoint">cloud_run_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudRunV2CustomEndpoint">cloud_run_v2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudSchedulerCustomEndpoint">cloud_scheduler_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudTasksCustomEndpoint">cloud_tasks_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.composerCustomEndpoint">composer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.computeCustomEndpoint">compute_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAnalysisCustomEndpoint">container_analysis_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAttachedCustomEndpoint">container_attached_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAwsCustomEndpoint">container_aws_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAzureCustomEndpoint">container_azure_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerCustomEndpoint">container_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.coreBillingCustomEndpoint">core_billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#credentials GoogleBetaProvider#credentials}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.databaseMigrationServiceCustomEndpoint">database_migration_service_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataCatalogCustomEndpoint">data_catalog_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataflowCustomEndpoint">dataflow_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataformCustomEndpoint">dataform_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataFusionCustomEndpoint">data_fusion_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataLossPreventionCustomEndpoint">data_loss_prevention_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataPipelineCustomEndpoint">data_pipeline_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataplexCustomEndpoint">dataplex_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocCustomEndpoint">dataproc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocGdcCustomEndpoint">dataproc_gdc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocMetastoreCustomEndpoint">dataproc_metastore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.datastreamCustomEndpoint">datastream_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.defaultLabels">default_labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#default_labels GoogleBetaProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.deploymentManagerCustomEndpoint">deployment_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.developerConnectCustomEndpoint">developer_connect_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dialogflowCustomEndpoint">dialogflow_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dialogflowCxCustomEndpoint">dialogflow_cx_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.discoveryEngineCustomEndpoint">discovery_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dnsCustomEndpoint">dns_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.documentAiCustomEndpoint">document_ai_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.documentAiWarehouseCustomEndpoint">document_ai_warehouse_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.edgecontainerCustomEndpoint">edgecontainer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.edgenetworkCustomEndpoint">edgenetwork_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.essentialContactsCustomEndpoint">essential_contacts_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.eventarcCustomEndpoint">eventarc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.filestoreCustomEndpoint">filestore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseAppCheckCustomEndpoint">firebase_app_check_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseCustomEndpoint">firebase_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseDatabaseCustomEndpoint">firebase_database_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseExtensionsCustomEndpoint">firebase_extensions_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseHostingCustomEndpoint">firebase_hosting_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaserulesCustomEndpoint">firebaserules_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseStorageCustomEndpoint">firebase_storage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firestoreCustomEndpoint">firestore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.geminiCustomEndpoint">gemini_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeBackupCustomEndpoint">gke_backup_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeHub2CustomEndpoint">gke_hub2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeHubCustomEndpoint">gke_hub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkehubFeatureCustomEndpoint">gkehub_feature_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeonpremCustomEndpoint">gkeonprem_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.healthcareCustomEndpoint">healthcare_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iam2CustomEndpoint">iam2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iam3CustomEndpoint">iam3_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamBetaCustomEndpoint">iam_beta_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamCredentialsCustomEndpoint">iam_credentials_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamCustomEndpoint">iam_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamWorkforcePoolCustomEndpoint">iam_workforce_pool_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iapCustomEndpoint">iap_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.identityPlatformCustomEndpoint">identity_platform_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.impersonateServiceAccount">impersonate_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.impersonateServiceAccountDelegates">impersonate_service_account_delegates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.integrationConnectorsCustomEndpoint">integration_connectors_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.integrationsCustomEndpoint">integrations_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.kmsCustomEndpoint">kms_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.loggingCustomEndpoint">logging_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.lookerCustomEndpoint">looker_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.managedKafkaCustomEndpoint">managed_kafka_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.memcacheCustomEndpoint">memcache_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.memorystoreCustomEndpoint">memorystore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.migrationCenterCustomEndpoint">migration_center_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.mlEngineCustomEndpoint">ml_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.monitoringCustomEndpoint">monitoring_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.netappCustomEndpoint">netapp_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkConnectivityCustomEndpoint">network_connectivity_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkManagementCustomEndpoint">network_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkSecurityCustomEndpoint">network_security_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkServicesCustomEndpoint">network_services_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.notebooksCustomEndpoint">notebooks_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.oracleDatabaseCustomEndpoint">oracle_database_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.orgPolicyCustomEndpoint">org_policy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.osConfigCustomEndpoint">os_config_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.osLoginCustomEndpoint">os_login_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.parallelstoreCustomEndpoint">parallelstore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.privatecaCustomEndpoint">privateca_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.privilegedAccessManagerCustomEndpoint">privileged_access_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#project GoogleBetaProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.publicCaCustomEndpoint">public_ca_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.pubsubCustomEndpoint">pubsub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.pubsubLiteCustomEndpoint">pubsub_lite_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.recaptchaEnterpriseCustomEndpoint">recaptcha_enterprise_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.redisCustomEndpoint">redis_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#region GoogleBetaProvider#region}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.requestReason">request_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#request_reason GoogleBetaProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.requestTimeout">request_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#request_timeout GoogleBetaProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.resourceManagerCustomEndpoint">resource_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.resourceManagerV3CustomEndpoint">resource_manager_v3_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.runtimeconfigCustomEndpoint">runtimeconfig_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.runtimeConfigCustomEndpoint">runtime_config_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#scopes GoogleBetaProvider#scopes}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secretManagerCustomEndpoint">secret_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secretManagerRegionalCustomEndpoint">secret_manager_regional_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secureSourceManagerCustomEndpoint">secure_source_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterCustomEndpoint">security_center_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterManagementCustomEndpoint">security_center_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterV2CustomEndpoint">security_center_v2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securitypostureCustomEndpoint">securityposture_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityScannerCustomEndpoint">security_scanner_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceDirectoryCustomEndpoint">service_directory_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceManagementCustomEndpoint">service_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceNetworkingCustomEndpoint">service_networking_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceUsageCustomEndpoint">service_usage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.siteVerificationCustomEndpoint">site_verification_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.sourceRepoCustomEndpoint">source_repo_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.spannerCustomEndpoint">spanner_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.sqlCustomEndpoint">sql_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageCustomEndpoint">storage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageInsightsCustomEndpoint">storage_insights_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageTransferCustomEndpoint">storage_transfer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tagsCustomEndpoint">tags_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tagsLocationCustomEndpoint">tags_location_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.terraformAttributionLabelAdditionStrategy">terraform_attribution_label_addition_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tpuCustomEndpoint">tpu_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tpuV2CustomEndpoint">tpu_v2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.transcoderCustomEndpoint">transcoder_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.universeDomain">universe_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#universe_domain GoogleBetaProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.userProjectOverride">user_project_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#user_project_override GoogleBetaProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vertexAiCustomEndpoint">vertex_ai_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vmwareengineCustomEndpoint">vmwareengine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vpcAccessCustomEndpoint">vpc_access_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workbenchCustomEndpoint">workbench_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workflowsCustomEndpoint">workflows_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workstationsCustomEndpoint">workstations_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#zone GoogleBetaProvider#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_approval_custom_endpoint`<sup>Optional</sup> <a name="access_approval_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessApprovalCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}.

---

##### `access_context_manager_custom_endpoint`<sup>Optional</sup> <a name="access_context_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessContextManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_token GoogleBetaProvider#access_token}.

---

##### `active_directory_custom_endpoint`<sup>Optional</sup> <a name="active_directory_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.activeDirectoryCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}.

---

##### `add_terraform_attribution_label`<sup>Optional</sup> <a name="add_terraform_attribution_label" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.addTerraformAttributionLabel"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#alias GoogleBetaProvider#alias}

---

##### `alloydb_custom_endpoint`<sup>Optional</sup> <a name="alloydb_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.alloydbCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}.

---

##### `api_gateway_custom_endpoint`<sup>Optional</sup> <a name="api_gateway_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apiGatewayCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}.

---

##### `apigee_custom_endpoint`<sup>Optional</sup> <a name="apigee_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apigeeCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}.

---

##### `apikeys_custom_endpoint`<sup>Optional</sup> <a name="apikeys_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apikeysCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}.

---

##### `app_engine_custom_endpoint`<sup>Optional</sup> <a name="app_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.appEngineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}.

---

##### `apphub_custom_endpoint`<sup>Optional</sup> <a name="apphub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.apphubCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}.

---

##### `artifact_registry_custom_endpoint`<sup>Optional</sup> <a name="artifact_registry_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.artifactRegistryCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}.

---

##### `assured_workloads_custom_endpoint`<sup>Optional</sup> <a name="assured_workloads_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.assuredWorkloadsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}.

---

##### `backup_dr_custom_endpoint`<sup>Optional</sup> <a name="backup_dr_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.backupDrCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.batching"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>]]

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#batching GoogleBetaProvider#batching}

---

##### `beyondcorp_custom_endpoint`<sup>Optional</sup> <a name="beyondcorp_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.beyondcorpCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}.

---

##### `biglake_custom_endpoint`<sup>Optional</sup> <a name="biglake_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.biglakeCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}.

---

##### `bigquery_analytics_hub_custom_endpoint`<sup>Optional</sup> <a name="bigquery_analytics_hub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryAnalyticsHubCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigquery_connection_custom_endpoint`<sup>Optional</sup> <a name="bigquery_connection_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryConnectionCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}.

---

##### `big_query_custom_endpoint`<sup>Optional</sup> <a name="big_query_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigQueryCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}.

---

##### `bigquery_datapolicy_custom_endpoint`<sup>Optional</sup> <a name="bigquery_datapolicy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryDatapolicyCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigquery_data_transfer_custom_endpoint`<sup>Optional</sup> <a name="bigquery_data_transfer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryDataTransferCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigquery_reservation_custom_endpoint`<sup>Optional</sup> <a name="bigquery_reservation_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigqueryReservationCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtable_custom_endpoint`<sup>Optional</sup> <a name="bigtable_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.bigtableCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}.

---

##### `billing_custom_endpoint`<sup>Optional</sup> <a name="billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.billingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}.

---

##### `billing_project`<sup>Optional</sup> <a name="billing_project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.billingProject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#billing_project GoogleBetaProvider#billing_project}.

---

##### `binary_authorization_custom_endpoint`<sup>Optional</sup> <a name="binary_authorization_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.binaryAuthorizationCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}.

---

##### `blockchain_node_engine_custom_endpoint`<sup>Optional</sup> <a name="blockchain_node_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.blockchainNodeEngineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificate_manager_custom_endpoint`<sup>Optional</sup> <a name="certificate_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.certificateManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}.

---

##### `chronicle_custom_endpoint`<sup>Optional</sup> <a name="chronicle_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.chronicleCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#chronicle_custom_endpoint GoogleBetaProvider#chronicle_custom_endpoint}.

---

##### `cloud_asset_custom_endpoint`<sup>Optional</sup> <a name="cloud_asset_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudAssetCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}.

---

##### `cloud_billing_custom_endpoint`<sup>Optional</sup> <a name="cloud_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBillingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}.

---

##### `cloud_build_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBuildCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2_custom_endpoint`<sup>Optional</sup> <a name="cloudbuildv2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudbuildv2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloud_build_worker_pool_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_worker_pool_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudBuildWorkerPoolCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeploy_custom_endpoint`<sup>Optional</sup> <a name="clouddeploy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.clouddeployCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomains_custom_endpoint`<sup>Optional</sup> <a name="clouddomains_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.clouddomainsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2_custom_endpoint`<sup>Optional</sup> <a name="cloudfunctions2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudfunctions2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloud_functions_custom_endpoint`<sup>Optional</sup> <a name="cloud_functions_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudFunctionsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}.

---

##### `cloud_identity_custom_endpoint`<sup>Optional</sup> <a name="cloud_identity_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudIdentityCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}.

---

##### `cloud_ids_custom_endpoint`<sup>Optional</sup> <a name="cloud_ids_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudIdsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}.

---

##### `cloud_quotas_custom_endpoint`<sup>Optional</sup> <a name="cloud_quotas_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudQuotasCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}.

---

##### `cloud_resource_manager_custom_endpoint`<sup>Optional</sup> <a name="cloud_resource_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudResourceManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloud_run_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudRunCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}.

---

##### `cloud_run_v2_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudRunV2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloud_scheduler_custom_endpoint`<sup>Optional</sup> <a name="cloud_scheduler_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudSchedulerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloud_tasks_custom_endpoint`<sup>Optional</sup> <a name="cloud_tasks_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.cloudTasksCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}.

---

##### `composer_custom_endpoint`<sup>Optional</sup> <a name="composer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.composerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}.

---

##### `compute_custom_endpoint`<sup>Optional</sup> <a name="compute_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.computeCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}.

---

##### `container_analysis_custom_endpoint`<sup>Optional</sup> <a name="container_analysis_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAnalysisCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}.

---

##### `container_attached_custom_endpoint`<sup>Optional</sup> <a name="container_attached_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAttachedCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}.

---

##### `container_aws_custom_endpoint`<sup>Optional</sup> <a name="container_aws_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAwsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}.

---

##### `container_azure_custom_endpoint`<sup>Optional</sup> <a name="container_azure_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerAzureCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}.

---

##### `container_custom_endpoint`<sup>Optional</sup> <a name="container_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.containerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}.

---

##### `core_billing_custom_endpoint`<sup>Optional</sup> <a name="core_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.coreBillingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.credentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#credentials GoogleBetaProvider#credentials}.

---

##### `database_migration_service_custom_endpoint`<sup>Optional</sup> <a name="database_migration_service_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.databaseMigrationServiceCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}.

---

##### `data_catalog_custom_endpoint`<sup>Optional</sup> <a name="data_catalog_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataCatalogCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}.

---

##### `dataflow_custom_endpoint`<sup>Optional</sup> <a name="dataflow_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataflowCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}.

---

##### `dataform_custom_endpoint`<sup>Optional</sup> <a name="dataform_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataformCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}.

---

##### `data_fusion_custom_endpoint`<sup>Optional</sup> <a name="data_fusion_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataFusionCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}.

---

##### `data_loss_prevention_custom_endpoint`<sup>Optional</sup> <a name="data_loss_prevention_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataLossPreventionCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}.

---

##### `data_pipeline_custom_endpoint`<sup>Optional</sup> <a name="data_pipeline_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataPipelineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}.

---

##### `dataplex_custom_endpoint`<sup>Optional</sup> <a name="dataplex_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataplexCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}.

---

##### `dataproc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}.

---

##### `dataproc_gdc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_gdc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocGdcCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}.

---

##### `dataproc_metastore_custom_endpoint`<sup>Optional</sup> <a name="dataproc_metastore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dataprocMetastoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastream_custom_endpoint`<sup>Optional</sup> <a name="datastream_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.datastreamCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}.

---

##### `default_labels`<sup>Optional</sup> <a name="default_labels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.defaultLabels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#default_labels GoogleBetaProvider#default_labels}.

---

##### `deployment_manager_custom_endpoint`<sup>Optional</sup> <a name="deployment_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.deploymentManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}.

---

##### `developer_connect_custom_endpoint`<sup>Optional</sup> <a name="developer_connect_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.developerConnectCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}.

---

##### `dialogflow_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dialogflowCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}.

---

##### `dialogflow_cx_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_cx_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dialogflowCxCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}.

---

##### `discovery_engine_custom_endpoint`<sup>Optional</sup> <a name="discovery_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.discoveryEngineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}.

---

##### `dns_custom_endpoint`<sup>Optional</sup> <a name="dns_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.dnsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}.

---

##### `document_ai_custom_endpoint`<sup>Optional</sup> <a name="document_ai_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.documentAiCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}.

---

##### `document_ai_warehouse_custom_endpoint`<sup>Optional</sup> <a name="document_ai_warehouse_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.documentAiWarehouseCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainer_custom_endpoint`<sup>Optional</sup> <a name="edgecontainer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.edgecontainerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetwork_custom_endpoint`<sup>Optional</sup> <a name="edgenetwork_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.edgenetworkCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}.

---

##### `essential_contacts_custom_endpoint`<sup>Optional</sup> <a name="essential_contacts_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.essentialContactsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}.

---

##### `eventarc_custom_endpoint`<sup>Optional</sup> <a name="eventarc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.eventarcCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}.

---

##### `filestore_custom_endpoint`<sup>Optional</sup> <a name="filestore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.filestoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}.

---

##### `firebase_app_check_custom_endpoint`<sup>Optional</sup> <a name="firebase_app_check_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseAppCheckCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}.

---

##### `firebase_custom_endpoint`<sup>Optional</sup> <a name="firebase_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}.

---

##### `firebase_database_custom_endpoint`<sup>Optional</sup> <a name="firebase_database_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseDatabaseCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}.

---

##### `firebase_extensions_custom_endpoint`<sup>Optional</sup> <a name="firebase_extensions_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseExtensionsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}.

---

##### `firebase_hosting_custom_endpoint`<sup>Optional</sup> <a name="firebase_hosting_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseHostingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}.

---

##### `firebaserules_custom_endpoint`<sup>Optional</sup> <a name="firebaserules_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaserulesCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}.

---

##### `firebase_storage_custom_endpoint`<sup>Optional</sup> <a name="firebase_storage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firebaseStorageCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}.

---

##### `firestore_custom_endpoint`<sup>Optional</sup> <a name="firestore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.firestoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}.

---

##### `gemini_custom_endpoint`<sup>Optional</sup> <a name="gemini_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.geminiCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}.

---

##### `gke_backup_custom_endpoint`<sup>Optional</sup> <a name="gke_backup_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeBackupCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}.

---

##### `gke_hub2_custom_endpoint`<sup>Optional</sup> <a name="gke_hub2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeHub2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}.

---

##### `gke_hub_custom_endpoint`<sup>Optional</sup> <a name="gke_hub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeHubCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}.

---

##### `gkehub_feature_custom_endpoint`<sup>Optional</sup> <a name="gkehub_feature_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkehubFeatureCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonprem_custom_endpoint`<sup>Optional</sup> <a name="gkeonprem_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.gkeonpremCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}.

---

##### `healthcare_custom_endpoint`<sup>Optional</sup> <a name="healthcare_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.healthcareCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}.

---

##### `iam2_custom_endpoint`<sup>Optional</sup> <a name="iam2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iam2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}.

---

##### `iam3_custom_endpoint`<sup>Optional</sup> <a name="iam3_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iam3CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}.

---

##### `iam_beta_custom_endpoint`<sup>Optional</sup> <a name="iam_beta_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamBetaCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}.

---

##### `iam_credentials_custom_endpoint`<sup>Optional</sup> <a name="iam_credentials_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamCredentialsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}.

---

##### `iam_custom_endpoint`<sup>Optional</sup> <a name="iam_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}.

---

##### `iam_workforce_pool_custom_endpoint`<sup>Optional</sup> <a name="iam_workforce_pool_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iamWorkforcePoolCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iap_custom_endpoint`<sup>Optional</sup> <a name="iap_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.iapCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}.

---

##### `identity_platform_custom_endpoint`<sup>Optional</sup> <a name="identity_platform_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.identityPlatformCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}.

---

##### `impersonate_service_account`<sup>Optional</sup> <a name="impersonate_service_account" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.impersonateServiceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}.

---

##### `impersonate_service_account_delegates`<sup>Optional</sup> <a name="impersonate_service_account_delegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.impersonateServiceAccountDelegates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}.

---

##### `integration_connectors_custom_endpoint`<sup>Optional</sup> <a name="integration_connectors_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.integrationConnectorsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}.

---

##### `integrations_custom_endpoint`<sup>Optional</sup> <a name="integrations_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.integrationsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}.

---

##### `kms_custom_endpoint`<sup>Optional</sup> <a name="kms_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.kmsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}.

---

##### `logging_custom_endpoint`<sup>Optional</sup> <a name="logging_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.loggingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}.

---

##### `looker_custom_endpoint`<sup>Optional</sup> <a name="looker_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.lookerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}.

---

##### `managed_kafka_custom_endpoint`<sup>Optional</sup> <a name="managed_kafka_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.managedKafkaCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}.

---

##### `memcache_custom_endpoint`<sup>Optional</sup> <a name="memcache_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.memcacheCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}.

---

##### `memorystore_custom_endpoint`<sup>Optional</sup> <a name="memorystore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.memorystoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}.

---

##### `migration_center_custom_endpoint`<sup>Optional</sup> <a name="migration_center_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.migrationCenterCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}.

---

##### `ml_engine_custom_endpoint`<sup>Optional</sup> <a name="ml_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.mlEngineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}.

---

##### `monitoring_custom_endpoint`<sup>Optional</sup> <a name="monitoring_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.monitoringCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}.

---

##### `netapp_custom_endpoint`<sup>Optional</sup> <a name="netapp_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.netappCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}.

---

##### `network_connectivity_custom_endpoint`<sup>Optional</sup> <a name="network_connectivity_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkConnectivityCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}.

---

##### `network_management_custom_endpoint`<sup>Optional</sup> <a name="network_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkManagementCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}.

---

##### `network_security_custom_endpoint`<sup>Optional</sup> <a name="network_security_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkSecurityCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}.

---

##### `network_services_custom_endpoint`<sup>Optional</sup> <a name="network_services_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.networkServicesCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}.

---

##### `notebooks_custom_endpoint`<sup>Optional</sup> <a name="notebooks_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.notebooksCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}.

---

##### `oracle_database_custom_endpoint`<sup>Optional</sup> <a name="oracle_database_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.oracleDatabaseCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}.

---

##### `org_policy_custom_endpoint`<sup>Optional</sup> <a name="org_policy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.orgPolicyCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}.

---

##### `os_config_custom_endpoint`<sup>Optional</sup> <a name="os_config_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.osConfigCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}.

---

##### `os_login_custom_endpoint`<sup>Optional</sup> <a name="os_login_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.osLoginCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}.

---

##### `parallelstore_custom_endpoint`<sup>Optional</sup> <a name="parallelstore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.parallelstoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}.

---

##### `privateca_custom_endpoint`<sup>Optional</sup> <a name="privateca_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.privatecaCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}.

---

##### `privileged_access_manager_custom_endpoint`<sup>Optional</sup> <a name="privileged_access_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.privilegedAccessManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#project GoogleBetaProvider#project}.

---

##### `public_ca_custom_endpoint`<sup>Optional</sup> <a name="public_ca_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.publicCaCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}.

---

##### `pubsub_custom_endpoint`<sup>Optional</sup> <a name="pubsub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.pubsubCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}.

---

##### `pubsub_lite_custom_endpoint`<sup>Optional</sup> <a name="pubsub_lite_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.pubsubLiteCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptcha_enterprise_custom_endpoint`<sup>Optional</sup> <a name="recaptcha_enterprise_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.recaptchaEnterpriseCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redis_custom_endpoint`<sup>Optional</sup> <a name="redis_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.redisCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#region GoogleBetaProvider#region}.

---

##### `request_reason`<sup>Optional</sup> <a name="request_reason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.requestReason"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#request_reason GoogleBetaProvider#request_reason}.

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.requestTimeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#request_timeout GoogleBetaProvider#request_timeout}.

---

##### `resource_manager_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.resourceManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}.

---

##### `resource_manager_v3_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_v3_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.resourceManagerV3CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}.

---

##### `runtimeconfig_custom_endpoint`<sup>Optional</sup> <a name="runtimeconfig_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.runtimeconfigCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}.

---

##### `runtime_config_custom_endpoint`<sup>Optional</sup> <a name="runtime_config_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.runtimeConfigCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#scopes GoogleBetaProvider#scopes}.

---

##### `secret_manager_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secretManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}.

---

##### `secret_manager_regional_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_regional_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secretManagerRegionalCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}.

---

##### `secure_source_manager_custom_endpoint`<sup>Optional</sup> <a name="secure_source_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.secureSourceManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}.

---

##### `security_center_custom_endpoint`<sup>Optional</sup> <a name="security_center_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}.

---

##### `security_center_management_custom_endpoint`<sup>Optional</sup> <a name="security_center_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterManagementCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}.

---

##### `security_center_v2_custom_endpoint`<sup>Optional</sup> <a name="security_center_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityCenterV2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}.

---

##### `securityposture_custom_endpoint`<sup>Optional</sup> <a name="securityposture_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securitypostureCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}.

---

##### `security_scanner_custom_endpoint`<sup>Optional</sup> <a name="security_scanner_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.securityScannerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}.

---

##### `service_directory_custom_endpoint`<sup>Optional</sup> <a name="service_directory_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceDirectoryCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}.

---

##### `service_management_custom_endpoint`<sup>Optional</sup> <a name="service_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceManagementCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}.

---

##### `service_networking_custom_endpoint`<sup>Optional</sup> <a name="service_networking_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceNetworkingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}.

---

##### `service_usage_custom_endpoint`<sup>Optional</sup> <a name="service_usage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.serviceUsageCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}.

---

##### `site_verification_custom_endpoint`<sup>Optional</sup> <a name="site_verification_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.siteVerificationCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}.

---

##### `source_repo_custom_endpoint`<sup>Optional</sup> <a name="source_repo_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.sourceRepoCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}.

---

##### `spanner_custom_endpoint`<sup>Optional</sup> <a name="spanner_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.spannerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}.

---

##### `sql_custom_endpoint`<sup>Optional</sup> <a name="sql_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.sqlCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}.

---

##### `storage_custom_endpoint`<sup>Optional</sup> <a name="storage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}.

---

##### `storage_insights_custom_endpoint`<sup>Optional</sup> <a name="storage_insights_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageInsightsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}.

---

##### `storage_transfer_custom_endpoint`<sup>Optional</sup> <a name="storage_transfer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.storageTransferCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}.

---

##### `tags_custom_endpoint`<sup>Optional</sup> <a name="tags_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tagsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}.

---

##### `tags_location_custom_endpoint`<sup>Optional</sup> <a name="tags_location_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tagsLocationCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}.

---

##### `terraform_attribution_label_addition_strategy`<sup>Optional</sup> <a name="terraform_attribution_label_addition_strategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.terraformAttributionLabelAdditionStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpu_custom_endpoint`<sup>Optional</sup> <a name="tpu_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tpuCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}.

---

##### `tpu_v2_custom_endpoint`<sup>Optional</sup> <a name="tpu_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.tpuV2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}.

---

##### `transcoder_custom_endpoint`<sup>Optional</sup> <a name="transcoder_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.transcoderCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}.

---

##### `universe_domain`<sup>Optional</sup> <a name="universe_domain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.universeDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#universe_domain GoogleBetaProvider#universe_domain}.

---

##### `user_project_override`<sup>Optional</sup> <a name="user_project_override" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.userProjectOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#user_project_override GoogleBetaProvider#user_project_override}.

---

##### `vertex_ai_custom_endpoint`<sup>Optional</sup> <a name="vertex_ai_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vertexAiCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengine_custom_endpoint`<sup>Optional</sup> <a name="vmwareengine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vmwareengineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}.

---

##### `vpc_access_custom_endpoint`<sup>Optional</sup> <a name="vpc_access_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.vpcAccessCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}.

---

##### `workbench_custom_endpoint`<sup>Optional</sup> <a name="workbench_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workbenchCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}.

---

##### `workflows_custom_endpoint`<sup>Optional</sup> <a name="workflows_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workflowsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}.

---

##### `workstations_custom_endpoint`<sup>Optional</sup> <a name="workstations_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.workstationsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#zone GoogleBetaProvider#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint">reset_access_approval_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint">reset_access_context_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint">reset_active_directory_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAddTerraformAttributionLabel">reset_add_terraform_attribution_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint">reset_alloydb_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint">reset_api_gateway_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint">reset_apigee_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint">reset_apikeys_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint">reset_app_engine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApphubCustomEndpoint">reset_apphub_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint">reset_artifact_registry_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint">reset_assured_workloads_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBackupDrCustomEndpoint">reset_backup_dr_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching">reset_batching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint">reset_beyondcorp_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBiglakeCustomEndpoint">reset_biglake_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryAnalyticsHubCustomEndpoint">reset_bigquery_analytics_hub_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryConnectionCustomEndpoint">reset_bigquery_connection_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigQueryCustomEndpoint">reset_big_query_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDatapolicyCustomEndpoint">reset_bigquery_datapolicy_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDataTransferCustomEndpoint">reset_bigquery_data_transfer_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryReservationCustomEndpoint">reset_bigquery_reservation_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigtableCustomEndpoint">reset_bigtable_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingCustomEndpoint">reset_billing_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingProject">reset_billing_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBinaryAuthorizationCustomEndpoint">reset_binary_authorization_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBlockchainNodeEngineCustomEndpoint">reset_blockchain_node_engine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint">reset_certificate_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetChronicleCustomEndpoint">reset_chronicle_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint">reset_cloud_asset_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint">reset_cloud_billing_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint">reset_cloud_build_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint">reset_cloudbuildv2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint">reset_cloud_build_worker_pool_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint">reset_clouddeploy_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddomainsCustomEndpoint">reset_clouddomains_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint">reset_cloudfunctions2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint">reset_cloud_functions_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint">reset_cloud_identity_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint">reset_cloud_ids_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudQuotasCustomEndpoint">reset_cloud_quotas_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint">reset_cloud_resource_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint">reset_cloud_run_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint">reset_cloud_run_v2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint">reset_cloud_scheduler_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint">reset_cloud_tasks_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint">reset_composer_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint">reset_compute_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint">reset_container_analysis_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint">reset_container_attached_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint">reset_container_aws_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint">reset_container_azure_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint">reset_container_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCoreBillingCustomEndpoint">reset_core_billing_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint">reset_database_migration_service_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint">reset_data_catalog_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint">reset_dataflow_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint">reset_dataform_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint">reset_data_fusion_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint">reset_data_loss_prevention_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataPipelineCustomEndpoint">reset_data_pipeline_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint">reset_dataplex_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint">reset_dataproc_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocGdcCustomEndpoint">reset_dataproc_gdc_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint">reset_dataproc_metastore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint">reset_datastream_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDefaultLabels">reset_default_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint">reset_deployment_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeveloperConnectCustomEndpoint">reset_developer_connect_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint">reset_dialogflow_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint">reset_dialogflow_cx_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDiscoveryEngineCustomEndpoint">reset_discovery_engine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint">reset_dns_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint">reset_document_ai_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiWarehouseCustomEndpoint">reset_document_ai_warehouse_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgecontainerCustomEndpoint">reset_edgecontainer_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgenetworkCustomEndpoint">reset_edgenetwork_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint">reset_essential_contacts_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint">reset_eventarc_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint">reset_filestore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseAppCheckCustomEndpoint">reset_firebase_app_check_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint">reset_firebase_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint">reset_firebase_database_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseExtensionsCustomEndpoint">reset_firebase_extensions_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint">reset_firebase_hosting_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint">reset_firebaserules_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint">reset_firebase_storage_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint">reset_firestore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGeminiCustomEndpoint">reset_gemini_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint">reset_gke_backup_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHub2CustomEndpoint">reset_gke_hub2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint">reset_gke_hub_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint">reset_gkehub_feature_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint">reset_gkeonprem_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint">reset_healthcare_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint">reset_iam2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam3CustomEndpoint">reset_iam3_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint">reset_iam_beta_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint">reset_iam_credentials_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint">reset_iam_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint">reset_iam_workforce_pool_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint">reset_iap_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint">reset_identity_platform_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount">reset_impersonate_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates">reset_impersonate_service_account_delegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationConnectorsCustomEndpoint">reset_integration_connectors_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationsCustomEndpoint">reset_integrations_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint">reset_kms_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint">reset_logging_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLookerCustomEndpoint">reset_looker_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetManagedKafkaCustomEndpoint">reset_managed_kafka_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint">reset_memcache_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemorystoreCustomEndpoint">reset_memorystore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMigrationCenterCustomEndpoint">reset_migration_center_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint">reset_ml_engine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint">reset_monitoring_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetappCustomEndpoint">reset_netapp_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint">reset_network_connectivity_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint">reset_network_management_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint">reset_network_security_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint">reset_network_services_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint">reset_notebooks_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOracleDatabaseCustomEndpoint">reset_oracle_database_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint">reset_org_policy_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint">reset_os_config_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint">reset_os_login_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParallelstoreCustomEndpoint">reset_parallelstore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint">reset_privateca_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivilegedAccessManagerCustomEndpoint">reset_privileged_access_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPublicCaCustomEndpoint">reset_public_ca_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubCustomEndpoint">reset_pubsub_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubLiteCustomEndpoint">reset_pubsub_lite_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRecaptchaEnterpriseCustomEndpoint">reset_recaptcha_enterprise_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRedisCustomEndpoint">reset_redis_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestReason">reset_request_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerCustomEndpoint">reset_resource_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerV3CustomEndpoint">reset_resource_manager_v3_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeconfigCustomEndpoint">reset_runtimeconfig_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeConfigCustomEndpoint">reset_runtime_config_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerCustomEndpoint">reset_secret_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerRegionalCustomEndpoint">reset_secret_manager_regional_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecureSourceManagerCustomEndpoint">reset_secure_source_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint">reset_security_center_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterManagementCustomEndpoint">reset_security_center_management_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterV2CustomEndpoint">reset_security_center_v2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecuritypostureCustomEndpoint">reset_securityposture_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint">reset_security_scanner_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint">reset_service_directory_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint">reset_service_management_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint">reset_service_networking_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint">reset_service_usage_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSiteVerificationCustomEndpoint">reset_site_verification_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint">reset_source_repo_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint">reset_spanner_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint">reset_sql_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint">reset_storage_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageInsightsCustomEndpoint">reset_storage_insights_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint">reset_storage_transfer_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint">reset_tags_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint">reset_tags_location_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTerraformAttributionLabelAdditionStrategy">reset_terraform_attribution_label_addition_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint">reset_tpu_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuV2CustomEndpoint">reset_tpu_v2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTranscoderCustomEndpoint">reset_transcoder_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUniverseDomain">reset_universe_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride">reset_user_project_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint">reset_vertex_ai_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVmwareengineCustomEndpoint">reset_vmwareengine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint">reset_vpc_access_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkbenchCustomEndpoint">reset_workbench_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint">reset_workflows_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint">reset_workstations_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_approval_custom_endpoint` <a name="reset_access_approval_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessApprovalCustomEndpoint"></a>

```python
def reset_access_approval_custom_endpoint() -> None
```

##### `reset_access_context_manager_custom_endpoint` <a name="reset_access_context_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessContextManagerCustomEndpoint"></a>

```python
def reset_access_context_manager_custom_endpoint() -> None
```

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_active_directory_custom_endpoint` <a name="reset_active_directory_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetActiveDirectoryCustomEndpoint"></a>

```python
def reset_active_directory_custom_endpoint() -> None
```

##### `reset_add_terraform_attribution_label` <a name="reset_add_terraform_attribution_label" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAddTerraformAttributionLabel"></a>

```python
def reset_add_terraform_attribution_label() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_alloydb_custom_endpoint` <a name="reset_alloydb_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAlloydbCustomEndpoint"></a>

```python
def reset_alloydb_custom_endpoint() -> None
```

##### `reset_api_gateway_custom_endpoint` <a name="reset_api_gateway_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApiGatewayCustomEndpoint"></a>

```python
def reset_api_gateway_custom_endpoint() -> None
```

##### `reset_apigee_custom_endpoint` <a name="reset_apigee_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApigeeCustomEndpoint"></a>

```python
def reset_apigee_custom_endpoint() -> None
```

##### `reset_apikeys_custom_endpoint` <a name="reset_apikeys_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApikeysCustomEndpoint"></a>

```python
def reset_apikeys_custom_endpoint() -> None
```

##### `reset_app_engine_custom_endpoint` <a name="reset_app_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAppEngineCustomEndpoint"></a>

```python
def reset_app_engine_custom_endpoint() -> None
```

##### `reset_apphub_custom_endpoint` <a name="reset_apphub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetApphubCustomEndpoint"></a>

```python
def reset_apphub_custom_endpoint() -> None
```

##### `reset_artifact_registry_custom_endpoint` <a name="reset_artifact_registry_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetArtifactRegistryCustomEndpoint"></a>

```python
def reset_artifact_registry_custom_endpoint() -> None
```

##### `reset_assured_workloads_custom_endpoint` <a name="reset_assured_workloads_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```python
def reset_assured_workloads_custom_endpoint() -> None
```

##### `reset_backup_dr_custom_endpoint` <a name="reset_backup_dr_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBackupDrCustomEndpoint"></a>

```python
def reset_backup_dr_custom_endpoint() -> None
```

##### `reset_batching` <a name="reset_batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBatching"></a>

```python
def reset_batching() -> None
```

##### `reset_beyondcorp_custom_endpoint` <a name="reset_beyondcorp_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBeyondcorpCustomEndpoint"></a>

```python
def reset_beyondcorp_custom_endpoint() -> None
```

##### `reset_biglake_custom_endpoint` <a name="reset_biglake_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBiglakeCustomEndpoint"></a>

```python
def reset_biglake_custom_endpoint() -> None
```

##### `reset_bigquery_analytics_hub_custom_endpoint` <a name="reset_bigquery_analytics_hub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```python
def reset_bigquery_analytics_hub_custom_endpoint() -> None
```

##### `reset_bigquery_connection_custom_endpoint` <a name="reset_bigquery_connection_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryConnectionCustomEndpoint"></a>

```python
def reset_bigquery_connection_custom_endpoint() -> None
```

##### `reset_big_query_custom_endpoint` <a name="reset_big_query_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigQueryCustomEndpoint"></a>

```python
def reset_big_query_custom_endpoint() -> None
```

##### `reset_bigquery_datapolicy_custom_endpoint` <a name="reset_bigquery_datapolicy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```python
def reset_bigquery_datapolicy_custom_endpoint() -> None
```

##### `reset_bigquery_data_transfer_custom_endpoint` <a name="reset_bigquery_data_transfer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```python
def reset_bigquery_data_transfer_custom_endpoint() -> None
```

##### `reset_bigquery_reservation_custom_endpoint` <a name="reset_bigquery_reservation_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigqueryReservationCustomEndpoint"></a>

```python
def reset_bigquery_reservation_custom_endpoint() -> None
```

##### `reset_bigtable_custom_endpoint` <a name="reset_bigtable_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBigtableCustomEndpoint"></a>

```python
def reset_bigtable_custom_endpoint() -> None
```

##### `reset_billing_custom_endpoint` <a name="reset_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingCustomEndpoint"></a>

```python
def reset_billing_custom_endpoint() -> None
```

##### `reset_billing_project` <a name="reset_billing_project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBillingProject"></a>

```python
def reset_billing_project() -> None
```

##### `reset_binary_authorization_custom_endpoint` <a name="reset_binary_authorization_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```python
def reset_binary_authorization_custom_endpoint() -> None
```

##### `reset_blockchain_node_engine_custom_endpoint` <a name="reset_blockchain_node_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```python
def reset_blockchain_node_engine_custom_endpoint() -> None
```

##### `reset_certificate_manager_custom_endpoint` <a name="reset_certificate_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCertificateManagerCustomEndpoint"></a>

```python
def reset_certificate_manager_custom_endpoint() -> None
```

##### `reset_chronicle_custom_endpoint` <a name="reset_chronicle_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetChronicleCustomEndpoint"></a>

```python
def reset_chronicle_custom_endpoint() -> None
```

##### `reset_cloud_asset_custom_endpoint` <a name="reset_cloud_asset_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudAssetCustomEndpoint"></a>

```python
def reset_cloud_asset_custom_endpoint() -> None
```

##### `reset_cloud_billing_custom_endpoint` <a name="reset_cloud_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBillingCustomEndpoint"></a>

```python
def reset_cloud_billing_custom_endpoint() -> None
```

##### `reset_cloud_build_custom_endpoint` <a name="reset_cloud_build_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildCustomEndpoint"></a>

```python
def reset_cloud_build_custom_endpoint() -> None
```

##### `reset_cloudbuildv2_custom_endpoint` <a name="reset_cloudbuildv2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudbuildv2CustomEndpoint"></a>

```python
def reset_cloudbuildv2_custom_endpoint() -> None
```

##### `reset_cloud_build_worker_pool_custom_endpoint` <a name="reset_cloud_build_worker_pool_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```python
def reset_cloud_build_worker_pool_custom_endpoint() -> None
```

##### `reset_clouddeploy_custom_endpoint` <a name="reset_clouddeploy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddeployCustomEndpoint"></a>

```python
def reset_clouddeploy_custom_endpoint() -> None
```

##### `reset_clouddomains_custom_endpoint` <a name="reset_clouddomains_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetClouddomainsCustomEndpoint"></a>

```python
def reset_clouddomains_custom_endpoint() -> None
```

##### `reset_cloudfunctions2_custom_endpoint` <a name="reset_cloudfunctions2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudfunctions2CustomEndpoint"></a>

```python
def reset_cloudfunctions2_custom_endpoint() -> None
```

##### `reset_cloud_functions_custom_endpoint` <a name="reset_cloud_functions_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudFunctionsCustomEndpoint"></a>

```python
def reset_cloud_functions_custom_endpoint() -> None
```

##### `reset_cloud_identity_custom_endpoint` <a name="reset_cloud_identity_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdentityCustomEndpoint"></a>

```python
def reset_cloud_identity_custom_endpoint() -> None
```

##### `reset_cloud_ids_custom_endpoint` <a name="reset_cloud_ids_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudIdsCustomEndpoint"></a>

```python
def reset_cloud_ids_custom_endpoint() -> None
```

##### `reset_cloud_quotas_custom_endpoint` <a name="reset_cloud_quotas_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudQuotasCustomEndpoint"></a>

```python
def reset_cloud_quotas_custom_endpoint() -> None
```

##### `reset_cloud_resource_manager_custom_endpoint` <a name="reset_cloud_resource_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudResourceManagerCustomEndpoint"></a>

```python
def reset_cloud_resource_manager_custom_endpoint() -> None
```

##### `reset_cloud_run_custom_endpoint` <a name="reset_cloud_run_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunCustomEndpoint"></a>

```python
def reset_cloud_run_custom_endpoint() -> None
```

##### `reset_cloud_run_v2_custom_endpoint` <a name="reset_cloud_run_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudRunV2CustomEndpoint"></a>

```python
def reset_cloud_run_v2_custom_endpoint() -> None
```

##### `reset_cloud_scheduler_custom_endpoint` <a name="reset_cloud_scheduler_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudSchedulerCustomEndpoint"></a>

```python
def reset_cloud_scheduler_custom_endpoint() -> None
```

##### `reset_cloud_tasks_custom_endpoint` <a name="reset_cloud_tasks_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCloudTasksCustomEndpoint"></a>

```python
def reset_cloud_tasks_custom_endpoint() -> None
```

##### `reset_composer_custom_endpoint` <a name="reset_composer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComposerCustomEndpoint"></a>

```python
def reset_composer_custom_endpoint() -> None
```

##### `reset_compute_custom_endpoint` <a name="reset_compute_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetComputeCustomEndpoint"></a>

```python
def reset_compute_custom_endpoint() -> None
```

##### `reset_container_analysis_custom_endpoint` <a name="reset_container_analysis_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAnalysisCustomEndpoint"></a>

```python
def reset_container_analysis_custom_endpoint() -> None
```

##### `reset_container_attached_custom_endpoint` <a name="reset_container_attached_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAttachedCustomEndpoint"></a>

```python
def reset_container_attached_custom_endpoint() -> None
```

##### `reset_container_aws_custom_endpoint` <a name="reset_container_aws_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAwsCustomEndpoint"></a>

```python
def reset_container_aws_custom_endpoint() -> None
```

##### `reset_container_azure_custom_endpoint` <a name="reset_container_azure_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerAzureCustomEndpoint"></a>

```python
def reset_container_azure_custom_endpoint() -> None
```

##### `reset_container_custom_endpoint` <a name="reset_container_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetContainerCustomEndpoint"></a>

```python
def reset_container_custom_endpoint() -> None
```

##### `reset_core_billing_custom_endpoint` <a name="reset_core_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCoreBillingCustomEndpoint"></a>

```python
def reset_core_billing_custom_endpoint() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_database_migration_service_custom_endpoint` <a name="reset_database_migration_service_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```python
def reset_database_migration_service_custom_endpoint() -> None
```

##### `reset_data_catalog_custom_endpoint` <a name="reset_data_catalog_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataCatalogCustomEndpoint"></a>

```python
def reset_data_catalog_custom_endpoint() -> None
```

##### `reset_dataflow_custom_endpoint` <a name="reset_dataflow_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataflowCustomEndpoint"></a>

```python
def reset_dataflow_custom_endpoint() -> None
```

##### `reset_dataform_custom_endpoint` <a name="reset_dataform_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataformCustomEndpoint"></a>

```python
def reset_dataform_custom_endpoint() -> None
```

##### `reset_data_fusion_custom_endpoint` <a name="reset_data_fusion_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataFusionCustomEndpoint"></a>

```python
def reset_data_fusion_custom_endpoint() -> None
```

##### `reset_data_loss_prevention_custom_endpoint` <a name="reset_data_loss_prevention_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataLossPreventionCustomEndpoint"></a>

```python
def reset_data_loss_prevention_custom_endpoint() -> None
```

##### `reset_data_pipeline_custom_endpoint` <a name="reset_data_pipeline_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataPipelineCustomEndpoint"></a>

```python
def reset_data_pipeline_custom_endpoint() -> None
```

##### `reset_dataplex_custom_endpoint` <a name="reset_dataplex_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataplexCustomEndpoint"></a>

```python
def reset_dataplex_custom_endpoint() -> None
```

##### `reset_dataproc_custom_endpoint` <a name="reset_dataproc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocCustomEndpoint"></a>

```python
def reset_dataproc_custom_endpoint() -> None
```

##### `reset_dataproc_gdc_custom_endpoint` <a name="reset_dataproc_gdc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocGdcCustomEndpoint"></a>

```python
def reset_dataproc_gdc_custom_endpoint() -> None
```

##### `reset_dataproc_metastore_custom_endpoint` <a name="reset_dataproc_metastore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDataprocMetastoreCustomEndpoint"></a>

```python
def reset_dataproc_metastore_custom_endpoint() -> None
```

##### `reset_datastream_custom_endpoint` <a name="reset_datastream_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDatastreamCustomEndpoint"></a>

```python
def reset_datastream_custom_endpoint() -> None
```

##### `reset_default_labels` <a name="reset_default_labels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDefaultLabels"></a>

```python
def reset_default_labels() -> None
```

##### `reset_deployment_manager_custom_endpoint` <a name="reset_deployment_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeploymentManagerCustomEndpoint"></a>

```python
def reset_deployment_manager_custom_endpoint() -> None
```

##### `reset_developer_connect_custom_endpoint` <a name="reset_developer_connect_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDeveloperConnectCustomEndpoint"></a>

```python
def reset_developer_connect_custom_endpoint() -> None
```

##### `reset_dialogflow_custom_endpoint` <a name="reset_dialogflow_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCustomEndpoint"></a>

```python
def reset_dialogflow_custom_endpoint() -> None
```

##### `reset_dialogflow_cx_custom_endpoint` <a name="reset_dialogflow_cx_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDialogflowCxCustomEndpoint"></a>

```python
def reset_dialogflow_cx_custom_endpoint() -> None
```

##### `reset_discovery_engine_custom_endpoint` <a name="reset_discovery_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDiscoveryEngineCustomEndpoint"></a>

```python
def reset_discovery_engine_custom_endpoint() -> None
```

##### `reset_dns_custom_endpoint` <a name="reset_dns_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDnsCustomEndpoint"></a>

```python
def reset_dns_custom_endpoint() -> None
```

##### `reset_document_ai_custom_endpoint` <a name="reset_document_ai_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiCustomEndpoint"></a>

```python
def reset_document_ai_custom_endpoint() -> None
```

##### `reset_document_ai_warehouse_custom_endpoint` <a name="reset_document_ai_warehouse_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```python
def reset_document_ai_warehouse_custom_endpoint() -> None
```

##### `reset_edgecontainer_custom_endpoint` <a name="reset_edgecontainer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgecontainerCustomEndpoint"></a>

```python
def reset_edgecontainer_custom_endpoint() -> None
```

##### `reset_edgenetwork_custom_endpoint` <a name="reset_edgenetwork_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEdgenetworkCustomEndpoint"></a>

```python
def reset_edgenetwork_custom_endpoint() -> None
```

##### `reset_essential_contacts_custom_endpoint` <a name="reset_essential_contacts_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEssentialContactsCustomEndpoint"></a>

```python
def reset_essential_contacts_custom_endpoint() -> None
```

##### `reset_eventarc_custom_endpoint` <a name="reset_eventarc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetEventarcCustomEndpoint"></a>

```python
def reset_eventarc_custom_endpoint() -> None
```

##### `reset_filestore_custom_endpoint` <a name="reset_filestore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFilestoreCustomEndpoint"></a>

```python
def reset_filestore_custom_endpoint() -> None
```

##### `reset_firebase_app_check_custom_endpoint` <a name="reset_firebase_app_check_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```python
def reset_firebase_app_check_custom_endpoint() -> None
```

##### `reset_firebase_custom_endpoint` <a name="reset_firebase_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseCustomEndpoint"></a>

```python
def reset_firebase_custom_endpoint() -> None
```

##### `reset_firebase_database_custom_endpoint` <a name="reset_firebase_database_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseDatabaseCustomEndpoint"></a>

```python
def reset_firebase_database_custom_endpoint() -> None
```

##### `reset_firebase_extensions_custom_endpoint` <a name="reset_firebase_extensions_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseExtensionsCustomEndpoint"></a>

```python
def reset_firebase_extensions_custom_endpoint() -> None
```

##### `reset_firebase_hosting_custom_endpoint` <a name="reset_firebase_hosting_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseHostingCustomEndpoint"></a>

```python
def reset_firebase_hosting_custom_endpoint() -> None
```

##### `reset_firebaserules_custom_endpoint` <a name="reset_firebaserules_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaserulesCustomEndpoint"></a>

```python
def reset_firebaserules_custom_endpoint() -> None
```

##### `reset_firebase_storage_custom_endpoint` <a name="reset_firebase_storage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirebaseStorageCustomEndpoint"></a>

```python
def reset_firebase_storage_custom_endpoint() -> None
```

##### `reset_firestore_custom_endpoint` <a name="reset_firestore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetFirestoreCustomEndpoint"></a>

```python
def reset_firestore_custom_endpoint() -> None
```

##### `reset_gemini_custom_endpoint` <a name="reset_gemini_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGeminiCustomEndpoint"></a>

```python
def reset_gemini_custom_endpoint() -> None
```

##### `reset_gke_backup_custom_endpoint` <a name="reset_gke_backup_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeBackupCustomEndpoint"></a>

```python
def reset_gke_backup_custom_endpoint() -> None
```

##### `reset_gke_hub2_custom_endpoint` <a name="reset_gke_hub2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHub2CustomEndpoint"></a>

```python
def reset_gke_hub2_custom_endpoint() -> None
```

##### `reset_gke_hub_custom_endpoint` <a name="reset_gke_hub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeHubCustomEndpoint"></a>

```python
def reset_gke_hub_custom_endpoint() -> None
```

##### `reset_gkehub_feature_custom_endpoint` <a name="reset_gkehub_feature_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkehubFeatureCustomEndpoint"></a>

```python
def reset_gkehub_feature_custom_endpoint() -> None
```

##### `reset_gkeonprem_custom_endpoint` <a name="reset_gkeonprem_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetGkeonpremCustomEndpoint"></a>

```python
def reset_gkeonprem_custom_endpoint() -> None
```

##### `reset_healthcare_custom_endpoint` <a name="reset_healthcare_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetHealthcareCustomEndpoint"></a>

```python
def reset_healthcare_custom_endpoint() -> None
```

##### `reset_iam2_custom_endpoint` <a name="reset_iam2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam2CustomEndpoint"></a>

```python
def reset_iam2_custom_endpoint() -> None
```

##### `reset_iam3_custom_endpoint` <a name="reset_iam3_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIam3CustomEndpoint"></a>

```python
def reset_iam3_custom_endpoint() -> None
```

##### `reset_iam_beta_custom_endpoint` <a name="reset_iam_beta_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamBetaCustomEndpoint"></a>

```python
def reset_iam_beta_custom_endpoint() -> None
```

##### `reset_iam_credentials_custom_endpoint` <a name="reset_iam_credentials_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCredentialsCustomEndpoint"></a>

```python
def reset_iam_credentials_custom_endpoint() -> None
```

##### `reset_iam_custom_endpoint` <a name="reset_iam_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamCustomEndpoint"></a>

```python
def reset_iam_custom_endpoint() -> None
```

##### `reset_iam_workforce_pool_custom_endpoint` <a name="reset_iam_workforce_pool_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```python
def reset_iam_workforce_pool_custom_endpoint() -> None
```

##### `reset_iap_custom_endpoint` <a name="reset_iap_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIapCustomEndpoint"></a>

```python
def reset_iap_custom_endpoint() -> None
```

##### `reset_identity_platform_custom_endpoint` <a name="reset_identity_platform_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIdentityPlatformCustomEndpoint"></a>

```python
def reset_identity_platform_custom_endpoint() -> None
```

##### `reset_impersonate_service_account` <a name="reset_impersonate_service_account" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccount"></a>

```python
def reset_impersonate_service_account() -> None
```

##### `reset_impersonate_service_account_delegates` <a name="reset_impersonate_service_account_delegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetImpersonateServiceAccountDelegates"></a>

```python
def reset_impersonate_service_account_delegates() -> None
```

##### `reset_integration_connectors_custom_endpoint` <a name="reset_integration_connectors_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```python
def reset_integration_connectors_custom_endpoint() -> None
```

##### `reset_integrations_custom_endpoint` <a name="reset_integrations_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetIntegrationsCustomEndpoint"></a>

```python
def reset_integrations_custom_endpoint() -> None
```

##### `reset_kms_custom_endpoint` <a name="reset_kms_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetKmsCustomEndpoint"></a>

```python
def reset_kms_custom_endpoint() -> None
```

##### `reset_logging_custom_endpoint` <a name="reset_logging_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLoggingCustomEndpoint"></a>

```python
def reset_logging_custom_endpoint() -> None
```

##### `reset_looker_custom_endpoint` <a name="reset_looker_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetLookerCustomEndpoint"></a>

```python
def reset_looker_custom_endpoint() -> None
```

##### `reset_managed_kafka_custom_endpoint` <a name="reset_managed_kafka_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetManagedKafkaCustomEndpoint"></a>

```python
def reset_managed_kafka_custom_endpoint() -> None
```

##### `reset_memcache_custom_endpoint` <a name="reset_memcache_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemcacheCustomEndpoint"></a>

```python
def reset_memcache_custom_endpoint() -> None
```

##### `reset_memorystore_custom_endpoint` <a name="reset_memorystore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMemorystoreCustomEndpoint"></a>

```python
def reset_memorystore_custom_endpoint() -> None
```

##### `reset_migration_center_custom_endpoint` <a name="reset_migration_center_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMigrationCenterCustomEndpoint"></a>

```python
def reset_migration_center_custom_endpoint() -> None
```

##### `reset_ml_engine_custom_endpoint` <a name="reset_ml_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMlEngineCustomEndpoint"></a>

```python
def reset_ml_engine_custom_endpoint() -> None
```

##### `reset_monitoring_custom_endpoint` <a name="reset_monitoring_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetMonitoringCustomEndpoint"></a>

```python
def reset_monitoring_custom_endpoint() -> None
```

##### `reset_netapp_custom_endpoint` <a name="reset_netapp_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetappCustomEndpoint"></a>

```python
def reset_netapp_custom_endpoint() -> None
```

##### `reset_network_connectivity_custom_endpoint` <a name="reset_network_connectivity_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkConnectivityCustomEndpoint"></a>

```python
def reset_network_connectivity_custom_endpoint() -> None
```

##### `reset_network_management_custom_endpoint` <a name="reset_network_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkManagementCustomEndpoint"></a>

```python
def reset_network_management_custom_endpoint() -> None
```

##### `reset_network_security_custom_endpoint` <a name="reset_network_security_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkSecurityCustomEndpoint"></a>

```python
def reset_network_security_custom_endpoint() -> None
```

##### `reset_network_services_custom_endpoint` <a name="reset_network_services_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNetworkServicesCustomEndpoint"></a>

```python
def reset_network_services_custom_endpoint() -> None
```

##### `reset_notebooks_custom_endpoint` <a name="reset_notebooks_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetNotebooksCustomEndpoint"></a>

```python
def reset_notebooks_custom_endpoint() -> None
```

##### `reset_oracle_database_custom_endpoint` <a name="reset_oracle_database_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOracleDatabaseCustomEndpoint"></a>

```python
def reset_oracle_database_custom_endpoint() -> None
```

##### `reset_org_policy_custom_endpoint` <a name="reset_org_policy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOrgPolicyCustomEndpoint"></a>

```python
def reset_org_policy_custom_endpoint() -> None
```

##### `reset_os_config_custom_endpoint` <a name="reset_os_config_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsConfigCustomEndpoint"></a>

```python
def reset_os_config_custom_endpoint() -> None
```

##### `reset_os_login_custom_endpoint` <a name="reset_os_login_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetOsLoginCustomEndpoint"></a>

```python
def reset_os_login_custom_endpoint() -> None
```

##### `reset_parallelstore_custom_endpoint` <a name="reset_parallelstore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetParallelstoreCustomEndpoint"></a>

```python
def reset_parallelstore_custom_endpoint() -> None
```

##### `reset_privateca_custom_endpoint` <a name="reset_privateca_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivatecaCustomEndpoint"></a>

```python
def reset_privateca_custom_endpoint() -> None
```

##### `reset_privileged_access_manager_custom_endpoint` <a name="reset_privileged_access_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPrivilegedAccessManagerCustomEndpoint"></a>

```python
def reset_privileged_access_manager_custom_endpoint() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_public_ca_custom_endpoint` <a name="reset_public_ca_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPublicCaCustomEndpoint"></a>

```python
def reset_public_ca_custom_endpoint() -> None
```

##### `reset_pubsub_custom_endpoint` <a name="reset_pubsub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubCustomEndpoint"></a>

```python
def reset_pubsub_custom_endpoint() -> None
```

##### `reset_pubsub_lite_custom_endpoint` <a name="reset_pubsub_lite_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetPubsubLiteCustomEndpoint"></a>

```python
def reset_pubsub_lite_custom_endpoint() -> None
```

##### `reset_recaptcha_enterprise_custom_endpoint` <a name="reset_recaptcha_enterprise_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```python
def reset_recaptcha_enterprise_custom_endpoint() -> None
```

##### `reset_redis_custom_endpoint` <a name="reset_redis_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRedisCustomEndpoint"></a>

```python
def reset_redis_custom_endpoint() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_request_reason` <a name="reset_request_reason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestReason"></a>

```python
def reset_request_reason() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_resource_manager_custom_endpoint` <a name="reset_resource_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerCustomEndpoint"></a>

```python
def reset_resource_manager_custom_endpoint() -> None
```

##### `reset_resource_manager_v3_custom_endpoint` <a name="reset_resource_manager_v3_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetResourceManagerV3CustomEndpoint"></a>

```python
def reset_resource_manager_v3_custom_endpoint() -> None
```

##### `reset_runtimeconfig_custom_endpoint` <a name="reset_runtimeconfig_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeconfigCustomEndpoint"></a>

```python
def reset_runtimeconfig_custom_endpoint() -> None
```

##### `reset_runtime_config_custom_endpoint` <a name="reset_runtime_config_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetRuntimeConfigCustomEndpoint"></a>

```python
def reset_runtime_config_custom_endpoint() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_secret_manager_custom_endpoint` <a name="reset_secret_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerCustomEndpoint"></a>

```python
def reset_secret_manager_custom_endpoint() -> None
```

##### `reset_secret_manager_regional_custom_endpoint` <a name="reset_secret_manager_regional_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecretManagerRegionalCustomEndpoint"></a>

```python
def reset_secret_manager_regional_custom_endpoint() -> None
```

##### `reset_secure_source_manager_custom_endpoint` <a name="reset_secure_source_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecureSourceManagerCustomEndpoint"></a>

```python
def reset_secure_source_manager_custom_endpoint() -> None
```

##### `reset_security_center_custom_endpoint` <a name="reset_security_center_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterCustomEndpoint"></a>

```python
def reset_security_center_custom_endpoint() -> None
```

##### `reset_security_center_management_custom_endpoint` <a name="reset_security_center_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterManagementCustomEndpoint"></a>

```python
def reset_security_center_management_custom_endpoint() -> None
```

##### `reset_security_center_v2_custom_endpoint` <a name="reset_security_center_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityCenterV2CustomEndpoint"></a>

```python
def reset_security_center_v2_custom_endpoint() -> None
```

##### `reset_securityposture_custom_endpoint` <a name="reset_securityposture_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecuritypostureCustomEndpoint"></a>

```python
def reset_securityposture_custom_endpoint() -> None
```

##### `reset_security_scanner_custom_endpoint` <a name="reset_security_scanner_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSecurityScannerCustomEndpoint"></a>

```python
def reset_security_scanner_custom_endpoint() -> None
```

##### `reset_service_directory_custom_endpoint` <a name="reset_service_directory_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceDirectoryCustomEndpoint"></a>

```python
def reset_service_directory_custom_endpoint() -> None
```

##### `reset_service_management_custom_endpoint` <a name="reset_service_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceManagementCustomEndpoint"></a>

```python
def reset_service_management_custom_endpoint() -> None
```

##### `reset_service_networking_custom_endpoint` <a name="reset_service_networking_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceNetworkingCustomEndpoint"></a>

```python
def reset_service_networking_custom_endpoint() -> None
```

##### `reset_service_usage_custom_endpoint` <a name="reset_service_usage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetServiceUsageCustomEndpoint"></a>

```python
def reset_service_usage_custom_endpoint() -> None
```

##### `reset_site_verification_custom_endpoint` <a name="reset_site_verification_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSiteVerificationCustomEndpoint"></a>

```python
def reset_site_verification_custom_endpoint() -> None
```

##### `reset_source_repo_custom_endpoint` <a name="reset_source_repo_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSourceRepoCustomEndpoint"></a>

```python
def reset_source_repo_custom_endpoint() -> None
```

##### `reset_spanner_custom_endpoint` <a name="reset_spanner_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSpannerCustomEndpoint"></a>

```python
def reset_spanner_custom_endpoint() -> None
```

##### `reset_sql_custom_endpoint` <a name="reset_sql_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetSqlCustomEndpoint"></a>

```python
def reset_sql_custom_endpoint() -> None
```

##### `reset_storage_custom_endpoint` <a name="reset_storage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageCustomEndpoint"></a>

```python
def reset_storage_custom_endpoint() -> None
```

##### `reset_storage_insights_custom_endpoint` <a name="reset_storage_insights_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageInsightsCustomEndpoint"></a>

```python
def reset_storage_insights_custom_endpoint() -> None
```

##### `reset_storage_transfer_custom_endpoint` <a name="reset_storage_transfer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetStorageTransferCustomEndpoint"></a>

```python
def reset_storage_transfer_custom_endpoint() -> None
```

##### `reset_tags_custom_endpoint` <a name="reset_tags_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsCustomEndpoint"></a>

```python
def reset_tags_custom_endpoint() -> None
```

##### `reset_tags_location_custom_endpoint` <a name="reset_tags_location_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTagsLocationCustomEndpoint"></a>

```python
def reset_tags_location_custom_endpoint() -> None
```

##### `reset_terraform_attribution_label_addition_strategy` <a name="reset_terraform_attribution_label_addition_strategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```python
def reset_terraform_attribution_label_addition_strategy() -> None
```

##### `reset_tpu_custom_endpoint` <a name="reset_tpu_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuCustomEndpoint"></a>

```python
def reset_tpu_custom_endpoint() -> None
```

##### `reset_tpu_v2_custom_endpoint` <a name="reset_tpu_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTpuV2CustomEndpoint"></a>

```python
def reset_tpu_v2_custom_endpoint() -> None
```

##### `reset_transcoder_custom_endpoint` <a name="reset_transcoder_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetTranscoderCustomEndpoint"></a>

```python
def reset_transcoder_custom_endpoint() -> None
```

##### `reset_universe_domain` <a name="reset_universe_domain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUniverseDomain"></a>

```python
def reset_universe_domain() -> None
```

##### `reset_user_project_override` <a name="reset_user_project_override" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetUserProjectOverride"></a>

```python
def reset_user_project_override() -> None
```

##### `reset_vertex_ai_custom_endpoint` <a name="reset_vertex_ai_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVertexAiCustomEndpoint"></a>

```python
def reset_vertex_ai_custom_endpoint() -> None
```

##### `reset_vmwareengine_custom_endpoint` <a name="reset_vmwareengine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVmwareengineCustomEndpoint"></a>

```python
def reset_vmwareengine_custom_endpoint() -> None
```

##### `reset_vpc_access_custom_endpoint` <a name="reset_vpc_access_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetVpcAccessCustomEndpoint"></a>

```python
def reset_vpc_access_custom_endpoint() -> None
```

##### `reset_workbench_custom_endpoint` <a name="reset_workbench_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkbenchCustomEndpoint"></a>

```python
def reset_workbench_custom_endpoint() -> None
```

##### `reset_workflows_custom_endpoint` <a name="reset_workflows_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkflowsCustomEndpoint"></a>

```python
def reset_workflows_custom_endpoint() -> None
```

##### `reset_workstations_custom_endpoint` <a name="reset_workstations_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetWorkstationsCustomEndpoint"></a>

```python
def reset_workstations_custom_endpoint() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBetaProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import provider

provider.GoogleBetaProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import provider

provider.GoogleBetaProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_google_beta import provider

provider.GoogleBetaProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import provider

provider.GoogleBetaProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBetaProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBetaProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBetaProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBetaProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput">access_approval_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput">access_context_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput">active_directory_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabelInput">add_terraform_attribution_label_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput">alloydb_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput">api_gateway_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput">apigee_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput">apikeys_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput">app_engine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpointInput">apphub_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput">artifact_registry_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput">assured_workloads_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpointInput">backup_dr_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput">batching_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput">beyondcorp_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpointInput">biglake_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput">bigquery_analytics_hub_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput">bigquery_connection_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput">big_query_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput">bigquery_datapolicy_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput">bigquery_data_transfer_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput">bigquery_reservation_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput">bigtable_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput">billing_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput">billing_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput">binary_authorization_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpointInput">blockchain_node_engine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput">certificate_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpointInput">chronicle_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput">cloud_asset_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput">cloud_billing_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput">cloud_build_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput">cloudbuildv2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput">cloud_build_worker_pool_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput">clouddeploy_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpointInput">clouddomains_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput">cloudfunctions2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput">cloud_functions_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput">cloud_identity_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput">cloud_ids_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpointInput">cloud_quotas_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput">cloud_resource_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput">cloud_run_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput">cloud_run_v2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput">cloud_scheduler_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput">cloud_tasks_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput">composer_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput">compute_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput">container_analysis_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput">container_attached_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput">container_aws_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput">container_azure_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput">container_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpointInput">core_billing_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput">database_migration_service_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput">data_catalog_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput">dataflow_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput">dataform_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput">data_fusion_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput">data_loss_prevention_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpointInput">data_pipeline_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput">dataplex_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput">dataproc_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpointInput">dataproc_gdc_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput">dataproc_metastore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput">datastream_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabelsInput">default_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput">deployment_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpointInput">developer_connect_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput">dialogflow_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput">dialogflow_cx_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpointInput">discovery_engine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput">dns_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput">document_ai_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpointInput">document_ai_warehouse_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpointInput">edgecontainer_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpointInput">edgenetwork_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput">essential_contacts_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput">eventarc_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput">filestore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpointInput">firebase_app_check_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput">firebase_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput">firebase_database_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpointInput">firebase_extensions_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput">firebase_hosting_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput">firebaserules_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput">firebase_storage_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput">firestore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpointInput">gemini_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput">gke_backup_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpointInput">gke_hub2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput">gke_hub_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput">gkehub_feature_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput">gkeonprem_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput">healthcare_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput">iam2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpointInput">iam3_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput">iam_beta_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput">iam_credentials_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput">iam_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput">iam_workforce_pool_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput">iap_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput">identity_platform_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput">impersonate_service_account_delegates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput">impersonate_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpointInput">integration_connectors_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpointInput">integrations_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput">kms_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput">logging_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpointInput">looker_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpointInput">managed_kafka_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput">memcache_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpointInput">memorystore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpointInput">migration_center_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput">ml_engine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput">monitoring_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpointInput">netapp_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput">network_connectivity_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput">network_management_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput">network_security_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput">network_services_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput">notebooks_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpointInput">oracle_database_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput">org_policy_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput">os_config_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput">os_login_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpointInput">parallelstore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput">privateca_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpointInput">privileged_access_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpointInput">public_ca_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput">pubsub_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput">pubsub_lite_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput">recaptcha_enterprise_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput">redis_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput">request_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput">request_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput">resource_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput">resource_manager_v3_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput">runtimeconfig_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput">runtime_config_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput">secret_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpointInput">secret_manager_regional_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpointInput">secure_source_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput">security_center_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpointInput">security_center_management_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpointInput">security_center_v2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpointInput">securityposture_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput">security_scanner_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput">service_directory_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput">service_management_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput">service_networking_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput">service_usage_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpointInput">site_verification_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput">source_repo_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput">spanner_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput">sql_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput">storage_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpointInput">storage_insights_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput">storage_transfer_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput">tags_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput">tags_location_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategyInput">terraform_attribution_label_addition_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput">tpu_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpointInput">tpu_v2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpointInput">transcoder_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomainInput">universe_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput">user_project_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput">vertex_ai_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpointInput">vmwareengine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput">vpc_access_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpointInput">workbench_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput">workflows_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput">workstations_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint">access_approval_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint">access_context_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint">active_directory_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabel">add_terraform_attribution_label</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint">alloydb_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint">api_gateway_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint">apigee_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint">apikeys_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint">app_engine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpoint">apphub_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint">artifact_registry_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint">assured_workloads_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpoint">backup_dr_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching">batching</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint">beyondcorp_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpoint">biglake_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint">bigquery_analytics_hub_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint">bigquery_connection_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint">big_query_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint">bigquery_datapolicy_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint">bigquery_data_transfer_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint">bigquery_reservation_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint">bigtable_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint">billing_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject">billing_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint">binary_authorization_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpoint">blockchain_node_engine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint">certificate_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpoint">chronicle_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint">cloud_asset_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint">cloud_billing_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint">cloud_build_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint">cloudbuildv2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint">cloud_build_worker_pool_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint">clouddeploy_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpoint">clouddomains_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint">cloudfunctions2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint">cloud_functions_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint">cloud_identity_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint">cloud_ids_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpoint">cloud_quotas_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint">cloud_resource_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint">cloud_run_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint">cloud_run_v2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint">cloud_scheduler_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint">cloud_tasks_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint">composer_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint">compute_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint">container_analysis_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint">container_attached_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint">container_aws_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint">container_azure_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint">container_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpoint">core_billing_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint">database_migration_service_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint">data_catalog_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint">dataflow_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint">dataform_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint">data_fusion_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint">data_loss_prevention_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpoint">data_pipeline_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint">dataplex_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint">dataproc_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpoint">dataproc_gdc_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint">dataproc_metastore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint">datastream_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabels">default_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint">deployment_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpoint">developer_connect_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint">dialogflow_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint">dialogflow_cx_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpoint">discovery_engine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint">dns_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint">document_ai_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpoint">document_ai_warehouse_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpoint">edgecontainer_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpoint">edgenetwork_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint">essential_contacts_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint">eventarc_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint">filestore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpoint">firebase_app_check_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint">firebase_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint">firebase_database_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpoint">firebase_extensions_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint">firebase_hosting_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint">firebaserules_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint">firebase_storage_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint">firestore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpoint">gemini_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint">gke_backup_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpoint">gke_hub2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint">gke_hub_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint">gkehub_feature_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint">gkeonprem_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint">healthcare_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint">iam2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpoint">iam3_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint">iam_beta_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint">iam_credentials_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint">iam_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint">iam_workforce_pool_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint">iap_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint">identity_platform_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount">impersonate_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates">impersonate_service_account_delegates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpoint">integration_connectors_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpoint">integrations_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint">kms_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint">logging_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpoint">looker_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpoint">managed_kafka_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint">memcache_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpoint">memorystore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpoint">migration_center_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint">ml_engine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint">monitoring_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpoint">netapp_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint">network_connectivity_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint">network_management_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint">network_security_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint">network_services_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint">notebooks_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpoint">oracle_database_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint">org_policy_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint">os_config_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint">os_login_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpoint">parallelstore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint">privateca_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpoint">privileged_access_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpoint">public_ca_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint">pubsub_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint">pubsub_lite_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint">recaptcha_enterprise_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint">redis_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason">request_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout">request_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint">resource_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint">resource_manager_v3_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint">runtimeconfig_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint">runtime_config_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint">secret_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpoint">secret_manager_regional_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpoint">secure_source_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint">security_center_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpoint">security_center_management_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpoint">security_center_v2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpoint">securityposture_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint">security_scanner_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint">service_directory_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint">service_management_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint">service_networking_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint">service_usage_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpoint">site_verification_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint">source_repo_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint">spanner_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint">sql_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint">storage_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpoint">storage_insights_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint">storage_transfer_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint">tags_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint">tags_location_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategy">terraform_attribution_label_addition_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint">tpu_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpoint">tpu_v2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpoint">transcoder_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomain">universe_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride">user_project_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint">vertex_ai_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpoint">vmwareengine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint">vpc_access_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpoint">workbench_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint">workflows_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint">workstations_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `access_approval_custom_endpoint_input`<sup>Optional</sup> <a name="access_approval_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpointInput"></a>

```python
access_approval_custom_endpoint_input: str
```

- *Type:* str

---

##### `access_context_manager_custom_endpoint_input`<sup>Optional</sup> <a name="access_context_manager_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpointInput"></a>

```python
access_context_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `active_directory_custom_endpoint_input`<sup>Optional</sup> <a name="active_directory_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpointInput"></a>

```python
active_directory_custom_endpoint_input: str
```

- *Type:* str

---

##### `add_terraform_attribution_label_input`<sup>Optional</sup> <a name="add_terraform_attribution_label_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabelInput"></a>

```python
add_terraform_attribution_label_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `alloydb_custom_endpoint_input`<sup>Optional</sup> <a name="alloydb_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpointInput"></a>

```python
alloydb_custom_endpoint_input: str
```

- *Type:* str

---

##### `api_gateway_custom_endpoint_input`<sup>Optional</sup> <a name="api_gateway_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpointInput"></a>

```python
api_gateway_custom_endpoint_input: str
```

- *Type:* str

---

##### `apigee_custom_endpoint_input`<sup>Optional</sup> <a name="apigee_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpointInput"></a>

```python
apigee_custom_endpoint_input: str
```

- *Type:* str

---

##### `apikeys_custom_endpoint_input`<sup>Optional</sup> <a name="apikeys_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpointInput"></a>

```python
apikeys_custom_endpoint_input: str
```

- *Type:* str

---

##### `app_engine_custom_endpoint_input`<sup>Optional</sup> <a name="app_engine_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpointInput"></a>

```python
app_engine_custom_endpoint_input: str
```

- *Type:* str

---

##### `apphub_custom_endpoint_input`<sup>Optional</sup> <a name="apphub_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpointInput"></a>

```python
apphub_custom_endpoint_input: str
```

- *Type:* str

---

##### `artifact_registry_custom_endpoint_input`<sup>Optional</sup> <a name="artifact_registry_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpointInput"></a>

```python
artifact_registry_custom_endpoint_input: str
```

- *Type:* str

---

##### `assured_workloads_custom_endpoint_input`<sup>Optional</sup> <a name="assured_workloads_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```python
assured_workloads_custom_endpoint_input: str
```

- *Type:* str

---

##### `backup_dr_custom_endpoint_input`<sup>Optional</sup> <a name="backup_dr_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpointInput"></a>

```python
backup_dr_custom_endpoint_input: str
```

- *Type:* str

---

##### `batching_input`<sup>Optional</sup> <a name="batching_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batchingInput"></a>

```python
batching_input: typing.Union[IResolvable, typing.List[GoogleBetaProviderBatching]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>]]

---

##### `beyondcorp_custom_endpoint_input`<sup>Optional</sup> <a name="beyondcorp_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpointInput"></a>

```python
beyondcorp_custom_endpoint_input: str
```

- *Type:* str

---

##### `biglake_custom_endpoint_input`<sup>Optional</sup> <a name="biglake_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpointInput"></a>

```python
biglake_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_analytics_hub_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_analytics_hub_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```python
bigquery_analytics_hub_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_connection_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_connection_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```python
bigquery_connection_custom_endpoint_input: str
```

- *Type:* str

---

##### `big_query_custom_endpoint_input`<sup>Optional</sup> <a name="big_query_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpointInput"></a>

```python
big_query_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_datapolicy_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_datapolicy_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```python
bigquery_datapolicy_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_data_transfer_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_data_transfer_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```python
bigquery_data_transfer_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_reservation_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_reservation_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpointInput"></a>

```python
bigquery_reservation_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigtable_custom_endpoint_input`<sup>Optional</sup> <a name="bigtable_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpointInput"></a>

```python
bigtable_custom_endpoint_input: str
```

- *Type:* str

---

##### `billing_custom_endpoint_input`<sup>Optional</sup> <a name="billing_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpointInput"></a>

```python
billing_custom_endpoint_input: str
```

- *Type:* str

---

##### `billing_project_input`<sup>Optional</sup> <a name="billing_project_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProjectInput"></a>

```python
billing_project_input: str
```

- *Type:* str

---

##### `binary_authorization_custom_endpoint_input`<sup>Optional</sup> <a name="binary_authorization_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```python
binary_authorization_custom_endpoint_input: str
```

- *Type:* str

---

##### `blockchain_node_engine_custom_endpoint_input`<sup>Optional</sup> <a name="blockchain_node_engine_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```python
blockchain_node_engine_custom_endpoint_input: str
```

- *Type:* str

---

##### `certificate_manager_custom_endpoint_input`<sup>Optional</sup> <a name="certificate_manager_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpointInput"></a>

```python
certificate_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `chronicle_custom_endpoint_input`<sup>Optional</sup> <a name="chronicle_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpointInput"></a>

```python
chronicle_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_asset_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_asset_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpointInput"></a>

```python
cloud_asset_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_billing_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_billing_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpointInput"></a>

```python
cloud_billing_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_build_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_build_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpointInput"></a>

```python
cloud_build_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloudbuildv2_custom_endpoint_input`<sup>Optional</sup> <a name="cloudbuildv2_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpointInput"></a>

```python
cloudbuildv2_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_build_worker_pool_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_build_worker_pool_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpointInput"></a>

```python
cloud_build_worker_pool_custom_endpoint_input: str
```

- *Type:* str

---

##### `clouddeploy_custom_endpoint_input`<sup>Optional</sup> <a name="clouddeploy_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpointInput"></a>

```python
clouddeploy_custom_endpoint_input: str
```

- *Type:* str

---

##### `clouddomains_custom_endpoint_input`<sup>Optional</sup> <a name="clouddomains_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpointInput"></a>

```python
clouddomains_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloudfunctions2_custom_endpoint_input`<sup>Optional</sup> <a name="cloudfunctions2_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpointInput"></a>

```python
cloudfunctions2_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_functions_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_functions_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpointInput"></a>

```python
cloud_functions_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_identity_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_identity_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpointInput"></a>

```python
cloud_identity_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_ids_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_ids_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpointInput"></a>

```python
cloud_ids_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_quotas_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_quotas_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpointInput"></a>

```python
cloud_quotas_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_resource_manager_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_resource_manager_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```python
cloud_resource_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_run_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_run_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpointInput"></a>

```python
cloud_run_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_run_v2_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_run_v2_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpointInput"></a>

```python
cloud_run_v2_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_scheduler_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_scheduler_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpointInput"></a>

```python
cloud_scheduler_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_tasks_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_tasks_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpointInput"></a>

```python
cloud_tasks_custom_endpoint_input: str
```

- *Type:* str

---

##### `composer_custom_endpoint_input`<sup>Optional</sup> <a name="composer_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpointInput"></a>

```python
composer_custom_endpoint_input: str
```

- *Type:* str

---

##### `compute_custom_endpoint_input`<sup>Optional</sup> <a name="compute_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpointInput"></a>

```python
compute_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_analysis_custom_endpoint_input`<sup>Optional</sup> <a name="container_analysis_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpointInput"></a>

```python
container_analysis_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_attached_custom_endpoint_input`<sup>Optional</sup> <a name="container_attached_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpointInput"></a>

```python
container_attached_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_aws_custom_endpoint_input`<sup>Optional</sup> <a name="container_aws_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpointInput"></a>

```python
container_aws_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_azure_custom_endpoint_input`<sup>Optional</sup> <a name="container_azure_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpointInput"></a>

```python
container_azure_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_custom_endpoint_input`<sup>Optional</sup> <a name="container_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpointInput"></a>

```python
container_custom_endpoint_input: str
```

- *Type:* str

---

##### `core_billing_custom_endpoint_input`<sup>Optional</sup> <a name="core_billing_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpointInput"></a>

```python
core_billing_custom_endpoint_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `database_migration_service_custom_endpoint_input`<sup>Optional</sup> <a name="database_migration_service_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```python
database_migration_service_custom_endpoint_input: str
```

- *Type:* str

---

##### `data_catalog_custom_endpoint_input`<sup>Optional</sup> <a name="data_catalog_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpointInput"></a>

```python
data_catalog_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataflow_custom_endpoint_input`<sup>Optional</sup> <a name="dataflow_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpointInput"></a>

```python
dataflow_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataform_custom_endpoint_input`<sup>Optional</sup> <a name="dataform_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpointInput"></a>

```python
dataform_custom_endpoint_input: str
```

- *Type:* str

---

##### `data_fusion_custom_endpoint_input`<sup>Optional</sup> <a name="data_fusion_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpointInput"></a>

```python
data_fusion_custom_endpoint_input: str
```

- *Type:* str

---

##### `data_loss_prevention_custom_endpoint_input`<sup>Optional</sup> <a name="data_loss_prevention_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpointInput"></a>

```python
data_loss_prevention_custom_endpoint_input: str
```

- *Type:* str

---

##### `data_pipeline_custom_endpoint_input`<sup>Optional</sup> <a name="data_pipeline_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpointInput"></a>

```python
data_pipeline_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataplex_custom_endpoint_input`<sup>Optional</sup> <a name="dataplex_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpointInput"></a>

```python
dataplex_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataproc_custom_endpoint_input`<sup>Optional</sup> <a name="dataproc_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpointInput"></a>

```python
dataproc_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataproc_gdc_custom_endpoint_input`<sup>Optional</sup> <a name="dataproc_gdc_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpointInput"></a>

```python
dataproc_gdc_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataproc_metastore_custom_endpoint_input`<sup>Optional</sup> <a name="dataproc_metastore_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```python
dataproc_metastore_custom_endpoint_input: str
```

- *Type:* str

---

##### `datastream_custom_endpoint_input`<sup>Optional</sup> <a name="datastream_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpointInput"></a>

```python
datastream_custom_endpoint_input: str
```

- *Type:* str

---

##### `default_labels_input`<sup>Optional</sup> <a name="default_labels_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabelsInput"></a>

```python
default_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_manager_custom_endpoint_input`<sup>Optional</sup> <a name="deployment_manager_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpointInput"></a>

```python
deployment_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `developer_connect_custom_endpoint_input`<sup>Optional</sup> <a name="developer_connect_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpointInput"></a>

```python
developer_connect_custom_endpoint_input: str
```

- *Type:* str

---

##### `dialogflow_custom_endpoint_input`<sup>Optional</sup> <a name="dialogflow_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpointInput"></a>

```python
dialogflow_custom_endpoint_input: str
```

- *Type:* str

---

##### `dialogflow_cx_custom_endpoint_input`<sup>Optional</sup> <a name="dialogflow_cx_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpointInput"></a>

```python
dialogflow_cx_custom_endpoint_input: str
```

- *Type:* str

---

##### `discovery_engine_custom_endpoint_input`<sup>Optional</sup> <a name="discovery_engine_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpointInput"></a>

```python
discovery_engine_custom_endpoint_input: str
```

- *Type:* str

---

##### `dns_custom_endpoint_input`<sup>Optional</sup> <a name="dns_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpointInput"></a>

```python
dns_custom_endpoint_input: str
```

- *Type:* str

---

##### `document_ai_custom_endpoint_input`<sup>Optional</sup> <a name="document_ai_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpointInput"></a>

```python
document_ai_custom_endpoint_input: str
```

- *Type:* str

---

##### `document_ai_warehouse_custom_endpoint_input`<sup>Optional</sup> <a name="document_ai_warehouse_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```python
document_ai_warehouse_custom_endpoint_input: str
```

- *Type:* str

---

##### `edgecontainer_custom_endpoint_input`<sup>Optional</sup> <a name="edgecontainer_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpointInput"></a>

```python
edgecontainer_custom_endpoint_input: str
```

- *Type:* str

---

##### `edgenetwork_custom_endpoint_input`<sup>Optional</sup> <a name="edgenetwork_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpointInput"></a>

```python
edgenetwork_custom_endpoint_input: str
```

- *Type:* str

---

##### `essential_contacts_custom_endpoint_input`<sup>Optional</sup> <a name="essential_contacts_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpointInput"></a>

```python
essential_contacts_custom_endpoint_input: str
```

- *Type:* str

---

##### `eventarc_custom_endpoint_input`<sup>Optional</sup> <a name="eventarc_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpointInput"></a>

```python
eventarc_custom_endpoint_input: str
```

- *Type:* str

---

##### `filestore_custom_endpoint_input`<sup>Optional</sup> <a name="filestore_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpointInput"></a>

```python
filestore_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebase_app_check_custom_endpoint_input`<sup>Optional</sup> <a name="firebase_app_check_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```python
firebase_app_check_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebase_custom_endpoint_input`<sup>Optional</sup> <a name="firebase_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpointInput"></a>

```python
firebase_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebase_database_custom_endpoint_input`<sup>Optional</sup> <a name="firebase_database_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpointInput"></a>

```python
firebase_database_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebase_extensions_custom_endpoint_input`<sup>Optional</sup> <a name="firebase_extensions_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpointInput"></a>

```python
firebase_extensions_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebase_hosting_custom_endpoint_input`<sup>Optional</sup> <a name="firebase_hosting_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpointInput"></a>

```python
firebase_hosting_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebaserules_custom_endpoint_input`<sup>Optional</sup> <a name="firebaserules_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpointInput"></a>

```python
firebaserules_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebase_storage_custom_endpoint_input`<sup>Optional</sup> <a name="firebase_storage_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpointInput"></a>

```python
firebase_storage_custom_endpoint_input: str
```

- *Type:* str

---

##### `firestore_custom_endpoint_input`<sup>Optional</sup> <a name="firestore_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpointInput"></a>

```python
firestore_custom_endpoint_input: str
```

- *Type:* str

---

##### `gemini_custom_endpoint_input`<sup>Optional</sup> <a name="gemini_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpointInput"></a>

```python
gemini_custom_endpoint_input: str
```

- *Type:* str

---

##### `gke_backup_custom_endpoint_input`<sup>Optional</sup> <a name="gke_backup_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpointInput"></a>

```python
gke_backup_custom_endpoint_input: str
```

- *Type:* str

---

##### `gke_hub2_custom_endpoint_input`<sup>Optional</sup> <a name="gke_hub2_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpointInput"></a>

```python
gke_hub2_custom_endpoint_input: str
```

- *Type:* str

---

##### `gke_hub_custom_endpoint_input`<sup>Optional</sup> <a name="gke_hub_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpointInput"></a>

```python
gke_hub_custom_endpoint_input: str
```

- *Type:* str

---

##### `gkehub_feature_custom_endpoint_input`<sup>Optional</sup> <a name="gkehub_feature_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpointInput"></a>

```python
gkehub_feature_custom_endpoint_input: str
```

- *Type:* str

---

##### `gkeonprem_custom_endpoint_input`<sup>Optional</sup> <a name="gkeonprem_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpointInput"></a>

```python
gkeonprem_custom_endpoint_input: str
```

- *Type:* str

---

##### `healthcare_custom_endpoint_input`<sup>Optional</sup> <a name="healthcare_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpointInput"></a>

```python
healthcare_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam2_custom_endpoint_input`<sup>Optional</sup> <a name="iam2_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpointInput"></a>

```python
iam2_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam3_custom_endpoint_input`<sup>Optional</sup> <a name="iam3_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpointInput"></a>

```python
iam3_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam_beta_custom_endpoint_input`<sup>Optional</sup> <a name="iam_beta_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpointInput"></a>

```python
iam_beta_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam_credentials_custom_endpoint_input`<sup>Optional</sup> <a name="iam_credentials_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpointInput"></a>

```python
iam_credentials_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam_custom_endpoint_input`<sup>Optional</sup> <a name="iam_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpointInput"></a>

```python
iam_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam_workforce_pool_custom_endpoint_input`<sup>Optional</sup> <a name="iam_workforce_pool_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```python
iam_workforce_pool_custom_endpoint_input: str
```

- *Type:* str

---

##### `iap_custom_endpoint_input`<sup>Optional</sup> <a name="iap_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpointInput"></a>

```python
iap_custom_endpoint_input: str
```

- *Type:* str

---

##### `identity_platform_custom_endpoint_input`<sup>Optional</sup> <a name="identity_platform_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpointInput"></a>

```python
identity_platform_custom_endpoint_input: str
```

- *Type:* str

---

##### `impersonate_service_account_delegates_input`<sup>Optional</sup> <a name="impersonate_service_account_delegates_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegatesInput"></a>

```python
impersonate_service_account_delegates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `impersonate_service_account_input`<sup>Optional</sup> <a name="impersonate_service_account_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountInput"></a>

```python
impersonate_service_account_input: str
```

- *Type:* str

---

##### `integration_connectors_custom_endpoint_input`<sup>Optional</sup> <a name="integration_connectors_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpointInput"></a>

```python
integration_connectors_custom_endpoint_input: str
```

- *Type:* str

---

##### `integrations_custom_endpoint_input`<sup>Optional</sup> <a name="integrations_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpointInput"></a>

```python
integrations_custom_endpoint_input: str
```

- *Type:* str

---

##### `kms_custom_endpoint_input`<sup>Optional</sup> <a name="kms_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpointInput"></a>

```python
kms_custom_endpoint_input: str
```

- *Type:* str

---

##### `logging_custom_endpoint_input`<sup>Optional</sup> <a name="logging_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpointInput"></a>

```python
logging_custom_endpoint_input: str
```

- *Type:* str

---

##### `looker_custom_endpoint_input`<sup>Optional</sup> <a name="looker_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpointInput"></a>

```python
looker_custom_endpoint_input: str
```

- *Type:* str

---

##### `managed_kafka_custom_endpoint_input`<sup>Optional</sup> <a name="managed_kafka_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpointInput"></a>

```python
managed_kafka_custom_endpoint_input: str
```

- *Type:* str

---

##### `memcache_custom_endpoint_input`<sup>Optional</sup> <a name="memcache_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpointInput"></a>

```python
memcache_custom_endpoint_input: str
```

- *Type:* str

---

##### `memorystore_custom_endpoint_input`<sup>Optional</sup> <a name="memorystore_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpointInput"></a>

```python
memorystore_custom_endpoint_input: str
```

- *Type:* str

---

##### `migration_center_custom_endpoint_input`<sup>Optional</sup> <a name="migration_center_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpointInput"></a>

```python
migration_center_custom_endpoint_input: str
```

- *Type:* str

---

##### `ml_engine_custom_endpoint_input`<sup>Optional</sup> <a name="ml_engine_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpointInput"></a>

```python
ml_engine_custom_endpoint_input: str
```

- *Type:* str

---

##### `monitoring_custom_endpoint_input`<sup>Optional</sup> <a name="monitoring_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpointInput"></a>

```python
monitoring_custom_endpoint_input: str
```

- *Type:* str

---

##### `netapp_custom_endpoint_input`<sup>Optional</sup> <a name="netapp_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpointInput"></a>

```python
netapp_custom_endpoint_input: str
```

- *Type:* str

---

##### `network_connectivity_custom_endpoint_input`<sup>Optional</sup> <a name="network_connectivity_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpointInput"></a>

```python
network_connectivity_custom_endpoint_input: str
```

- *Type:* str

---

##### `network_management_custom_endpoint_input`<sup>Optional</sup> <a name="network_management_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpointInput"></a>

```python
network_management_custom_endpoint_input: str
```

- *Type:* str

---

##### `network_security_custom_endpoint_input`<sup>Optional</sup> <a name="network_security_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpointInput"></a>

```python
network_security_custom_endpoint_input: str
```

- *Type:* str

---

##### `network_services_custom_endpoint_input`<sup>Optional</sup> <a name="network_services_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpointInput"></a>

```python
network_services_custom_endpoint_input: str
```

- *Type:* str

---

##### `notebooks_custom_endpoint_input`<sup>Optional</sup> <a name="notebooks_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpointInput"></a>

```python
notebooks_custom_endpoint_input: str
```

- *Type:* str

---

##### `oracle_database_custom_endpoint_input`<sup>Optional</sup> <a name="oracle_database_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpointInput"></a>

```python
oracle_database_custom_endpoint_input: str
```

- *Type:* str

---

##### `org_policy_custom_endpoint_input`<sup>Optional</sup> <a name="org_policy_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpointInput"></a>

```python
org_policy_custom_endpoint_input: str
```

- *Type:* str

---

##### `os_config_custom_endpoint_input`<sup>Optional</sup> <a name="os_config_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpointInput"></a>

```python
os_config_custom_endpoint_input: str
```

- *Type:* str

---

##### `os_login_custom_endpoint_input`<sup>Optional</sup> <a name="os_login_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpointInput"></a>

```python
os_login_custom_endpoint_input: str
```

- *Type:* str

---

##### `parallelstore_custom_endpoint_input`<sup>Optional</sup> <a name="parallelstore_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpointInput"></a>

```python
parallelstore_custom_endpoint_input: str
```

- *Type:* str

---

##### `privateca_custom_endpoint_input`<sup>Optional</sup> <a name="privateca_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpointInput"></a>

```python
privateca_custom_endpoint_input: str
```

- *Type:* str

---

##### `privileged_access_manager_custom_endpoint_input`<sup>Optional</sup> <a name="privileged_access_manager_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpointInput"></a>

```python
privileged_access_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `public_ca_custom_endpoint_input`<sup>Optional</sup> <a name="public_ca_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpointInput"></a>

```python
public_ca_custom_endpoint_input: str
```

- *Type:* str

---

##### `pubsub_custom_endpoint_input`<sup>Optional</sup> <a name="pubsub_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpointInput"></a>

```python
pubsub_custom_endpoint_input: str
```

- *Type:* str

---

##### `pubsub_lite_custom_endpoint_input`<sup>Optional</sup> <a name="pubsub_lite_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpointInput"></a>

```python
pubsub_lite_custom_endpoint_input: str
```

- *Type:* str

---

##### `recaptcha_enterprise_custom_endpoint_input`<sup>Optional</sup> <a name="recaptcha_enterprise_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```python
recaptcha_enterprise_custom_endpoint_input: str
```

- *Type:* str

---

##### `redis_custom_endpoint_input`<sup>Optional</sup> <a name="redis_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpointInput"></a>

```python
redis_custom_endpoint_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `request_reason_input`<sup>Optional</sup> <a name="request_reason_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReasonInput"></a>

```python
request_reason_input: str
```

- *Type:* str

---

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeoutInput"></a>

```python
request_timeout_input: str
```

- *Type:* str

---

##### `resource_manager_custom_endpoint_input`<sup>Optional</sup> <a name="resource_manager_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpointInput"></a>

```python
resource_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `resource_manager_v3_custom_endpoint_input`<sup>Optional</sup> <a name="resource_manager_v3_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpointInput"></a>

```python
resource_manager_v3_custom_endpoint_input: str
```

- *Type:* str

---

##### `runtimeconfig_custom_endpoint_input`<sup>Optional</sup> <a name="runtimeconfig_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpointInput"></a>

```python
runtimeconfig_custom_endpoint_input: str
```

- *Type:* str

---

##### `runtime_config_custom_endpoint_input`<sup>Optional</sup> <a name="runtime_config_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpointInput"></a>

```python
runtime_config_custom_endpoint_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_manager_custom_endpoint_input`<sup>Optional</sup> <a name="secret_manager_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpointInput"></a>

```python
secret_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `secret_manager_regional_custom_endpoint_input`<sup>Optional</sup> <a name="secret_manager_regional_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpointInput"></a>

```python
secret_manager_regional_custom_endpoint_input: str
```

- *Type:* str

---

##### `secure_source_manager_custom_endpoint_input`<sup>Optional</sup> <a name="secure_source_manager_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpointInput"></a>

```python
secure_source_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `security_center_custom_endpoint_input`<sup>Optional</sup> <a name="security_center_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpointInput"></a>

```python
security_center_custom_endpoint_input: str
```

- *Type:* str

---

##### `security_center_management_custom_endpoint_input`<sup>Optional</sup> <a name="security_center_management_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpointInput"></a>

```python
security_center_management_custom_endpoint_input: str
```

- *Type:* str

---

##### `security_center_v2_custom_endpoint_input`<sup>Optional</sup> <a name="security_center_v2_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpointInput"></a>

```python
security_center_v2_custom_endpoint_input: str
```

- *Type:* str

---

##### `securityposture_custom_endpoint_input`<sup>Optional</sup> <a name="securityposture_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpointInput"></a>

```python
securityposture_custom_endpoint_input: str
```

- *Type:* str

---

##### `security_scanner_custom_endpoint_input`<sup>Optional</sup> <a name="security_scanner_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpointInput"></a>

```python
security_scanner_custom_endpoint_input: str
```

- *Type:* str

---

##### `service_directory_custom_endpoint_input`<sup>Optional</sup> <a name="service_directory_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpointInput"></a>

```python
service_directory_custom_endpoint_input: str
```

- *Type:* str

---

##### `service_management_custom_endpoint_input`<sup>Optional</sup> <a name="service_management_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpointInput"></a>

```python
service_management_custom_endpoint_input: str
```

- *Type:* str

---

##### `service_networking_custom_endpoint_input`<sup>Optional</sup> <a name="service_networking_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpointInput"></a>

```python
service_networking_custom_endpoint_input: str
```

- *Type:* str

---

##### `service_usage_custom_endpoint_input`<sup>Optional</sup> <a name="service_usage_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpointInput"></a>

```python
service_usage_custom_endpoint_input: str
```

- *Type:* str

---

##### `site_verification_custom_endpoint_input`<sup>Optional</sup> <a name="site_verification_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpointInput"></a>

```python
site_verification_custom_endpoint_input: str
```

- *Type:* str

---

##### `source_repo_custom_endpoint_input`<sup>Optional</sup> <a name="source_repo_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpointInput"></a>

```python
source_repo_custom_endpoint_input: str
```

- *Type:* str

---

##### `spanner_custom_endpoint_input`<sup>Optional</sup> <a name="spanner_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpointInput"></a>

```python
spanner_custom_endpoint_input: str
```

- *Type:* str

---

##### `sql_custom_endpoint_input`<sup>Optional</sup> <a name="sql_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpointInput"></a>

```python
sql_custom_endpoint_input: str
```

- *Type:* str

---

##### `storage_custom_endpoint_input`<sup>Optional</sup> <a name="storage_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpointInput"></a>

```python
storage_custom_endpoint_input: str
```

- *Type:* str

---

##### `storage_insights_custom_endpoint_input`<sup>Optional</sup> <a name="storage_insights_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpointInput"></a>

```python
storage_insights_custom_endpoint_input: str
```

- *Type:* str

---

##### `storage_transfer_custom_endpoint_input`<sup>Optional</sup> <a name="storage_transfer_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpointInput"></a>

```python
storage_transfer_custom_endpoint_input: str
```

- *Type:* str

---

##### `tags_custom_endpoint_input`<sup>Optional</sup> <a name="tags_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpointInput"></a>

```python
tags_custom_endpoint_input: str
```

- *Type:* str

---

##### `tags_location_custom_endpoint_input`<sup>Optional</sup> <a name="tags_location_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpointInput"></a>

```python
tags_location_custom_endpoint_input: str
```

- *Type:* str

---

##### `terraform_attribution_label_addition_strategy_input`<sup>Optional</sup> <a name="terraform_attribution_label_addition_strategy_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```python
terraform_attribution_label_addition_strategy_input: str
```

- *Type:* str

---

##### `tpu_custom_endpoint_input`<sup>Optional</sup> <a name="tpu_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpointInput"></a>

```python
tpu_custom_endpoint_input: str
```

- *Type:* str

---

##### `tpu_v2_custom_endpoint_input`<sup>Optional</sup> <a name="tpu_v2_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpointInput"></a>

```python
tpu_v2_custom_endpoint_input: str
```

- *Type:* str

---

##### `transcoder_custom_endpoint_input`<sup>Optional</sup> <a name="transcoder_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpointInput"></a>

```python
transcoder_custom_endpoint_input: str
```

- *Type:* str

---

##### `universe_domain_input`<sup>Optional</sup> <a name="universe_domain_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomainInput"></a>

```python
universe_domain_input: str
```

- *Type:* str

---

##### `user_project_override_input`<sup>Optional</sup> <a name="user_project_override_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverrideInput"></a>

```python
user_project_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vertex_ai_custom_endpoint_input`<sup>Optional</sup> <a name="vertex_ai_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpointInput"></a>

```python
vertex_ai_custom_endpoint_input: str
```

- *Type:* str

---

##### `vmwareengine_custom_endpoint_input`<sup>Optional</sup> <a name="vmwareengine_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpointInput"></a>

```python
vmwareengine_custom_endpoint_input: str
```

- *Type:* str

---

##### `vpc_access_custom_endpoint_input`<sup>Optional</sup> <a name="vpc_access_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpointInput"></a>

```python
vpc_access_custom_endpoint_input: str
```

- *Type:* str

---

##### `workbench_custom_endpoint_input`<sup>Optional</sup> <a name="workbench_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpointInput"></a>

```python
workbench_custom_endpoint_input: str
```

- *Type:* str

---

##### `workflows_custom_endpoint_input`<sup>Optional</sup> <a name="workflows_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpointInput"></a>

```python
workflows_custom_endpoint_input: str
```

- *Type:* str

---

##### `workstations_custom_endpoint_input`<sup>Optional</sup> <a name="workstations_custom_endpoint_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpointInput"></a>

```python
workstations_custom_endpoint_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `access_approval_custom_endpoint`<sup>Optional</sup> <a name="access_approval_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessApprovalCustomEndpoint"></a>

```python
access_approval_custom_endpoint: str
```

- *Type:* str

---

##### `access_context_manager_custom_endpoint`<sup>Optional</sup> <a name="access_context_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessContextManagerCustomEndpoint"></a>

```python
access_context_manager_custom_endpoint: str
```

- *Type:* str

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `active_directory_custom_endpoint`<sup>Optional</sup> <a name="active_directory_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.activeDirectoryCustomEndpoint"></a>

```python
active_directory_custom_endpoint: str
```

- *Type:* str

---

##### `add_terraform_attribution_label`<sup>Optional</sup> <a name="add_terraform_attribution_label" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.addTerraformAttributionLabel"></a>

```python
add_terraform_attribution_label: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alloydb_custom_endpoint`<sup>Optional</sup> <a name="alloydb_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.alloydbCustomEndpoint"></a>

```python
alloydb_custom_endpoint: str
```

- *Type:* str

---

##### `api_gateway_custom_endpoint`<sup>Optional</sup> <a name="api_gateway_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apiGatewayCustomEndpoint"></a>

```python
api_gateway_custom_endpoint: str
```

- *Type:* str

---

##### `apigee_custom_endpoint`<sup>Optional</sup> <a name="apigee_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apigeeCustomEndpoint"></a>

```python
apigee_custom_endpoint: str
```

- *Type:* str

---

##### `apikeys_custom_endpoint`<sup>Optional</sup> <a name="apikeys_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apikeysCustomEndpoint"></a>

```python
apikeys_custom_endpoint: str
```

- *Type:* str

---

##### `app_engine_custom_endpoint`<sup>Optional</sup> <a name="app_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.appEngineCustomEndpoint"></a>

```python
app_engine_custom_endpoint: str
```

- *Type:* str

---

##### `apphub_custom_endpoint`<sup>Optional</sup> <a name="apphub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.apphubCustomEndpoint"></a>

```python
apphub_custom_endpoint: str
```

- *Type:* str

---

##### `artifact_registry_custom_endpoint`<sup>Optional</sup> <a name="artifact_registry_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.artifactRegistryCustomEndpoint"></a>

```python
artifact_registry_custom_endpoint: str
```

- *Type:* str

---

##### `assured_workloads_custom_endpoint`<sup>Optional</sup> <a name="assured_workloads_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.assuredWorkloadsCustomEndpoint"></a>

```python
assured_workloads_custom_endpoint: str
```

- *Type:* str

---

##### `backup_dr_custom_endpoint`<sup>Optional</sup> <a name="backup_dr_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.backupDrCustomEndpoint"></a>

```python
backup_dr_custom_endpoint: str
```

- *Type:* str

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.batching"></a>

```python
batching: typing.Union[IResolvable, typing.List[GoogleBetaProviderBatching]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>]]

---

##### `beyondcorp_custom_endpoint`<sup>Optional</sup> <a name="beyondcorp_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.beyondcorpCustomEndpoint"></a>

```python
beyondcorp_custom_endpoint: str
```

- *Type:* str

---

##### `biglake_custom_endpoint`<sup>Optional</sup> <a name="biglake_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.biglakeCustomEndpoint"></a>

```python
biglake_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_analytics_hub_custom_endpoint`<sup>Optional</sup> <a name="bigquery_analytics_hub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```python
bigquery_analytics_hub_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_connection_custom_endpoint`<sup>Optional</sup> <a name="bigquery_connection_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryConnectionCustomEndpoint"></a>

```python
bigquery_connection_custom_endpoint: str
```

- *Type:* str

---

##### `big_query_custom_endpoint`<sup>Optional</sup> <a name="big_query_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigQueryCustomEndpoint"></a>

```python
big_query_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_datapolicy_custom_endpoint`<sup>Optional</sup> <a name="bigquery_datapolicy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```python
bigquery_datapolicy_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_data_transfer_custom_endpoint`<sup>Optional</sup> <a name="bigquery_data_transfer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```python
bigquery_data_transfer_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_reservation_custom_endpoint`<sup>Optional</sup> <a name="bigquery_reservation_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigqueryReservationCustomEndpoint"></a>

```python
bigquery_reservation_custom_endpoint: str
```

- *Type:* str

---

##### `bigtable_custom_endpoint`<sup>Optional</sup> <a name="bigtable_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.bigtableCustomEndpoint"></a>

```python
bigtable_custom_endpoint: str
```

- *Type:* str

---

##### `billing_custom_endpoint`<sup>Optional</sup> <a name="billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingCustomEndpoint"></a>

```python
billing_custom_endpoint: str
```

- *Type:* str

---

##### `billing_project`<sup>Optional</sup> <a name="billing_project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

---

##### `binary_authorization_custom_endpoint`<sup>Optional</sup> <a name="binary_authorization_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.binaryAuthorizationCustomEndpoint"></a>

```python
binary_authorization_custom_endpoint: str
```

- *Type:* str

---

##### `blockchain_node_engine_custom_endpoint`<sup>Optional</sup> <a name="blockchain_node_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```python
blockchain_node_engine_custom_endpoint: str
```

- *Type:* str

---

##### `certificate_manager_custom_endpoint`<sup>Optional</sup> <a name="certificate_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.certificateManagerCustomEndpoint"></a>

```python
certificate_manager_custom_endpoint: str
```

- *Type:* str

---

##### `chronicle_custom_endpoint`<sup>Optional</sup> <a name="chronicle_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.chronicleCustomEndpoint"></a>

```python
chronicle_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_asset_custom_endpoint`<sup>Optional</sup> <a name="cloud_asset_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudAssetCustomEndpoint"></a>

```python
cloud_asset_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_billing_custom_endpoint`<sup>Optional</sup> <a name="cloud_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBillingCustomEndpoint"></a>

```python
cloud_billing_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_build_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildCustomEndpoint"></a>

```python
cloud_build_custom_endpoint: str
```

- *Type:* str

---

##### `cloudbuildv2_custom_endpoint`<sup>Optional</sup> <a name="cloudbuildv2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudbuildv2CustomEndpoint"></a>

```python
cloudbuildv2_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_build_worker_pool_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_worker_pool_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```python
cloud_build_worker_pool_custom_endpoint: str
```

- *Type:* str

---

##### `clouddeploy_custom_endpoint`<sup>Optional</sup> <a name="clouddeploy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddeployCustomEndpoint"></a>

```python
clouddeploy_custom_endpoint: str
```

- *Type:* str

---

##### `clouddomains_custom_endpoint`<sup>Optional</sup> <a name="clouddomains_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.clouddomainsCustomEndpoint"></a>

```python
clouddomains_custom_endpoint: str
```

- *Type:* str

---

##### `cloudfunctions2_custom_endpoint`<sup>Optional</sup> <a name="cloudfunctions2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudfunctions2CustomEndpoint"></a>

```python
cloudfunctions2_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_functions_custom_endpoint`<sup>Optional</sup> <a name="cloud_functions_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudFunctionsCustomEndpoint"></a>

```python
cloud_functions_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_identity_custom_endpoint`<sup>Optional</sup> <a name="cloud_identity_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdentityCustomEndpoint"></a>

```python
cloud_identity_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_ids_custom_endpoint`<sup>Optional</sup> <a name="cloud_ids_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudIdsCustomEndpoint"></a>

```python
cloud_ids_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_quotas_custom_endpoint`<sup>Optional</sup> <a name="cloud_quotas_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudQuotasCustomEndpoint"></a>

```python
cloud_quotas_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_resource_manager_custom_endpoint`<sup>Optional</sup> <a name="cloud_resource_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudResourceManagerCustomEndpoint"></a>

```python
cloud_resource_manager_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_run_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunCustomEndpoint"></a>

```python
cloud_run_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_run_v2_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudRunV2CustomEndpoint"></a>

```python
cloud_run_v2_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_scheduler_custom_endpoint`<sup>Optional</sup> <a name="cloud_scheduler_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudSchedulerCustomEndpoint"></a>

```python
cloud_scheduler_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_tasks_custom_endpoint`<sup>Optional</sup> <a name="cloud_tasks_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.cloudTasksCustomEndpoint"></a>

```python
cloud_tasks_custom_endpoint: str
```

- *Type:* str

---

##### `composer_custom_endpoint`<sup>Optional</sup> <a name="composer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.composerCustomEndpoint"></a>

```python
composer_custom_endpoint: str
```

- *Type:* str

---

##### `compute_custom_endpoint`<sup>Optional</sup> <a name="compute_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.computeCustomEndpoint"></a>

```python
compute_custom_endpoint: str
```

- *Type:* str

---

##### `container_analysis_custom_endpoint`<sup>Optional</sup> <a name="container_analysis_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAnalysisCustomEndpoint"></a>

```python
container_analysis_custom_endpoint: str
```

- *Type:* str

---

##### `container_attached_custom_endpoint`<sup>Optional</sup> <a name="container_attached_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAttachedCustomEndpoint"></a>

```python
container_attached_custom_endpoint: str
```

- *Type:* str

---

##### `container_aws_custom_endpoint`<sup>Optional</sup> <a name="container_aws_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAwsCustomEndpoint"></a>

```python
container_aws_custom_endpoint: str
```

- *Type:* str

---

##### `container_azure_custom_endpoint`<sup>Optional</sup> <a name="container_azure_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerAzureCustomEndpoint"></a>

```python
container_azure_custom_endpoint: str
```

- *Type:* str

---

##### `container_custom_endpoint`<sup>Optional</sup> <a name="container_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.containerCustomEndpoint"></a>

```python
container_custom_endpoint: str
```

- *Type:* str

---

##### `core_billing_custom_endpoint`<sup>Optional</sup> <a name="core_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.coreBillingCustomEndpoint"></a>

```python
core_billing_custom_endpoint: str
```

- *Type:* str

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `database_migration_service_custom_endpoint`<sup>Optional</sup> <a name="database_migration_service_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```python
database_migration_service_custom_endpoint: str
```

- *Type:* str

---

##### `data_catalog_custom_endpoint`<sup>Optional</sup> <a name="data_catalog_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataCatalogCustomEndpoint"></a>

```python
data_catalog_custom_endpoint: str
```

- *Type:* str

---

##### `dataflow_custom_endpoint`<sup>Optional</sup> <a name="dataflow_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataflowCustomEndpoint"></a>

```python
dataflow_custom_endpoint: str
```

- *Type:* str

---

##### `dataform_custom_endpoint`<sup>Optional</sup> <a name="dataform_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataformCustomEndpoint"></a>

```python
dataform_custom_endpoint: str
```

- *Type:* str

---

##### `data_fusion_custom_endpoint`<sup>Optional</sup> <a name="data_fusion_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataFusionCustomEndpoint"></a>

```python
data_fusion_custom_endpoint: str
```

- *Type:* str

---

##### `data_loss_prevention_custom_endpoint`<sup>Optional</sup> <a name="data_loss_prevention_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataLossPreventionCustomEndpoint"></a>

```python
data_loss_prevention_custom_endpoint: str
```

- *Type:* str

---

##### `data_pipeline_custom_endpoint`<sup>Optional</sup> <a name="data_pipeline_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataPipelineCustomEndpoint"></a>

```python
data_pipeline_custom_endpoint: str
```

- *Type:* str

---

##### `dataplex_custom_endpoint`<sup>Optional</sup> <a name="dataplex_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataplexCustomEndpoint"></a>

```python
dataplex_custom_endpoint: str
```

- *Type:* str

---

##### `dataproc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocCustomEndpoint"></a>

```python
dataproc_custom_endpoint: str
```

- *Type:* str

---

##### `dataproc_gdc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_gdc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocGdcCustomEndpoint"></a>

```python
dataproc_gdc_custom_endpoint: str
```

- *Type:* str

---

##### `dataproc_metastore_custom_endpoint`<sup>Optional</sup> <a name="dataproc_metastore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dataprocMetastoreCustomEndpoint"></a>

```python
dataproc_metastore_custom_endpoint: str
```

- *Type:* str

---

##### `datastream_custom_endpoint`<sup>Optional</sup> <a name="datastream_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.datastreamCustomEndpoint"></a>

```python
datastream_custom_endpoint: str
```

- *Type:* str

---

##### `default_labels`<sup>Optional</sup> <a name="default_labels" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.defaultLabels"></a>

```python
default_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_manager_custom_endpoint`<sup>Optional</sup> <a name="deployment_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.deploymentManagerCustomEndpoint"></a>

```python
deployment_manager_custom_endpoint: str
```

- *Type:* str

---

##### `developer_connect_custom_endpoint`<sup>Optional</sup> <a name="developer_connect_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.developerConnectCustomEndpoint"></a>

```python
developer_connect_custom_endpoint: str
```

- *Type:* str

---

##### `dialogflow_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCustomEndpoint"></a>

```python
dialogflow_custom_endpoint: str
```

- *Type:* str

---

##### `dialogflow_cx_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_cx_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dialogflowCxCustomEndpoint"></a>

```python
dialogflow_cx_custom_endpoint: str
```

- *Type:* str

---

##### `discovery_engine_custom_endpoint`<sup>Optional</sup> <a name="discovery_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.discoveryEngineCustomEndpoint"></a>

```python
discovery_engine_custom_endpoint: str
```

- *Type:* str

---

##### `dns_custom_endpoint`<sup>Optional</sup> <a name="dns_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.dnsCustomEndpoint"></a>

```python
dns_custom_endpoint: str
```

- *Type:* str

---

##### `document_ai_custom_endpoint`<sup>Optional</sup> <a name="document_ai_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiCustomEndpoint"></a>

```python
document_ai_custom_endpoint: str
```

- *Type:* str

---

##### `document_ai_warehouse_custom_endpoint`<sup>Optional</sup> <a name="document_ai_warehouse_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.documentAiWarehouseCustomEndpoint"></a>

```python
document_ai_warehouse_custom_endpoint: str
```

- *Type:* str

---

##### `edgecontainer_custom_endpoint`<sup>Optional</sup> <a name="edgecontainer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgecontainerCustomEndpoint"></a>

```python
edgecontainer_custom_endpoint: str
```

- *Type:* str

---

##### `edgenetwork_custom_endpoint`<sup>Optional</sup> <a name="edgenetwork_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.edgenetworkCustomEndpoint"></a>

```python
edgenetwork_custom_endpoint: str
```

- *Type:* str

---

##### `essential_contacts_custom_endpoint`<sup>Optional</sup> <a name="essential_contacts_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.essentialContactsCustomEndpoint"></a>

```python
essential_contacts_custom_endpoint: str
```

- *Type:* str

---

##### `eventarc_custom_endpoint`<sup>Optional</sup> <a name="eventarc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.eventarcCustomEndpoint"></a>

```python
eventarc_custom_endpoint: str
```

- *Type:* str

---

##### `filestore_custom_endpoint`<sup>Optional</sup> <a name="filestore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.filestoreCustomEndpoint"></a>

```python
filestore_custom_endpoint: str
```

- *Type:* str

---

##### `firebase_app_check_custom_endpoint`<sup>Optional</sup> <a name="firebase_app_check_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseAppCheckCustomEndpoint"></a>

```python
firebase_app_check_custom_endpoint: str
```

- *Type:* str

---

##### `firebase_custom_endpoint`<sup>Optional</sup> <a name="firebase_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseCustomEndpoint"></a>

```python
firebase_custom_endpoint: str
```

- *Type:* str

---

##### `firebase_database_custom_endpoint`<sup>Optional</sup> <a name="firebase_database_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseDatabaseCustomEndpoint"></a>

```python
firebase_database_custom_endpoint: str
```

- *Type:* str

---

##### `firebase_extensions_custom_endpoint`<sup>Optional</sup> <a name="firebase_extensions_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseExtensionsCustomEndpoint"></a>

```python
firebase_extensions_custom_endpoint: str
```

- *Type:* str

---

##### `firebase_hosting_custom_endpoint`<sup>Optional</sup> <a name="firebase_hosting_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseHostingCustomEndpoint"></a>

```python
firebase_hosting_custom_endpoint: str
```

- *Type:* str

---

##### `firebaserules_custom_endpoint`<sup>Optional</sup> <a name="firebaserules_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaserulesCustomEndpoint"></a>

```python
firebaserules_custom_endpoint: str
```

- *Type:* str

---

##### `firebase_storage_custom_endpoint`<sup>Optional</sup> <a name="firebase_storage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firebaseStorageCustomEndpoint"></a>

```python
firebase_storage_custom_endpoint: str
```

- *Type:* str

---

##### `firestore_custom_endpoint`<sup>Optional</sup> <a name="firestore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.firestoreCustomEndpoint"></a>

```python
firestore_custom_endpoint: str
```

- *Type:* str

---

##### `gemini_custom_endpoint`<sup>Optional</sup> <a name="gemini_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.geminiCustomEndpoint"></a>

```python
gemini_custom_endpoint: str
```

- *Type:* str

---

##### `gke_backup_custom_endpoint`<sup>Optional</sup> <a name="gke_backup_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeBackupCustomEndpoint"></a>

```python
gke_backup_custom_endpoint: str
```

- *Type:* str

---

##### `gke_hub2_custom_endpoint`<sup>Optional</sup> <a name="gke_hub2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHub2CustomEndpoint"></a>

```python
gke_hub2_custom_endpoint: str
```

- *Type:* str

---

##### `gke_hub_custom_endpoint`<sup>Optional</sup> <a name="gke_hub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeHubCustomEndpoint"></a>

```python
gke_hub_custom_endpoint: str
```

- *Type:* str

---

##### `gkehub_feature_custom_endpoint`<sup>Optional</sup> <a name="gkehub_feature_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkehubFeatureCustomEndpoint"></a>

```python
gkehub_feature_custom_endpoint: str
```

- *Type:* str

---

##### `gkeonprem_custom_endpoint`<sup>Optional</sup> <a name="gkeonprem_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.gkeonpremCustomEndpoint"></a>

```python
gkeonprem_custom_endpoint: str
```

- *Type:* str

---

##### `healthcare_custom_endpoint`<sup>Optional</sup> <a name="healthcare_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.healthcareCustomEndpoint"></a>

```python
healthcare_custom_endpoint: str
```

- *Type:* str

---

##### `iam2_custom_endpoint`<sup>Optional</sup> <a name="iam2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam2CustomEndpoint"></a>

```python
iam2_custom_endpoint: str
```

- *Type:* str

---

##### `iam3_custom_endpoint`<sup>Optional</sup> <a name="iam3_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iam3CustomEndpoint"></a>

```python
iam3_custom_endpoint: str
```

- *Type:* str

---

##### `iam_beta_custom_endpoint`<sup>Optional</sup> <a name="iam_beta_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamBetaCustomEndpoint"></a>

```python
iam_beta_custom_endpoint: str
```

- *Type:* str

---

##### `iam_credentials_custom_endpoint`<sup>Optional</sup> <a name="iam_credentials_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCredentialsCustomEndpoint"></a>

```python
iam_credentials_custom_endpoint: str
```

- *Type:* str

---

##### `iam_custom_endpoint`<sup>Optional</sup> <a name="iam_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamCustomEndpoint"></a>

```python
iam_custom_endpoint: str
```

- *Type:* str

---

##### `iam_workforce_pool_custom_endpoint`<sup>Optional</sup> <a name="iam_workforce_pool_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```python
iam_workforce_pool_custom_endpoint: str
```

- *Type:* str

---

##### `iap_custom_endpoint`<sup>Optional</sup> <a name="iap_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.iapCustomEndpoint"></a>

```python
iap_custom_endpoint: str
```

- *Type:* str

---

##### `identity_platform_custom_endpoint`<sup>Optional</sup> <a name="identity_platform_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.identityPlatformCustomEndpoint"></a>

```python
identity_platform_custom_endpoint: str
```

- *Type:* str

---

##### `impersonate_service_account`<sup>Optional</sup> <a name="impersonate_service_account" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccount"></a>

```python
impersonate_service_account: str
```

- *Type:* str

---

##### `impersonate_service_account_delegates`<sup>Optional</sup> <a name="impersonate_service_account_delegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.impersonateServiceAccountDelegates"></a>

```python
impersonate_service_account_delegates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_connectors_custom_endpoint`<sup>Optional</sup> <a name="integration_connectors_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationConnectorsCustomEndpoint"></a>

```python
integration_connectors_custom_endpoint: str
```

- *Type:* str

---

##### `integrations_custom_endpoint`<sup>Optional</sup> <a name="integrations_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.integrationsCustomEndpoint"></a>

```python
integrations_custom_endpoint: str
```

- *Type:* str

---

##### `kms_custom_endpoint`<sup>Optional</sup> <a name="kms_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.kmsCustomEndpoint"></a>

```python
kms_custom_endpoint: str
```

- *Type:* str

---

##### `logging_custom_endpoint`<sup>Optional</sup> <a name="logging_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.loggingCustomEndpoint"></a>

```python
logging_custom_endpoint: str
```

- *Type:* str

---

##### `looker_custom_endpoint`<sup>Optional</sup> <a name="looker_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.lookerCustomEndpoint"></a>

```python
looker_custom_endpoint: str
```

- *Type:* str

---

##### `managed_kafka_custom_endpoint`<sup>Optional</sup> <a name="managed_kafka_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.managedKafkaCustomEndpoint"></a>

```python
managed_kafka_custom_endpoint: str
```

- *Type:* str

---

##### `memcache_custom_endpoint`<sup>Optional</sup> <a name="memcache_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memcacheCustomEndpoint"></a>

```python
memcache_custom_endpoint: str
```

- *Type:* str

---

##### `memorystore_custom_endpoint`<sup>Optional</sup> <a name="memorystore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.memorystoreCustomEndpoint"></a>

```python
memorystore_custom_endpoint: str
```

- *Type:* str

---

##### `migration_center_custom_endpoint`<sup>Optional</sup> <a name="migration_center_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.migrationCenterCustomEndpoint"></a>

```python
migration_center_custom_endpoint: str
```

- *Type:* str

---

##### `ml_engine_custom_endpoint`<sup>Optional</sup> <a name="ml_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.mlEngineCustomEndpoint"></a>

```python
ml_engine_custom_endpoint: str
```

- *Type:* str

---

##### `monitoring_custom_endpoint`<sup>Optional</sup> <a name="monitoring_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.monitoringCustomEndpoint"></a>

```python
monitoring_custom_endpoint: str
```

- *Type:* str

---

##### `netapp_custom_endpoint`<sup>Optional</sup> <a name="netapp_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.netappCustomEndpoint"></a>

```python
netapp_custom_endpoint: str
```

- *Type:* str

---

##### `network_connectivity_custom_endpoint`<sup>Optional</sup> <a name="network_connectivity_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkConnectivityCustomEndpoint"></a>

```python
network_connectivity_custom_endpoint: str
```

- *Type:* str

---

##### `network_management_custom_endpoint`<sup>Optional</sup> <a name="network_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkManagementCustomEndpoint"></a>

```python
network_management_custom_endpoint: str
```

- *Type:* str

---

##### `network_security_custom_endpoint`<sup>Optional</sup> <a name="network_security_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkSecurityCustomEndpoint"></a>

```python
network_security_custom_endpoint: str
```

- *Type:* str

---

##### `network_services_custom_endpoint`<sup>Optional</sup> <a name="network_services_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.networkServicesCustomEndpoint"></a>

```python
network_services_custom_endpoint: str
```

- *Type:* str

---

##### `notebooks_custom_endpoint`<sup>Optional</sup> <a name="notebooks_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.notebooksCustomEndpoint"></a>

```python
notebooks_custom_endpoint: str
```

- *Type:* str

---

##### `oracle_database_custom_endpoint`<sup>Optional</sup> <a name="oracle_database_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.oracleDatabaseCustomEndpoint"></a>

```python
oracle_database_custom_endpoint: str
```

- *Type:* str

---

##### `org_policy_custom_endpoint`<sup>Optional</sup> <a name="org_policy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.orgPolicyCustomEndpoint"></a>

```python
org_policy_custom_endpoint: str
```

- *Type:* str

---

##### `os_config_custom_endpoint`<sup>Optional</sup> <a name="os_config_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osConfigCustomEndpoint"></a>

```python
os_config_custom_endpoint: str
```

- *Type:* str

---

##### `os_login_custom_endpoint`<sup>Optional</sup> <a name="os_login_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.osLoginCustomEndpoint"></a>

```python
os_login_custom_endpoint: str
```

- *Type:* str

---

##### `parallelstore_custom_endpoint`<sup>Optional</sup> <a name="parallelstore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.parallelstoreCustomEndpoint"></a>

```python
parallelstore_custom_endpoint: str
```

- *Type:* str

---

##### `privateca_custom_endpoint`<sup>Optional</sup> <a name="privateca_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privatecaCustomEndpoint"></a>

```python
privateca_custom_endpoint: str
```

- *Type:* str

---

##### `privileged_access_manager_custom_endpoint`<sup>Optional</sup> <a name="privileged_access_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.privilegedAccessManagerCustomEndpoint"></a>

```python
privileged_access_manager_custom_endpoint: str
```

- *Type:* str

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `public_ca_custom_endpoint`<sup>Optional</sup> <a name="public_ca_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.publicCaCustomEndpoint"></a>

```python
public_ca_custom_endpoint: str
```

- *Type:* str

---

##### `pubsub_custom_endpoint`<sup>Optional</sup> <a name="pubsub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubCustomEndpoint"></a>

```python
pubsub_custom_endpoint: str
```

- *Type:* str

---

##### `pubsub_lite_custom_endpoint`<sup>Optional</sup> <a name="pubsub_lite_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.pubsubLiteCustomEndpoint"></a>

```python
pubsub_lite_custom_endpoint: str
```

- *Type:* str

---

##### `recaptcha_enterprise_custom_endpoint`<sup>Optional</sup> <a name="recaptcha_enterprise_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```python
recaptcha_enterprise_custom_endpoint: str
```

- *Type:* str

---

##### `redis_custom_endpoint`<sup>Optional</sup> <a name="redis_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.redisCustomEndpoint"></a>

```python
redis_custom_endpoint: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `request_reason`<sup>Optional</sup> <a name="request_reason" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestReason"></a>

```python
request_reason: str
```

- *Type:* str

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.requestTimeout"></a>

```python
request_timeout: str
```

- *Type:* str

---

##### `resource_manager_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerCustomEndpoint"></a>

```python
resource_manager_custom_endpoint: str
```

- *Type:* str

---

##### `resource_manager_v3_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_v3_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.resourceManagerV3CustomEndpoint"></a>

```python
resource_manager_v3_custom_endpoint: str
```

- *Type:* str

---

##### `runtimeconfig_custom_endpoint`<sup>Optional</sup> <a name="runtimeconfig_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeconfigCustomEndpoint"></a>

```python
runtimeconfig_custom_endpoint: str
```

- *Type:* str

---

##### `runtime_config_custom_endpoint`<sup>Optional</sup> <a name="runtime_config_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.runtimeConfigCustomEndpoint"></a>

```python
runtime_config_custom_endpoint: str
```

- *Type:* str

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_manager_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerCustomEndpoint"></a>

```python
secret_manager_custom_endpoint: str
```

- *Type:* str

---

##### `secret_manager_regional_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_regional_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secretManagerRegionalCustomEndpoint"></a>

```python
secret_manager_regional_custom_endpoint: str
```

- *Type:* str

---

##### `secure_source_manager_custom_endpoint`<sup>Optional</sup> <a name="secure_source_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.secureSourceManagerCustomEndpoint"></a>

```python
secure_source_manager_custom_endpoint: str
```

- *Type:* str

---

##### `security_center_custom_endpoint`<sup>Optional</sup> <a name="security_center_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterCustomEndpoint"></a>

```python
security_center_custom_endpoint: str
```

- *Type:* str

---

##### `security_center_management_custom_endpoint`<sup>Optional</sup> <a name="security_center_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterManagementCustomEndpoint"></a>

```python
security_center_management_custom_endpoint: str
```

- *Type:* str

---

##### `security_center_v2_custom_endpoint`<sup>Optional</sup> <a name="security_center_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityCenterV2CustomEndpoint"></a>

```python
security_center_v2_custom_endpoint: str
```

- *Type:* str

---

##### `securityposture_custom_endpoint`<sup>Optional</sup> <a name="securityposture_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securitypostureCustomEndpoint"></a>

```python
securityposture_custom_endpoint: str
```

- *Type:* str

---

##### `security_scanner_custom_endpoint`<sup>Optional</sup> <a name="security_scanner_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.securityScannerCustomEndpoint"></a>

```python
security_scanner_custom_endpoint: str
```

- *Type:* str

---

##### `service_directory_custom_endpoint`<sup>Optional</sup> <a name="service_directory_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceDirectoryCustomEndpoint"></a>

```python
service_directory_custom_endpoint: str
```

- *Type:* str

---

##### `service_management_custom_endpoint`<sup>Optional</sup> <a name="service_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceManagementCustomEndpoint"></a>

```python
service_management_custom_endpoint: str
```

- *Type:* str

---

##### `service_networking_custom_endpoint`<sup>Optional</sup> <a name="service_networking_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceNetworkingCustomEndpoint"></a>

```python
service_networking_custom_endpoint: str
```

- *Type:* str

---

##### `service_usage_custom_endpoint`<sup>Optional</sup> <a name="service_usage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.serviceUsageCustomEndpoint"></a>

```python
service_usage_custom_endpoint: str
```

- *Type:* str

---

##### `site_verification_custom_endpoint`<sup>Optional</sup> <a name="site_verification_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.siteVerificationCustomEndpoint"></a>

```python
site_verification_custom_endpoint: str
```

- *Type:* str

---

##### `source_repo_custom_endpoint`<sup>Optional</sup> <a name="source_repo_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sourceRepoCustomEndpoint"></a>

```python
source_repo_custom_endpoint: str
```

- *Type:* str

---

##### `spanner_custom_endpoint`<sup>Optional</sup> <a name="spanner_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.spannerCustomEndpoint"></a>

```python
spanner_custom_endpoint: str
```

- *Type:* str

---

##### `sql_custom_endpoint`<sup>Optional</sup> <a name="sql_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.sqlCustomEndpoint"></a>

```python
sql_custom_endpoint: str
```

- *Type:* str

---

##### `storage_custom_endpoint`<sup>Optional</sup> <a name="storage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageCustomEndpoint"></a>

```python
storage_custom_endpoint: str
```

- *Type:* str

---

##### `storage_insights_custom_endpoint`<sup>Optional</sup> <a name="storage_insights_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageInsightsCustomEndpoint"></a>

```python
storage_insights_custom_endpoint: str
```

- *Type:* str

---

##### `storage_transfer_custom_endpoint`<sup>Optional</sup> <a name="storage_transfer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.storageTransferCustomEndpoint"></a>

```python
storage_transfer_custom_endpoint: str
```

- *Type:* str

---

##### `tags_custom_endpoint`<sup>Optional</sup> <a name="tags_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsCustomEndpoint"></a>

```python
tags_custom_endpoint: str
```

- *Type:* str

---

##### `tags_location_custom_endpoint`<sup>Optional</sup> <a name="tags_location_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tagsLocationCustomEndpoint"></a>

```python
tags_location_custom_endpoint: str
```

- *Type:* str

---

##### `terraform_attribution_label_addition_strategy`<sup>Optional</sup> <a name="terraform_attribution_label_addition_strategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```python
terraform_attribution_label_addition_strategy: str
```

- *Type:* str

---

##### `tpu_custom_endpoint`<sup>Optional</sup> <a name="tpu_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuCustomEndpoint"></a>

```python
tpu_custom_endpoint: str
```

- *Type:* str

---

##### `tpu_v2_custom_endpoint`<sup>Optional</sup> <a name="tpu_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tpuV2CustomEndpoint"></a>

```python
tpu_v2_custom_endpoint: str
```

- *Type:* str

---

##### `transcoder_custom_endpoint`<sup>Optional</sup> <a name="transcoder_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.transcoderCustomEndpoint"></a>

```python
transcoder_custom_endpoint: str
```

- *Type:* str

---

##### `universe_domain`<sup>Optional</sup> <a name="universe_domain" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.universeDomain"></a>

```python
universe_domain: str
```

- *Type:* str

---

##### `user_project_override`<sup>Optional</sup> <a name="user_project_override" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.userProjectOverride"></a>

```python
user_project_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vertex_ai_custom_endpoint`<sup>Optional</sup> <a name="vertex_ai_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vertexAiCustomEndpoint"></a>

```python
vertex_ai_custom_endpoint: str
```

- *Type:* str

---

##### `vmwareengine_custom_endpoint`<sup>Optional</sup> <a name="vmwareengine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vmwareengineCustomEndpoint"></a>

```python
vmwareengine_custom_endpoint: str
```

- *Type:* str

---

##### `vpc_access_custom_endpoint`<sup>Optional</sup> <a name="vpc_access_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.vpcAccessCustomEndpoint"></a>

```python
vpc_access_custom_endpoint: str
```

- *Type:* str

---

##### `workbench_custom_endpoint`<sup>Optional</sup> <a name="workbench_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workbenchCustomEndpoint"></a>

```python
workbench_custom_endpoint: str
```

- *Type:* str

---

##### `workflows_custom_endpoint`<sup>Optional</sup> <a name="workflows_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workflowsCustomEndpoint"></a>

```python
workflows_custom_endpoint: str
```

- *Type:* str

---

##### `workstations_custom_endpoint`<sup>Optional</sup> <a name="workstations_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.workstationsCustomEndpoint"></a>

```python
workstations_custom_endpoint: str
```

- *Type:* str

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.provider.GoogleBetaProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBetaProviderBatching <a name="GoogleBetaProviderBatching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import provider

provider.GoogleBetaProviderBatching(
  enable_batching: typing.Union[bool, IResolvable] = None,
  send_after: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching">enable_batching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#enable_batching GoogleBetaProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter">send_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#send_after GoogleBetaProvider#send_after}. |

---

##### `enable_batching`<sup>Optional</sup> <a name="enable_batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.enableBatching"></a>

```python
enable_batching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#enable_batching GoogleBetaProvider#enable_batching}.

---

##### `send_after`<sup>Optional</sup> <a name="send_after" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching.property.sendAfter"></a>

```python
send_after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#send_after GoogleBetaProvider#send_after}.

---

### GoogleBetaProviderConfig <a name="GoogleBetaProviderConfig" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import provider

provider.GoogleBetaProviderConfig(
  access_approval_custom_endpoint: str = None,
  access_context_manager_custom_endpoint: str = None,
  access_token: str = None,
  active_directory_custom_endpoint: str = None,
  add_terraform_attribution_label: typing.Union[bool, IResolvable] = None,
  alias: str = None,
  alloydb_custom_endpoint: str = None,
  api_gateway_custom_endpoint: str = None,
  apigee_custom_endpoint: str = None,
  apikeys_custom_endpoint: str = None,
  app_engine_custom_endpoint: str = None,
  apphub_custom_endpoint: str = None,
  artifact_registry_custom_endpoint: str = None,
  assured_workloads_custom_endpoint: str = None,
  backup_dr_custom_endpoint: str = None,
  batching: typing.Union[IResolvable, typing.List[GoogleBetaProviderBatching]] = None,
  beyondcorp_custom_endpoint: str = None,
  biglake_custom_endpoint: str = None,
  bigquery_analytics_hub_custom_endpoint: str = None,
  bigquery_connection_custom_endpoint: str = None,
  big_query_custom_endpoint: str = None,
  bigquery_datapolicy_custom_endpoint: str = None,
  bigquery_data_transfer_custom_endpoint: str = None,
  bigquery_reservation_custom_endpoint: str = None,
  bigtable_custom_endpoint: str = None,
  billing_custom_endpoint: str = None,
  billing_project: str = None,
  binary_authorization_custom_endpoint: str = None,
  blockchain_node_engine_custom_endpoint: str = None,
  certificate_manager_custom_endpoint: str = None,
  chronicle_custom_endpoint: str = None,
  cloud_asset_custom_endpoint: str = None,
  cloud_billing_custom_endpoint: str = None,
  cloud_build_custom_endpoint: str = None,
  cloudbuildv2_custom_endpoint: str = None,
  cloud_build_worker_pool_custom_endpoint: str = None,
  clouddeploy_custom_endpoint: str = None,
  clouddomains_custom_endpoint: str = None,
  cloudfunctions2_custom_endpoint: str = None,
  cloud_functions_custom_endpoint: str = None,
  cloud_identity_custom_endpoint: str = None,
  cloud_ids_custom_endpoint: str = None,
  cloud_quotas_custom_endpoint: str = None,
  cloud_resource_manager_custom_endpoint: str = None,
  cloud_run_custom_endpoint: str = None,
  cloud_run_v2_custom_endpoint: str = None,
  cloud_scheduler_custom_endpoint: str = None,
  cloud_tasks_custom_endpoint: str = None,
  composer_custom_endpoint: str = None,
  compute_custom_endpoint: str = None,
  container_analysis_custom_endpoint: str = None,
  container_attached_custom_endpoint: str = None,
  container_aws_custom_endpoint: str = None,
  container_azure_custom_endpoint: str = None,
  container_custom_endpoint: str = None,
  core_billing_custom_endpoint: str = None,
  credentials: str = None,
  database_migration_service_custom_endpoint: str = None,
  data_catalog_custom_endpoint: str = None,
  dataflow_custom_endpoint: str = None,
  dataform_custom_endpoint: str = None,
  data_fusion_custom_endpoint: str = None,
  data_loss_prevention_custom_endpoint: str = None,
  data_pipeline_custom_endpoint: str = None,
  dataplex_custom_endpoint: str = None,
  dataproc_custom_endpoint: str = None,
  dataproc_gdc_custom_endpoint: str = None,
  dataproc_metastore_custom_endpoint: str = None,
  datastream_custom_endpoint: str = None,
  default_labels: typing.Mapping[str] = None,
  deployment_manager_custom_endpoint: str = None,
  developer_connect_custom_endpoint: str = None,
  dialogflow_custom_endpoint: str = None,
  dialogflow_cx_custom_endpoint: str = None,
  discovery_engine_custom_endpoint: str = None,
  dns_custom_endpoint: str = None,
  document_ai_custom_endpoint: str = None,
  document_ai_warehouse_custom_endpoint: str = None,
  edgecontainer_custom_endpoint: str = None,
  edgenetwork_custom_endpoint: str = None,
  essential_contacts_custom_endpoint: str = None,
  eventarc_custom_endpoint: str = None,
  filestore_custom_endpoint: str = None,
  firebase_app_check_custom_endpoint: str = None,
  firebase_custom_endpoint: str = None,
  firebase_database_custom_endpoint: str = None,
  firebase_extensions_custom_endpoint: str = None,
  firebase_hosting_custom_endpoint: str = None,
  firebaserules_custom_endpoint: str = None,
  firebase_storage_custom_endpoint: str = None,
  firestore_custom_endpoint: str = None,
  gemini_custom_endpoint: str = None,
  gke_backup_custom_endpoint: str = None,
  gke_hub2_custom_endpoint: str = None,
  gke_hub_custom_endpoint: str = None,
  gkehub_feature_custom_endpoint: str = None,
  gkeonprem_custom_endpoint: str = None,
  healthcare_custom_endpoint: str = None,
  iam2_custom_endpoint: str = None,
  iam3_custom_endpoint: str = None,
  iam_beta_custom_endpoint: str = None,
  iam_credentials_custom_endpoint: str = None,
  iam_custom_endpoint: str = None,
  iam_workforce_pool_custom_endpoint: str = None,
  iap_custom_endpoint: str = None,
  identity_platform_custom_endpoint: str = None,
  impersonate_service_account: str = None,
  impersonate_service_account_delegates: typing.List[str] = None,
  integration_connectors_custom_endpoint: str = None,
  integrations_custom_endpoint: str = None,
  kms_custom_endpoint: str = None,
  logging_custom_endpoint: str = None,
  looker_custom_endpoint: str = None,
  managed_kafka_custom_endpoint: str = None,
  memcache_custom_endpoint: str = None,
  memorystore_custom_endpoint: str = None,
  migration_center_custom_endpoint: str = None,
  ml_engine_custom_endpoint: str = None,
  monitoring_custom_endpoint: str = None,
  netapp_custom_endpoint: str = None,
  network_connectivity_custom_endpoint: str = None,
  network_management_custom_endpoint: str = None,
  network_security_custom_endpoint: str = None,
  network_services_custom_endpoint: str = None,
  notebooks_custom_endpoint: str = None,
  oracle_database_custom_endpoint: str = None,
  org_policy_custom_endpoint: str = None,
  os_config_custom_endpoint: str = None,
  os_login_custom_endpoint: str = None,
  parallelstore_custom_endpoint: str = None,
  privateca_custom_endpoint: str = None,
  privileged_access_manager_custom_endpoint: str = None,
  project: str = None,
  public_ca_custom_endpoint: str = None,
  pubsub_custom_endpoint: str = None,
  pubsub_lite_custom_endpoint: str = None,
  recaptcha_enterprise_custom_endpoint: str = None,
  redis_custom_endpoint: str = None,
  region: str = None,
  request_reason: str = None,
  request_timeout: str = None,
  resource_manager_custom_endpoint: str = None,
  resource_manager_v3_custom_endpoint: str = None,
  runtimeconfig_custom_endpoint: str = None,
  runtime_config_custom_endpoint: str = None,
  scopes: typing.List[str] = None,
  secret_manager_custom_endpoint: str = None,
  secret_manager_regional_custom_endpoint: str = None,
  secure_source_manager_custom_endpoint: str = None,
  security_center_custom_endpoint: str = None,
  security_center_management_custom_endpoint: str = None,
  security_center_v2_custom_endpoint: str = None,
  securityposture_custom_endpoint: str = None,
  security_scanner_custom_endpoint: str = None,
  service_directory_custom_endpoint: str = None,
  service_management_custom_endpoint: str = None,
  service_networking_custom_endpoint: str = None,
  service_usage_custom_endpoint: str = None,
  site_verification_custom_endpoint: str = None,
  source_repo_custom_endpoint: str = None,
  spanner_custom_endpoint: str = None,
  sql_custom_endpoint: str = None,
  storage_custom_endpoint: str = None,
  storage_insights_custom_endpoint: str = None,
  storage_transfer_custom_endpoint: str = None,
  tags_custom_endpoint: str = None,
  tags_location_custom_endpoint: str = None,
  terraform_attribution_label_addition_strategy: str = None,
  tpu_custom_endpoint: str = None,
  tpu_v2_custom_endpoint: str = None,
  transcoder_custom_endpoint: str = None,
  universe_domain: str = None,
  user_project_override: typing.Union[bool, IResolvable] = None,
  vertex_ai_custom_endpoint: str = None,
  vmwareengine_custom_endpoint: str = None,
  vpc_access_custom_endpoint: str = None,
  workbench_custom_endpoint: str = None,
  workflows_custom_endpoint: str = None,
  workstations_custom_endpoint: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint">access_approval_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint">access_context_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_token GoogleBetaProvider#access_token}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint">active_directory_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.addTerraformAttributionLabel">add_terraform_attribution_label</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint">alloydb_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint">api_gateway_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint">apigee_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint">apikeys_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint">app_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apphubCustomEndpoint">apphub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint">artifact_registry_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint">assured_workloads_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.backupDrCustomEndpoint">backup_dr_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching">batching</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>]]</code> | batching block. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint">beyondcorp_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.biglakeCustomEndpoint">biglake_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">bigquery_analytics_hub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint">bigquery_connection_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint">big_query_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint">bigquery_datapolicy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint">bigquery_data_transfer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint">bigquery_reservation_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint">bigtable_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint">billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject">billing_project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#billing_project GoogleBetaProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint">binary_authorization_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.blockchainNodeEngineCustomEndpoint">blockchain_node_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint">certificate_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.chronicleCustomEndpoint">chronicle_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#chronicle_custom_endpoint GoogleBetaProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint">cloud_asset_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint">cloud_billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint">cloud_build_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint">cloudbuildv2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">cloud_build_worker_pool_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint">clouddeploy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddomainsCustomEndpoint">clouddomains_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint">cloudfunctions2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint">cloud_functions_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint">cloud_identity_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint">cloud_ids_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudQuotasCustomEndpoint">cloud_quotas_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint">cloud_resource_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint">cloud_run_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint">cloud_run_v2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint">cloud_scheduler_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint">cloud_tasks_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint">composer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint">compute_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint">container_analysis_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint">container_attached_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint">container_aws_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint">container_azure_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint">container_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.coreBillingCustomEndpoint">core_billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#credentials GoogleBetaProvider#credentials}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint">database_migration_service_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint">data_catalog_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint">dataflow_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint">dataform_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint">data_fusion_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint">data_loss_prevention_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataPipelineCustomEndpoint">data_pipeline_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint">dataplex_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint">dataproc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocGdcCustomEndpoint">dataproc_gdc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint">dataproc_metastore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint">datastream_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.defaultLabels">default_labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#default_labels GoogleBetaProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint">deployment_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.developerConnectCustomEndpoint">developer_connect_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint">dialogflow_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint">dialogflow_cx_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.discoveryEngineCustomEndpoint">discovery_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint">dns_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint">document_ai_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiWarehouseCustomEndpoint">document_ai_warehouse_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgecontainerCustomEndpoint">edgecontainer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgenetworkCustomEndpoint">edgenetwork_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint">essential_contacts_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint">eventarc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint">filestore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseAppCheckCustomEndpoint">firebase_app_check_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint">firebase_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint">firebase_database_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseExtensionsCustomEndpoint">firebase_extensions_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint">firebase_hosting_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint">firebaserules_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint">firebase_storage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint">firestore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.geminiCustomEndpoint">gemini_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint">gke_backup_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHub2CustomEndpoint">gke_hub2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint">gke_hub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint">gkehub_feature_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint">gkeonprem_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint">healthcare_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint">iam2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam3CustomEndpoint">iam3_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint">iam_beta_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint">iam_credentials_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint">iam_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint">iam_workforce_pool_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint">iap_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint">identity_platform_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount">impersonate_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates">impersonate_service_account_delegates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationConnectorsCustomEndpoint">integration_connectors_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationsCustomEndpoint">integrations_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint">kms_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint">logging_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.lookerCustomEndpoint">looker_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.managedKafkaCustomEndpoint">managed_kafka_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint">memcache_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memorystoreCustomEndpoint">memorystore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.migrationCenterCustomEndpoint">migration_center_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint">ml_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint">monitoring_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.netappCustomEndpoint">netapp_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint">network_connectivity_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint">network_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint">network_security_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint">network_services_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint">notebooks_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.oracleDatabaseCustomEndpoint">oracle_database_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint">org_policy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint">os_config_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint">os_login_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parallelstoreCustomEndpoint">parallelstore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint">privateca_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privilegedAccessManagerCustomEndpoint">privileged_access_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#project GoogleBetaProvider#project}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.publicCaCustomEndpoint">public_ca_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint">pubsub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint">pubsub_lite_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint">recaptcha_enterprise_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint">redis_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#region GoogleBetaProvider#region}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason">request_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#request_reason GoogleBetaProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout">request_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#request_timeout GoogleBetaProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint">resource_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint">resource_manager_v3_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint">runtimeconfig_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint">runtime_config_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#scopes GoogleBetaProvider#scopes}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint">secret_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerRegionalCustomEndpoint">secret_manager_regional_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secureSourceManagerCustomEndpoint">secure_source_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint">security_center_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterManagementCustomEndpoint">security_center_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterV2CustomEndpoint">security_center_v2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securitypostureCustomEndpoint">securityposture_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint">security_scanner_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint">service_directory_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint">service_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint">service_networking_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint">service_usage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.siteVerificationCustomEndpoint">site_verification_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint">source_repo_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint">spanner_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint">sql_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint">storage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageInsightsCustomEndpoint">storage_insights_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint">storage_transfer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint">tags_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint">tags_location_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.terraformAttributionLabelAdditionStrategy">terraform_attribution_label_addition_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint">tpu_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuV2CustomEndpoint">tpu_v2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.transcoderCustomEndpoint">transcoder_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.universeDomain">universe_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#universe_domain GoogleBetaProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride">user_project_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#user_project_override GoogleBetaProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint">vertex_ai_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vmwareengineCustomEndpoint">vmwareengine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint">vpc_access_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workbenchCustomEndpoint">workbench_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint">workflows_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint">workstations_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#zone GoogleBetaProvider#zone}. |

---

##### `access_approval_custom_endpoint`<sup>Optional</sup> <a name="access_approval_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessApprovalCustomEndpoint"></a>

```python
access_approval_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_approval_custom_endpoint GoogleBetaProvider#access_approval_custom_endpoint}.

---

##### `access_context_manager_custom_endpoint`<sup>Optional</sup> <a name="access_context_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```python
access_context_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_context_manager_custom_endpoint GoogleBetaProvider#access_context_manager_custom_endpoint}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#access_token GoogleBetaProvider#access_token}.

---

##### `active_directory_custom_endpoint`<sup>Optional</sup> <a name="active_directory_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```python
active_directory_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#active_directory_custom_endpoint GoogleBetaProvider#active_directory_custom_endpoint}.

---

##### `add_terraform_attribution_label`<sup>Optional</sup> <a name="add_terraform_attribution_label" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.addTerraformAttributionLabel"></a>

```python
add_terraform_attribution_label: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#add_terraform_attribution_label GoogleBetaProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#alias GoogleBetaProvider#alias}

---

##### `alloydb_custom_endpoint`<sup>Optional</sup> <a name="alloydb_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.alloydbCustomEndpoint"></a>

```python
alloydb_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#alloydb_custom_endpoint GoogleBetaProvider#alloydb_custom_endpoint}.

---

##### `api_gateway_custom_endpoint`<sup>Optional</sup> <a name="api_gateway_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apiGatewayCustomEndpoint"></a>

```python
api_gateway_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#api_gateway_custom_endpoint GoogleBetaProvider#api_gateway_custom_endpoint}.

---

##### `apigee_custom_endpoint`<sup>Optional</sup> <a name="apigee_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apigeeCustomEndpoint"></a>

```python
apigee_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apigee_custom_endpoint GoogleBetaProvider#apigee_custom_endpoint}.

---

##### `apikeys_custom_endpoint`<sup>Optional</sup> <a name="apikeys_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apikeysCustomEndpoint"></a>

```python
apikeys_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apikeys_custom_endpoint GoogleBetaProvider#apikeys_custom_endpoint}.

---

##### `app_engine_custom_endpoint`<sup>Optional</sup> <a name="app_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.appEngineCustomEndpoint"></a>

```python
app_engine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#app_engine_custom_endpoint GoogleBetaProvider#app_engine_custom_endpoint}.

---

##### `apphub_custom_endpoint`<sup>Optional</sup> <a name="apphub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.apphubCustomEndpoint"></a>

```python
apphub_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#apphub_custom_endpoint GoogleBetaProvider#apphub_custom_endpoint}.

---

##### `artifact_registry_custom_endpoint`<sup>Optional</sup> <a name="artifact_registry_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```python
artifact_registry_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#artifact_registry_custom_endpoint GoogleBetaProvider#artifact_registry_custom_endpoint}.

---

##### `assured_workloads_custom_endpoint`<sup>Optional</sup> <a name="assured_workloads_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```python
assured_workloads_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#assured_workloads_custom_endpoint GoogleBetaProvider#assured_workloads_custom_endpoint}.

---

##### `backup_dr_custom_endpoint`<sup>Optional</sup> <a name="backup_dr_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.backupDrCustomEndpoint"></a>

```python
backup_dr_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#backup_dr_custom_endpoint GoogleBetaProvider#backup_dr_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.batching"></a>

```python
batching: typing.Union[IResolvable, typing.List[GoogleBetaProviderBatching]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.provider.GoogleBetaProviderBatching">GoogleBetaProviderBatching</a>]]

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#batching GoogleBetaProvider#batching}

---

##### `beyondcorp_custom_endpoint`<sup>Optional</sup> <a name="beyondcorp_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.beyondcorpCustomEndpoint"></a>

```python
beyondcorp_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#beyondcorp_custom_endpoint GoogleBetaProvider#beyondcorp_custom_endpoint}.

---

##### `biglake_custom_endpoint`<sup>Optional</sup> <a name="biglake_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.biglakeCustomEndpoint"></a>

```python
biglake_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#biglake_custom_endpoint GoogleBetaProvider#biglake_custom_endpoint}.

---

##### `bigquery_analytics_hub_custom_endpoint`<sup>Optional</sup> <a name="bigquery_analytics_hub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```python
bigquery_analytics_hub_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_analytics_hub_custom_endpoint GoogleBetaProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigquery_connection_custom_endpoint`<sup>Optional</sup> <a name="bigquery_connection_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```python
bigquery_connection_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_connection_custom_endpoint GoogleBetaProvider#bigquery_connection_custom_endpoint}.

---

##### `big_query_custom_endpoint`<sup>Optional</sup> <a name="big_query_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigQueryCustomEndpoint"></a>

```python
big_query_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#big_query_custom_endpoint GoogleBetaProvider#big_query_custom_endpoint}.

---

##### `bigquery_datapolicy_custom_endpoint`<sup>Optional</sup> <a name="bigquery_datapolicy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```python
bigquery_datapolicy_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_datapolicy_custom_endpoint GoogleBetaProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigquery_data_transfer_custom_endpoint`<sup>Optional</sup> <a name="bigquery_data_transfer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```python
bigquery_data_transfer_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_data_transfer_custom_endpoint GoogleBetaProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigquery_reservation_custom_endpoint`<sup>Optional</sup> <a name="bigquery_reservation_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```python
bigquery_reservation_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigquery_reservation_custom_endpoint GoogleBetaProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtable_custom_endpoint`<sup>Optional</sup> <a name="bigtable_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.bigtableCustomEndpoint"></a>

```python
bigtable_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#bigtable_custom_endpoint GoogleBetaProvider#bigtable_custom_endpoint}.

---

##### `billing_custom_endpoint`<sup>Optional</sup> <a name="billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingCustomEndpoint"></a>

```python
billing_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#billing_custom_endpoint GoogleBetaProvider#billing_custom_endpoint}.

---

##### `billing_project`<sup>Optional</sup> <a name="billing_project" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#billing_project GoogleBetaProvider#billing_project}.

---

##### `binary_authorization_custom_endpoint`<sup>Optional</sup> <a name="binary_authorization_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```python
binary_authorization_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#binary_authorization_custom_endpoint GoogleBetaProvider#binary_authorization_custom_endpoint}.

---

##### `blockchain_node_engine_custom_endpoint`<sup>Optional</sup> <a name="blockchain_node_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```python
blockchain_node_engine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#blockchain_node_engine_custom_endpoint GoogleBetaProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificate_manager_custom_endpoint`<sup>Optional</sup> <a name="certificate_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.certificateManagerCustomEndpoint"></a>

```python
certificate_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#certificate_manager_custom_endpoint GoogleBetaProvider#certificate_manager_custom_endpoint}.

---

##### `chronicle_custom_endpoint`<sup>Optional</sup> <a name="chronicle_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.chronicleCustomEndpoint"></a>

```python
chronicle_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#chronicle_custom_endpoint GoogleBetaProvider#chronicle_custom_endpoint}.

---

##### `cloud_asset_custom_endpoint`<sup>Optional</sup> <a name="cloud_asset_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudAssetCustomEndpoint"></a>

```python
cloud_asset_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_asset_custom_endpoint GoogleBetaProvider#cloud_asset_custom_endpoint}.

---

##### `cloud_billing_custom_endpoint`<sup>Optional</sup> <a name="cloud_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBillingCustomEndpoint"></a>

```python
cloud_billing_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_billing_custom_endpoint GoogleBetaProvider#cloud_billing_custom_endpoint}.

---

##### `cloud_build_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildCustomEndpoint"></a>

```python
cloud_build_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_build_custom_endpoint GoogleBetaProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2_custom_endpoint`<sup>Optional</sup> <a name="cloudbuildv2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```python
cloudbuildv2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloudbuildv2_custom_endpoint GoogleBetaProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloud_build_worker_pool_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_worker_pool_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```python
cloud_build_worker_pool_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_build_worker_pool_custom_endpoint GoogleBetaProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeploy_custom_endpoint`<sup>Optional</sup> <a name="clouddeploy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddeployCustomEndpoint"></a>

```python
clouddeploy_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#clouddeploy_custom_endpoint GoogleBetaProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomains_custom_endpoint`<sup>Optional</sup> <a name="clouddomains_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.clouddomainsCustomEndpoint"></a>

```python
clouddomains_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#clouddomains_custom_endpoint GoogleBetaProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2_custom_endpoint`<sup>Optional</sup> <a name="cloudfunctions2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```python
cloudfunctions2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloudfunctions2_custom_endpoint GoogleBetaProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloud_functions_custom_endpoint`<sup>Optional</sup> <a name="cloud_functions_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```python
cloud_functions_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_functions_custom_endpoint GoogleBetaProvider#cloud_functions_custom_endpoint}.

---

##### `cloud_identity_custom_endpoint`<sup>Optional</sup> <a name="cloud_identity_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```python
cloud_identity_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_identity_custom_endpoint GoogleBetaProvider#cloud_identity_custom_endpoint}.

---

##### `cloud_ids_custom_endpoint`<sup>Optional</sup> <a name="cloud_ids_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudIdsCustomEndpoint"></a>

```python
cloud_ids_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_ids_custom_endpoint GoogleBetaProvider#cloud_ids_custom_endpoint}.

---

##### `cloud_quotas_custom_endpoint`<sup>Optional</sup> <a name="cloud_quotas_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```python
cloud_quotas_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_quotas_custom_endpoint GoogleBetaProvider#cloud_quotas_custom_endpoint}.

---

##### `cloud_resource_manager_custom_endpoint`<sup>Optional</sup> <a name="cloud_resource_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```python
cloud_resource_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_resource_manager_custom_endpoint GoogleBetaProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloud_run_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunCustomEndpoint"></a>

```python
cloud_run_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_run_custom_endpoint GoogleBetaProvider#cloud_run_custom_endpoint}.

---

##### `cloud_run_v2_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```python
cloud_run_v2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_run_v2_custom_endpoint GoogleBetaProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloud_scheduler_custom_endpoint`<sup>Optional</sup> <a name="cloud_scheduler_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```python
cloud_scheduler_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_scheduler_custom_endpoint GoogleBetaProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloud_tasks_custom_endpoint`<sup>Optional</sup> <a name="cloud_tasks_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.cloudTasksCustomEndpoint"></a>

```python
cloud_tasks_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#cloud_tasks_custom_endpoint GoogleBetaProvider#cloud_tasks_custom_endpoint}.

---

##### `composer_custom_endpoint`<sup>Optional</sup> <a name="composer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.composerCustomEndpoint"></a>

```python
composer_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#composer_custom_endpoint GoogleBetaProvider#composer_custom_endpoint}.

---

##### `compute_custom_endpoint`<sup>Optional</sup> <a name="compute_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.computeCustomEndpoint"></a>

```python
compute_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#compute_custom_endpoint GoogleBetaProvider#compute_custom_endpoint}.

---

##### `container_analysis_custom_endpoint`<sup>Optional</sup> <a name="container_analysis_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```python
container_analysis_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_analysis_custom_endpoint GoogleBetaProvider#container_analysis_custom_endpoint}.

---

##### `container_attached_custom_endpoint`<sup>Optional</sup> <a name="container_attached_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAttachedCustomEndpoint"></a>

```python
container_attached_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_attached_custom_endpoint GoogleBetaProvider#container_attached_custom_endpoint}.

---

##### `container_aws_custom_endpoint`<sup>Optional</sup> <a name="container_aws_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAwsCustomEndpoint"></a>

```python
container_aws_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_aws_custom_endpoint GoogleBetaProvider#container_aws_custom_endpoint}.

---

##### `container_azure_custom_endpoint`<sup>Optional</sup> <a name="container_azure_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerAzureCustomEndpoint"></a>

```python
container_azure_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_azure_custom_endpoint GoogleBetaProvider#container_azure_custom_endpoint}.

---

##### `container_custom_endpoint`<sup>Optional</sup> <a name="container_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.containerCustomEndpoint"></a>

```python
container_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#container_custom_endpoint GoogleBetaProvider#container_custom_endpoint}.

---

##### `core_billing_custom_endpoint`<sup>Optional</sup> <a name="core_billing_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.coreBillingCustomEndpoint"></a>

```python
core_billing_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#core_billing_custom_endpoint GoogleBetaProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#credentials GoogleBetaProvider#credentials}.

---

##### `database_migration_service_custom_endpoint`<sup>Optional</sup> <a name="database_migration_service_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```python
database_migration_service_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#database_migration_service_custom_endpoint GoogleBetaProvider#database_migration_service_custom_endpoint}.

---

##### `data_catalog_custom_endpoint`<sup>Optional</sup> <a name="data_catalog_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataCatalogCustomEndpoint"></a>

```python
data_catalog_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_catalog_custom_endpoint GoogleBetaProvider#data_catalog_custom_endpoint}.

---

##### `dataflow_custom_endpoint`<sup>Optional</sup> <a name="dataflow_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataflowCustomEndpoint"></a>

```python
dataflow_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataflow_custom_endpoint GoogleBetaProvider#dataflow_custom_endpoint}.

---

##### `dataform_custom_endpoint`<sup>Optional</sup> <a name="dataform_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataformCustomEndpoint"></a>

```python
dataform_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataform_custom_endpoint GoogleBetaProvider#dataform_custom_endpoint}.

---

##### `data_fusion_custom_endpoint`<sup>Optional</sup> <a name="data_fusion_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataFusionCustomEndpoint"></a>

```python
data_fusion_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_fusion_custom_endpoint GoogleBetaProvider#data_fusion_custom_endpoint}.

---

##### `data_loss_prevention_custom_endpoint`<sup>Optional</sup> <a name="data_loss_prevention_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```python
data_loss_prevention_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_loss_prevention_custom_endpoint GoogleBetaProvider#data_loss_prevention_custom_endpoint}.

---

##### `data_pipeline_custom_endpoint`<sup>Optional</sup> <a name="data_pipeline_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataPipelineCustomEndpoint"></a>

```python
data_pipeline_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#data_pipeline_custom_endpoint GoogleBetaProvider#data_pipeline_custom_endpoint}.

---

##### `dataplex_custom_endpoint`<sup>Optional</sup> <a name="dataplex_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataplexCustomEndpoint"></a>

```python
dataplex_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataplex_custom_endpoint GoogleBetaProvider#dataplex_custom_endpoint}.

---

##### `dataproc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocCustomEndpoint"></a>

```python
dataproc_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_custom_endpoint GoogleBetaProvider#dataproc_custom_endpoint}.

---

##### `dataproc_gdc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_gdc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocGdcCustomEndpoint"></a>

```python
dataproc_gdc_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_gdc_custom_endpoint GoogleBetaProvider#dataproc_gdc_custom_endpoint}.

---

##### `dataproc_metastore_custom_endpoint`<sup>Optional</sup> <a name="dataproc_metastore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```python
dataproc_metastore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dataproc_metastore_custom_endpoint GoogleBetaProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastream_custom_endpoint`<sup>Optional</sup> <a name="datastream_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.datastreamCustomEndpoint"></a>

```python
datastream_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#datastream_custom_endpoint GoogleBetaProvider#datastream_custom_endpoint}.

---

##### `default_labels`<sup>Optional</sup> <a name="default_labels" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.defaultLabels"></a>

```python
default_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#default_labels GoogleBetaProvider#default_labels}.

---

##### `deployment_manager_custom_endpoint`<sup>Optional</sup> <a name="deployment_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```python
deployment_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#deployment_manager_custom_endpoint GoogleBetaProvider#deployment_manager_custom_endpoint}.

---

##### `developer_connect_custom_endpoint`<sup>Optional</sup> <a name="developer_connect_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.developerConnectCustomEndpoint"></a>

```python
developer_connect_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#developer_connect_custom_endpoint GoogleBetaProvider#developer_connect_custom_endpoint}.

---

##### `dialogflow_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCustomEndpoint"></a>

```python
dialogflow_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dialogflow_custom_endpoint GoogleBetaProvider#dialogflow_custom_endpoint}.

---

##### `dialogflow_cx_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_cx_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```python
dialogflow_cx_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dialogflow_cx_custom_endpoint GoogleBetaProvider#dialogflow_cx_custom_endpoint}.

---

##### `discovery_engine_custom_endpoint`<sup>Optional</sup> <a name="discovery_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```python
discovery_engine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#discovery_engine_custom_endpoint GoogleBetaProvider#discovery_engine_custom_endpoint}.

---

##### `dns_custom_endpoint`<sup>Optional</sup> <a name="dns_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.dnsCustomEndpoint"></a>

```python
dns_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#dns_custom_endpoint GoogleBetaProvider#dns_custom_endpoint}.

---

##### `document_ai_custom_endpoint`<sup>Optional</sup> <a name="document_ai_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiCustomEndpoint"></a>

```python
document_ai_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#document_ai_custom_endpoint GoogleBetaProvider#document_ai_custom_endpoint}.

---

##### `document_ai_warehouse_custom_endpoint`<sup>Optional</sup> <a name="document_ai_warehouse_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```python
document_ai_warehouse_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#document_ai_warehouse_custom_endpoint GoogleBetaProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainer_custom_endpoint`<sup>Optional</sup> <a name="edgecontainer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgecontainerCustomEndpoint"></a>

```python
edgecontainer_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#edgecontainer_custom_endpoint GoogleBetaProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetwork_custom_endpoint`<sup>Optional</sup> <a name="edgenetwork_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.edgenetworkCustomEndpoint"></a>

```python
edgenetwork_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#edgenetwork_custom_endpoint GoogleBetaProvider#edgenetwork_custom_endpoint}.

---

##### `essential_contacts_custom_endpoint`<sup>Optional</sup> <a name="essential_contacts_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.essentialContactsCustomEndpoint"></a>

```python
essential_contacts_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#essential_contacts_custom_endpoint GoogleBetaProvider#essential_contacts_custom_endpoint}.

---

##### `eventarc_custom_endpoint`<sup>Optional</sup> <a name="eventarc_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.eventarcCustomEndpoint"></a>

```python
eventarc_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#eventarc_custom_endpoint GoogleBetaProvider#eventarc_custom_endpoint}.

---

##### `filestore_custom_endpoint`<sup>Optional</sup> <a name="filestore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.filestoreCustomEndpoint"></a>

```python
filestore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#filestore_custom_endpoint GoogleBetaProvider#filestore_custom_endpoint}.

---

##### `firebase_app_check_custom_endpoint`<sup>Optional</sup> <a name="firebase_app_check_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```python
firebase_app_check_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_app_check_custom_endpoint GoogleBetaProvider#firebase_app_check_custom_endpoint}.

---

##### `firebase_custom_endpoint`<sup>Optional</sup> <a name="firebase_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseCustomEndpoint"></a>

```python
firebase_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_custom_endpoint GoogleBetaProvider#firebase_custom_endpoint}.

---

##### `firebase_database_custom_endpoint`<sup>Optional</sup> <a name="firebase_database_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseDatabaseCustomEndpoint"></a>

```python
firebase_database_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_database_custom_endpoint GoogleBetaProvider#firebase_database_custom_endpoint}.

---

##### `firebase_extensions_custom_endpoint`<sup>Optional</sup> <a name="firebase_extensions_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseExtensionsCustomEndpoint"></a>

```python
firebase_extensions_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_extensions_custom_endpoint GoogleBetaProvider#firebase_extensions_custom_endpoint}.

---

##### `firebase_hosting_custom_endpoint`<sup>Optional</sup> <a name="firebase_hosting_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseHostingCustomEndpoint"></a>

```python
firebase_hosting_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_hosting_custom_endpoint GoogleBetaProvider#firebase_hosting_custom_endpoint}.

---

##### `firebaserules_custom_endpoint`<sup>Optional</sup> <a name="firebaserules_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaserulesCustomEndpoint"></a>

```python
firebaserules_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebaserules_custom_endpoint GoogleBetaProvider#firebaserules_custom_endpoint}.

---

##### `firebase_storage_custom_endpoint`<sup>Optional</sup> <a name="firebase_storage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firebaseStorageCustomEndpoint"></a>

```python
firebase_storage_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firebase_storage_custom_endpoint GoogleBetaProvider#firebase_storage_custom_endpoint}.

---

##### `firestore_custom_endpoint`<sup>Optional</sup> <a name="firestore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.firestoreCustomEndpoint"></a>

```python
firestore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#firestore_custom_endpoint GoogleBetaProvider#firestore_custom_endpoint}.

---

##### `gemini_custom_endpoint`<sup>Optional</sup> <a name="gemini_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.geminiCustomEndpoint"></a>

```python
gemini_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gemini_custom_endpoint GoogleBetaProvider#gemini_custom_endpoint}.

---

##### `gke_backup_custom_endpoint`<sup>Optional</sup> <a name="gke_backup_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeBackupCustomEndpoint"></a>

```python
gke_backup_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_backup_custom_endpoint GoogleBetaProvider#gke_backup_custom_endpoint}.

---

##### `gke_hub2_custom_endpoint`<sup>Optional</sup> <a name="gke_hub2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHub2CustomEndpoint"></a>

```python
gke_hub2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_hub2_custom_endpoint GoogleBetaProvider#gke_hub2_custom_endpoint}.

---

##### `gke_hub_custom_endpoint`<sup>Optional</sup> <a name="gke_hub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeHubCustomEndpoint"></a>

```python
gke_hub_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gke_hub_custom_endpoint GoogleBetaProvider#gke_hub_custom_endpoint}.

---

##### `gkehub_feature_custom_endpoint`<sup>Optional</sup> <a name="gkehub_feature_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkehubFeatureCustomEndpoint"></a>

```python
gkehub_feature_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gkehub_feature_custom_endpoint GoogleBetaProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonprem_custom_endpoint`<sup>Optional</sup> <a name="gkeonprem_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.gkeonpremCustomEndpoint"></a>

```python
gkeonprem_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#gkeonprem_custom_endpoint GoogleBetaProvider#gkeonprem_custom_endpoint}.

---

##### `healthcare_custom_endpoint`<sup>Optional</sup> <a name="healthcare_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.healthcareCustomEndpoint"></a>

```python
healthcare_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#healthcare_custom_endpoint GoogleBetaProvider#healthcare_custom_endpoint}.

---

##### `iam2_custom_endpoint`<sup>Optional</sup> <a name="iam2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam2CustomEndpoint"></a>

```python
iam2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam2_custom_endpoint GoogleBetaProvider#iam2_custom_endpoint}.

---

##### `iam3_custom_endpoint`<sup>Optional</sup> <a name="iam3_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iam3CustomEndpoint"></a>

```python
iam3_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam3_custom_endpoint GoogleBetaProvider#iam3_custom_endpoint}.

---

##### `iam_beta_custom_endpoint`<sup>Optional</sup> <a name="iam_beta_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamBetaCustomEndpoint"></a>

```python
iam_beta_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_beta_custom_endpoint GoogleBetaProvider#iam_beta_custom_endpoint}.

---

##### `iam_credentials_custom_endpoint`<sup>Optional</sup> <a name="iam_credentials_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```python
iam_credentials_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_credentials_custom_endpoint GoogleBetaProvider#iam_credentials_custom_endpoint}.

---

##### `iam_custom_endpoint`<sup>Optional</sup> <a name="iam_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamCustomEndpoint"></a>

```python
iam_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_custom_endpoint GoogleBetaProvider#iam_custom_endpoint}.

---

##### `iam_workforce_pool_custom_endpoint`<sup>Optional</sup> <a name="iam_workforce_pool_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```python
iam_workforce_pool_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iam_workforce_pool_custom_endpoint GoogleBetaProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iap_custom_endpoint`<sup>Optional</sup> <a name="iap_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.iapCustomEndpoint"></a>

```python
iap_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#iap_custom_endpoint GoogleBetaProvider#iap_custom_endpoint}.

---

##### `identity_platform_custom_endpoint`<sup>Optional</sup> <a name="identity_platform_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.identityPlatformCustomEndpoint"></a>

```python
identity_platform_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#identity_platform_custom_endpoint GoogleBetaProvider#identity_platform_custom_endpoint}.

---

##### `impersonate_service_account`<sup>Optional</sup> <a name="impersonate_service_account" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccount"></a>

```python
impersonate_service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#impersonate_service_account GoogleBetaProvider#impersonate_service_account}.

---

##### `impersonate_service_account_delegates`<sup>Optional</sup> <a name="impersonate_service_account_delegates" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.impersonateServiceAccountDelegates"></a>

```python
impersonate_service_account_delegates: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#impersonate_service_account_delegates GoogleBetaProvider#impersonate_service_account_delegates}.

---

##### `integration_connectors_custom_endpoint`<sup>Optional</sup> <a name="integration_connectors_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```python
integration_connectors_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#integration_connectors_custom_endpoint GoogleBetaProvider#integration_connectors_custom_endpoint}.

---

##### `integrations_custom_endpoint`<sup>Optional</sup> <a name="integrations_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.integrationsCustomEndpoint"></a>

```python
integrations_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#integrations_custom_endpoint GoogleBetaProvider#integrations_custom_endpoint}.

---

##### `kms_custom_endpoint`<sup>Optional</sup> <a name="kms_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.kmsCustomEndpoint"></a>

```python
kms_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#kms_custom_endpoint GoogleBetaProvider#kms_custom_endpoint}.

---

##### `logging_custom_endpoint`<sup>Optional</sup> <a name="logging_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.loggingCustomEndpoint"></a>

```python
logging_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#logging_custom_endpoint GoogleBetaProvider#logging_custom_endpoint}.

---

##### `looker_custom_endpoint`<sup>Optional</sup> <a name="looker_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.lookerCustomEndpoint"></a>

```python
looker_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#looker_custom_endpoint GoogleBetaProvider#looker_custom_endpoint}.

---

##### `managed_kafka_custom_endpoint`<sup>Optional</sup> <a name="managed_kafka_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.managedKafkaCustomEndpoint"></a>

```python
managed_kafka_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#managed_kafka_custom_endpoint GoogleBetaProvider#managed_kafka_custom_endpoint}.

---

##### `memcache_custom_endpoint`<sup>Optional</sup> <a name="memcache_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memcacheCustomEndpoint"></a>

```python
memcache_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#memcache_custom_endpoint GoogleBetaProvider#memcache_custom_endpoint}.

---

##### `memorystore_custom_endpoint`<sup>Optional</sup> <a name="memorystore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.memorystoreCustomEndpoint"></a>

```python
memorystore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#memorystore_custom_endpoint GoogleBetaProvider#memorystore_custom_endpoint}.

---

##### `migration_center_custom_endpoint`<sup>Optional</sup> <a name="migration_center_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.migrationCenterCustomEndpoint"></a>

```python
migration_center_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#migration_center_custom_endpoint GoogleBetaProvider#migration_center_custom_endpoint}.

---

##### `ml_engine_custom_endpoint`<sup>Optional</sup> <a name="ml_engine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.mlEngineCustomEndpoint"></a>

```python
ml_engine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#ml_engine_custom_endpoint GoogleBetaProvider#ml_engine_custom_endpoint}.

---

##### `monitoring_custom_endpoint`<sup>Optional</sup> <a name="monitoring_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.monitoringCustomEndpoint"></a>

```python
monitoring_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#monitoring_custom_endpoint GoogleBetaProvider#monitoring_custom_endpoint}.

---

##### `netapp_custom_endpoint`<sup>Optional</sup> <a name="netapp_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.netappCustomEndpoint"></a>

```python
netapp_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#netapp_custom_endpoint GoogleBetaProvider#netapp_custom_endpoint}.

---

##### `network_connectivity_custom_endpoint`<sup>Optional</sup> <a name="network_connectivity_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```python
network_connectivity_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_connectivity_custom_endpoint GoogleBetaProvider#network_connectivity_custom_endpoint}.

---

##### `network_management_custom_endpoint`<sup>Optional</sup> <a name="network_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkManagementCustomEndpoint"></a>

```python
network_management_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_management_custom_endpoint GoogleBetaProvider#network_management_custom_endpoint}.

---

##### `network_security_custom_endpoint`<sup>Optional</sup> <a name="network_security_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkSecurityCustomEndpoint"></a>

```python
network_security_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_security_custom_endpoint GoogleBetaProvider#network_security_custom_endpoint}.

---

##### `network_services_custom_endpoint`<sup>Optional</sup> <a name="network_services_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.networkServicesCustomEndpoint"></a>

```python
network_services_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#network_services_custom_endpoint GoogleBetaProvider#network_services_custom_endpoint}.

---

##### `notebooks_custom_endpoint`<sup>Optional</sup> <a name="notebooks_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.notebooksCustomEndpoint"></a>

```python
notebooks_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#notebooks_custom_endpoint GoogleBetaProvider#notebooks_custom_endpoint}.

---

##### `oracle_database_custom_endpoint`<sup>Optional</sup> <a name="oracle_database_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.oracleDatabaseCustomEndpoint"></a>

```python
oracle_database_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#oracle_database_custom_endpoint GoogleBetaProvider#oracle_database_custom_endpoint}.

---

##### `org_policy_custom_endpoint`<sup>Optional</sup> <a name="org_policy_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.orgPolicyCustomEndpoint"></a>

```python
org_policy_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#org_policy_custom_endpoint GoogleBetaProvider#org_policy_custom_endpoint}.

---

##### `os_config_custom_endpoint`<sup>Optional</sup> <a name="os_config_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osConfigCustomEndpoint"></a>

```python
os_config_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#os_config_custom_endpoint GoogleBetaProvider#os_config_custom_endpoint}.

---

##### `os_login_custom_endpoint`<sup>Optional</sup> <a name="os_login_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.osLoginCustomEndpoint"></a>

```python
os_login_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#os_login_custom_endpoint GoogleBetaProvider#os_login_custom_endpoint}.

---

##### `parallelstore_custom_endpoint`<sup>Optional</sup> <a name="parallelstore_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.parallelstoreCustomEndpoint"></a>

```python
parallelstore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#parallelstore_custom_endpoint GoogleBetaProvider#parallelstore_custom_endpoint}.

---

##### `privateca_custom_endpoint`<sup>Optional</sup> <a name="privateca_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privatecaCustomEndpoint"></a>

```python
privateca_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#privateca_custom_endpoint GoogleBetaProvider#privateca_custom_endpoint}.

---

##### `privileged_access_manager_custom_endpoint`<sup>Optional</sup> <a name="privileged_access_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.privilegedAccessManagerCustomEndpoint"></a>

```python
privileged_access_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#privileged_access_manager_custom_endpoint GoogleBetaProvider#privileged_access_manager_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#project GoogleBetaProvider#project}.

---

##### `public_ca_custom_endpoint`<sup>Optional</sup> <a name="public_ca_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.publicCaCustomEndpoint"></a>

```python
public_ca_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#public_ca_custom_endpoint GoogleBetaProvider#public_ca_custom_endpoint}.

---

##### `pubsub_custom_endpoint`<sup>Optional</sup> <a name="pubsub_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubCustomEndpoint"></a>

```python
pubsub_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#pubsub_custom_endpoint GoogleBetaProvider#pubsub_custom_endpoint}.

---

##### `pubsub_lite_custom_endpoint`<sup>Optional</sup> <a name="pubsub_lite_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```python
pubsub_lite_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#pubsub_lite_custom_endpoint GoogleBetaProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptcha_enterprise_custom_endpoint`<sup>Optional</sup> <a name="recaptcha_enterprise_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```python
recaptcha_enterprise_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#recaptcha_enterprise_custom_endpoint GoogleBetaProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redis_custom_endpoint`<sup>Optional</sup> <a name="redis_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.redisCustomEndpoint"></a>

```python
redis_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#redis_custom_endpoint GoogleBetaProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#region GoogleBetaProvider#region}.

---

##### `request_reason`<sup>Optional</sup> <a name="request_reason" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestReason"></a>

```python
request_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#request_reason GoogleBetaProvider#request_reason}.

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.requestTimeout"></a>

```python
request_timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#request_timeout GoogleBetaProvider#request_timeout}.

---

##### `resource_manager_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerCustomEndpoint"></a>

```python
resource_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#resource_manager_custom_endpoint GoogleBetaProvider#resource_manager_custom_endpoint}.

---

##### `resource_manager_v3_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_v3_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```python
resource_manager_v3_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#resource_manager_v3_custom_endpoint GoogleBetaProvider#resource_manager_v3_custom_endpoint}.

---

##### `runtimeconfig_custom_endpoint`<sup>Optional</sup> <a name="runtimeconfig_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeconfigCustomEndpoint"></a>

```python
runtimeconfig_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#runtimeconfig_custom_endpoint GoogleBetaProvider#runtimeconfig_custom_endpoint}.

---

##### `runtime_config_custom_endpoint`<sup>Optional</sup> <a name="runtime_config_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.runtimeConfigCustomEndpoint"></a>

```python
runtime_config_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#runtime_config_custom_endpoint GoogleBetaProvider#runtime_config_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#scopes GoogleBetaProvider#scopes}.

---

##### `secret_manager_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerCustomEndpoint"></a>

```python
secret_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secret_manager_custom_endpoint GoogleBetaProvider#secret_manager_custom_endpoint}.

---

##### `secret_manager_regional_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_regional_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secretManagerRegionalCustomEndpoint"></a>

```python
secret_manager_regional_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secret_manager_regional_custom_endpoint GoogleBetaProvider#secret_manager_regional_custom_endpoint}.

---

##### `secure_source_manager_custom_endpoint`<sup>Optional</sup> <a name="secure_source_manager_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```python
secure_source_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#secure_source_manager_custom_endpoint GoogleBetaProvider#secure_source_manager_custom_endpoint}.

---

##### `security_center_custom_endpoint`<sup>Optional</sup> <a name="security_center_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterCustomEndpoint"></a>

```python
security_center_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_custom_endpoint GoogleBetaProvider#security_center_custom_endpoint}.

---

##### `security_center_management_custom_endpoint`<sup>Optional</sup> <a name="security_center_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterManagementCustomEndpoint"></a>

```python
security_center_management_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_management_custom_endpoint GoogleBetaProvider#security_center_management_custom_endpoint}.

---

##### `security_center_v2_custom_endpoint`<sup>Optional</sup> <a name="security_center_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityCenterV2CustomEndpoint"></a>

```python
security_center_v2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_center_v2_custom_endpoint GoogleBetaProvider#security_center_v2_custom_endpoint}.

---

##### `securityposture_custom_endpoint`<sup>Optional</sup> <a name="securityposture_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securitypostureCustomEndpoint"></a>

```python
securityposture_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#securityposture_custom_endpoint GoogleBetaProvider#securityposture_custom_endpoint}.

---

##### `security_scanner_custom_endpoint`<sup>Optional</sup> <a name="security_scanner_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.securityScannerCustomEndpoint"></a>

```python
security_scanner_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#security_scanner_custom_endpoint GoogleBetaProvider#security_scanner_custom_endpoint}.

---

##### `service_directory_custom_endpoint`<sup>Optional</sup> <a name="service_directory_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceDirectoryCustomEndpoint"></a>

```python
service_directory_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_directory_custom_endpoint GoogleBetaProvider#service_directory_custom_endpoint}.

---

##### `service_management_custom_endpoint`<sup>Optional</sup> <a name="service_management_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceManagementCustomEndpoint"></a>

```python
service_management_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_management_custom_endpoint GoogleBetaProvider#service_management_custom_endpoint}.

---

##### `service_networking_custom_endpoint`<sup>Optional</sup> <a name="service_networking_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```python
service_networking_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_networking_custom_endpoint GoogleBetaProvider#service_networking_custom_endpoint}.

---

##### `service_usage_custom_endpoint`<sup>Optional</sup> <a name="service_usage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.serviceUsageCustomEndpoint"></a>

```python
service_usage_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#service_usage_custom_endpoint GoogleBetaProvider#service_usage_custom_endpoint}.

---

##### `site_verification_custom_endpoint`<sup>Optional</sup> <a name="site_verification_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.siteVerificationCustomEndpoint"></a>

```python
site_verification_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#site_verification_custom_endpoint GoogleBetaProvider#site_verification_custom_endpoint}.

---

##### `source_repo_custom_endpoint`<sup>Optional</sup> <a name="source_repo_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sourceRepoCustomEndpoint"></a>

```python
source_repo_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#source_repo_custom_endpoint GoogleBetaProvider#source_repo_custom_endpoint}.

---

##### `spanner_custom_endpoint`<sup>Optional</sup> <a name="spanner_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.spannerCustomEndpoint"></a>

```python
spanner_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#spanner_custom_endpoint GoogleBetaProvider#spanner_custom_endpoint}.

---

##### `sql_custom_endpoint`<sup>Optional</sup> <a name="sql_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.sqlCustomEndpoint"></a>

```python
sql_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#sql_custom_endpoint GoogleBetaProvider#sql_custom_endpoint}.

---

##### `storage_custom_endpoint`<sup>Optional</sup> <a name="storage_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageCustomEndpoint"></a>

```python
storage_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_custom_endpoint GoogleBetaProvider#storage_custom_endpoint}.

---

##### `storage_insights_custom_endpoint`<sup>Optional</sup> <a name="storage_insights_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageInsightsCustomEndpoint"></a>

```python
storage_insights_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_insights_custom_endpoint GoogleBetaProvider#storage_insights_custom_endpoint}.

---

##### `storage_transfer_custom_endpoint`<sup>Optional</sup> <a name="storage_transfer_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.storageTransferCustomEndpoint"></a>

```python
storage_transfer_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#storage_transfer_custom_endpoint GoogleBetaProvider#storage_transfer_custom_endpoint}.

---

##### `tags_custom_endpoint`<sup>Optional</sup> <a name="tags_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsCustomEndpoint"></a>

```python
tags_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tags_custom_endpoint GoogleBetaProvider#tags_custom_endpoint}.

---

##### `tags_location_custom_endpoint`<sup>Optional</sup> <a name="tags_location_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tagsLocationCustomEndpoint"></a>

```python
tags_location_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tags_location_custom_endpoint GoogleBetaProvider#tags_location_custom_endpoint}.

---

##### `terraform_attribution_label_addition_strategy`<sup>Optional</sup> <a name="terraform_attribution_label_addition_strategy" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```python
terraform_attribution_label_addition_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#terraform_attribution_label_addition_strategy GoogleBetaProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpu_custom_endpoint`<sup>Optional</sup> <a name="tpu_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuCustomEndpoint"></a>

```python
tpu_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tpu_custom_endpoint GoogleBetaProvider#tpu_custom_endpoint}.

---

##### `tpu_v2_custom_endpoint`<sup>Optional</sup> <a name="tpu_v2_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.tpuV2CustomEndpoint"></a>

```python
tpu_v2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#tpu_v2_custom_endpoint GoogleBetaProvider#tpu_v2_custom_endpoint}.

---

##### `transcoder_custom_endpoint`<sup>Optional</sup> <a name="transcoder_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.transcoderCustomEndpoint"></a>

```python
transcoder_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#transcoder_custom_endpoint GoogleBetaProvider#transcoder_custom_endpoint}.

---

##### `universe_domain`<sup>Optional</sup> <a name="universe_domain" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.universeDomain"></a>

```python
universe_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#universe_domain GoogleBetaProvider#universe_domain}.

---

##### `user_project_override`<sup>Optional</sup> <a name="user_project_override" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.userProjectOverride"></a>

```python
user_project_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#user_project_override GoogleBetaProvider#user_project_override}.

---

##### `vertex_ai_custom_endpoint`<sup>Optional</sup> <a name="vertex_ai_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vertexAiCustomEndpoint"></a>

```python
vertex_ai_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vertex_ai_custom_endpoint GoogleBetaProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengine_custom_endpoint`<sup>Optional</sup> <a name="vmwareengine_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vmwareengineCustomEndpoint"></a>

```python
vmwareengine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vmwareengine_custom_endpoint GoogleBetaProvider#vmwareengine_custom_endpoint}.

---

##### `vpc_access_custom_endpoint`<sup>Optional</sup> <a name="vpc_access_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.vpcAccessCustomEndpoint"></a>

```python
vpc_access_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#vpc_access_custom_endpoint GoogleBetaProvider#vpc_access_custom_endpoint}.

---

##### `workbench_custom_endpoint`<sup>Optional</sup> <a name="workbench_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workbenchCustomEndpoint"></a>

```python
workbench_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workbench_custom_endpoint GoogleBetaProvider#workbench_custom_endpoint}.

---

##### `workflows_custom_endpoint`<sup>Optional</sup> <a name="workflows_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workflowsCustomEndpoint"></a>

```python
workflows_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workflows_custom_endpoint GoogleBetaProvider#workflows_custom_endpoint}.

---

##### `workstations_custom_endpoint`<sup>Optional</sup> <a name="workstations_custom_endpoint" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.workstationsCustomEndpoint"></a>

```python
workstations_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#workstations_custom_endpoint GoogleBetaProvider#workstations_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.provider.GoogleBetaProviderConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs#zone GoogleBetaProvider#zone}.

---



