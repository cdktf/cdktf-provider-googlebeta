# `googleNetappBackupVault` Submodule <a name="`googleNetappBackupVault` Submodule" id="@cdktf/provider-google-beta.googleNetappBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappBackupVault <a name="GoogleNetappBackupVault" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault google_netapp_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVault(
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
  name: str,
  backup_region: str = None,
  backup_retention_policy: GoogleNetappBackupVaultBackupRetentionPolicy = None,
  backup_vault_type: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetappBackupVaultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.location">location</a></code> | <code>str</code> | Location (region) of the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the backup vault. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.backupRegion">backup_region</a></code> | <code>str</code> | Region in which backup is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.backupRetentionPolicy">backup_retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a></code> | backup_retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.backupVaultType">backup_vault_type</a></code> | <code>str</code> | Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#id GoogleNetappBackupVault#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#project GoogleNetappBackupVault#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.location"></a>

- *Type:* str

Location (region) of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#location GoogleNetappBackupVault#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the backup vault. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#name GoogleNetappBackupVault#name}

---

##### `backup_region`<sup>Optional</sup> <a name="backup_region" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.backupRegion"></a>

- *Type:* str

Region in which backup is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#backup_region GoogleNetappBackupVault#backup_region}

---

##### `backup_retention_policy`<sup>Optional</sup> <a name="backup_retention_policy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.backupRetentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a>

backup_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#backup_retention_policy GoogleNetappBackupVault#backup_retention_policy}

---

##### `backup_vault_type`<sup>Optional</sup> <a name="backup_vault_type" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.backupVaultType"></a>

- *Type:* str

Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#backup_vault_type GoogleNetappBackupVault#backup_vault_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#description GoogleNetappBackupVault#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#id GoogleNetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#labels GoogleNetappBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#project GoogleNetappBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#timeouts GoogleNetappBackupVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy">put_backup_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupRegion">reset_backup_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupRetentionPolicy">reset_backup_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupVaultType">reset_backup_vault_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_retention_policy` <a name="put_backup_retention_policy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy"></a>

```python
def put_backup_retention_policy(
  backup_minimum_enforced_retention_days: typing.Union[int, float],
  daily_backup_immutable: typing.Union[bool, IResolvable] = None,
  manual_backup_immutable: typing.Union[bool, IResolvable] = None,
  monthly_backup_immutable: typing.Union[bool, IResolvable] = None,
  weekly_backup_immutable: typing.Union[bool, IResolvable] = None
) -> None
```

###### `backup_minimum_enforced_retention_days`<sup>Required</sup> <a name="backup_minimum_enforced_retention_days" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy.parameter.backupMinimumEnforcedRetentionDays"></a>

- *Type:* typing.Union[int, float]

Minimum retention duration in days for backups in the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#backup_minimum_enforced_retention_days GoogleNetappBackupVault#backup_minimum_enforced_retention_days}

---

###### `daily_backup_immutable`<sup>Optional</sup> <a name="daily_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy.parameter.dailyBackupImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#daily_backup_immutable GoogleNetappBackupVault#daily_backup_immutable}

---

###### `manual_backup_immutable`<sup>Optional</sup> <a name="manual_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy.parameter.manualBackupImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#manual_backup_immutable GoogleNetappBackupVault#manual_backup_immutable}

---

###### `monthly_backup_immutable`<sup>Optional</sup> <a name="monthly_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy.parameter.monthlyBackupImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#monthly_backup_immutable GoogleNetappBackupVault#monthly_backup_immutable}

---

###### `weekly_backup_immutable`<sup>Optional</sup> <a name="weekly_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putBackupRetentionPolicy.parameter.weeklyBackupImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#weekly_backup_immutable GoogleNetappBackupVault#weekly_backup_immutable}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#create GoogleNetappBackupVault#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#delete GoogleNetappBackupVault#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#update GoogleNetappBackupVault#update}.

---

##### `reset_backup_region` <a name="reset_backup_region" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupRegion"></a>

```python
def reset_backup_region() -> None
```

##### `reset_backup_retention_policy` <a name="reset_backup_retention_policy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupRetentionPolicy"></a>

```python
def reset_backup_retention_policy() -> None
```

##### `reset_backup_vault_type` <a name="reset_backup_vault_type" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetBackupVaultType"></a>

```python
def reset_backup_vault_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetappBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetappBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetappBackupVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetappBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRetentionPolicy">backup_retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference">GoogleNetappBackupVaultBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.destinationBackupVault">destination_backup_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.sourceBackupVault">source_backup_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.sourceRegion">source_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference">GoogleNetappBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRegionInput">backup_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRetentionPolicyInput">backup_retention_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupVaultTypeInput">backup_vault_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRegion">backup_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupVaultType">backup_vault_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_retention_policy`<sup>Required</sup> <a name="backup_retention_policy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRetentionPolicy"></a>

