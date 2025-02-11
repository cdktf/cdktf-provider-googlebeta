# `googleDataprocMetastoreService` Submodule <a name="`googleDataprocMetastoreService` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreService <a name="GoogleDataprocMetastoreService" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service google_dataproc_metastore_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_id: str,
  database_type: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  encryption_config: GoogleDataprocMetastoreServiceEncryptionConfig = None,
  hive_metastore_config: GoogleDataprocMetastoreServiceHiveMetastoreConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  maintenance_window: GoogleDataprocMetastoreServiceMaintenanceWindow = None,
  metadata_integration: GoogleDataprocMetastoreServiceMetadataIntegration = None,
  network: str = None,
  network_config: GoogleDataprocMetastoreServiceNetworkConfig = None,
  port: typing.Union[int, float] = None,
  project: str = None,
  release_channel: str = None,
  scaling_config: GoogleDataprocMetastoreServiceScalingConfig = None,
  scheduled_backup: GoogleDataprocMetastoreServiceScheduledBackup = None,
  telemetry_config: GoogleDataprocMetastoreServiceTelemetryConfig = None,
  tier: str = None,
  timeouts: GoogleDataprocMetastoreServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.databaseType">database_type</a></code> | <code>str</code> | The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the dataproc metastore should be protected against accidental deletions. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.hiveMetastoreConfig">hive_metastore_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | hive_metastore_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.metadataIntegration">metadata_integration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | metadata_integration block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.network">network</a></code> | <code>str</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port at which the metastore service is reached. Default: 9083. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.releaseChannel">release_channel</a></code> | <code>str</code> | The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scheduledBackup">scheduled_backup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a></code> | scheduled_backup block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.tier">tier</a></code> | <code>str</code> | The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.serviceId"></a>

- *Type:* str

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#service_id GoogleDataprocMetastoreService#service_id}

---

##### `database_type`<sup>Optional</sup> <a name="database_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.databaseType"></a>

- *Type:* str

The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#database_type GoogleDataprocMetastoreService#database_type}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the dataproc metastore should be protected against accidental deletions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#deletion_protection GoogleDataprocMetastoreService#deletion_protection}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#encryption_config GoogleDataprocMetastoreService#encryption_config}

---

##### `hive_metastore_config`<sup>Optional</sup> <a name="hive_metastore_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.hiveMetastoreConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

hive_metastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#hive_metastore_config GoogleDataprocMetastoreService#hive_metastore_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the metastore service.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#labels GoogleDataprocMetastoreService#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.location"></a>

- *Type:* str

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#location GoogleDataprocMetastoreService#location}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#maintenance_window GoogleDataprocMetastoreService#maintenance_window}

---

##### `metadata_integration`<sup>Optional</sup> <a name="metadata_integration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.metadataIntegration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

metadata_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#metadata_integration GoogleDataprocMetastoreService#metadata_integration}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.network"></a>

- *Type:* str

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#network GoogleDataprocMetastoreService#network}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#network_config GoogleDataprocMetastoreService#network_config}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port at which the metastore service is reached. Default: 9083.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#port GoogleDataprocMetastoreService#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}.

---

##### `release_channel`<sup>Optional</sup> <a name="release_channel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.releaseChannel"></a>

- *Type:* str

The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#release_channel GoogleDataprocMetastoreService#release_channel}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#scaling_config GoogleDataprocMetastoreService#scaling_config}

---

##### `scheduled_backup`<sup>Optional</sup> <a name="scheduled_backup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scheduledBackup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

scheduled_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#scheduled_backup GoogleDataprocMetastoreService#scheduled_backup}

---

##### `telemetry_config`<sup>Optional</sup> <a name="telemetry_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.telemetryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#telemetry_config GoogleDataprocMetastoreService#telemetry_config}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.tier"></a>

- *Type:* str

The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#tier GoogleDataprocMetastoreService#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#timeouts GoogleDataprocMetastoreService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig">put_hive_metastore_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration">put_metadata_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScalingConfig">put_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup">put_scheduled_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig">put_telemetry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDatabaseType">reset_database_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetHiveMetastoreConfig">reset_hive_metastore_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMetadataIntegration">reset_metadata_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetReleaseChannel">reset_release_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetScalingConfig">reset_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetScheduledBackup">reset_scheduled_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTelemetryConfig">reset_telemetry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key: str
) -> None
```

###### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig.parameter.kmsKey"></a>

- *Type:* str

The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#kms_key GoogleDataprocMetastoreService#kms_key}

---

##### `put_hive_metastore_config` <a name="put_hive_metastore_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig"></a>

```python
def put_hive_metastore_config(
  version: str,
  auxiliary_versions: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions]] = None,
  config_overrides: typing.Mapping[str] = None,
  endpoint_protocol: str = None,
  kerberos_config: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig.parameter.version"></a>

- *Type:* str

The Hive metastore schema version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}

---

###### `auxiliary_versions`<sup>Optional</sup> <a name="auxiliary_versions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig.parameter.auxiliaryVersions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]]

auxiliary_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#auxiliary_versions GoogleDataprocMetastoreService#auxiliary_versions}

---

###### `config_overrides`<sup>Optional</sup> <a name="config_overrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig.parameter.configOverrides"></a>

- *Type:* typing.Mapping[str]

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}

---

