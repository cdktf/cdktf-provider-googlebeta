# `googleBigtableTable` Submodule <a name="`googleBigtableTable` Submodule" id="@cdktf/provider-google-beta.googleBigtableTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableTable <a name="GoogleBigtableTable" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table google_bigtable_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  name: str,
  automated_backup_policy: GoogleBigtableTableAutomatedBackupPolicy = None,
  change_stream_retention: str = None,
  column_family: typing.Union[IResolvable, typing.List[GoogleBigtableTableColumnFamily]] = None,
  deletion_protection: str = None,
  id: str = None,
  project: str = None,
  split_keys: typing.List[str] = None,
  timeouts: GoogleBigtableTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.automatedBackupPolicy">automated_backup_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.changeStreamRetention">change_stream_retention</a></code> | <code>str</code> | Duration to retain change stream data for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.columnFamily">column_family</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]</code> | column_family block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>str</code> | A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.splitKeys">split_keys</a></code> | <code>typing.List[str]</code> | A list of predefined keys to split the table on. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.instanceName"></a>

- *Type:* str

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#instance_name GoogleBigtableTable#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.name"></a>

- *Type:* str

The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#name GoogleBigtableTable#name}

---

##### `automated_backup_policy`<sup>Optional</sup> <a name="automated_backup_policy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.automatedBackupPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#automated_backup_policy GoogleBigtableTable#automated_backup_policy}

---

##### `change_stream_retention`<sup>Optional</sup> <a name="change_stream_retention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.changeStreamRetention"></a>

- *Type:* str

Duration to retain change stream data for the table.

Set to 0 to disable. Must be between 1 and 7 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#change_stream_retention GoogleBigtableTable#change_stream_retention}

---

##### `column_family`<sup>Optional</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.columnFamily"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#column_family GoogleBigtableTable#column_family}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.deletionProtection"></a>

- *Type:* str

A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#deletion_protection GoogleBigtableTable#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#project GoogleBigtableTable#project}

---

##### `split_keys`<sup>Optional</sup> <a name="split_keys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.splitKeys"></a>

- *Type:* typing.List[str]

A list of predefined keys to split the table on.

!> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#split_keys GoogleBigtableTable#split_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#timeouts GoogleBigtableTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy">put_automated_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily">put_column_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetAutomatedBackupPolicy">reset_automated_backup_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetChangeStreamRetention">reset_change_stream_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetColumnFamily">reset_column_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetSplitKeys">reset_split_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_automated_backup_policy` <a name="put_automated_backup_policy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy"></a>

```python
def put_automated_backup_policy(
  frequency: str = None,
  retention_period: str = None
) -> None
```

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy.parameter.frequency"></a>

- *Type:* str

How frequently automated backups should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#frequency GoogleBigtableTable#frequency}

---

###### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putAutomatedBackupPolicy.parameter.retentionPeriod"></a>

- *Type:* str

How long the automated backups should be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#retention_period GoogleBigtableTable#retention_period}

---

##### `put_column_family` <a name="put_column_family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily"></a>

```python
def put_column_family(
  value: typing.Union[IResolvable, typing.List[GoogleBigtableTableColumnFamily]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putColumnFamily.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#create GoogleBigtableTable#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#update GoogleBigtableTable#update}.

---

##### `reset_automated_backup_policy` <a name="reset_automated_backup_policy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetAutomatedBackupPolicy"></a>

```python
def reset_automated_backup_policy() -> None
```

##### `reset_change_stream_retention` <a name="reset_change_stream_retention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetChangeStreamRetention"></a>

```python
def reset_change_stream_retention() -> None
```

##### `reset_column_family` <a name="reset_column_family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetColumnFamily"></a>

```python
def reset_column_family() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_split_keys` <a name="reset_split_keys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetSplitKeys"></a>

```python
def reset_split_keys() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigtableTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigtableTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigtableTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigtableTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicy">automated_backup_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference">GoogleBigtableTableAutomatedBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamily">column_family</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList">GoogleBigtableTableColumnFamilyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference">GoogleBigtableTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicyInput">automated_backup_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetentionInput">change_stream_retention_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamilyInput">column_family_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeysInput">split_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetention">change_stream_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtection">deletion_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeys">split_keys</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automated_backup_policy`<sup>Required</sup> <a name="automated_backup_policy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicy"></a>

```python
automated_backup_policy: GoogleBigtableTableAutomatedBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference">GoogleBigtableTableAutomatedBackupPolicyOutputReference</a>

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamily"></a>

```python
column_family: GoogleBigtableTableColumnFamilyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList">GoogleBigtableTableColumnFamilyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeouts"></a>

```python
timeouts: GoogleBigtableTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference">GoogleBigtableTableTimeoutsOutputReference</a>

---

##### `automated_backup_policy_input`<sup>Optional</sup> <a name="automated_backup_policy_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.automatedBackupPolicyInput"></a>

```python
automated_backup_policy_input: GoogleBigtableTableAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

---

##### `change_stream_retention_input`<sup>Optional</sup> <a name="change_stream_retention_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetentionInput"></a>

```python
change_stream_retention_input: str
```

- *Type:* str

---

##### `column_family_input`<sup>Optional</sup> <a name="column_family_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.columnFamilyInput"></a>

```python
column_family_input: typing.Union[IResolvable, typing.List[GoogleBigtableTableColumnFamily]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtectionInput"></a>

```python
deletion_protection_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `split_keys_input`<sup>Optional</sup> <a name="split_keys_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeysInput"></a>

```python
split_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigtableTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>]

