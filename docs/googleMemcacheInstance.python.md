# `googleMemcacheInstance` Submodule <a name="`googleMemcacheInstance` Submodule" id="@cdktf/provider-google-beta.googleMemcacheInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemcacheInstance <a name="GoogleMemcacheInstance" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance google_memcache_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  node_config: GoogleMemcacheInstanceNodeConfig,
  node_count: typing.Union[int, float],
  authorized_network: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_policy: GoogleMemcacheInstanceMaintenancePolicy = None,
  memcache_parameters: GoogleMemcacheInstanceMemcacheParameters = None,
  memcache_version: str = None,
  project: str = None,
  region: str = None,
  reserved_ip_range_id: typing.List[str] = None,
  timeouts: GoogleMemcacheInstanceTimeouts = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Number of nodes in the memcache instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.authorizedNetwork">authorized_network</a></code> | <code>str</code> | The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A user-visible name for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#id GoogleMemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.memcacheParameters">memcache_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a></code> | memcache_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.memcacheVersion">memcache_version</a></code> | <code>str</code> | The major version of Memcached software. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#project GoogleMemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.reservedIpRangeId">reserved_ip_range_id</a></code> | <code>typing.List[str]</code> | Contains the name of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Zones where memcache nodes should be provisioned.  If not provided, all zones will be used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#name GoogleMemcacheInstance#name}

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#node_config GoogleMemcacheInstance#node_config}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Number of nodes in the memcache instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#node_count GoogleMemcacheInstance#node_count}

---

##### `authorized_network`<sup>Optional</sup> <a name="authorized_network" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.authorizedNetwork"></a>

- *Type:* str

The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#authorized_network GoogleMemcacheInstance#authorized_network}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.displayName"></a>

- *Type:* str

A user-visible name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#display_name GoogleMemcacheInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#id GoogleMemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#labels GoogleMemcacheInstance#labels}

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#maintenance_policy GoogleMemcacheInstance#maintenance_policy}

---

##### `memcache_parameters`<sup>Optional</sup> <a name="memcache_parameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.memcacheParameters"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a>

memcache_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#memcache_parameters GoogleMemcacheInstance#memcache_parameters}

---

##### `memcache_version`<sup>Optional</sup> <a name="memcache_version" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.memcacheVersion"></a>

- *Type:* str

The major version of Memcached software.

If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5", "MEMCACHE_1_6_15"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#memcache_version GoogleMemcacheInstance#memcache_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#project GoogleMemcacheInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.region"></a>

- *Type:* str

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#region GoogleMemcacheInstance#region}

---

##### `reserved_ip_range_id`<sup>Optional</sup> <a name="reserved_ip_range_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.reservedIpRangeId"></a>

- *Type:* typing.List[str]

Contains the name of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#reserved_ip_range_id GoogleMemcacheInstance#reserved_ip_range_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#timeouts GoogleMemcacheInstance#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Zones where memcache nodes should be provisioned.  If not provided, all zones will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#zones GoogleMemcacheInstance#zones}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMaintenancePolicy">put_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMemcacheParameters">put_memcache_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetAuthorizedNetwork">reset_authorized_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMaintenancePolicy">reset_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMemcacheParameters">reset_memcache_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMemcacheVersion">reset_memcache_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetReservedIpRangeId">reset_reserved_ip_range_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_maintenance_policy` <a name="put_maintenance_policy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMaintenancePolicy"></a>

```python
def put_maintenance_policy(
  weekly_maintenance_window: typing.Union[IResolvable, typing.List[GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow]],
  description: str = None
) -> None
```

###### `weekly_maintenance_window`<sup>Required</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMaintenancePolicy.parameter.weeklyMaintenanceWindow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#weekly_maintenance_window GoogleMemcacheInstance#weekly_maintenance_window}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMaintenancePolicy.parameter.description"></a>

- *Type:* str

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#description GoogleMemcacheInstance#description}

---

##### `put_memcache_parameters` <a name="put_memcache_parameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMemcacheParameters"></a>

```python
def put_memcache_parameters(
  params: typing.Mapping[str] = None
) -> None
```

###### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMemcacheParameters.parameter.params"></a>

- *Type:* typing.Mapping[str]

User-defined set of parameters to use in the memcache process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#params GoogleMemcacheInstance#params}

---

##### `put_node_config` <a name="put_node_config" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putNodeConfig"></a>

```python
def put_node_config(
  cpu_count: typing.Union[int, float],
  memory_size_mb: typing.Union[int, float]
) -> None
```

###### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putNodeConfig.parameter.cpuCount"></a>

- *Type:* typing.Union[int, float]

Number of CPUs per node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#cpu_count GoogleMemcacheInstance#cpu_count}

