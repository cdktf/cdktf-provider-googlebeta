# `googleDataplexEntry` Submodule <a name="`googleDataplexEntry` Submodule" id="@cdktf/provider-google-beta.googleDataplexEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexEntry <a name="GoogleDataplexEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry google_dataplex_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entry_type: str,
  aspects: typing.Union[IResolvable, typing.List[GoogleDataplexEntryAspects]] = None,
  entry_group_id: str = None,
  entry_id: str = None,
  entry_source: GoogleDataplexEntryEntrySource = None,
  fully_qualified_name: str = None,
  id: str = None,
  location: str = None,
  parent_entry: str = None,
  project: str = None,
  timeouts: GoogleDataplexEntryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryType">entry_type</a></code> | <code>str</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.aspects">aspects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]</code> | aspects block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryGroupId">entry_group_id</a></code> | <code>str</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryId">entry_id</a></code> | <code>str</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entrySource">entry_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.parentEntry">parent_entry</a></code> | <code>str</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entry_type`<sup>Required</sup> <a name="entry_type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryType"></a>

- *Type:* str

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#entry_type GoogleDataplexEntry#entry_type}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.aspects"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#aspects GoogleDataplexEntry#aspects}

---

##### `entry_group_id`<sup>Optional</sup> <a name="entry_group_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryGroupId"></a>

- *Type:* str

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#entry_group_id GoogleDataplexEntry#entry_group_id}

---

##### `entry_id`<sup>Optional</sup> <a name="entry_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryId"></a>

- *Type:* str

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#entry_id GoogleDataplexEntry#entry_id}

---

##### `entry_source`<sup>Optional</sup> <a name="entry_source" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entrySource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#entry_source GoogleDataplexEntry#entry_source}

---

##### `fully_qualified_name`<sup>Optional</sup> <a name="fully_qualified_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.fullyQualifiedName"></a>

- *Type:* str

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#fully_qualified_name GoogleDataplexEntry#fully_qualified_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.location"></a>

- *Type:* str

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#location GoogleDataplexEntry#location}

---

##### `parent_entry`<sup>Optional</sup> <a name="parent_entry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.parentEntry"></a>

- *Type:* str

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#parent_entry GoogleDataplexEntry#parent_entry}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#timeouts GoogleDataplexEntry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putAspects">put_aspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource">put_entry_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetAspects">reset_aspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryGroupId">reset_entry_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryId">reset_entry_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntrySource">reset_entry_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetFullyQualifiedName">reset_fully_qualified_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetParentEntry">reset_parent_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aspects` <a name="put_aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putAspects"></a>

```python
def put_aspects(
  value: typing.Union[IResolvable, typing.List[GoogleDataplexEntryAspects]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putAspects.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]

---

##### `put_entry_source` <a name="put_entry_source" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource"></a>

```python
def put_entry_source(
  ancestors: typing.Union[IResolvable, typing.List[GoogleDataplexEntryEntrySourceAncestors]] = None,
  create_time: str = None,
  description: str = None,
  display_name: str = None,
  labels: typing.Mapping[str] = None,
  platform: str = None,
  resource: str = None,
  system_attribute: str = None,
  update_time: str = None
) -> None
```

###### `ancestors`<sup>Optional</sup> <a name="ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.ancestors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]]

ancestors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#ancestors GoogleDataplexEntry#ancestors}

---

###### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.createTime"></a>

- *Type:* str

The time when the resource was created in the source system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#create_time GoogleDataplexEntry#create_time}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.description"></a>

- *Type:* str

A description of the data resource. Maximum length is 2,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#description GoogleDataplexEntry#description}

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.displayName"></a>

- *Type:* str

A user-friendly display name. Maximum length is 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#display_name GoogleDataplexEntry#display_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

The maximum size of keys and values is 128 characters each.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#labels GoogleDataplexEntry#labels}

---

###### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.platform"></a>

- *Type:* str

The platform containing the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#platform GoogleDataplexEntry#platform}

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.resource"></a>

- *Type:* str

The name of the resource in the source system. Maximum length is 4,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#resource GoogleDataplexEntry#resource}

---

###### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.systemAttribute"></a>

- *Type:* str

The name of the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#system GoogleDataplexEntry#system}

---

###### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.updateTime"></a>

- *Type:* str

The time when the resource was last updated in the source system.

If the entry exists in the system and its EntrySource has updateTime populated,
further updates to the EntrySource of the entry must provide incremental updates to its updateTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#update_time GoogleDataplexEntry#update_time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#create GoogleDataplexEntry#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#delete GoogleDataplexEntry#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#update GoogleDataplexEntry#update}.

---

##### `reset_aspects` <a name="reset_aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetAspects"></a>

```python
def reset_aspects() -> None
```

##### `reset_entry_group_id` <a name="reset_entry_group_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryGroupId"></a>

```python
def reset_entry_group_id() -> None
```

##### `reset_entry_id` <a name="reset_entry_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryId"></a>

```python
def reset_entry_id() -> None
```

##### `reset_entry_source` <a name="reset_entry_source" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntrySource"></a>

```python
def reset_entry_source() -> None
```

##### `reset_fully_qualified_name` <a name="reset_fully_qualified_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetFullyQualifiedName"></a>

```python
def reset_fully_qualified_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_parent_entry` <a name="reset_parent_entry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetParentEntry"></a>

```python
def reset_parent_entry() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataplexEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataplexEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataplexEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataplexEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspects">aspects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList">GoogleDataplexEntryAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySource">entry_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference">GoogleDataplexEntryEntrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference">GoogleDataplexEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspectsInput">aspects_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupIdInput">entry_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryIdInput">entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySourceInput">entry_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryTypeInput">entry_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedNameInput">fully_qualified_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntryInput">parent_entry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupId">entry_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryId">entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryType">entry_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntry">parent_entry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aspects`<sup>Required</sup> <a name="aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspects"></a>

```python
aspects: GoogleDataplexEntryAspectsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList">GoogleDataplexEntryAspectsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `entry_source`<sup>Required</sup> <a name="entry_source" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySource"></a>