###### `endpoint_protocol`<sup>Optional</sup> <a name="endpoint_protocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig.parameter.endpointProtocol"></a>

- *Type:* str

The protocol to use for the metastore service endpoint.

If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#endpoint_protocol GoogleDataprocMetastoreService#endpoint_protocol}

---

###### `kerberos_config`<sup>Optional</sup> <a name="kerberos_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig.parameter.kerberosConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

kerberos_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#kerberos_config GoogleDataprocMetastoreService#kerberos_config}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_week: str,
  hour_of_day: typing.Union[int, float]
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow.parameter.dayOfWeek"></a>

- *Type:* str

The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#day_of_week GoogleDataprocMetastoreService#day_of_week}

---

###### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow.parameter.hourOfDay"></a>

- *Type:* typing.Union[int, float]

The hour of day (0-23) when the window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#hour_of_day GoogleDataprocMetastoreService#hour_of_day}

---

##### `put_metadata_integration` <a name="put_metadata_integration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration"></a>

```python
def put_metadata_integration(
  data_catalog_config: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig
) -> None
```

###### `data_catalog_config`<sup>Required</sup> <a name="data_catalog_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration.parameter.dataCatalogConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

data_catalog_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#data_catalog_config GoogleDataprocMetastoreService#data_catalog_config}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig"></a>

```python
def put_network_config(
  consumers: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceNetworkConfigConsumers]],
  custom_routes_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig.parameter.consumers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]]

consumers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#consumers GoogleDataprocMetastoreService#consumers}

---

###### `custom_routes_enabled`<sup>Optional</sup> <a name="custom_routes_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig.parameter.customRoutesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#custom_routes_enabled GoogleDataprocMetastoreService#custom_routes_enabled}

---

##### `put_scaling_config` <a name="put_scaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScalingConfig"></a>

```python
def put_scaling_config(
  autoscaling_config: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig = None,
  instance_size: str = None,
  scaling_factor: typing.Union[int, float] = None
) -> None
```

###### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScalingConfig.parameter.autoscalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#autoscaling_config GoogleDataprocMetastoreService#autoscaling_config}

---

###### `instance_size`<sup>Optional</sup> <a name="instance_size" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScalingConfig.parameter.instanceSize"></a>

- *Type:* str

Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#instance_size GoogleDataprocMetastoreService#instance_size}

---

###### `scaling_factor`<sup>Optional</sup> <a name="scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScalingConfig.parameter.scalingFactor"></a>

- *Type:* typing.Union[int, float]

Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#scaling_factor GoogleDataprocMetastoreService#scaling_factor}

---

##### `put_scheduled_backup` <a name="put_scheduled_backup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup"></a>

```python
def put_scheduled_backup(
  backup_location: str,
  cron_schedule: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  time_zone: str = None
) -> None
```

###### `backup_location`<sup>Required</sup> <a name="backup_location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup.parameter.backupLocation"></a>

- *Type:* str

A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>.

A sub-folder <backup_folder> containing backup files will be stored below it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#backup_location GoogleDataprocMetastoreService#backup_location}

---

###### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup.parameter.cronSchedule"></a>

- *Type:* str

The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#cron_schedule GoogleDataprocMetastoreService#cron_schedule}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the scheduled backup is enabled. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup.parameter.timeZone"></a>

- *Type:* str

Specifies the time zone to be used when interpreting cronSchedule.

Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or Africa/Abidjan. If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#time_zone GoogleDataprocMetastoreService#time_zone}

---

##### `put_telemetry_config` <a name="put_telemetry_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig"></a>

```python
def put_telemetry_config(
  log_format: str = None
) -> None
```

###### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig.parameter.logFormat"></a>

- *Type:* str

The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#log_format GoogleDataprocMetastoreService#log_format}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#create GoogleDataprocMetastoreService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#delete GoogleDataprocMetastoreService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#update GoogleDataprocMetastoreService#update}.

---

##### `reset_database_type` <a name="reset_database_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDatabaseType"></a>

```python
def reset_database_type() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_hive_metastore_config` <a name="reset_hive_metastore_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetHiveMetastoreConfig"></a>

```python
def reset_hive_metastore_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_metadata_integration` <a name="reset_metadata_integration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMetadataIntegration"></a>

```python
def reset_metadata_integration() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_release_channel` <a name="reset_release_channel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetReleaseChannel"></a>

```python
def reset_release_channel() -> None
```

##### `reset_scaling_config` <a name="reset_scaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetScalingConfig"></a>

```python
def reset_scaling_config() -> None
```

##### `reset_scheduled_backup` <a name="reset_scheduled_backup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetScheduledBackup"></a>

```python
def reset_scheduled_backup() -> None
```

##### `reset_telemetry_config` <a name="reset_telemetry_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTelemetryConfig"></a>

```python
def reset_telemetry_config() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocMetastoreService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocMetastoreService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.artifactGcsUri">artifact_gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference">GoogleDataprocMetastoreServiceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfig">hive_metastore_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference">GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegration">metadata_integration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference">GoogleDataprocMetastoreServiceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scheduledBackup">scheduled_backup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference">GoogleDataprocMetastoreServiceScheduledBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference">GoogleDataprocMetastoreServiceTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference">GoogleDataprocMetastoreServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseTypeInput">database_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfigInput">hive_metastore_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegrationInput">metadata_integration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannelInput">release_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scalingConfigInput">scaling_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scheduledBackupInput">scheduled_backup_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfigInput">telemetry_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannel">release_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tier">tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_gcs_uri`<sup>Required</sup> <a name="artifact_gcs_uri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.artifactGcsUri"></a>

