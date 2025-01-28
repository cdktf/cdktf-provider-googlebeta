# `googleVertexAiMetadataStore` Submodule <a name="`googleVertexAiMetadataStore` Submodule" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiMetadataStore <a name="GoogleVertexAiMetadataStore" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store google_vertex_ai_metadata_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  encryption_spec: GoogleVertexAiMetadataStoreEncryptionSpec = None,
  id: str = None,
  name: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiMetadataStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the MetadataStore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#id GoogleVertexAiMetadataStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the MetadataStore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#project GoogleVertexAiMetadataStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the Metadata Store. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.description"></a>

- *Type:* str

Description of the MetadataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#description GoogleVertexAiMetadataStore#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#encryption_spec GoogleVertexAiMetadataStore#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#id GoogleVertexAiMetadataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.name"></a>

- *Type:* str

The name of the MetadataStore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#name GoogleVertexAiMetadataStore#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#project GoogleVertexAiMetadataStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.region"></a>

- *Type:* str

The region of the Metadata Store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#region GoogleVertexAiMetadataStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#timeouts GoogleVertexAiMetadataStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.
Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#kms_key_name GoogleVertexAiMetadataStore#kms_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#create GoogleVertexAiMetadataStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#delete GoogleVertexAiMetadataStore#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiMetadataStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiMetadataStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiMetadataStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiMetadataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiMetadataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference">GoogleVertexAiMetadataStoreEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList">GoogleVertexAiMetadataStoreStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference">GoogleVertexAiMetadataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiMetadataStoreEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference">GoogleVertexAiMetadataStoreEncryptionSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.state"></a>

```python
state: GoogleVertexAiMetadataStoreStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList">GoogleVertexAiMetadataStoreStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.timeouts"></a>

```python
timeouts: GoogleVertexAiMetadataStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference">GoogleVertexAiMetadataStoreTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiMetadataStoreEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVertexAiMetadataStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiMetadataStoreConfig <a name="GoogleVertexAiMetadataStoreConfig" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  encryption_spec: GoogleVertexAiMetadataStoreEncryptionSpec = None,
  id: str = None,
  name: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiMetadataStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.description">description</a></code> | <code>str</code> | Description of the MetadataStore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#id GoogleVertexAiMetadataStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.name">name</a></code> | <code>str</code> | The name of the MetadataStore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#project GoogleVertexAiMetadataStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.region">region</a></code> | <code>str</code> | The region of the Metadata Store. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the MetadataStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#description GoogleVertexAiMetadataStore#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiMetadataStoreEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#encryption_spec GoogleVertexAiMetadataStore#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#id GoogleVertexAiMetadataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MetadataStore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#name GoogleVertexAiMetadataStore#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#project GoogleVertexAiMetadataStore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the Metadata Store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#region GoogleVertexAiMetadataStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiMetadataStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#timeouts GoogleVertexAiMetadataStore#timeouts}

---

### GoogleVertexAiMetadataStoreEncryptionSpec <a name="GoogleVertexAiMetadataStoreEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Required. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.
Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#kms_key_name GoogleVertexAiMetadataStore#kms_key_name}

---

### GoogleVertexAiMetadataStoreState <a name="GoogleVertexAiMetadataStoreState" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState()
```


### GoogleVertexAiMetadataStoreTimeouts <a name="GoogleVertexAiMetadataStoreTimeouts" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#create GoogleVertexAiMetadataStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#delete GoogleVertexAiMetadataStore#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#create GoogleVertexAiMetadataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_metadata_store#delete GoogleVertexAiMetadataStore#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiMetadataStoreEncryptionSpecOutputReference <a name="GoogleVertexAiMetadataStoreEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiMetadataStoreEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreEncryptionSpec">GoogleVertexAiMetadataStoreEncryptionSpec</a>

---


### GoogleVertexAiMetadataStoreStateList <a name="GoogleVertexAiMetadataStoreStateList" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiMetadataStoreStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiMetadataStoreStateOutputReference <a name="GoogleVertexAiMetadataStoreStateOutputReference" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.diskUtilizationBytes">disk_utilization_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState">GoogleVertexAiMetadataStoreState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_utilization_bytes`<sup>Required</sup> <a name="disk_utilization_bytes" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.diskUtilizationBytes"></a>

```python
disk_utilization_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiMetadataStoreState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreState">GoogleVertexAiMetadataStoreState</a>

---


### GoogleVertexAiMetadataStoreTimeoutsOutputReference <a name="GoogleVertexAiMetadataStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_metadata_store

googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVertexAiMetadataStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiMetadataStore.GoogleVertexAiMetadataStoreTimeouts">GoogleVertexAiMetadataStoreTimeouts</a>]

---