```python
backup_retention_policy: GoogleNetappBackupVaultBackupRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference">GoogleNetappBackupVaultBackupRetentionPolicyOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination_backup_vault`<sup>Required</sup> <a name="destination_backup_vault" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.destinationBackupVault"></a>

```python
destination_backup_vault: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `source_backup_vault`<sup>Required</sup> <a name="source_backup_vault" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.sourceBackupVault"></a>

```python
source_backup_vault: str
```

- *Type:* str

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.timeouts"></a>

```python
timeouts: GoogleNetappBackupVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference">GoogleNetappBackupVaultTimeoutsOutputReference</a>

---

##### `backup_region_input`<sup>Optional</sup> <a name="backup_region_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRegionInput"></a>

```python
backup_region_input: str
```

- *Type:* str

---

##### `backup_retention_policy_input`<sup>Optional</sup> <a name="backup_retention_policy_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRetentionPolicyInput"></a>

```python
backup_retention_policy_input: GoogleNetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a>

---

##### `backup_vault_type_input`<sup>Optional</sup> <a name="backup_vault_type_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupVaultTypeInput"></a>

```python
backup_vault_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetappBackupVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a>]

---

##### `backup_region`<sup>Required</sup> <a name="backup_region" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupRegion"></a>

```python
backup_region: str
```

- *Type:* str

---

##### `backup_vault_type`<sup>Required</sup> <a name="backup_vault_type" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.backupVaultType"></a>

```python
backup_vault_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappBackupVaultBackupRetentionPolicy <a name="GoogleNetappBackupVaultBackupRetentionPolicy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy(
  backup_minimum_enforced_retention_days: typing.Union[int, float],
  daily_backup_immutable: typing.Union[bool, IResolvable] = None,
  manual_backup_immutable: typing.Union[bool, IResolvable] = None,
  monthly_backup_immutable: typing.Union[bool, IResolvable] = None,
  weekly_backup_immutable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.backupMinimumEnforcedRetentionDays">backup_minimum_enforced_retention_days</a></code> | <code>typing.Union[int, float]</code> | Minimum retention duration in days for backups in the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.dailyBackupImmutable">daily_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.manualBackupImmutable">manual_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.monthlyBackupImmutable">monthly_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.weeklyBackupImmutable">weekly_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. |

---

##### `backup_minimum_enforced_retention_days`<sup>Required</sup> <a name="backup_minimum_enforced_retention_days" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.backupMinimumEnforcedRetentionDays"></a>

```python
backup_minimum_enforced_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum retention duration in days for backups in the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#backup_minimum_enforced_retention_days GoogleNetappBackupVault#backup_minimum_enforced_retention_days}

---

##### `daily_backup_immutable`<sup>Optional</sup> <a name="daily_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.dailyBackupImmutable"></a>

```python
daily_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#daily_backup_immutable GoogleNetappBackupVault#daily_backup_immutable}

---

##### `manual_backup_immutable`<sup>Optional</sup> <a name="manual_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.manualBackupImmutable"></a>

```python
manual_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#manual_backup_immutable GoogleNetappBackupVault#manual_backup_immutable}

---

##### `monthly_backup_immutable`<sup>Optional</sup> <a name="monthly_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.monthlyBackupImmutable"></a>

```python
monthly_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#monthly_backup_immutable GoogleNetappBackupVault#monthly_backup_immutable}

---

##### `weekly_backup_immutable`<sup>Optional</sup> <a name="weekly_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy.property.weeklyBackupImmutable"></a>

```python
weekly_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#weekly_backup_immutable GoogleNetappBackupVault#weekly_backup_immutable}

---

### GoogleNetappBackupVaultConfig <a name="GoogleNetappBackupVaultConfig" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  backup_region: str = None,
  backup_retention_policy: GoogleNetappBackupVaultBackupRetentionPolicy = None,
  backup_vault_type: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetappBackupVaultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.location">location</a></code> | <code>str</code> | Location (region) of the backup vault. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.name">name</a></code> | <code>str</code> | The resource name of the backup vault. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupRegion">backup_region</a></code> | <code>str</code> | Region in which backup is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupRetentionPolicy">backup_retention_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a></code> | backup_retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupVaultType">backup_vault_type</a></code> | <code>str</code> | Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#id GoogleNetappBackupVault#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#project GoogleNetappBackupVault#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location (region) of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#location GoogleNetappBackupVault#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the backup vault. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#name GoogleNetappBackupVault#name}

