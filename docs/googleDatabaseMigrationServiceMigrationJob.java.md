# `googleDatabaseMigrationServiceMigrationJob` Submodule <a name="`googleDatabaseMigrationServiceMigrationJob` Submodule" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatabaseMigrationServiceMigrationJob <a name="GoogleDatabaseMigrationServiceMigrationJob" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job google_database_migration_service_migration_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJob;

GoogleDatabaseMigrationServiceMigrationJob.Builder.create(Construct scope, java.lang.String id)
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
    .destination(java.lang.String)
    .migrationJobId(java.lang.String)
    .source(java.lang.String)
    .type(java.lang.String)
//  .displayName(java.lang.String)
//  .dumpFlags(GoogleDatabaseMigrationServiceMigrationJobDumpFlags)
//  .dumpPath(java.lang.String)
//  .dumpType(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .performanceConfig(GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig)
//  .project(java.lang.String)
//  .reverseSshConnectivity(GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity)
//  .staticIpConnectivity(GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity)
//  .timeouts(GoogleDatabaseMigrationServiceMigrationJobTimeouts)
//  .vpcPeeringConnectivity(GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.destination">destination</a></code> | <code>java.lang.String</code> | The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.migrationJobId">migrationJobId</a></code> | <code>java.lang.String</code> | The ID of the migration job. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The migration job display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | dump_flags block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpPath">dumpPath</a></code> | <code>java.lang.String</code> | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpType">dumpType</a></code> | <code>java.lang.String</code> | The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#id GoogleDatabaseMigrationServiceMigrationJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the migration job should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#project GoogleDatabaseMigrationServiceMigrationJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | reverse_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | static_ip_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | vpc_peering_connectivity block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.destination"></a>

- *Type:* java.lang.String

The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#destination GoogleDatabaseMigrationServiceMigrationJob#destination}

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.migrationJobId"></a>

- *Type:* java.lang.String

The ID of the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#migration_job_id GoogleDatabaseMigrationServiceMigrationJob#migration_job_id}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.source"></a>

- *Type:* java.lang.String

The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#source GoogleDatabaseMigrationServiceMigrationJob#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#type GoogleDatabaseMigrationServiceMigrationJob#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The migration job display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#display_name GoogleDatabaseMigrationServiceMigrationJob#display_name}

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpFlags"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#dump_flags GoogleDatabaseMigrationServiceMigrationJob#dump_flags}

---

##### `dumpPath`<sup>Optional</sup> <a name="dumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpPath"></a>

- *Type:* java.lang.String

The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).

This field and the "dump_flags" field are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#dump_path GoogleDatabaseMigrationServiceMigrationJob#dump_path}

---

##### `dumpType`<sup>Optional</sup> <a name="dumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.dumpType"></a>

- *Type:* java.lang.String

The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#dump_type GoogleDatabaseMigrationServiceMigrationJob#dump_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#id GoogleDatabaseMigrationServiceMigrationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#labels GoogleDatabaseMigrationServiceMigrationJob#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the migration job should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#location GoogleDatabaseMigrationServiceMigrationJob#location}

---

##### `performanceConfig`<sup>Optional</sup> <a name="performanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.performanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#performance_config GoogleDatabaseMigrationServiceMigrationJob#performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#project GoogleDatabaseMigrationServiceMigrationJob#project}.

---

##### `reverseSshConnectivity`<sup>Optional</sup> <a name="reverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.reverseSshConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

reverse_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#reverse_ssh_connectivity GoogleDatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}

---

##### `staticIpConnectivity`<sup>Optional</sup> <a name="staticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.staticIpConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

static_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#static_ip_connectivity GoogleDatabaseMigrationServiceMigrationJob#static_ip_connectivity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#timeouts GoogleDatabaseMigrationServiceMigrationJob#timeouts}

---

##### `vpcPeeringConnectivity`<sup>Optional</sup> <a name="vpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.vpcPeeringConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

