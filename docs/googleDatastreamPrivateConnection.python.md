# `googleDatastreamPrivateConnection` Submodule <a name="`googleDatastreamPrivateConnection` Submodule" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatastreamPrivateConnection <a name="GoogleDatastreamPrivateConnection" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection google_datastream_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  private_connection_id: str,
  create_without_validation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  psc_interface_config: GoogleDatastreamPrivateConnectionPscInterfaceConfig = None,
  timeouts: GoogleDatastreamPrivateConnectionTimeouts = None,
  vpc_peering_config: GoogleDatastreamPrivateConnectionVpcPeeringConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.privateConnectionId">private_connection_id</a></code> | <code>str</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, will skip validations. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#id GoogleDatastreamPrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#project GoogleDatastreamPrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig">GoogleDatastreamPrivateConnectionPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.displayName"></a>

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#display_name GoogleDatastreamPrivateConnection#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#location GoogleDatastreamPrivateConnection#location}

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.privateConnectionId"></a>

- *Type:* str

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#private_connection_id GoogleDatastreamPrivateConnection#private_connection_id}

---

##### `create_without_validation`<sup>Optional</sup> <a name="create_without_validation" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.createWithoutValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#create_without_validation GoogleDatastreamPrivateConnection#create_without_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#id GoogleDatastreamPrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#labels GoogleDatastreamPrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#project GoogleDatastreamPrivateConnection#project}.

---

##### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.pscInterfaceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig">GoogleDatastreamPrivateConnectionPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#psc_interface_config GoogleDatastreamPrivateConnection#psc_interface_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#timeouts GoogleDatastreamPrivateConnection#timeouts}

---

##### `vpc_peering_config`<sup>Optional</sup> <a name="vpc_peering_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.Initializer.parameter.vpcPeeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#vpc_peering_config GoogleDatastreamPrivateConnection#vpc_peering_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putPscInterfaceConfig">put_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putVpcPeeringConfig">put_vpc_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetCreateWithoutValidation">reset_create_without_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetPscInterfaceConfig">reset_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetVpcPeeringConfig">reset_vpc_peering_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_psc_interface_config` <a name="put_psc_interface_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putPscInterfaceConfig"></a>

```python
def put_psc_interface_config(
  network_attachment: str
) -> None
```

###### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putPscInterfaceConfig.parameter.networkAttachment"></a>

- *Type:* str

Fully qualified name of the network attachment that Datastream will connect to. Format: projects/{project}/regions/{region}/networkAttachments/{name}.

To get Datastream project for the accepted list:
'gcloud datastream private-connections create [PC ID] --location=[LOCATION] --network-attachment=[NA URI] --validate-only --display-name=[ANY STRING]'
Add Datastream project to the attachment accepted list:
'gcloud compute network-attachments update [NA URI] --region=[NA region] --producer-accept-list=[TP from prev command]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#network_attachment GoogleDatastreamPrivateConnection#network_attachment}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#create GoogleDatastreamPrivateConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#delete GoogleDatastreamPrivateConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#update GoogleDatastreamPrivateConnection#update}.

---

##### `put_vpc_peering_config` <a name="put_vpc_peering_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putVpcPeeringConfig"></a>

```python
def put_vpc_peering_config(
  subnet: str,
  vpc: str
) -> None
```

###### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putVpcPeeringConfig.parameter.subnet"></a>

- *Type:* str

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#subnet GoogleDatastreamPrivateConnection#subnet}

---

###### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.putVpcPeeringConfig.parameter.vpc"></a>

- *Type:* str

Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#vpc GoogleDatastreamPrivateConnection#vpc}

---

##### `reset_create_without_validation` <a name="reset_create_without_validation" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetCreateWithoutValidation"></a>

```python
def reset_create_without_validation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_psc_interface_config` <a name="reset_psc_interface_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetPscInterfaceConfig"></a>

```python
def reset_psc_interface_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_peering_config` <a name="reset_vpc_peering_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.resetVpcPeeringConfig"></a>

```python
def reset_vpc_peering_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDatastreamPrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDatastreamPrivateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDatastreamPrivateConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDatastreamPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatastreamPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList">GoogleDatastreamPrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference">GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference">GoogleDatastreamPrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference">GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.createWithoutValidationInput">create_without_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.privateConnectionIdInput">private_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.pscInterfaceConfigInput">psc_interface_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig">GoogleDatastreamPrivateConnectionPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.vpcPeeringConfigInput">vpc_peering_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.privateConnectionId">private_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.error"></a>

```python
error: GoogleDatastreamPrivateConnectionErrorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList">GoogleDatastreamPrivateConnectionErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psc_interface_config`<sup>Required</sup> <a name="psc_interface_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference">GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.timeouts"></a>

```python
timeouts: GoogleDatastreamPrivateConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference">GoogleDatastreamPrivateConnectionTimeoutsOutputReference</a>

---

##### `vpc_peering_config`<sup>Required</sup> <a name="vpc_peering_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.vpcPeeringConfig"></a>

```python
vpc_peering_config: GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference">GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `create_without_validation_input`<sup>Optional</sup> <a name="create_without_validation_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.createWithoutValidationInput"></a>

```python
create_without_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `private_connection_id_input`<sup>Optional</sup> <a name="private_connection_id_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.privateConnectionIdInput"></a>

```python
private_connection_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_interface_config_input`<sup>Optional</sup> <a name="psc_interface_config_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.pscInterfaceConfigInput"></a>

```python
psc_interface_config_input: GoogleDatastreamPrivateConnectionPscInterfaceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig">GoogleDatastreamPrivateConnectionPscInterfaceConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDatastreamPrivateConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a>]

