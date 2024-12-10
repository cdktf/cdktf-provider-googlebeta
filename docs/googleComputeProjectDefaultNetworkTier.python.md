# `googleComputeProjectDefaultNetworkTier` Submodule <a name="`googleComputeProjectDefaultNetworkTier` Submodule" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeProjectDefaultNetworkTier <a name="GoogleComputeProjectDefaultNetworkTier" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier google_compute_project_default_network_tier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_project_default_network_tier

googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_tier: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeProjectDefaultNetworkTierTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.networkTier">network_tier</a></code> | <code>str</code> | The default network tier to be configured for the project. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#id GoogleComputeProjectDefaultNetworkTier#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.networkTier"></a>

- *Type:* str

The default network tier to be configured for the project.

This field can take the following values: PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#network_tier GoogleComputeProjectDefaultNetworkTier#network_tier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#id GoogleComputeProjectDefaultNetworkTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#project GoogleComputeProjectDefaultNetworkTier#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#timeouts GoogleComputeProjectDefaultNetworkTier#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#create GoogleComputeProjectDefaultNetworkTier#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeProjectDefaultNetworkTier resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_project_default_network_tier

googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_project_default_network_tier

googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_project_default_network_tier

googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_project_default_network_tier

googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeProjectDefaultNetworkTier resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeProjectDefaultNetworkTier to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeProjectDefaultNetworkTier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeProjectDefaultNetworkTier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference">GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.networkTierInput">network_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.timeouts"></a>

```python
timeouts: GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference">GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_tier_input`<sup>Optional</sup> <a name="network_tier_input" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.networkTierInput"></a>

```python
network_tier_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeProjectDefaultNetworkTierTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTier.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeProjectDefaultNetworkTierConfig <a name="GoogleComputeProjectDefaultNetworkTierConfig" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_project_default_network_tier

googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_tier: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeProjectDefaultNetworkTierTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.networkTier">network_tier</a></code> | <code>str</code> | The default network tier to be configured for the project. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#id GoogleComputeProjectDefaultNetworkTier#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

The default network tier to be configured for the project.

This field can take the following values: PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#network_tier GoogleComputeProjectDefaultNetworkTier#network_tier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#id GoogleComputeProjectDefaultNetworkTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#project GoogleComputeProjectDefaultNetworkTier#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeProjectDefaultNetworkTierTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#timeouts GoogleComputeProjectDefaultNetworkTier#timeouts}

---

### GoogleComputeProjectDefaultNetworkTierTimeouts <a name="GoogleComputeProjectDefaultNetworkTierTimeouts" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_project_default_network_tier

googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#create GoogleComputeProjectDefaultNetworkTier#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_project_default_network_tier#create GoogleComputeProjectDefaultNetworkTier#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference <a name="GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_project_default_network_tier

googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeProjectDefaultNetworkTierTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeProjectDefaultNetworkTier.GoogleComputeProjectDefaultNetworkTierTimeouts">GoogleComputeProjectDefaultNetworkTierTimeouts</a>]

---



