# `googleBlockchainNodeEngineBlockchainNodes` Submodule <a name="`googleBlockchainNodeEngineBlockchainNodes` Submodule" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBlockchainNodeEngineBlockchainNodes <a name="GoogleBlockchainNodeEngineBlockchainNodes" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes google_blockchain_node_engine_blockchain_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blockchain_node_id: str,
  location: str,
  blockchain_type: str = None,
  ethereum_details: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleBlockchainNodeEngineBlockchainNodesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.blockchainNodeId">blockchain_node_id</a></code> | <code>str</code> | ID of the requesting object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of Blockchain Node being created. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.blockchainType">blockchain_type</a></code> | <code>str</code> | User-provided key-value pairs Possible values: ["ETHEREUM"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.ethereumDetails">ethereum_details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | ethereum_details block. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#id GoogleBlockchainNodeEngineBlockchainNodes#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-provided key-value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#project GoogleBlockchainNodeEngineBlockchainNodes#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blockchain_node_id`<sup>Required</sup> <a name="blockchain_node_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.blockchainNodeId"></a>

- *Type:* str

ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#blockchain_node_id GoogleBlockchainNodeEngineBlockchainNodes#blockchain_node_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.location"></a>

- *Type:* str

Location of Blockchain Node being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#location GoogleBlockchainNodeEngineBlockchainNodes#location}

---

##### `blockchain_type`<sup>Optional</sup> <a name="blockchain_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.blockchainType"></a>

- *Type:* str

User-provided key-value pairs Possible values: ["ETHEREUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#blockchain_type GoogleBlockchainNodeEngineBlockchainNodes#blockchain_type}

---

##### `ethereum_details`<sup>Optional</sup> <a name="ethereum_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.ethereumDetails"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a>

ethereum_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#ethereum_details GoogleBlockchainNodeEngineBlockchainNodes#ethereum_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#id GoogleBlockchainNodeEngineBlockchainNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-provided key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#labels GoogleBlockchainNodeEngineBlockchainNodes#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#project GoogleBlockchainNodeEngineBlockchainNodes#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#timeouts GoogleBlockchainNodeEngineBlockchainNodes#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails">put_ethereum_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetBlockchainType">reset_blockchain_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetEthereumDetails">reset_ethereum_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ethereum_details` <a name="put_ethereum_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails"></a>

```python
def put_ethereum_details(
  api_enable_admin: typing.Union[bool, IResolvable] = None,
  api_enable_debug: typing.Union[bool, IResolvable] = None,
  consensus_client: str = None,
  execution_client: str = None,
  fetchh_details: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails = None,
  network: str = None,
  node_type: str = None,
  validator_config: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig = None
) -> None
```

###### `api_enable_admin`<sup>Optional</sup> <a name="api_enable_admin" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.apiEnableAdmin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables JSON-RPC access to functions in the admin namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#api_enable_admin GoogleBlockchainNodeEngineBlockchainNodes#api_enable_admin}

---

###### `api_enable_debug`<sup>Optional</sup> <a name="api_enable_debug" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.apiEnableDebug"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables JSON-RPC access to functions in the debug namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#api_enable_debug GoogleBlockchainNodeEngineBlockchainNodes#api_enable_debug}

---

###### `consensus_client`<sup>Optional</sup> <a name="consensus_client" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.consensusClient"></a>

- *Type:* str

The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#consensus_client GoogleBlockchainNodeEngineBlockchainNodes#consensus_client}

---

###### `execution_client`<sup>Optional</sup> <a name="execution_client" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.executionClient"></a>

- *Type:* str

The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#execution_client GoogleBlockchainNodeEngineBlockchainNodes#execution_client}

---

###### `fetchh_details`<sup>Optional</sup> <a name="fetchh_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.fetchhDetails"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

geth_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#geth_details GoogleBlockchainNodeEngineBlockchainNodes#geth_details}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.network"></a>

- *Type:* str

The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#network GoogleBlockchainNodeEngineBlockchainNodes#network}

---

###### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.nodeType"></a>

- *Type:* str

The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#node_type GoogleBlockchainNodeEngineBlockchainNodes#node_type}

---

###### `validator_config`<sup>Optional</sup> <a name="validator_config" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.validatorConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

validator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#validator_config GoogleBlockchainNodeEngineBlockchainNodes#validator_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#create GoogleBlockchainNodeEngineBlockchainNodes#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#delete GoogleBlockchainNodeEngineBlockchainNodes#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#update GoogleBlockchainNodeEngineBlockchainNodes#update}.

---

##### `reset_blockchain_type` <a name="reset_blockchain_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetBlockchainType"></a>

```python
def reset_blockchain_type() -> None
```

##### `reset_ethereum_details` <a name="reset_ethereum_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetEthereumDetails"></a>

```python
def reset_ethereum_details() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBlockchainNodeEngineBlockchainNodes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBlockchainNodeEngineBlockchainNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBlockchainNodeEngineBlockchainNodes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBlockchainNodeEngineBlockchainNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBlockchainNodeEngineBlockchainNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.connectionInfo">connection_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.ethereumDetails">ethereum_details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainNodeIdInput">blockchain_node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainTypeInput">blockchain_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.ethereumDetailsInput">ethereum_details_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainNodeId">blockchain_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainType">blockchain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_info`<sup>Required</sup> <a name="connection_info" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.connectionInfo"></a>

```python
connection_info: GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ethereum_details`<sup>Required</sup> <a name="ethereum_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.ethereumDetails"></a>

```python
ethereum_details: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.timeouts"></a>

```python
timeouts: GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `blockchain_node_id_input`<sup>Optional</sup> <a name="blockchain_node_id_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainNodeIdInput"></a>

```python
blockchain_node_id_input: str
```

- *Type:* str

---

##### `blockchain_type_input`<sup>Optional</sup> <a name="blockchain_type_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainTypeInput"></a>

```python
blockchain_type_input: str
```

- *Type:* str

---

##### `ethereum_details_input`<sup>Optional</sup> <a name="ethereum_details_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.ethereumDetailsInput"></a>

```python
ethereum_details_input: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBlockchainNodeEngineBlockchainNodesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a>]

---

##### `blockchain_node_id`<sup>Required</sup> <a name="blockchain_node_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainNodeId"></a>

```python
blockchain_node_id: str
```

- *Type:* str

---

##### `blockchain_type`<sup>Required</sup> <a name="blockchain_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainType"></a>

```python
blockchain_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBlockchainNodeEngineBlockchainNodesConfig <a name="GoogleBlockchainNodeEngineBlockchainNodesConfig" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blockchain_node_id: str,
  location: str,
  blockchain_type: str = None,
  ethereum_details: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleBlockchainNodeEngineBlockchainNodesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.blockchainNodeId">blockchain_node_id</a></code> | <code>str</code> | ID of the requesting object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.location">location</a></code> | <code>str</code> | Location of Blockchain Node being created. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.blockchainType">blockchain_type</a></code> | <code>str</code> | User-provided key-value pairs Possible values: ["ETHEREUM"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.ethereumDetails">ethereum_details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | ethereum_details block. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#id GoogleBlockchainNodeEngineBlockchainNodes#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-provided key-value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#project GoogleBlockchainNodeEngineBlockchainNodes#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blockchain_node_id`<sup>Required</sup> <a name="blockchain_node_id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.blockchainNodeId"></a>

```python
blockchain_node_id: str
```

- *Type:* str

ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#blockchain_node_id GoogleBlockchainNodeEngineBlockchainNodes#blockchain_node_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of Blockchain Node being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#location GoogleBlockchainNodeEngineBlockchainNodes#location}

---

##### `blockchain_type`<sup>Optional</sup> <a name="blockchain_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.blockchainType"></a>

```python
blockchain_type: str
```

- *Type:* str

User-provided key-value pairs Possible values: ["ETHEREUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#blockchain_type GoogleBlockchainNodeEngineBlockchainNodes#blockchain_type}

---

##### `ethereum_details`<sup>Optional</sup> <a name="ethereum_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.ethereumDetails"></a>

```python
ethereum_details: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a>

ethereum_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#ethereum_details GoogleBlockchainNodeEngineBlockchainNodes#ethereum_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#id GoogleBlockchainNodeEngineBlockchainNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-provided key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#labels GoogleBlockchainNodeEngineBlockchainNodes#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#project GoogleBlockchainNodeEngineBlockchainNodes#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.timeouts"></a>

```python
timeouts: GoogleBlockchainNodeEngineBlockchainNodesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#timeouts GoogleBlockchainNodeEngineBlockchainNodes#timeouts}

---

### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo()
```


### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo()
```


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails(
  api_enable_admin: typing.Union[bool, IResolvable] = None,
  api_enable_debug: typing.Union[bool, IResolvable] = None,
  consensus_client: str = None,
  execution_client: str = None,
  fetchh_details: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails = None,
  network: str = None,
  node_type: str = None,
  validator_config: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableAdmin">api_enable_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables JSON-RPC access to functions in the admin namespace. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableDebug">api_enable_debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables JSON-RPC access to functions in the debug namespace. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.consensusClient">consensus_client</a></code> | <code>str</code> | The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.executionClient">execution_client</a></code> | <code>str</code> | The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.fetchhDetails">fetchh_details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | geth_details block. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.network">network</a></code> | <code>str</code> | The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.nodeType">node_type</a></code> | <code>str</code> | The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.validatorConfig">validator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | validator_config block. |

---

##### `api_enable_admin`<sup>Optional</sup> <a name="api_enable_admin" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableAdmin"></a>

```python
api_enable_admin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables JSON-RPC access to functions in the admin namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#api_enable_admin GoogleBlockchainNodeEngineBlockchainNodes#api_enable_admin}

---

##### `api_enable_debug`<sup>Optional</sup> <a name="api_enable_debug" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableDebug"></a>

```python
api_enable_debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables JSON-RPC access to functions in the debug namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#api_enable_debug GoogleBlockchainNodeEngineBlockchainNodes#api_enable_debug}

---

##### `consensus_client`<sup>Optional</sup> <a name="consensus_client" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.consensusClient"></a>

```python
consensus_client: str
```

- *Type:* str

The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#consensus_client GoogleBlockchainNodeEngineBlockchainNodes#consensus_client}

---

##### `execution_client`<sup>Optional</sup> <a name="execution_client" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.executionClient"></a>

```python
execution_client: str
```

- *Type:* str

The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#execution_client GoogleBlockchainNodeEngineBlockchainNodes#execution_client}

---

##### `fetchh_details`<sup>Optional</sup> <a name="fetchh_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.fetchhDetails"></a>

```python
fetchh_details: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

geth_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#geth_details GoogleBlockchainNodeEngineBlockchainNodes#geth_details}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.network"></a>

```python
network: str
```

- *Type:* str

The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#network GoogleBlockchainNodeEngineBlockchainNodes#network}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#node_type GoogleBlockchainNodeEngineBlockchainNodes#node_type}

---

##### `validator_config`<sup>Optional</sup> <a name="validator_config" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.validatorConfig"></a>

```python
validator_config: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

validator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#validator_config GoogleBlockchainNodeEngineBlockchainNodes#validator_config}

---

### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints()
```


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails(
  garbage_collection_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.property.garbageCollectionMode">garbage_collection_mode</a></code> | <code>str</code> | Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"]. |

---

##### `garbage_collection_mode`<sup>Optional</sup> <a name="garbage_collection_mode" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.property.garbageCollectionMode"></a>

```python
garbage_collection_mode: str
```

- *Type:* str

Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#garbage_collection_mode GoogleBlockchainNodeEngineBlockchainNodes#garbage_collection_mode}

---

### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig(
  mev_relay_urls: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.mevRelayUrls">mev_relay_urls</a></code> | <code>typing.List[str]</code> | URLs for MEV-relay services to use for block building. |

---

##### `mev_relay_urls`<sup>Optional</sup> <a name="mev_relay_urls" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.mevRelayUrls"></a>

```python
mev_relay_urls: typing.List[str]
```

- *Type:* typing.List[str]

URLs for MEV-relay services to use for block building.

When set, a managed MEV-boost service is configured on the beacon client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#mev_relay_urls GoogleBlockchainNodeEngineBlockchainNodes#mev_relay_urls}

---

### GoogleBlockchainNodeEngineBlockchainNodesTimeouts <a name="GoogleBlockchainNodeEngineBlockchainNodesTimeouts" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#create GoogleBlockchainNodeEngineBlockchainNodes#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#delete GoogleBlockchainNodeEngineBlockchainNodes#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#update GoogleBlockchainNodeEngineBlockchainNodes#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#create GoogleBlockchainNodeEngineBlockchainNodes#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#delete GoogleBlockchainNodeEngineBlockchainNodes#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#update GoogleBlockchainNodeEngineBlockchainNodes#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.jsonRpcApiEndpoint">json_rpc_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.websocketsApiEndpoint">websockets_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_rpc_api_endpoint`<sup>Required</sup> <a name="json_rpc_api_endpoint" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.jsonRpcApiEndpoint"></a>

```python
json_rpc_api_endpoint: str
```

- *Type:* str

---

##### `websockets_api_endpoint`<sup>Required</sup> <a name="websockets_api_endpoint" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.websocketsApiEndpoint"></a>

```python
websockets_api_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.endpointInfo">endpoint_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_info`<sup>Required</sup> <a name="endpoint_info" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.endpointInfo"></a>

```python
endpoint_info: GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList</a>

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconApiEndpoint">beacon_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconPrometheusMetricsApiEndpoint">beacon_prometheus_metrics_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.executionClientPrometheusMetricsApiEndpoint">execution_client_prometheus_metrics_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `beacon_api_endpoint`<sup>Required</sup> <a name="beacon_api_endpoint" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconApiEndpoint"></a>

```python
beacon_api_endpoint: str
```

- *Type:* str

---

##### `beacon_prometheus_metrics_api_endpoint`<sup>Required</sup> <a name="beacon_prometheus_metrics_api_endpoint" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconPrometheusMetricsApiEndpoint"></a>

```python
beacon_prometheus_metrics_api_endpoint: str
```

- *Type:* str

---

##### `execution_client_prometheus_metrics_api_endpoint`<sup>Required</sup> <a name="execution_client_prometheus_metrics_api_endpoint" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.executionClientPrometheusMetricsApiEndpoint"></a>

```python
execution_client_prometheus_metrics_api_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resetGarbageCollectionMode">reset_garbage_collection_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_garbage_collection_mode` <a name="reset_garbage_collection_mode" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resetGarbageCollectionMode"></a>

```python
def reset_garbage_collection_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionModeInput">garbage_collection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionMode">garbage_collection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `garbage_collection_mode_input`<sup>Optional</sup> <a name="garbage_collection_mode_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionModeInput"></a>

```python
garbage_collection_mode_input: str
```

- *Type:* str

---

##### `garbage_collection_mode`<sup>Required</sup> <a name="garbage_collection_mode" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionMode"></a>

```python
garbage_collection_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails">put_fetchh_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig">put_validator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableAdmin">reset_api_enable_admin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableDebug">reset_api_enable_debug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetConsensusClient">reset_consensus_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetExecutionClient">reset_execution_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetFetchhDetails">reset_fetchh_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNodeType">reset_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetValidatorConfig">reset_validator_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fetchh_details` <a name="put_fetchh_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails"></a>

```python
def put_fetchh_details(
  garbage_collection_mode: str = None
) -> None
```

###### `garbage_collection_mode`<sup>Optional</sup> <a name="garbage_collection_mode" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails.parameter.garbageCollectionMode"></a>

- *Type:* str

Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#garbage_collection_mode GoogleBlockchainNodeEngineBlockchainNodes#garbage_collection_mode}

---

##### `put_validator_config` <a name="put_validator_config" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig"></a>

```python
def put_validator_config(
  mev_relay_urls: typing.List[str] = None
) -> None
```

###### `mev_relay_urls`<sup>Optional</sup> <a name="mev_relay_urls" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig.parameter.mevRelayUrls"></a>

- *Type:* typing.List[str]

URLs for MEV-relay services to use for block building.

When set, a managed MEV-boost service is configured on the beacon client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_blockchain_node_engine_blockchain_nodes#mev_relay_urls GoogleBlockchainNodeEngineBlockchainNodes#mev_relay_urls}

---

##### `reset_api_enable_admin` <a name="reset_api_enable_admin" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableAdmin"></a>

```python
def reset_api_enable_admin() -> None
```

##### `reset_api_enable_debug` <a name="reset_api_enable_debug" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableDebug"></a>

```python
def reset_api_enable_debug() -> None
```

##### `reset_consensus_client` <a name="reset_consensus_client" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetConsensusClient"></a>

```python
def reset_consensus_client() -> None
```

##### `reset_execution_client` <a name="reset_execution_client" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetExecutionClient"></a>

```python
def reset_execution_client() -> None
```

##### `reset_fetchh_details` <a name="reset_fetchh_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetFetchhDetails"></a>

```python
def reset_fetchh_details() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_node_type` <a name="reset_node_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNodeType"></a>

```python
def reset_node_type() -> None
```

##### `reset_validator_config` <a name="reset_validator_config" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetValidatorConfig"></a>

```python
def reset_validator_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.additionalEndpoints">additional_endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetails">fetchh_details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfig">validator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdminInput">api_enable_admin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebugInput">api_enable_debug_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClientInput">consensus_client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClientInput">execution_client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetailsInput">fetchh_details_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfigInput">validator_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdmin">api_enable_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebug">api_enable_debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClient">consensus_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClient">execution_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_endpoints`<sup>Required</sup> <a name="additional_endpoints" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.additionalEndpoints"></a>

```python
additional_endpoints: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList</a>

---

##### `fetchh_details`<sup>Required</sup> <a name="fetchh_details" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetails"></a>

```python
fetchh_details: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference</a>

---

##### `validator_config`<sup>Required</sup> <a name="validator_config" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfig"></a>

```python
validator_config: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference</a>

---

##### `api_enable_admin_input`<sup>Optional</sup> <a name="api_enable_admin_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdminInput"></a>

```python
api_enable_admin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_enable_debug_input`<sup>Optional</sup> <a name="api_enable_debug_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebugInput"></a>

```python
api_enable_debug_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `consensus_client_input`<sup>Optional</sup> <a name="consensus_client_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClientInput"></a>

```python
consensus_client_input: str
```

- *Type:* str

---

##### `execution_client_input`<sup>Optional</sup> <a name="execution_client_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClientInput"></a>

```python
execution_client_input: str
```

- *Type:* str

---

##### `fetchh_details_input`<sup>Optional</sup> <a name="fetchh_details_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetailsInput"></a>

```python
fetchh_details_input: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `validator_config_input`<sup>Optional</sup> <a name="validator_config_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfigInput"></a>

```python
validator_config_input: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---

##### `api_enable_admin`<sup>Required</sup> <a name="api_enable_admin" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdmin"></a>

```python
api_enable_admin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_enable_debug`<sup>Required</sup> <a name="api_enable_debug" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebug"></a>

```python
api_enable_debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `consensus_client`<sup>Required</sup> <a name="consensus_client" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClient"></a>

```python
consensus_client: str
```

- *Type:* str

---

##### `execution_client`<sup>Required</sup> <a name="execution_client" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClient"></a>

```python
execution_client: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetMevRelayUrls">reset_mev_relay_urls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mev_relay_urls` <a name="reset_mev_relay_urls" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetMevRelayUrls"></a>

```python
def reset_mev_relay_urls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrlsInput">mev_relay_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrls">mev_relay_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mev_relay_urls_input`<sup>Optional</sup> <a name="mev_relay_urls_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrlsInput"></a>

```python
mev_relay_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mev_relay_urls`<sup>Required</sup> <a name="mev_relay_urls" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrls"></a>

```python
mev_relay_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_blockchain_node_engine_blockchain_nodes

googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBlockchainNodeEngineBlockchainNodesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a>]

---



