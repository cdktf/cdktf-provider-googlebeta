# `googleBackupDrManagementServer` Submodule <a name="`googleBackupDrManagementServer` Submodule" id="@cdktf/provider-google-beta.googleBackupDrManagementServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrManagementServer <a name="GoogleBackupDrManagementServer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server google_backup_dr_management_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServer(
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
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[GoogleBackupDrManagementServerNetworks]] = None,
  project: str = None,
  timeouts: GoogleBackupDrManagementServerTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the management server (management console). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of management server (management console). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#id GoogleBackupDrManagementServer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#project GoogleBackupDrManagementServer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of management server (management console). Default value: "BACKUP_RESTORE" Possible values: ["BACKUP_RESTORE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.location"></a>

- *Type:* str

The location for the management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#location GoogleBackupDrManagementServer#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.name"></a>

- *Type:* str

The name of management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#name GoogleBackupDrManagementServer#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#id GoogleBackupDrManagementServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#networks GoogleBackupDrManagementServer#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#project GoogleBackupDrManagementServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#timeouts GoogleBackupDrManagementServer#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.type"></a>

- *Type:* str

The type of management server (management console). Default value: "BACKUP_RESTORE" Possible values: ["BACKUP_RESTORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#type GoogleBackupDrManagementServer#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetNetworks">reset_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[GoogleBackupDrManagementServerNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#create GoogleBackupDrManagementServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#delete GoogleBackupDrManagementServer#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_networks` <a name="reset_networks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetNetworks"></a>

```python
def reset_networks() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBackupDrManagementServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBackupDrManagementServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrManagementServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.managementUri">management_uri</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList">GoogleBackupDrManagementServerManagementUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList">GoogleBackupDrManagementServerNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.oauth2ClientId">oauth2_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference">GoogleBackupDrManagementServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_uri`<sup>Required</sup> <a name="management_uri" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.managementUri"></a>

```python
management_uri: GoogleBackupDrManagementServerManagementUriList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList">GoogleBackupDrManagementServerManagementUriList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.networks"></a>

```python
networks: GoogleBackupDrManagementServerNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList">GoogleBackupDrManagementServerNetworksList</a>

---

##### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.oauth2ClientId"></a>

```python
oauth2_client_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.timeouts"></a>

```python
timeouts: GoogleBackupDrManagementServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference">GoogleBackupDrManagementServerTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[GoogleBackupDrManagementServerNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBackupDrManagementServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrManagementServerConfig <a name="GoogleBackupDrManagementServerConfig" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[GoogleBackupDrManagementServerNetworks]] = None,
  project: str = None,
  timeouts: GoogleBackupDrManagementServerTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.location">location</a></code> | <code>str</code> | The location for the management server (management console). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.name">name</a></code> | <code>str</code> | The name of management server (management console). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#id GoogleBackupDrManagementServer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#project GoogleBackupDrManagementServer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.type">type</a></code> | <code>str</code> | The type of management server (management console). Default value: "BACKUP_RESTORE" Possible values: ["BACKUP_RESTORE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#location GoogleBackupDrManagementServer#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#name GoogleBackupDrManagementServer#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#id GoogleBackupDrManagementServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[GoogleBackupDrManagementServerNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#networks GoogleBackupDrManagementServer#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#project GoogleBackupDrManagementServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.timeouts"></a>

```python
timeouts: GoogleBackupDrManagementServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#timeouts GoogleBackupDrManagementServer#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of management server (management console). Default value: "BACKUP_RESTORE" Possible values: ["BACKUP_RESTORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#type GoogleBackupDrManagementServer#type}

---

### GoogleBackupDrManagementServerManagementUri <a name="GoogleBackupDrManagementServerManagementUri" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri()
```


### GoogleBackupDrManagementServerNetworks <a name="GoogleBackupDrManagementServerNetworks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks(
  network: str,
  peering_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.property.network">network</a></code> | <code>str</code> | Network with format 'projects/{{project_id}}/global/networks/{{network_id}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.property.peeringMode">peering_mode</a></code> | <code>str</code> | Type of Network peeringMode Default value: "PRIVATE_SERVICE_ACCESS" Possible values: ["PRIVATE_SERVICE_ACCESS"]. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.property.network"></a>

```python
network: str
```

- *Type:* str

Network with format 'projects/{{project_id}}/global/networks/{{network_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#network GoogleBackupDrManagementServer#network}

---

##### `peering_mode`<sup>Optional</sup> <a name="peering_mode" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.property.peeringMode"></a>

```python
peering_mode: str
```

- *Type:* str

Type of Network peeringMode Default value: "PRIVATE_SERVICE_ACCESS" Possible values: ["PRIVATE_SERVICE_ACCESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#peering_mode GoogleBackupDrManagementServer#peering_mode}

---

### GoogleBackupDrManagementServerTimeouts <a name="GoogleBackupDrManagementServerTimeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#create GoogleBackupDrManagementServer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#delete GoogleBackupDrManagementServer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#create GoogleBackupDrManagementServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_backup_dr_management_server#delete GoogleBackupDrManagementServer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrManagementServerManagementUriList <a name="GoogleBackupDrManagementServerManagementUriList" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBackupDrManagementServerManagementUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBackupDrManagementServerManagementUriOutputReference <a name="GoogleBackupDrManagementServerManagementUriOutputReference" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.webUi">web_ui</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri">GoogleBackupDrManagementServerManagementUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `web_ui`<sup>Required</sup> <a name="web_ui" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.webUi"></a>

```python
web_ui: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBackupDrManagementServerManagementUri
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri">GoogleBackupDrManagementServerManagementUri</a>

---


### GoogleBackupDrManagementServerNetworksList <a name="GoogleBackupDrManagementServerNetworksList" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBackupDrManagementServerNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBackupDrManagementServerNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]]

---


### GoogleBackupDrManagementServerNetworksOutputReference <a name="GoogleBackupDrManagementServerNetworksOutputReference" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resetPeeringMode">reset_peering_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_peering_mode` <a name="reset_peering_mode" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resetPeeringMode"></a>

```python
def reset_peering_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.peeringModeInput">peering_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode">peering_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `peering_mode_input`<sup>Optional</sup> <a name="peering_mode_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.peeringModeInput"></a>

```python
peering_mode_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `peering_mode`<sup>Required</sup> <a name="peering_mode" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode"></a>

```python
peering_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBackupDrManagementServerNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>]

---


### GoogleBackupDrManagementServerTimeoutsOutputReference <a name="GoogleBackupDrManagementServerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_backup_dr_management_server

googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBackupDrManagementServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>]

---