```python
entry_source: GoogleDataplexEntryEntrySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference">GoogleDataplexEntryEntrySourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeouts"></a>

```python
timeouts: GoogleDataplexEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference">GoogleDataplexEntryTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `aspects_input`<sup>Optional</sup> <a name="aspects_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspectsInput"></a>

```python
aspects_input: typing.Union[IResolvable, typing.List[GoogleDataplexEntryAspects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]

---

##### `entry_group_id_input`<sup>Optional</sup> <a name="entry_group_id_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupIdInput"></a>

```python
entry_group_id_input: str
```

- *Type:* str

---

##### `entry_id_input`<sup>Optional</sup> <a name="entry_id_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryIdInput"></a>

```python
entry_id_input: str
```

- *Type:* str

---

##### `entry_source_input`<sup>Optional</sup> <a name="entry_source_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySourceInput"></a>

```python
entry_source_input: GoogleDataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

---

##### `entry_type_input`<sup>Optional</sup> <a name="entry_type_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryTypeInput"></a>

```python
entry_type_input: str
```

- *Type:* str

---

##### `fully_qualified_name_input`<sup>Optional</sup> <a name="fully_qualified_name_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedNameInput"></a>

```python
fully_qualified_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_entry_input`<sup>Optional</sup> <a name="parent_entry_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntryInput"></a>

```python
parent_entry_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataplexEntryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>]

---

##### `entry_group_id`<sup>Required</sup> <a name="entry_group_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupId"></a>

```python
entry_group_id: str
```

- *Type:* str

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

---

##### `entry_type`<sup>Required</sup> <a name="entry_type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryType"></a>

```python
entry_type: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent_entry`<sup>Required</sup> <a name="parent_entry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntry"></a>

```python
parent_entry: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexEntryAspects <a name="GoogleDataplexEntryAspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryAspects(
  aspect: GoogleDataplexEntryAspectsAspect,
  aspect_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspect">aspect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspectKey">aspect_key</a></code> | <code>str</code> | Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:. |

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspect"></a>

```python
aspect: GoogleDataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#aspect GoogleDataplexEntry#aspect}

---

##### `aspect_key`<sup>Required</sup> <a name="aspect_key" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspectKey"></a>

```python
aspect_key: str
```

- *Type:* str

Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:.

If the aspect is attached directly to the entry: {project_number}.{locationId}.{aspectTypeId}
If the aspect is attached to an entry's path: {project_number}.{locationId}.{aspectTypeId}@{path}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#aspect_key GoogleDataplexEntry#aspect_key}

---

### GoogleDataplexEntryAspectsAspect <a name="GoogleDataplexEntryAspectsAspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryAspectsAspect(
  data: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.property.data">data</a></code> | <code>str</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.property.data"></a>

```python
data: str
```

- *Type:* str

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#data GoogleDataplexEntry#data}

---

### GoogleDataplexEntryConfig <a name="GoogleDataplexEntryConfig" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entry_type: str,
  aspects: typing.Union[IResolvable, typing.List[GoogleDataplexEntryAspects]] = None,
  entry_group_id: str = None,
  entry_id: str = None,
  entry_source: GoogleDataplexEntryEntrySource = None,
  fully_qualified_name: str = None,
  id: str = None,
  location: str = None,
  parent_entry: str = None,
  project: str = None,
  timeouts: GoogleDataplexEntryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryType">entry_type</a></code> | <code>str</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.aspects">aspects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]</code> | aspects block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryGroupId">entry_group_id</a></code> | <code>str</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryId">entry_id</a></code> | <code>str</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entrySource">entry_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.location">location</a></code> | <code>str</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.parentEntry">parent_entry</a></code> | <code>str</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entry_type`<sup>Required</sup> <a name="entry_type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryType"></a>

