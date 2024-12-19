# `googleAlloydbInstance` Submodule <a name="`googleAlloydbInstance` Submodule" id="@cdktf/provider-google-beta.googleAlloydbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAlloydbInstance <a name="GoogleAlloydbInstance" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance google_alloydb_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  instance_id: str,
  instance_type: str,
  annotations: typing.Mapping[str] = None,
  availability_type: str = None,
  client_connection_config: GoogleAlloydbInstanceClientConnectionConfig = None,
  database_flags: typing.Mapping[str] = None,
  display_name: str = None,
  gce_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  machine_config: GoogleAlloydbInstanceMachineConfig = None,
  network_config: GoogleAlloydbInstanceNetworkConfig = None,
  observability_config: GoogleAlloydbInstanceObservabilityConfig = None,
  psc_instance_config: GoogleAlloydbInstancePscInstanceConfig = None,
  query_insights_config: GoogleAlloydbInstanceQueryInsightsConfig = None,
  read_pool_config: GoogleAlloydbInstanceReadPoolConfig = None,
  timeouts: GoogleAlloydbInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | The type of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.availabilityType">availability_type</a></code> | <code>str</code> | 'Availability type of an Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.clientConnectionConfig">client_connection_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | client_connection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | Database flags. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-settable and human-readable display name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.gceZone">gce_zone</a></code> | <code>str</code> | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.observabilityConfig">observability_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a></code> | observability_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.pscInstanceConfig">psc_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a></code> | psc_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.queryInsightsConfig">query_insights_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | query_insights_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.readPoolConfig">read_pool_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | read_pool_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.cluster"></a>

- *Type:* str

Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#cluster GoogleAlloydbInstance#cluster}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#instance_id GoogleAlloydbInstance#instance_id}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.instanceType"></a>

- *Type:* str

The type of the instance.

If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#instance_type GoogleAlloydbInstance#instance_type}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#annotations GoogleAlloydbInstance#annotations}

---

##### `availability_type`<sup>Optional</sup> <a name="availability_type" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.availabilityType"></a>

- *Type:* str

'Availability type of an Instance.

Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#availability_type GoogleAlloydbInstance#availability_type}

---

##### `client_connection_config`<sup>Optional</sup> <a name="client_connection_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.clientConnectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

client_connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#client_connection_config GoogleAlloydbInstance#client_connection_config}

---

##### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.databaseFlags"></a>

- *Type:* typing.Mapping[str]

Database flags.

Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#database_flags GoogleAlloydbInstance#database_flags}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.displayName"></a>

- *Type:* str

User-settable and human-readable display name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#display_name GoogleAlloydbInstance#display_name}

---

##### `gce_zone`<sup>Optional</sup> <a name="gce_zone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.gceZone"></a>

- *Type:* str

The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#gce_zone GoogleAlloydbInstance#gce_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the alloydb instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#labels GoogleAlloydbInstance#labels}

---

##### `machine_config`<sup>Optional</sup> <a name="machine_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.machineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#machine_config GoogleAlloydbInstance#machine_config}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#network_config GoogleAlloydbInstance#network_config}

---

##### `observability_config`<sup>Optional</sup> <a name="observability_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.observabilityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

observability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#observability_config GoogleAlloydbInstance#observability_config}

---

##### `psc_instance_config`<sup>Optional</sup> <a name="psc_instance_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.pscInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

psc_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#psc_instance_config GoogleAlloydbInstance#psc_instance_config}

---

##### `query_insights_config`<sup>Optional</sup> <a name="query_insights_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.queryInsightsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

query_insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#query_insights_config GoogleAlloydbInstance#query_insights_config}

---

##### `read_pool_config`<sup>Optional</sup> <a name="read_pool_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.readPoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

read_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#read_pool_config GoogleAlloydbInstance#read_pool_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#timeouts GoogleAlloydbInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig">put_client_connection_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig">put_machine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig">put_observability_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putPscInstanceConfig">put_psc_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig">put_query_insights_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig">put_read_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAvailabilityType">reset_availability_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetClientConnectionConfig">reset_client_connection_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDatabaseFlags">reset_database_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetGceZone">reset_gce_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetMachineConfig">reset_machine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetObservabilityConfig">reset_observability_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetPscInstanceConfig">reset_psc_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetQueryInsightsConfig">reset_query_insights_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetReadPoolConfig">reset_read_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_connection_config` <a name="put_client_connection_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig"></a>

```python
def put_client_connection_config(
  require_connectors: typing.Union[bool, IResolvable] = None,
  ssl_config: GoogleAlloydbInstanceClientConnectionConfigSslConfig = None
) -> None
```

###### `require_connectors`<sup>Optional</sup> <a name="require_connectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig.parameter.requireConnectors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration to enforce connectors only (ex: AuthProxy) connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#require_connectors GoogleAlloydbInstance#require_connectors}

---

###### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putClientConnectionConfig.parameter.sslConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#ssl_config GoogleAlloydbInstance#ssl_config}

---

##### `put_machine_config` <a name="put_machine_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig"></a>

```python
def put_machine_config(
  cpu_count: typing.Union[int, float] = None
) -> None
```

###### `cpu_count`<sup>Optional</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putMachineConfig.parameter.cpuCount"></a>