```python
artifact_gcs_uri: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfig"></a>

```python
encryption_config: GoogleDataprocMetastoreServiceEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference">GoogleDataprocMetastoreServiceEncryptionConfigOutputReference</a>

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

---

##### `hive_metastore_config`<sup>Required</sup> <a name="hive_metastore_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfig"></a>

```python
hive_metastore_config: GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindow"></a>

```python
maintenance_window: GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference">GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference</a>

---

##### `metadata_integration`<sup>Required</sup> <a name="metadata_integration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegration"></a>

```python
metadata_integration: GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfig"></a>

```python
network_config: GoogleDataprocMetastoreServiceNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference">GoogleDataprocMetastoreServiceNetworkConfigOutputReference</a>

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scalingConfig"></a>

```python
scaling_config: GoogleDataprocMetastoreServiceScalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigOutputReference</a>

---

##### `scheduled_backup`<sup>Required</sup> <a name="scheduled_backup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scheduledBackup"></a>

```python
scheduled_backup: GoogleDataprocMetastoreServiceScheduledBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference">GoogleDataprocMetastoreServiceScheduledBackupOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `telemetry_config`<sup>Required</sup> <a name="telemetry_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfig"></a>

```python
telemetry_config: GoogleDataprocMetastoreServiceTelemetryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference">GoogleDataprocMetastoreServiceTelemetryConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeouts"></a>

```python
timeouts: GoogleDataprocMetastoreServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference">GoogleDataprocMetastoreServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `database_type_input`<sup>Optional</sup> <a name="database_type_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseTypeInput"></a>

```python
database_type_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfigInput"></a>

```python
encryption_config_input: GoogleDataprocMetastoreServiceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

---

##### `hive_metastore_config_input`<sup>Optional</sup> <a name="hive_metastore_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfigInput"></a>

```python
hive_metastore_config_input: GoogleDataprocMetastoreServiceHiveMetastoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: GoogleDataprocMetastoreServiceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

---

##### `metadata_integration_input`<sup>Optional</sup> <a name="metadata_integration_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegrationInput"></a>

```python
metadata_integration_input: GoogleDataprocMetastoreServiceMetadataIntegration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfigInput"></a>

```python
network_config_input: GoogleDataprocMetastoreServiceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `release_channel_input`<sup>Optional</sup> <a name="release_channel_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannelInput"></a>

```python
release_channel_input: str
```

- *Type:* str

---

##### `scaling_config_input`<sup>Optional</sup> <a name="scaling_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scalingConfigInput"></a>

```python
scaling_config_input: GoogleDataprocMetastoreServiceScalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

---

##### `scheduled_backup_input`<sup>Optional</sup> <a name="scheduled_backup_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scheduledBackupInput"></a>

```python
scheduled_backup_input: GoogleDataprocMetastoreServiceScheduledBackup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `telemetry_config_input`<sup>Optional</sup> <a name="telemetry_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfigInput"></a>

```python
telemetry_config_input: GoogleDataprocMetastoreServiceTelemetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataprocMetastoreServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>]

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `release_channel`<sup>Required</sup> <a name="release_channel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannel"></a>

```python
release_channel: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreServiceConfig <a name="GoogleDataprocMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_id: str,
  database_type: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  encryption_config: GoogleDataprocMetastoreServiceEncryptionConfig = None,
  hive_metastore_config: GoogleDataprocMetastoreServiceHiveMetastoreConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  maintenance_window: GoogleDataprocMetastoreServiceMaintenanceWindow = None,
  metadata_integration: GoogleDataprocMetastoreServiceMetadataIntegration = None,
  network: str = None,
  network_config: GoogleDataprocMetastoreServiceNetworkConfig = None,
  port: typing.Union[int, float] = None,
  project: str = None,
  release_channel: str = None,
  scaling_config: GoogleDataprocMetastoreServiceScalingConfig = None,
  scheduled_backup: GoogleDataprocMetastoreServiceScheduledBackup = None,
  telemetry_config: GoogleDataprocMetastoreServiceTelemetryConfig = None,
  tier: str = None,
  timeouts: GoogleDataprocMetastoreServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.serviceId">service_id</a></code> | <code>str</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.databaseType">database_type</a></code> | <code>str</code> | The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the dataproc metastore should be protected against accidental deletions. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.hiveMetastoreConfig">hive_metastore_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | hive_metastore_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.location">location</a></code> | <code>str</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.metadataIntegration">metadata_integration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | metadata_integration block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.network">network</a></code> | <code>str</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port at which the metastore service is reached. Default: 9083. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.releaseChannel">release_channel</a></code> | <code>str</code> | The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.scheduledBackup">scheduled_backup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a></code> | scheduled_backup block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.tier">tier</a></code> | <code>str</code> | The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#service_id GoogleDataprocMetastoreService#service_id}

---

##### `database_type`<sup>Optional</sup> <a name="database_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#database_type GoogleDataprocMetastoreService#database_type}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the dataproc metastore should be protected against accidental deletions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#deletion_protection GoogleDataprocMetastoreService#deletion_protection}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.encryptionConfig"></a>

```python
encryption_config: GoogleDataprocMetastoreServiceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#encryption_config GoogleDataprocMetastoreService#encryption_config}

