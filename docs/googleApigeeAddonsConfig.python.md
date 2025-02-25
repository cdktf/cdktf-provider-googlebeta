# `googleApigeeAddonsConfig` Submodule <a name="`googleApigeeAddonsConfig` Submodule" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeAddonsConfig <a name="GoogleApigeeAddonsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config google_apigee_addons_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org: str,
  addons_config: GoogleApigeeAddonsConfigAddonsConfig = None,
  id: str = None,
  timeouts: GoogleApigeeAddonsConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.org">org</a></code> | <code>str</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.addonsConfig">addons_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a></code> | addons_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#id GoogleApigeeAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.org"></a>

- *Type:* str

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#org GoogleApigeeAddonsConfig#org}

---

##### `addons_config`<sup>Optional</sup> <a name="addons_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.addonsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a>

addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#addons_config GoogleApigeeAddonsConfig#addons_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#id GoogleApigeeAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#timeouts GoogleApigeeAddonsConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig">put_addons_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetAddonsConfig">reset_addons_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_addons_config` <a name="put_addons_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig"></a>

```python
def put_addons_config(
  advanced_api_ops_config: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig = None,
  api_security_config: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig = None,
  connectors_platform_config: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig = None,
  integration_config: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig = None,
  monetization_config: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig = None
) -> None
```

###### `advanced_api_ops_config`<sup>Optional</sup> <a name="advanced_api_ops_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig.parameter.advancedApiOpsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

advanced_api_ops_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#advanced_api_ops_config GoogleApigeeAddonsConfig#advanced_api_ops_config}

---

###### `api_security_config`<sup>Optional</sup> <a name="api_security_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig.parameter.apiSecurityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

api_security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#api_security_config GoogleApigeeAddonsConfig#api_security_config}

---

###### `connectors_platform_config`<sup>Optional</sup> <a name="connectors_platform_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig.parameter.connectorsPlatformConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

connectors_platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#connectors_platform_config GoogleApigeeAddonsConfig#connectors_platform_config}

---

###### `integration_config`<sup>Optional</sup> <a name="integration_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig.parameter.integrationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

integration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#integration_config GoogleApigeeAddonsConfig#integration_config}

---

###### `monetization_config`<sup>Optional</sup> <a name="monetization_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putAddonsConfig.parameter.monetizationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

monetization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#monetization_config GoogleApigeeAddonsConfig#monetization_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#create GoogleApigeeAddonsConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#delete GoogleApigeeAddonsConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#update GoogleApigeeAddonsConfig#update}.

---

##### `reset_addons_config` <a name="reset_addons_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetAddonsConfig"></a>

```python
def reset_addons_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApigeeAddonsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApigeeAddonsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeAddonsConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.addonsConfig">addons_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference">GoogleApigeeAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.addonsConfigInput">addons_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.orgInput">org_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.org">org</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addons_config`<sup>Required</sup> <a name="addons_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.addonsConfig"></a>

```python
addons_config: GoogleApigeeAddonsConfigAddonsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeAddonsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference">GoogleApigeeAddonsConfigTimeoutsOutputReference</a>

---

##### `addons_config_input`<sup>Optional</sup> <a name="addons_config_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.addonsConfigInput"></a>

```python
addons_config_input: GoogleApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_input`<sup>Optional</sup> <a name="org_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.orgInput"></a>

```python
org_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApigeeAddonsConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.org"></a>

```python
org: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeAddonsConfigAddonsConfig <a name="GoogleApigeeAddonsConfigAddonsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig(
  advanced_api_ops_config: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig = None,
  api_security_config: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig = None,
  connectors_platform_config: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig = None,
  integration_config: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig = None,
  monetization_config: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig">advanced_api_ops_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | advanced_api_ops_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig">api_security_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | api_security_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig">connectors_platform_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | connectors_platform_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.integrationConfig">integration_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | integration_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.monetizationConfig">monetization_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | monetization_config block. |

---

##### `advanced_api_ops_config`<sup>Optional</sup> <a name="advanced_api_ops_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig"></a>

```python
advanced_api_ops_config: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

advanced_api_ops_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#advanced_api_ops_config GoogleApigeeAddonsConfig#advanced_api_ops_config}

---

##### `api_security_config`<sup>Optional</sup> <a name="api_security_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig"></a>

```python
api_security_config: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

api_security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#api_security_config GoogleApigeeAddonsConfig#api_security_config}

---

##### `connectors_platform_config`<sup>Optional</sup> <a name="connectors_platform_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig"></a>

```python
connectors_platform_config: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

connectors_platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#connectors_platform_config GoogleApigeeAddonsConfig#connectors_platform_config}

---

##### `integration_config`<sup>Optional</sup> <a name="integration_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.integrationConfig"></a>

```python
integration_config: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

integration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#integration_config GoogleApigeeAddonsConfig#integration_config}

---

##### `monetization_config`<sup>Optional</sup> <a name="monetization_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig.property.monetizationConfig"></a>

```python
monetization_config: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

monetization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#monetization_config GoogleApigeeAddonsConfig#monetization_config}