```python
entry_type: str
```

- *Type:* str

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#entry_type GoogleDataplexEntry#entry_type}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.aspects"></a>

```python
aspects: typing.Union[IResolvable, typing.List[GoogleDataplexEntryAspects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#aspects GoogleDataplexEntry#aspects}

---

##### `entry_group_id`<sup>Optional</sup> <a name="entry_group_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryGroupId"></a>

```python
entry_group_id: str
```

- *Type:* str

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#entry_group_id GoogleDataplexEntry#entry_group_id}

---

##### `entry_id`<sup>Optional</sup> <a name="entry_id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#entry_id GoogleDataplexEntry#entry_id}

---

##### `entry_source`<sup>Optional</sup> <a name="entry_source" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entrySource"></a>

```python
entry_source: GoogleDataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#entry_source GoogleDataplexEntry#entry_source}

---

##### `fully_qualified_name`<sup>Optional</sup> <a name="fully_qualified_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#fully_qualified_name GoogleDataplexEntry#fully_qualified_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#location GoogleDataplexEntry#location}

---

##### `parent_entry`<sup>Optional</sup> <a name="parent_entry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.parentEntry"></a>

```python
parent_entry: str
```

- *Type:* str

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#parent_entry GoogleDataplexEntry#parent_entry}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.timeouts"></a>

```python
timeouts: GoogleDataplexEntryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#timeouts GoogleDataplexEntry#timeouts}

---

### GoogleDataplexEntryEntrySource <a name="GoogleDataplexEntryEntrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryEntrySource(
  ancestors: typing.Union[IResolvable, typing.List[GoogleDataplexEntryEntrySourceAncestors]] = None,
  create_time: str = None,
  description: str = None,
  display_name: str = None,
  labels: typing.Mapping[str] = None,
  platform: str = None,
  resource: str = None,
  system_attribute: str = None,
  update_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.ancestors">ancestors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]]</code> | ancestors block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.createTime">create_time</a></code> | <code>str</code> | The time when the resource was created in the source system. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.description">description</a></code> | <code>str</code> | A description of the data resource. Maximum length is 2,000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.displayName">display_name</a></code> | <code>str</code> | A user-friendly display name. Maximum length is 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.platform">platform</a></code> | <code>str</code> | The platform containing the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.resource">resource</a></code> | <code>str</code> | The name of the resource in the source system. Maximum length is 4,000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.systemAttribute">system_attribute</a></code> | <code>str</code> | The name of the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.updateTime">update_time</a></code> | <code>str</code> | The time when the resource was last updated in the source system. |

---

##### `ancestors`<sup>Optional</sup> <a name="ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.ancestors"></a>

```python
ancestors: typing.Union[IResolvable, typing.List[GoogleDataplexEntryEntrySourceAncestors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]]

ancestors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#ancestors GoogleDataplexEntry#ancestors}

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

The time when the resource was created in the source system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#create_time GoogleDataplexEntry#create_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the data resource. Maximum length is 2,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#description GoogleDataplexEntry#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-friendly display name. Maximum length is 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#display_name GoogleDataplexEntry#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

The maximum size of keys and values is 128 characters each.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#labels GoogleDataplexEntry#labels}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.platform"></a>

```python
platform: str
```

- *Type:* str

The platform containing the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#platform GoogleDataplexEntry#platform}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.resource"></a>

```python
resource: str
```

- *Type:* str

The name of the resource in the source system. Maximum length is 4,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#resource GoogleDataplexEntry#resource}

---

##### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

The name of the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#system GoogleDataplexEntry#system}

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

The time when the resource was last updated in the source system.

If the entry exists in the system and its EntrySource has updateTime populated,
further updates to the EntrySource of the entry must provide incremental updates to its updateTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#update_time GoogleDataplexEntry#update_time}

---