- *Type:* typing.Union[int, float]

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#cpu_count GoogleAlloydbInstance#cpu_count}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putNetworkConfig"></a>

```python
def put_network_config(
  authorized_external_networks: typing.Union[IResolvable, typing.List[GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks]] = None,
  enable_outbound_public_ip: typing.Union[bool, IResolvable] = None,
  enable_public_ip: typing.Union[bool, IResolvable] = None
) -> None
```

###### `authorized_external_networks`<sup>Optional</sup> <a name="authorized_external_networks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putNetworkConfig.parameter.authorizedExternalNetworks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]]

authorized_external_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#authorized_external_networks GoogleAlloydbInstance#authorized_external_networks}

---

###### `enable_outbound_public_ip`<sup>Optional</sup> <a name="enable_outbound_public_ip" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putNetworkConfig.parameter.enableOutboundPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling outbound public ip for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#enable_outbound_public_ip GoogleAlloydbInstance#enable_outbound_public_ip}

---

###### `enable_public_ip`<sup>Optional</sup> <a name="enable_public_ip" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putNetworkConfig.parameter.enablePublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling public ip for the instance.

If a user wishes to disable this,
please also clear the list of the authorized external networks set on
the same instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#enable_public_ip GoogleAlloydbInstance#enable_public_ip}

---

##### `put_observability_config` <a name="put_observability_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig"></a>

```python
def put_observability_config(
  enabled: typing.Union[bool, IResolvable] = None,
  max_query_string_length: typing.Union[int, float] = None,
  preserve_comments: typing.Union[bool, IResolvable] = None,
  query_plans_per_minute: typing.Union[int, float] = None,
  record_application_tags: typing.Union[bool, IResolvable] = None,
  track_active_queries: typing.Union[bool, IResolvable] = None,
  track_wait_events: typing.Union[bool, IResolvable] = None,
  track_wait_event_types: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Observability feature status for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#enabled GoogleAlloydbInstance#enabled}

---

###### `max_query_string_length`<sup>Optional</sup> <a name="max_query_string_length" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.maxQueryStringLength"></a>

- *Type:* typing.Union[int, float]

Query string length. The default value is 10240. Any integer between 1024 and 100000 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#max_query_string_length GoogleAlloydbInstance#max_query_string_length}

---

###### `preserve_comments`<sup>Optional</sup> <a name="preserve_comments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.preserveComments"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Preserve comments in the query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#preserve_comments GoogleAlloydbInstance#preserve_comments}

---

###### `query_plans_per_minute`<sup>Optional</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.queryPlansPerMinute"></a>

- *Type:* typing.Union[int, float]

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 200 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}

---

###### `record_application_tags`<sup>Optional</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.recordApplicationTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}

---

###### `track_active_queries`<sup>Optional</sup> <a name="track_active_queries" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.trackActiveQueries"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Track actively running queries. If not set, default value is "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#track_active_queries GoogleAlloydbInstance#track_active_queries}

---

###### `track_wait_events`<sup>Optional</sup> <a name="track_wait_events" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.trackWaitEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record wait events during query execution for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#track_wait_events GoogleAlloydbInstance#track_wait_events}

---

###### `track_wait_event_types`<sup>Optional</sup> <a name="track_wait_event_types" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putObservabilityConfig.parameter.trackWaitEventTypes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record wait event types during query execution for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#track_wait_event_types GoogleAlloydbInstance#track_wait_event_types}

---

##### `put_psc_instance_config` <a name="put_psc_instance_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putPscInstanceConfig"></a>

```python
def put_psc_instance_config(
  allowed_consumer_projects: typing.List[str] = None
) -> None
```

###### `allowed_consumer_projects`<sup>Optional</sup> <a name="allowed_consumer_projects" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putPscInstanceConfig.parameter.allowedConsumerProjects"></a>

- *Type:* typing.List[str]

List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance.

These should be specified as project numbers only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#allowed_consumer_projects GoogleAlloydbInstance#allowed_consumer_projects}

---

##### `put_query_insights_config` <a name="put_query_insights_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig"></a>

```python
def put_query_insights_config(
  query_plans_per_minute: typing.Union[int, float] = None,
  query_string_length: typing.Union[int, float] = None,
  record_application_tags: typing.Union[bool, IResolvable] = None,
  record_client_address: typing.Union[bool, IResolvable] = None
) -> None
```

###### `query_plans_per_minute`<sup>Optional</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig.parameter.queryPlansPerMinute"></a>

- *Type:* typing.Union[int, float]

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 20 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}

---

###### `query_string_length`<sup>Optional</sup> <a name="query_string_length" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig.parameter.queryStringLength"></a>

- *Type:* typing.Union[int, float]

Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#query_string_length GoogleAlloydbInstance#query_string_length}

---

###### `record_application_tags`<sup>Optional</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig.parameter.recordApplicationTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}

---

###### `record_client_address`<sup>Optional</sup> <a name="record_client_address" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putQueryInsightsConfig.parameter.recordClientAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record client address for an instance. Client address is PII information. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#record_client_address GoogleAlloydbInstance#record_client_address}

---

##### `put_read_pool_config` <a name="put_read_pool_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig"></a>

```python
def put_read_pool_config(
  node_count: typing.Union[int, float] = None
) -> None
```

###### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putReadPoolConfig.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Read capacity, i.e. number of nodes in a read pool instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#node_count GoogleAlloydbInstance#node_count}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#create GoogleAlloydbInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#delete GoogleAlloydbInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#update GoogleAlloydbInstance#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_availability_type` <a name="reset_availability_type" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetAvailabilityType"></a>

