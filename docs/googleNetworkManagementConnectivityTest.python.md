# `googleNetworkManagementConnectivityTest` Submodule <a name="`googleNetworkManagementConnectivityTest` Submodule" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementConnectivityTest <a name="GoogleNetworkManagementConnectivityTest" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test google_network_management_connectivity_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: GoogleNetworkManagementConnectivityTestDestination,
  name: str,
  source: GoogleNetworkManagementConnectivityTestSource,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  protocol: str = None,
  related_projects: typing.List[str] = None,
  timeouts: GoogleNetworkManagementConnectivityTestTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.description">description</a></code> | <code>str</code> | The user-supplied description of the Connectivity Test. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | IP Protocol of the test. When not provided, "TCP" is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.relatedProjects">related_projects</a></code> | <code>typing.List[str]</code> | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#destination GoogleNetworkManagementConnectivityTest#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#name GoogleNetworkManagementConnectivityTest#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#source GoogleNetworkManagementConnectivityTest#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.description"></a>

- *Type:* str

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#description GoogleNetworkManagementConnectivityTest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#labels GoogleNetworkManagementConnectivityTest#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.protocol"></a>

- *Type:* str

IP Protocol of the test. When not provided, "TCP" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#protocol GoogleNetworkManagementConnectivityTest#protocol}

---

##### `related_projects`<sup>Optional</sup> <a name="related_projects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.relatedProjects"></a>

- *Type:* typing.List[str]

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#related_projects GoogleNetworkManagementConnectivityTest#related_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#timeouts GoogleNetworkManagementConnectivityTest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetRelatedProjects">reset_related_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination"></a>

```python
def put_destination(
  instance: str = None,
  ip_address: str = None,
  network: str = None,
  port: typing.Union[int, float] = None,
  project_id: str = None
) -> None
```

###### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination.parameter.instance"></a>

- *Type:* str

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}

---

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination.parameter.ipAddress"></a>

- *Type:* str

The IP address of the endpoint, which can be an external or internal IP.

An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination.parameter.network"></a>

- *Type:* str

A Compute Engine network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination.parameter.port"></a>

- *Type:* typing.Union[int, float]

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination.parameter.projectId"></a>

- *Type:* str

Project ID where the endpoint is located.

The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:

1. Only the IP address is specified, and the IP address is within
   a GCP project. 2. When you are using Shared VPC and the IP address
   that you provide is from the service project. In this case, the
   network that the IP address resides in is defined in the host
   project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}

---

##### `put_source` <a name="put_source" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource"></a>

```python
def put_source(
  instance: str = None,
  ip_address: str = None,
  network: str = None,
  network_type: str = None,
  port: typing.Union[int, float] = None,
  project_id: str = None
) -> None
```

###### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource.parameter.instance"></a>

- *Type:* str

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}

---

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource.parameter.ipAddress"></a>

- *Type:* str

The IP address of the endpoint, which can be an external or internal IP.

An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource.parameter.network"></a>

- *Type:* str

A Compute Engine network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}

---

###### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource.parameter.networkType"></a>

- *Type:* str

Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#network_type GoogleNetworkManagementConnectivityTest#network_type}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource.parameter.port"></a>

- *Type:* typing.Union[int, float]

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource.parameter.projectId"></a>

- *Type:* str

Project ID where the endpoint is located.

The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:

1. Only the IP address is specified, and the IP address is
   within a GCP project.
2. When you are using Shared VPC and the IP address
   that you provide is from the service project. In this case,
   the network that the IP address resides in is defined in the
   host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#create GoogleNetworkManagementConnectivityTest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#delete GoogleNetworkManagementConnectivityTest#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#update GoogleNetworkManagementConnectivityTest#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_related_projects` <a name="reset_related_projects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetRelatedProjects"></a>

```python
def reset_related_projects() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkManagementConnectivityTest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkManagementConnectivityTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementConnectivityTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference">GoogleNetworkManagementConnectivityTestDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference">GoogleNetworkManagementConnectivityTestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference">GoogleNetworkManagementConnectivityTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjectsInput">related_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjects">related_projects</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destination"></a>

```python
destination: GoogleNetworkManagementConnectivityTestDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference">GoogleNetworkManagementConnectivityTestDestinationOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.source"></a>

```python
source: GoogleNetworkManagementConnectivityTestSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference">GoogleNetworkManagementConnectivityTestSourceOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeouts"></a>

```python
timeouts: GoogleNetworkManagementConnectivityTestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference">GoogleNetworkManagementConnectivityTestTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destinationInput"></a>

```python
destination_input: GoogleNetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `related_projects_input`<sup>Optional</sup> <a name="related_projects_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjectsInput"></a>

```python
related_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.sourceInput"></a>