---

##### `vpc_peering_config_input`<sup>Optional</sup> <a name="vpc_peering_config_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.vpcPeeringConfigInput"></a>

```python
vpc_peering_config_input: GoogleDatastreamPrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a>

---

##### `create_without_validation`<sup>Required</sup> <a name="create_without_validation" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.createWithoutValidation"></a>

```python
create_without_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.privateConnectionId"></a>

```python
private_connection_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatastreamPrivateConnectionConfig <a name="GoogleDatastreamPrivateConnectionConfig" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  private_connection_id: str,
  create_without_validation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  psc_interface_config: GoogleDatastreamPrivateConnectionPscInterfaceConfig = None,
  timeouts: GoogleDatastreamPrivateConnectionTimeouts = None,
  vpc_peering_config: GoogleDatastreamPrivateConnectionVpcPeeringConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.location">location</a></code> | <code>str</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.privateConnectionId">private_connection_id</a></code> | <code>str</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, will skip validations. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#id GoogleDatastreamPrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#project GoogleDatastreamPrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig">GoogleDatastreamPrivateConnectionPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#display_name GoogleDatastreamPrivateConnection#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#location GoogleDatastreamPrivateConnection#location}

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.privateConnectionId"></a>

```python
private_connection_id: str
```

- *Type:* str

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#private_connection_id GoogleDatastreamPrivateConnection#private_connection_id}

---

##### `create_without_validation`<sup>Optional</sup> <a name="create_without_validation" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.createWithoutValidation"></a>

```python
create_without_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#create_without_validation GoogleDatastreamPrivateConnection#create_without_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#id GoogleDatastreamPrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#labels GoogleDatastreamPrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#project GoogleDatastreamPrivateConnection#project}.

---

##### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleDatastreamPrivateConnectionPscInterfaceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig">GoogleDatastreamPrivateConnectionPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#psc_interface_config GoogleDatastreamPrivateConnection#psc_interface_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.timeouts"></a>

```python
timeouts: GoogleDatastreamPrivateConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#timeouts GoogleDatastreamPrivateConnection#timeouts}

---

##### `vpc_peering_config`<sup>Optional</sup> <a name="vpc_peering_config" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionConfig.property.vpcPeeringConfig"></a>

```python
vpc_peering_config: GoogleDatastreamPrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#vpc_peering_config GoogleDatastreamPrivateConnection#vpc_peering_config}

---

### GoogleDatastreamPrivateConnectionError <a name="GoogleDatastreamPrivateConnectionError" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError()
```


### GoogleDatastreamPrivateConnectionPscInterfaceConfig <a name="GoogleDatastreamPrivateConnectionPscInterfaceConfig" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig(
  network_attachment: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | Fully qualified name of the network attachment that Datastream will connect to. Format: projects/{project}/regions/{region}/networkAttachments/{name}. |

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

Fully qualified name of the network attachment that Datastream will connect to. Format: projects/{project}/regions/{region}/networkAttachments/{name}.

To get Datastream project for the accepted list:
'gcloud datastream private-connections create [PC ID] --location=[LOCATION] --network-attachment=[NA URI] --validate-only --display-name=[ANY STRING]'
Add Datastream project to the attachment accepted list:
'gcloud compute network-attachments update [NA URI] --region=[NA region] --producer-accept-list=[TP from prev command]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#network_attachment GoogleDatastreamPrivateConnection#network_attachment}

---

### GoogleDatastreamPrivateConnectionTimeouts <a name="GoogleDatastreamPrivateConnectionTimeouts" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#create GoogleDatastreamPrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#delete GoogleDatastreamPrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#update GoogleDatastreamPrivateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#create GoogleDatastreamPrivateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#delete GoogleDatastreamPrivateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#update GoogleDatastreamPrivateConnection#update}.

---

### GoogleDatastreamPrivateConnectionVpcPeeringConfig <a name="GoogleDatastreamPrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig(
  subnet: str,
  vpc: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.property.subnet">subnet</a></code> | <code>str</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.property.vpc">vpc</a></code> | <code>str</code> | Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#subnet GoogleDatastreamPrivateConnection#subnet}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig.property.vpc"></a>

```python
vpc: str
```

- *Type:* str

Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_datastream_private_connection#vpc GoogleDatastreamPrivateConnection#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatastreamPrivateConnectionErrorList <a name="GoogleDatastreamPrivateConnectionErrorList" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDatastreamPrivateConnectionErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDatastreamPrivateConnectionErrorOutputReference <a name="GoogleDatastreamPrivateConnectionErrorOutputReference" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError">GoogleDatastreamPrivateConnectionError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.details"></a>

```python
details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamPrivateConnectionError
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionError">GoogleDatastreamPrivateConnectionError</a>

---


### GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference <a name="GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig">GoogleDatastreamPrivateConnectionPscInterfaceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamPrivateConnectionPscInterfaceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionPscInterfaceConfig">GoogleDatastreamPrivateConnectionPscInterfaceConfig</a>

---


### GoogleDatastreamPrivateConnectionTimeoutsOutputReference <a name="GoogleDatastreamPrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDatastreamPrivateConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionTimeouts">GoogleDatastreamPrivateConnectionTimeouts</a>]

---


### GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference <a name="GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_private_connection

googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput">vpc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc">vpc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput"></a>

```python
vpc_input: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc"></a>

```python
vpc: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamPrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamPrivateConnection.GoogleDatastreamPrivateConnectionVpcPeeringConfig">GoogleDatastreamPrivateConnectionVpcPeeringConfig</a>

---



