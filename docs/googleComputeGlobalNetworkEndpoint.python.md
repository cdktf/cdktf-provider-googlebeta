# `googleComputeGlobalNetworkEndpoint` Submodule <a name="`googleComputeGlobalNetworkEndpoint` Submodule" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalNetworkEndpoint <a name="GoogleComputeGlobalNetworkEndpoint" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint google_compute_global_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_network_endpoint

googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_endpoint_group: str,
  port: typing.Union[int, float],
  fqdn: str = None,
  id: str = None,
  ip_address: str = None,
  project: str = None,
  timeouts: GoogleComputeGlobalNetworkEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.globalNetworkEndpointGroup">global_network_endpoint_group</a></code> | <code>str</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#id GoogleComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#project GoogleComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_endpoint_group`<sup>Required</sup> <a name="global_network_endpoint_group" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.globalNetworkEndpointGroup"></a>

- *Type:* str

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#global_network_endpoint_group GoogleComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#port GoogleComputeGlobalNetworkEndpoint#port}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.fqdn"></a>

- *Type:* str

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#fqdn GoogleComputeGlobalNetworkEndpoint#fqdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#id GoogleComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.ipAddress"></a>

- *Type:* str

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#ip_address GoogleComputeGlobalNetworkEndpoint#ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#project GoogleComputeGlobalNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#timeouts GoogleComputeGlobalNetworkEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetFqdn">reset_fqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#create GoogleComputeGlobalNetworkEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#delete GoogleComputeGlobalNetworkEndpoint#delete}.

---

##### `reset_fqdn` <a name="reset_fqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetFqdn"></a>

```python
def reset_fqdn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeGlobalNetworkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_network_endpoint

googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_network_endpoint

googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_network_endpoint

googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_network_endpoint

googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeGlobalNetworkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeGlobalNetworkEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeGlobalNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeGlobalNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference">GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput">global_network_endpoint_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup">global_network_endpoint_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeouts"></a>

```python
timeouts: GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference">GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference</a>

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `global_network_endpoint_group_input`<sup>Optional</sup> <a name="global_network_endpoint_group_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput"></a>

```python
global_network_endpoint_group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeGlobalNetworkEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `global_network_endpoint_group`<sup>Required</sup> <a name="global_network_endpoint_group" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup"></a>

```python
global_network_endpoint_group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalNetworkEndpointConfig <a name="GoogleComputeGlobalNetworkEndpointConfig" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_network_endpoint

googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_endpoint_group: str,
  port: typing.Union[int, float],
  fqdn: str = None,
  id: str = None,
  ip_address: str = None,
  project: str = None,
  timeouts: GoogleComputeGlobalNetworkEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup">global_network_endpoint_group</a></code> | <code>str</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#id GoogleComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#project GoogleComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_endpoint_group`<sup>Required</sup> <a name="global_network_endpoint_group" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup"></a>

```python
global_network_endpoint_group: str
```

- *Type:* str

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#global_network_endpoint_group GoogleComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#port GoogleComputeGlobalNetworkEndpoint#port}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#fqdn GoogleComputeGlobalNetworkEndpoint#fqdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#id GoogleComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#ip_address GoogleComputeGlobalNetworkEndpoint#ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#project GoogleComputeGlobalNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeGlobalNetworkEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#timeouts GoogleComputeGlobalNetworkEndpoint#timeouts}

---

### GoogleComputeGlobalNetworkEndpointTimeouts <a name="GoogleComputeGlobalNetworkEndpointTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_network_endpoint

googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#create GoogleComputeGlobalNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#delete GoogleComputeGlobalNetworkEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#create GoogleComputeGlobalNetworkEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_global_network_endpoint#delete GoogleComputeGlobalNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference <a name="GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_network_endpoint

googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeGlobalNetworkEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeGlobalNetworkEndpoint.GoogleComputeGlobalNetworkEndpointTimeouts">GoogleComputeGlobalNetworkEndpointTimeouts</a>]

---



