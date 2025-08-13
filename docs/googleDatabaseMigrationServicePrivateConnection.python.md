# `googleDatabaseMigrationServicePrivateConnection` Submodule <a name="`googleDatabaseMigrationServicePrivateConnection` Submodule" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatabaseMigrationServicePrivateConnection <a name="GoogleDatabaseMigrationServicePrivateConnection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection google_database_migration_service_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection(
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
  private_connection_id: str,
  vpc_peering_config: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig,
  create_without_validation: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDatabaseMigrationServicePrivateConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.privateConnectionId">private_connection_id</a></code> | <code>str</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, will skip validations. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#location GoogleDatabaseMigrationServicePrivateConnection#location}

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.privateConnectionId"></a>

- *Type:* str

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#private_connection_id GoogleDatabaseMigrationServicePrivateConnection#private_connection_id}

---

##### `vpc_peering_config`<sup>Required</sup> <a name="vpc_peering_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.vpcPeeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#vpc_peering_config GoogleDatabaseMigrationServicePrivateConnection#vpc_peering_config}

---

##### `create_without_validation`<sup>Optional</sup> <a name="create_without_validation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.createWithoutValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#create_without_validation GoogleDatabaseMigrationServicePrivateConnection#create_without_validation}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.displayName"></a>

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#display_name GoogleDatabaseMigrationServicePrivateConnection#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#labels GoogleDatabaseMigrationServicePrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#timeouts GoogleDatabaseMigrationServicePrivateConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig">put_vpc_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetCreateWithoutValidation">reset_create_without_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#create GoogleDatabaseMigrationServicePrivateConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#delete GoogleDatabaseMigrationServicePrivateConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#update GoogleDatabaseMigrationServicePrivateConnection#update}.

---

##### `put_vpc_peering_config` <a name="put_vpc_peering_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig"></a>

```python
def put_vpc_peering_config(
  subnet: str,
  vpc_name: str
) -> None
```

###### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig.parameter.subnet"></a>

- *Type:* str

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#subnet GoogleDatabaseMigrationServicePrivateConnection#subnet}

---

###### `vpc_name`<sup>Required</sup> <a name="vpc_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig.parameter.vpcName"></a>

- *Type:* str

Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#vpc_name GoogleDatabaseMigrationServicePrivateConnection#vpc_name}

---

##### `reset_create_without_validation` <a name="reset_create_without_validation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetCreateWithoutValidation"></a>

```python
def reset_create_without_validation() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDatabaseMigrationServicePrivateConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDatabaseMigrationServicePrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatabaseMigrationServicePrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList">GoogleDatabaseMigrationServicePrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.createWithoutValidationInput">create_without_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput">private_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput">vpc_peering_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionId">private_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.error"></a>

```python
error: GoogleDatabaseMigrationServicePrivateConnectionErrorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList">GoogleDatabaseMigrationServicePrivateConnectionErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeouts"></a>

```python
timeouts: GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a>

---

##### `vpc_peering_config`<sup>Required</sup> <a name="vpc_peering_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig"></a>

```python
vpc_peering_config: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `create_without_validation_input`<sup>Optional</sup> <a name="create_without_validation_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.createWithoutValidationInput"></a>

```python
create_without_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `private_connection_id_input`<sup>Optional</sup> <a name="private_connection_id_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput"></a>

```python
private_connection_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDatabaseMigrationServicePrivateConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>]

---

##### `vpc_peering_config_input`<sup>Optional</sup> <a name="vpc_peering_config_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput"></a>

```python
vpc_peering_config_input: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `create_without_validation`<sup>Required</sup> <a name="create_without_validation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.createWithoutValidation"></a>

```python
create_without_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionId"></a>

```python
private_connection_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatabaseMigrationServicePrivateConnectionConfig <a name="GoogleDatabaseMigrationServicePrivateConnectionConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  private_connection_id: str,
  vpc_peering_config: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig,
  create_without_validation: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDatabaseMigrationServicePrivateConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.location">location</a></code> | <code>str</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId">private_connection_id</a></code> | <code>str</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, will skip validations. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#location GoogleDatabaseMigrationServicePrivateConnection#location}

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId"></a>

```python
private_connection_id: str
```

- *Type:* str

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#private_connection_id GoogleDatabaseMigrationServicePrivateConnection#private_connection_id}

---

##### `vpc_peering_config`<sup>Required</sup> <a name="vpc_peering_config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig"></a>

```python
vpc_peering_config: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#vpc_peering_config GoogleDatabaseMigrationServicePrivateConnection#vpc_peering_config}

---

##### `create_without_validation`<sup>Optional</sup> <a name="create_without_validation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.createWithoutValidation"></a>

```python
create_without_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#create_without_validation GoogleDatabaseMigrationServicePrivateConnection#create_without_validation}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#display_name GoogleDatabaseMigrationServicePrivateConnection#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#labels GoogleDatabaseMigrationServicePrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.timeouts"></a>

```python
timeouts: GoogleDatabaseMigrationServicePrivateConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#timeouts GoogleDatabaseMigrationServicePrivateConnection#timeouts}

---

### GoogleDatabaseMigrationServicePrivateConnectionError <a name="GoogleDatabaseMigrationServicePrivateConnectionError" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError()
```


### GoogleDatabaseMigrationServicePrivateConnectionTimeouts <a name="GoogleDatabaseMigrationServicePrivateConnectionTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#create GoogleDatabaseMigrationServicePrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#delete GoogleDatabaseMigrationServicePrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#update GoogleDatabaseMigrationServicePrivateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#create GoogleDatabaseMigrationServicePrivateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#delete GoogleDatabaseMigrationServicePrivateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#update GoogleDatabaseMigrationServicePrivateConnection#update}.

---

### GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig <a name="GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig(
  subnet: str,
  vpc_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet">subnet</a></code> | <code>str</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName">vpc_name</a></code> | <code>str</code> | Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#subnet GoogleDatabaseMigrationServicePrivateConnection#subnet}

---

##### `vpc_name`<sup>Required</sup> <a name="vpc_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName"></a>

```python
vpc_name: str
```

- *Type:* str

Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_database_migration_service_private_connection#vpc_name GoogleDatabaseMigrationServicePrivateConnection#vpc_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatabaseMigrationServicePrivateConnectionErrorList <a name="GoogleDatabaseMigrationServicePrivateConnectionErrorList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError">GoogleDatabaseMigrationServicePrivateConnectionError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details"></a>

```python
details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServicePrivateConnectionError
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError">GoogleDatabaseMigrationServicePrivateConnectionError</a>

---


### GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDatabaseMigrationServicePrivateConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>]

---


### GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_database_migration_service_private_connection

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput">vpc_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName">vpc_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `vpc_name_input`<sup>Optional</sup> <a name="vpc_name_input" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput"></a>

```python
vpc_name_input: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `vpc_name`<sup>Required</sup> <a name="vpc_name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName"></a>

```python
vpc_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---



