# `googleDataprocMetastoreService` Submodule <a name="`googleDataprocMetastoreService` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreService <a name="GoogleDataprocMetastoreService" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service google_dataproc_metastore_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreService;

GoogleDataprocMetastoreService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .serviceId(java.lang.String)
//  .databaseType(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .encryptionConfig(GoogleDataprocMetastoreServiceEncryptionConfig)
//  .hiveMetastoreConfig(GoogleDataprocMetastoreServiceHiveMetastoreConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .maintenanceWindow(GoogleDataprocMetastoreServiceMaintenanceWindow)
//  .metadataIntegration(GoogleDataprocMetastoreServiceMetadataIntegration)
//  .network(java.lang.String)
//  .networkConfig(GoogleDataprocMetastoreServiceNetworkConfig)
//  .port(java.lang.Number)
//  .project(java.lang.String)
//  .releaseChannel(java.lang.String)
//  .scalingConfig(GoogleDataprocMetastoreServiceScalingConfig)
//  .scheduledBackup(GoogleDataprocMetastoreServiceScheduledBackup)
//  .telemetryConfig(GoogleDataprocMetastoreServiceTelemetryConfig)
//  .tier(java.lang.String)
//  .timeouts(GoogleDataprocMetastoreServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.databaseType">databaseType</a></code> | <code>java.lang.String</code> | The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the dataproc metastore should be protected against accidental deletions. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | hive_metastore_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | metadata_integration block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The TCP port at which the metastore service is reached. Default: 9083. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scheduledBackup">scheduledBackup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a></code> | scheduled_backup block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#service_id GoogleDataprocMetastoreService#service_id}

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.databaseType"></a>

- *Type:* java.lang.String

The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#database_type GoogleDataprocMetastoreService#database_type}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the dataproc metastore should be protected against accidental deletions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#deletion_protection GoogleDataprocMetastoreService#deletion_protection}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#encryption_config GoogleDataprocMetastoreService#encryption_config}

---

##### `hiveMetastoreConfig`<sup>Optional</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.hiveMetastoreConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

hive_metastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#hive_metastore_config GoogleDataprocMetastoreService#hive_metastore_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the metastore service.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#labels GoogleDataprocMetastoreService#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#location GoogleDataprocMetastoreService#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#maintenance_window GoogleDataprocMetastoreService#maintenance_window}

---

##### `metadataIntegration`<sup>Optional</sup> <a name="metadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.metadataIntegration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

metadata_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#metadata_integration GoogleDataprocMetastoreService#metadata_integration}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#network GoogleDataprocMetastoreService#network}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#network_config GoogleDataprocMetastoreService#network_config}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The TCP port at which the metastore service is reached. Default: 9083.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#port GoogleDataprocMetastoreService#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.releaseChannel"></a>

- *Type:* java.lang.String

The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#release_channel GoogleDataprocMetastoreService#release_channel}

---

##### `scalingConfig`<sup>Optional</sup> <a name="scalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#scaling_config GoogleDataprocMetastoreService#scaling_config}

---

##### `scheduledBackup`<sup>Optional</sup> <a name="scheduledBackup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scheduledBackup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

scheduled_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#scheduled_backup GoogleDataprocMetastoreService#scheduled_backup}

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.telemetryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#telemetry_config GoogleDataprocMetastoreService#telemetry_config}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#tier GoogleDataprocMetastoreService#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#timeouts GoogleDataprocMetastoreService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig">putHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration">putMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScalingConfig">putScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup">putScheduledBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetHiveMetastoreConfig">resetHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMetadataIntegration">resetMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetReleaseChannel">resetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetScalingConfig">resetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetScheduledBackup">resetScheduledBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(GoogleDataprocMetastoreServiceEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

---

##### `putHiveMetastoreConfig` <a name="putHiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig"></a>

