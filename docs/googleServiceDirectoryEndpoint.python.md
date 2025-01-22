# `googleServiceDirectoryEndpoint` Submodule <a name="`googleServiceDirectoryEndpoint` Submodule" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceDirectoryEndpoint <a name="GoogleServiceDirectoryEndpoint" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint google_service_directory_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_endpoint

googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  service: str,
  address: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  port: typing.Union[int, float] = None,
  timeouts: GoogleServiceDirectoryEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.service">service</a></code> | <code>str</code> | The resource name of the service that this endpoint provides. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.address">address</a></code> | <code>str</code> | IPv4 or IPv6 address of the endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#id GoogleServiceDirectoryEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata for the endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.network">network</a></code> | <code>str</code> | The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Port that the endpoint is running on, must be in the range of [0, 65535]. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.endpointId"></a>

- *Type:* str

The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#endpoint_id GoogleServiceDirectoryEndpoint#endpoint_id}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.service"></a>

- *Type:* str

The resource name of the service that this endpoint provides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#service GoogleServiceDirectoryEndpoint#service}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.address"></a>

- *Type:* str

IPv4 or IPv6 address of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#address GoogleServiceDirectoryEndpoint#address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#id GoogleServiceDirectoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata for the endpoint.

This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#metadata GoogleServiceDirectoryEndpoint#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.network"></a>

- *Type:* str

The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#network GoogleServiceDirectoryEndpoint#network}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port that the endpoint is running on, must be in the range of [0, 65535].

If unspecified, the default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#port GoogleServiceDirectoryEndpoint#port}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#timeouts GoogleServiceDirectoryEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#create GoogleServiceDirectoryEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#delete GoogleServiceDirectoryEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#update GoogleServiceDirectoryEndpoint#update}.

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleServiceDirectoryEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_endpoint

googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_endpoint

googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_endpoint

googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_endpoint

googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleServiceDirectoryEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleServiceDirectoryEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleServiceDirectoryEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceDirectoryEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference">GoogleServiceDirectoryEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.timeouts"></a>

```python
timeouts: GoogleServiceDirectoryEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference">GoogleServiceDirectoryEndpointTimeoutsOutputReference</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleServiceDirectoryEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceDirectoryEndpointConfig <a name="GoogleServiceDirectoryEndpointConfig" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_endpoint

googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  service: str,
  address: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  port: typing.Union[int, float] = None,
  timeouts: GoogleServiceDirectoryEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.service">service</a></code> | <code>str</code> | The resource name of the service that this endpoint provides. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.address">address</a></code> | <code>str</code> | IPv4 or IPv6 address of the endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#id GoogleServiceDirectoryEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata for the endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.network">network</a></code> | <code>str</code> | The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port that the endpoint is running on, must be in the range of [0, 65535]. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#endpoint_id GoogleServiceDirectoryEndpoint#endpoint_id}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The resource name of the service that this endpoint provides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#service GoogleServiceDirectoryEndpoint#service}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.address"></a>

```python
address: str
```

- *Type:* str

IPv4 or IPv6 address of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#address GoogleServiceDirectoryEndpoint#address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#id GoogleServiceDirectoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata for the endpoint.

This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#metadata GoogleServiceDirectoryEndpoint#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#network GoogleServiceDirectoryEndpoint#network}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port that the endpoint is running on, must be in the range of [0, 65535].

If unspecified, the default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#port GoogleServiceDirectoryEndpoint#port}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.timeouts"></a>

```python
timeouts: GoogleServiceDirectoryEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#timeouts GoogleServiceDirectoryEndpoint#timeouts}

---

### GoogleServiceDirectoryEndpointTimeouts <a name="GoogleServiceDirectoryEndpointTimeouts" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_endpoint

googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#create GoogleServiceDirectoryEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#delete GoogleServiceDirectoryEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#update GoogleServiceDirectoryEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#create GoogleServiceDirectoryEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#delete GoogleServiceDirectoryEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_service_directory_endpoint#update GoogleServiceDirectoryEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceDirectoryEndpointTimeoutsOutputReference <a name="GoogleServiceDirectoryEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_directory_endpoint

googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleServiceDirectoryEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>]

---