---

##### `hive_metastore_config`<sup>Optional</sup> <a name="hive_metastore_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.hiveMetastoreConfig"></a>

```python
hive_metastore_config: GoogleDataprocMetastoreServiceHiveMetastoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

hive_metastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#hive_metastore_config GoogleDataprocMetastoreService#hive_metastore_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the metastore service.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#labels GoogleDataprocMetastoreService#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#location GoogleDataprocMetastoreService#location}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.maintenanceWindow"></a>

```python
maintenance_window: GoogleDataprocMetastoreServiceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#maintenance_window GoogleDataprocMetastoreService#maintenance_window}

---

##### `metadata_integration`<sup>Optional</sup> <a name="metadata_integration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.metadataIntegration"></a>

```python
metadata_integration: GoogleDataprocMetastoreServiceMetadataIntegration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

metadata_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#metadata_integration GoogleDataprocMetastoreService#metadata_integration}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#network GoogleDataprocMetastoreService#network}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.networkConfig"></a>

```python
network_config: GoogleDataprocMetastoreServiceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#network_config GoogleDataprocMetastoreService#network_config}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port at which the metastore service is reached. Default: 9083.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#port GoogleDataprocMetastoreService#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}.

---

##### `release_channel`<sup>Optional</sup> <a name="release_channel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.releaseChannel"></a>

```python
release_channel: str
```

- *Type:* str

The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#release_channel GoogleDataprocMetastoreService#release_channel}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.scalingConfig"></a>

```python
scaling_config: GoogleDataprocMetastoreServiceScalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#scaling_config GoogleDataprocMetastoreService#scaling_config}

---

##### `scheduled_backup`<sup>Optional</sup> <a name="scheduled_backup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.scheduledBackup"></a>

```python
scheduled_backup: GoogleDataprocMetastoreServiceScheduledBackup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

scheduled_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#scheduled_backup GoogleDataprocMetastoreService#scheduled_backup}

---

##### `telemetry_config`<sup>Optional</sup> <a name="telemetry_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.telemetryConfig"></a>

```python
telemetry_config: GoogleDataprocMetastoreServiceTelemetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#telemetry_config GoogleDataprocMetastoreService#telemetry_config}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#tier GoogleDataprocMetastoreService#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.timeouts"></a>

```python
timeouts: GoogleDataprocMetastoreServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#timeouts GoogleDataprocMetastoreService#timeouts}

---

### GoogleDataprocMetastoreServiceEncryptionConfig <a name="GoogleDataprocMetastoreServiceEncryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig(
  kms_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'. |

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#kms_key GoogleDataprocMetastoreService#kms_key}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfig <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig(
  version: str,
  auxiliary_versions: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions]] = None,
  config_overrides: typing.Mapping[str] = None,
  endpoint_protocol: str = None,
  kerberos_config: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.version">version</a></code> | <code>str</code> | The Hive metastore schema version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.auxiliaryVersions">auxiliary_versions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]]</code> | auxiliary_versions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides">config_overrides</a></code> | <code>typing.Mapping[str]</code> | A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.endpointProtocol">endpoint_protocol</a></code> | <code>str</code> | The protocol to use for the metastore service endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig">kerberos_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | kerberos_config block. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The Hive metastore schema version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}

---

##### `auxiliary_versions`<sup>Optional</sup> <a name="auxiliary_versions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.auxiliaryVersions"></a>

```python
auxiliary_versions: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]]

auxiliary_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#auxiliary_versions GoogleDataprocMetastoreService#auxiliary_versions}

---

##### `config_overrides`<sup>Optional</sup> <a name="config_overrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides"></a>

```python
config_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}

---

##### `endpoint_protocol`<sup>Optional</sup> <a name="endpoint_protocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.endpointProtocol"></a>

```python
endpoint_protocol: str
```

- *Type:* str

The protocol to use for the metastore service endpoint.

If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#endpoint_protocol GoogleDataprocMetastoreService#endpoint_protocol}

---

##### `kerberos_config`<sup>Optional</sup> <a name="kerberos_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig"></a>

