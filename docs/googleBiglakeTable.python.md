# `googleBiglakeTable` Submodule <a name="`googleBiglakeTable` Submodule" id="@cdktf/provider-google-beta.googleBiglakeTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeTable <a name="GoogleBiglakeTable" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table google_biglake_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTable(
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
  database: str = None,
  hive_options: GoogleBiglakeTableHiveOptions = None,
  id: str = None,
  timeouts: GoogleBiglakeTableTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.database">database</a></code> | <code>str</code> | The id of the parent database. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.hiveOptions">hive_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#id GoogleBiglakeTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.type">type</a></code> | <code>str</code> | The database type. Possible values: ["HIVE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.name"></a>

- *Type:* str

Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#name GoogleBiglakeTable#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.database"></a>

- *Type:* str

The id of the parent database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#database GoogleBiglakeTable#database}

---

##### `hive_options`<sup>Optional</sup> <a name="hive_options" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.hiveOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#hive_options GoogleBiglakeTable#hive_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#id GoogleBiglakeTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#timeouts GoogleBiglakeTable#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.type"></a>

- *Type:* str

The database type. Possible values: ["HIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#type GoogleBiglakeTable#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putHiveOptions">put_hive_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetHiveOptions">reset_hive_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hive_options` <a name="put_hive_options" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putHiveOptions"></a>

```python
def put_hive_options(
  parameters: typing.Mapping[str] = None,
  storage_descriptor: GoogleBiglakeTableHiveOptionsStorageDescriptor = None,
  table_type: str = None
) -> None
```

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putHiveOptions.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Stores user supplied Hive table parameters.

An object containing a
list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#parameters GoogleBiglakeTable#parameters}

---

###### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putHiveOptions.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#storage_descriptor GoogleBiglakeTable#storage_descriptor}

---

###### `table_type`<sup>Optional</sup> <a name="table_type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putHiveOptions.parameter.tableType"></a>

- *Type:* str

Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#table_type GoogleBiglakeTable#table_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#create GoogleBiglakeTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#delete GoogleBiglakeTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#update GoogleBiglakeTable#update}.

---

##### `reset_database` <a name="reset_database" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_hive_options` <a name="reset_hive_options" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetHiveOptions"></a>

```python
def reset_hive_options() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBiglakeTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBiglakeTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBiglakeTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBiglakeTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.hiveOptions">hive_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference">GoogleBiglakeTableHiveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference">GoogleBiglakeTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.hiveOptionsInput">hive_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `hive_options`<sup>Required</sup> <a name="hive_options" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.hiveOptions"></a>

```python
hive_options: GoogleBiglakeTableHiveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference">GoogleBiglakeTableHiveOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.timeouts"></a>

```python
timeouts: GoogleBiglakeTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference">GoogleBiglakeTableTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `hive_options_input`<sup>Optional</sup> <a name="hive_options_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.hiveOptionsInput"></a>

```python
hive_options_input: GoogleBiglakeTableHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBiglakeTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeTableConfig <a name="GoogleBiglakeTableConfig" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  database: str = None,
  hive_options: GoogleBiglakeTableHiveOptions = None,
  id: str = None,
  timeouts: GoogleBiglakeTableTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.name">name</a></code> | <code>str</code> | Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.database">database</a></code> | <code>str</code> | The id of the parent database. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.hiveOptions">hive_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#id GoogleBiglakeTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.type">type</a></code> | <code>str</code> | The database type. Possible values: ["HIVE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#name GoogleBiglakeTable#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The id of the parent database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#database GoogleBiglakeTable#database}

---

##### `hive_options`<sup>Optional</sup> <a name="hive_options" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.hiveOptions"></a>

```python
hive_options: GoogleBiglakeTableHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#hive_options GoogleBiglakeTable#hive_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#id GoogleBiglakeTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.timeouts"></a>

```python
timeouts: GoogleBiglakeTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#timeouts GoogleBiglakeTable#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The database type. Possible values: ["HIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#type GoogleBiglakeTable#type}

---

### GoogleBiglakeTableHiveOptions <a name="GoogleBiglakeTableHiveOptions" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTableHiveOptions(
  parameters: typing.Mapping[str] = None,
  storage_descriptor: GoogleBiglakeTableHiveOptionsStorageDescriptor = None,
  table_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Stores user supplied Hive table parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.tableType">table_type</a></code> | <code>str</code> | Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Stores user supplied Hive table parameters.

An object containing a
list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#parameters GoogleBiglakeTable#parameters}

---

##### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.storageDescriptor"></a>

```python
storage_descriptor: GoogleBiglakeTableHiveOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#storage_descriptor GoogleBiglakeTable#storage_descriptor}

---

##### `table_type`<sup>Optional</sup> <a name="table_type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#table_type GoogleBiglakeTable#table_type}

---

### GoogleBiglakeTableHiveOptionsStorageDescriptor <a name="GoogleBiglakeTableHiveOptionsStorageDescriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor(
  input_format: str = None,
  location_uri: str = None,
  output_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.inputFormat">input_format</a></code> | <code>str</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.locationUri">location_uri</a></code> | <code>str</code> | Cloud Storage folder URI where the table data is stored, starting with "gs://". |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.outputFormat">output_format</a></code> | <code>str</code> | The fully qualified Java class name of the output format. |

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#input_format GoogleBiglakeTable#input_format}

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

Cloud Storage folder URI where the table data is stored, starting with "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#location_uri GoogleBiglakeTable#location_uri}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#output_format GoogleBiglakeTable#output_format}

---

### GoogleBiglakeTableTimeouts <a name="GoogleBiglakeTableTimeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#create GoogleBiglakeTable#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#delete GoogleBiglakeTable#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#update GoogleBiglakeTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#create GoogleBiglakeTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#delete GoogleBiglakeTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#update GoogleBiglakeTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeTableHiveOptionsOutputReference <a name="GoogleBiglakeTableHiveOptionsOutputReference" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.putStorageDescriptor">put_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetStorageDescriptor">reset_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetTableType">reset_table_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_storage_descriptor` <a name="put_storage_descriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.putStorageDescriptor"></a>

```python
def put_storage_descriptor(
  input_format: str = None,
  location_uri: str = None,
  output_format: str = None
) -> None
```

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.putStorageDescriptor.parameter.inputFormat"></a>

- *Type:* str

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#input_format GoogleBiglakeTable#input_format}

---

###### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.putStorageDescriptor.parameter.locationUri"></a>

- *Type:* str

Cloud Storage folder URI where the table data is stored, starting with "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#location_uri GoogleBiglakeTable#location_uri}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.putStorageDescriptor.parameter.outputFormat"></a>

- *Type:* str

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_biglake_table#output_format GoogleBiglakeTable#output_format}

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_storage_descriptor` <a name="reset_storage_descriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetStorageDescriptor"></a>

```python
def reset_storage_descriptor() -> None
```

##### `reset_table_type` <a name="reset_table_type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetTableType"></a>

```python
def reset_table_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference">GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.storageDescriptorInput">storage_descriptor_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.tableTypeInput">table_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.tableType">table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.storageDescriptor"></a>

```python
storage_descriptor: GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference">GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `storage_descriptor_input`<sup>Optional</sup> <a name="storage_descriptor_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.storageDescriptorInput"></a>

```python
storage_descriptor_input: GoogleBiglakeTableHiveOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a>

---

##### `table_type_input`<sup>Optional</sup> <a name="table_type_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.tableTypeInput"></a>

```python
table_type_input: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `table_type`<sup>Required</sup> <a name="table_type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeTableHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a>

---


### GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference <a name="GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetLocationUri">reset_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_format` <a name="reset_input_format" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_location_uri` <a name="reset_location_uri" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetLocationUri"></a>

```python
def reset_location_uri() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeTableHiveOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a>

---


### GoogleBiglakeTableTimeoutsOutputReference <a name="GoogleBiglakeTableTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_biglake_table

googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBiglakeTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>]

---