```java
public void putHiveMetastoreConfig(GoogleDataprocMetastoreServiceHiveMetastoreConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(GoogleDataprocMetastoreServiceMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

---

##### `putMetadataIntegration` <a name="putMetadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration"></a>

```java
public void putMetadataIntegration(GoogleDataprocMetastoreServiceMetadataIntegration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig"></a>

```java
public void putNetworkConfig(GoogleDataprocMetastoreServiceNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

---

##### `putScalingConfig` <a name="putScalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScalingConfig"></a>

```java
public void putScalingConfig(GoogleDataprocMetastoreServiceScalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

---

##### `putScheduledBackup` <a name="putScheduledBackup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup"></a>

```java
public void putScheduledBackup(GoogleDataprocMetastoreServiceScheduledBackup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putScheduledBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

---

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig"></a>

```java
public void putTelemetryConfig(GoogleDataprocMetastoreServiceTelemetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataprocMetastoreServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

---

##### `resetDatabaseType` <a name="resetDatabaseType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDatabaseType"></a>

```java
public void resetDatabaseType()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetHiveMetastoreConfig` <a name="resetHiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetHiveMetastoreConfig"></a>

```java
public void resetHiveMetastoreConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetMetadataIntegration` <a name="resetMetadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMetadataIntegration"></a>

```java
public void resetMetadataIntegration()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetPort"></a>

```java
public void resetPort()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetProject"></a>

```java
public void resetProject()
```

##### `resetReleaseChannel` <a name="resetReleaseChannel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetReleaseChannel"></a>

```java
public void resetReleaseChannel()
```

##### `resetScalingConfig` <a name="resetScalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetScalingConfig"></a>

```java
public void resetScalingConfig()
```

##### `resetScheduledBackup` <a name="resetScheduledBackup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetScheduledBackup"></a>

```java
public void resetScheduledBackup()
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTelemetryConfig"></a>

```java
public void resetTelemetryConfig()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTier"></a>

```java
public void resetTier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreService;

GoogleDataprocMetastoreService.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreService;

GoogleDataprocMetastoreService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreService;

GoogleDataprocMetastoreService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreService;

GoogleDataprocMetastoreService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataprocMetastoreService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataprocMetastoreService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataprocMetastoreService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.artifactGcsUri">artifactGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference">GoogleDataprocMetastoreServiceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference">GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference">GoogleDataprocMetastoreServiceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scheduledBackup">scheduledBackup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference">GoogleDataprocMetastoreServiceScheduledBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference">GoogleDataprocMetastoreServiceTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference">GoogleDataprocMetastoreServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseTypeInput">databaseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfigInput">hiveMetastoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegrationInput">metadataIntegrationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannelInput">releaseChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scalingConfigInput">scalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scheduledBackupInput">scheduledBackupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `artifactGcsUri`<sup>Required</sup> <a name="artifactGcsUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.artifactGcsUri"></a>

```java
public java.lang.String getArtifactGcsUri();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfig"></a>

```java
public GoogleDataprocMetastoreServiceEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference">GoogleDataprocMetastoreServiceEncryptionConfigOutputReference</a>

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `hiveMetastoreConfig`<sup>Required</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfig"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference getHiveMetastoreConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindow"></a>

```java
public GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference">GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference</a>

---

##### `metadataIntegration`<sup>Required</sup> <a name="metadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegration"></a>

```java
public GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference getMetadataIntegration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfig"></a>

```java
public GoogleDataprocMetastoreServiceNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference">GoogleDataprocMetastoreServiceNetworkConfigOutputReference</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scalingConfig"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigOutputReference getScalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigOutputReference</a>

---

##### `scheduledBackup`<sup>Required</sup> <a name="scheduledBackup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scheduledBackup"></a>

```java
public GoogleDataprocMetastoreServiceScheduledBackupOutputReference getScheduledBackup();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference">GoogleDataprocMetastoreServiceScheduledBackupOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfig"></a>

```java
public GoogleDataprocMetastoreServiceTelemetryConfigOutputReference getTelemetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference">GoogleDataprocMetastoreServiceTelemetryConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeouts"></a>

```java
public GoogleDataprocMetastoreServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference">GoogleDataprocMetastoreServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseTypeInput"></a>

```java
public java.lang.String getDatabaseTypeInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

---

##### `hiveMetastoreConfigInput`<sup>Optional</sup> <a name="hiveMetastoreConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfig getHiveMetastoreConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindowInput"></a>

```java
public GoogleDataprocMetastoreServiceMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

---

##### `metadataIntegrationInput`<sup>Optional</sup> <a name="metadataIntegrationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegrationInput"></a>

```java
public GoogleDataprocMetastoreServiceMetadataIntegration getMetadataIntegrationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `releaseChannelInput`<sup>Optional</sup> <a name="releaseChannelInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannelInput"></a>

```java
public java.lang.String getReleaseChannelInput();
```

- *Type:* java.lang.String

---

##### `scalingConfigInput`<sup>Optional</sup> <a name="scalingConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scalingConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfig getScalingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

---

##### `scheduledBackupInput`<sup>Optional</sup> <a name="scheduledBackupInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.scheduledBackupInput"></a>

```java
public GoogleDataprocMetastoreServiceScheduledBackup getScheduledBackupInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceTelemetryConfig getTelemetryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `releaseChannel`<sup>Required</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannel"></a>

```java
public java.lang.String getReleaseChannel();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreServiceConfig <a name="GoogleDataprocMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceConfig;

GoogleDataprocMetastoreServiceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .serviceId(java.lang.String)
//  .databaseType(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .encryptionConfig(GoogleDataprocMetastoreServiceEncryptionConfig)
//  .hiveMetastoreConfig(GoogleDataprocMetastoreServiceHiveMetastoreConfig)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .maintenanceWindow(GoogleDataprocMetastoreServiceMaintenanceWindow)
//  .metadataIntegration(GoogleDataprocMetastoreServiceMetadataIntegration)
//  .network(java.lang.String)
//  .networkConfig(GoogleDataprocMetastoreServiceNetworkConfig)
//  .port(java.lang.Number)
//  .project(java.lang.String)
//  .releaseChannel(java.lang.String)
//  .scalingConfig(GoogleDataprocMetastoreServiceScalingConfig)
//  .scheduledBackup(GoogleDataprocMetastoreServiceScheduledBackup)
//  .telemetryConfig(GoogleDataprocMetastoreServiceTelemetryConfig)
//  .tier(java.lang.String)
//  .timeouts(GoogleDataprocMetastoreServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if the dataproc metastore should be protected against accidental deletions. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | hive_metastore_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | metadata_integration block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.network">network</a></code> | <code>java.lang.String</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port at which the metastore service is reached. Default: 9083. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.scheduledBackup">scheduledBackup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a></code> | scheduled_backup block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#service_id GoogleDataprocMetastoreService#service_id}

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#database_type GoogleDataprocMetastoreService#database_type}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if the dataproc metastore should be protected against accidental deletions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#deletion_protection GoogleDataprocMetastoreService#deletion_protection}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.encryptionConfig"></a>

```java
public GoogleDataprocMetastoreServiceEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#encryption_config GoogleDataprocMetastoreService#encryption_config}

---

##### `hiveMetastoreConfig`<sup>Optional</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.hiveMetastoreConfig"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfig getHiveMetastoreConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

hive_metastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#hive_metastore_config GoogleDataprocMetastoreService#hive_metastore_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the metastore service.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#labels GoogleDataprocMetastoreService#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#location GoogleDataprocMetastoreService#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.maintenanceWindow"></a>

```java
public GoogleDataprocMetastoreServiceMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#maintenance_window GoogleDataprocMetastoreService#maintenance_window}

---

##### `metadataIntegration`<sup>Optional</sup> <a name="metadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.metadataIntegration"></a>

```java
public GoogleDataprocMetastoreServiceMetadataIntegration getMetadataIntegration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

metadata_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#metadata_integration GoogleDataprocMetastoreService#metadata_integration}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#network GoogleDataprocMetastoreService#network}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.networkConfig"></a>

```java
public GoogleDataprocMetastoreServiceNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#network_config GoogleDataprocMetastoreService#network_config}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port at which the metastore service is reached. Default: 9083.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#port GoogleDataprocMetastoreService#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.releaseChannel"></a>

```java
public java.lang.String getReleaseChannel();
```

- *Type:* java.lang.String

The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#release_channel GoogleDataprocMetastoreService#release_channel}

---

##### `scalingConfig`<sup>Optional</sup> <a name="scalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.scalingConfig"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfig getScalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#scaling_config GoogleDataprocMetastoreService#scaling_config}

---

##### `scheduledBackup`<sup>Optional</sup> <a name="scheduledBackup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.scheduledBackup"></a>

```java
public GoogleDataprocMetastoreServiceScheduledBackup getScheduledBackup();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

scheduled_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#scheduled_backup GoogleDataprocMetastoreService#scheduled_backup}

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.telemetryConfig"></a>

```java
public GoogleDataprocMetastoreServiceTelemetryConfig getTelemetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#telemetry_config GoogleDataprocMetastoreService#telemetry_config}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#tier GoogleDataprocMetastoreService#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.timeouts"></a>

```java
public GoogleDataprocMetastoreServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#timeouts GoogleDataprocMetastoreService#timeouts}

---

### GoogleDataprocMetastoreServiceEncryptionConfig <a name="GoogleDataprocMetastoreServiceEncryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceEncryptionConfig;

GoogleDataprocMetastoreServiceEncryptionConfig.builder()
    .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#kms_key GoogleDataprocMetastoreService#kms_key}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfig <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfig;

GoogleDataprocMetastoreServiceHiveMetastoreConfig.builder()
    .version(java.lang.String)
//  .auxiliaryVersions(IResolvable)
//  .auxiliaryVersions(java.util.List<GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions>)
//  .configOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .endpointProtocol(java.lang.String)
//  .kerberosConfig(GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.version">version</a></code> | <code>java.lang.String</code> | The Hive metastore schema version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.auxiliaryVersions">auxiliaryVersions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>></code> | auxiliary_versions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides">configOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.endpointProtocol">endpointProtocol</a></code> | <code>java.lang.String</code> | The protocol to use for the metastore service endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | kerberos_config block. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Hive metastore schema version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}

---

##### `auxiliaryVersions`<sup>Optional</sup> <a name="auxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.auxiliaryVersions"></a>

```java
public java.lang.Object getAuxiliaryVersions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>>

auxiliary_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#auxiliary_versions GoogleDataprocMetastoreService#auxiliary_versions}

---

##### `configOverrides`<sup>Optional</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}

---

##### `endpointProtocol`<sup>Optional</sup> <a name="endpointProtocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.endpointProtocol"></a>

```java
public java.lang.String getEndpointProtocol();
```

- *Type:* java.lang.String

The protocol to use for the metastore service endpoint.

If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#endpoint_protocol GoogleDataprocMetastoreService#endpoint_protocol}

---

##### `kerberosConfig`<sup>Optional</sup> <a name="kerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig getKerberosConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

kerberos_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#kerberos_config GoogleDataprocMetastoreService#kerberos_config}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions;

GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.builder()
    .key(java.lang.String)
    .version(java.lang.String)
//  .configOverrides(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#key GoogleDataprocMetastoreService#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.version">version</a></code> | <code>java.lang.String</code> | The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.configOverrides">configOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#key GoogleDataprocMetastoreService#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}

---

##### `configOverrides`<sup>Optional</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.configOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;

GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.builder()
    .keytab(GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab)
    .krb5ConfigGcsUri(java.lang.String)
    .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | keytab block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri">krb5ConfigGcsUri</a></code> | <code>java.lang.String</code> | A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal">principal</a></code> | <code>java.lang.String</code> | A Kerberos principal that exists in the both the keytab the KDC to authenticate as. |

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab getKeytab();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#keytab GoogleDataprocMetastoreService#keytab}

---

##### `krb5ConfigGcsUri`<sup>Required</sup> <a name="krb5ConfigGcsUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri"></a>

```java
public java.lang.String getKrb5ConfigGcsUri();
```

- *Type:* java.lang.String

A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#krb5_config_gcs_uri GoogleDataprocMetastoreService#krb5_config_gcs_uri}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

A Kerberos principal that exists in the both the keytab the KDC to authenticate as.

A typical principal is of the form "primary/instance@REALM", but there is no exact format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#principal GoogleDataprocMetastoreService#principal}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;

GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.builder()
    .cloudSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret">cloudSecret</a></code> | <code>java.lang.String</code> | The relative resource name of a Secret Manager secret version, in the following form:. |

---

##### `cloudSecret`<sup>Required</sup> <a name="cloudSecret" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret"></a>

```java
public java.lang.String getCloudSecret();
```

- *Type:* java.lang.String

The relative resource name of a Secret Manager secret version, in the following form:.

"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#cloud_secret GoogleDataprocMetastoreService#cloud_secret}

---

### GoogleDataprocMetastoreServiceMaintenanceWindow <a name="GoogleDataprocMetastoreServiceMaintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceMaintenanceWindow;

GoogleDataprocMetastoreServiceMaintenanceWindow.builder()
    .dayOfWeek(java.lang.String)
    .hourOfDay(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | The hour of day (0-23) when the window starts. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#day_of_week GoogleDataprocMetastoreService#day_of_week}

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

The hour of day (0-23) when the window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#hour_of_day GoogleDataprocMetastoreService#hour_of_day}

---

### GoogleDataprocMetastoreServiceMetadataIntegration <a name="GoogleDataprocMetastoreServiceMetadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceMetadataIntegration;

GoogleDataprocMetastoreServiceMetadataIntegration.builder()
    .dataCatalogConfig(GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | data_catalog_config block. |

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.property.dataCatalogConfig"></a>

```java
public GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig getDataCatalogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

data_catalog_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#data_catalog_config GoogleDataprocMetastoreService#data_catalog_config}

---

### GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig <a name="GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;

GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the metastore metadata should be synced to Data Catalog. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the metastore metadata should be synced to Data Catalog.

The default value is to disable syncing metastore metadata to Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}

---

### GoogleDataprocMetastoreServiceNetworkConfig <a name="GoogleDataprocMetastoreServiceNetworkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceNetworkConfig;

GoogleDataprocMetastoreServiceNetworkConfig.builder()
    .consumers(IResolvable)
    .consumers(java.util.List<GoogleDataprocMetastoreServiceNetworkConfigConsumers>)
//  .customRoutesEnabled(java.lang.Boolean)
//  .customRoutesEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.consumers">consumers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>></code> | consumers block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.customRoutesEnabled">customRoutesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network. |

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.consumers"></a>

```java
public java.lang.Object getConsumers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>>

consumers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#consumers GoogleDataprocMetastoreService#consumers}

---

##### `customRoutesEnabled`<sup>Optional</sup> <a name="customRoutesEnabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.customRoutesEnabled"></a>

```java
public java.lang.Object getCustomRoutesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#custom_routes_enabled GoogleDataprocMetastoreService#custom_routes_enabled}

---

### GoogleDataprocMetastoreServiceNetworkConfigConsumers <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceNetworkConfigConsumers;

GoogleDataprocMetastoreServiceNetworkConfigConsumers.builder()
    .subnetwork(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. |

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.

It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
'projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#subnetwork GoogleDataprocMetastoreService#subnetwork}

---

### GoogleDataprocMetastoreServiceScalingConfig <a name="GoogleDataprocMetastoreServiceScalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceScalingConfig;

GoogleDataprocMetastoreServiceScalingConfig.builder()
//  .autoscalingConfig(GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig)
//  .instanceSize(java.lang.String)
//  .scalingFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.scalingFactor">scalingFactor</a></code> | <code>java.lang.Number</code> | Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0. |

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.autoscalingConfig"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig getAutoscalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#autoscaling_config GoogleDataprocMetastoreService#autoscaling_config}

---

##### `instanceSize`<sup>Optional</sup> <a name="instanceSize" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#instance_size GoogleDataprocMetastoreService#instance_size}

---

##### `scalingFactor`<sup>Optional</sup> <a name="scalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig.property.scalingFactor"></a>

```java
public java.lang.Number getScalingFactor();
```

- *Type:* java.lang.Number

Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#scaling_factor GoogleDataprocMetastoreService#scaling_factor}

---

### GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig <a name="GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig;

GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.builder()
//  .autoscalingEnabled(java.lang.Boolean)
//  .autoscalingEnabled(IResolvable)
//  .limitConfig(GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.property.autoscalingEnabled">autoscalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether autoscaling is enabled. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.property.limitConfig">limitConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | limit_config block. |

---

##### `autoscalingEnabled`<sup>Optional</sup> <a name="autoscalingEnabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.property.autoscalingEnabled"></a>

```java
public java.lang.Object getAutoscalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether autoscaling is enabled. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#autoscaling_enabled GoogleDataprocMetastoreService#autoscaling_enabled}

---

##### `limitConfig`<sup>Optional</sup> <a name="limitConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig.property.limitConfig"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig getLimitConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

limit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#limit_config GoogleDataprocMetastoreService#limit_config}

---

### GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig <a name="GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig;

GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.builder()
//  .maxScalingFactor(java.lang.Number)
//  .minScalingFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.maxScalingFactor">maxScalingFactor</a></code> | <code>java.lang.Number</code> | The maximum scaling factor that the service will autoscale to. The default value is 6.0. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.minScalingFactor">minScalingFactor</a></code> | <code>java.lang.Number</code> | The minimum scaling factor that the service will autoscale to. The default value is 0.1. |

---

##### `maxScalingFactor`<sup>Optional</sup> <a name="maxScalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.maxScalingFactor"></a>

```java
public java.lang.Number getMaxScalingFactor();
```

- *Type:* java.lang.Number

The maximum scaling factor that the service will autoscale to. The default value is 6.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#max_scaling_factor GoogleDataprocMetastoreService#max_scaling_factor}

---

##### `minScalingFactor`<sup>Optional</sup> <a name="minScalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.minScalingFactor"></a>

```java
public java.lang.Number getMinScalingFactor();
```

- *Type:* java.lang.Number

The minimum scaling factor that the service will autoscale to. The default value is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#min_scaling_factor GoogleDataprocMetastoreService#min_scaling_factor}

---

### GoogleDataprocMetastoreServiceScheduledBackup <a name="GoogleDataprocMetastoreServiceScheduledBackup" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceScheduledBackup;

GoogleDataprocMetastoreServiceScheduledBackup.builder()
    .backupLocation(java.lang.String)
//  .cronSchedule(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.backupLocation">backupLocation</a></code> | <code>java.lang.String</code> | A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether the scheduled backup is enabled. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone to be used when interpreting cronSchedule. |

---

##### `backupLocation`<sup>Required</sup> <a name="backupLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.backupLocation"></a>

```java
public java.lang.String getBackupLocation();
```

- *Type:* java.lang.String

A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>.

A sub-folder <backup_folder> containing backup files will be stored below it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#backup_location GoogleDataprocMetastoreService#backup_location}

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#cron_schedule GoogleDataprocMetastoreService#cron_schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether the scheduled backup is enabled. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Specifies the time zone to be used when interpreting cronSchedule.

Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or Africa/Abidjan. If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#time_zone GoogleDataprocMetastoreService#time_zone}

---

### GoogleDataprocMetastoreServiceTelemetryConfig <a name="GoogleDataprocMetastoreServiceTelemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceTelemetryConfig;

GoogleDataprocMetastoreServiceTelemetryConfig.builder()
//  .logFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]. |

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#log_format GoogleDataprocMetastoreService#log_format}

---

### GoogleDataprocMetastoreServiceTimeouts <a name="GoogleDataprocMetastoreServiceTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceTimeouts;

GoogleDataprocMetastoreServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#create GoogleDataprocMetastoreService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#delete GoogleDataprocMetastoreService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#update GoogleDataprocMetastoreService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#create GoogleDataprocMetastoreService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#delete GoogleDataprocMetastoreService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataproc_metastore_service#update GoogleDataprocMetastoreService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreServiceEncryptionConfigOutputReference <a name="GoogleDataprocMetastoreServiceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference;

new GoogleDataprocMetastoreServiceEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList;

new GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference;

new GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resetConfigOverrides">resetConfigOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigOverrides` <a name="resetConfigOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resetConfigOverrides"></a>

```java
public void resetConfigOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverridesInput">configOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides">configOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configOverridesInput`<sup>Optional</sup> <a name="configOverridesInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference;

new GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput">cloudSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret">cloudSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSecretInput`<sup>Optional</sup> <a name="cloudSecretInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput"></a>

```java
public java.lang.String getCloudSecretInput();
```

- *Type:* java.lang.String

---

##### `cloudSecret`<sup>Required</sup> <a name="cloudSecret" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret"></a>

```java
public java.lang.String getCloudSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference;

new GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab">putKeytab</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeytab` <a name="putKeytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab"></a>

```java
public void putKeytab(GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput">keytabInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput">krb5ConfigGcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri">krb5ConfigGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference getKeytab();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a>

---

##### `keytabInput`<sup>Optional</sup> <a name="keytabInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab getKeytabInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---

##### `krb5ConfigGcsUriInput`<sup>Optional</sup> <a name="krb5ConfigGcsUriInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput"></a>

```java
public java.lang.String getKrb5ConfigGcsUriInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `krb5ConfigGcsUri`<sup>Required</sup> <a name="krb5ConfigGcsUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri"></a>

```java
public java.lang.String getKrb5ConfigGcsUri();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference;

new GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions">putAuxiliaryVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig">putKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetAuxiliaryVersions">resetAuxiliaryVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides">resetConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetEndpointProtocol">resetEndpointProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig">resetKerberosConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuxiliaryVersions` <a name="putAuxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions"></a>

```java
public void putAuxiliaryVersions(IResolvable OR java.util.List<GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>>

---

##### `putKerberosConfig` <a name="putKerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig"></a>

```java
public void putKerberosConfig(GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `resetAuxiliaryVersions` <a name="resetAuxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetAuxiliaryVersions"></a>

```java
public void resetAuxiliaryVersions()
```

##### `resetConfigOverrides` <a name="resetConfigOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides"></a>

```java
public void resetConfigOverrides()
```

##### `resetEndpointProtocol` <a name="resetEndpointProtocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetEndpointProtocol"></a>

```java
public void resetEndpointProtocol()
```

##### `resetKerberosConfig` <a name="resetKerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig"></a>

```java
public void resetKerberosConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions">auxiliaryVersions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersionsInput">auxiliaryVersionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput">configOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocolInput">endpointProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput">kerberosConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides">configOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol">endpointProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auxiliaryVersions`<sup>Required</sup> <a name="auxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList getAuxiliaryVersions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a>

---

##### `kerberosConfig`<sup>Required</sup> <a name="kerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference getKerberosConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a>

---

##### `auxiliaryVersionsInput`<sup>Optional</sup> <a name="auxiliaryVersionsInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersionsInput"></a>

```java
public java.lang.Object getAuxiliaryVersionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>>

---

##### `configOverridesInput`<sup>Optional</sup> <a name="configOverridesInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `endpointProtocolInput`<sup>Optional</sup> <a name="endpointProtocolInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocolInput"></a>

```java
public java.lang.String getEndpointProtocolInput();
```

- *Type:* java.lang.String

---

##### `kerberosConfigInput`<sup>Optional</sup> <a name="kerberosConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig getKerberosConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `endpointProtocol`<sup>Required</sup> <a name="endpointProtocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol"></a>

```java
public java.lang.String getEndpointProtocol();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceHiveMetastoreConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---


### GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference <a name="GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference;

new GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput"></a>

```java
public java.lang.Number getHourOfDayInput();
```

- *Type:* java.lang.Number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

---


### GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference <a name="GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference;

new GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


### GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference <a name="GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference;

new GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig">putDataCatalogConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataCatalogConfig` <a name="putDataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig"></a>

```java
public void putDataCatalogConfig(GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfigInput">dataCatalogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig"></a>

```java
public GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference getDataCatalogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference</a>

---

##### `dataCatalogConfigInput`<sup>Optional</sup> <a name="dataCatalogConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig getDataCatalogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceMetadataIntegration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

---


### GoogleDataprocMetastoreServiceNetworkConfigConsumersList <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumersList" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceNetworkConfigConsumersList;

new GoogleDataprocMetastoreServiceNetworkConfigConsumersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get"></a>

```java
public GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>>

---


### GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference;

new GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>

---


### GoogleDataprocMetastoreServiceNetworkConfigOutputReference <a name="GoogleDataprocMetastoreServiceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceNetworkConfigOutputReference;

new GoogleDataprocMetastoreServiceNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers">putConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resetCustomRoutesEnabled">resetCustomRoutesEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumers` <a name="putConsumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers"></a>

```java
public void putConsumers(IResolvable OR java.util.List<GoogleDataprocMetastoreServiceNetworkConfigConsumers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>>

---

##### `resetCustomRoutesEnabled` <a name="resetCustomRoutesEnabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resetCustomRoutesEnabled"></a>

```java
public void resetCustomRoutesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers">consumers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList">GoogleDataprocMetastoreServiceNetworkConfigConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput">consumersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabledInput">customRoutesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabled">customRoutesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers"></a>

```java
public GoogleDataprocMetastoreServiceNetworkConfigConsumersList getConsumers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList">GoogleDataprocMetastoreServiceNetworkConfigConsumersList</a>

---

##### `consumersInput`<sup>Optional</sup> <a name="consumersInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput"></a>

```java
public java.lang.Object getConsumersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>>

---

##### `customRoutesEnabledInput`<sup>Optional</sup> <a name="customRoutesEnabledInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabledInput"></a>

```java
public java.lang.Object getCustomRoutesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customRoutesEnabled`<sup>Required</sup> <a name="customRoutesEnabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.customRoutesEnabled"></a>

```java
public java.lang.Object getCustomRoutesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

---


### GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference <a name="GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference;

new GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMaxScalingFactor">resetMaxScalingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMinScalingFactor">resetMinScalingFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxScalingFactor` <a name="resetMaxScalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMaxScalingFactor"></a>

```java
public void resetMaxScalingFactor()
```

##### `resetMinScalingFactor` <a name="resetMinScalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMinScalingFactor"></a>

```java
public void resetMinScalingFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactorInput">maxScalingFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactorInput">minScalingFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor">maxScalingFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor">minScalingFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScalingFactorInput`<sup>Optional</sup> <a name="maxScalingFactorInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactorInput"></a>

```java
public java.lang.Number getMaxScalingFactorInput();
```

- *Type:* java.lang.Number

---

##### `minScalingFactorInput`<sup>Optional</sup> <a name="minScalingFactorInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactorInput"></a>

```java
public java.lang.Number getMinScalingFactorInput();
```

- *Type:* java.lang.Number

---

##### `maxScalingFactor`<sup>Required</sup> <a name="maxScalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor"></a>

```java
public java.lang.Number getMaxScalingFactor();
```

- *Type:* java.lang.Number

---

##### `minScalingFactor`<sup>Required</sup> <a name="minScalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor"></a>

```java
public java.lang.Number getMinScalingFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---


### GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference <a name="GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference;

new GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig">putLimitConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetAutoscalingEnabled">resetAutoscalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetLimitConfig">resetLimitConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimitConfig` <a name="putLimitConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig"></a>

```java
public void putLimitConfig(GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---

##### `resetAutoscalingEnabled` <a name="resetAutoscalingEnabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetAutoscalingEnabled"></a>

```java
public void resetAutoscalingEnabled()
```

##### `resetLimitConfig` <a name="resetLimitConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetLimitConfig"></a>

```java
public void resetLimitConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig">limitConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabledInput">autoscalingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfigInput">limitConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled">autoscalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitConfig`<sup>Required</sup> <a name="limitConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference getLimitConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference</a>

---

##### `autoscalingEnabledInput`<sup>Optional</sup> <a name="autoscalingEnabledInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabledInput"></a>

```java
public java.lang.Object getAutoscalingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `limitConfigInput`<sup>Optional</sup> <a name="limitConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig getLimitConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---

##### `autoscalingEnabled`<sup>Required</sup> <a name="autoscalingEnabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled"></a>

```java
public java.lang.Object getAutoscalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---


### GoogleDataprocMetastoreServiceScalingConfigOutputReference <a name="GoogleDataprocMetastoreServiceScalingConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceScalingConfigOutputReference;

new GoogleDataprocMetastoreServiceScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig">putAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetAutoscalingConfig">resetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetInstanceSize">resetInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetScalingFactor">resetScalingFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingConfig` <a name="putAutoscalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig"></a>

```java
public void putAutoscalingConfig(GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---

##### `resetAutoscalingConfig` <a name="resetAutoscalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetAutoscalingConfig"></a>

```java
public void resetAutoscalingConfig()
```

##### `resetInstanceSize` <a name="resetInstanceSize" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetInstanceSize"></a>

```java
public void resetInstanceSize()
```

##### `resetScalingFactor` <a name="resetScalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.resetScalingFactor"></a>

```java
public void resetScalingFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfigInput">autoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSizeInput">instanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactorInput">scalingFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor">scalingFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference getAutoscalingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference</a>

---

##### `autoscalingConfigInput`<sup>Optional</sup> <a name="autoscalingConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfigInput"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig getAutoscalingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig">GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSizeInput"></a>

```java
public java.lang.String getInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `scalingFactorInput`<sup>Optional</sup> <a name="scalingFactorInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactorInput"></a>

```java
public java.lang.Number getScalingFactorInput();
```

- *Type:* java.lang.Number

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

---

##### `scalingFactor`<sup>Required</sup> <a name="scalingFactor" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor"></a>

```java
public java.lang.Number getScalingFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceScalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScalingConfig">GoogleDataprocMetastoreServiceScalingConfig</a>

---


### GoogleDataprocMetastoreServiceScheduledBackupOutputReference <a name="GoogleDataprocMetastoreServiceScheduledBackupOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceScheduledBackupOutputReference;

new GoogleDataprocMetastoreServiceScheduledBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetCronSchedule"></a>

```java
public void resetCronSchedule()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocationInput">backupLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronScheduleInput">cronScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation">backupLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupLocationInput`<sup>Optional</sup> <a name="backupLocationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocationInput"></a>

```java
public java.lang.String getBackupLocationInput();
```

- *Type:* java.lang.String

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronScheduleInput"></a>

```java
public java.lang.String getCronScheduleInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `backupLocation`<sup>Required</sup> <a name="backupLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation"></a>

```java
public java.lang.String getBackupLocation();
```

- *Type:* java.lang.String

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceScheduledBackup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceScheduledBackup">GoogleDataprocMetastoreServiceScheduledBackup</a>

---


### GoogleDataprocMetastoreServiceTelemetryConfigOutputReference <a name="GoogleDataprocMetastoreServiceTelemetryConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference;

new GoogleDataprocMetastoreServiceTelemetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat"></a>

```java
public void resetLogFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput"></a>

```java
public java.lang.String getLogFormatInput();
```

- *Type:* java.lang.String

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue"></a>

```java
public GoogleDataprocMetastoreServiceTelemetryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

---


### GoogleDataprocMetastoreServiceTimeoutsOutputReference <a name="GoogleDataprocMetastoreServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataproc_metastore_service.GoogleDataprocMetastoreServiceTimeoutsOutputReference;

new GoogleDataprocMetastoreServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

---



