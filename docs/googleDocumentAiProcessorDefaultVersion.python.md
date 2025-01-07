# `googleDocumentAiProcessorDefaultVersion` Submodule <a name="`googleDocumentAiProcessorDefaultVersion` Submodule" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiProcessorDefaultVersion <a name="GoogleDocumentAiProcessorDefaultVersion" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version google_document_ai_processor_default_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_document_ai_processor_default_version

googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  processor: str,
  version: str,
  id: str = None,
  timeouts: GoogleDocumentAiProcessorDefaultVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.processor">processor</a></code> | <code>str</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | The version to set. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.processor"></a>

- *Type:* str

The processor to set the version on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#processor GoogleDocumentAiProcessorDefaultVersion#processor}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.version"></a>

- *Type:* str

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#version GoogleDocumentAiProcessorDefaultVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#timeouts GoogleDocumentAiProcessorDefaultVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#create GoogleDocumentAiProcessorDefaultVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#delete GoogleDocumentAiProcessorDefaultVersion#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDocumentAiProcessorDefaultVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_document_ai_processor_default_version

googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_document_ai_processor_default_version

googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_document_ai_processor_default_version

googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_document_ai_processor_default_version

googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDocumentAiProcessorDefaultVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDocumentAiProcessorDefaultVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDocumentAiProcessorDefaultVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiProcessorDefaultVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference">GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processorInput">processor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processor">processor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeouts"></a>

```python
timeouts: GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference">GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `processor_input`<sup>Optional</sup> <a name="processor_input" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processorInput"></a>

```python
processor_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDocumentAiProcessorDefaultVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processor"></a>

```python
processor: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiProcessorDefaultVersionConfig <a name="GoogleDocumentAiProcessorDefaultVersionConfig" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_document_ai_processor_default_version

googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  processor: str,
  version: str,
  id: str = None,
  timeouts: GoogleDocumentAiProcessorDefaultVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.processor">processor</a></code> | <code>str</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.version">version</a></code> | <code>str</code> | The version to set. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.processor"></a>

```python
processor: str
```

- *Type:* str

The processor to set the version on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#processor GoogleDocumentAiProcessorDefaultVersion#processor}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#version GoogleDocumentAiProcessorDefaultVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.timeouts"></a>

```python
timeouts: GoogleDocumentAiProcessorDefaultVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#timeouts GoogleDocumentAiProcessorDefaultVersion#timeouts}

---

### GoogleDocumentAiProcessorDefaultVersionTimeouts <a name="GoogleDocumentAiProcessorDefaultVersionTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_document_ai_processor_default_version

googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#create GoogleDocumentAiProcessorDefaultVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#delete GoogleDocumentAiProcessorDefaultVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#create GoogleDocumentAiProcessorDefaultVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_document_ai_processor_default_version#delete GoogleDocumentAiProcessorDefaultVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference <a name="GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_document_ai_processor_default_version

googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDocumentAiProcessorDefaultVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>]

---