---

##### `backup_region`<sup>Optional</sup> <a name="backup_region" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupRegion"></a>

```python
backup_region: str
```

- *Type:* str

Region in which backup is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#backup_region GoogleNetappBackupVault#backup_region}

---

##### `backup_retention_policy`<sup>Optional</sup> <a name="backup_retention_policy" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupRetentionPolicy"></a>

```python
backup_retention_policy: GoogleNetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a>

backup_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#backup_retention_policy GoogleNetappBackupVault#backup_retention_policy}

---

##### `backup_vault_type`<sup>Optional</sup> <a name="backup_vault_type" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.backupVaultType"></a>

```python
backup_vault_type: str
```

- *Type:* str

Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#backup_vault_type GoogleNetappBackupVault#backup_vault_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#description GoogleNetappBackupVault#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#id GoogleNetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#labels GoogleNetappBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#project GoogleNetappBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultConfig.property.timeouts"></a>

```python
timeouts: GoogleNetappBackupVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#timeouts GoogleNetappBackupVault#timeouts}

---

### GoogleNetappBackupVaultTimeouts <a name="GoogleNetappBackupVaultTimeouts" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVaultTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#create GoogleNetappBackupVault#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#delete GoogleNetappBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#update GoogleNetappBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#create GoogleNetappBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#delete GoogleNetappBackupVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_netapp_backup_vault#update GoogleNetappBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappBackupVaultBackupRetentionPolicyOutputReference <a name="GoogleNetappBackupVaultBackupRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetDailyBackupImmutable">reset_daily_backup_immutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetManualBackupImmutable">reset_manual_backup_immutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetMonthlyBackupImmutable">reset_monthly_backup_immutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetWeeklyBackupImmutable">reset_weekly_backup_immutable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_daily_backup_immutable` <a name="reset_daily_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetDailyBackupImmutable"></a>

```python
def reset_daily_backup_immutable() -> None
```

##### `reset_manual_backup_immutable` <a name="reset_manual_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetManualBackupImmutable"></a>

```python
def reset_manual_backup_immutable() -> None
```

##### `reset_monthly_backup_immutable` <a name="reset_monthly_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetMonthlyBackupImmutable"></a>

```python
def reset_monthly_backup_immutable() -> None
```

##### `reset_weekly_backup_immutable` <a name="reset_weekly_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.resetWeeklyBackupImmutable"></a>

```python
def reset_weekly_backup_immutable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDaysInput">backup_minimum_enforced_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutableInput">daily_backup_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutableInput">manual_backup_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutableInput">monthly_backup_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutableInput">weekly_backup_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDays">backup_minimum_enforced_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutable">daily_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutable">manual_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutable">monthly_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutable">weekly_backup_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_minimum_enforced_retention_days_input`<sup>Optional</sup> <a name="backup_minimum_enforced_retention_days_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDaysInput"></a>

```python
backup_minimum_enforced_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_backup_immutable_input`<sup>Optional</sup> <a name="daily_backup_immutable_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutableInput"></a>

```python
daily_backup_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manual_backup_immutable_input`<sup>Optional</sup> <a name="manual_backup_immutable_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutableInput"></a>

```python
manual_backup_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monthly_backup_immutable_input`<sup>Optional</sup> <a name="monthly_backup_immutable_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutableInput"></a>

```python
monthly_backup_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `weekly_backup_immutable_input`<sup>Optional</sup> <a name="weekly_backup_immutable_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutableInput"></a>

```python
weekly_backup_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_minimum_enforced_retention_days`<sup>Required</sup> <a name="backup_minimum_enforced_retention_days" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.backupMinimumEnforcedRetentionDays"></a>

```python
backup_minimum_enforced_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_backup_immutable`<sup>Required</sup> <a name="daily_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.dailyBackupImmutable"></a>

```python
daily_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manual_backup_immutable`<sup>Required</sup> <a name="manual_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.manualBackupImmutable"></a>

```python
manual_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monthly_backup_immutable`<sup>Required</sup> <a name="monthly_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.monthlyBackupImmutable"></a>

```python
monthly_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `weekly_backup_immutable`<sup>Required</sup> <a name="weekly_backup_immutable" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.weeklyBackupImmutable"></a>

```python
weekly_backup_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappBackupVaultBackupRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultBackupRetentionPolicy">GoogleNetappBackupVaultBackupRetentionPolicy</a>

---


### GoogleNetappBackupVaultTimeoutsOutputReference <a name="GoogleNetappBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_backup_vault

googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetappBackupVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappBackupVault.GoogleNetappBackupVaultTimeouts">GoogleNetappBackupVaultTimeouts</a>]

---



