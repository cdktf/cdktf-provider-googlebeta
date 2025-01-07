# `googleNetworkConnectivityInternalRange` Submodule <a name="`googleNetworkConnectivityInternalRange` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityInternalRange <a name="GoogleNetworkConnectivityInternalRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range google_network_connectivity_internal_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange(
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
  network: str,
  peering: str,
  usage: str,
  description: str = None,
  id: str = None,
  ip_cidr_range: str = None,
  labels: typing.Mapping[str] = None,
  migration: GoogleNetworkConnectivityInternalRangeMigration = None,
  overlaps: typing.List[str] = None,
  prefix_length: typing.Union[int, float] = None,
  project: str = None,
  target_cidr_range: typing.List[str] = None,
  timeouts: GoogleNetworkConnectivityInternalRangeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.network">network</a></code> | <code>str</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.peering">peering</a></code> | <code>str</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.usage">usage</a></code> | <code>str</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.migration">migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.overlaps">overlaps</a></code> | <code>typing.List[str]</code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.targetCidrRange">target_cidr_range</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.name"></a>

- *Type:* str

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#name GoogleNetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.network"></a>

- *Type:* str

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#network GoogleNetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.peering"></a>

- *Type:* str

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#peering GoogleNetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.usage"></a>

- *Type:* str

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#usage GoogleNetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#description GoogleNetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.ipCidrRange"></a>

- *Type:* str

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#ip_cidr_range GoogleNetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#labels GoogleNetworkConnectivityInternalRange#labels}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.migration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#migration GoogleNetworkConnectivityInternalRange#migration}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.overlaps"></a>

- *Type:* typing.List[str]

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#overlaps GoogleNetworkConnectivityInternalRange#overlaps}

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.prefixLength"></a>

- *Type:* typing.Union[int, float]

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#prefix_length GoogleNetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}.

---

##### `target_cidr_range`<sup>Optional</sup> <a name="target_cidr_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.targetCidrRange"></a>

- *Type:* typing.List[str]

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#target_cidr_range GoogleNetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#timeouts GoogleNetworkConnectivityInternalRange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration">put_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetIpCidrRange">reset_ip_cidr_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetMigration">reset_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverlaps">reset_overlaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetPrefixLength">reset_prefix_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTargetCidrRange">reset_target_cidr_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_migration` <a name="put_migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration"></a>

```python
def put_migration(
  source: str,
  target: str
) -> None
```

###### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration.parameter.source"></a>

- *Type:* str

Resource path as an URI of the source resource, for example a subnet.

The project for the source resource should match the project for the
InternalRange.
An example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#source GoogleNetworkConnectivityInternalRange#source}

---

###### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration.parameter.target"></a>

- *Type:* str

Resource path of the target resource.

The target project can be
different, as in the cases when migrating to peer networks. The resource
may not exist yet.
For example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#target GoogleNetworkConnectivityInternalRange#target}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_cidr_range` <a name="reset_ip_cidr_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetIpCidrRange"></a>

```python
def reset_ip_cidr_range() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_migration` <a name="reset_migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetMigration"></a>

```python
def reset_migration() -> None
```

##### `reset_overlaps` <a name="reset_overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverlaps"></a>

```python
def reset_overlaps() -> None
```

##### `reset_prefix_length` <a name="reset_prefix_length" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetPrefixLength"></a>

```python
def reset_prefix_length() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_target_cidr_range` <a name="reset_target_cidr_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTargetCidrRange"></a>

```python
def reset_target_cidr_range() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkConnectivityInternalRange to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkConnectivityInternalRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityInternalRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference">GoogleNetworkConnectivityInternalRangeMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference">GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migrationInput">migration_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlapsInput">overlaps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peeringInput">peering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLengthInput">prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRangeInput">target_cidr_range_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usageInput">usage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlaps">overlaps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peering">peering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRange">target_cidr_range</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usage">usage</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migration"></a>

```python
migration: GoogleNetworkConnectivityInternalRangeMigrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference">GoogleNetworkConnectivityInternalRangeMigrationOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference">GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `migration_input`<sup>Optional</sup> <a name="migration_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migrationInput"></a>

