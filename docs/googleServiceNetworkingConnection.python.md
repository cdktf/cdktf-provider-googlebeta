# `googleServiceNetworkingConnection` Submodule <a name="`googleServiceNetworkingConnection` Submodule" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceNetworkingConnection <a name="GoogleServiceNetworkingConnection" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection google_service_networking_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_connection

googleServiceNetworkingConnection.GoogleServiceNetworkingConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network: str,
  reserved_peering_ranges: typing.List[str],
  service: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleServiceNetworkingConnectionTimeouts = None,
  update_on_creation_fail: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.network">network</a></code> | <code>str</code> | Name of VPC network connected with service producers using VPC peering. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.reservedPeeringRanges">reserved_peering_ranges</a></code> | <code>typing.List[str]</code> | Named IP address range(s) of PEERING type reserved for this service provider. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.service">service</a></code> | <code>str</code> | Provider peering service that is managing peering connectivity for a service provider organization. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | When set to ABANDON, terraform will abandon management of the resource instead of deleting it. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#id GoogleServiceNetworkingConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.updateOnCreationFail">update_on_creation_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, enforce an update of the reserved peering ranges on the existing service networking connection in case of a new connection creation failure. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.network"></a>

- *Type:* str

Name of VPC network connected with service producers using VPC peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#network GoogleServiceNetworkingConnection#network}

---

##### `reserved_peering_ranges`<sup>Required</sup> <a name="reserved_peering_ranges" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.reservedPeeringRanges"></a>

- *Type:* typing.List[str]

Named IP address range(s) of PEERING type reserved for this service provider.

Note that invoking this method with a different range when connection is already established will not reallocate already provisioned service producer subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#reserved_peering_ranges GoogleServiceNetworkingConnection#reserved_peering_ranges}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.service"></a>

- *Type:* str

Provider peering service that is managing peering connectivity for a service provider organization.

For Google services that support this functionality it is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#service GoogleServiceNetworkingConnection#service}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

When set to ABANDON, terraform will abandon management of the resource instead of deleting it.

Prevents terraform apply failures with CloudSQL. Note: The resource will still exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#deletion_policy GoogleServiceNetworkingConnection#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#id GoogleServiceNetworkingConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#timeouts GoogleServiceNetworkingConnection#timeouts}

---

##### `update_on_creation_fail`<sup>Optional</sup> <a name="update_on_creation_fail" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.Initializer.parameter.updateOnCreationFail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, enforce an update of the reserved peering ranges on the existing service networking connection in case of a new connection creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#update_on_creation_fail GoogleServiceNetworkingConnection#update_on_creation_fail}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetUpdateOnCreationFail">reset_update_on_creation_fail</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#create GoogleServiceNetworkingConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#delete GoogleServiceNetworkingConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#update GoogleServiceNetworkingConnection#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_on_creation_fail` <a name="reset_update_on_creation_fail" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.resetUpdateOnCreationFail"></a>

```python
def reset_update_on_creation_fail() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleServiceNetworkingConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_connection

googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_connection

googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_connection

googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_connection

googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleServiceNetworkingConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleServiceNetworkingConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleServiceNetworkingConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceNetworkingConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.peering">peering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference">GoogleServiceNetworkingConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.reservedPeeringRangesInput">reserved_peering_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.updateOnCreationFailInput">update_on_creation_fail_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.reservedPeeringRanges">reserved_peering_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.updateOnCreationFail">update_on_creation_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.peering"></a>

```python
peering: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.timeouts"></a>

```python
timeouts: GoogleServiceNetworkingConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference">GoogleServiceNetworkingConnectionTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `reserved_peering_ranges_input`<sup>Optional</sup> <a name="reserved_peering_ranges_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.reservedPeeringRangesInput"></a>

```python
reserved_peering_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleServiceNetworkingConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a>]

---

##### `update_on_creation_fail_input`<sup>Optional</sup> <a name="update_on_creation_fail_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.updateOnCreationFailInput"></a>

```python
update_on_creation_fail_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `reserved_peering_ranges`<sup>Required</sup> <a name="reserved_peering_ranges" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.reservedPeeringRanges"></a>

```python
reserved_peering_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `update_on_creation_fail`<sup>Required</sup> <a name="update_on_creation_fail" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.updateOnCreationFail"></a>

```python
update_on_creation_fail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceNetworkingConnectionConfig <a name="GoogleServiceNetworkingConnectionConfig" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_connection

googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network: str,
  reserved_peering_ranges: typing.List[str],
  service: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleServiceNetworkingConnectionTimeouts = None,
  update_on_creation_fail: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.network">network</a></code> | <code>str</code> | Name of VPC network connected with service producers using VPC peering. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.reservedPeeringRanges">reserved_peering_ranges</a></code> | <code>typing.List[str]</code> | Named IP address range(s) of PEERING type reserved for this service provider. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.service">service</a></code> | <code>str</code> | Provider peering service that is managing peering connectivity for a service provider organization. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | When set to ABANDON, terraform will abandon management of the resource instead of deleting it. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#id GoogleServiceNetworkingConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.updateOnCreationFail">update_on_creation_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, enforce an update of the reserved peering ranges on the existing service networking connection in case of a new connection creation failure. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Name of VPC network connected with service producers using VPC peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#network GoogleServiceNetworkingConnection#network}

---

##### `reserved_peering_ranges`<sup>Required</sup> <a name="reserved_peering_ranges" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.reservedPeeringRanges"></a>

```python
reserved_peering_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Named IP address range(s) of PEERING type reserved for this service provider.

Note that invoking this method with a different range when connection is already established will not reallocate already provisioned service producer subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#reserved_peering_ranges GoogleServiceNetworkingConnection#reserved_peering_ranges}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Provider peering service that is managing peering connectivity for a service provider organization.

For Google services that support this functionality it is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#service GoogleServiceNetworkingConnection#service}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

When set to ABANDON, terraform will abandon management of the resource instead of deleting it.

Prevents terraform apply failures with CloudSQL. Note: The resource will still exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#deletion_policy GoogleServiceNetworkingConnection#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#id GoogleServiceNetworkingConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.timeouts"></a>

```python
timeouts: GoogleServiceNetworkingConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#timeouts GoogleServiceNetworkingConnection#timeouts}

---

##### `update_on_creation_fail`<sup>Optional</sup> <a name="update_on_creation_fail" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionConfig.property.updateOnCreationFail"></a>

```python
update_on_creation_fail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, enforce an update of the reserved peering ranges on the existing service networking connection in case of a new connection creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#update_on_creation_fail GoogleServiceNetworkingConnection#update_on_creation_fail}

---

### GoogleServiceNetworkingConnectionTimeouts <a name="GoogleServiceNetworkingConnectionTimeouts" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_connection

googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#create GoogleServiceNetworkingConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#delete GoogleServiceNetworkingConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#update GoogleServiceNetworkingConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#create GoogleServiceNetworkingConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#delete GoogleServiceNetworkingConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_service_networking_connection#update GoogleServiceNetworkingConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceNetworkingConnectionTimeoutsOutputReference <a name="GoogleServiceNetworkingConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_networking_connection

googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleServiceNetworkingConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceNetworkingConnection.GoogleServiceNetworkingConnectionTimeouts">GoogleServiceNetworkingConnectionTimeouts</a>]

---