```python
kerberos_config: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

kerberos_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#kerberos_config GoogleDataprocMetastoreService#kerberos_config}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions(
  key: str,
  version: str,
  config_overrides: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#key GoogleDataprocMetastoreService#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.version">version</a></code> | <code>str</code> | The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.configOverrides">config_overrides</a></code> | <code>typing.Mapping[str]</code> | A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#key GoogleDataprocMetastoreService#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.version"></a>

```python
version: str
```

- *Type:* str

The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}

---

##### `config_overrides`<sup>Optional</sup> <a name="config_overrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.configOverrides"></a>

```python
config_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig(
  keytab: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab,
  krb5_config_gcs_uri: str,
  principal: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | keytab block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri">krb5_config_gcs_uri</a></code> | <code>str</code> | A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal">principal</a></code> | <code>str</code> | A Kerberos principal that exists in the both the keytab the KDC to authenticate as. |

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab"></a>

```python
keytab: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#keytab GoogleDataprocMetastoreService#keytab}

---

##### `krb5_config_gcs_uri`<sup>Required</sup> <a name="krb5_config_gcs_uri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri"></a>

```python
krb5_config_gcs_uri: str
```

- *Type:* str

A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#krb5_config_gcs_uri GoogleDataprocMetastoreService#krb5_config_gcs_uri}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal"></a>

```python
principal: str
```

- *Type:* str

A Kerberos principal that exists in the both the keytab the KDC to authenticate as.

A typical principal is of the form "primary/instance@REALM", but there is no exact format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#principal GoogleDataprocMetastoreService#principal}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab(
  cloud_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret">cloud_secret</a></code> | <code>str</code> | The relative resource name of a Secret Manager secret version, in the following form:. |

---

##### `cloud_secret`<sup>Required</sup> <a name="cloud_secret" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret"></a>

```python
cloud_secret: str
```

- *Type:* str

The relative resource name of a Secret Manager secret version, in the following form:.

"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#cloud_secret GoogleDataprocMetastoreService#cloud_secret}

---

### GoogleDataprocMetastoreServiceMaintenanceWindow <a name="GoogleDataprocMetastoreServiceMaintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow(
  day_of_week: str,
  hour_of_day: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | The hour of day (0-23) when the window starts. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#day_of_week GoogleDataprocMetastoreService#day_of_week}

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The hour of day (0-23) when the window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#hour_of_day GoogleDataprocMetastoreService#hour_of_day}

---

### GoogleDataprocMetastoreServiceMetadataIntegration <a name="GoogleDataprocMetastoreServiceMetadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration(
  data_catalog_config: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.property.dataCatalogConfig">data_catalog_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | data_catalog_config block. |

---

##### `data_catalog_config`<sup>Required</sup> <a name="data_catalog_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.property.dataCatalogConfig"></a>

```python
data_catalog_config: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

data_catalog_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#data_catalog_config GoogleDataprocMetastoreService#data_catalog_config}

---

### GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig <a name="GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the metastore metadata should be synced to Data Catalog. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the metastore metadata should be synced to Data Catalog.

The default value is to disable syncing metastore metadata to Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}

---

### GoogleDataprocMetastoreServiceNetworkConfig <a name="GoogleDataprocMetastoreServiceNetworkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig(
  consumers: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceNetworkConfigConsumers]],
  custom_routes_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.consumers">consumers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]]</code> | consumers block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.customRoutesEnabled">custom_routes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network. |

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.consumers"></a>

```python
consumers: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceNetworkConfigConsumers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]]

consumers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#consumers GoogleDataprocMetastoreService#consumers}

---

##### `custom_routes_enabled`<sup>Optional</sup> <a name="custom_routes_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.customRoutesEnabled"></a>

```python
custom_routes_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#custom_routes_enabled GoogleDataprocMetastoreService#custom_routes_enabled}

---

### GoogleDataprocMetastoreServiceNetworkConfigConsumers <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers(
  subnetwork: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork">subnetwork</a></code> | <code>str</code> | The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. |

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.

It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
'projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#subnetwork GoogleDataprocMetastoreService#subnetwork}

---

### GoogleDataprocMetastoreServiceScalingConfig <a name="GoogleDataprocMetastoreServiceScalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig(
  autoscaling_config: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig = None,
  instance_size: str = None,
  scaling_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.instanceSize">instance_size</a></code> | <code>str</code> | Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.scalingFactor">scaling_factor</a></code> | <code>typing.Union[int, float]</code> | Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0. |

---

##### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.autoscalingConfig"></a>

```python
autoscaling_config: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#autoscaling_config GoogleDataprocMetastoreService#autoscaling_config}

---

##### `instance_size`<sup>Optional</sup> <a name="instance_size" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.instanceSize"></a>

```python
instance_size: str
```

- *Type:* str

Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#instance_size GoogleDataprocMetastoreService#instance_size}

---

##### `scaling_factor`<sup>Optional</sup> <a name="scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.scalingFactor"></a>

```python
scaling_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#scaling_factor GoogleDataprocMetastoreService#scaling_factor}

---

### GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig <a name="GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig(
  autoscaling_enabled: typing.Union[bool, IResolvable] = None,
  limit_config: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.property.autoscalingEnabled">autoscaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether autoscaling is enabled. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.property.limitConfig">limit_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | limit_config block. |

---

##### `autoscaling_enabled`<sup>Optional</sup> <a name="autoscaling_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.property.autoscalingEnabled"></a>

```python
autoscaling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether autoscaling is enabled. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#autoscaling_enabled GoogleDataprocMetastoreService#autoscaling_enabled}

---

##### `limit_config`<sup>Optional</sup> <a name="limit_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.property.limitConfig"></a>

```python
limit_config: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

limit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#limit_config GoogleDataprocMetastoreService#limit_config}

---

### GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig <a name="GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig(
  max_scaling_factor: typing.Union[int, float] = None,
  min_scaling_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.maxScalingFactor">max_scaling_factor</a></code> | <code>typing.Union[int, float]</code> | The maximum scaling factor that the service will autoscale to. The default value is 6.0. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.minScalingFactor">min_scaling_factor</a></code> | <code>typing.Union[int, float]</code> | The minimum scaling factor that the service will autoscale to. The default value is 0.1. |

---