---

### GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig <a name="GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig <a name="GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig <a name="GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig <a name="GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig <a name="GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

### GoogleApigeeAddonsConfigConfig <a name="GoogleApigeeAddonsConfigConfig" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org: str,
  addons_config: GoogleApigeeAddonsConfigAddonsConfig = None,
  id: str = None,
  timeouts: GoogleApigeeAddonsConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.org">org</a></code> | <code>str</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.addonsConfig">addons_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a></code> | addons_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#id GoogleApigeeAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.org"></a>

```python
org: str
```

- *Type:* str

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#org GoogleApigeeAddonsConfig#org}

---

##### `addons_config`<sup>Optional</sup> <a name="addons_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.addonsConfig"></a>

```python
addons_config: GoogleApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a>

addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#addons_config GoogleApigeeAddonsConfig#addons_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#id GoogleApigeeAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeAddonsConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#timeouts GoogleApigeeAddonsConfig#timeouts}

---

### GoogleApigeeAddonsConfigTimeouts <a name="GoogleApigeeAddonsConfigTimeouts" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#create GoogleApigeeAddonsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#delete GoogleApigeeAddonsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#update GoogleApigeeAddonsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#create GoogleApigeeAddonsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#delete GoogleApigeeAddonsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#update GoogleApigeeAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---


### GoogleApigeeAddonsConfigAddonsConfigOutputReference <a name="GoogleApigeeAddonsConfigAddonsConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig">put_advanced_api_ops_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig">put_api_security_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig">put_connectors_platform_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig">put_integration_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig">put_monetization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig">reset_advanced_api_ops_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig">reset_api_security_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig">reset_connectors_platform_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig">reset_integration_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig">reset_monetization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_api_ops_config` <a name="put_advanced_api_ops_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig"></a>

```python
def put_advanced_api_ops_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

##### `put_api_security_config` <a name="put_api_security_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig"></a>

```python
def put_api_security_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

##### `put_connectors_platform_config` <a name="put_connectors_platform_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig"></a>

```python
def put_connectors_platform_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

##### `put_integration_config` <a name="put_integration_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig"></a>

```python
def put_integration_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

##### `put_monetization_config` <a name="put_monetization_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig"></a>

```python
def put_monetization_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_apigee_addons_config#enabled GoogleApigeeAddonsConfig#enabled}

---

##### `reset_advanced_api_ops_config` <a name="reset_advanced_api_ops_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig"></a>

```python
def reset_advanced_api_ops_config() -> None
```

##### `reset_api_security_config` <a name="reset_api_security_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig"></a>

```python
def reset_api_security_config() -> None
```

##### `reset_connectors_platform_config` <a name="reset_connectors_platform_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig"></a>

```python
def reset_connectors_platform_config() -> None
```

##### `reset_integration_config` <a name="reset_integration_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig"></a>

```python
def reset_integration_config() -> None
```

##### `reset_monetization_config` <a name="reset_monetization_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig"></a>

```python
def reset_monetization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig">advanced_api_ops_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig">api_security_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig">connectors_platform_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig">integration_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig">monetization_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput">advanced_api_ops_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput">api_security_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput">connectors_platform_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput">integration_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput">monetization_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_api_ops_config`<sup>Required</sup> <a name="advanced_api_ops_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig"></a>

```python
advanced_api_ops_config: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a>

---

##### `api_security_config`<sup>Required</sup> <a name="api_security_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig"></a>

```python
api_security_config: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a>

---

##### `connectors_platform_config`<sup>Required</sup> <a name="connectors_platform_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig"></a>

```python
connectors_platform_config: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a>

---

##### `integration_config`<sup>Required</sup> <a name="integration_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig"></a>

```python
integration_config: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a>

---

##### `monetization_config`<sup>Required</sup> <a name="monetization_config" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig"></a>

```python
monetization_config: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a>

---

##### `advanced_api_ops_config_input`<sup>Optional</sup> <a name="advanced_api_ops_config_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput"></a>

```python
advanced_api_ops_config_input: GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">GoogleApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `api_security_config_input`<sup>Optional</sup> <a name="api_security_config_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput"></a>

```python
api_security_config_input: GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig">GoogleApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `connectors_platform_config_input`<sup>Optional</sup> <a name="connectors_platform_config_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput"></a>

```python
connectors_platform_config_input: GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">GoogleApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `integration_config_input`<sup>Optional</sup> <a name="integration_config_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput"></a>

```python
integration_config_input: GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig">GoogleApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `monetization_config_input`<sup>Optional</sup> <a name="monetization_config_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput"></a>

```python
monetization_config_input: GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig">GoogleApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigAddonsConfig">GoogleApigeeAddonsConfigAddonsConfig</a>

---


### GoogleApigeeAddonsConfigTimeoutsOutputReference <a name="GoogleApigeeAddonsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_addons_config

googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeAddonsConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeAddonsConfig.GoogleApigeeAddonsConfigTimeouts">GoogleApigeeAddonsConfigTimeouts</a>]

---