```python
source_input: GoogleNetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkManagementConnectivityTestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `related_projects`<sup>Required</sup> <a name="related_projects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjects"></a>

```python
related_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementConnectivityTestConfig <a name="GoogleNetworkManagementConnectivityTestConfig" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: GoogleNetworkManagementConnectivityTestDestination,
  name: str,
  source: GoogleNetworkManagementConnectivityTestSource,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  protocol: str = None,
  related_projects: typing.List[str] = None,
  timeouts: GoogleNetworkManagementConnectivityTestTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.name">name</a></code> | <code>str</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.description">description</a></code> | <code>str</code> | The user-supplied description of the Connectivity Test. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.protocol">protocol</a></code> | <code>str</code> | IP Protocol of the test. When not provided, "TCP" is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.relatedProjects">related_projects</a></code> | <code>typing.List[str]</code> | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.destination"></a>

```python
destination: GoogleNetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#destination GoogleNetworkManagementConnectivityTest#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#name GoogleNetworkManagementConnectivityTest#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.source"></a>

```python
source: GoogleNetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#source GoogleNetworkManagementConnectivityTest#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#description GoogleNetworkManagementConnectivityTest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#labels GoogleNetworkManagementConnectivityTest#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

IP Protocol of the test. When not provided, "TCP" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#protocol GoogleNetworkManagementConnectivityTest#protocol}

---

##### `related_projects`<sup>Optional</sup> <a name="related_projects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.relatedProjects"></a>

```python
related_projects: typing.List[str]
```

- *Type:* typing.List[str]

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#related_projects GoogleNetworkManagementConnectivityTest#related_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkManagementConnectivityTestTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#timeouts GoogleNetworkManagementConnectivityTest#timeouts}

---

### GoogleNetworkManagementConnectivityTestDestination <a name="GoogleNetworkManagementConnectivityTestDestination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination(
  instance: str = None,
  ip_address: str = None,
  network: str = None,
  port: typing.Union[int, float] = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.instance">instance</a></code> | <code>str</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.ipAddress">ip_address</a></code> | <code>str</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.network">network</a></code> | <code>str</code> | A Compute Engine network URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.projectId">project_id</a></code> | <code>str</code> | Project ID where the endpoint is located. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.instance"></a>

```python
instance: str
```

- *Type:* str

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The IP address of the endpoint, which can be an external or internal IP.

An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.network"></a>

```python
network: str
```

- *Type:* str

A Compute Engine network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project ID where the endpoint is located.

The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:

1. Only the IP address is specified, and the IP address is within
   a GCP project. 2. When you are using Shared VPC and the IP address
   that you provide is from the service project. In this case, the
   network that the IP address resides in is defined in the host
   project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}

---

### GoogleNetworkManagementConnectivityTestSource <a name="GoogleNetworkManagementConnectivityTestSource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource(
  instance: str = None,
  ip_address: str = None,
  network: str = None,
  network_type: str = None,
  port: typing.Union[int, float] = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.instance">instance</a></code> | <code>str</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.ipAddress">ip_address</a></code> | <code>str</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.network">network</a></code> | <code>str</code> | A Compute Engine network URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.networkType">network_type</a></code> | <code>str</code> | Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.projectId">project_id</a></code> | <code>str</code> | Project ID where the endpoint is located. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.instance"></a>

```python
instance: str
```

- *Type:* str

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The IP address of the endpoint, which can be an external or internal IP.

An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.network"></a>

```python
network: str
```

- *Type:* str

A Compute Engine network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#network_type GoogleNetworkManagementConnectivityTest#network_type}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project ID where the endpoint is located.

The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:

1. Only the IP address is specified, and the IP address is
   within a GCP project.
2. When you are using Shared VPC and the IP address
   that you provide is from the service project. In this case,
   the network that the IP address resides in is defined in the
   host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}

---

### GoogleNetworkManagementConnectivityTestTimeouts <a name="GoogleNetworkManagementConnectivityTestTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#create GoogleNetworkManagementConnectivityTest#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#delete GoogleNetworkManagementConnectivityTest#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#update GoogleNetworkManagementConnectivityTest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#create GoogleNetworkManagementConnectivityTest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#delete GoogleNetworkManagementConnectivityTest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_connectivity_test#update GoogleNetworkManagementConnectivityTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementConnectivityTestDestinationOutputReference <a name="GoogleNetworkManagementConnectivityTestDestinationOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

---


### GoogleNetworkManagementConnectivityTestSourceOutputReference <a name="GoogleNetworkManagementConnectivityTestSourceOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

---


### GoogleNetworkManagementConnectivityTestTimeoutsOutputReference <a name="GoogleNetworkManagementConnectivityTestTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_management_connectivity_test

googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkManagementConnectivityTestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>]

---