##### `max_scaling_factor`<sup>Optional</sup> <a name="max_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.maxScalingFactor"></a>

```python
max_scaling_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum scaling factor that the service will autoscale to. The default value is 6.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#max_scaling_factor GoogleDataprocMetastoreService#max_scaling_factor}

---

##### `min_scaling_factor`<sup>Optional</sup> <a name="min_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.minScalingFactor"></a>

```python
min_scaling_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum scaling factor that the service will autoscale to. The default value is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#min_scaling_factor GoogleDataprocMetastoreService#min_scaling_factor}

---

### GoogleDataprocMetastoreServiceScheduledBackup <a name="GoogleDataprocMetastoreServiceScheduledBackup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup(
  backup_location: str,
  cron_schedule: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.backupLocation">backup_location</a></code> | <code>str</code> | A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the scheduled backup is enabled. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.timeZone">time_zone</a></code> | <code>str</code> | Specifies the time zone to be used when interpreting cronSchedule. |

---

##### `backup_location`<sup>Required</sup> <a name="backup_location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.backupLocation"></a>

```python
backup_location: str
```

- *Type:* str

A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>.

A sub-folder <backup_folder> containing backup files will be stored below it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#backup_location GoogleDataprocMetastoreService#backup_location}

---

##### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#cron_schedule GoogleDataprocMetastoreService#cron_schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the scheduled backup is enabled. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Specifies the time zone to be used when interpreting cronSchedule.

Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or Africa/Abidjan. If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#time_zone GoogleDataprocMetastoreService#time_zone}

---

### GoogleDataprocMetastoreServiceTelemetryConfig <a name="GoogleDataprocMetastoreServiceTelemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig(
  log_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.property.logFormat">log_format</a></code> | <code>str</code> | The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]. |

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#log_format GoogleDataprocMetastoreService#log_format}

---

### GoogleDataprocMetastoreServiceTimeouts <a name="GoogleDataprocMetastoreServiceTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#create GoogleDataprocMetastoreService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#delete GoogleDataprocMetastoreService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#update GoogleDataprocMetastoreService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#create GoogleDataprocMetastoreService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#delete GoogleDataprocMetastoreService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#update GoogleDataprocMetastoreService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreServiceEncryptionConfigOutputReference <a name="GoogleDataprocMetastoreServiceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]]

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resetConfigOverrides">reset_config_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_config_overrides` <a name="reset_config_overrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resetConfigOverrides"></a>

```python
def reset_config_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverridesInput">config_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides">config_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_overrides_input`<sup>Optional</sup> <a name="config_overrides_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverridesInput"></a>

```python
config_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `config_overrides`<sup>Required</sup> <a name="config_overrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides"></a>

```python
config_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput">cloud_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret">cloud_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_secret_input`<sup>Optional</sup> <a name="cloud_secret_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput"></a>

```python
cloud_secret_input: str
```

- *Type:* str

---

##### `cloud_secret`<sup>Required</sup> <a name="cloud_secret" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret"></a>

```python
cloud_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab">put_keytab</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_keytab` <a name="put_keytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab"></a>

```python
def put_keytab(
  cloud_secret: str
) -> None
```

###### `cloud_secret`<sup>Required</sup> <a name="cloud_secret" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab.parameter.cloudSecret"></a>

- *Type:* str

The relative resource name of a Secret Manager secret version, in the following form:.

"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#cloud_secret GoogleDataprocMetastoreService#cloud_secret}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput">keytab_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput">krb5_config_gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri">krb5_config_gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab"></a>

```python
keytab: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a>

---

##### `keytab_input`<sup>Optional</sup> <a name="keytab_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput"></a>

```python
keytab_input: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---

##### `krb5_config_gcs_uri_input`<sup>Optional</sup> <a name="krb5_config_gcs_uri_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput"></a>

```python
krb5_config_gcs_uri_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `krb5_config_gcs_uri`<sup>Required</sup> <a name="krb5_config_gcs_uri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri"></a>

```python
krb5_config_gcs_uri: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions">put_auxiliary_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig">put_kerberos_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetAuxiliaryVersions">reset_auxiliary_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides">reset_config_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetEndpointProtocol">reset_endpoint_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig">reset_kerberos_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auxiliary_versions` <a name="put_auxiliary_versions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions"></a>

```python
def put_auxiliary_versions(
  value: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]]

---

##### `put_kerberos_config` <a name="put_kerberos_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig"></a>

```python
def put_kerberos_config(
  keytab: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab,
  krb5_config_gcs_uri: str,
  principal: str
) -> None
```

###### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig.parameter.keytab"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#keytab GoogleDataprocMetastoreService#keytab}

---

###### `krb5_config_gcs_uri`<sup>Required</sup> <a name="krb5_config_gcs_uri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig.parameter.krb5ConfigGcsUri"></a>

- *Type:* str

A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#krb5_config_gcs_uri GoogleDataprocMetastoreService#krb5_config_gcs_uri}

---

###### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig.parameter.principal"></a>

- *Type:* str

A Kerberos principal that exists in the both the keytab the KDC to authenticate as.

A typical principal is of the form "primary/instance@REALM", but there is no exact format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#principal GoogleDataprocMetastoreService#principal}

---

##### `reset_auxiliary_versions` <a name="reset_auxiliary_versions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetAuxiliaryVersions"></a>

