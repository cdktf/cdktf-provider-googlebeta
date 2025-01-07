# `googleAlloydbInstance` Submodule <a name="`googleAlloydbInstance` Submodule" id="@cdktf/provider-google-beta.googleAlloydbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAlloydbInstance <a name="GoogleAlloydbInstance" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance google_alloydb_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstance;

GoogleAlloydbInstance.Builder.create(Construct scope, java.lang.String id)
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
    .cluster(java.lang.String)
    .instanceId(java.lang.String)
    .instanceType(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .availabilityType(java.lang.String)
//  .clientConnectionConfig(GoogleAlloydbInstanceClientConnectionConfig)
//  .databaseFlags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .gceZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineConfig(GoogleAlloydbInstanceMachineConfig)
//  .networkConfig(GoogleAlloydbInstanceNetworkConfig)
//  .observabilityConfig(GoogleAlloydbInstanceObservabilityConfig)
//  .pscInstanceConfig(GoogleAlloydbInstancePscInstanceConfig)
//  .queryInsightsConfig(GoogleAlloydbInstanceQueryInsightsConfig)
//  .readPoolConfig(GoogleAlloydbInstanceReadPoolConfig)
//  .timeouts(GoogleAlloydbInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The type of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.availabilityType">availabilityType</a></code> | <code>java.lang.String</code> | 'Availability type of an Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.clientConnectionConfig">clientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | client_connection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.databaseFlags">databaseFlags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Database flags. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-settable and human-readable display name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.gceZone">gceZone</a></code> | <code>java.lang.String</code> | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.observabilityConfig">observabilityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a></code> | observability_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.pscInstanceConfig">pscInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a></code> | psc_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.queryInsightsConfig">queryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | query_insights_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.readPoolConfig">readPoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | read_pool_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#cluster GoogleAlloydbInstance#cluster}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#instance_id GoogleAlloydbInstance#instance_id}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

The type of the instance.

If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#instance_type GoogleAlloydbInstance#instance_type}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#annotations GoogleAlloydbInstance#annotations}

---

##### `availabilityType`<sup>Optional</sup> <a name="availabilityType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.availabilityType"></a>

- *Type:* java.lang.String

'Availability type of an Instance.

Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#availability_type GoogleAlloydbInstance#availability_type}

---

##### `clientConnectionConfig`<sup>Optional</sup> <a name="clientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.clientConnectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

client_connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#client_connection_config GoogleAlloydbInstance#client_connection_config}

---

##### `databaseFlags`<sup>Optional</sup> <a name="databaseFlags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.databaseFlags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Database flags.

Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#database_flags GoogleAlloydbInstance#database_flags}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-settable and human-readable display name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#display_name GoogleAlloydbInstance#display_name}

---

##### `gceZone`<sup>Optional</sup> <a name="gceZone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.gceZone"></a>

- *Type:* java.lang.String

The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#gce_zone GoogleAlloydbInstance#gce_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the alloydb instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#labels GoogleAlloydbInstance#labels}

---

##### `machineConfig`<sup>Optional</sup> <a name="machineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.machineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#machine_config GoogleAlloydbInstance#machine_config}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#network_config GoogleAlloydbInstance#network_config}

---

##### `observabilityConfig`<sup>Optional</sup> <a name="observabilityConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.observabilityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

observability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#observability_config GoogleAlloydbInstance#observability_config}

---

##### `pscInstanceConfig`<sup>Optional</sup> <a name="pscInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.pscInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

psc_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#psc_instance_config GoogleAlloydbInstance#psc_instance_config}

---

##### `queryInsightsConfig`<sup>Optional</sup> <a name="queryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.queryInsightsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

query_insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#query_insights_config GoogleAlloydbInstance#query_insights_config}

---

##### `readPoolConfig`<sup>Optional</sup> <a name="readPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.readPoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

read_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#read_pool_config GoogleAlloydbInstance#read_pool_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#timeouts GoogleAlloydbInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig">putClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig">putMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig">putObservabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putPscInstanceConfig">putPscInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig">putQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig">putReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAvailabilityType">resetAvailabilityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetClientConnectionConfig">resetClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDatabaseFlags">resetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetGceZone">resetGceZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetMachineConfig">resetMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetObservabilityConfig">resetObservabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetPscInstanceConfig">resetPscInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetQueryInsightsConfig">resetQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetReadPoolConfig">resetReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientConnectionConfig` <a name="putClientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig"></a>

```java
public void putClientConnectionConfig(GoogleAlloydbInstanceClientConnectionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

---

##### `putMachineConfig` <a name="putMachineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig"></a>

```java
public void putMachineConfig(GoogleAlloydbInstanceMachineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putNetworkConfig"></a>

```java
public void putNetworkConfig(GoogleAlloydbInstanceNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

---

##### `putObservabilityConfig` <a name="putObservabilityConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig"></a>

```java
public void putObservabilityConfig(GoogleAlloydbInstanceObservabilityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

---

##### `putPscInstanceConfig` <a name="putPscInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putPscInstanceConfig"></a>

```java
public void putPscInstanceConfig(GoogleAlloydbInstancePscInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putPscInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

---

##### `putQueryInsightsConfig` <a name="putQueryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig"></a>

```java
public void putQueryInsightsConfig(GoogleAlloydbInstanceQueryInsightsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

---

##### `putReadPoolConfig` <a name="putReadPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig"></a>

```java
public void putReadPoolConfig(GoogleAlloydbInstanceReadPoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts"></a>

```java
public void putTimeouts(GoogleAlloydbInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAvailabilityType` <a name="resetAvailabilityType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAvailabilityType"></a>

```java
public void resetAvailabilityType()
```

##### `resetClientConnectionConfig` <a name="resetClientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetClientConnectionConfig"></a>

```java
public void resetClientConnectionConfig()
```

##### `resetDatabaseFlags` <a name="resetDatabaseFlags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDatabaseFlags"></a>

```java
public void resetDatabaseFlags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGceZone` <a name="resetGceZone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetGceZone"></a>

```java
public void resetGceZone()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMachineConfig` <a name="resetMachineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetMachineConfig"></a>

```java
public void resetMachineConfig()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetObservabilityConfig` <a name="resetObservabilityConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetObservabilityConfig"></a>

```java
public void resetObservabilityConfig()
```

##### `resetPscInstanceConfig` <a name="resetPscInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetPscInstanceConfig"></a>

```java
public void resetPscInstanceConfig()
```

##### `resetQueryInsightsConfig` <a name="resetQueryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetQueryInsightsConfig"></a>

```java
public void resetQueryInsightsConfig()
```

##### `resetReadPoolConfig` <a name="resetReadPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetReadPoolConfig"></a>

```java
public void resetReadPoolConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAlloydbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstance;

GoogleAlloydbInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstance;

GoogleAlloydbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstance;

GoogleAlloydbInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstance;

GoogleAlloydbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleAlloydbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleAlloydbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleAlloydbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleAlloydbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAlloydbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfig">clientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference">GoogleAlloydbInstanceMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference">GoogleAlloydbInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.observabilityConfig">observabilityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference">GoogleAlloydbInstanceObservabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.outboundPublicIpAddresses">outboundPublicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.pscInstanceConfig">pscInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference">GoogleAlloydbInstancePscInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfig">queryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference">GoogleAlloydbInstanceQueryInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfig">readPoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference">GoogleAlloydbInstanceReadPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference">GoogleAlloydbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityTypeInput">availabilityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfigInput">clientConnectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlagsInput">databaseFlagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZoneInput">gceZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfigInput">machineConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.observabilityConfigInput">observabilityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.pscInstanceConfigInput">pscInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfigInput">queryInsightsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfigInput">readPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityType">availabilityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlags">databaseFlags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZone">gceZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientConnectionConfig`<sup>Required</sup> <a name="clientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfig"></a>

```java
public GoogleAlloydbInstanceClientConnectionConfigOutputReference getClientConnectionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `machineConfig`<sup>Required</sup> <a name="machineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfig"></a>

```java
public GoogleAlloydbInstanceMachineConfigOutputReference getMachineConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference">GoogleAlloydbInstanceMachineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.networkConfig"></a>

```java
public GoogleAlloydbInstanceNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference">GoogleAlloydbInstanceNetworkConfigOutputReference</a>

---

##### `observabilityConfig`<sup>Required</sup> <a name="observabilityConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.observabilityConfig"></a>

```java
public GoogleAlloydbInstanceObservabilityConfigOutputReference getObservabilityConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference">GoogleAlloydbInstanceObservabilityConfigOutputReference</a>

---

##### `outboundPublicIpAddresses`<sup>Required</sup> <a name="outboundPublicIpAddresses" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.outboundPublicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getOutboundPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pscInstanceConfig`<sup>Required</sup> <a name="pscInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.pscInstanceConfig"></a>

```java
public GoogleAlloydbInstancePscInstanceConfigOutputReference getPscInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference">GoogleAlloydbInstancePscInstanceConfigOutputReference</a>

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `queryInsightsConfig`<sup>Required</sup> <a name="queryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfig"></a>

```java
public GoogleAlloydbInstanceQueryInsightsConfigOutputReference getQueryInsightsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference">GoogleAlloydbInstanceQueryInsightsConfigOutputReference</a>

---

##### `readPoolConfig`<sup>Required</sup> <a name="readPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfig"></a>

```java
public GoogleAlloydbInstanceReadPoolConfigOutputReference getReadPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference">GoogleAlloydbInstanceReadPoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeouts"></a>

```java
public GoogleAlloydbInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference">GoogleAlloydbInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `availabilityTypeInput`<sup>Optional</sup> <a name="availabilityTypeInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityTypeInput"></a>

```java
public java.lang.String getAvailabilityTypeInput();
```

- *Type:* java.lang.String

---

##### `clientConnectionConfigInput`<sup>Optional</sup> <a name="clientConnectionConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfigInput"></a>

```java
public GoogleAlloydbInstanceClientConnectionConfig getClientConnectionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `databaseFlagsInput`<sup>Optional</sup> <a name="databaseFlagsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gceZoneInput`<sup>Optional</sup> <a name="gceZoneInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZoneInput"></a>

```java
public java.lang.String getGceZoneInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `machineConfigInput`<sup>Optional</sup> <a name="machineConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfigInput"></a>

```java
public GoogleAlloydbInstanceMachineConfig getMachineConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.networkConfigInput"></a>

```java
public GoogleAlloydbInstanceNetworkConfig getNetworkConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

---

##### `observabilityConfigInput`<sup>Optional</sup> <a name="observabilityConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.observabilityConfigInput"></a>

```java
public GoogleAlloydbInstanceObservabilityConfig getObservabilityConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

---

##### `pscInstanceConfigInput`<sup>Optional</sup> <a name="pscInstanceConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.pscInstanceConfigInput"></a>

```java
public GoogleAlloydbInstancePscInstanceConfig getPscInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

---

##### `queryInsightsConfigInput`<sup>Optional</sup> <a name="queryInsightsConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfigInput"></a>

```java
public GoogleAlloydbInstanceQueryInsightsConfig getQueryInsightsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

---

##### `readPoolConfigInput`<sup>Optional</sup> <a name="readPoolConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfigInput"></a>

```java
public GoogleAlloydbInstanceReadPoolConfig getReadPoolConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `availabilityType`<sup>Required</sup> <a name="availabilityType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityType"></a>

```java
public java.lang.String getAvailabilityType();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `gceZone`<sup>Required</sup> <a name="gceZone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZone"></a>

```java
public java.lang.String getGceZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAlloydbInstanceClientConnectionConfig <a name="GoogleAlloydbInstanceClientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceClientConnectionConfig;

GoogleAlloydbInstanceClientConnectionConfig.builder()
//  .requireConnectors(java.lang.Boolean)
//  .requireConnectors(IResolvable)
//  .sslConfig(GoogleAlloydbInstanceClientConnectionConfigSslConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.requireConnectors">requireConnectors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configuration to enforce connectors only (ex: AuthProxy) connections to the database. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | ssl_config block. |

---

##### `requireConnectors`<sup>Optional</sup> <a name="requireConnectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.requireConnectors"></a>

```java
public java.lang.Object getRequireConnectors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configuration to enforce connectors only (ex: AuthProxy) connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#require_connectors GoogleAlloydbInstance#require_connectors}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.sslConfig"></a>

```java
public GoogleAlloydbInstanceClientConnectionConfigSslConfig getSslConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#ssl_config GoogleAlloydbInstance#ssl_config}

---

### GoogleAlloydbInstanceClientConnectionConfigSslConfig <a name="GoogleAlloydbInstanceClientConnectionConfigSslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceClientConnectionConfigSslConfig;

GoogleAlloydbInstanceClientConnectionConfigSslConfig.builder()
//  .sslMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"]. |

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#ssl_mode GoogleAlloydbInstance#ssl_mode}

---

### GoogleAlloydbInstanceConfig <a name="GoogleAlloydbInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceConfig;

GoogleAlloydbInstanceConfig.builder()
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
    .cluster(java.lang.String)
    .instanceId(java.lang.String)
    .instanceType(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .availabilityType(java.lang.String)
//  .clientConnectionConfig(GoogleAlloydbInstanceClientConnectionConfig)
//  .databaseFlags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .gceZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineConfig(GoogleAlloydbInstanceMachineConfig)
//  .networkConfig(GoogleAlloydbInstanceNetworkConfig)
//  .observabilityConfig(GoogleAlloydbInstanceObservabilityConfig)
//  .pscInstanceConfig(GoogleAlloydbInstancePscInstanceConfig)
//  .queryInsightsConfig(GoogleAlloydbInstanceQueryInsightsConfig)
//  .readPoolConfig(GoogleAlloydbInstanceReadPoolConfig)
//  .timeouts(GoogleAlloydbInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The type of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.availabilityType">availabilityType</a></code> | <code>java.lang.String</code> | 'Availability type of an Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.clientConnectionConfig">clientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | client_connection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.databaseFlags">databaseFlags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Database flags. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-settable and human-readable display name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.gceZone">gceZone</a></code> | <code>java.lang.String</code> | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.observabilityConfig">observabilityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a></code> | observability_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.pscInstanceConfig">pscInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a></code> | psc_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.queryInsightsConfig">queryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | query_insights_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.readPoolConfig">readPoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | read_pool_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#cluster GoogleAlloydbInstance#cluster}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#instance_id GoogleAlloydbInstance#instance_id}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The type of the instance.

If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#instance_type GoogleAlloydbInstance#instance_type}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#annotations GoogleAlloydbInstance#annotations}

---

##### `availabilityType`<sup>Optional</sup> <a name="availabilityType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.availabilityType"></a>

```java
public java.lang.String getAvailabilityType();
```

- *Type:* java.lang.String

'Availability type of an Instance.

Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#availability_type GoogleAlloydbInstance#availability_type}

---

##### `clientConnectionConfig`<sup>Optional</sup> <a name="clientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.clientConnectionConfig"></a>

```java
public GoogleAlloydbInstanceClientConnectionConfig getClientConnectionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

client_connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#client_connection_config GoogleAlloydbInstance#client_connection_config}

---

##### `databaseFlags`<sup>Optional</sup> <a name="databaseFlags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.databaseFlags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDatabaseFlags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Database flags.

Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#database_flags GoogleAlloydbInstance#database_flags}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-settable and human-readable display name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#display_name GoogleAlloydbInstance#display_name}

---

##### `gceZone`<sup>Optional</sup> <a name="gceZone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.gceZone"></a>

```java
public java.lang.String getGceZone();
```

- *Type:* java.lang.String

The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#gce_zone GoogleAlloydbInstance#gce_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the alloydb instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#labels GoogleAlloydbInstance#labels}

---

##### `machineConfig`<sup>Optional</sup> <a name="machineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.machineConfig"></a>

```java
public GoogleAlloydbInstanceMachineConfig getMachineConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#machine_config GoogleAlloydbInstance#machine_config}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.networkConfig"></a>

```java
public GoogleAlloydbInstanceNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#network_config GoogleAlloydbInstance#network_config}

---

##### `observabilityConfig`<sup>Optional</sup> <a name="observabilityConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.observabilityConfig"></a>

```java
public GoogleAlloydbInstanceObservabilityConfig getObservabilityConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

observability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#observability_config GoogleAlloydbInstance#observability_config}

---

##### `pscInstanceConfig`<sup>Optional</sup> <a name="pscInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.pscInstanceConfig"></a>

```java
public GoogleAlloydbInstancePscInstanceConfig getPscInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

psc_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#psc_instance_config GoogleAlloydbInstance#psc_instance_config}

---

##### `queryInsightsConfig`<sup>Optional</sup> <a name="queryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.queryInsightsConfig"></a>

```java
public GoogleAlloydbInstanceQueryInsightsConfig getQueryInsightsConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

query_insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#query_insights_config GoogleAlloydbInstance#query_insights_config}

---

##### `readPoolConfig`<sup>Optional</sup> <a name="readPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.readPoolConfig"></a>

```java
public GoogleAlloydbInstanceReadPoolConfig getReadPoolConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

read_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#read_pool_config GoogleAlloydbInstance#read_pool_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.timeouts"></a>

```java
public GoogleAlloydbInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#timeouts GoogleAlloydbInstance#timeouts}

---

### GoogleAlloydbInstanceMachineConfig <a name="GoogleAlloydbInstanceMachineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceMachineConfig;

GoogleAlloydbInstanceMachineConfig.builder()
//  .cpuCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | The number of CPU's in the VM instance. |

---

##### `cpuCount`<sup>Optional</sup> <a name="cpuCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#cpu_count GoogleAlloydbInstance#cpu_count}

---

### GoogleAlloydbInstanceNetworkConfig <a name="GoogleAlloydbInstanceNetworkConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceNetworkConfig;

GoogleAlloydbInstanceNetworkConfig.builder()
//  .authorizedExternalNetworks(IResolvable)
//  .authorizedExternalNetworks(java.util.List<GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks>)
//  .enableOutboundPublicIp(java.lang.Boolean)
//  .enableOutboundPublicIp(IResolvable)
//  .enablePublicIp(java.lang.Boolean)
//  .enablePublicIp(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.authorizedExternalNetworks">authorizedExternalNetworks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>></code> | authorized_external_networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.enableOutboundPublicIp">enableOutboundPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabling outbound public ip for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.enablePublicIp">enablePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabling public ip for the instance. |

---

##### `authorizedExternalNetworks`<sup>Optional</sup> <a name="authorizedExternalNetworks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.authorizedExternalNetworks"></a>

```java
public java.lang.Object getAuthorizedExternalNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>>

authorized_external_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#authorized_external_networks GoogleAlloydbInstance#authorized_external_networks}

---

##### `enableOutboundPublicIp`<sup>Optional</sup> <a name="enableOutboundPublicIp" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.enableOutboundPublicIp"></a>

```java
public java.lang.Object getEnableOutboundPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabling outbound public ip for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#enable_outbound_public_ip GoogleAlloydbInstance#enable_outbound_public_ip}

---

##### `enablePublicIp`<sup>Optional</sup> <a name="enablePublicIp" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.enablePublicIp"></a>

```java
public java.lang.Object getEnablePublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabling public ip for the instance.

If a user wishes to disable this,
please also clear the list of the authorized external networks set on
the same instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#enable_public_ip GoogleAlloydbInstance#enable_public_ip}

---

### GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks <a name="GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks;

GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.builder()
//  .cidrRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | CIDR range for one authorized network of the instance. |

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

CIDR range for one authorized network of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#cidr_range GoogleAlloydbInstance#cidr_range}

---

### GoogleAlloydbInstanceObservabilityConfig <a name="GoogleAlloydbInstanceObservabilityConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceObservabilityConfig;

GoogleAlloydbInstanceObservabilityConfig.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .maxQueryStringLength(java.lang.Number)
//  .preserveComments(java.lang.Boolean)
//  .preserveComments(IResolvable)
//  .queryPlansPerMinute(java.lang.Number)
//  .recordApplicationTags(java.lang.Boolean)
//  .recordApplicationTags(IResolvable)
//  .trackActiveQueries(java.lang.Boolean)
//  .trackActiveQueries(IResolvable)
//  .trackWaitEvents(java.lang.Boolean)
//  .trackWaitEvents(IResolvable)
//  .trackWaitEventTypes(java.lang.Boolean)
//  .trackWaitEventTypes(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Observability feature status for an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.maxQueryStringLength">maxQueryStringLength</a></code> | <code>java.lang.Number</code> | Query string length. The default value is 10240. Any integer between 1024 and 100000 is considered valid. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.preserveComments">preserveComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Preserve comments in the query string. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>java.lang.Number</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.recordApplicationTags">recordApplicationTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Record application tags for an instance. This flag is turned "on" by default. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackActiveQueries">trackActiveQueries</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Track actively running queries. If not set, default value is "off". |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackWaitEvents">trackWaitEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Record wait events during query execution for an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackWaitEventTypes">trackWaitEventTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Record wait event types during query execution for an instance. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Observability feature status for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#enabled GoogleAlloydbInstance#enabled}

---

##### `maxQueryStringLength`<sup>Optional</sup> <a name="maxQueryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.maxQueryStringLength"></a>

```java
public java.lang.Number getMaxQueryStringLength();
```

- *Type:* java.lang.Number

Query string length. The default value is 10240. Any integer between 1024 and 100000 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#max_query_string_length GoogleAlloydbInstance#max_query_string_length}

---

##### `preserveComments`<sup>Optional</sup> <a name="preserveComments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.preserveComments"></a>

```java
public java.lang.Object getPreserveComments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Preserve comments in the query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#preserve_comments GoogleAlloydbInstance#preserve_comments}

---

##### `queryPlansPerMinute`<sup>Optional</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.queryPlansPerMinute"></a>

```java
public java.lang.Number getQueryPlansPerMinute();
```

- *Type:* java.lang.Number

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 200 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}

---

##### `recordApplicationTags`<sup>Optional</sup> <a name="recordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.recordApplicationTags"></a>

```java
public java.lang.Object getRecordApplicationTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}

---

##### `trackActiveQueries`<sup>Optional</sup> <a name="trackActiveQueries" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackActiveQueries"></a>

```java
public java.lang.Object getTrackActiveQueries();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Track actively running queries. If not set, default value is "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#track_active_queries GoogleAlloydbInstance#track_active_queries}

---

##### `trackWaitEvents`<sup>Optional</sup> <a name="trackWaitEvents" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackWaitEvents"></a>

```java
public java.lang.Object getTrackWaitEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Record wait events during query execution for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#track_wait_events GoogleAlloydbInstance#track_wait_events}

---

##### `trackWaitEventTypes`<sup>Optional</sup> <a name="trackWaitEventTypes" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackWaitEventTypes"></a>

```java
public java.lang.Object getTrackWaitEventTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Record wait event types during query execution for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#track_wait_event_types GoogleAlloydbInstance#track_wait_event_types}

---

### GoogleAlloydbInstancePscInstanceConfig <a name="GoogleAlloydbInstancePscInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstancePscInstanceConfig;

GoogleAlloydbInstancePscInstanceConfig.builder()
//  .allowedConsumerProjects(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>java.util.List<java.lang.String></code> | List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance. |

---

##### `allowedConsumerProjects`<sup>Optional</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig.property.allowedConsumerProjects"></a>

```java
public java.util.List<java.lang.String> getAllowedConsumerProjects();
```

- *Type:* java.util.List<java.lang.String>

List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance.

These should be specified as project numbers only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#allowed_consumer_projects GoogleAlloydbInstance#allowed_consumer_projects}

---

### GoogleAlloydbInstanceQueryInsightsConfig <a name="GoogleAlloydbInstanceQueryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceQueryInsightsConfig;

GoogleAlloydbInstanceQueryInsightsConfig.builder()
//  .queryPlansPerMinute(java.lang.Number)
//  .queryStringLength(java.lang.Number)
//  .recordApplicationTags(java.lang.Boolean)
//  .recordApplicationTags(IResolvable)
//  .recordClientAddress(java.lang.Boolean)
//  .recordClientAddress(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>java.lang.Number</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryStringLength">queryStringLength</a></code> | <code>java.lang.Number</code> | Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordApplicationTags">recordApplicationTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Record application tags for an instance. This flag is turned "on" by default. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordClientAddress">recordClientAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Record client address for an instance. Client address is PII information. This flag is turned "on" by default. |

---

##### `queryPlansPerMinute`<sup>Optional</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute"></a>

```java
public java.lang.Number getQueryPlansPerMinute();
```

- *Type:* java.lang.Number

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 20 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}

---

##### `queryStringLength`<sup>Optional</sup> <a name="queryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryStringLength"></a>

```java
public java.lang.Number getQueryStringLength();
```

- *Type:* java.lang.Number

Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#query_string_length GoogleAlloydbInstance#query_string_length}

---

##### `recordApplicationTags`<sup>Optional</sup> <a name="recordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordApplicationTags"></a>

```java
public java.lang.Object getRecordApplicationTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}

---

##### `recordClientAddress`<sup>Optional</sup> <a name="recordClientAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordClientAddress"></a>

```java
public java.lang.Object getRecordClientAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Record client address for an instance. Client address is PII information. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#record_client_address GoogleAlloydbInstance#record_client_address}

---

### GoogleAlloydbInstanceReadPoolConfig <a name="GoogleAlloydbInstanceReadPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceReadPoolConfig;

GoogleAlloydbInstanceReadPoolConfig.builder()
//  .nodeCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Read capacity, i.e. number of nodes in a read pool instance. |

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Read capacity, i.e. number of nodes in a read pool instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#node_count GoogleAlloydbInstance#node_count}

---

### GoogleAlloydbInstanceTimeouts <a name="GoogleAlloydbInstanceTimeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceTimeouts;

GoogleAlloydbInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#create GoogleAlloydbInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#delete GoogleAlloydbInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#update GoogleAlloydbInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#create GoogleAlloydbInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#delete GoogleAlloydbInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_alloydb_instance#update GoogleAlloydbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAlloydbInstanceClientConnectionConfigOutputReference <a name="GoogleAlloydbInstanceClientConnectionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceClientConnectionConfigOutputReference;

new GoogleAlloydbInstanceClientConnectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors">resetRequireConnectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig"></a>

```java
public void putSslConfig(GoogleAlloydbInstanceClientConnectionConfigSslConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---

##### `resetRequireConnectors` <a name="resetRequireConnectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors"></a>

```java
public void resetRequireConnectors()
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig"></a>

```java
public void resetSslConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput">requireConnectorsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors">requireConnectors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig"></a>

```java
public GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference getSslConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference</a>

---

##### `requireConnectorsInput`<sup>Optional</sup> <a name="requireConnectorsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput"></a>

```java
public java.lang.Object getRequireConnectorsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput"></a>

```java
public GoogleAlloydbInstanceClientConnectionConfigSslConfig getSslConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---

##### `requireConnectors`<sup>Required</sup> <a name="requireConnectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors"></a>

```java
public java.lang.Object getRequireConnectors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue"></a>

```java
public GoogleAlloydbInstanceClientConnectionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

---


### GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference <a name="GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference;

new GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode"></a>

```java
public void resetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue"></a>

```java
public GoogleAlloydbInstanceClientConnectionConfigSslConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---


### GoogleAlloydbInstanceMachineConfigOutputReference <a name="GoogleAlloydbInstanceMachineConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceMachineConfigOutputReference;

new GoogleAlloydbInstanceMachineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resetCpuCount">resetCpuCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCount` <a name="resetCpuCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resetCpuCount"></a>

```java
public void resetCpuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCountInput">cpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCountInput`<sup>Optional</sup> <a name="cpuCountInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCountInput"></a>

```java
public java.lang.Number getCpuCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue"></a>

```java
public GoogleAlloydbInstanceMachineConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

---


### GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList <a name="GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList;

new GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get"></a>

```java
public GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>>

---


### GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference <a name="GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference;

new GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resetCidrRange">resetCidrRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrRange` <a name="resetCidrRange" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resetCidrRange"></a>

```java
public void resetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRangeInput">cidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRangeInput"></a>

```java
public java.lang.String getCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>

---


### GoogleAlloydbInstanceNetworkConfigOutputReference <a name="GoogleAlloydbInstanceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceNetworkConfigOutputReference;

new GoogleAlloydbInstanceNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks">putAuthorizedExternalNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetAuthorizedExternalNetworks">resetAuthorizedExternalNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetEnableOutboundPublicIp">resetEnableOutboundPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetEnablePublicIp">resetEnablePublicIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizedExternalNetworks` <a name="putAuthorizedExternalNetworks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks"></a>

```java
public void putAuthorizedExternalNetworks(IResolvable OR java.util.List<GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>>

---

##### `resetAuthorizedExternalNetworks` <a name="resetAuthorizedExternalNetworks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetAuthorizedExternalNetworks"></a>

```java
public void resetAuthorizedExternalNetworks()
```

##### `resetEnableOutboundPublicIp` <a name="resetEnableOutboundPublicIp" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetEnableOutboundPublicIp"></a>

```java
public void resetEnableOutboundPublicIp()
```

##### `resetEnablePublicIp` <a name="resetEnablePublicIp" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetEnablePublicIp"></a>

```java
public void resetEnablePublicIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks">authorizedExternalNetworks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworksInput">authorizedExternalNetworksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIpInput">enableOutboundPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIpInput">enablePublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp">enableOutboundPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp">enablePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedExternalNetworks`<sup>Required</sup> <a name="authorizedExternalNetworks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks"></a>

```java
public GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList getAuthorizedExternalNetworks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a>

---

##### `authorizedExternalNetworksInput`<sup>Optional</sup> <a name="authorizedExternalNetworksInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworksInput"></a>

```java
public java.lang.Object getAuthorizedExternalNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>>

---

##### `enableOutboundPublicIpInput`<sup>Optional</sup> <a name="enableOutboundPublicIpInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIpInput"></a>

```java
public java.lang.Object getEnableOutboundPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePublicIpInput`<sup>Optional</sup> <a name="enablePublicIpInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIpInput"></a>

```java
public java.lang.Object getEnablePublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableOutboundPublicIp`<sup>Required</sup> <a name="enableOutboundPublicIp" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp"></a>

```java
public java.lang.Object getEnableOutboundPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePublicIp`<sup>Required</sup> <a name="enablePublicIp" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp"></a>

```java
public java.lang.Object getEnablePublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue"></a>

```java
public GoogleAlloydbInstanceNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

---


### GoogleAlloydbInstanceObservabilityConfigOutputReference <a name="GoogleAlloydbInstanceObservabilityConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceObservabilityConfigOutputReference;

new GoogleAlloydbInstanceObservabilityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetMaxQueryStringLength">resetMaxQueryStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetPreserveComments">resetPreserveComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetQueryPlansPerMinute">resetQueryPlansPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetRecordApplicationTags">resetRecordApplicationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackActiveQueries">resetTrackActiveQueries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackWaitEvents">resetTrackWaitEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackWaitEventTypes">resetTrackWaitEventTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMaxQueryStringLength` <a name="resetMaxQueryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetMaxQueryStringLength"></a>

```java
public void resetMaxQueryStringLength()
```

##### `resetPreserveComments` <a name="resetPreserveComments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetPreserveComments"></a>

```java
public void resetPreserveComments()
```

##### `resetQueryPlansPerMinute` <a name="resetQueryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetQueryPlansPerMinute"></a>

```java
public void resetQueryPlansPerMinute()
```

##### `resetRecordApplicationTags` <a name="resetRecordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetRecordApplicationTags"></a>

```java
public void resetRecordApplicationTags()
```

##### `resetTrackActiveQueries` <a name="resetTrackActiveQueries" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackActiveQueries"></a>

```java
public void resetTrackActiveQueries()
```

##### `resetTrackWaitEvents` <a name="resetTrackWaitEvents" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackWaitEvents"></a>

```java
public void resetTrackWaitEvents()
```

##### `resetTrackWaitEventTypes` <a name="resetTrackWaitEventTypes" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackWaitEventTypes"></a>

```java
public void resetTrackWaitEventTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.maxQueryStringLengthInput">maxQueryStringLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.preserveCommentsInput">preserveCommentsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.queryPlansPerMinuteInput">queryPlansPerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.recordApplicationTagsInput">recordApplicationTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackActiveQueriesInput">trackActiveQueriesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventsInput">trackWaitEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventTypesInput">trackWaitEventTypesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.maxQueryStringLength">maxQueryStringLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.preserveComments">preserveComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackActiveQueries">trackActiveQueries</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEvents">trackWaitEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventTypes">trackWaitEventTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxQueryStringLengthInput`<sup>Optional</sup> <a name="maxQueryStringLengthInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.maxQueryStringLengthInput"></a>

```java
public java.lang.Number getMaxQueryStringLengthInput();
```

- *Type:* java.lang.Number

---

##### `preserveCommentsInput`<sup>Optional</sup> <a name="preserveCommentsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.preserveCommentsInput"></a>

```java
public java.lang.Object getPreserveCommentsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryPlansPerMinuteInput`<sup>Optional</sup> <a name="queryPlansPerMinuteInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```java
public java.lang.Number getQueryPlansPerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `recordApplicationTagsInput`<sup>Optional</sup> <a name="recordApplicationTagsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.recordApplicationTagsInput"></a>

```java
public java.lang.Object getRecordApplicationTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trackActiveQueriesInput`<sup>Optional</sup> <a name="trackActiveQueriesInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackActiveQueriesInput"></a>

```java
public java.lang.Object getTrackActiveQueriesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trackWaitEventsInput`<sup>Optional</sup> <a name="trackWaitEventsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventsInput"></a>

```java
public java.lang.Object getTrackWaitEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trackWaitEventTypesInput`<sup>Optional</sup> <a name="trackWaitEventTypesInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventTypesInput"></a>

```java
public java.lang.Object getTrackWaitEventTypesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxQueryStringLength`<sup>Required</sup> <a name="maxQueryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.maxQueryStringLength"></a>

```java
public java.lang.Number getMaxQueryStringLength();
```

- *Type:* java.lang.Number

---

##### `preserveComments`<sup>Required</sup> <a name="preserveComments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.preserveComments"></a>

```java
public java.lang.Object getPreserveComments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.queryPlansPerMinute"></a>

```java
public java.lang.Number getQueryPlansPerMinute();
```

- *Type:* java.lang.Number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.recordApplicationTags"></a>

```java
public java.lang.Object getRecordApplicationTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trackActiveQueries`<sup>Required</sup> <a name="trackActiveQueries" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackActiveQueries"></a>

```java
public java.lang.Object getTrackActiveQueries();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trackWaitEvents`<sup>Required</sup> <a name="trackWaitEvents" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEvents"></a>

```java
public java.lang.Object getTrackWaitEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trackWaitEventTypes`<sup>Required</sup> <a name="trackWaitEventTypes" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventTypes"></a>

```java
public java.lang.Object getTrackWaitEventTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.internalValue"></a>

```java
public GoogleAlloydbInstanceObservabilityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

---


### GoogleAlloydbInstancePscInstanceConfigOutputReference <a name="GoogleAlloydbInstancePscInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstancePscInstanceConfigOutputReference;

new GoogleAlloydbInstancePscInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resetAllowedConsumerProjects">resetAllowedConsumerProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedConsumerProjects` <a name="resetAllowedConsumerProjects" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resetAllowedConsumerProjects"></a>

```java
public void resetAllowedConsumerProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName">pscDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink">serviceAttachmentLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjectsInput">allowedConsumerProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pscDnsName`<sup>Required</sup> <a name="pscDnsName" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName"></a>

```java
public java.lang.String getPscDnsName();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentLink`<sup>Required</sup> <a name="serviceAttachmentLink" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink"></a>

```java
public java.lang.String getServiceAttachmentLink();
```

- *Type:* java.lang.String

---

##### `allowedConsumerProjectsInput`<sup>Optional</sup> <a name="allowedConsumerProjectsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjectsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedConsumerProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedConsumerProjects`<sup>Required</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects"></a>

```java
public java.util.List<java.lang.String> getAllowedConsumerProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleAlloydbInstancePscInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

---


### GoogleAlloydbInstanceQueryInsightsConfigOutputReference <a name="GoogleAlloydbInstanceQueryInsightsConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference;

new GoogleAlloydbInstanceQueryInsightsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute">resetQueryPlansPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength">resetQueryStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags">resetRecordApplicationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress">resetRecordClientAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryPlansPerMinute` <a name="resetQueryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```java
public void resetQueryPlansPerMinute()
```

##### `resetQueryStringLength` <a name="resetQueryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength"></a>

```java
public void resetQueryStringLength()
```

##### `resetRecordApplicationTags` <a name="resetRecordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```java
public void resetRecordApplicationTags()
```

##### `resetRecordClientAddress` <a name="resetRecordClientAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress"></a>

```java
public void resetRecordClientAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput">queryPlansPerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput">queryStringLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput">recordApplicationTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput">recordClientAddressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength">queryStringLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress">recordClientAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryPlansPerMinuteInput`<sup>Optional</sup> <a name="queryPlansPerMinuteInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```java
public java.lang.Number getQueryPlansPerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `queryStringLengthInput`<sup>Optional</sup> <a name="queryStringLengthInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```java
public java.lang.Number getQueryStringLengthInput();
```

- *Type:* java.lang.Number

---

##### `recordApplicationTagsInput`<sup>Optional</sup> <a name="recordApplicationTagsInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```java
public java.lang.Object getRecordApplicationTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordClientAddressInput`<sup>Optional</sup> <a name="recordClientAddressInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```java
public java.lang.Object getRecordClientAddressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```java
public java.lang.Number getQueryPlansPerMinute();
```

- *Type:* java.lang.Number

---

##### `queryStringLength`<sup>Required</sup> <a name="queryStringLength" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength"></a>

```java
public java.lang.Number getQueryStringLength();
```

- *Type:* java.lang.Number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags"></a>

```java
public java.lang.Object getRecordApplicationTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordClientAddress`<sup>Required</sup> <a name="recordClientAddress" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress"></a>

```java
public java.lang.Object getRecordClientAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue"></a>

```java
public GoogleAlloydbInstanceQueryInsightsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

---


### GoogleAlloydbInstanceReadPoolConfigOutputReference <a name="GoogleAlloydbInstanceReadPoolConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceReadPoolConfigOutputReference;

new GoogleAlloydbInstanceReadPoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resetNodeCount"></a>

```java
public void resetNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue"></a>

```java
public GoogleAlloydbInstanceReadPoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

---


### GoogleAlloydbInstanceTimeoutsOutputReference <a name="GoogleAlloydbInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_alloydb_instance.GoogleAlloydbInstanceTimeoutsOutputReference;

new GoogleAlloydbInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

---