---

###### `memory_size_mb`<sup>Required</sup> <a name="memory_size_mb" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putNodeConfig.parameter.memorySizeMb"></a>

- *Type:* typing.Union[int, float]

Memory size in Mebibytes for each memcache node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#memory_size_mb GoogleMemcacheInstance#memory_size_mb}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#create GoogleMemcacheInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#delete GoogleMemcacheInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#update GoogleMemcacheInstance#update}.

---

##### `reset_authorized_network` <a name="reset_authorized_network" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetAuthorizedNetwork"></a>

```python
def reset_authorized_network() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_maintenance_policy` <a name="reset_maintenance_policy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMaintenancePolicy"></a>

```python
def reset_maintenance_policy() -> None
```

##### `reset_memcache_parameters` <a name="reset_memcache_parameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMemcacheParameters"></a>

```python
def reset_memcache_parameters() -> None
```

##### `reset_memcache_version` <a name="reset_memcache_version" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMemcacheVersion"></a>

```python
def reset_memcache_version() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_reserved_ip_range_id` <a name="reset_reserved_ip_range_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetReservedIpRangeId"></a>

```python
def reset_reserved_ip_range_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleMemcacheInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleMemcacheInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMemcacheInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMemcacheInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMemcacheInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.discoveryEndpoint">discovery_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference">GoogleMemcacheInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList">GoogleMemcacheInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheFullVersion">memcache_full_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheNodes">memcache_nodes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList">GoogleMemcacheInstanceMemcacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheParameters">memcache_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference">GoogleMemcacheInstanceMemcacheParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference">GoogleMemcacheInstanceNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference">GoogleMemcacheInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.authorizedNetworkInput">authorized_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenancePolicyInput">maintenance_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheParametersInput">memcache_parameters_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheVersionInput">memcache_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.reservedIpRangeIdInput">reserved_ip_range_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.authorizedNetwork">authorized_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheVersion">memcache_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.reservedIpRangeId">reserved_ip_range_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `discovery_endpoint`<sup>Required</sup> <a name="discovery_endpoint" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.discoveryEndpoint"></a>

```python
discovery_endpoint: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenancePolicy"></a>

```python
maintenance_policy: GoogleMemcacheInstanceMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference">GoogleMemcacheInstanceMaintenancePolicyOutputReference</a>

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenanceSchedule"></a>

```python
maintenance_schedule: GoogleMemcacheInstanceMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList">GoogleMemcacheInstanceMaintenanceScheduleList</a>

---

##### `memcache_full_version`<sup>Required</sup> <a name="memcache_full_version" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheFullVersion"></a>

```python
memcache_full_version: str
```

- *Type:* str

---

##### `memcache_nodes`<sup>Required</sup> <a name="memcache_nodes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheNodes"></a>

```python
memcache_nodes: GoogleMemcacheInstanceMemcacheNodesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList">GoogleMemcacheInstanceMemcacheNodesList</a>

---

##### `memcache_parameters`<sup>Required</sup> <a name="memcache_parameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheParameters"></a>

```python
memcache_parameters: GoogleMemcacheInstanceMemcacheParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference">GoogleMemcacheInstanceMemcacheParametersOutputReference</a>

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeConfig"></a>

```python
node_config: GoogleMemcacheInstanceNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference">GoogleMemcacheInstanceNodeConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.timeouts"></a>

```python
timeouts: GoogleMemcacheInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference">GoogleMemcacheInstanceTimeoutsOutputReference</a>

---

##### `authorized_network_input`<sup>Optional</sup> <a name="authorized_network_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.authorizedNetworkInput"></a>

```python
authorized_network_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maintenance_policy_input`<sup>Optional</sup> <a name="maintenance_policy_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenancePolicyInput"></a>

```python
maintenance_policy_input: GoogleMemcacheInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a>

---

##### `memcache_parameters_input`<sup>Optional</sup> <a name="memcache_parameters_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheParametersInput"></a>

```python
memcache_parameters_input: GoogleMemcacheInstanceMemcacheParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a>

---

##### `memcache_version_input`<sup>Optional</sup> <a name="memcache_version_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheVersionInput"></a>

```python
memcache_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeConfigInput"></a>

```python
node_config_input: GoogleMemcacheInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a>

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `reserved_ip_range_id_input`<sup>Optional</sup> <a name="reserved_ip_range_id_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.reservedIpRangeIdInput"></a>

```python
reserved_ip_range_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleMemcacheInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorized_network`<sup>Required</sup> <a name="authorized_network" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.authorizedNetwork"></a>