### GoogleDataplexEntryEntrySourceAncestors <a name="GoogleDataplexEntryEntrySourceAncestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.name">name</a></code> | <code>str</code> | The name of the ancestor resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.type">type</a></code> | <code>str</code> | The type of the ancestor resource. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#name GoogleDataplexEntry#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#type GoogleDataplexEntry#type}

---

### GoogleDataplexEntryTimeouts <a name="GoogleDataplexEntryTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#create GoogleDataplexEntry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#delete GoogleDataplexEntry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#update GoogleDataplexEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#create GoogleDataplexEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#delete GoogleDataplexEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#update GoogleDataplexEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexEntryAspectsAspectOutputReference <a name="GoogleDataplexEntryAspectsAspectOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.aspectType">aspect_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect_type`<sup>Required</sup> <a name="aspect_type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.aspectType"></a>

```python
aspect_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

---


### GoogleDataplexEntryAspectsList <a name="GoogleDataplexEntryAspectsList" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryAspectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexEntryAspectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDataplexEntryAspects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]]

---


### GoogleDataplexEntryAspectsOutputReference <a name="GoogleDataplexEntryAspectsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.putAspect">put_aspect</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aspect` <a name="put_aspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.putAspect"></a>

```python
def put_aspect(
  data: str
) -> None
```

###### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.putAspect.parameter.data"></a>

- *Type:* str

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataplex_entry#data GoogleDataplexEntry#data}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspect">aspect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference">GoogleDataplexEntryAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectInput">aspect_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKeyInput">aspect_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKey">aspect_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspect"></a>

```python
aspect: GoogleDataplexEntryAspectsAspectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference">GoogleDataplexEntryAspectsAspectOutputReference</a>

---

##### `aspect_input`<sup>Optional</sup> <a name="aspect_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectInput"></a>

```python
aspect_input: GoogleDataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

---

##### `aspect_key_input`<sup>Optional</sup> <a name="aspect_key_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKeyInput"></a>

```python
aspect_key_input: str
```

- *Type:* str

---

##### `aspect_key`<sup>Required</sup> <a name="aspect_key" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKey"></a>

```python
aspect_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataplexEntryAspects]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>]

---


### GoogleDataplexEntryEntrySourceAncestorsList <a name="GoogleDataplexEntryEntrySourceAncestorsList" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexEntryEntrySourceAncestorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDataplexEntryEntrySourceAncestors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]]

---


### GoogleDataplexEntryEntrySourceAncestorsOutputReference <a name="GoogleDataplexEntryEntrySourceAncestorsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataplexEntryEntrySourceAncestors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]

---


### GoogleDataplexEntryEntrySourceOutputReference <a name="GoogleDataplexEntryEntrySourceOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.putAncestors">put_ancestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetAncestors">reset_ancestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetCreateTime">reset_create_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetResource">reset_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetSystemAttribute">reset_system_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetUpdateTime">reset_update_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ancestors` <a name="put_ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.putAncestors"></a>

```python
def put_ancestors(
  value: typing.Union[IResolvable, typing.List[GoogleDataplexEntryEntrySourceAncestors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.putAncestors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]]

---

##### `reset_ancestors` <a name="reset_ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetAncestors"></a>

```python
def reset_ancestors() -> None
```

##### `reset_create_time` <a name="reset_create_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetCreateTime"></a>

```python
def reset_create_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```

##### `reset_system_attribute` <a name="reset_system_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetSystemAttribute"></a>

```python
def reset_system_attribute() -> None
```

##### `reset_update_time` <a name="reset_update_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetUpdateTime"></a>

```python
def reset_update_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestors">ancestors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList">GoogleDataplexEntryEntrySourceAncestorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestorsInput">ancestors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTimeInput">create_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttributeInput">system_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTimeInput">update_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttribute">system_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ancestors`<sup>Required</sup> <a name="ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestors"></a>

```python
ancestors: GoogleDataplexEntryEntrySourceAncestorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList">GoogleDataplexEntryEntrySourceAncestorsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `ancestors_input`<sup>Optional</sup> <a name="ancestors_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestorsInput"></a>

```python
ancestors_input: typing.Union[IResolvable, typing.List[GoogleDataplexEntryEntrySourceAncestors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>]]

---

##### `create_time_input`<sup>Optional</sup> <a name="create_time_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTimeInput"></a>

```python
create_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `system_attribute_input`<sup>Optional</sup> <a name="system_attribute_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttributeInput"></a>

```python
system_attribute_input: str
```

- *Type:* str

---

##### `update_time_input`<sup>Optional</sup> <a name="update_time_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTimeInput"></a>

```python
update_time_input: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

---


### GoogleDataplexEntryTimeoutsOutputReference <a name="GoogleDataplexEntryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_entry

googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataplexEntryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>]

---