```python
migration_input: GoogleNetworkConnectivityInternalRangeMigration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `overlaps_input`<sup>Optional</sup> <a name="overlaps_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlapsInput"></a>

```python
overlaps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peering_input`<sup>Optional</sup> <a name="peering_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peeringInput"></a>

```python
peering_input: str
```

- *Type:* str

---

##### `prefix_length_input`<sup>Optional</sup> <a name="prefix_length_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLengthInput"></a>

```python
prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_cidr_range_input`<sup>Optional</sup> <a name="target_cidr_range_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRangeInput"></a>

```python
target_cidr_range_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkConnectivityInternalRangeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>]

---

##### `usage_input`<sup>Optional</sup> <a name="usage_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usageInput"></a>

```python
usage_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `overlaps`<sup>Required</sup> <a name="overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlaps"></a>

```python
overlaps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peering"></a>

```python
peering: str
```

- *Type:* str

---

##### `prefix_length`<sup>Required</sup> <a name="prefix_length" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `target_cidr_range`<sup>Required</sup> <a name="target_cidr_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRange"></a>

```python
target_cidr_range: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityInternalRangeConfig <a name="GoogleNetworkConnectivityInternalRangeConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network: str,
  peering: str,
  usage: str,
  description: str = None,
  id: str = None,
  ip_cidr_range: str = None,
  labels: typing.Mapping[str] = None,
  migration: GoogleNetworkConnectivityInternalRangeMigration = None,
  overlaps: typing.List[str] = None,
  prefix_length: typing.Union[int, float] = None,
  project: str = None,
  target_cidr_range: typing.List[str] = None,
  timeouts: GoogleNetworkConnectivityInternalRangeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.name">name</a></code> | <code>str</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.network">network</a></code> | <code>str</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.peering">peering</a></code> | <code>str</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.usage">usage</a></code> | <code>str</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.overlaps">overlaps</a></code> | <code>typing.List[str]</code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.targetCidrRange">target_cidr_range</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#name GoogleNetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#network GoogleNetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.peering"></a>

```python
peering: str
```

- *Type:* str

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#peering GoogleNetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.usage"></a>

```python
usage: str
```

- *Type:* str

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#usage GoogleNetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#description GoogleNetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#ip_cidr_range GoogleNetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#labels GoogleNetworkConnectivityInternalRange#labels}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.migration"></a>

```python
migration: GoogleNetworkConnectivityInternalRangeMigration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#migration GoogleNetworkConnectivityInternalRange#migration}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.overlaps"></a>

```python
overlaps: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#overlaps GoogleNetworkConnectivityInternalRange#overlaps}

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#prefix_length GoogleNetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}.

---

##### `target_cidr_range`<sup>Optional</sup> <a name="target_cidr_range" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.targetCidrRange"></a>

```python
target_cidr_range: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#target_cidr_range GoogleNetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityInternalRangeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#timeouts GoogleNetworkConnectivityInternalRange#timeouts}

---

### GoogleNetworkConnectivityInternalRangeMigration <a name="GoogleNetworkConnectivityInternalRangeMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration(
  source: str,
  target: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.source">source</a></code> | <code>str</code> | Resource path as an URI of the source resource, for example a subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.target">target</a></code> | <code>str</code> | Resource path of the target resource. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.source"></a>

```python
source: str
```

- *Type:* str

Resource path as an URI of the source resource, for example a subnet.

The project for the source resource should match the project for the
InternalRange.
An example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#source GoogleNetworkConnectivityInternalRange#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.target"></a>

```python
target: str
```

- *Type:* str

Resource path of the target resource.

The target project can be
different, as in the cases when migrating to peer networks. The resource
may not exist yet.
For example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#target GoogleNetworkConnectivityInternalRange#target}

---

### GoogleNetworkConnectivityInternalRangeTimeouts <a name="GoogleNetworkConnectivityInternalRangeTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityInternalRangeMigrationOutputReference <a name="GoogleNetworkConnectivityInternalRangeMigrationOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityInternalRangeMigration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---


### GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference <a name="GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_internal_range

googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkConnectivityInternalRangeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>]

---