```python
authorized_network: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `memcache_version`<sup>Required</sup> <a name="memcache_version" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheVersion"></a>

```python
memcache_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `reserved_ip_range_id`<sup>Required</sup> <a name="reserved_ip_range_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.reservedIpRangeId"></a>

```python
reserved_ip_range_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemcacheInstanceConfig <a name="GoogleMemcacheInstanceConfig" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  node_config: GoogleMemcacheInstanceNodeConfig,
  node_count: typing.Union[int, float],
  authorized_network: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_policy: GoogleMemcacheInstanceMaintenancePolicy = None,
  memcache_parameters: GoogleMemcacheInstanceMemcacheParameters = None,
  memcache_version: str = None,
  project: str = None,
  region: str = None,
  reserved_ip_range_id: typing.List[str] = None,
  timeouts: GoogleMemcacheInstanceTimeouts = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.name">name</a></code> | <code>str</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Number of nodes in the memcache instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.authorizedNetwork">authorized_network</a></code> | <code>str</code> | The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | A user-visible name for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#id GoogleMemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.memcacheParameters">memcache_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a></code> | memcache_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.memcacheVersion">memcache_version</a></code> | <code>str</code> | The major version of Memcached software. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#project GoogleMemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.region">region</a></code> | <code>str</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.reservedIpRangeId">reserved_ip_range_id</a></code> | <code>typing.List[str]</code> | Contains the name of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Zones where memcache nodes should be provisioned.  If not provided, all zones will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#name GoogleMemcacheInstance#name}

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.nodeConfig"></a>

```python
node_config: GoogleMemcacheInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#node_config GoogleMemcacheInstance#node_config}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of nodes in the memcache instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#node_count GoogleMemcacheInstance#node_count}

---

##### `authorized_network`<sup>Optional</sup> <a name="authorized_network" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.authorizedNetwork"></a>

```python
authorized_network: str
```

- *Type:* str

The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#authorized_network GoogleMemcacheInstance#authorized_network}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-visible name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#display_name GoogleMemcacheInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#id GoogleMemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#labels GoogleMemcacheInstance#labels}

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.maintenancePolicy"></a>

```python
maintenance_policy: GoogleMemcacheInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#maintenance_policy GoogleMemcacheInstance#maintenance_policy}

---

##### `memcache_parameters`<sup>Optional</sup> <a name="memcache_parameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.memcacheParameters"></a>

```python
memcache_parameters: GoogleMemcacheInstanceMemcacheParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a>

memcache_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#memcache_parameters GoogleMemcacheInstance#memcache_parameters}

---

##### `memcache_version`<sup>Optional</sup> <a name="memcache_version" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.memcacheVersion"></a>

```python
memcache_version: str
```

- *Type:* str

The major version of Memcached software.

If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5", "MEMCACHE_1_6_15"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#memcache_version GoogleMemcacheInstance#memcache_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#project GoogleMemcacheInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#region GoogleMemcacheInstance#region}

---

##### `reserved_ip_range_id`<sup>Optional</sup> <a name="reserved_ip_range_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.reservedIpRangeId"></a>

```python
reserved_ip_range_id: typing.List[str]
```

- *Type:* typing.List[str]

Contains the name of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#reserved_ip_range_id GoogleMemcacheInstance#reserved_ip_range_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleMemcacheInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#timeouts GoogleMemcacheInstance#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Zones where memcache nodes should be provisioned.  If not provided, all zones will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#zones GoogleMemcacheInstance#zones}

---

### GoogleMemcacheInstanceMaintenancePolicy <a name="GoogleMemcacheInstanceMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy(
  weekly_maintenance_window: typing.Union[IResolvable, typing.List[GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow]],
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">weekly_maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | weekly_maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.property.description">description</a></code> | <code>str</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |

---