vpc_peering_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#vpc_peering_connectivity GoogleDatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags">putDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig">putPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity">putReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity">putStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity">putVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpFlags">resetDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpPath">resetDumpPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpType">resetDumpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetPerformanceConfig">resetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity">resetReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity">resetStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity">resetVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDumpFlags` <a name="putDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags"></a>

```java
public void putDumpFlags(GoogleDatabaseMigrationServiceMigrationJobDumpFlags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `putPerformanceConfig` <a name="putPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig"></a>

```java
public void putPerformanceConfig(GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `putReverseSshConnectivity` <a name="putReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity"></a>

```java
public void putReverseSshConnectivity(GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `putStaticIpConnectivity` <a name="putStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity"></a>

```java
public void putStaticIpConnectivity(GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleDatabaseMigrationServiceMigrationJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `putVpcPeeringConnectivity` <a name="putVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity"></a>

```java
public void putVpcPeeringConnectivity(GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDumpFlags` <a name="resetDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpFlags"></a>

```java
public void resetDumpFlags()
```

##### `resetDumpPath` <a name="resetDumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpPath"></a>

```java
public void resetDumpPath()
```

##### `resetDumpType` <a name="resetDumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpType"></a>

```java
public void resetDumpType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPerformanceConfig` <a name="resetPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetPerformanceConfig"></a>

```java
public void resetPerformanceConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetReverseSshConnectivity` <a name="resetReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity"></a>

```java
public void resetReverseSshConnectivity()
```

##### `resetStaticIpConnectivity` <a name="resetStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity"></a>

```java
public void resetStaticIpConnectivity()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcPeeringConnectivity` <a name="resetVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity"></a>

```java
public void resetVpcPeeringConnectivity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDatabaseMigrationServiceMigrationJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJob;

GoogleDatabaseMigrationServiceMigrationJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJob;

GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJob;

GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJob;

GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDatabaseMigrationServiceMigrationJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDatabaseMigrationServiceMigrationJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDatabaseMigrationServiceMigrationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatabaseMigrationServiceMigrationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList">GoogleDatabaseMigrationServiceMigrationJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.phase">phase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference">GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlagsInput">dumpFlagsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPathInput">dumpPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpTypeInput">dumpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobIdInput">migrationJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfigInput">performanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput">reverseSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput">staticIpConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput">vpcPeeringConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPath">dumpPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpType">dumpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobId">migrationJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dumpFlags`<sup>Required</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlags"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference getDumpFlags();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.error"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobErrorList getError();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList">GoogleDatabaseMigrationServiceMigrationJobErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `performanceConfig`<sup>Required</sup> <a name="performanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfig"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference getPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a>

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.phase"></a>

```java
public java.lang.String getPhase();
```

- *Type:* java.lang.String

---

##### `reverseSshConnectivity`<sup>Required</sup> <a name="reverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference getReverseSshConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `staticIpConnectivity`<sup>Required</sup> <a name="staticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivity"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference getStaticIpConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeouts"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference">GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a>

---

##### `vpcPeeringConnectivity`<sup>Required</sup> <a name="vpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference getVpcPeeringConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dumpFlagsInput`<sup>Optional</sup> <a name="dumpFlagsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlagsInput"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobDumpFlags getDumpFlagsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `dumpPathInput`<sup>Optional</sup> <a name="dumpPathInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPathInput"></a>

```java
public java.lang.String getDumpPathInput();
```

- *Type:* java.lang.String

---

##### `dumpTypeInput`<sup>Optional</sup> <a name="dumpTypeInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpTypeInput"></a>

```java
public java.lang.String getDumpTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `migrationJobIdInput`<sup>Optional</sup> <a name="migrationJobIdInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobIdInput"></a>

```java
public java.lang.String getMigrationJobIdInput();
```

- *Type:* java.lang.String

---

##### `performanceConfigInput`<sup>Optional</sup> <a name="performanceConfigInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfigInput"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig getPerformanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reverseSshConnectivityInput`<sup>Optional</sup> <a name="reverseSshConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity getReverseSshConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `staticIpConnectivityInput`<sup>Optional</sup> <a name="staticIpConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity getStaticIpConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcPeeringConnectivityInput`<sup>Optional</sup> <a name="vpcPeeringConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity getVpcPeeringConnectivityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dumpPath`<sup>Required</sup> <a name="dumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPath"></a>

```java
public java.lang.String getDumpPath();
```

- *Type:* java.lang.String

---

##### `dumpType`<sup>Required</sup> <a name="dumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpType"></a>

```java
public java.lang.String getDumpType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobId"></a>

```java
public java.lang.String getMigrationJobId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatabaseMigrationServiceMigrationJobConfig <a name="GoogleDatabaseMigrationServiceMigrationJobConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobConfig;

GoogleDatabaseMigrationServiceMigrationJobConfig.builder()
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
    .destination(java.lang.String)
    .migrationJobId(java.lang.String)
    .source(java.lang.String)
    .type(java.lang.String)
//  .displayName(java.lang.String)
//  .dumpFlags(GoogleDatabaseMigrationServiceMigrationJobDumpFlags)
//  .dumpPath(java.lang.String)
//  .dumpType(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .performanceConfig(GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig)
//  .project(java.lang.String)
//  .reverseSshConnectivity(GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity)
//  .staticIpConnectivity(GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity)
//  .timeouts(GoogleDatabaseMigrationServiceMigrationJobTimeouts)
//  .vpcPeeringConnectivity(GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.destination">destination</a></code> | <code>java.lang.String</code> | The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.migrationJobId">migrationJobId</a></code> | <code>java.lang.String</code> | The ID of the migration job. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.source">source</a></code> | <code>java.lang.String</code> | The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The migration job display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | dump_flags block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpPath">dumpPath</a></code> | <code>java.lang.String</code> | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpType">dumpType</a></code> | <code>java.lang.String</code> | The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#id GoogleDatabaseMigrationServiceMigrationJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the migration job should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#project GoogleDatabaseMigrationServiceMigrationJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity">reverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | reverse_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity">staticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | static_ip_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity">vpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | vpc_peering_connectivity block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#destination GoogleDatabaseMigrationServiceMigrationJob#destination}

---

##### `migrationJobId`<sup>Required</sup> <a name="migrationJobId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.migrationJobId"></a>

```java
public java.lang.String getMigrationJobId();
```

- *Type:* java.lang.String

The ID of the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#migration_job_id GoogleDatabaseMigrationServiceMigrationJob#migration_job_id}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#source GoogleDatabaseMigrationServiceMigrationJob#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#type GoogleDatabaseMigrationServiceMigrationJob#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The migration job display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#display_name GoogleDatabaseMigrationServiceMigrationJob#display_name}

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpFlags"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobDumpFlags getDumpFlags();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#dump_flags GoogleDatabaseMigrationServiceMigrationJob#dump_flags}

---

##### `dumpPath`<sup>Optional</sup> <a name="dumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpPath"></a>

```java
public java.lang.String getDumpPath();
```

- *Type:* java.lang.String

The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).

This field and the "dump_flags" field are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#dump_path GoogleDatabaseMigrationServiceMigrationJob#dump_path}

---

##### `dumpType`<sup>Optional</sup> <a name="dumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpType"></a>

```java
public java.lang.String getDumpType();
```

- *Type:* java.lang.String

The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#dump_type GoogleDatabaseMigrationServiceMigrationJob#dump_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#id GoogleDatabaseMigrationServiceMigrationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#labels GoogleDatabaseMigrationServiceMigrationJob#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the migration job should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#location GoogleDatabaseMigrationServiceMigrationJob#location}

---

##### `performanceConfig`<sup>Optional</sup> <a name="performanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.performanceConfig"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig getPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#performance_config GoogleDatabaseMigrationServiceMigrationJob#performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#project GoogleDatabaseMigrationServiceMigrationJob#project}.

---

##### `reverseSshConnectivity`<sup>Optional</sup> <a name="reverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity getReverseSshConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

reverse_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#reverse_ssh_connectivity GoogleDatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}

---

##### `staticIpConnectivity`<sup>Optional</sup> <a name="staticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity getStaticIpConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

static_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#static_ip_connectivity GoogleDatabaseMigrationServiceMigrationJob#static_ip_connectivity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.timeouts"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#timeouts GoogleDatabaseMigrationServiceMigrationJob#timeouts}

---

##### `vpcPeeringConnectivity`<sup>Optional</sup> <a name="vpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity getVpcPeeringConnectivity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

vpc_peering_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#vpc_peering_connectivity GoogleDatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}

---

### GoogleDatabaseMigrationServiceMigrationJobDumpFlags <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobDumpFlags;

GoogleDatabaseMigrationServiceMigrationJobDumpFlags.builder()
//  .dumpFlags(IResolvable)
//  .dumpFlags(java.util.List<GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags">dumpFlags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>></code> | dump_flags block. |

---

##### `dumpFlags`<sup>Optional</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags"></a>

```java
public java.lang.Object getDumpFlags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#dump_flags GoogleDatabaseMigrationServiceMigrationJob#dump_flags}

---

### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags;

GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name">name</a></code> | <code>java.lang.String</code> | The name of the flag. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value">value</a></code> | <code>java.lang.String</code> | The vale of the flag. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#name GoogleDatabaseMigrationServiceMigrationJob#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The vale of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#value GoogleDatabaseMigrationServiceMigrationJob#value}

---

### GoogleDatabaseMigrationServiceMigrationJobError <a name="GoogleDatabaseMigrationServiceMigrationJobError" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobError;

GoogleDatabaseMigrationServiceMigrationJobError.builder()
    .build();
```


### GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig <a name="GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig;

GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.builder()
//  .dumpParallelLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel">dumpParallelLevel</a></code> | <code>java.lang.String</code> | Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"]. |

---

##### `dumpParallelLevel`<sup>Optional</sup> <a name="dumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel"></a>

```java
public java.lang.String getDumpParallelLevel();
```

- *Type:* java.lang.String

Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#dump_parallel_level GoogleDatabaseMigrationServiceMigrationJob#dump_parallel_level}

---

### GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity;

GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.builder()
//  .vm(java.lang.String)
//  .vmIp(java.lang.String)
//  .vmPort(java.lang.Number)
//  .vpc(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm">vm</a></code> | <code>java.lang.String</code> | The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp">vmIp</a></code> | <code>java.lang.String</code> | The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort">vmPort</a></code> | <code>java.lang.Number</code> | The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc">vpc</a></code> | <code>java.lang.String</code> | The name of the VPC to peer with the Cloud SQL private network. |

---

##### `vm`<sup>Optional</sup> <a name="vm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm"></a>

```java
public java.lang.String getVm();
```

- *Type:* java.lang.String

The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#vm GoogleDatabaseMigrationServiceMigrationJob#vm}

---

##### `vmIp`<sup>Optional</sup> <a name="vmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp"></a>

```java
public java.lang.String getVmIp();
```

- *Type:* java.lang.String

The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#vm_ip GoogleDatabaseMigrationServiceMigrationJob#vm_ip}

---

##### `vmPort`<sup>Optional</sup> <a name="vmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort"></a>

```java
public java.lang.Number getVmPort();
```

- *Type:* java.lang.Number

The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#vm_port GoogleDatabaseMigrationServiceMigrationJob#vm_port}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

The name of the VPC to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#vpc GoogleDatabaseMigrationServiceMigrationJob#vpc}

---

### GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity;

GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity.builder()
    .build();
```


### GoogleDatabaseMigrationServiceMigrationJobTimeouts <a name="GoogleDatabaseMigrationServiceMigrationJobTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobTimeouts;

GoogleDatabaseMigrationServiceMigrationJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#create GoogleDatabaseMigrationServiceMigrationJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#delete GoogleDatabaseMigrationServiceMigrationJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#update GoogleDatabaseMigrationServiceMigrationJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#create GoogleDatabaseMigrationServiceMigrationJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#delete GoogleDatabaseMigrationServiceMigrationJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#update GoogleDatabaseMigrationServiceMigrationJob#update}.

---

### GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity;

GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.builder()
//  .vpc(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc">vpc</a></code> | <code>java.lang.String</code> | The name of the VPC network to peer with the Cloud SQL private network. |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

The name of the VPC network to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_database_migration_service_migration_job#vpc GoogleDatabaseMigrationServiceMigrationJob#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList;

new GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>>

---


### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference;

new GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>

---


### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference;

new GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags">putDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags">resetDumpFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDumpFlags` <a name="putDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags"></a>

```java
public void putDumpFlags(IResolvable OR java.util.List<GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>>

---

##### `resetDumpFlags` <a name="resetDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags"></a>

```java
public void resetDumpFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags">dumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput">dumpFlagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dumpFlags`<sup>Required</sup> <a name="dumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList getDumpFlags();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a>

---

##### `dumpFlagsInput`<sup>Optional</sup> <a name="dumpFlagsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput"></a>

```java
public java.lang.Object getDumpFlagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobDumpFlags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---


### GoogleDatabaseMigrationServiceMigrationJobErrorList <a name="GoogleDatabaseMigrationServiceMigrationJobErrorList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobErrorList;

new GoogleDatabaseMigrationServiceMigrationJobErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference;

new GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.details">details</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError">GoogleDatabaseMigrationServiceMigrationJobError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError">GoogleDatabaseMigrationServiceMigrationJobError</a>

---


### GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference;

new GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel">resetDumpParallelLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDumpParallelLevel` <a name="resetDumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel"></a>

```java
public void resetDumpParallelLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput">dumpParallelLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel">dumpParallelLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dumpParallelLevelInput`<sup>Optional</sup> <a name="dumpParallelLevelInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput"></a>

```java
public java.lang.String getDumpParallelLevelInput();
```

- *Type:* java.lang.String

---

##### `dumpParallelLevel`<sup>Required</sup> <a name="dumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel"></a>

```java
public java.lang.String getDumpParallelLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---


### GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference;

new GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm">resetVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp">resetVmIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort">resetVmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVm` <a name="resetVm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm"></a>

```java
public void resetVm()
```

##### `resetVmIp` <a name="resetVmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp"></a>

```java
public void resetVmIp()
```

##### `resetVmPort` <a name="resetVmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort"></a>

```java
public void resetVmPort()
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc"></a>

```java
public void resetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput">vmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput">vmIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput">vmPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput">vpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm">vm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp">vmIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort">vmPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc">vpc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vmInput`<sup>Optional</sup> <a name="vmInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput"></a>

```java
public java.lang.String getVmInput();
```

- *Type:* java.lang.String

---

##### `vmIpInput`<sup>Optional</sup> <a name="vmIpInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput"></a>

```java
public java.lang.String getVmIpInput();
```

- *Type:* java.lang.String

---

##### `vmPortInput`<sup>Optional</sup> <a name="vmPortInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput"></a>

```java
public java.lang.Number getVmPortInput();
```

- *Type:* java.lang.Number

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput"></a>

```java
public java.lang.String getVpcInput();
```

- *Type:* java.lang.String

---

##### `vm`<sup>Required</sup> <a name="vm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm"></a>

```java
public java.lang.String getVm();
```

- *Type:* java.lang.String

---

##### `vmIp`<sup>Required</sup> <a name="vmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp"></a>

```java
public java.lang.String getVmIp();
```

- *Type:* java.lang.String

---

##### `vmPort`<sup>Required</sup> <a name="vmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort"></a>

```java
public java.lang.Number getVmPort();
```

- *Type:* java.lang.Number

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---


### GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference;

new GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---


### GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference;

new GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

---


### GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_migration_job.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference;

new GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc"></a>

```java
public void resetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput">vpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc">vpc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput"></a>

```java
public java.lang.String getVpcInput();
```

- *Type:* java.lang.String

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue"></a>

```java
public GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---