```python
def reset_availability_type() -> None
```

##### `reset_client_connection_config` <a name="reset_client_connection_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetClientConnectionConfig"></a>

```python
def reset_client_connection_config() -> None
```

##### `reset_database_flags` <a name="reset_database_flags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDatabaseFlags"></a>

```python
def reset_database_flags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gce_zone` <a name="reset_gce_zone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetGceZone"></a>

```python
def reset_gce_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_machine_config` <a name="reset_machine_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetMachineConfig"></a>

```python
def reset_machine_config() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_observability_config` <a name="reset_observability_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetObservabilityConfig"></a>

```python
def reset_observability_config() -> None
```

##### `reset_psc_instance_config` <a name="reset_psc_instance_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetPscInstanceConfig"></a>

```python
def reset_psc_instance_config() -> None
```

##### `reset_query_insights_config` <a name="reset_query_insights_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetQueryInsightsConfig"></a>

```python
def reset_query_insights_config() -> None
```

##### `reset_read_pool_config` <a name="reset_read_pool_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetReadPoolConfig"></a>

```python
def reset_read_pool_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleAlloydbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleAlloydbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAlloydbInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAlloydbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAlloydbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfig">client_connection_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference">GoogleAlloydbInstanceMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference">GoogleAlloydbInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.observabilityConfig">observability_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference">GoogleAlloydbInstanceObservabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.outboundPublicIpAddresses">outbound_public_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.pscInstanceConfig">psc_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference">GoogleAlloydbInstancePscInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfig">query_insights_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference">GoogleAlloydbInstanceQueryInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfig">read_pool_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference">GoogleAlloydbInstanceReadPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference">GoogleAlloydbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityTypeInput">availability_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfigInput">client_connection_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlagsInput">database_flags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZoneInput">gce_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfigInput">machine_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.observabilityConfigInput">observability_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.pscInstanceConfigInput">psc_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfigInput">query_insights_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfigInput">read_pool_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityType">availability_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZone">gce_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_connection_config`<sup>Required</sup> <a name="client_connection_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfig"></a>

```python
client_connection_config: GoogleAlloydbInstanceClientConnectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `machine_config`<sup>Required</sup> <a name="machine_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfig"></a>

```python
machine_config: GoogleAlloydbInstanceMachineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference">GoogleAlloydbInstanceMachineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.networkConfig"></a>

```python
network_config: GoogleAlloydbInstanceNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference">GoogleAlloydbInstanceNetworkConfigOutputReference</a>

---

##### `observability_config`<sup>Required</sup> <a name="observability_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.observabilityConfig"></a>

```python
observability_config: GoogleAlloydbInstanceObservabilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference">GoogleAlloydbInstanceObservabilityConfigOutputReference</a>

---

##### `outbound_public_ip_addresses`<sup>Required</sup> <a name="outbound_public_ip_addresses" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.outboundPublicIpAddresses"></a>

```python
outbound_public_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `psc_instance_config`<sup>Required</sup> <a name="psc_instance_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.pscInstanceConfig"></a>

```python
psc_instance_config: GoogleAlloydbInstancePscInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference">GoogleAlloydbInstancePscInstanceConfigOutputReference</a>

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `query_insights_config`<sup>Required</sup> <a name="query_insights_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfig"></a>

```python
query_insights_config: GoogleAlloydbInstanceQueryInsightsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference">GoogleAlloydbInstanceQueryInsightsConfigOutputReference</a>

---

##### `read_pool_config`<sup>Required</sup> <a name="read_pool_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfig"></a>

```python
read_pool_config: GoogleAlloydbInstanceReadPoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference">GoogleAlloydbInstanceReadPoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeouts"></a>

```python
timeouts: GoogleAlloydbInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference">GoogleAlloydbInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_type_input`<sup>Optional</sup> <a name="availability_type_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityTypeInput"></a>

```python
availability_type_input: str
```

- *Type:* str

---

##### `client_connection_config_input`<sup>Optional</sup> <a name="client_connection_config_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clientConnectionConfigInput"></a>

```python
client_connection_config_input: GoogleAlloydbInstanceClientConnectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `database_flags_input`<sup>Optional</sup> <a name="database_flags_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlagsInput"></a>

```python
database_flags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gce_zone_input`<sup>Optional</sup> <a name="gce_zone_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZoneInput"></a>

```python
gce_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_config_input`<sup>Optional</sup> <a name="machine_config_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.machineConfigInput"></a>

```python
machine_config_input: GoogleAlloydbInstanceMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.networkConfigInput"></a>

```python
network_config_input: GoogleAlloydbInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

---

##### `observability_config_input`<sup>Optional</sup> <a name="observability_config_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.observabilityConfigInput"></a>

```python
observability_config_input: GoogleAlloydbInstanceObservabilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

---