```python
def reset_auxiliary_versions() -> None
```

##### `reset_config_overrides` <a name="reset_config_overrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides"></a>

```python
def reset_config_overrides() -> None
```

##### `reset_endpoint_protocol` <a name="reset_endpoint_protocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetEndpointProtocol"></a>

```python
def reset_endpoint_protocol() -> None
```

##### `reset_kerberos_config` <a name="reset_kerberos_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig"></a>

```python
def reset_kerberos_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions">auxiliary_versions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig">kerberos_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersionsInput">auxiliary_versions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput">config_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocolInput">endpoint_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput">kerberos_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides">config_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol">endpoint_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auxiliary_versions`<sup>Required</sup> <a name="auxiliary_versions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions"></a>

```python
auxiliary_versions: GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a>

---

##### `kerberos_config`<sup>Required</sup> <a name="kerberos_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig"></a>

```python
kerberos_config: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a>

---

##### `auxiliary_versions_input`<sup>Optional</sup> <a name="auxiliary_versions_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersionsInput"></a>

```python
auxiliary_versions_input: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>]]

---

##### `config_overrides_input`<sup>Optional</sup> <a name="config_overrides_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput"></a>

```python
config_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `endpoint_protocol_input`<sup>Optional</sup> <a name="endpoint_protocol_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocolInput"></a>

```python
endpoint_protocol_input: str
```

- *Type:* str

---

##### `kerberos_config_input`<sup>Optional</sup> <a name="kerberos_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput"></a>

```python
kerberos_config_input: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `config_overrides`<sup>Required</sup> <a name="config_overrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides"></a>

```python
config_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `endpoint_protocol`<sup>Required</sup> <a name="endpoint_protocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol"></a>

```python
endpoint_protocol: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceHiveMetastoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---


### GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference <a name="GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

---


### GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference <a name="GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


### GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference <a name="GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig">put_data_catalog_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_catalog_config` <a name="put_data_catalog_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig"></a>

```python
def put_data_catalog_config(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the metastore metadata should be synced to Data Catalog.

The default value is to disable syncing metastore metadata to Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig">data_catalog_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfigInput">data_catalog_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_catalog_config`<sup>Required</sup> <a name="data_catalog_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig"></a>

```python
data_catalog_config: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference</a>

---

##### `data_catalog_config_input`<sup>Optional</sup> <a name="data_catalog_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfigInput"></a>

```python
data_catalog_config_input: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceMetadataIntegration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

---


### GoogleDataprocMetastoreServiceNetworkConfigConsumersList <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumersList" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceNetworkConfigConsumers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]]

---


### GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocMetastoreServiceNetworkConfigConsumers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]

---


### GoogleDataprocMetastoreServiceNetworkConfigOutputReference <a name="GoogleDataprocMetastoreServiceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers">put_consumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resetCustomRoutesEnabled">reset_custom_routes_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_consumers` <a name="put_consumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers"></a>

```python
def put_consumers(
  value: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceNetworkConfigConsumers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]]

---

##### `reset_custom_routes_enabled` <a name="reset_custom_routes_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resetCustomRoutesEnabled"></a>

```python
def reset_custom_routes_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers">consumers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList">GoogleDataprocMetastoreServiceNetworkConfigConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput">consumers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabledInput">custom_routes_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabled">custom_routes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers"></a>

```python
consumers: GoogleDataprocMetastoreServiceNetworkConfigConsumersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList">GoogleDataprocMetastoreServiceNetworkConfigConsumersList</a>

---

##### `consumers_input`<sup>Optional</sup> <a name="consumers_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput"></a>

```python
consumers_input: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreServiceNetworkConfigConsumers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>]]

---

##### `custom_routes_enabled_input`<sup>Optional</sup> <a name="custom_routes_enabled_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabledInput"></a>

```python
custom_routes_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_routes_enabled`<sup>Required</sup> <a name="custom_routes_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabled"></a>

```python
custom_routes_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

---


### GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference <a name="GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMaxScalingFactor">reset_max_scaling_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMinScalingFactor">reset_min_scaling_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_scaling_factor` <a name="reset_max_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMaxScalingFactor"></a>

```python
def reset_max_scaling_factor() -> None
```

##### `reset_min_scaling_factor` <a name="reset_min_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMinScalingFactor"></a>

```python
def reset_min_scaling_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactorInput">max_scaling_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactorInput">min_scaling_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor">max_scaling_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor">min_scaling_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_scaling_factor_input`<sup>Optional</sup> <a name="max_scaling_factor_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactorInput"></a>

```python
max_scaling_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_scaling_factor_input`<sup>Optional</sup> <a name="min_scaling_factor_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactorInput"></a>

```python
min_scaling_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_scaling_factor`<sup>Required</sup> <a name="max_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor"></a>

```python
max_scaling_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_scaling_factor`<sup>Required</sup> <a name="min_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor"></a>

```python
min_scaling_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---


### GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference <a name="GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig">put_limit_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetAutoscalingEnabled">reset_autoscaling_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetLimitConfig">reset_limit_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_limit_config` <a name="put_limit_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig"></a>

```python
def put_limit_config(
  max_scaling_factor: typing.Union[int, float] = None,
  min_scaling_factor: typing.Union[int, float] = None
) -> None
```