---

##### `change_stream_retention`<sup>Required</sup> <a name="change_stream_retention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.changeStreamRetention"></a>

```python
change_stream_retention: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.deletionProtection"></a>

```python
deletion_protection: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `split_keys`<sup>Required</sup> <a name="split_keys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.splitKeys"></a>

```python
split_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableTableAutomatedBackupPolicy <a name="GoogleBigtableTableAutomatedBackupPolicy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy(
  frequency: str = None,
  retention_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.frequency">frequency</a></code> | <code>str</code> | How frequently automated backups should occur. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.retentionPeriod">retention_period</a></code> | <code>str</code> | How long the automated backups should be retained. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

How frequently automated backups should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#frequency GoogleBigtableTable#frequency}

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

How long the automated backups should be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#retention_period GoogleBigtableTable#retention_period}

---

### GoogleBigtableTableColumnFamily <a name="GoogleBigtableTableColumnFamily" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTableColumnFamily(
  family: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.family">family</a></code> | <code>str</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.type">type</a></code> | <code>str</code> | The type of the column family. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.family"></a>

```python
family: str
```

- *Type:* str

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#family GoogleBigtableTable#family}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#type GoogleBigtableTable#type}

---

### GoogleBigtableTableConfig <a name="GoogleBigtableTableConfig" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  name: str,
  automated_backup_policy: GoogleBigtableTableAutomatedBackupPolicy = None,
  change_stream_retention: str = None,
  column_family: typing.Union[IResolvable, typing.List[GoogleBigtableTableColumnFamily]] = None,
  deletion_protection: str = None,
  id: str = None,
  project: str = None,
  split_keys: typing.List[str] = None,
  timeouts: GoogleBigtableTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.instanceName">instance_name</a></code> | <code>str</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.name">name</a></code> | <code>str</code> | The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.automatedBackupPolicy">automated_backup_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.changeStreamRetention">change_stream_retention</a></code> | <code>str</code> | Duration to retain change stream data for the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.columnFamily">column_family</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]</code> | column_family block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.deletionProtection">deletion_protection</a></code> | <code>str</code> | A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.splitKeys">split_keys</a></code> | <code>typing.List[str]</code> | A list of predefined keys to split the table on. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#instance_name GoogleBigtableTable#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#name GoogleBigtableTable#name}

---

##### `automated_backup_policy`<sup>Optional</sup> <a name="automated_backup_policy" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.automatedBackupPolicy"></a>

```python
automated_backup_policy: GoogleBigtableTableAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#automated_backup_policy GoogleBigtableTable#automated_backup_policy}

---

##### `change_stream_retention`<sup>Optional</sup> <a name="change_stream_retention" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.changeStreamRetention"></a>

```python
change_stream_retention: str
```

- *Type:* str

Duration to retain change stream data for the table.

Set to 0 to disable. Must be between 1 and 7 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#change_stream_retention GoogleBigtableTable#change_stream_retention}

---

##### `column_family`<sup>Optional</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.columnFamily"></a>

```python
column_family: typing.Union[IResolvable, typing.List[GoogleBigtableTableColumnFamily]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]

column_family block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#column_family GoogleBigtableTable#column_family}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.deletionProtection"></a>

```python
deletion_protection: str
```

- *Type:* str

A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#deletion_protection GoogleBigtableTable#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#id GoogleBigtableTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#project GoogleBigtableTable#project}

---

##### `split_keys`<sup>Optional</sup> <a name="split_keys" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.splitKeys"></a>

```python
split_keys: typing.List[str]
```

- *Type:* typing.List[str]

A list of predefined keys to split the table on.

!> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#split_keys GoogleBigtableTable#split_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableConfig.property.timeouts"></a>

```python
timeouts: GoogleBigtableTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#timeouts GoogleBigtableTable#timeouts}

---

### GoogleBigtableTableTimeouts <a name="GoogleBigtableTableTimeouts" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTableTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#create GoogleBigtableTable#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#update GoogleBigtableTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#create GoogleBigtableTable#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigtable_table#update GoogleBigtableTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableTableAutomatedBackupPolicyOutputReference <a name="GoogleBigtableTableAutomatedBackupPolicyOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriodInput">retention_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriod">retention_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriodInput"></a>

```python
retention_period_input: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigtableTableAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableAutomatedBackupPolicy">GoogleBigtableTableAutomatedBackupPolicy</a>

---


### GoogleBigtableTableColumnFamilyList <a name="GoogleBigtableTableColumnFamilyList" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTableColumnFamilyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigtableTableColumnFamilyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigtableTableColumnFamily]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]]

---


### GoogleBigtableTableColumnFamilyOutputReference <a name="GoogleBigtableTableColumnFamilyOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamilyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigtableTableColumnFamily]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableColumnFamily">GoogleBigtableTableColumnFamily</a>]

---


### GoogleBigtableTableTimeoutsOutputReference <a name="GoogleBigtableTableTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_table

googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigtableTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableTable.GoogleBigtableTableTimeouts">GoogleBigtableTableTimeouts</a>]

---