##### `psc_instance_config_input`<sup>Optional</sup> <a name="psc_instance_config_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.pscInstanceConfigInput"></a>

```python
psc_instance_config_input: GoogleAlloydbInstancePscInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

---

##### `query_insights_config_input`<sup>Optional</sup> <a name="query_insights_config_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.queryInsightsConfigInput"></a>

```python
query_insights_config_input: GoogleAlloydbInstanceQueryInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

---

##### `read_pool_config_input`<sup>Optional</sup> <a name="read_pool_config_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.readPoolConfigInput"></a>

```python
read_pool_config_input: GoogleAlloydbInstanceReadPoolConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleAlloydbInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_type`<sup>Required</sup> <a name="availability_type" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.availabilityType"></a>

```python
availability_type: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `database_flags`<sup>Required</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.databaseFlags"></a>

```python
database_flags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `gce_zone`<sup>Required</sup> <a name="gce_zone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.gceZone"></a>

```python
gce_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAlloydbInstanceClientConnectionConfig <a name="GoogleAlloydbInstanceClientConnectionConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig(
  require_connectors: typing.Union[bool, IResolvable] = None,
  ssl_config: GoogleAlloydbInstanceClientConnectionConfigSslConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.requireConnectors">require_connectors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configuration to enforce connectors only (ex: AuthProxy) connections to the database. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | ssl_config block. |

---

##### `require_connectors`<sup>Optional</sup> <a name="require_connectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.requireConnectors"></a>

```python
require_connectors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration to enforce connectors only (ex: AuthProxy) connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#require_connectors GoogleAlloydbInstance#require_connectors}

---

##### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig.property.sslConfig"></a>

```python
ssl_config: GoogleAlloydbInstanceClientConnectionConfigSslConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#ssl_config GoogleAlloydbInstance#ssl_config}

---

### GoogleAlloydbInstanceClientConnectionConfigSslConfig <a name="GoogleAlloydbInstanceClientConnectionConfigSslConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig(
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.property.sslMode">ssl_mode</a></code> | <code>str</code> | SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"]. |

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#ssl_mode GoogleAlloydbInstance#ssl_mode}

---

### GoogleAlloydbInstanceConfig <a name="GoogleAlloydbInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  instance_id: str,
  instance_type: str,
  annotations: typing.Mapping[str] = None,
  availability_type: str = None,
  client_connection_config: GoogleAlloydbInstanceClientConnectionConfig = None,
  database_flags: typing.Mapping[str] = None,
  display_name: str = None,
  gce_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  machine_config: GoogleAlloydbInstanceMachineConfig = None,
  network_config: GoogleAlloydbInstanceNetworkConfig = None,
  observability_config: GoogleAlloydbInstanceObservabilityConfig = None,
  psc_instance_config: GoogleAlloydbInstancePscInstanceConfig = None,
  query_insights_config: GoogleAlloydbInstanceQueryInsightsConfig = None,
  read_pool_config: GoogleAlloydbInstanceReadPoolConfig = None,
  timeouts: GoogleAlloydbInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.cluster">cluster</a></code> | <code>str</code> | Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The type of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.availabilityType">availability_type</a></code> | <code>str</code> | 'Availability type of an Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.clientConnectionConfig">client_connection_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | client_connection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | Database flags. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | User-settable and human-readable display name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.gceZone">gce_zone</a></code> | <code>str</code> | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the alloydb instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.observabilityConfig">observability_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a></code> | observability_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.pscInstanceConfig">psc_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a></code> | psc_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.queryInsightsConfig">query_insights_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | query_insights_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.readPoolConfig">read_pool_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | read_pool_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#cluster GoogleAlloydbInstance#cluster}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#instance_id GoogleAlloydbInstance#instance_id}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The type of the instance.

If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#instance_type GoogleAlloydbInstance#instance_type}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#annotations GoogleAlloydbInstance#annotations}

---

##### `availability_type`<sup>Optional</sup> <a name="availability_type" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.availabilityType"></a>

```python
availability_type: str
```

- *Type:* str

'Availability type of an Instance.

Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#availability_type GoogleAlloydbInstance#availability_type}

---

##### `client_connection_config`<sup>Optional</sup> <a name="client_connection_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.clientConnectionConfig"></a>

```python
client_connection_config: GoogleAlloydbInstanceClientConnectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

client_connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#client_connection_config GoogleAlloydbInstance#client_connection_config}

---

##### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.databaseFlags"></a>

```python
database_flags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Database flags.

Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#database_flags GoogleAlloydbInstance#database_flags}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-settable and human-readable display name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#display_name GoogleAlloydbInstance#display_name}

---

##### `gce_zone`<sup>Optional</sup> <a name="gce_zone" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.gceZone"></a>

```python
gce_zone: str
```

- *Type:* str

The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#gce_zone GoogleAlloydbInstance#gce_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the alloydb instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#labels GoogleAlloydbInstance#labels}

---

##### `machine_config`<sup>Optional</sup> <a name="machine_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.machineConfig"></a>

```python
machine_config: GoogleAlloydbInstanceMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#machine_config GoogleAlloydbInstance#machine_config}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.networkConfig"></a>