###### `max_scaling_factor`<sup>Optional</sup> <a name="max_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig.parameter.maxScalingFactor"></a>

- *Type:* typing.Union[int, float]

The maximum scaling factor that the service will autoscale to. The default value is 6.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#max_scaling_factor GoogleDataprocMetastoreService#max_scaling_factor}

---

###### `min_scaling_factor`<sup>Optional</sup> <a name="min_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig.parameter.minScalingFactor"></a>

- *Type:* typing.Union[int, float]

The minimum scaling factor that the service will autoscale to. The default value is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#min_scaling_factor GoogleDataprocMetastoreService#min_scaling_factor}

---

##### `reset_autoscaling_enabled` <a name="reset_autoscaling_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetAutoscalingEnabled"></a>

```python
def reset_autoscaling_enabled() -> None
```

##### `reset_limit_config` <a name="reset_limit_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetLimitConfig"></a>

```python
def reset_limit_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig">limit_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabledInput">autoscaling_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfigInput">limit_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled">autoscaling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit_config`<sup>Required</sup> <a name="limit_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig"></a>

```python
limit_config: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference</a>

---

##### `autoscaling_enabled_input`<sup>Optional</sup> <a name="autoscaling_enabled_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabledInput"></a>

```python
autoscaling_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `limit_config_input`<sup>Optional</sup> <a name="limit_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfigInput"></a>

```python
limit_config_input: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---

##### `autoscaling_enabled`<sup>Required</sup> <a name="autoscaling_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled"></a>

```python
autoscaling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---


### GoogleDataprocMetastoreServiceScalingConfigOutputReference <a name="GoogleDataprocMetastoreServiceScalingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig">put_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetAutoscalingConfig">reset_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetInstanceSize">reset_instance_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetScalingFactor">reset_scaling_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_config` <a name="put_autoscaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig"></a>

```python
def put_autoscaling_config(
  autoscaling_enabled: typing.Union[bool, IResolvable] = None,
  limit_config: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig = None
) -> None
```

###### `autoscaling_enabled`<sup>Optional</sup> <a name="autoscaling_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig.parameter.autoscalingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether autoscaling is enabled. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#autoscaling_enabled GoogleDataprocMetastoreService#autoscaling_enabled}

---

###### `limit_config`<sup>Optional</sup> <a name="limit_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig.parameter.limitConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

limit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dataproc_metastore_service#limit_config GoogleDataprocMetastoreService#limit_config}

---

##### `reset_autoscaling_config` <a name="reset_autoscaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetAutoscalingConfig"></a>

```python
def reset_autoscaling_config() -> None
```

##### `reset_instance_size` <a name="reset_instance_size" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetInstanceSize"></a>

```python
def reset_instance_size() -> None
```

##### `reset_scaling_factor` <a name="reset_scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetScalingFactor"></a>

```python
def reset_scaling_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfigInput">autoscaling_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSizeInput">instance_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactorInput">scaling_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize">instance_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor">scaling_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_config`<sup>Required</sup> <a name="autoscaling_config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig"></a>

```python
autoscaling_config: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference</a>

---

##### `autoscaling_config_input`<sup>Optional</sup> <a name="autoscaling_config_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfigInput"></a>

```python
autoscaling_config_input: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---

##### `instance_size_input`<sup>Optional</sup> <a name="instance_size_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSizeInput"></a>

```python
instance_size_input: str
```

- *Type:* str

---

##### `scaling_factor_input`<sup>Optional</sup> <a name="scaling_factor_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactorInput"></a>

```python
scaling_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_size`<sup>Required</sup> <a name="instance_size" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize"></a>

```python
instance_size: str
```

- *Type:* str

---

##### `scaling_factor`<sup>Required</sup> <a name="scaling_factor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor"></a>

```python
scaling_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceScalingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

---


### GoogleDataprocMetastoreServiceScheduledBackupOutputReference <a name="GoogleDataprocMetastoreServiceScheduledBackupOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetCronSchedule">reset_cron_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cron_schedule` <a name="reset_cron_schedule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetCronSchedule"></a>

```python
def reset_cron_schedule() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocationInput">backup_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronScheduleInput">cron_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation">backup_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_location_input`<sup>Optional</sup> <a name="backup_location_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocationInput"></a>

```python
backup_location_input: str
```

- *Type:* str

---

##### `cron_schedule_input`<sup>Optional</sup> <a name="cron_schedule_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronScheduleInput"></a>

```python
cron_schedule_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `backup_location`<sup>Required</sup> <a name="backup_location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation"></a>

```python
backup_location: str
```

- *Type:* str

---

##### `cron_schedule`<sup>Required</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceScheduledBackup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

---


### GoogleDataprocMetastoreServiceTelemetryConfigOutputReference <a name="GoogleDataprocMetastoreServiceTelemetryConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat">reset_log_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_format` <a name="reset_log_format" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat"></a>

```python
def reset_log_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput">log_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_format_input`<sup>Optional</sup> <a name="log_format_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput"></a>

```python
log_format_input: str
```

- *Type:* str

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreServiceTelemetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

---


### GoogleDataprocMetastoreServiceTimeoutsOutputReference <a name="GoogleDataprocMetastoreServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_service

googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocMetastoreServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>]

---



