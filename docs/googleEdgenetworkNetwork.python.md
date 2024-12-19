# `googleEdgenetworkNetwork` Submodule <a name="`googleEdgenetworkNetwork` Submodule" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgenetworkNetwork <a name="GoogleEdgenetworkNetwork" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network google_edgenetwork_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgenetwork_network

googleEdgenetworkNetwork.GoogleEdgenetworkNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  network_id: str,
  zone: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mtu: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleEdgenetworkNetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.location">location</a></code> | <code>str</code> | The Google Cloud region to which the target Distributed Cloud Edge zone belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | A unique ID that identifies this network. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The name of the target Distributed Cloud Edge zone. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#id GoogleEdgenetworkNetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | IP (L3) MTU value of the network. Default value is '1500'. Possible values are: '1500', '9000'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#project GoogleEdgenetworkNetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.location"></a>

- *Type:* str

The Google Cloud region to which the target Distributed Cloud Edge zone belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#location GoogleEdgenetworkNetwork#location}

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.networkId"></a>

- *Type:* str

A unique ID that identifies this network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#network_id GoogleEdgenetworkNetwork#network_id}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.zone"></a>

- *Type:* str

The name of the target Distributed Cloud Edge zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#zone GoogleEdgenetworkNetwork#zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#description GoogleEdgenetworkNetwork#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#id GoogleEdgenetworkNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#labels GoogleEdgenetworkNetwork#labels}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

IP (L3) MTU value of the network. Default value is '1500'. Possible values are: '1500', '9000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#mtu GoogleEdgenetworkNetwork#mtu}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#project GoogleEdgenetworkNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#timeouts GoogleEdgenetworkNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#create GoogleEdgenetworkNetwork#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#delete GoogleEdgenetworkNetwork#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#update GoogleEdgenetworkNetwork#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleEdgenetworkNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgenetwork_network

googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgenetwork_network

googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgenetwork_network

googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgenetwork_network

googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleEdgenetworkNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleEdgenetworkNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleEdgenetworkNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgenetworkNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference">GoogleEdgenetworkNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.timeouts"></a>

```python
timeouts: GoogleEdgenetworkNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference">GoogleEdgenetworkNetworkTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleEdgenetworkNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgenetworkNetworkConfig <a name="GoogleEdgenetworkNetworkConfig" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgenetwork_network

googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  network_id: str,
  zone: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mtu: typing.Union[int, float] = None,
  project: str = None,
  timeouts: GoogleEdgenetworkNetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.location">location</a></code> | <code>str</code> | The Google Cloud region to which the target Distributed Cloud Edge zone belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.networkId">network_id</a></code> | <code>str</code> | A unique ID that identifies this network. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.zone">zone</a></code> | <code>str</code> | The name of the target Distributed Cloud Edge zone. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#id GoogleEdgenetworkNetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | IP (L3) MTU value of the network. Default value is '1500'. Possible values are: '1500', '9000'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#project GoogleEdgenetworkNetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Google Cloud region to which the target Distributed Cloud Edge zone belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#location GoogleEdgenetworkNetwork#location}

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

A unique ID that identifies this network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#network_id GoogleEdgenetworkNetwork#network_id}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The name of the target Distributed Cloud Edge zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#zone GoogleEdgenetworkNetwork#zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#description GoogleEdgenetworkNetwork#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#id GoogleEdgenetworkNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#labels GoogleEdgenetworkNetwork#labels}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

IP (L3) MTU value of the network. Default value is '1500'. Possible values are: '1500', '9000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#mtu GoogleEdgenetworkNetwork#mtu}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#project GoogleEdgenetworkNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.timeouts"></a>

```python
timeouts: GoogleEdgenetworkNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#timeouts GoogleEdgenetworkNetwork#timeouts}

---

### GoogleEdgenetworkNetworkTimeouts <a name="GoogleEdgenetworkNetworkTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgenetwork_network

googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#create GoogleEdgenetworkNetwork#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#delete GoogleEdgenetworkNetwork#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#update GoogleEdgenetworkNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#create GoogleEdgenetworkNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#delete GoogleEdgenetworkNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#update GoogleEdgenetworkNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgenetworkNetworkTimeoutsOutputReference <a name="GoogleEdgenetworkNetworkTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgenetwork_network

googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEdgenetworkNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a>]

---