```python
network_config: GoogleAlloydbInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#network_config GoogleAlloydbInstance#network_config}

---

##### `observability_config`<sup>Optional</sup> <a name="observability_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.observabilityConfig"></a>

```python
observability_config: GoogleAlloydbInstanceObservabilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

observability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#observability_config GoogleAlloydbInstance#observability_config}

---

##### `psc_instance_config`<sup>Optional</sup> <a name="psc_instance_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.pscInstanceConfig"></a>

```python
psc_instance_config: GoogleAlloydbInstancePscInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

psc_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#psc_instance_config GoogleAlloydbInstance#psc_instance_config}

---

##### `query_insights_config`<sup>Optional</sup> <a name="query_insights_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.queryInsightsConfig"></a>

```python
query_insights_config: GoogleAlloydbInstanceQueryInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

query_insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#query_insights_config GoogleAlloydbInstance#query_insights_config}

---

##### `read_pool_config`<sup>Optional</sup> <a name="read_pool_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.readPoolConfig"></a>

```python
read_pool_config: GoogleAlloydbInstanceReadPoolConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

read_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#read_pool_config GoogleAlloydbInstance#read_pool_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleAlloydbInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#timeouts GoogleAlloydbInstance#timeouts}

---

### GoogleAlloydbInstanceMachineConfig <a name="GoogleAlloydbInstanceMachineConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig(
  cpu_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU's in the VM instance. |

---

##### `cpu_count`<sup>Optional</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#cpu_count GoogleAlloydbInstance#cpu_count}

---

### GoogleAlloydbInstanceNetworkConfig <a name="GoogleAlloydbInstanceNetworkConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig(
  authorized_external_networks: typing.Union[IResolvable, typing.List[GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks]] = None,
  enable_outbound_public_ip: typing.Union[bool, IResolvable] = None,
  enable_public_ip: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.authorizedExternalNetworks">authorized_external_networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]]</code> | authorized_external_networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.enableOutboundPublicIp">enable_outbound_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling outbound public ip for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.enablePublicIp">enable_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling public ip for the instance. |

---

##### `authorized_external_networks`<sup>Optional</sup> <a name="authorized_external_networks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.authorizedExternalNetworks"></a>

```python
authorized_external_networks: typing.Union[IResolvable, typing.List[GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]]

authorized_external_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#authorized_external_networks GoogleAlloydbInstance#authorized_external_networks}

---

##### `enable_outbound_public_ip`<sup>Optional</sup> <a name="enable_outbound_public_ip" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.enableOutboundPublicIp"></a>

```python
enable_outbound_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling outbound public ip for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#enable_outbound_public_ip GoogleAlloydbInstance#enable_outbound_public_ip}

---

##### `enable_public_ip`<sup>Optional</sup> <a name="enable_public_ip" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig.property.enablePublicIp"></a>

```python
enable_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling public ip for the instance.

If a user wishes to disable this,
please also clear the list of the authorized external networks set on
the same instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#enable_public_ip GoogleAlloydbInstance#enable_public_ip}

---

### GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks <a name="GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks(
  cidr_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.property.cidrRange">cidr_range</a></code> | <code>str</code> | CIDR range for one authorized network of the instance. |

---

##### `cidr_range`<sup>Optional</sup> <a name="cidr_range" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

CIDR range for one authorized network of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#cidr_range GoogleAlloydbInstance#cidr_range}

---

### GoogleAlloydbInstanceObservabilityConfig <a name="GoogleAlloydbInstanceObservabilityConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig(
  enabled: typing.Union[bool, IResolvable] = None,
  max_query_string_length: typing.Union[int, float] = None,
  preserve_comments: typing.Union[bool, IResolvable] = None,
  query_plans_per_minute: typing.Union[int, float] = None,
  record_application_tags: typing.Union[bool, IResolvable] = None,
  track_active_queries: typing.Union[bool, IResolvable] = None,
  track_wait_events: typing.Union[bool, IResolvable] = None,
  track_wait_event_types: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Observability feature status for an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.maxQueryStringLength">max_query_string_length</a></code> | <code>typing.Union[int, float]</code> | Query string length. The default value is 10240. Any integer between 1024 and 100000 is considered valid. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.preserveComments">preserve_comments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Preserve comments in the query string. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.recordApplicationTags">record_application_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Record application tags for an instance. This flag is turned "on" by default. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackActiveQueries">track_active_queries</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Track actively running queries. If not set, default value is "off". |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackWaitEvents">track_wait_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Record wait events during query execution for an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackWaitEventTypes">track_wait_event_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Record wait event types during query execution for an instance. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Observability feature status for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#enabled GoogleAlloydbInstance#enabled}

---

##### `max_query_string_length`<sup>Optional</sup> <a name="max_query_string_length" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.maxQueryStringLength"></a>

```python
max_query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Query string length. The default value is 10240. Any integer between 1024 and 100000 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#max_query_string_length GoogleAlloydbInstance#max_query_string_length}

---

##### `preserve_comments`<sup>Optional</sup> <a name="preserve_comments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.preserveComments"></a>

```python
preserve_comments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Preserve comments in the query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#preserve_comments GoogleAlloydbInstance#preserve_comments}

---

##### `query_plans_per_minute`<sup>Optional</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 200 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}

---

##### `record_application_tags`<sup>Optional</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.recordApplicationTags"></a>