##### `weekly_maintenance_window`<sup>Required</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```python
weekly_maintenance_window: typing.Union[IResolvable, typing.List[GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#weekly_maintenance_window GoogleMemcacheInstance#weekly_maintenance_window}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#description GoogleMemcacheInstance#description}

---

### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow(
  day: str,
  duration: str,
  start_time: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration">duration</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```python
day: str
```

- *Type:* str

Required.

The day of week that maintenance updates occur.

* DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#day GoogleMemcacheInstance#day}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration"></a>

```python
duration: str
```

- *Type:* str

Required.

The length of the maintenance window, ranging from 3 hours to 8 hours.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#duration GoogleMemcacheInstance#duration}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```python
start_time: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#start_time GoogleMemcacheInstance#start_time}

---

### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#hours GoogleMemcacheInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#minutes GoogleMemcacheInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#nanos GoogleMemcacheInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#seconds GoogleMemcacheInstance#seconds}

---

### GoogleMemcacheInstanceMaintenanceSchedule <a name="GoogleMemcacheInstanceMaintenanceSchedule" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule()
```


### GoogleMemcacheInstanceMemcacheNodes <a name="GoogleMemcacheInstanceMemcacheNodes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes()
```


### GoogleMemcacheInstanceMemcacheParameters <a name="GoogleMemcacheInstanceMemcacheParameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters(
  params: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters.property.params">params</a></code> | <code>typing.Mapping[str]</code> | User-defined set of parameters to use in the memcache process. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined set of parameters to use in the memcache process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#params GoogleMemcacheInstance#params}

---

### GoogleMemcacheInstanceNodeConfig <a name="GoogleMemcacheInstanceNodeConfig" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig(
  cpu_count: typing.Union[int, float],
  memory_size_mb: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | Number of CPUs per node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.property.memorySizeMb">memory_size_mb</a></code> | <code>typing.Union[int, float]</code> | Memory size in Mebibytes for each memcache node. |

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of CPUs per node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#cpu_count GoogleMemcacheInstance#cpu_count}

---

##### `memory_size_mb`<sup>Required</sup> <a name="memory_size_mb" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.property.memorySizeMb"></a>

```python
memory_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory size in Mebibytes for each memcache node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#memory_size_mb GoogleMemcacheInstance#memory_size_mb}

---

### GoogleMemcacheInstanceTimeouts <a name="GoogleMemcacheInstanceTimeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#create GoogleMemcacheInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#delete GoogleMemcacheInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#update GoogleMemcacheInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#create GoogleMemcacheInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#delete GoogleMemcacheInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#update GoogleMemcacheInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemcacheInstanceMaintenancePolicyOutputReference <a name="GoogleMemcacheInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">put_weekly_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weekly_maintenance_window` <a name="put_weekly_maintenance_window" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```python
def put_weekly_maintenance_window(
  value: typing.Union[IResolvable, typing.List[GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weekly_maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weekly_maintenance_window_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `weekly_maintenance_window`<sup>Required</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```python
weekly_maintenance_window: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `weekly_maintenance_window_input`<sup>Optional</sup> <a name="weekly_maintenance_window_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```python
weekly_maintenance_window_input: typing.Union[IResolvable, typing.List[GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMemcacheInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a>

---


### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]]

---


### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">put_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_time` <a name="put_start_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#hours GoogleMemcacheInstance#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#minutes GoogleMemcacheInstance#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#nanos GoogleMemcacheInstance#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_memcache_instance#seconds GoogleMemcacheInstance#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```python
start_time: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>]

---


### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### GoogleMemcacheInstanceMaintenanceScheduleList <a name="GoogleMemcacheInstanceMaintenanceScheduleList" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMemcacheInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMemcacheInstanceMaintenanceScheduleOutputReference <a name="GoogleMemcacheInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">schedule_deadline_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule">GoogleMemcacheInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `schedule_deadline_time`<sup>Required</sup> <a name="schedule_deadline_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```python
schedule_deadline_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMemcacheInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule">GoogleMemcacheInstanceMaintenanceSchedule</a>

---


### GoogleMemcacheInstanceMemcacheNodesList <a name="GoogleMemcacheInstanceMemcacheNodesList" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMemcacheInstanceMemcacheNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMemcacheInstanceMemcacheNodesOutputReference <a name="GoogleMemcacheInstanceMemcacheNodesOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes">GoogleMemcacheInstanceMemcacheNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMemcacheInstanceMemcacheNodes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes">GoogleMemcacheInstanceMemcacheNodes</a>

---


### GoogleMemcacheInstanceMemcacheParametersOutputReference <a name="GoogleMemcacheInstanceMemcacheParametersOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resetParams">reset_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_params` <a name="reset_params" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resetParams"></a>

```python
def reset_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.paramsInput">params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.params">params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.paramsInput"></a>

```python
params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMemcacheInstanceMemcacheParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a>

---


### GoogleMemcacheInstanceNodeConfigOutputReference <a name="GoogleMemcacheInstanceNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCountInput">cpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput">memory_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMb">memory_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_count_input`<sup>Optional</sup> <a name="cpu_count_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCountInput"></a>

```python
cpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_mb_input`<sup>Optional</sup> <a name="memory_size_mb_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput"></a>

```python
memory_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_mb`<sup>Required</sup> <a name="memory_size_mb" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMb"></a>

```python
memory_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMemcacheInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a>

---


### GoogleMemcacheInstanceTimeoutsOutputReference <a name="GoogleMemcacheInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memcache_instance

googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMemcacheInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>]

---



