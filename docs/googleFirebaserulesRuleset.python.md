# `googleFirebaserulesRuleset` Submodule <a name="`googleFirebaserulesRuleset` Submodule" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaserulesRuleset <a name="GoogleFirebaserulesRuleset" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset google_firebaserules_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRuleset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source: GoogleFirebaserulesRulesetSource,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaserulesRulesetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource">GoogleFirebaserulesRulesetSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#id GoogleFirebaserulesRuleset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts">GoogleFirebaserulesRulesetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource">GoogleFirebaserulesRulesetSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#source GoogleFirebaserulesRuleset#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#id GoogleFirebaserulesRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#project GoogleFirebaserulesRuleset#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts">GoogleFirebaserulesRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#timeouts GoogleFirebaserulesRuleset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.putSource"></a>

```python
def put_source(
  files: typing.Union[IResolvable, typing.List[GoogleFirebaserulesRulesetSourceFiles]],
  language: str = None
) -> None
```

###### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.putSource.parameter.files"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#files GoogleFirebaserulesRuleset#files}

---

###### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.putSource.parameter.language"></a>

- *Type:* str

`Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#language GoogleFirebaserulesRuleset#language}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#create GoogleFirebaserulesRuleset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#delete GoogleFirebaserulesRuleset#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleFirebaserulesRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleFirebaserulesRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaserulesRuleset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaserulesRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaserulesRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList">GoogleFirebaserulesRulesetMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference">GoogleFirebaserulesRulesetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference">GoogleFirebaserulesRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource">GoogleFirebaserulesRulesetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts">GoogleFirebaserulesRulesetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.metadata"></a>

```python
metadata: GoogleFirebaserulesRulesetMetadataList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList">GoogleFirebaserulesRulesetMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.source"></a>

```python
source: GoogleFirebaserulesRulesetSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference">GoogleFirebaserulesRulesetSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.timeouts"></a>

```python
timeouts: GoogleFirebaserulesRulesetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference">GoogleFirebaserulesRulesetTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.sourceInput"></a>

```python
source_input: GoogleFirebaserulesRulesetSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource">GoogleFirebaserulesRulesetSource</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleFirebaserulesRulesetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts">GoogleFirebaserulesRulesetTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRuleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaserulesRulesetConfig <a name="GoogleFirebaserulesRulesetConfig" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source: GoogleFirebaserulesRulesetSource,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaserulesRulesetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource">GoogleFirebaserulesRulesetSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#id GoogleFirebaserulesRuleset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts">GoogleFirebaserulesRulesetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.source"></a>

```python
source: GoogleFirebaserulesRulesetSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource">GoogleFirebaserulesRulesetSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#source GoogleFirebaserulesRuleset#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#id GoogleFirebaserulesRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#project GoogleFirebaserulesRuleset#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaserulesRulesetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts">GoogleFirebaserulesRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#timeouts GoogleFirebaserulesRuleset#timeouts}

---

### GoogleFirebaserulesRulesetMetadata <a name="GoogleFirebaserulesRulesetMetadata" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadata()
```


### GoogleFirebaserulesRulesetSource <a name="GoogleFirebaserulesRulesetSource" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource(
  files: typing.Union[IResolvable, typing.List[GoogleFirebaserulesRulesetSourceFiles]],
  language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource.property.files">files</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]]</code> | files block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource.property.language">language</a></code> | <code>str</code> | `Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource.property.files"></a>

```python
files: typing.Union[IResolvable, typing.List[GoogleFirebaserulesRulesetSourceFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#files GoogleFirebaserulesRuleset#files}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource.property.language"></a>

```python
language: str
```

- *Type:* str

`Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#language GoogleFirebaserulesRuleset#language}

---

### GoogleFirebaserulesRulesetSourceFiles <a name="GoogleFirebaserulesRulesetSourceFiles" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles(
  content: str,
  name: str,
  fingerprint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles.property.content">content</a></code> | <code>str</code> | Textual Content. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles.property.name">name</a></code> | <code>str</code> | File name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles.property.fingerprint">fingerprint</a></code> | <code>str</code> | Fingerprint (e.g. github sha) associated with the `File`. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles.property.content"></a>

```python
content: str
```

- *Type:* str

Textual Content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#content GoogleFirebaserulesRuleset#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles.property.name"></a>

```python
name: str
```

- *Type:* str

File name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#name GoogleFirebaserulesRuleset#name}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

Fingerprint (e.g. github sha) associated with the `File`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#fingerprint GoogleFirebaserulesRuleset#fingerprint}

---

### GoogleFirebaserulesRulesetTimeouts <a name="GoogleFirebaserulesRulesetTimeouts" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#create GoogleFirebaserulesRuleset#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#delete GoogleFirebaserulesRuleset#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#create GoogleFirebaserulesRuleset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebaserules_ruleset#delete GoogleFirebaserulesRuleset#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaserulesRulesetMetadataList <a name="GoogleFirebaserulesRulesetMetadataList" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaserulesRulesetMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaserulesRulesetMetadataOutputReference <a name="GoogleFirebaserulesRulesetMetadataOutputReference" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadata">GoogleFirebaserulesRulesetMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaserulesRulesetMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetMetadata">GoogleFirebaserulesRulesetMetadata</a>

---


### GoogleFirebaserulesRulesetSourceFilesList <a name="GoogleFirebaserulesRulesetSourceFilesList" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaserulesRulesetSourceFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleFirebaserulesRulesetSourceFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]]

---


### GoogleFirebaserulesRulesetSourceFilesOutputReference <a name="GoogleFirebaserulesRulesetSourceFilesOutputReference" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.resetFingerprint">reset_fingerprint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fingerprint` <a name="reset_fingerprint" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.resetFingerprint"></a>

```python
def reset_fingerprint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFirebaserulesRulesetSourceFiles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]

---


### GoogleFirebaserulesRulesetSourceOutputReference <a name="GoogleFirebaserulesRulesetSourceOutputReference" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.putFiles">put_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.resetLanguage">reset_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_files` <a name="put_files" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.putFiles"></a>

```python
def put_files(
  value: typing.Union[IResolvable, typing.List[GoogleFirebaserulesRulesetSourceFiles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.putFiles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]]

---

##### `reset_language` <a name="reset_language" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.resetLanguage"></a>

```python
def reset_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList">GoogleFirebaserulesRulesetSourceFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.filesInput">files_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource">GoogleFirebaserulesRulesetSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.files"></a>

```python
files: GoogleFirebaserulesRulesetSourceFilesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFilesList">GoogleFirebaserulesRulesetSourceFilesList</a>

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.filesInput"></a>

```python
files_input: typing.Union[IResolvable, typing.List[GoogleFirebaserulesRulesetSourceFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceFiles">GoogleFirebaserulesRulesetSourceFiles</a>]]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaserulesRulesetSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetSource">GoogleFirebaserulesRulesetSource</a>

---


### GoogleFirebaserulesRulesetTimeoutsOutputReference <a name="GoogleFirebaserulesRulesetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebaserules_ruleset

googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts">GoogleFirebaserulesRulesetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFirebaserulesRulesetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaserulesRuleset.GoogleFirebaserulesRulesetTimeouts">GoogleFirebaserulesRulesetTimeouts</a>]

---