```python
record_application_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}

---

##### `track_active_queries`<sup>Optional</sup> <a name="track_active_queries" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackActiveQueries"></a>

```python
track_active_queries: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Track actively running queries. If not set, default value is "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#track_active_queries GoogleAlloydbInstance#track_active_queries}

---

##### `track_wait_events`<sup>Optional</sup> <a name="track_wait_events" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackWaitEvents"></a>

```python
track_wait_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record wait events during query execution for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#track_wait_events GoogleAlloydbInstance#track_wait_events}

---

##### `track_wait_event_types`<sup>Optional</sup> <a name="track_wait_event_types" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig.property.trackWaitEventTypes"></a>

```python
track_wait_event_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record wait event types during query execution for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#track_wait_event_types GoogleAlloydbInstance#track_wait_event_types}

---

### GoogleAlloydbInstancePscInstanceConfig <a name="GoogleAlloydbInstancePscInstanceConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig(
  allowed_consumer_projects: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig.property.allowedConsumerProjects">allowed_consumer_projects</a></code> | <code>typing.List[str]</code> | List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance. |

---

##### `allowed_consumer_projects`<sup>Optional</sup> <a name="allowed_consumer_projects" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig.property.allowedConsumerProjects"></a>

```python
allowed_consumer_projects: typing.List[str]
```

- *Type:* typing.List[str]

List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance.

These should be specified as project numbers only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#allowed_consumer_projects GoogleAlloydbInstance#allowed_consumer_projects}

---

### GoogleAlloydbInstanceQueryInsightsConfig <a name="GoogleAlloydbInstanceQueryInsightsConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig(
  query_plans_per_minute: typing.Union[int, float] = None,
  query_string_length: typing.Union[int, float] = None,
  record_application_tags: typing.Union[bool, IResolvable] = None,
  record_client_address: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryStringLength">query_string_length</a></code> | <code>typing.Union[int, float]</code> | Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordApplicationTags">record_application_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Record application tags for an instance. This flag is turned "on" by default. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordClientAddress">record_client_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Record client address for an instance. Client address is PII information. This flag is turned "on" by default. |

---

##### `query_plans_per_minute`<sup>Optional</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 20 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}

---

##### `query_string_length`<sup>Optional</sup> <a name="query_string_length" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.queryStringLength"></a>

```python
query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#query_string_length GoogleAlloydbInstance#query_string_length}

---

##### `record_application_tags`<sup>Optional</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordApplicationTags"></a>

```python
record_application_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}

---

##### `record_client_address`<sup>Optional</sup> <a name="record_client_address" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig.property.recordClientAddress"></a>

```python
record_client_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record client address for an instance. Client address is PII information. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#record_client_address GoogleAlloydbInstance#record_client_address}

---

### GoogleAlloydbInstanceReadPoolConfig <a name="GoogleAlloydbInstanceReadPoolConfig" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig(
  node_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Read capacity, i.e. number of nodes in a read pool instance. |

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Read capacity, i.e. number of nodes in a read pool instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#node_count GoogleAlloydbInstance#node_count}

---

### GoogleAlloydbInstanceTimeouts <a name="GoogleAlloydbInstanceTimeouts" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#create GoogleAlloydbInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#delete GoogleAlloydbInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#update GoogleAlloydbInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#create GoogleAlloydbInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#delete GoogleAlloydbInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#update GoogleAlloydbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAlloydbInstanceClientConnectionConfigOutputReference <a name="GoogleAlloydbInstanceClientConnectionConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig">put_ssl_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors">reset_require_connectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig">reset_ssl_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssl_config` <a name="put_ssl_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig"></a>

```python
def put_ssl_config(
  ssl_mode: str = None
) -> None
```

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.putSslConfig.parameter.sslMode"></a>

- *Type:* str

SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_alloydb_instance#ssl_mode GoogleAlloydbInstance#ssl_mode}

---

##### `reset_require_connectors` <a name="reset_require_connectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors"></a>

```python
def reset_require_connectors() -> None
```

##### `reset_ssl_config` <a name="reset_ssl_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig"></a>

```python
def reset_ssl_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput">require_connectors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput">ssl_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors">require_connectors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_config`<sup>Required</sup> <a name="ssl_config" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig"></a>

```python
ssl_config: GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference">GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference</a>

---

##### `require_connectors_input`<sup>Optional</sup> <a name="require_connectors_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput"></a>

```python
require_connectors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_config_input`<sup>Optional</sup> <a name="ssl_config_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput"></a>

```python
ssl_config_input: GoogleAlloydbInstanceClientConnectionConfigSslConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---

##### `require_connectors`<sup>Required</sup> <a name="require_connectors" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors"></a>

```python
require_connectors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbInstanceClientConnectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfig">GoogleAlloydbInstanceClientConnectionConfig</a>

---


### GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference <a name="GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbInstanceClientConnectionConfigSslConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceClientConnectionConfigSslConfig">GoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---


### GoogleAlloydbInstanceMachineConfigOutputReference <a name="GoogleAlloydbInstanceMachineConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resetCpuCount">reset_cpu_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_count` <a name="reset_cpu_count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.resetCpuCount"></a>

```python
def reset_cpu_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCountInput">cpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_count_input`<sup>Optional</sup> <a name="cpu_count_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCountInput"></a>

```python
cpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbInstanceMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceMachineConfig">GoogleAlloydbInstanceMachineConfig</a>

---


### GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList <a name="GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]]

---


### GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference <a name="GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resetCidrRange">reset_cidr_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_range` <a name="reset_cidr_range" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resetCidrRange"></a>

```python
def reset_cidr_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRangeInput">cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange">cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_range_input`<sup>Optional</sup> <a name="cidr_range_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRangeInput"></a>

```python
cidr_range_input: str
```

- *Type:* str

---

##### `cidr_range`<sup>Required</sup> <a name="cidr_range" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]

---


### GoogleAlloydbInstanceNetworkConfigOutputReference <a name="GoogleAlloydbInstanceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks">put_authorized_external_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetAuthorizedExternalNetworks">reset_authorized_external_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetEnableOutboundPublicIp">reset_enable_outbound_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetEnablePublicIp">reset_enable_public_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorized_external_networks` <a name="put_authorized_external_networks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks"></a>

```python
def put_authorized_external_networks(
  value: typing.Union[IResolvable, typing.List[GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]]

---

##### `reset_authorized_external_networks` <a name="reset_authorized_external_networks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetAuthorizedExternalNetworks"></a>

```python
def reset_authorized_external_networks() -> None
```

##### `reset_enable_outbound_public_ip` <a name="reset_enable_outbound_public_ip" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetEnableOutboundPublicIp"></a>

```python
def reset_enable_outbound_public_ip() -> None
```

##### `reset_enable_public_ip` <a name="reset_enable_public_ip" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.resetEnablePublicIp"></a>

```python
def reset_enable_public_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks">authorized_external_networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworksInput">authorized_external_networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIpInput">enable_outbound_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIpInput">enable_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp">enable_outbound_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp">enable_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_external_networks`<sup>Required</sup> <a name="authorized_external_networks" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks"></a>

```python
authorized_external_networks: GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a>

---

##### `authorized_external_networks_input`<sup>Optional</sup> <a name="authorized_external_networks_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworksInput"></a>

```python
authorized_external_networks_input: typing.Union[IResolvable, typing.List[GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>]]

---

##### `enable_outbound_public_ip_input`<sup>Optional</sup> <a name="enable_outbound_public_ip_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIpInput"></a>

```python
enable_outbound_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_public_ip_input`<sup>Optional</sup> <a name="enable_public_ip_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIpInput"></a>

```python
enable_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_outbound_public_ip`<sup>Required</sup> <a name="enable_outbound_public_ip" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp"></a>

```python
enable_outbound_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_public_ip`<sup>Required</sup> <a name="enable_public_ip" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp"></a>

```python
enable_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceNetworkConfig">GoogleAlloydbInstanceNetworkConfig</a>

---


### GoogleAlloydbInstanceObservabilityConfigOutputReference <a name="GoogleAlloydbInstanceObservabilityConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetMaxQueryStringLength">reset_max_query_string_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetPreserveComments">reset_preserve_comments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetQueryPlansPerMinute">reset_query_plans_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetRecordApplicationTags">reset_record_application_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackActiveQueries">reset_track_active_queries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackWaitEvents">reset_track_wait_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackWaitEventTypes">reset_track_wait_event_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_max_query_string_length` <a name="reset_max_query_string_length" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetMaxQueryStringLength"></a>

```python
def reset_max_query_string_length() -> None
```

##### `reset_preserve_comments` <a name="reset_preserve_comments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetPreserveComments"></a>

```python
def reset_preserve_comments() -> None
```

##### `reset_query_plans_per_minute` <a name="reset_query_plans_per_minute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetQueryPlansPerMinute"></a>

```python
def reset_query_plans_per_minute() -> None
```

##### `reset_record_application_tags` <a name="reset_record_application_tags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetRecordApplicationTags"></a>

```python
def reset_record_application_tags() -> None
```

##### `reset_track_active_queries` <a name="reset_track_active_queries" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackActiveQueries"></a>

```python
def reset_track_active_queries() -> None
```

##### `reset_track_wait_events` <a name="reset_track_wait_events" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackWaitEvents"></a>

```python
def reset_track_wait_events() -> None
```

##### `reset_track_wait_event_types` <a name="reset_track_wait_event_types" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.resetTrackWaitEventTypes"></a>

```python
def reset_track_wait_event_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.maxQueryStringLengthInput">max_query_string_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.preserveCommentsInput">preserve_comments_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.queryPlansPerMinuteInput">query_plans_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.recordApplicationTagsInput">record_application_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackActiveQueriesInput">track_active_queries_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventsInput">track_wait_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventTypesInput">track_wait_event_types_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.maxQueryStringLength">max_query_string_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.preserveComments">preserve_comments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.recordApplicationTags">record_application_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackActiveQueries">track_active_queries</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEvents">track_wait_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventTypes">track_wait_event_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_query_string_length_input`<sup>Optional</sup> <a name="max_query_string_length_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.maxQueryStringLengthInput"></a>

```python
max_query_string_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preserve_comments_input`<sup>Optional</sup> <a name="preserve_comments_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.preserveCommentsInput"></a>

```python
preserve_comments_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_plans_per_minute_input`<sup>Optional</sup> <a name="query_plans_per_minute_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```python
query_plans_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags_input`<sup>Optional</sup> <a name="record_application_tags_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.recordApplicationTagsInput"></a>

```python
record_application_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `track_active_queries_input`<sup>Optional</sup> <a name="track_active_queries_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackActiveQueriesInput"></a>

```python
track_active_queries_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `track_wait_events_input`<sup>Optional</sup> <a name="track_wait_events_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventsInput"></a>

```python
track_wait_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `track_wait_event_types_input`<sup>Optional</sup> <a name="track_wait_event_types_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventTypesInput"></a>

```python
track_wait_event_types_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_query_string_length`<sup>Required</sup> <a name="max_query_string_length" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.maxQueryStringLength"></a>

```python
max_query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preserve_comments`<sup>Required</sup> <a name="preserve_comments" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.preserveComments"></a>

```python
preserve_comments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_plans_per_minute`<sup>Required</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags`<sup>Required</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.recordApplicationTags"></a>

```python
record_application_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `track_active_queries`<sup>Required</sup> <a name="track_active_queries" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackActiveQueries"></a>

```python
track_active_queries: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `track_wait_events`<sup>Required</sup> <a name="track_wait_events" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEvents"></a>

```python
track_wait_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `track_wait_event_types`<sup>Required</sup> <a name="track_wait_event_types" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.trackWaitEventTypes"></a>

```python
track_wait_event_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbInstanceObservabilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceObservabilityConfig">GoogleAlloydbInstanceObservabilityConfig</a>

---


### GoogleAlloydbInstancePscInstanceConfigOutputReference <a name="GoogleAlloydbInstancePscInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resetAllowedConsumerProjects">reset_allowed_consumer_projects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_consumer_projects` <a name="reset_allowed_consumer_projects" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.resetAllowedConsumerProjects"></a>

```python
def reset_allowed_consumer_projects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName">psc_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink">service_attachment_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjectsInput">allowed_consumer_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects">allowed_consumer_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `psc_dns_name`<sup>Required</sup> <a name="psc_dns_name" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName"></a>

```python
psc_dns_name: str
```

- *Type:* str

---

##### `service_attachment_link`<sup>Required</sup> <a name="service_attachment_link" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink"></a>

```python
service_attachment_link: str
```

- *Type:* str

---

##### `allowed_consumer_projects_input`<sup>Optional</sup> <a name="allowed_consumer_projects_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjectsInput"></a>

```python
allowed_consumer_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_consumer_projects`<sup>Required</sup> <a name="allowed_consumer_projects" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects"></a>

```python
allowed_consumer_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbInstancePscInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstancePscInstanceConfig">GoogleAlloydbInstancePscInstanceConfig</a>

---


### GoogleAlloydbInstanceQueryInsightsConfigOutputReference <a name="GoogleAlloydbInstanceQueryInsightsConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute">reset_query_plans_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength">reset_query_string_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags">reset_record_application_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress">reset_record_client_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_plans_per_minute` <a name="reset_query_plans_per_minute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```python
def reset_query_plans_per_minute() -> None
```

##### `reset_query_string_length` <a name="reset_query_string_length" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength"></a>

```python
def reset_query_string_length() -> None
```

##### `reset_record_application_tags` <a name="reset_record_application_tags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```python
def reset_record_application_tags() -> None
```

##### `reset_record_client_address` <a name="reset_record_client_address" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress"></a>

```python
def reset_record_client_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput">query_plans_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput">query_string_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput">record_application_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput">record_client_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength">query_string_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags">record_application_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress">record_client_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_plans_per_minute_input`<sup>Optional</sup> <a name="query_plans_per_minute_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```python
query_plans_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_length_input`<sup>Optional</sup> <a name="query_string_length_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```python
query_string_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags_input`<sup>Optional</sup> <a name="record_application_tags_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```python
record_application_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `record_client_address_input`<sup>Optional</sup> <a name="record_client_address_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```python
record_client_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_plans_per_minute`<sup>Required</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_length`<sup>Required</sup> <a name="query_string_length" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength"></a>

```python
query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags`<sup>Required</sup> <a name="record_application_tags" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags"></a>

```python
record_application_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `record_client_address`<sup>Required</sup> <a name="record_client_address" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress"></a>

```python
record_client_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbInstanceQueryInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceQueryInsightsConfig">GoogleAlloydbInstanceQueryInsightsConfig</a>

---


### GoogleAlloydbInstanceReadPoolConfigOutputReference <a name="GoogleAlloydbInstanceReadPoolConfigOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resetNodeCount">reset_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.resetNodeCount"></a>

```python
def reset_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAlloydbInstanceReadPoolConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceReadPoolConfig">GoogleAlloydbInstanceReadPoolConfig</a>

---


### GoogleAlloydbInstanceTimeoutsOutputReference <a name="GoogleAlloydbInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_alloydb_instance

googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAlloydbInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAlloydbInstance.GoogleAlloydbInstanceTimeouts">GoogleAlloydbInstanceTimeouts</a>]

---



